
import './App.css';
import Root from './Pages/Root';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import { UserAuthentication } from './Components/UserAuthentication(ContextApi)';
import ErrorPage from './Pages/ErrorPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true
      },
      {
        path: "/signup",
        element: <SignUp />,

      },
      {
        path: "/login",
        element: <Login />,

      },
    ],
  },
]);
function App() {

  return (
    <UserAuthentication>
      <RouterProvider router={router} />
    </UserAuthentication>
  )
}

export default App;

