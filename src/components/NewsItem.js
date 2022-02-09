import React from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import noImage from "../noImage.jpg";

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article || {};
  console.log("article", article);

  return (
    <NewsItemStyle>
      {/* newsList에서 props로 넘겨받은 객체들의 위치를 지정해준다. */}
      {urlToImage ? (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <LazyLoad height={250}>
              <img src={urlToImage} alt="thumbnail" />
            </LazyLoad>
            <h2>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </h2>
            <p>{description}</p>
          </a>
        </div>
      ) : (
        <div>
          <img src={noImage} style={{ height: 100, width: 160 }} />
          <div className="contents">
            <h2>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </h2>
            <p>{description}</p>
          </div>
        </div>
      )}
    </NewsItemStyle>
  );
};

const NewsItemStyle = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;

      a {
        color: black;
        display: block; /* 인터넷 익스플로러 호환 */
        display: -webkit-box;
        overflow: hidden;
        line-height: 1.7;
        max-height: 3.4em; /* 인터넷 익스플로러 호환 */
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }

    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
      color: black;
      display: block; /* 인터넷 익스플로러 호환 */
      display: -webkit-box;
      overflow: hidden;
      line-height: 1.7;
      max-height: 3.4em; /* 인터넷 익스플로러 호환 */
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      // & + & {
      //   margin-top: 3rem;
      // }
    }
  }

  & + & {
    margin-top: 3rem;
  }
`;

export default NewsItem;
