import React from 'react';
import { Board } from './Board.jsx';
import { Header } from './Header.jsx';
import boxes from "../api/boxes.js";
import { Box } from "./Box.jsx";

// export const App = () => (
//   <div>    
//     <Header />
//     <Board />
//   </div>
// );

export const App = () => {
  const [squares, setSquares] = React.useState(boxes)
 
  
  const squareElements = squares.map(square => (
      <Box on={square.on} key={square.id} />
  ))
  


  return (
  <div>    
    <Header />
    {squareElements}
  </div>
)
}

