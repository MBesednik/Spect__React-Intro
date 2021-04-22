import React from 'react';
import './Button.scss';
import { useHistory } from "react-router-dom";



export default function Button() {
  const history = useHistory();
  function handleClick() {
    history.push("/event");
  }
  return (
    <button className="Button" type="button" onClick={handleClick}>
      Find out more
    </button>
  );
}


// const Button = ({
//     text
// }) => {
//     return (
//         <button className="Button">{ text }</button>
//     );
// }