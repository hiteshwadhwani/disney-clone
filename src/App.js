import "./styles.css";
import Login from "./components/login";
import Header from "./components/header";
import Home from "./components/Home";
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Detail from "./components/detail"


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path='/' element={<Login/>} />
          <Route exact path='/home' element={<Home/>} />
          <Route exact path='/detail/:id' element={<Detail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}