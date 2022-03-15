import './App.css';
import { BrowserRouter as Router, Routes , Route, Link } from "react-router-dom";
import Login from './Components/Login';
import Home from "./Components/Home";
import Header from "./Components/Header";
import { useEffect } from 'react';
import { getUserAuth } from './Actions';
import { connect } from 'react-redux';


function App(props) {
  
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/home" element={<><Header /><Home /></>} />

        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth())
});

export default connect(mapDispatchToProps, mapDispatchToProps)(App)

