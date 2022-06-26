import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ViewUser() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:7000/user')
            .then((res) => {
                setUser(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            })
    }, [])

    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <td>Full Name</td>
                        <td>Age</td>
                        <td>Grade</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((value, key) => {
                            return (
                                <tr>
                                    <td>{value.fullname}</td>
                                    <td>{value.age}</td>
                                    <td>{value.grade}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ViewUser;