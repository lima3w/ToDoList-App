import { 
  Route, 
  createRoutesFromChildren, 
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import 'react-bootstrap'
import ToDoList from "./Components/todolist"
import NewToDo from "./Components/newtodo"
import Loading from "./Components/loading"
import NavBar from "./Components/navbar"

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route exact path="/" name="Home" element={<ToDoList />} />
        <Route exact path="/newtodo" name="New ToDo" element={<NewToDo />} />
        <Route exact path="/loading" name="Loading" element={<Loading />} />
      </>
    )
  );
  return (
    <>
      <NavBar class="mx-3" />
      <RouterProvider router={router} fallbackElement={<Loading />} class="mx-3" /> 
    </> 
  );  
}

export default App;
