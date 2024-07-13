import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAuthorPost,
  selectAuthorsPosts,
  selectIsSkeletonLoading,
} from "../../redux/slices/authorsPostsSlice";

import { useParams } from "react-router-dom";

import Newsletter from "../../components/footers/Newsletter";
import PostItems, { PostItem } from "../../components/PostItems";
import Skeleton from "../../components/Skeleton/SinglePost";

const AuthorPosts: React.FC = () => {
  const dispatch = useDispatch();
  const { author } = useParams();

  // Initial state selected -> authorsPostsSlice.js
  const isSkeletonLoading = useSelector(selectIsSkeletonLoading);
  const authorsPosts = useSelector(selectAuthorsPosts);

  useEffect(() => {
    if (author) {
      // @ts-ignore
      dispatch(fetchAuthorPost(author));
    }
  }, [author]);

  const postWord = authorsPosts.length === 1 ? "Post" : "Posts";

  return (
    <>
      <div className="page-banner page-banner_news">
        <h1 className="page-banner__text">
          {postWord} By: {author}
        </h1>
      </div>

      <div className="container">
        <div className="news">
          <div className="news__content">
            <ul className="news__content-posts">
              {isSkeletonLoading
                ? [...new Array(2)].map((_, index) => <Skeleton key={index} />)
                : authorsPosts.map((post: PostItem) => (
                    <PostItems key={post.parent_id} {...post} />
                  ))}
            </ul>
          </div>
        </div>

        <Newsletter />
      </div>
    </>
  );
};

export default AuthorPosts;
