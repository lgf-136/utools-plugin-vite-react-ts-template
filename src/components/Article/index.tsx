import ArticleItem from './ArticleItem';

// typescript提示implicitly has an 'any' type，这个怎么解决？tsconfig.json 中 添加 "noImplicitAny": false,

export interface IArticle {
  [key: string]: any;
  username: string;
  tags: string[];
  title: string;
  date: string;
  url: string;
  content: string;
}

export default ({ theme }) => {
  const articles:IArticle[] = [
    {
      username: 'userName',
      tags: ['react', 'hooks'],
      title: 'useEffect 完整指南',
      date: '2020-06-28',
      url: '#',
      content:
        '你用Hooks写了一些组件，甚或写了一个小型应用。你可能很满意，使用它的API很舒服并且在这个过程中获得了一些小技巧。',
    },
    {
      username: 'userName',
      tags: ['css', 'tailwind'],
      title: '使用 CSS variables 和Tailwind css实现主题换肤',
      url: '#',
      date: '2020-06-30',
      content: '根据Tailwind Labs的[换肤视频]，手动实践。',
    },
  ];
  return (
    <div className={`${theme} p-10 bg-base`}>
      <h2 className="mb-6 text-3xl font-semibold text-left text-primary">
        最近文章
      </h2>
      <ul className="space-y-10">
        {articles.map((article, index) => {
          return (
            <li key={index}>
              <a href={article.url}>
                <ArticleItem {...article} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
