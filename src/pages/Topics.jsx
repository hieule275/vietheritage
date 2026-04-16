import Navbar from "../components/Navbar";
import topics from "../data/topics";
import TopicCard from "../components/TopicCard";
import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

function Topics({ favorites, toggleFavorite }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredTopics = topics
    .filter((t) =>
      t.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) =>
      category === "all" ? true : t.category === category
    );

  return (
    <PageWrapper>
      

      <div className="max-w-6xl mx-auto p-6">

        {/* TITLE */}
        <h1 className="font-heading text-3xl text-[#8B0000] mb-6 text-center">
          Khám phá chủ đề
        </h1>

        {/* SEARCH + FILTER */}
        <div className="mb-8">

          {/* SEARCH */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Tìm kiếm triều đại, nhân vật..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300
                         bg-white shadow-sm
                         focus:outline-none focus:ring-2 focus:ring-[#C9A227]
                         focus:border-[#C9A227] transition"
            />

            {/* ICON */}
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
              🔍
            </span>
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap gap-3 justify-center">

            {[
              { key: "all", label: "Tất cả" },
              { key: "Triều đại phong kiến", label: "Triều đại" },
              { key: "Nhân vật lịch sử", label: "Nhân vật" },
              { key: "Di tích lịch sử", label: "Di tích" }
            ].map((c) => (
              <button
                key={c.key}
                onClick={() => setCategory(c.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${
                    category === c.key
                      ? "bg-[#8B0000] text-white shadow-md scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-[#F8F5F0]"
                  }`}
              >
                {c.label}
              </button>
            ))}

          </div>
        </div>

        {/* RESULT COUNT */}
        <p className="text-gray-600 mb-4 text-center">
          {filteredTopics.length} kết quả
        </p>

        {/* LIST / EMPTY */}
        {filteredTopics.length === 0 ? (
          <motion.div
            className="text-center text-gray-500 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-lg">😢 Không tìm thấy kết quả</p>
            <p>Hãy thử từ khóa khác</p>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTopics.map((t) => (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <TopicCard
                  topic={t}
                  isFavorite={favorites.includes(t.id)}
                  onToggle={toggleFavorite}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </PageWrapper>
  );
}

export default Topics;