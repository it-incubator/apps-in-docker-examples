import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI || '';

// Connect to MongoDB
mongoose
    .connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Define a simple Mongoose model
const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
});

const Item = mongoose.model('Item', itemSchema);

// CRUD Routes
app.get('/api/items', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

app.get('/api/items/:id', async (req, res) => {
    const item = await Item.findById(req.params.id);
    item ? res.json(item) : res.status(404).json({ message: 'Item not found' });
});

app.post('/api/items', async (req, res) => {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
});

app.put('/api/items/:id', async (req, res) => {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    updatedItem ? res.json(updatedItem) : res.status(404).json({ message: 'Item not found' });
});

app.delete('/api/items/:id', async (req, res) => {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    deletedItem ? res.json(deletedItem) : res.status(404).json({ message: 'Item not found' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
