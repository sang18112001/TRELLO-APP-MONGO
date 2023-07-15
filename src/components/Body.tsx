import { useEffect, useState } from 'react';
import trelloAPI from '../api/trelloAPI';
import Cards from './Card/Cards';

const Body = () => {

  return (
    <div id="webBody">
      <Cards />
    </div>
  );
};

export default Body;
