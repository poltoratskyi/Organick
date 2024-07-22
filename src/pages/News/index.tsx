import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, selectPosts } from "../../redux/slices/postsSlice";
import { selectIsSkeletonLoading } from "../../redux/slices/postsSlice";
import { AppDispatch } from "../../redux/store";

import Newsletter from "../../components/footers/Newsletter";
import PostItems, { PostItem } from "../../components/PostItems";
import Skeleton from "../../components/Skeleton/Posts";

const NewsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Initial state selected -> postsSlice.js
  const posts = useSelector(selectPosts);

  // Initial state selected -> singlePostSlice.js
  const isSkeletonLoading = useSelector(selectIsSkeletonLoading);

  // Fetch posts -> Home page
  useEffect(() => {
    const fetchPostsData = async () => {
      dispatch(fetchPosts());
    };

    fetchPostsData();
  }, [dispatch]);

  return (
    <>
      <div className="page-banner page-banner_news">
        <h1 className="page-banner__text">Recent News</h1>
      </div>

      <div className="container">
        <div className="news__content">
          <ul className="news__content-posts">
            {isSkeletonLoading
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : posts.map((post: PostItem) => (
                  <PostItems key={post.parent_id} {...post} />
                ))}
          </ul>
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default NewsPage;
