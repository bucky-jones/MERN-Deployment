import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ExamForm from '../components/ExamForm';
import ErrorExam from '../components/ErrorExam';

export default props => {
    const { id } = props;
    const [exam, setExam] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/exam/' + id)
            .then(res=>{
                console.log("Res data is ",res.data);
                setExam(res.data);
                setLoaded(true); 
            });
    },[])

    const updateExam = exam => {
        axios.put('http://localhost:8000/api/exam/' + id, exam)
            .then(res => {navigate('/')})
             
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
                })
    }
    console.log("Book ID ",exam._id)

    if (typeof exam._id === 'undefined'){
        return (
            <div>
                <ErrorExam/> 
            </div>
        )
    }
    return (
        <div className="container">
            <div className="row d-block text-left bg-white">
            <div className="row d-flex ml-1 justify-content-between mr-1">
                <h1>Pet Shelter</h1>
                <p><Link className="text-primary" to ={'/'}>back to home</Link> </p>
            </div>
            <h3>Edit {exam.name}</h3>
                {errors.map((err, index) => <p className="text-danger" key={index}>{err}</p>)}
                {loaded && (
                    <> 
                        <ExamForm 
                            onSubmitProp={updateExam} 
                            initialName={exam.name} 
                            initialType={exam.type} 
                            initialDescription={exam.description} 
                            initialSkill_One={exam.skill_one} 
                            initialSkill_Two={exam.skill_two} 
                            initialSkill_Three={exam.skill_three} 
                        /> 
                    </>
                )}
            </div> 
        </div>
    )
}