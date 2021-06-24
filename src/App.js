import React from "react";
import ButtonGroup from "./components/ButtonGroup";
import HelloWorld from "./HelloWorld";

import { store } from './store';

const App = () => {
  
  return <div>
    <HelloWorld tech={store.getState().tech} />
    <ButtonGroup technologies={["React", "Elm", "React-Redux"]} />
  </div>
};

export default App;
