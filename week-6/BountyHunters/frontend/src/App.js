import { useState, useEffect } from "react";
import axios from "axios";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bounty from "./components/Bountychanges";
import FormHandler from "./components/FormHandler";

export default function App(){
    const [bounties, setBounty] = useState([]);

    const getBounty = () => {
        axios.get('/bounty')
            .then(res => setBounty(res.data))
            .catch(err => console.log(err))
    }

    const addBounty = (newBounty) => {
        axios.post('/bounty', newBounty)
            .then(res =>{
                setBounty(previous => [...previous, res.data])
            })
            .catch(err => console.log(err))
    };

    const deleteBounty = (bountyId) => {
        axios.delete(`/bounty/${bountyId}`)
            .then(res =>{
                setBounty(previous => previous.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))
    };

    const editBounty = (updates, bountyId) =>{
        axios.put(`/bounty/${bountyId}`, updates)
            .then(res =>{
                setBounty(previous => previous.map(bounty => bounty._id !== bountyId ? bounty: res.data))
            })
            .catch(err => console.log(err))
    }
    useEffect(() =>{
        getBounty();
    }, []);


    const bountyList = bounties.map(bounty =>
        <Bounty
            {...bounty}
            editBounty = {editBounty}
            deleteBounty = {deleteBounty}
            key={bounty.firstName}/>)
    
    return(
        <div className='container'>
            <u><h1 id="title">Bounty List</h1></u>
            <FormHandler
                btnText='Add'
                submit={addBounty}/>
            {bountyList}
        </div>
    );
}