import React from "react";
import NewsList from "../components/NewsList";
import Categories from "../components/Categories";

const NewsPage = ({ match }) => {
  const category = match.params.category || "all";

  return (
    <div>
      <Categories />
      <NewsList category={category} />
    </div>
  );
};

export default NewsPage;

// 리액트 라우터로 match.params.category 로 value 값을 정해줄 수 있다. false 이면 'all' 이라고 해주고 URL 파라미터로 해당 카테고리 값을 사용할 수 있다.

// 카테고리 컴포넌트에서 현재 선택된 카테고리 값을 알려 줄 필요도 없고, 그렇다면 카테고리 상태를 업데이트 해주는 onSelect 함수를 따로 전달해줄 필요가 없는 것이다!!! 알아서 파라미터로 잘 전달해주니까!
