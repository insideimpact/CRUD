import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Update() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [id, setID] = useState(null);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
    }, []);


    const updateAPIData = () => {
        axios.put(`https://62bb0ca9573ca8f83291b220.mockapi.io/api/p1/DataServer/${id}`, {
            firstName,
             lastName,
             checkbox
        })
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label className='name_label'>First Name</label>
                        <div>
                            <input className='name_input' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                </Form.Field>
                <Form.Field>
                    <label className='name_label'>Last Name</label>
                        <div>
                            <input className='name_input' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Link to='/Read'>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
                </Link>
            </Form>
        </div>
    )
}