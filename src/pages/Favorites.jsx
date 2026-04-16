import Navbar from "../components/Navbar";
import topics from "../data/topics";
import TopicCard from "../components/TopicCard";
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

function Favorites({ favorites, toggleFavorite }) {
  const favoriteTopics = topics.filter((t) =>
    favorites.includes(t.id)
  );

  return (
    <PageWrapper>
     

      <div className="max-w-6xl mx-auto p-6">

        {/* TITLE */}
        <h1 className="font-heading text-3xl text-[#8B0000] mb-6 text-center">
          Mục yêu thích
        </h1>

        {/* EMPTY STATE */}
        {favoriteTopics.length === 0 ? (
          <motion.div
            className="text-center text-gray-500 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-lg mb-2">💔 Chưa có mục yêu thích</p>
            <p>Hãy thêm từ trang Topics nhé!</p>
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {favoriteTopics.map((t) => (
              <TopicCard
                key={t.id}
                topic={t}
                isFavorite={true}
                onToggle={toggleFavorite}
              />
            ))}
          </motion.div>
        )}
      </div>
    </PageWrapper>
  );
}

export default Favorites;