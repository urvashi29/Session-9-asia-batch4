import * as actions from "./actionType";

const initState = {
  count: 0,
  users: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.INC:
      return { ...state, count: state.count + action.payload };

    case actions.DEC:
      return { ...state, count: state.count - action.payload };

    case actions.POST_USER:
      console.log(action.payload);
      return { ...state, users: [...this.state.user, action.payload.httpRes] };
      
    default:
      return state;
  }
};
