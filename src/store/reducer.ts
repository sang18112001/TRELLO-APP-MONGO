import { Reducer } from "react";
import { IState } from "../utils/types";
import { ADD_TASK, DELETE_TASK, DRAG_DROP_CARDS, DRAG_DROP_TASKS, EDIT_CARD } from "./actions";

const reducer: Reducer<any, any> = (state: any, action: any) => {
   switch (action.type) {
      case "SET_DATA":
         return {
            ...state,
            cards: action.payload,
         }
      case "DRAG_DROP_CARDS":
         return {
            ...state,
            cards: DRAG_DROP_CARDS(state, action)
         }
      case "ADD_CARD":
         return {
            ...state,
            cards: [...state.cards, action.payload]
         }
      case "DELETE_CARD":
         return {
            ...state,
            cards: state.cards.filter((item: any) => item._id != action.payload)
         }
      case "EDIT_CARD":
         return {
            ...state,
            cards: EDIT_CARD(state, action)
         }
      case "ADD_TASK":
         return {
            ...state,
            cards: ADD_TASK(state, action)
         }
      case "DELETE_TASK":
         return {
            ...state,
            cards: DELETE_TASK(state, action)
         }
      case "DRAG_DROP_TASKS":
         return {
            ...state,
            cards: DRAG_DROP_TASKS(state, action)
         }
      default:
         throw new Error
   }
}

export default reducer;
