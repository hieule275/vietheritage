import PageWrapper from "../components/PageWrapper";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ================= DATA ================= */

const allQuestions = {
  easy: [
    {
      question: "Nhà Trần đánh bại quân Nguyên Mông mấy lần?",
      options: ["1 lần", "2 lần", "3 lần", "4 lần"],
      answer: "3 lần",
      explanation:
        "Nhà Trần đánh bại quân Nguyên Mông 3 lần (1258, 1285, 1288).",
    },
    {
      question: "Ai là vị vua đầu tiên của nhà Lý?",
      options: ["Lý Thái Tổ", "Lý Thánh Tông", "Lý Nhân Tông", "Lý Huệ Tông"],
      answer: "Lý Thái Tổ",
      explanation:
        "Lý Thái Tổ (Lý Công Uẩn) là người sáng lập triều Lý.",
    },
  ],

  medium: [
    {
      question: "Chiến thắng Bạch Đằng năm 1288 do ai chỉ huy?",
      options: ["Lý Thường Kiệt", "Trần Hưng Đạo", "Ngô Quyền", "Quang Trung"],
      answer: "Trần Hưng Đạo",
      explanation:
        "Trần Hưng Đạo lãnh đạo chiến thắng Bạch Đằng năm 1288.",
    },
  ],

  hard: [
    {
      question: "Hiệp định Genève được ký năm nào?",
      options: ["1954", "1945", "1975", "1968"],
      answer: "1954",
      explanation:
        "Hiệp định Genève ký năm 1954, kết thúc chiến tranh Đông Dương.",
    },
  ],
};

/* ================= UTIL ================= */

const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

/* ================= COMPONENT ================= */

function Quiz() {
  const [level, setLevel] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  /* START */
  const startQuiz = (lvl) => {
    const shuffled = shuffleArray(allQuestions[lvl]).map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));

    setLevel(lvl);
    setQuestions(shuffled);
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
    setTimeLeft(10);
  };

  /* TIMER */
  useEffect(() => {
    if (!level || showResult) return;

    if (timeLeft === 0) {
      handleAnswer(null); // hết giờ = sai
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, level, showResult]);

  /* RESET TIME WHEN NEXT QUESTION */
  useEffect(() => {
    setTimeLeft(10);
  }, [current]);

  /* ANSWER */
  const handleAnswer = (option) => {
    if (selected) return;

    setSelected(option);

    if (option === questions[current].answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent((prev) => prev + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 1200);
  };

  /* RESET */
  const restartQuiz = () => {
    setLevel(null);
    setQuestions([]);
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
    setTimeLeft(10);
  };

  /* PROGRESS % */
  const progress = ((current) / questions.length) * 100;

  return (
    <PageWrapper>
      <div className="max-w-xl mx-auto p-6 text-center">

        <h1 className="font-heading text-3xl text-primary mb-6">
          Quiz Lịch sử 🧠
        </h1>

        {/* LEVEL */}
        {!level && (
          <div className="flex flex-col gap-4">
            <button onClick={() => startQuiz("easy")} className="bg-green-500 text-white py-2 rounded">
              Dễ
            </button>
            <button onClick={() => startQuiz("medium")} className="bg-yellow-500 text-white py-2 rounded">
              Trung bình
            </button>
            <button onClick={() => startQuiz("hard")} className="bg-red-500 text-white py-2 rounded">
              Khó
            </button>
          </div>
        )}

        {/* RESULT */}
        {showResult && (
          <motion.div className="bg-white p-6 rounded-xl shadow mt-6">
            <h2 className="text-2xl mb-4">Kết quả 🎉</h2>
            <p>Bạn đúng {score} / {questions.length} câu</p>

            <button onClick={restartQuiz} className="mt-4 bg-secondary px-6 py-2 rounded">
              Chơi lại
            </button>
          </motion.div>
        )}

        {/* QUIZ */}
        {level && !showResult && questions.length > 0 && (
          <motion.div key={current} className="bg-white p-6 rounded-xl shadow mt-6">

            {/* PROGRESS BAR */}
            <div className="w-full bg-gray-200 h-2 rounded mb-4">
              <div
                className="bg-primary h-2 rounded transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* TIMER */}
            <div className={`mb-2 font-bold ${timeLeft <= 3 ? "text-red-500" : "text-gray-700"}`}>
              ⏱ {timeLeft}s
            </div>

            <p className="text-sm text-gray-500 mb-2">
              Câu {current + 1} / {questions.length}
            </p>

            <h2 className="mb-4">{questions[current].question}</h2>

            <div className="flex flex-col gap-3">
              {questions[current].options.map((opt, i) => {
                const correct = questions[current].answer;
                const isCorrect = opt === correct;
                const isSelected = opt === selected;

                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt)}
                    className={`
                      px-4 py-2 rounded
                      ${
                        !selected
                          ? "bg-gray-100 hover:bg-gray-200"
                          : isCorrect
                          ? "bg-green-500 text-white"
                          : isSelected
                          ? "bg-red-500 text-white"
                          : "bg-gray-200"
                      }
                    `}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {/* EXPLANATION */}
            {selected !== null && (
              <div className="bg-blue-100 p-3 rounded mt-4 text-left text-sm">
                📘 {questions[current].explanation}
              </div>
            )}

          </motion.div>
        )}

      </div>
    </PageWrapper>
  );
}

export default Quiz;