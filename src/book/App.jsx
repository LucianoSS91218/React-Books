import Home from "./pages/Home";
import FormSignup from "./pages/FormSignup";
import BookDetail from "./pages/bookDetail";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<FormSignup />} />
          <Route path="view/:bookId" element={<BookDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
