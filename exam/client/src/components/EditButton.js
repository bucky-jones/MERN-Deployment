import React from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
export default props => {
    const { examId, successCallback } = props;
    const editExam = e => {
        navigate('/edit/' + examId );
    }
    return (
        <button onClick={editExam} className="btn btn-primary border border-dark ml-2">Edit</button>
    )
}