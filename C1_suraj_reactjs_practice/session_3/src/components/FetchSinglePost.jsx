//Single Post Fetch
import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchSinglePost = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(0);
  const [btnclicked, setBtnClicked] = useState(0);

  const handleClick = () => {
    setBtnClicked(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${btnclicked}`) //initial value of id is 0;
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, [btnclicked]);

  return (
    <div>
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch</button>
      <h1>{post.title}</h1>
    </div>
  );
};

export default FetchSinglePost;
