import { Table, Container } from "react-bootstrap";

export default function ToDoList() {
    return(
        <Container fluid="lg">
            <Table variant="dark">
                <thead>
                    <tr>
                        <th className="d-none d-lg-table-cell">ID</th>
                        <th>Name</th>
                        <th className="d-none d-lg-table-cell">Description</th>
                        <th>Delete</th>
                        <th>Edit</th>
                        <th className="d-none d-md-table-cell">Owner</th>
                    </tr>
                </thead>
                <tbody id="tasklist">
                    <tr>
                        <td className="d-none d-lg-table-cell">0</td>
                        <td>Test Task</td>
                        <td className="d-none d-lg-table-cell">This is just a test</td>
                        <td>DeleteMe</td>
                        <td>EditMe</td>
                        <td className="d-none d-md-table-cell">Zack</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}