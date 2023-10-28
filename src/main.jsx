import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import { MainApp } from './09-useContext/MainApp';
//import { TodoApp } from './08-useRducer/TodoApp';
// import { Padre } from './07-tarea-memo/Padre';
//import { CallbackHook } from './06-memos/callbackHook';
//import { MemoHook } from './06-memos/MemoHook';
//import { Memorize } from './06-memos/Memorize';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './03-Examples/MultipleCustomHooks';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { HooksApp } from './HooksApp';
// import './08-useRducer/intro-reducer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* //<React.StrictMode> */}
    < MainApp />
  {/*</React.StrictMode> */}
  </BrowserRouter>
)
