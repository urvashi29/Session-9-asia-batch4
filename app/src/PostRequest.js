import React from "react";
import { useDispatch } from "react-redux";
import { sendUser } from "./action";
const PostRequest = () => {
  const dispatch = useDispatch();

  const sendData = () => {
    dispatch(
      sendUser({
        name: "morpheus",
        job: "leader",
      })
    );
  };

  return (
    <div>
      <button onClick={sendData}>Submit</button>
    </div>
  );
};

export default PostRequest;
