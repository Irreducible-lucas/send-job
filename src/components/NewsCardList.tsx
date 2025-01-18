import { newsCard } from "../constant";
import { layout } from "../styles";
import NewCard from "./NewCard";

const NewsCardList = () => {
  return (
    <div className={`${layout.section} `}>
      <p className="text-blue-600 font-medium text-center">News and Blog</p>
      <h2 className="lg:text-4xl text-2xl font-bold text-gray-800 text-center mt-2 mb-10">
        Get the latest news, updates and tips
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsCard.map((card, index) => (
          <NewCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default NewsCardList;
