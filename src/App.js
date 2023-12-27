import "./App.css";
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import Apps from "./Apps";
import Login from "./Login";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Apps />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
