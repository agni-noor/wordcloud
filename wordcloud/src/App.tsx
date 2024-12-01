import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import "./App.css";
import Wordcloud from "./components/Wordcloud";
import Form from "./components/Form";
import { Database  } from "./schema";
const words = [
  { text: "React", size: 40 },
  { text: "TypeScript", size: 35 },
  { text: "JavaScript", size: 30 },
  { text: "Frontend", size: 25 },
  { text: "Backend", size: 20 },
  { text: "Node.js", size: 18 },
  { text: "Express.js", size: 22 },
  { text: "Material-UI", size: 28 },
  { text: "FastAPI", size: 26 },
  { text: "MongoDB", size: 24 },
];


const supabase = createClient<Database>( 
  "https://xlpdtfekdtwbaxbwnbxa.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhscGR0ZmVrZHR3YmF4YnduYnhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxNzEwMzgsImV4cCI6MjA0Nzc0NzAzOH0.49LeJJS0r_Afpey859ZpshCnZYlwXYgvCaimw4g5SMs"
);

const {data} = await supabase.from("challenges").select("*")
console.log(data)

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
