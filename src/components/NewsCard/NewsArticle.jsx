import PropTypes from "prop-types";

const NewsArticle = ({ article }) => {
  const { title, date, description, image, link } = article;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <img src={image} alt={title} className="mb-4 rounded-lg" />
      <p className="text-gray-800 mb-4">{description}</p>
      <div className="flex justify-between">
        <a href={link} className="text-blue-500 hover:underline">
          Read more
        </a>
        <p className="text-gray-600">{date}</p>
      </div>
    </div>
  );
};

NewsArticle.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsArticle;
