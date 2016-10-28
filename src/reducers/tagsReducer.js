const initialState = {
  tags: [],
};

export default function reducer(state = initialState, action) {
  if (state === undefined) {
    return initialState;
  }

  let newState = state;
  switch (action.type) {
    case 'set_tags':
      newState = Object.assign({}, state, { tags: action.data });
      break;
    default:
      break;
  }

  return newState;
}
