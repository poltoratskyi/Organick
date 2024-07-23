import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAuthorPost,
  selectAuthorsPosts,
  selectIsSkeletonLoading,
  setClearAuthorsPosts,
} from "../../redux/slices/authorsPostsSlice";

import { useParams } from "react-router-dom";

import Newsletter from "../../components/footers/Newsletter";
import PostItems, { PostItem } from "../../components/PostItems";
import Skeleton from "../../components/Skeleton/Posts";
import { AppDispatch } from "../../redux/store";

const AuthorPosts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { surname } = useParams();

  // Initial state selected -> authorsPostsSlice.js
  const isSkeletonLoading = useSelector(selectIsSkeletonLoading);
  const authorsPosts = useSelector(selectAuthorsPosts);

  const findAuthors = (arr: PostItem[]) => {
    const foundItem = arr.find((item) => item.authorFullName);

    if (foundItem) {
      return foundItem.authorFullName;
    }
  };

  useEffect(() => {
    if (surname) {
      dispatch(fetchAuthorPost({ surname }));
    }

    return () => {
      dispatch(setClearAuthorsPosts());
    };
  }, [surname]);

  const postWord = authorsPosts.length === 1 ? "Post" : "Posts";

  return (
    <>
      <div className="page-banner page-banner_news">
        <h1 className="page-banner__text">
          {postWord} By: {findAuthors(authorsPosts)}
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
