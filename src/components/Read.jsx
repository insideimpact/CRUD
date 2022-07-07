import { Table, Button } from 'semantic-ui-react';
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function Read() {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`https://62bb0ca9573ca8f83291b220.mockapi.io/api/p1/DataServer`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    const onDelete = (id) => {
     axios.delete(`https://62bb0ca9573ca8f83291b220.mockapi.io/api/p1/DataServer/${id}`).then(() => {
        getData();
        })
    }


    const getData = () => {
        axios.get(`https://62bb0ca9573ca8f83291b220.mockapi.io/api/p1/DataServer`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }



    return (
        <div>
            <Table singleLine>
                <Table.Header className='TableHeader'>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body className='TableBody'>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                        <Table.Cell>{data.firstName}</Table.Cell>
                        <Table.Cell>{data.lastName}</Table.Cell>
                        <Table.Cell>{data.checkbox ? 'Yes' : 'No'}</Table.Cell>
                        <Table.Cell>
                            <Link to='/Update'>
                                <button onClick={() => setData(data)}>Update</button>
                            </Link>
                        </Table.Cell>
                        <Table.Cell>
                            <Button onClick={() => onDelete(data.id)}>Delete</Button>
                        </Table.Cell>
                    </Table.Row>
                        )})}
                </Table.Body>
            </Table>
        </div>
    )
}