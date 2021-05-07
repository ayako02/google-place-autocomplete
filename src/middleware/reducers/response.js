// import { actions } from '../actions/branding';

// const { BRANDING_DATA, BRANDING_DETAIL, BRANDING_ID } = actions.PUT;

const initialState = {};

const TestReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // case BRANDING_DETAIL:
    //   return { ...state, brandingDetail: action.payload };

    // case BRANDING_ID:
    //   return { ...state, brandingID: action.payload };

    // case BRANDING_DATA:
    //   return { ...state, brandingData: action.payload };

    default:
      return state;
  }
};

export default TestReducer;
