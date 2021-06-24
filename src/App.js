import React from "react";
import { useSelector } from 'react-redux'
import ButtonGroup from "./components/ButtonGroup";
import HelloWorld from "./HelloWorld";

const App = () => {
  const tech = useSelector(state => state.tech);
  
  return <div>
    <HelloWorld tech={tech} />
    <ButtonGroup technologies={["React", "Elm", "React-Redux"]} />
  </div>
};

export default App;
