import { useLoaderData } from "react-router-dom";
import NewsArticle from "../components/NewsCard/NewsArticle";

const News = () => {
  const news = useLoaderData();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center p-5 border rounded-xl my-5 font-bold text-3xl text-gray-600 shadow-sm">
        Latest Book News
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.news.map((article) => (
          <NewsArticle key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default News;
