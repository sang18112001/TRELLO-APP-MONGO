import React, { useContext, useEffect, useRef, useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { AppContext } from '../../store/context';
import trelloAPI from '../../api/trelloAPI';

interface ICardEdit {
  card: any;
}

const CardEdit = ({ card }: ICardEdit) => {
  const { _id } = card;
  const [state, dispatch] = useContext(AppContext);
  const [checkInputEdit, setCheckInputEdit] = useState('');
  const inputRef = useRef<any>(null);
  const handleDelete = () => {
    trelloAPI.deleteCard(_id).then(() => dispatch({ type: 'DELETE_CARD', payload: _id }));
  };
  const handleEdit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTitle = inputRef?.current?.value;
    trelloAPI.editTitleCard(_id, { title: newTitle }).then(() => {
      dispatch({ type: 'EDIT_CARD', payload: { newTitle, _id } });
      setCheckInputEdit('');
    });
  };
  return (
    <div className="issue_header">
      <div className="issue_headerMain">
        <div className="issue_tittle">
          <h1>{card.title}</h1>
          {checkInputEdit === _id && (
            <form action="" onSubmit={handleEdit}>
              <input
                type="text"
                ref={inputRef}
                onBlur={() => setCheckInputEdit('')}
                defaultValue={card.title}
                autoFocus
              />
            </form>
          )}
        </div>
        <div className="issue_modify">
          <AiFillDelete onClick={handleDelete} />
          <AiFillEdit onClick={() => setCheckInputEdit((cur) => (cur === _id ? '' : _id))} />
        </div>
      </div>
    </div>
  );
};

export default CardEdit;
