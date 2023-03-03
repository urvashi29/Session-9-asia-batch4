import React, { useEffect, useState } from "react";
import axios from "axios";

const GetData = () => {
  const [initState, setInitialState] = useState({
    firstName: "",
  });

  const fetchUser = async () => {
    const response = await axios
      .get("https://api.fake-rest.refine.dev/users/1")
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });

    return response.data;
  };

  useEffect(() => {
    (async () => {
      const data = await fetchUser();
      console.log(data);
      setInitialState(data);
    })();
  }, []);

  return <div>{initState.firstName}</div>;
};

export default GetData;

// async & await : ES7 in 2017

// async function add() {
//    var y = await 10 + 20;
// }

// add().then()
