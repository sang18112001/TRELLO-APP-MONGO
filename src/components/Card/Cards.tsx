import React, { useRef, useState, useContext, useEffect } from 'react';
import Card from './Card';
import AddCard from './AddCard';
import { AppContext } from '../../store/context';

const Cards = () => {
  const [state, dispatch] = useContext(AppContext);
  const { cards } = state;
  return (
    <div className="issues_container">
      <ul className="issues">
        {cards.map((card: any, index: number) => (
          <Card key={index} index={index} card={card}/>
        ))}
      </ul>
    </div>
  );
};

export default Cards;
