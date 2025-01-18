import { NewsCardProps } from "../type";
const NewCard = ({
  author,
  date,
  title,
  authorImg,
  description,
  image,
  category,
}: NewsCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between gap-2 mb-2 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <img
              src={authorImg}
              alt={author}
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col">
              {" "}
              <p>{author}</p>
              <p>{date}</p>
            </div>
          </div>

          <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
            {category}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 h-14">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>

        <a
          href="#"
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewCard;
