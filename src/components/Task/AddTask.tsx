import React, { useState, useRef, useContext } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AppContext } from '../../store/context';
import trelloAPI from '../../api/trelloAPI';

const AddTask = ({ cardId }: { cardId: string }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [checkInput, setCheckInput] = useState(false);
  const [state, dispatch] = useContext(AppContext);
  const handleAddNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = {
      title: inputRef?.current?.value,
      boardId: cardId,
    };
    trelloAPI.addTask(newTask).then((_id) => {
      dispatch({ type: 'ADD_TASK', payload: { ...newTask, _id } });
      setCheckInput(false);
    });
  };
  return (
    <>
      {checkInput && (
        <form action="" onSubmit={(e) => handleAddNewTask(e)}>
          <input ref={inputRef} type="text" autoFocus />
        </form>
      )}
      <button onClick={(e) => setCheckInput((cur) => !cur)}>
        <AiOutlinePlus />
        <p>Add a child issue</p>
      </button>
    </>
  );
};

export default AddTask;
