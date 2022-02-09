import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
  { name: "all", text: "전체뉴스" },
  { name: "business", text: "비즈니스" },
  { name: "entertainment", text: "엔터테인먼트" },
  { name: "health", text: "건강" },
  { name: "science", text: "과학" },
  { name: "sports", text: " 스포츠" },
  { name: "technologies", text: "기술" },
];

const CategoriesStyle = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }
  &.active {
    font-weight: 600;
    border-bottom: 2px solid #ccccff;
    color: #ccccff;
    &:hover {
      color: #6495ed;
      border-bottom: 2px solid #6495ed;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;
const Categories = () => {
  return (
    <CategoriesStyle>
      {categories.map((categories) => (
        <Category
          key={categories.name}
          activeClassName="active"
          exact={categories.name === "all"}
          to={categories.name === "all" ? "/" : `/${categories.name}`}
        >
          {categories.text}
        </Category>
      ))}
    </CategoriesStyle>
  );
};

export default Categories;
