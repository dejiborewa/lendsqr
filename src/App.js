import "./App.scss";
// import Users from "./pages/users/users";
import Welcome from "./pages/welcome/welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import UserDetails from "./pages/userDetails/userDetails";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-details/:id" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
