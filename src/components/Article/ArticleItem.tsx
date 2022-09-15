import React, { useCallback, useEffect } from 'react';

function ArticleItem({
  username,
  category,
  clickCount,
  isStar,
  starCount,
  tags,
  title,
  date,
  url,
  content,
  updateArticle,
}) {
  //https://www.bilibili.com/video/BV15Y4y1z7Fc?p=7&vd_source=6cecd1f17a6c0ef08a944dd92199a516
  useEffect(() => {
    console.log('article: ', title, ' has been mounted!');
    return () => {
      console.log('article: ', title, ' has been unmounted!');
    };
  }, []);
  useEffect(() => {
    const data = {
      username,
      category,
      clickCount,
      isStar,
      starCount,
      tags,
      title,
      date,
      url,
      content,
    };
    console.log(
      'article: ',
      title,
      ' has been updated! result data is: ',
      data
    );
    return () => {
      console.log('previous data is: ', data);
    };
  }, [
    username,
    category,
    clickCount,
    isStar,
    starCount,
    tags,
    title,
    date,
    url,
    content,
  ]);
  const handleClickCount = () => {
    const updatedArticle = {
      username: username,
      category: category,
      clickCount: clickCount + 1,
      isStar: isStar,
      starCount: starCount,
      tags: tags,
      title: title,
      date: date,
      url: url,
      content: content,
    };
    updateArticle(updatedArticle);
    console.log('aa');
  };
  return (
    <article className="relative flex items-center transition-transform transform group hover:-translate-x-2">
      <div className="flex flex-col flex-grow py-8 space-y-4 text-base rounded px-8 shadow-md bg-off-base">
        <div className="flex flex-row justify-between">
          <span>{username}</span>
          <span className="bg-base text-primary px-2 py-1 rounded cursor-pointer hover:bg-primary hover:text-base">
            {category}
          </span>
          <span className="space-x-1">
            {tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer"
                >
                  {tag}
                </span>
              );
            })}
          </span>
        </div>
        <div className="flex flex-row justify-between gap-2">
          <a href={url}>
            <h3 className="text-xl font-bold" onClick={handleClickCount}>
              {title}
            </h3>
          </a>

          <span className="text-muted">{date}</span>
        </div>

        <p className="max-w-3xl leading-8 text-muted">{content}</p>
        <div className="flex flex-row gap-4">
          <span className="text-secondary">阅读量 : {clickCount}</span>
          <span className="text-secondary">收藏量 : {starCount}</span>
          <button className="text-secondary">收藏 {isStar ? 1 : 0}</button>
        </div>
      </div>
    </article>
  );
}

export default ArticleItem;
