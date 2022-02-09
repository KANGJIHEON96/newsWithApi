import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import NewsItem from "./NewsItem";
import Skeletons from "./Skeletons";

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=71c60e3a584440dcb43fbc91e3c86e31`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  // const handleTest = () => {
  //   const data1 = await fetchData1();

  //   if(data1.status == 'success')
  //     const data2 = await fetchData2Post();
  // }

  // 렌더링중인 상태
  if (loading) {
    return <Skeletons>로딩 중…!</Skeletons>;
  }
  // 값이 설정되지 않은 상태
  if (!articles) {
    return null;
  }

  return (
    <NewsListStyle>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListStyle>
  );
};

const NewsListStyle = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default NewsList;
