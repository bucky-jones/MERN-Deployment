import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default props => {
    const { examId, successCallback } = props;

    const [exam, setExam] = useState({})
    useEffect(() => {
        console.log("Props ID", props.id)
        axios.get("http://localhost:8000/api/exam/" + props.id)
            
            .then(res => setExam(res.data))
            console.log("Props is ",props);
            console.log("The product is ",exam);
    }, [])
    const deleteExam = e => {
        axios.delete('http://localhost:8000/api/exam/' + examId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deleteExam} className="btn btn-danger border border-dark ml-2">Adopt {exam.name}</button>
    )
}