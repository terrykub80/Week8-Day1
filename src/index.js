import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from './App';
import Navbar from './components/Navbar';
import Background from './components/Background';


// const background = ReactDOM.createRoot(document.getElementById('background'));
// background.render(
//     <React.StrictMode>
//         <Background />
//     </React.StrictMode>
// );


const nav = ReactDOM.createRoot(document.getElementById('nav'));
nav.render(
    <React.StrictMode>
        <Navbar />
    </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <TodoApp />
    </React.StrictMode>
);