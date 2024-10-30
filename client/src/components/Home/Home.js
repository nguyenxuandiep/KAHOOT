import React from "react"
import styles from "./home.module.css"
import img1 from "../../assets/img1.jpeg"
import img2 from "../../assets/img2.jpeg"
import img3 from "../../assets/img3.svg"
import img4 from "../../assets/img4.svg"
import img5 from "../../assets/img5.svg"
import { useSelector } from "react-redux"

function Home() {
  const isLanguageEnglish = useSelector((state) => state.language.isEnglish)

  return (
    <main className={styles.page}>
      <section className={styles["page-section"]}>
        <section className={styles["first-section"]}>
          <div className={styles.banner}>
            <div className={styles["banner-body"]}>
              <h2 className={styles["banner-title"]}>
                {isLanguageEnglish
                  ? "Make learning awesome"
                  : "làm cho việc học trở nên tuyệt vời"}
              </h2>
              <p className={styles["banner-description"]}>
                {isLanguageEnglish
                  ? "Quizzly delivers engaging learning to billions"
                  : "Quizzly mang đến chương trình học hấp dẫn cho hàng tỷ người"}
              </p>
              <button className={styles["banner-button"]}>
                <a href="/">
                  {isLanguageEnglish
                    ? "Sign up for free"
                    : "Đăng ký miễn phí"}
                </a>
              </button>
            </div>
            <img src={img1} alt="" className={styles["banner-image"]} />
          </div>
          <div className={styles.banner}>
            <div className={styles["banner-body"]}>
              <h2 className={styles["banner-title"]}>
                {isLanguageEnglish ? "Explore content" : "Khám phá nội dung"}
              </h2>
              <p className={styles["banner-description"]}>
                {isLanguageEnglish
                  ? "Explore content and join one of the world’s largest educator communities."
                  : "Khám phá nội dung và tham gia một trong những cộng đồng giáo dục lớn nhất thể giới"}
              </p>
              <button className={styles["banner-button"]}>
                <a href="/">
                  {isLanguageEnglish
                    ? "Check public quizes"
                    : "Kiểm tra bài kiểm tra công khai"}
                </a>
              </button>
            </div>
            <img src={img2} alt="" className={styles["banner-image"]} />
          </div>
        </section>
        <section className={styles["second-section"]}>
          <div className={styles["section-background"]}></div>
          <div className={styles.info}>
            <div className={styles["info-body"]}>
              <h2 className={styles["info-title"]}>
                {isLanguageEnglish ? "Quizzly at school" : "Quizzly ở trường"}
              </h2>
              <p className={styles["info-description"]}>
                {isLanguageEnglish
                  ? "Engaging group and distance learning for teachers and students."
                  : "Học nhóm và học từ xa hấp dẫn dành cho giáo viên và học sinh"}
              </p>
              <a href="/" className={styles["info-link"]}>
                {isLanguageEnglish ? "Learn more" : "Tìm hiểu thêm"} &gt;
              </a>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles["info-body"]}>
              <h2 className={styles["info-title"]}>
                {isLanguageEnglish ? "Quizzly at work" : "Quizzly đang làm việc"}
              </h2>
              <p className={styles["info-description"]}>
                {isLanguageEnglish
                  ? "Deliver training, presentations, meetings and events in-person or on any video conferencing platform."
                  : "Thực hiện đào tạo, thuyết trình, họp và sự kiện trực tiếp hoặc trên bất kỳ nền tảng hội nghị truyền hình nào."}
              </p>
              <a href="/" className={styles["info-link"]}>
                {isLanguageEnglish ? "Learn more" : "Tìm hiểu thêm"} &gt;
              </a>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles["info-body"]}>
              <h2 className={styles["info-title"]}>
                {isLanguageEnglish ? "Quizzly at home" : "Quizzly tại nhà"}
              </h2>
              <p className={styles["info-description"]}>
                {isLanguageEnglish
                  ? "Learning Apps and games for family fun or home study."
                  : "Ứng dụng và trò chơi học tập cho gia đình vui chơi hoặc học tập tại nhà."}
              </p>
              <a href="/" className={styles["info-link"]}>
                {isLanguageEnglish ? "Learn more" : "Tìm hiêu thêm"} &gt;
              </a>
            </div>
          </div>
        </section>
        <section className={styles["third-section"]}>
          <h1>
            {isLanguageEnglish
              ? "How does Quizzly work?"
              : "Quizzly hoạt động thế nào?"}
          </h1>
          <div className={styles["card-container"]}>
            <div className={styles.card}>
              <img src={img3} alt="" />
              <div className={styles["card-body"]}>
                <h1>{isLanguageEnglish ? "Create" : "Tạo"}</h1>
                <p>
                  {isLanguageEnglish
                    ? "It only takes minutes to create a learning game or trivia quiz on any topic, in any language."
                    : "Chỉ mất vài phút để tạo một trò chơi học tập hoặc cấu đo vui về bất kì chủ đề nào, bằng bất kì ngôn ngữ nào."}
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <img src={img4} alt="" />
              <div className={styles["card-body"]}>
                <h1>
                  {isLanguageEnglish
                    ? "Host or share"
                    : "Lưu trữ hoặc chia sẻ"}
                </h1>
                <p>
                  {isLanguageEnglish
                    ? "Host a live game with questions on a big screen or share a game with remote players."
                    : "Tổ chức trò chơi trực tiếp với các câu hỏi trên màn hình lớn hoặc chia sẻ trò chơi với người chơi từ xa"}
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <img src={img5} alt="" />
              <div className={styles["card-body"]}>
                <h1>{isLanguageEnglish ? "Play" : "Chơi"}</h1>
                <p>
                  {isLanguageEnglish
                    ? "Game on! Join a kahoot with a PIN provided by the host and answer questions on your device."
                    : "Bắt đầu trò chơi! Tham gia Kahoot bằng mã PIN do người tổ chức cung cấp à trả lời câu hỏi trên thiết bị của bạn."}
                </p>
              </div>
            </div>
          </div>
          <div className={styles["card-button"]}>
            {isLanguageEnglish
              ? "Play Quizzly to see how it works."
              : "Chơi Quizzly để xem nó hoạt động thế nào"}{" "}
            &nbsp;
            <a href="/">
              {isLanguageEnglish
                ? "Explore our public quizes"
                : "Khám phá các câu đố công khai của chúng tôi"}
            </a>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Home
