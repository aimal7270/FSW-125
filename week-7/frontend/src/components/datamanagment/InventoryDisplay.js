import React from "react";

export default function InventoryDisplay({Title, _id, editBook, Genre, Author, CheckedOut, deleteBook, SeriesOrder}){

    function series(){
        if(SeriesOrder !== 0){
            return "Book " + SeriesOrder + " in Series"
        }
    }

    const  genreList= Genre.map(types => <li key={types}>{types}</li>);

return(

    <div id="display" >
        <h2>{Title}</h2>
        <h4>By: {Author}</h4>
        <p> {series()}</p>
        <p>{genreList}</p>
        <p>Checked Out: {CheckedOut + ''}
            <input
                id={_id}
                type= 'checkbox'
                onChange = {() => editBook(_id)}
                checked = {CheckedOut} />
        </p>
        <button 
            onClick= {() => deleteBook(_id)} 
            className='deleteBtn'>
            Delete
        </button>
               
    </div>
)}
