const initialState = {
  photos: [],
};

export default function reducer(state = initialState, action) {
  if (state === undefined) {
    return initialState;
  }

  let newState = state;
  switch (action.type) {
    case 'set_photos':
      newState = Object.assign({}, state, { photos: action.data });
      break;
    default:
      break;
  }

  return newState;
}
