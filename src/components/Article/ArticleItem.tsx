import React, { useCallback, useEffect } from 'react';

function ArticleItem({
  id,
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
      id,
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
  // const handleClickCount = () => {
  //   updateArticle(title);
  //   console.log(clickCount);
  // };
  const handleClickCount = () => {
    const updatedArticle = {
      id: id,
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
    console.log(clickCount);
  };
  const handleIsStar = () => {
    const updatedArticle = {
      id: id,
      username: username,
      category: category,
      clickCount: clickCount,
      isStar: !isStar,
      starCount: !isStar ? starCount + 1 : starCount - 1,
      tags: tags,
      title: title,
      date: date,
      url: url,
      content: content,
    };
    updateArticle(updatedArticle);
    console.log(clickCount);
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
          <span className="text-primary">阅读量 : {clickCount}</span>
          <span className="text-primary">收藏量 : {starCount}</span>
          <button
            className="text-primary text-center inline-flex gap-1"
            onClick={handleIsStar}
          >
            收藏
            {isStar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            )}
          </button>
          {/* <span>
            <button
              type="button"
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
            >
              <svg
                className="mr-2 -ml-1 w-4 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
              Sign in with Github
            </button>
          </span> */}
        </div>
      </div>
    </article>
  );
}

export default ArticleItem;
