import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignUp from "./components/LoginSignUp/LoginSignUp";
import SignUp from "./components/signUp/signUp";
import Details from './components/details/details';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoginSignUp />} />
        <Route path="/signup" element={<LoginSignUp />} />
        <Route path="/login" element={<SignUp />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
