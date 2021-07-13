import { useState } from "react";
import FormHandler from "./FormHandler";

export default function Bounty({firstName, lastName, living , type, _id, editBounty, deleteBounty}){
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className='bounty'>
            {!editToggle ?
            <>
            <h1 id="fullName">Bounty: {firstName} {lastName} </h1>
            <h2>Living: {living + ''}</h2>
            <p>Affiliation: {type}</p>
            <button 
                onClick= {() => deleteBounty(_id)} 
                className='deleteBtn'>
                Delete
            </button>
            <button 
                onClick={() => setEditToggle(prevToggle => !prevToggle)} 
                className='editBtn'>
                Edit
            </button>
            </>
            :
            <>
            <FormHandler
                firstName={firstName}
                lastName={lastName}
                living={living}
                type = {type}
                _id = {_id}
                btnText = 'Submit Edit'
                submit={editBounty} 
                
                />
                <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
            </>
            }  
        </div>   
    )
}