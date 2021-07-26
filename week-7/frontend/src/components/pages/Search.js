import InventoryDisplay from "../datamanagment/InventoryDisplay";
import { useState } from "react";
import axios from "axios";


export default function Search(){
    const [Inventory, setInventory] = useState([]);

    const getByAuthor = (query) => {
        const encodeQuery = encodeURIComponent(query);
        axios.get(`/Search/byAuthor?Author=${encodeQuery}`)
            .then(res => {
                setInventory(res.data)
            if(res.data.length === 0){
                return alert('Check Spelling')
            }}
            )
            .catch(err => console.log(err))
    }

    const handleAuthor = (e) => {
        e.preventDefault()
        getByAuthor(e.target.query.value)
        console.log(e.target.query.value)
    }

    const getByTitle = (query) => {
        const encodeQuery = encodeURIComponent(query);
        axios.get(`/Search/byTitle?Title=${encodeQuery}`)
            .then(res => {
                setInventory(res.data)
            if(res.data.length === 0){
                return alert('Check Spelling')
            }}
            )
            .catch(err => console.log(err))
    }
    const handleTitle = (e) => {
        e.preventDefault()
        getByTitle(e.target.query.value)
        console.log(e.target.query.value)
    }
    const getByGenre = (query) => {
        const encodeQuery = encodeURIComponent(query);
        axios.get(`/Search/byGenre?Genre=${encodeQuery}`)
            .then(res => {
                setInventory(res.data)
            if(res.data.length === 0){
                return alert('Check Spelling')
            }}
            )
            .catch(err => console.log(err))
    }
    const handleGenre = (e) => {
        e.preventDefault()
        getByGenre(e.target.query.value)
        console.log(e.target.query.value)
    }
    const handleCheckOut = (e) => {
        e.preventDefault()
        axios.get('/Search/Available/')
            .then(res => setInventory(res.data))
            .catch(err => console.log(err))
    }
    
    const editBook = (bookId) => {
        axios.put(`/Manage/${bookId}`)
            .then(res =>{
                let updateBook = [...Inventory]
                let index = updateBook.findIndex( item => item._id === res);
                let updatedBook = {...updateBook[index]}
                if(updatedBook.CheckedOut){
                    updatedBook.CheckedOut = false
                } 
                else{
                    updatedBook.CheckedOut = true
                }
                updateBook[index] = updatedBook
                setInventory(updateBook)
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

    const collection  = Inventory.map(books =>
        <InventoryDisplay
            {...books}
            deleteBook = {deleteBook}
            editBook = {editBook}
            key = {books.Title} />)

    return(
        <div id="all">
              <h1>Search Catalog</h1>
              <form onSubmit={handleTitle}>
                <label>Search by Title</label>
                  <input type ="text" name='query'  />
                  <button type="submit"> Search </button>
              </form>
              <p>Examples: The Music of Bees, Point Blank, The Sun and Her Flowers  </p>
              <form onSubmit={handleAuthor}>
                <label>Search by Author</label>
                  <input type ="text" name='query'  />
                  <button type="submit" > Search </button>
              </form>
              <p>Examples: Jessica Brody, Elizabeth Gilbert, Anthony Horowitz
              </p>
              <form onSubmit={handleGenre}>
                <label>Search by Genre</label>
                  <input type ="text" name='query' />
                  <button type="submit" > Search </button>
              </form>
              <p>Examples: Fantasy, Young Adult, Self-Help, Poetry, Non-Fiction, Romance</p>
              <form onSubmit={handleCheckOut}>
                <label>Currently Available for Check Out</label>
                  <button type="submit" > Search </button>
              </form>
          <div>
              {collection}
          </div>
        </div>
    )
}