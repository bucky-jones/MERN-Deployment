import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

export default props => {
    const [exam, setExam] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/exam')
            .then(res => setExam(res.data));
    }, [])
    return (
        <div className="container">
            <div className="row d-block text-left bg-white">
                <table className="table table-striped table-bordered border bg-secondary border-dark table-hover table-sm mt-2">
                    <thead className="thead-dark text-center border border-dark">
                        <tr className="border border-dark ">
                            <th>Name</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    
                        {exam.map((exam, idx)=>{
                            return <tr key={idx} >
                                <td className="text-light">
                                    <p>{exam.name}</p>
                                </td>
                                <td className="text-light">
                                    <p>{exam.type}</p>
                                </td>
                                <td className="text-center justify-content-center d-flex">
                                    <p className="text-primary"><Link className="text-light" to={"/detail/" + exam._id }>Details </Link></p>
                                    <p> | </p>
                                    <p className=" text-primary"><Link className="text-light" to={"/edit/" + exam._id }> Edit</Link></p>
                                </td>
                            </tr>
                        })}
                    
                </table>
            </div>
        </div>
    )
}