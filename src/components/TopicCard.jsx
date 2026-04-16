import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function TopicCard({ topic, isFavorite, onToggle }) {
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden cursor-pointer shadow-md"
      whileHover={{ y: -10, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={() => navigate(`/topics/${topic.id}`)}
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={topic.image}
          className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          {/* CATEGORY */}
          <p className="text-sm text-[#8B0000] font-medium">
            {topic.category}
          </p>

          {/* HEART */}
          <button
            className="text-lg transition transform hover:scale-125"
            onClick={(e) => {
              e.stopPropagation();
              onToggle && onToggle(topic.id);
            }}
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>

        {/* TITLE */}
        <h3 className="font-heading text-lg text-[#2C2C2C]">
          {topic.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-sm mt-1">
          {topic.shortDescription}
        </p>
      </div>
    </motion.div>
  );
}

export default TopicCard;