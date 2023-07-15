import React, { useContext, useRef, useState } from 'react';
import { AppContext } from '../../store/context';
import trelloAPI from '../../api/trelloAPI';

const AddCard = () => {
  const [state, dispatch] = useContext(AppContext);
  const inputAddIssue = useRef<HTMLInputElement>(null);
  const newIssueHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTitle = {
      title: inputAddIssue?.current?.value,
    };
    trelloAPI.addCard(newTitle).then((_id) => {
      const newCard = {
        ...newTitle,
        _id,
        columns: [],
      };
      dispatch({ type: 'ADD_CARD', payload: newCard });
    });
  };
  return (
    <>
      <form action="" onSubmit={(e) => newIssueHandler(e)}>
        <input type="text" ref={inputAddIssue} autoFocus placeholder="Add a new card" />
        <button>Add card</button>
      </form>
    </>
  );
};

export default AddCard;
