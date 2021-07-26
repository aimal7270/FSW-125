import axios from "axios"
import {useState, useEffect} from 'react'
import InventoryDisplay from '../datamanagment/InventoryDisplay'

export default function BookClub(){
    const [Inventory, setInventory] = useState([]);
    const getInventory = () => {
        axios.get('/Manage')
            .then(res => setInventory(res.data))
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


   
        const randomBook = Math.floor(Math.random() * collection.length)
                console.log(randomBook)
            
        console.log(collection[randomBook])    



    return(
        <div >
            <h1>Our Reccomendation of the Day!!!</h1>
            {collection[randomBook]}
        </div>
    )
}