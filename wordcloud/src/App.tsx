import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import "./App.css";
import Wordcloud from "./components/Wordcloud";
import Form from "./components/Form";




const supabase = createClient(
  "https://xlpdtfekdtwbaxbwnbxa.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhscGR0ZmVrZHR3YmF4YnduYnhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxNzEwMzgsImV4cCI6MjA0Nzc0NzAzOH0.49LeJJS0r_Afpey859ZpshCnZYlwXYgvCaimw4g5SMs"
);

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/wordcloud" element={<Wordcloud />} />
      </Routes>
    </Router>
  );
}

export default App;
