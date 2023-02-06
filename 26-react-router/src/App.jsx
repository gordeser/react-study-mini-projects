import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";
import MainLayout from "./layouts/MainLayout";

function App() {
  return <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
}

export default App;
