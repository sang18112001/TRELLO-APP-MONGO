import React, { useContext, useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import trelloAPI from '../../api/trelloAPI';
import { AppContext } from '../../store/context';

const TaskEdit = ({ task, setTasks }: any) => {
  const { _id, boardId } = task;
  const inputRef = useRef<any>(null);
  const [state, dispatch] = useContext(AppContext);
  const [checkInputEdit, setCheckInputEdit] = useState('');
  const handleDelete = () => {
    trelloAPI.deleteTask(_id).then(() => dispatch({ type: 'DELETE_TASK', payload: { _id, boardId } }));
  };
  const handleEdit = (event: any) => {
    event.preventDefault();
    const newTitle = inputRef?.current?.value;
    newTitle &&
      trelloAPI
        .editTitleTask(_id, { title: newTitle })
        .then(() => dispatch({ type: 'EDIT_TASK', payload: { newTitle, boardId, _id } }));
    setCheckInputEdit('');
  };
  return (
    <>
      <h4>{task.title}</h4>
      {checkInputEdit === _id && (
        <form action="" onSubmit={handleEdit}>
          <input type="text" ref={inputRef} onBlur={() => setCheckInputEdit('')} defaultValue={task.title} autoFocus />
        </form>
      )}
      <div className="removeTask" onClick={handleDelete}>
        <MdClose />
      </div>
      <div className="editTask" onClick={() => setCheckInputEdit((cur) => (cur === _id ? '' : _id))}>
        <AiFillEdit />
      </div>
    </>
  );
};

export default TaskEdit;
