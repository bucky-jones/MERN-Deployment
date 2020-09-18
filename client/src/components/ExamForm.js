import React, { useState } from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
export default props => {
    //keep track of what is being typed via useState hook
    const { initialName, initialType, initialDescription, initialSkill_One, initialSkill_Two, initialSkill_Three, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [type, setType] = useState(initialType);
    const [description, setDescription] = useState(initialDescription);
    const [skill_one, setSkill_One] = useState(initialSkill_One);
    const [skill_two, setSkill_Two] = useState(initialSkill_Two);
    const [skill_three, setSkill_Three] = useState(initialSkill_Three);

    const onClickHandler2 = event => {
        event.preventDefault();
        navigate('/');
    }
    
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        onSubmitProp({name, type, description, skill_one, skill_two, skill_three})
    }
    
    return (
        <div className="container bg-white">
            <div className="row d-block border border-dark text-left bg-white" >
                <form className="mx-auto" onSubmit={onSubmitHandler}>
                    <p>
                        <label>Name: </label><br/>
                        <input type="text" name="name" value={name} onChange = {(e)=>setName(e.target.value)}/>
                    </p>
                    <p>
                        <label>Type: </label><br/>
                        <input type="text" name="type" value={type} onChange = {(e)=>setType(e.target.value)}/>
                    </p>
                    <p>
                        <label>Description: </label><br/>
                        <input type="text" name="description" value={description} onChange = {(e)=>setDescription(e.target.value)}/>
                    </p>
                    <p>Skills Optional: </p>
                    <p>
                        <label>Skill One: </label><br/>
                        <input type="text" name="skill_one" value={skill_one} onChange = {(e)=>setSkill_One(e.target.value)}/>
                    </p>
                    <p>
                        <label>Skill Two: </label><br/>
                        <input type="text" name="skill_two" value={skill_two} onChange = {(e)=>setSkill_Two(e.target.value)}/>
                    </p>
                    <p>
                        <label>Skill Three: </label><br/>
                        <input type="text" name="skill_three" value={skill_three} onChange = {(e)=>setSkill_Three(e.target.value)}/>
                    </p>
                    
                    <input type="submit" value="Add Pet" class="btn btn-primary border border-dark ml-2"/>
                </form>
            </div>
        </div>
    )
}