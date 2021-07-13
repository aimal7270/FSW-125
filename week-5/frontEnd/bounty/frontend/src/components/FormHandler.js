import { useState } from "react";

export default function FormHandler({submit, firstName, lastName,type, living, btnText, _id}){
    const initialInputs = {firstName: firstName || '', lastName: lastName || '' , living: living || '', type: type || ''};
    const [inputs, setInputs] = useState(initialInputs);
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(inputs, _id);
        setInputs(initialInputs);
    }
   
    return(
        <form id='form' onSubmit={handleSubmit}>
            <input 
                type='text'
                name='firstName'
                value={inputs.firstName}
                onChange= {handleChange}
                placeholder='First Name'/>
            <input
                type='text'
                name='lastName'
                value={inputs.lastName}
                onChange= {handleChange}
                placeholder='Last Name'/> <br />
          <input 
                type='text'
                name='type'
                value={inputs.type}
                onChange= {handleChange}
                placeholder='Sith or Jedi'/>
            <label><b>Living?</b>
            <input 
                type='text'
                name='living'
                value={inputs.living}
                placeholder='true or false'
                onChange= {handleChange}/>
            </label>
            <button>{btnText}</button>
        </form>
    )
}