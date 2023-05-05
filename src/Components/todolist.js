import { Table, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import configData from "../config.json"
import axios from 'axios'
import "./img/btn-edit.css"
import { useNavigate } from "react-router-dom";

const backend_url = configData.BACKEND_URL || "localhost"
const backend_port = configData.BACKEND_PORT || 4000
const backend_root = configData.BACKEND_ROOT || "/"
const backend_protocol = configData.BACKEND_PROTOCOL || "http"

const backend_string = backend_protocol + "://" + backend_url + ":" + backend_port + backend_root

const client = axios.create({
    baseURL: backend_string
})

export default function ToDoList() {
    const [tasks, setTasks] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        client.get('/task')
            .then((resp) => {
                setTasks(resp.data)
                return
            })
            .catch((err) => {
                console.error(err.message)
            })
        },
        []
    )

    const deleteTask = (event) => {
        event.preventDefault()
    
        client.delete(
            '/task/' + event.target.dataset.id,
        )
        .then((resp) => {
            console.log(resp)
            setTasks(tasks.filter(t => t._id !== event.target.dataset.id))
        })
        .catch((err) => {
            console.log(err);
        })
        return false
    }

    const editPage = (event) => {
        navigate('/edittodo/'+event.target.dataset.id)
    }

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
                            <tr key={task._id}>
                                <td>{task.title}</td>
                                <td className="d-none d-lg-table-cell">{task.description}</td>
                                <td><button className="btn-close btn-close-white border border-dark" onClick={deleteTask} data-id={task._id}></button></td>
                                <td><button className="btn-close border border-light" id="btn-edit" onClick={editPage} data-id={task._id}></button>
                                </td>
                                <td className="d-none d-md-table-cell">{task.user[0].name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    );
}

