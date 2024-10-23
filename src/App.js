import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./Screens/HomePage/homePage";
import SignUpPage from "./Screens/SignupPage/signupPage";
import LoginPage from "./Screens/LoginPage/loginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/home" element={<HomePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
