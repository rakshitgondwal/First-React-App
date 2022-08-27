import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import "./components/styles.css"
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);