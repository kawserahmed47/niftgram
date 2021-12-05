import React from 'react';
import ReactDOM from 'react-dom';


import {BrowserRouter} from 'react-router-dom';
import Page  from './components/pages'


const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Page/>
  </BrowserRouter>,
  rootElement
);



// reportWebVitals();
