import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import { useParams } from 'react-router';

const Word = (props) => {
  const { word } = useParams();

    if(isNaN(word)){
      return(
          <h1>The word is {word} </h1>);
    }
    return (
      <h1>The number is {word} </h1>);
   
};


const Colorword = (props) => {
  const { word } = useParams();
  const { color1 } = useParams();
  const { color2} = useParams();

  
  return(
    <div>
    <h1 style= {{color: color1, backgroundColor: color2 }}>The word is {word}  </h1>
    </div>
  );
}

const Numberyo = (props) =>{
  const { number } = useParams();


  return(
    <h1>The number is {number}</h1>
  )

}

const HomePage = ()=>{
  return(
    <legend>Welcome!</legend>



  )
}

const AboutPage = ()=>{
  return(
    <legend>AboutPage component</legend>


  )
}



function App() {
  return (
    
    <div className="App">
      <h1>Routing!</h1>
        <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/:word" element ={<Word />} />
            <Route path="/:word/:color1/:color2" element ={<Colorword />} />
            
        </Routes>
      


    </div>
  );
}

export default App;
