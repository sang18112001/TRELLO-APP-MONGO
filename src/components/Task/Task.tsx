import React, { useState, useEffect, useContext } from 'react';
import { MdClose } from 'react-icons/md';
import TaskEdit from './TaskEdit';
import { horizonalDistanceCompute } from '../../utils';
import trelloAPI from '../../api/trelloAPI';
import { AppContext } from '../../store/context';

const Task = ({ task, setTasks, indexTask, indexCard }: any) => {
  const [state, dispatch] = useContext(AppContext);
  const handleDrop = (event: React.DragEvent<HTMLLIElement>, indexTask: number) => {
    event.preventDefault();
    const startClass = event.dataTransfer.getData('startClass');
    if (startClass === 'childIssue') {
      const startIndex = +event.dataTransfer.getData('startIndex');
      const startIndexCard = +event.dataTransfer.getData('startIndexCard');
      const startCoordinate = event.dataTransfer.getData('startCoordinate');
      const endIndex = horizonalDistanceCompute({ event, startCoordinate, indexTask });
      const endIndexCard = +indexCard;
      if (startIndex === indexTask && startIndexCard === endIndexCard) return;
      dispatch({ type: 'DRAG_DROP_TASKS', payload: { startIndex, startIndexCard, endIndex, endIndexCard } });
    }
  };
  const handleDragStart = (event: React.DragEvent<HTMLLIElement>, indexTask: number) => {
    const targetElement = event.target as HTMLLIElement;
    const startCoordinate = targetElement.getBoundingClientRect();
    event.dataTransfer.setData('startIndex', String(indexTask));
    event.dataTransfer.setData('startClass', targetElement.className);
    event.dataTransfer.setData('startCoordinate', JSON.stringify(startCoordinate));
  };
  return (
    <li
      draggable
      onDragStart={(event) => handleDragStart(event, indexTask)}
      onDrop={(event) => handleDrop(event, indexTask)}
      className="childIssue"
    >
      <div className="chidlIssueMain">
        <TaskEdit setTasks={setTasks} task={task} />
      </div>
    </li>
  );
};

export default Task;
