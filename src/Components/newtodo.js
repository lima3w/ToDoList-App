import { Form, FormGroup, Row, Col, Container } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import configData from "../config.json"
import axios from 'axios'


const backend_url = configData.BACKEND_URL || "localhost"
const backend_port = configData.BACKEND_PORT || 4000
const backend_root = configData.BACKEND_ROOT || "/"
const backend_protocol = configData.BACKEND_PROTOCOL || "http"

const backend_string = backend_protocol + "://" + backend_url + ":" + backend_port + backend_root

const client = axios.create({
    baseURL: backend_string
})

export default function NewToDo() {
    const alertBox = document.getElementById("alertbox");
    const params = useParams();
    const navigate = useNavigate();
    const [users, setUsers] = useState([])
    const [tasks, setTasks] = useState({
        title: "",
        user_id: "",
        description: ""
    })

    const handleInput = (event) => {
        // console.log(event.target.name + ": " + event.target.value)
        setTasks({...tasks, [event.target.name]: event.target.value})
    }

    async function handleSubmit(event) {
        event.preventDefault()
        if(params.id) {
            await tasks.save()
            // client.patch(
            //     '/task/'+params.id,
            //     {tasks}
            // )
            // .then((resp) => {
            //     navigate('/')
            // })
            // .catch((err) => {
            //     console.log(err);
            //     alertBox.innerHTML = "HI"
            // })
        }
        else {
            client.post(
                '/task/',
                {tasks}
            )
            .then((resp) => {
                // console.log(resp)
            })
            .catch((err) => {
                console.log(err);
                alertBox.innerHTML = "HI"
                // '<div class="alert alert-primary alert-dismissible fade show" role="alert">' + 
                //         '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
                //         '<strong>Holy guacamole!</strong> You should check in on some of those fields.' + 
                //         'Hint: {err}' + 
                //     '</div>'
            })
        }
        return false
    }

    useEffect(() => {
        if(params.id){
            client.get('/task/'+params.id)
                .then((resp) => {
                    setTasks(resp.data)
                    return
                })
                .catch((err) => {
                    console.error(err.message)
                })
            }},
            []
    )
    

    useEffect(() => {
        client.get('/user')
            .then((resp) => {
                setUsers(resp.data)
            })
            .catch((err) => {
                console.error(err)
            })
        },
        []
    )


    return (
        <Container fluid="lg">
        <Link variant="white" 
            className="btn-close btn-close-white 
                position-absolute top-0 end-0 d-sm-none d-lg-block mt-3 me-5 
                border border-dark border-3" to="/" />
        <Form className="mx-3" onSubmit={handleSubmit}>
            <Row xs="10">
                <Col>
                    <FormGroup controlId="NewTaskForm.TaskName" className="mb-3">
                        <Form.Label className="text-light">Task Name</Form.Label>
                        <Form.Control size="lg" type="input" cols="4" name="title" onChange={handleInput} placeholder="Something I will not proctrastinate on" defaultValue={tasks.title} />
                        <Form.Text className="text-muted">A short description of the task</Form.Text>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup controlId="NewTaskForm.TaskOwnerName" className="mb-3">
                        <Form.Label className="text-light">Owner Name</Form.Label>
                        <Form.Select size="lg" name="user_id" defaultValue={tasks.user_id || "---"} onChange={handleInput} aria-label="This is who I am" >
                            <option disabled value="---">Who to blame?</option>
                            {users.map((user) => {
                                return (<option key={user._id} value={user._id}>{user.name}</option>)
                            })}
                        </Form.Select>
                        <Form.Text className="text-muted">The person we blame for forgetting</Form.Text>
                    </FormGroup>
                </Col>
            </Row>
            <Row xs="10">
                <Col>
                    <FormGroup controlId="NewTaskForm.TaskDescription">
                        <Form.Label className="text-light">Task Description</Form.Label>
                        <Form.Control as="textarea" onChange={handleInput} name="description" placeholder="All of the details go here!" rows={6} defaultValue={tasks.description} />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup controlId="NewTaskForm.DueDate">
                        <Form.Label className="text-light">Due Date</Form.Label>
                        <Form.Control type="date" placeholder="Don't ignore this" />
                    </FormGroup>
                </Col>
            </Row>
            <Row className="mt-3 justify-content-md-center" xs="10">
                <Col className="justify-content-md-center">
                    <FormGroup controlId="NewTaskForm.SubmitBtn">
                        <button type="submit" id="saveTask" className="btn btn-primary w-100">Save</button>
                    </FormGroup>                    
                </Col>
            </Row>
        </Form>
        <div id="alertbox"></div>
        </Container>
    );
}