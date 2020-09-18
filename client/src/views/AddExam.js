import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ExamForm from '../components/ExamForm';
export default () => {
    const [exams, setExams] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/exam')
            .then(res=>{
                console.log("Res data is ",res.data);
                setExams(res.data);
                setLoaded(true);
            });
    },[loaded])

    const createExam = exam => {
        axios.post('http://localhost:8000/api/exam/new', exam)
            .then(res=>{
                setExams([...exams, res.data]);
                setLoaded(false);
                navigate('/');
            })  
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

    return (
        <div className="container">
            <div className="row d-block text-left bg-white">
            <div className="row d-flex ml-1 justify-content-between mr-1">
                <h1>Pet Shelter</h1>
                <p><Link className="text-primary" to ={'/'}>back to home</Link> </p>
            </div>
            <h3>Know a pet needing a home?</h3>
            {errors.map((err, index) => <p className="text-danger" key={index}>{err}</p>)}
            <ExamForm onSubmitProp={createExam} initialName="" initialType="" initialDescrption="" initialSkill_One="" initialSkill_Two="" initialSkill_Three=""/>
            </div>
        </div>
    )
}