import { Form, FormGroup, Row, Col, CloseButton } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NewToDo() {
    return (
        <Form className="mx-3">
            <Link variant="white" 
                class="btn-close btn-close-white 
                    position-absolute top-0 end-0 mt-3 me-5 
                    border border-dark border-3" to="/" />
            <Row xs="10">
                <Col>
                    <FormGroup controlId="NewTaskForm.TaskName" className="mb-3">
                        <Form.Label className="text-light">Task Name</Form.Label>
                        <Form.Control size="lg" type="input" cols="4" placeholder="Something I will not proctrastinate on" />
                        <Form.Text className="text-muted">A short description of the task</Form.Text>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup controlId="NewTaskForm.TaskOwnerName" className="mb-3">
                        <Form.Label className="text-light">Owner Name</Form.Label>
                        <Form.Select size="lg" aria-label="This is who I am">
                            <option>Who to blame?</option>
                        </Form.Select>
                        <Form.Text className="text-muted">The person we blame for forgetting</Form.Text>
                    </FormGroup>
                </Col>
            </Row>
            <Row xs="10">
                <Col>
                    <FormGroup controlId="NewTaskForm.TaskDescription">
                        <Form.Label className="text-light">Task Description</Form.Label>
                        <Form.Control as="textarea" placeholder="All of the details go here!" rows={6} />
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
                    <button type="button" name="saveTask" id="saveTask" className="btn btn-primary w-100">Save</button>
                </Col>
            </Row>
        </Form>
    );
}