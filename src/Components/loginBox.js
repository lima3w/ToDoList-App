import { Button, Form } from 'react-bootstrap';

function LoginBox() {
    return (
        <> 
            <div className="row justify-content-center align-items-center g-2 h-100">
                <div  className="col-3"></div>
                <div  className="col-6">
                    <Form className="justify-content-center align-items-center ">
                        <Form.Group  className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className="col-3"></div>
            </div>
        </>
    );
}

export default LoginBox;