import { Table, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
// const axios = require('axios');
import axios from 'axios'
import { Link } from "react-router-dom";

const client = axios.create({
    baseURL: "http://localhost:4000/api"
})

export default function ToDoList() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        client.get('/task')
            .then((resp) => {
                setTasks(resp.data)
            })
            .catch((err) => {
                console.error(err)
            })
    })

    return(
        <Container fluid="lg">
            <Table variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="d-none d-lg-table-cell">Description</th>
                        <th>Delete</th>
                        <th>Edit</th>
                        <th className="d-none d-md-table-cell">Owner</th>
                    </tr>
                </thead>
                <tbody id="tasklist">
                    {tasks.map((task) => {
                        return (
                            <tr key={task._id} >
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>Delete</td>
                                <td>Edit</td>
                                <td>{task.user[0].name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    );
}

