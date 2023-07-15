import React, { createContext, useEffect, useReducer } from 'react';
import { IIssue } from '../utils/types';
import trelloAPI from '../api/trelloAPI';
import reducer from './reducer';
export const AppContext = createContext<any>({});

interface Props {
  children: any;
}

const AppProvider: React.FC<Props> = ({ children }) => {
  const initialState = {
    cards: [] as any,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    trelloAPI.getAllCards().then((cards) => {
      dispatch({ type: 'SET_DATA', payload: cards });
    });
  }, []);
  return <AppContext.Provider value={[state, dispatch]}>{children}</AppContext.Provider>;
};

export default AppProvider;
