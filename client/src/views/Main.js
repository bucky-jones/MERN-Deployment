import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ExamList from '../components/ExamList';
export default () => {
    const [exams, setExams] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/exam')
            .then(res=>{
                console.log("Res data is ",res.data);
                setExams(res.data);
                setLoaded(true);
            });
    },[loaded])
    
    return (
        
        <div className="text-left ">
            <div className="row d-flex ml-1 justify-content-between mr-1">
                <h1>Pet Shelter</h1>
                <p><Link className="text-primary" to ={'/new'}>add a pet to the shelter</Link> </p>
            </div>
            <h3>These are the pets looking for a home?</h3>
           {loaded && <ExamList exam={exams} />}
        </div>
    )
}