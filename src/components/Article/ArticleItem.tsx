function ArticleItem({ username, tags, title, date, url, content }) {
  return (
    <article className="relative flex items-center transition-transform transform group hover:-translate-x-2">
      <div className="flex flex-col flex-grow py-8 space-y-4 text-base rounded px-8 shadow-md bg-off-base">
        <div className="flex flex-row justify-between">
          <span>{username}</span>
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
        <div className="flex flex-row justify-between">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-muted">{date}</span>
        </div>
        <p className="max-w-3xl leading-8 text-muted">{content}</p>
      </div>
    </article>
  );
}

export default ArticleItem;
