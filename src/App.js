import { Container } from "react-bootstrap";
import LoginBox from "./Components/loginBox.js";
import Navbar from "./Components/navbar.js"
import 'react-bootstrap'

function App() {

  return (
      <Container fluid className="vh-100">
        <Navbar />
        <LoginBox />
      </Container>
  );
}

export default App;
