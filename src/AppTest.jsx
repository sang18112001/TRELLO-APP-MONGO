import React, { useEffect, useState } from 'react';
import trelloAPI from './api/trelloAPI';

const AppTest = () => {
  const [boards, setBoards] = useState([
    // boards data
  ]);

  const [columns, setColumns] = useState([
    // columns data
  ]);
  useEffect(() => {
    trelloAPI.getAllTasks().then((data) => setColumns(data));
    trelloAPI.getAllCards().then((data) => setBoards(data));
  }, []);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, column) => {
    setDraggedItem(column);
  };

  const handleDragOver = (e, targetBoardId, targetIndex) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetBoardId, targetIndex) => {
    e.preventDefault();

    const updatedColumns = [...columns];
    const indexToRemove = columns.findIndex(column => column._id === draggedItem._id);
    updatedColumns.splice(indexToRemove, 1);
    
    const targetBoardColumns = updatedColumns.filter(column => column.boardId === targetBoardId);
    targetBoardColumns.splice(targetIndex, 0, draggedItem);
    const updatedBoardColumns = updatedColumns.filter(column => column.boardId !== targetBoardId);
    setColumns([...updatedBoardColumns, ...targetBoardColumns]);
  };

  return (
    <div>
      {boards.map((board) => (
        <div key={board._id}>
          <h2>{board.title}</h2>
          <ul>
            {columns
              .filter((column) => column.boardId === board._id)
              .map((column, index) => (
                <li
                  key={column._id}
                  draggable={true}
                  onDragStart={(e) => handleDragStart(e, column)}
                  onDragOver={(e) => handleDragOver(e, board._id, index)}
                  onDrop={(e) => handleDrop(e, board._id, index)}
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

export default AppTest;
