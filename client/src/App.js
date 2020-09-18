import React from 'react';
import logo from './logo.svg';
import { Router } from '@reach/router';
import { Link, navigate } from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './views/Main';
import AddExam from './views/AddExam';
import DetailExam from './views/DetailExam';
import EditExam from './views/EditExam';

function App() {
  return (
    <div className="container ">
      <div className="row border border-dark d-block mt-3">
        <Router >
          <Main path="/"/>
          <AddExam path="/new"/>
          <DetailExam path="/detail/:id"/>
          <EditExam path="/edit/:id"/>
          
        </Router>
      </div>
    </div>
  );
}

export default App;
