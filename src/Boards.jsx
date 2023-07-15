import { useState } from "react";

const Board = ({boards, columns, setColumns}) => {
   const [draggedItem, setDraggedItem] = useState(null);
   const [isDragging, setIsDragging] = useState(false);

   const handleDragStart = (e, column) => {
     setDraggedItem(column);
     setIsDragging(true);
   };
 
   const handleDragOver = (e) => {
     e.preventDefault();
   };
 
   const handleDrop = (e, targetBoardId) => {
     e.preventDefault();
 
     // Update the column's boardId to the target board's id
     const updatedColumns = columns.map(column => {
       if (column._id === draggedItem._id) {
         return { ...column, boardId: targetBoardId };
       }
       return column;
     });
 
     setColumns(updatedColumns);
     setIsDragging(false);
     setDraggedItem(null);
   };
 
   return (
     <div>
       {boards.map(board => (
         <div key={board._id}>
           <h2>{board.title}</h2>
           <ul>
             {columns
               .filter(column => column.boardId === board._id)
               .map(column => (
                 <li
                   key={column._id}
                   draggable={!isDragging}
                   onDragStart={(e) => handleDragStart(e, column)}
                   onDragOver={handleDragOver}
                   onDrop={(e) => handleDrop(e, board._id)}
                 >
                   {column.title}
                 </li>
               ))}
           </ul>
         </div>
       ))}
     </div>
   );
 };
 
 export default Board