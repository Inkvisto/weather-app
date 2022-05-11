import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import {Provider} from "react-redux"
import store from './redux/store'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import SettingsPage from './components/Settings';
import EnchancedApp from './components/App';
import DragAction from './components/DragAndDrop/DragAction';

//import {getCLS, getFID, getLCP} from 'web-vitals';


ReactDOM.render(
  <BrowserRouter>
  <Provider store = {store}>
  <Routes>
                <Route path="/" element={<EnchancedApp />}/>
        <Route path="/about" element={<SettingsPage/>} />
        <Route path="/settings" element={ <DragAction/>} />
      </Routes>
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


