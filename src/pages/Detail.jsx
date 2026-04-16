import { useParams, useNavigate } from "react-router-dom";
import topics from "../data/topics";
import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const topic = topics.find((t) => t.id === Number(id));

  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  // Scroll progress (chỉ dùng cho line)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
  });

  if (!topic)
    return (
      <PageWrapper>
        <p className="p-6 text-center text-gray-600">
          Không tìm thấy nội dung
        </p>
      </PageWrapper>
    );

  return (
    <PageWrapper>
      

      <div className="max-w-5xl mx-auto p-6">
        {/* HEADER */}
        <motion.img
          src={topic.image}
          className="w-full h-72 object-cover rounded-xl shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        <h1 className="text-4xl font-heading mt-4">
          {topic.title}
        </h1>

        <p className="text-gray-700 mt-2">
          {topic.shortDescription}
        </p>

        {/* TITLE */}
        <h2 className="text-2xl text-center mt-16 mb-10 text-[#8B0000] font-heading">
          Dòng thời gian lịch sử
        </h2>

        {/* TIMELINE */}
        <div ref={ref} className="relative">
          {/* LINE BG */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-200 -translate-x-1/2"></div>

          {/* LINE PROGRESS */}
          <motion.div
            style={{ scaleY: smoothProgress }}
            className="absolute left-1/2 top-0 w-1 h-full bg-[#C9A227] origin-top -translate-x-1/2"
          />

          {topic.timeline?.map((item, index) => (
            <motion.div
              key={index}
              className={`mb-20 flex items-center relative
                ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }
                justify-center`}
            >
              {/* CARD */}
              <motion.div
                layoutId={`card-${index}`}
                initial={{ scale: 0.95, opacity: 0.6 }}
                whileInView={{ scale: 1.03, opacity: 1 }}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.97 }}
                viewport={{ once: false, amount: 0.5 }}
                onClick={() => setActiveIndex(index)}
                className="w-full md:w-5/12 bg-white p-4 rounded-xl shadow-lg cursor-pointer transition hover:shadow-2xl"
              >
                <motion.h3
                  layoutId={`title-${index}`}
                  className="text-lg font-semibold text-[#8B0000]"
                >
                  {item.year} - {item.title}
                </motion.h3>

                <p className="text-gray-600 mt-1">
                  {item.description}
                </p>

                <motion.img
                  layoutId={`img-${index}`}
                  src={item.image}
                  className="w-full h-40 object-cover rounded mt-3"
                />
              </motion.div>

              {/* DOT */}
              <div className="absolute left-1/2 -translate-x-1/2">
                <div className="w-5 h-5 bg-[#8B0000] rounded-full border-4 border-white shadow"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveIndex(null)}
            >
              <motion.div
                layoutId={`card-${activeIndex}`}
                className="bg-white p-6 rounded-2xl max-w-2xl w-full shadow-2xl"
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  layoutId={`img-${activeIndex}`}
                  src={topic.timeline[activeIndex].image}
                  className="w-full h-64 object-cover rounded"
                />

                <motion.h3
                  layoutId={`title-${activeIndex}`}
                  className="text-2xl font-bold mt-4 text-[#8B0000]"
                >
                  {topic.timeline[activeIndex].year} -{" "}
                  {topic.timeline[activeIndex].title}
                </motion.h3>

                <p className="mt-3 text-gray-700 leading-relaxed">
                  {
                    topic.timeline[activeIndex]
                      .longDescription
                  }
                </p>

                {/* NAV */}
                <div className="flex justify-between mt-6">
                  <button
                    onClick={() =>
                      setActiveIndex((prev) =>
                        prev > 0 ? prev - 1 : prev
                      )
                    }
                    className="text-[#8B0000]"
                  >
                    ← Trước
                  </button>

                  <button
                    onClick={() =>
                      setActiveIndex((prev) =>
                        prev <
                        topic.timeline.length - 1
                          ? prev + 1
                          : prev
                      )
                    }
                    className="text-[#8B0000]"
                  >
                    Sau →
                  </button>
                </div>

                {/* CLOSE */}
                <button
                  className="mt-4 bg-[#8B0000] text-white px-4 py-2 rounded"
                  onClick={() => setActiveIndex(null)}
                >
                  Đóng
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="mt-10 bg-[#C9A227] px-5 py-2 rounded hover:opacity-80"
        >
          ← Quay lại
        </button>
      </div>
    </PageWrapper>
  );
}

export default Detail;