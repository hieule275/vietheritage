import { useNavigate } from "react-router-dom";
import topics from "../data/topics";
import TopicCard from "../components/TopicCard";
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

function Home({ favorites, toggleFavorite }) {
  const navigate = useNavigate();

  return (
    <PageWrapper>

      {/* HERO */}
      <div className="bg-primary text-white py-20 px-6 text-center">

        {/* TITLE */}
        <motion.h1
          className="font-heading text-4xl md:text-5xl tracking-wide leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Khám phá Văn hóa & Lịch sử Việt Nam
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          className="font-body text-lg md:text-xl mt-5 text-[#F8F5F0] max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Tìm hiểu các triều đại, nhân vật và di tích nổi bật
        </motion.p>

        {/* BUTTON */}
        <motion.button
          className="mt-8 bg-secondary text-black font-semibold px-7 py-3 rounded-full
                     hover:scale-105 hover:shadow-lg transition"
          onClick={() => navigate("/topics")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Khám phá ngay
        </motion.button>
      </div>

      {/* FEATURED */}
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="font-heading text-2xl text-primary mb-4">
          Chủ đề nổi bật
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topics.slice(0, 3).map((t) => (
            <TopicCard
              key={t.id}
              topic={t}
              isFavorite={favorites.includes(t.id)}
              onToggle={toggleFavorite}
            />
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <div className="bg-background py-12 text-center">
        <h2 className="font-heading text-2xl text-primary mb-3">
          Về dự án
        </h2>

        <p className="font-body text-gray-700 max-w-xl mx-auto leading-relaxed">
          Website giúp khám phá lịch sử và văn hóa Việt Nam một cách trực quan,
          sinh động và dễ tiếp cận thông qua các chủ đề, dòng thời gian và hình ảnh minh họa.
        </p>
      </div>

    </PageWrapper>
  );
}

export default Home;