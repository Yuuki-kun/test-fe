import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Apps from "./Apps";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter basename="/test-fe">
      <Routes>
        <Route path="/">
          <Route index element={<Apps />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
