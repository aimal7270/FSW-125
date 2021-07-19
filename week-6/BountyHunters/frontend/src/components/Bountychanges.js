import { useState } from "react";
import FormHandler from "./FormHandler";
import CloseButton from 'react-bootstrap/CloseButton'

export default function Bounty({firstName, lastName, living , type, _id, editBounty, deleteBounty}){
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className='bounty'>
            {!editToggle ?
            <div id="group">
            <h2 id="fullName">Bounty: {firstName} {lastName} </h2>
            <h4>Living: {living + ''}</h4>
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
            </div>
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
                <CloseButton onClick={() => setEditToggle(prevToggle => !prevToggle)}/>
    
            </>
            }  
        </div>   
    )
}