export const addItem = item => ({
  type: 'ADD_ITEM',
  payload: item
});

export const updateSelectedItem = item => ({
  type: 'UPDATE_SELECTED_ITEM',
  payload: item
});

export const moveItems = (dragIndex, hoverIndex) => ({
  type: 'MOVE_ITEMS',
  payload: {
    dragIndex,
    hoverIndex
  }
});
