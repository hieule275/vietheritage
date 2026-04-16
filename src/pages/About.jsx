import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";

function About() {
  return (
    <PageWrapper>
      

      <div className="p-6 max-w-4xl mx-auto">

        {/* TITLE */}
        <h1 className="font-heading text-4xl text-center text-[#8B0000] mb-4">
          Về dự án
        </h1>

        {/* INTRO */}
        <p className="mb-8 text-gray-700 text-center leading-relaxed">
          Website <span className="font-semibold">VietHeritage</span> giúp người dùng khám phá
          các triều đại, nhân vật và di tích lịch sử Việt Nam một cách trực quan,
          hiện đại và dễ tiếp cận.
        </p>

        {/* TECH + FEATURES GRID */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">

          {/* TECH STACK */}
          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="font-heading text-xl text-[#8B0000] mb-3">
              Công nghệ sử dụng
            </h2>

            <ul className="space-y-2 text-gray-700">
              <li>⚛️ ReactJS</li>
              <li>🔀 React Router</li>
              <li>🎨 Tailwind CSS</li>
              <li>🎬 Framer Motion</li>
            </ul>
          </div>

          {/* FEATURES */}
          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="font-heading text-xl text-[#8B0000] mb-3">
              Tính năng chính
            </h2>

            <ul className="space-y-2 text-gray-700">
              <li>🔍 Tìm kiếm & lọc nội dung</li>
              <li>❤️ Đánh dấu yêu thích</li>
              <li>💾 Lưu localStorage</li>
              <li>✨ Animation chuyển trang</li>
            </ul>
          </div>
        </div>

        {/* AUTHOR */}
        <div className="bg-[#F8F5F0] border border-[#C9A227] p-6 rounded-xl text-center">
          <h2 className="font-heading text-lg text-[#8B0000] mb-2">
            Người phát triển
          </h2>

          <p className="text-gray-700">
            <li>Hoàng Đình Hiếu - Sinh viên Kỹ thuật Máy tính - Đại học Bách Khoa TP.HCM</li>
           <li> Email: hieuhoangdinh2705@gmail.com</li>
          </p>
        </div>

      </div>
    </PageWrapper>
  );
}

export default About;