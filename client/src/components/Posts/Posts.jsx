import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTimeLinePosts } from "../../actions/postAction";

import Post from "../Post/Post";
import "./Posts.css";
const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimeLinePosts(user._id));
  }, []);
  return (
    <div className="Posts">
      {loading
        ? "Fetching posts... "
        : posts.map((post, id) => {
            return <Post data={post} id={id} />;
          })}
    </div>
  );
};

export default Posts;
