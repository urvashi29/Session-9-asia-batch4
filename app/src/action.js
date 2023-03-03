import * as actions from "./actionType";
import axios from "axios";

export const onIncrement = (val) => {
  return {
    type: actions.INC,
    payload: val,
  };
};

export const onDecrement = (val) => {
  return {
    type: actions.DEC,
    payload: val,
  };
};

export const sendUser = (user) => {
  return (dispatch) => {
    axios
      .post("https://reqres.in/api/users", user)
      .then((res) => {
        console.log(res);

        dispatch(
          ((data) => {
            return {
              type: actions.POST_USER,
              payload: {
                httpResponse: data,
              },
            };
          })(res.data)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
