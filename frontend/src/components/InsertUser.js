import React, { useState } from 'react';
import axios from 'axios';

function InsertUser() {

    const [fullname, setFullName] = useState("");
    const [age, setAge] = useState("");
    const [grade, setGrade] = useState("");

    const userObj = {
        fullname, age, grade
    }

    function insertUser() {

        axios.post('http://localhost:7000/user/insert', userObj)
            .then((result) => {
                alert(result.data);
            })
            .catch((err) => {
                console.log(err.message);
            })

    }

    return (
        <div>
            <form onSubmit={insertUser}>
                <label>Full Name</label>
                <input type="text" name="fullname" id="fullname" onChange={
                    (e) => {
                        setFullName(e.target.value);
                    }
                } /><br /><br />
                <label>Age</label>
                <input type="text" name="age" id="age" onChange={
                    (e) => {
                        setAge(e.target.value);
                    }
                } /><br /><br />
                <label>Grade</label>
                <input type="text" name="grade" id="grade" onChange={
                    (e) => {
                        setGrade(e.target.value);
                    }
                } /><br /><br />
                <input type="submit" name="submit" value="Insert" />
            </form>

        </div>
    );
}

export default InsertUser;