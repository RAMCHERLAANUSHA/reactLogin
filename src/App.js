import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginSignUp from "./components/LoginSignUp/LoginSignUp";
import signUp from "./components/signUp/signUp";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup\" exact component={LoginSignUp} />
          <Route path="/login" component={signUp} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
