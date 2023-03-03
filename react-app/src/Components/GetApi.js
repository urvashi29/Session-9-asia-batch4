import React, { useEffect, useState } from "react";
import { fetchUsers } from "./utils";

const GetApi = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let r = fetchUsers();
    r.then((res) => {
      setPosts(res.data);
    }).catch((err) => console.log(err));
  });

  return (
    <div>
      {posts.length ? posts.map((item) => item.title) : <p>No post yet</p>}
    </div>
  );
};

export default GetApi;
