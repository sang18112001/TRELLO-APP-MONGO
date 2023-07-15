import { useContext, useRef, useState } from 'react';
import trelloAPI from '../api/trelloAPI';
import { IIssue } from '../utils/types';
import { BiSearch } from 'react-icons/bi';
import AddCard from './Card/AddCard';
const Header = () => {
  const inputSearchIssue = useRef<HTMLInputElement>(null);

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = inputSearchIssue?.current;
    const querySearch = input?.value;
  };
  return (
    <header>
      <h3>Trello App</h3>
      <div className="issues_header">
        <AddCard />
        <div className="issues_search">
          <BiSearch />
          <form action="" onSubmit={(event) => handleClick(event)}>
            <input type="text" ref={inputSearchIssue} placeholder="Search" />
            <button>Search</button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
