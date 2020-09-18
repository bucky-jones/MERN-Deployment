import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ErrorExam from '../components/ErrorExam';
import DeleteButton from '../components/DeleteButton';
import EditButton from '../components/EditButton';

export default props => {
    const [exam, setExam] = useState({})
    useEffect(() => {
        console.log("Props ID", props.id)
        axios.get("http://localhost:8000/api/exam/" + props.id)
            
            .then(res => setExam(res.data))
            console.log("Props is ",props);
            console.log("The product is ",exam);
    }, [])

    const removeFromDom = examId => {
        console.log("Removing from DOM")
        axios.get('http://localhost:8000/api/exam')
            .then(res => setExam(res.data));
            navigate('/');
        
    }

    if (typeof exam._id === 'undefined'){
        return (
            <div>
                <ErrorExam/> 
            </div>
        )
    }
    return (
        <div className="container">
            
            <div className="row d-flex ml-1 justify-content-between mr-1">
                <h1>Pet Shelter</h1>
                <p><Link className="text-primary" to ={'/'}>back to home</Link> </p>
            </div>
            <div className="row d-flex ml-1 justify-content-between mr-1">
                <h3>Details about: {exam.name}</h3>
                <DeleteButton examId={exam._id} successCallback={removeFromDom}/>
            </div>
            <div className="row d-block border border-dark text-left ml-1 bg-white">
                <p>Type: {exam.type}</p>
                <p>Description: {exam.description}</p>
                <ul><p>Skills: </p>
                    <li>{exam.skill_one}</li>
                    <li>{exam.skill_two}</li>
                    <li>{exam.skill_three}</li>
                </ul> 
            </div>
        </div>
    )
}