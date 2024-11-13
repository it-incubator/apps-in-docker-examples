import {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [items, setItems] = useState([])

    const fetchItems = () => {
        fetch('http://localhost:5001/api/items')
            .then(response => response.json())
            .then(data => {
                setItems(data)
                console.log('Success:', data)
            })
            .catch(error => console.error('Error:', error));
    }

    const createItemSubmitHandler = async (event: any) => {
        try {
            event.preventDefault();
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData.entries());
            await fetch('http://localhost:5001/api/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            fetchItems();
        } catch(error) {
            alert(error)
        }
    }

    useEffect(() => {
        fetchItems()
    }, [])

    return (
        <>
            <div>
                <form onSubmit={createItemSubmitHandler}>
                    <div>
                        <input name={'name'}/>
                    </div>
                    <div>
                        <input name={'description'}/>
                    </div>
                    <div>
                        <button>Create</button>
                    </div>
                </form>


                {items.length === 0 && <span>no items</span>}
                {
                    items.map((i: any, index) => {
                        return <div key={index}>
                            <div>{i.name}</div>
                            <div>{i.description}</div>
                            <hr/>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default App
