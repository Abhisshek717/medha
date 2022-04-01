import './App.css';
import {Card,Row,Col,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Navbars';
import Carsoules from './Carsoules';
import CardLists from './CardLists';
import CardOne from './CardOne';
import CardTwo from './CardTow';
import CardThree from './CardThree';
import CardFour from './CardFour';
import CardFive from './CardFive';
import CardSix from './CardSix';
import Home from './Home';
import {Routes,Route} from 'react-router-dom';
/* import Nomatchs from './Nomatchs'; */
function App() {
  return (
    <div className="App ">
        <Navbars/> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cardone" element={<CardOne/>}/>
          <Route path="/cardtwo" element={<CardTwo/>}/>
          <Route path="/cardthree" element={<CardThree/>}/>
          <Route path="/cardfour" element={<CardFour/>}/>
          <Route path="/cardfive" element={<CardFive/>}/>
          <Route path="/cardsix" element={<CardSix/>}/>
          {/* <Route path="/*" element={<Nomatchs/>}/> */}
        </Routes>
    </div>
  );
}

export default App;
