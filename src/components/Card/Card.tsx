import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../store/context';
import { verticalDistanceCompute } from '../../utils';
import Task from '../Task/Task';
import AddTask from '../Task/AddTask';
import CardEdit from './CardEdit';

const Card = ({ index, card }: { index: number; card: any}) => {
  const [state, dispatch] = useContext(AppContext);
  const tasks = card.columns;
  const cardId = card._id;
  const handleDrop = (event: React.DragEvent<HTMLLIElement>, dropIndex: number) => {
    event.preventDefault();
    const startClass = event.dataTransfer.getData('startClass');
    if (startClass === 'issue') {
      const startIndex = +event.dataTransfer.getData('startIndexCard');
      const endIndex = verticalDistanceCompute({ event, dropIndex });
      startIndex != dropIndex && dispatch({ type: 'DRAG_DROP_CARDS', payload: { startIndex, endIndex } });
      
    }
  };
  const handleDragStart = (event: React.DragEvent, startIndex: number) => {
    const targetElement = event.target as HTMLLIElement;
    const startCoordinateIssue = targetElement.getBoundingClientRect();
    event.dataTransfer.setData('startIndexCard', String(startIndex));
    event.dataTransfer.setData('startClass', targetElement.className);
    event.dataTransfer.setData('startCoordinateIssue', JSON.stringify(startCoordinateIssue));
  };
  const handleDragStartCard = (e: React.DragEvent<HTMLElement>) => {
    e.dataTransfer.setData('startIndexCard', card._id);
  };
  return (
    <li
      className="issue"
      draggable
      onDragOver={(event) => event.preventDefault()}
      onDragStart={(event) => handleDragStart(event, index)}
      onDrop={(event) => handleDrop(event, index)}
    >
      <div className="issue_container">
        <CardEdit card={card}/>
        <div className="childIssueContainer" onDragStart={(e) => handleDragStartCard(e)}>
          <ul className="childIssueRender" onDragOver={(event) => event.preventDefault()}>
            {tasks.map((task: any, idx: number) => (
              <Task task={task} indexTask={idx} indexCard={idx} />
            ))}
          </ul>
          <AddTask cardId={cardId}/>
        </div>
      </div>
    </li>
  );
};

export default Card;
