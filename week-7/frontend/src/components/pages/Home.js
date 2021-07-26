import InventoryDisplay from '../datamanagment/InventoryDisplay'
import AddForm from '../datamanagment/addForm'
import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Home(){
    const [Inventory, setInventory] = useState([]);

    const getInventory = () => {
        axios.get('/Manage')
            .then(res => setInventory(res.data))
            .catch(err => console.log(err))
    }
    const addBook = (newBook) => {
        axios.post('/Manage', newBook)
            .then(res =>{
                setInventory(previous => [previous, res.data])
            })
            .catch(err => console.log(err))
    };
    const editBook = (bookId, updates) => {
        axios.put(`/Manage/${bookId}`, updates)
            .then(res =>{   
            setInventory( previous => previous.findIndex(oneBook => oneBook._id === bookId))
         })
            .catch(err => console.log(err))
    }
  
    const deleteBook = (bookId) => {
        axios.delete(`/Manage/${bookId}`)
            .then(res =>{
                setInventory(previous => previous.filter(book => book._id !== bookId))
            })
            .catch(err =>console.log(err))
    }

    useEffect(() =>{
        getInventory();
    }, []);
    
    const collection  = Inventory.map(books =>
        <InventoryDisplay
            {...books}
            deleteBook = {deleteBook}
            editBook = {editBook}
            key = {books.Title} />)

    return(
        <div className="head">
            <u><h1>The Bryan University Library</h1></u>
            <h3>Full Catalog</h3>
            <div id="pleaseWork">
                <AddForm 
                    btnText='Catalog'
                    submit={addBook}
                />
            </div>
            <div>
                {collection}
            </div>
        </div>
    )
}