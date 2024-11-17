import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css'
import words from "../assets/words"
  

const Wordcloud = () => {
  return (
    <div>
        <ReactWordcloud words={words} />
    </div>
  )
}

export default Wordcloud