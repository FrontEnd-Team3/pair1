import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routing";
import UserInfoProvider from "./context/user-info";
import { BootstrapProvider } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BootstrapProvider>
      <UserInfoProvider>
        <RouterProvider router={router} />
      </UserInfoProvider>
    </BootstrapProvider>
  );
}

export default App;
