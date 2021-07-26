import {useState} from "react";


export default function AddForm({Title, Author, CheckedOut, _id, submit, btnText, SeriesOrder, Genre}){
    const initialInputs = {Title: Title || '', Author: Author || '', CheckedOut: CheckedOut+'' || '', SeriesOrder: SeriesOrder || '', Genre: Genre};
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
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='Title'
                value={inputs.Title}
                onChange= {handleChange}
                placeholder='Title'/>

            <input 
                type='text'
                name='Author'
                value={inputs.Author}
                onChange= {handleChange}
                placeholder='Author'/>

            <input 
                type='text'
                name='CheckedOut'
                value={inputs.CheckedOut + ''}
                onChange= {handleChange}
                placeholder='CheckedOut?'/>

            <input 
                type='text'
                name='SeriesOrder'
                value={inputs.SeriesOrder}
                onChange= {handleChange}
                placeholder='SeriesOrder?'/>


            <button>{btnText}</button>
        </form>
)
}