import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Update() {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [ID, setID] = useState(null);

    const sendDataToAPI = () => {
        axios.put(`https://63b2c8ce5e490925c52189cc.mockapi.io/crud/${ID}`, {
            firstName,
            lastName
        }).then(() => {
            navigate('/read')
        })
        
    }

    useEffect(() => {
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setID(localStorage.getItem('ID'))
    }, [])

    return (
        <div>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input name="fname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        name="lname"
                        value={lastName}
                        placeholder='Last Name'
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Field>
                <Button type='submit' onClick={sendDataToAPI}>Update</Button>
            </Form>
        </div>
    )
}