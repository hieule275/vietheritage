const topics = [
  {
    id: 1,
    title: "Triều Trần",
    category: "Triều đại phong kiến",
    image: "https://nghiencuulichsudotcom.files.wordpress.com/2020/09/vua-nha-tran.jpg?w=584",
    shortDescription: "Triều đại nổi bật với 3 lần thắng Nguyên Mông",
    timeline: [
    {
      year: "1225",
      title: "Thành lập nhà Trần",
      description: "Trần Thái Tông lên ngôi",
      longDescription:
      "Trần Thái Tông (Trần Cảnh) lên ngôi ngày 10/1/1226 (tháng 12 năm Ất Dậu) khi mới 8 tuổi, kết thúc triều Lý và mở ra triều Trần sau khi được Lý Chiêu Hoàng nhường ngôi. Dưới sự sắp xếp của Trần Thủ Độ, ông lấy niên hiệu Kiến Trung, trở thành vị vua đầu tiên của nhà Trần và sau này lãnh đạo kháng chiến chống Mông Cổ.",
      image: "https://doanhnhanhotranhaiphong.vn/Images/images/TIN-TUC/maxresdefault.jpg"
    },
    {
      year: "1258",
      title: "Kháng chiến chống Nguyên Mông lần 1",
      description: "Chiến thắng lớn dưới thời Trần Hưng Đạo",
      longDescription:
      "Quân Mông Cổ do Ngột Lương Hợp Thai chỉ huy tiến vào. Nhà Trần thực hiện 'vườn không nhà trống', sau đó phản công thắng lợi tại Đông Bộ Đầu.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Chongquannguyenlan1.svg/1280px-Chongquannguyenlan1.svg.png"
    },
    {
      year: "1285",
      title: "Kháng chiến chống Nguyên Mông lần 2",
      description: "Chiến thắng lớn dưới thời Trần Hưng Đạo",
      longDescription:
      "Hơn 50 vạn quân Nguyên do Thoát Hoan dẫn đầu tấn công. Quân dân nhà Trần chiến đấu anh dũng, tiêu diệt địch ở Tây Kết, Hàm Tử, Chương Dương và giải phóng Thăng Long.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Chongquannguyenlan2.svg/960px-Chongquannguyenlan2.svg.png"
    },
    {
      year: "1287 - 1288",
      title: "Kháng chiến chống Nguyên Mông",
      description: "Chiến thắng lớn dưới thời Trần Hưng Đạo",
      longDescription:
      "Quân Nguyên trở lại, thất bại nặng nề tại Vân Đồn và đỉnh cao là trận Bạch Đằng (4/1288) dưới sự chỉ huy của Trần Hưng Đạo, tiêu diệt toàn bộ lực lượng địch. ",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Chongquannguyenlan3.svg/1280px-Chongquannguyenlan3.svg.png"
    },
    {
      year: "1400",
      title: "Kết thúc triều đại",
      description: "Nhà Hồ thay thế",
      longDescription:
      "Triều Trần suy yếu, Hồ Quý Ly phế truất vua Trần (Trần Thiếu Đế), lên làm vua, lập triều đại mới: Nhà Hồ , lấy quốc hiệu là Đại Ngu (1400-1407).",
      image: "https://upload.wikimedia.org/wikipedia/vi/thumb/9/9b/Tranh_s%C6%A1n_d%E1%BA%A7u_H%E1%BB%93_Qu%C3%BD_Ly.jpg/250px-Tranh_s%C6%A1n_d%E1%BA%A7u_H%E1%BB%93_Qu%C3%BD_Ly.jpg"
    }
  ]
  },
  {
    id: 2,
    title: "Hồ Chí Minh",
    category: "Nhân vật lịch sử",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Ho_Chi_Minh_-_1946_Portrait.jpg/960px-Ho_Chi_Minh_-_1946_Portrait.jpg",
    shortDescription: "Lãnh tụ vĩ đại của Việt Nam",
     timeline: [
    {
      year: "1890",
      title: "Sinh ra tại Nghệ An",
      description: "Xuất thân từ gia đình nhà nho yêu nước",
      longDescription: "Hồ Chí Minh (tên khai sinh Nguyễn Sinh Cung) sinh ngày 19/5/1890 tại Nghệ An. Gia đình có truyền thống yêu nước, cha là Nguyễn Sinh Sắc — một nhà nho có tư tưởng tiến bộ."
      ,
      image: "https://cdn.dealtoday.vn/c78f7bea8c2c495c9ef48db642bee447.jpg"
    },

    {
      year: "1911",
      title: "Ra đi tìm đường cứu nước",
      description: "Rời bến Nhà Rồng",
      longDescription: "Nguyễn Tất Thành rời Việt Nam trên tàu Amiral Latouche-Tréville. Bắt đầu hành trình hơn 30 năm tìm đường giải phóng dân tộc."
      ,
      image: "https://baotanghochiminh.vn/pic/News/images/B%E1%BA%A3o%20t%C3%A0ng%20HCM%20n%C4%83m%202021/Th%C3%A1ng%207/Thumbnails035220160552223--NguyenAiQuoc2.jpg"
    },

    {
      year: "1919",
      title: "Gửi bản yêu sách tới Versailles",
      description: "Đòi quyền tự do cho Việt Nam",
      longDescription: `
Tại Hội nghị Versailles, Nguyễn Ái Quốc gửi bản yêu sách
đòi quyền tự do và bình đẳng cho dân tộc Việt Nam.

Tuy không được chấp nhận, nhưng đây là bước ngoặt đưa tên tuổi ra quốc tế.
      `,
      image: "https://baotanghochiminh.vn/pic/Customer/8_636582237173155310_HasThumb.jpg"
    },

    {
      year: "1930",
      title: "Thành lập Đảng Cộng sản Việt Nam",
      description: "Hợp nhất các tổ chức cộng sản",
      longDescription: `
Nguyễn Ái Quốc thống nhất các tổ chức cộng sản tại Hồng Kông,
thành lập Đảng Cộng sản Việt Nam.

Đặt nền móng cho cách mạng Việt Nam.
      `,
      image: "https://daknong.1cdn.vn/2023/02/03/baolamdong.vn-file-e7837c02845ffd04018473e6df282e92-022023-_anh-1-08_20230202190934.jpg"
    },

    {
      year: "1941",
      title: "Về nước lãnh đạo cách mạng",
      description: "Thành lập Việt Minh",
      longDescription: `
Sau nhiều năm hoạt động ở nước ngoài,
Hồ Chí Minh trở về Việt Nam.

Thành lập Mặt trận Việt Minh, chuẩn bị cho cách mạng.
      `,
      image: "https://media.baocaobang.vn/upload/image/201601/medium/56101_bac%20ho%20ve%20pac%20bo.jpg"
    },

    {
      year: "1945",
      title: "Tuyên ngôn độc lập",
      description: "Khai sinh nước Việt Nam Dân chủ Cộng hòa",
      longDescription: `
Ngày 2/9/1945 tại Quảng trường Ba Đình, Hồ Chí Minh đọc Tuyên ngôn độc lập.

Chính thức thành lập nước Việt Nam Dân chủ Cộng hòa.
      `,
      image: "https://bnctu.lamdong.dcs.vn/resize.aspx?file=%2FPortals%2F16%2Fmedia%2Fnewsimage%2F2%2F-%2F0%2F2-00f0528e-5f5a-40ab-ae21-791ec14d1c7e.jpg&w=800&h=-1"
    },

    {
      year: "1946",
      title: "Kháng chiến chống Pháp",
      description: "Toàn quốc kháng chiến",
      longDescription: `
Lời kêu gọi toàn quốc kháng chiến chống thực dân Pháp.

Mở đầu cuộc chiến kéo dài 9 năm.
      `,
      image: "https://upload.wikimedia.org/wikipedia/vi/f/f2/Toanquockhangchien.jpg"
    },

    {
      year: "1954",
      title: "Chiến thắng Điện Biên Phủ",
      description: "Kết thúc chiến tranh với Pháp",
      longDescription: `
Chiến thắng Điện Biên Phủ làm thay đổi cục diện chiến tranh,
dẫn đến Hiệp định Genève.

Việt Nam tạm thời chia cắt hai miền.
      `,
      image: "https://dienbientv.vn/dataimages/201604/original/images1139304_6810aa9d609525dimages941103_media_thumb1382169701.jpg"
    },

    {
      year: "1960",
      title: "Xây dựng CNXH miền Bắc",
      description: "Phát triển đất nước",
      longDescription: `
Miền Bắc bước vào thời kỳ xây dựng chủ nghĩa xã hội,
đồng thời hỗ trợ cách mạng miền Nam.
      `,
      image: "https://cdnimage.daihoidang.vn/t800/uploaded/vnp/uploaded/lanlt/2021_01_18/ttxvn_dai_hoi_3_23.jpg"
    },

    {
      year: "1969",
      title: "Qua đời",
      description: "Kết thúc cuộc đời",
      longDescription: `
Hồ Chí Minh qua đời ngày 2/9/1969.

Để lại di sản lớn về tư tưởng và cách mạng.
      `,
      image: "https://nghiencuuquocte.org/wp-content/uploads/2021/08/04.jpg"
    }
  ]
  },
  {
    id: 3,
    title: "Thăng Long",
    category: "Di tích lịch sử",
    image: "https://motogo.vn/wp-content/uploads/2023/10/hoang-thanh-thang-long-13.jpg",
    shortDescription: "Di sản văn hóa nổi tiếng",
    timeline: [
      {
    year: "Trước 1010",
    title: "Thời kỳ tiền Thăng Long",
    description: "Khu vực Cổ Loa và Đại La",
    longDescription:
      "Trước khi trở thành Thăng Long, khu vực này từng là kinh đô Cổ Loa của An Dương Vương và sau đó là trung tâm hành chính Đại La dưới thời Bắc thuộc.",
    image: "https://images.openai.com/static-rsc-4/GMvJpxB4gU1a-_tRHoJ8oCmxnfuZWUhSytPVRg_u7J39aZR6rrz36fcqo5U8qHL5KCbkfMJXDKF8KrDn-nqokbC2a03yEIkmgzqqTef7Oi2nPi1GSLUD0oAZCy2Ijq6KMCaUB2Xdw7gDuSQAU_YvbO-nRbuRqtcz_swoTTZSRUs?purpose=inline"
  },

  {
    year: "1010",
    title: "Lý Thái Tổ dời đô",
    description: "Khai sinh Thăng Long",
    longDescription:
      "Vua Lý Thái Tổ ban Chiếu dời đô từ Hoa Lư ra Đại La, đổi tên thành Thăng Long (rồng bay lên), mở ra thời kỳ phát triển rực rỡ.",
    image: "https://images.openai.com/static-rsc-4/kicpHs5glimnVdGnuAPoH-ExMjl0fzI_PmGyVv1FaukXwY9NY8jm9EC39lRSQxBVtGzZ1Pe84IrlKmKo7yFT_G7JPy2YUsV51bkS9GE5XXwRzkWwKQsTCWQThvumT1qorpiW8PRwfQEzmtN2-IgDEv-Lho51FDWG-elL3WkQ-w8?purpose=inline"
  },

  {
    year: "Thế kỷ XI–XIII",
    title: "Thăng Long thời Lý",
    description: "Phát triển văn hóa – chính trị",
    longDescription:
      "Thăng Long trở thành trung tâm lớn của Đại Việt, xây dựng Văn Miếu, chùa chiền và hệ thống cung điện.",
    image: "https://images.openai.com/static-rsc-4/CRe-6jkN1ryFkL7FV195mQj1-UaIyqu0Yu-YwK4UNNuTg1IarOLHUi1F9ETv9XZRj1DFSXwLVQjYZndG-386S9FfHdNHzroiyT9ur4vC49MDN7DMsu7yDI1LND6WWtLe09CBgbPYNVNy3I1We84gr7_hOd54_cn8JDfWbfVU3BY?purpose=inline"
  },

  {
    year: "1258 – 1288",
    title: "Kháng chiến chống Nguyên Mông",
    description: "Thăng Long bị chiếm và giải phóng",
    longDescription:
      "Quân Nguyên nhiều lần chiếm Thăng Long nhưng quân dân Đại Việt đã phản công giành lại thắng lợi, đỉnh cao là chiến thắng Bạch Đằng.",
    image: "https://images.openai.com/static-rsc-4/d24WexFvJjOQ1X-7gPEoabq1TKy3AYhXws0Nu8oHySt52FXePiQg5vzw5zMmCxjshsiuAKr2KVEsNcG9Fq7V50MqGiOybtsR9lIvcOK3mow_En3Fsi_6wRPH-uk83ShEl0_h1tyoY3FptluwihHjFNWmpBzvLdMrfrWzch8Ngw0?purpose=inline"
  },

  {
    year: "1428",
    title: "Lê Lợi lên ngôi",
    description: "Đổi tên thành Đông Kinh",
    longDescription:
      "Sau khi đánh bại quân Minh, Lê Lợi lên ngôi và đổi tên Thăng Long thành Đông Kinh, bước vào thời kỳ thịnh trị.",
    image: "https://images.openai.com/static-rsc-4/Pg_1Rlz_iP309kFmgkNAy2Uje79daFiINYp6psrQldIvSKeZghRMDhWSvb05E-rOjzAxwzx07kpvpihYFDnp0yLUGMHEA_tXMMr-9lNjwNfL54NhVCq79q45U1fEnitKXtFXsaXjXXlwkHuXw8Uh7ra7DRI85BVpNGce8Ubs0-c?purpose=inline"
  },

  {
    year: "Thế kỷ XVI–XVIII",
    title: "Thời kỳ Trịnh – Nguyễn",
    description: "Biến động chính trị",
    longDescription:
      "Thăng Long là trung tâm quyền lực của chúa Trịnh, nhưng đất nước bị chia cắt và chiến tranh kéo dài.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/%C4%90%C3%A0ng_Trong_-_%C4%90%C3%A0ng_Ngo%C3%A0i_%281757%29.png"
  },

  {
    year: "1786",
    title: "Tây Sơn tiến vào Thăng Long",
    description: "Lật đổ họ Trịnh",
    longDescription:
      "Nguyễn Huệ tiến quân ra Bắc, đánh bại họ Trịnh và thay đổi cục diện chính trị Đại Việt.",
    image: "https://lh3.googleusercontent.com/proxy/FjPUyIJ5ttdUfttQr1z41L7ecGB5mYxKteDr2G4I0JfwIRqgIBwiqskK3vOX4-qTJ8ocMAOzzYvss6902w1bJ7IMpMyQ8p-61W8z6k3B7sUea8d0RpuBvjJAelasQHlRqTAh46s"
  },

  {
    year: "1802",
    title: "Nhà Nguyễn lên ngôi",
    description: "Thăng Long mất vị thế kinh đô",
    longDescription:
      "Gia Long thống nhất đất nước, đặt kinh đô tại Huế. Thăng Long trở thành trấn Bắc Thành và sau đó đổi tên thành Hà Nội.",
    image: "https://vnn-imgs-f.vgcloud.vn/2020/01/21/00/nghi-le-khong-the-thieu-cua-cac-vi-vua-viet-vao-ngay-tet.jpg"
  },

  {
    year: "1888",
    title: "Thời Pháp thuộc",
    description: "Hà Nội thành thành phố thuộc địa",
    longDescription:
      "Hà Nội trở thành trung tâm hành chính của Đông Dương thuộc Pháp, phát triển theo kiến trúc phương Tây.",
    image: "https://longvietarch.wordpress.com/wp-content/uploads/2024/10/quan-phap-danh-thanh-hn.jpg?w=490"
  },

  {
    year: "1945",
    title: "Cách mạng tháng Tám",
    description: "Hà Nội trở thành thủ đô",
    longDescription:
      "Sau khi giành độc lập, Hà Nội trở thành thủ đô của nước Việt Nam Dân chủ Cộng hòa.",
    image: "https://moha.gov.vn/Media_Share/BoNoiVu/PublishingImages/TinTuc/NoiDung/2025/7/16-37-16-29-07-2025-anh-2_1.jpg"
  },

  {
    year: "1975",
    title: "Thống nhất đất nước",
    description: "Hà Nội là thủ đô Việt Nam",
    longDescription:
      "Sau khi đất nước thống nhất, Hà Nội tiếp tục là thủ đô của Việt Nam.",
    image: "https://file3.qdnd.vn/data/images/0/2025/04/06/upload_2222/tinh-than-30-thang-4.png?dpi=150&quality=100&w=870"
  },

  {
    year: "Hiện nay",
    title: "Hà Nội hiện đại",
    description: "Thành phố phát triển",
    longDescription:
      "Hà Nội là trung tâm chính trị, văn hóa và kinh tế lớn của Việt Nam với sự phát triển mạnh mẽ.",
    image: "https://images.openai.com/static-rsc-4/WiNaUcZDgivod0xKqp2TinlxC5uHM_R7vrLcrAHQiBeeXQmJpkX_qdIDBM4kSs8e4SUhjaVtlDLTt2RRLxW-DvqUsV0DzRyrzmigBySFoiiDSvnx88j6pTgZLnqBGyRd_b1cuy9KCVpqurGIffV534H27Ev8F7ukqjM53hJ-Fsk?purpose=inline"
  }
]
  },
  {
  id: 4,
  title: "Triều Lý",
  category: "Triều đại phong kiến",
  image: "https://i.ytimg.com/vi/CSRKgDUKDD0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDBwagRDNrTPuKISh0lFInnhrpGIw",
  shortDescription: "Triều đại đặt nền móng cho quốc gia Đại Việt độc lập và phát triển văn hóa Phật giáo.",
  timeline: [
    {
      year: "1009",
      title: "Lý Công Uẩn lên ngôi",
      category: "politics",
      description: "Thành lập triều Lý",
      longDescription: "Lý Công Uẩn lên ngôi, lập ra triều Lý, mở đầu thời kỳ ổn định lâu dài.",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/T%C6%B0%E1%BB%A3ng_L%C3%BD_Th%C3%A1i_T%E1%BB%95.jpeg"
    },
    {
      year: "1010",
      title: "Dời đô ra Thăng Long",
      category: "politics",
      description: "Kinh đô mới của Đại Việt",
      longDescription: "Ban Chiếu dời đô, chọn Thăng Long làm trung tâm chính trị và kinh tế.",
      image: "https://truongthanhmedia.com/upload/page/2024/10/06/chieu-doi-do-hinh-anh-02-e1685602126211.jpg?800x600"
    },
    {
      year: "1070",
      title: "Xây dựng Văn Miếu",
      category: "culture",
      description: "Biểu tượng giáo dục",
      longDescription: "Văn Miếu được xây dựng, khẳng định vai trò Nho học.",
      image: "https://kimlientravel.com.vn/upload/image/van-mieu-quoc-tu-giam-2.jpg"
    },
    {
      year: "1075",
      title: "Khoa thi đầu tiên",
      category: "culture",
      description: "Thi cử Nho học",
      longDescription: "Thi tuyển quan lại bằng Nho học lần đầu tiên.",
      image: "https://image.ngaynay.vn/w890/Uploaded/2026/znaeng/2021_05_12/unnamed-11-1642.jpeg"
    },
    {
      year: "1077",
      title: "Kháng chiến chống Tống",
      category: "war",
      description: "Chiến thắng Như Nguyệt",
      longDescription: "Lý Thường Kiệt đánh bại quân Tống với chiến lược phòng thủ chủ động.",
      image: "https://img.loigiaihay.com/picture/2025/0805/gr.png"
    },
    {
      year: "1225",
      title: "Kết thúc triều Lý",
      category: "decline",
      description: "Chuyển giao sang nhà Trần",
      longDescription: "Triều Lý suy yếu và chuyển quyền lực sang nhà Trần.",
      image: "https://www.kidsup.net/wp-content/uploads/2025/08/tran-danh-song-nhu-nguyet.jpg"
    }
  ]
},
{
  id: 5,
  title: "Triều Nguyễn",
  category: "Triều đại phong kiến",
  image: "https://i.ytimg.com/vi/HVWZ7E_Q6yY/maxresdefault.jpg",
  shortDescription: "Triều đại phong kiến cuối cùng của Việt Nam.",
  timeline: [
    {
      year: "1802",
      title: "Gia Long thống nhất đất nước",
      category: "politics",
      description: "Lập triều Nguyễn",
      longDescription: "Nguyễn Ánh lên ngôi, thống nhất đất nước sau nội chiến.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Emperor_Gia_Long.jpg/250px-Emperor_Gia_Long.jpg"
    },
    {
      year: "1804",
      title: "Đặt quốc hiệu Việt Nam",
      category: "politics",
      description: "Tên gọi quốc gia",
      longDescription: "Chính thức đặt tên nước là Việt Nam.",
      image: "https://photo.znews.vn/w660/Uploaded/mdf_nsozxd/2019_03_12/4.jpg"
    },
    {
      year: "1820",
      title: "Thời Minh Mạng",
      category: "politics",
      description: "Cải cách hành chính",
      longDescription: "Củng cố quyền lực trung ương.",
      image: "https://laque.vn/wp-content/uploads/2021/06/vua-minh-mang-1024x649.jpg"
    },
    {
      year: "1858",
      title: "Pháp xâm lược",
      category: "war",
      description: "Mất chủ quyền dần",
      longDescription: "Liên quân Pháp - Tây Ban Nha tấn công Đà Nẵng.",
      image: "https://sohanews.sohacdn.com/2019/1/31/photo-1-1548944224110428365062.jpg"
    },
    {
      year: "1884",
      title: "Hiệp ước bảo hộ",
      category: "decline",
      description: "Pháp kiểm soát",
      longDescription: "Việt Nam trở thành thuộc địa Pháp.",
      image: "https://baotanglichsu.vn/DataFiles/Uploaded/image/hoa%20uoc%202.jpg"
    },
    {
      year: "1945",
      title: "Kết thúc triều Nguyễn",
      category: "decline",
      description: "Bảo Đại thoái vị",
      longDescription: "Chấm dứt chế độ phong kiến Việt Nam.",
      image: "https://media-cdn-v2.laodong.vn/storage/newsportal/2025/8/30/1566448/Ngu-Phung-2.jpg"
    }
  ]
}
];

export default topics;