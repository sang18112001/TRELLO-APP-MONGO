export const DRAG_DROP_CARDS = (state: any, action: any) => {
  const { startIndex, endIndex } = action.payload;
  const newCards = [...state.cards];
  const removedItem = newCards.splice(startIndex, 1)[0];
  startIndex < endIndex
    ? newCards.splice(endIndex === 0 ? 0 : endIndex - 1, 0, removedItem)
    : newCards.splice(endIndex, 0, removedItem);
  return newCards;
};

export const EDIT_CARD = (state: any, action: any) => {
  const copyCards = [...state.cards];
  const requiredTask = copyCards.find((item: any) => item._id === action.payload._id);
  requiredTask.title = action.payload.newTitle;
  return copyCards;
};

export const ADD_TASK = (state: any, action: any) => {
  const { boardId } = action.payload;
  const copyCards = [...state.cards];
  const card = copyCards.find((card: any) => card._id === boardId); // Get the issue
  if (card) card.columns = card.columns.length > 0 ? [...card.columns, action.payload] : [action.payload];
  return copyCards;
};

export const DELETE_TASK = (state: any, action: any) => {
  const { boardId, _id } = action.payload;
  const copyCards = [...state.cards];
  const card = copyCards.find((card: any) => card._id === boardId); // Get the issue
  if (card) card.columns = card.columns.filter((task: any) => task._id != _id);
  return copyCards;
};

export const EDIT_TASK = (state: any, action: any) => {
  const { newTitle, boardId, _id } = action.payload;
  const copyCards = [...state.cards];
  const card = copyCards.find((card: any) => card._id === boardId); // Get the issue
  const task = card.columns.find((task: any) => task._id === _id);
  task.title = newTitle;
  return copyCards;
};

// export const changeStateTaskAction = (state: any, action: any) => {
//   const { stringIndex, indexIssue, aquiredIssue, aquiredClass } = action.payload;
//   const issue = state.trelloList.find((_, i) => i === +indexIssue); // Get the issue
//   const task = issue?.issue.find((_, i) => i === +stringIndex); // Get the task
//   if (task) {
//     task.stateIssue = aquiredIssue;
//     task.stateClass = aquiredClass;
//   }
//   const newState = state.trelloList
//   return newState;
// };

export const DRAG_DROP_TASKS = (state: any, action: any) => {
  const { startIndex, startIndexCard, endIndex, endIndexCard } = action.payload;
  const copyCards = state.cards;
  const cardStart = copyCards.find((_: any, i: any) => i === +startIndexCard);
  const cardEnd = copyCards.find((_: any, i: any) => i === +endIndexCard);
  console.log(cardStart, cardEnd);

  if (endIndexCard !== startIndexCard) {
    const removedItem = cardStart.columns.splice(startIndex, 1)[0];
    cardEnd.columns?.splice(endIndex, 0, removedItem) ?? (cardEnd.columns = [removedItem]);
  } else if (startIndex < endIndex) {
    const removedItem = cardStart.card.splice(startIndex, 1)[0];
    cardStart.columns.splice(endIndex === 0 ? 0 : endIndex - 1, 0, removedItem);
  } else if (startIndex > endIndex) {
    const removedItem = cardStart.card.splice(startIndex, 1)[0];
    cardStart.columns.splice(endIndex, 0, removedItem);
  }
  return copyCards;
};
