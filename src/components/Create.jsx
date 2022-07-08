import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        axios.post(`https://62bb0ca9573ca8f83291b220.mockapi.io/api/p1/DataServer`, {
            firstName,
            lastName,
            checkbox
        })
    }


    return (
        
        <div>
            <Form className="create-form">
                <Form.Field >
                    <label className='name_label'>First Name</label>
                        <div>
                            <input className='name_input' onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                </Form.Field>
                <Form.Field>
                    <label className='name_label'>Last Name</label>
                        <div>
                            <input className='name_input'  onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Link to='/Read'>
                <Button className='formButton' onClick={postData} type='submit'>Submit</Button>
                </Link>
            </Form>
        </div>
    )
}