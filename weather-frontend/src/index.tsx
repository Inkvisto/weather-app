import ReactDOM from 'react-dom';
import './index.css';


import {Provider} from "react-redux"
import store from './redux/store'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './components/App';

//import {getCLS, getFID, getLCP} from 'web-vitals';


ReactDOM.render(
  <BrowserRouter>
    <Provider store = {store}>
      <Routes>
        <Route path="/" element={<App />}/>
        {/*<Route path="/about" element={<SettingsPage/>} />
        <Route path="/settings" element={ <DragAction/>} /> */}
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


