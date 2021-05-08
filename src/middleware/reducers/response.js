import { actions } from '../actions/response';

const { SEARCHED_HISTORIES } = actions.PUT;

const initialState = { searchedResponses: [] };

const ResponseReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCHED_HISTORIES:
      return { ...state, searchedResponses: action.payload };

    default:
      return state;
  }
};

export default ResponseReducer;
