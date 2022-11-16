import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Posts.css";
import { useSelector, useDispatch } from "react-redux";
import Post from "../Post/Post";
import { getTimelinePosts } from "../../actions/postActions";
function Posts() {
  const params = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);
  if (!posts) return "No Posts";
  if (params.id) posts = posts.filter((post) => post.userId === params.id);

  return     <div className="Posts">
  {loading
    ? "Fetching posts...."
    : posts.map((post, id) => {
        return <Post data={post} key={id} />;
      })}
</div>;
}
export default Posts;
