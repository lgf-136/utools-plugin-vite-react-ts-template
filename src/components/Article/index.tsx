import React, { useState, useEffect } from 'react';
import ArticleItem from './ArticleItem';

// typescript提示implicitly has an 'any' type，这个怎么解决？tsconfig.json 中 添加 "noImplicitAny": false,

export interface IArticle {
  [key: string]: any;
  id: number;
  username: string;
  category: string;
  clickCount: number;
  isStar: boolean;
  starCount: number;
  tags: string[];
  title: string;
  date: string;
  url: string;
  content: string;
}

export default ({ theme }) => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      username: 'lgf',
      category: 'programming',
      clickCount: 1,
      isStar: true,
      starCount: 1,
      tags: ['react', 'hooks'],
      title: 'useEffect 完整指南',
      date: '2020-06-28',
      url: '#',
      content:
        '你用Hooks写了一些组件，甚或写了一个小型应用。你可能很满意，使用它的API很舒服并且在这个过程中获得了一些小技巧。',
    },
    {
      id: 2,
      username: 'adam',
      category: 'programming',
      clickCount: 0,
      isStar: false,
      starCount: 0,
      tags: ['css', 'tailwind'],
      title: '使用 CSS variables 和Tailwind css实现主题换肤',
      url: '#',
      date: '2020-06-30',
      content: '根据Tailwind Labs的[换肤视频]，手动实践。',
    },
  ]);
  // 此方法页面不会刷新，因为find只是修改值，数组对象额引用地址没有改变，所以react认为状态没有发生变化，孤儿不会刷新页面
  // const updateArticle = (lookupArticleTitle) => {
  //   console.log(articles);
  //   let findArticle = articles.find(
  //     (article) => article.title === lookupArticleTitle
  //   );
  //   (findArticle as IArticle).clickCount =
  //     (findArticle as IArticle).clickCount + 1;
  //   console.log(articles);
  //   setArticles(articles);
  // };
  const updateArticle = (lookupArticle) => {
    function compare(a, b) {
      // 使用 toUpperCase() 忽略字符大小写
      const idA = a.id;
      const idB = b.id;

      let comparison = 0;
      if (idA > idB) {
        comparison = 1;
      } else if (idA < idB) {
        comparison = -1;
      }
      return comparison;
    }
    // console.log(articles);
    let filterArticles = articles.filter(
      (article) => article.title !== lookupArticle.title
    );
    // console.log(filterArticles);
    setArticles([...filterArticles, lookupArticle].sort(compare));
    // console.log(articles);
  };
  return (
    <div className={`${theme} p-10 bg-base`}>
      <h2 className="mb-6 text-3xl font-semibold text-left text-primary">
        最近文章
      </h2>
      <ul className="space-y-10">
        {articles.map((article, index, articles) => {
          return (
            <li key={index}>
              {/* <a href={article.url}> */}
              <ArticleItem {...article} updateArticle={updateArticle} />
              {/* </a> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
