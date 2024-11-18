import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Wordcloud from "./components/Wordcloud";
import Form from "./components/Form";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/wordcloud" element={<Wordcloud />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
