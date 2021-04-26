import React from 'react';
import { useHistory } from "react-router-dom";
import { Button as ButtonStyle} from '../../lib/style/generalStyles';



export default function Button() {
  const history = useHistory();
  function handleClick() {
    history.push("/event");
  }
  return (
    <ButtonStyle onClick={handleClick}>
      Find out more
    </ButtonStyle>
  );
}


// const Button = ({
//     text
// }) => {
//     return (
//         <button className="Button">{ text }</button>
//     );
// }