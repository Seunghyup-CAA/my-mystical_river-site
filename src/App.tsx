import { useState } from "react";

const coverKo = "/cover.png";
const coverEn = "/cover_en.png";
const authorImg = "/Soon Hong 1.png";
const amazonLink = "#";

export default function App() {
  const [lang, setLang] = useState<"ko" | "en">("ko");
  const isKo = lang === "ko";

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">

      <div className="p-4 flex justify-end gap-2">
        <button onClick={() => setLang("ko")}>KOR</button>
        <button onClick={() => setLang("en")}>ENG</button>
      </div>

      <h1 className="text-center text-3xl font-bold">
        {isKo ? "신비스러운 나의 강들" : "My Mystical River"}
      </h1>

      <div className="text-center mt-4">
        <img src={isKo ? coverKo : coverEn} className="mx-auto max-w-md" />
      </div>

      <section className="p-6 text-center">
        <h2 className="text-xl font-bold">책 소개</h2>
        <p className="mt-2">
          {isKo
            ? "한 인간의 삶과 기억을 담은 자전 에세이입니다."
            : "A memoir of life, memory, and journey."}
        </p>
      </section>

      {/* 추가된 섹션 */}
      <section className="px-6 py-4">
        <div className="mx-auto max-w-xl bg-white p-6 shadow text-center rounded-xl">
          <h2 className="text-xl font-bold mb-3">
            {isKo ? "문의 및 추가 정보" : "Contact & More Information"}
          </h2>
          <p className="mb-4">
            {isKo
              ? "문의나 추가 정보는 이메일로 연락해주세요."
              : "For inquiries, please contact via email."}
          </p>

          <a href="mailto:seunghyuplee@hotmail.com"
             className="bg-teal-700 text-white px-4 py-2 rounded">
            {isKo ? "이메일 문의하기" : "Email Contact"}
          </a>

          <div className="mt-4">
            <a href={amazonLink} className="text-blue-600 underline">
              {isKo ? "Amazon에서 보기" : "View on Amazon"}
            </a>
          </div>
        </div>
      </section>

      <section className="p-6">
        <h2 className="text-xl font-bold">목차</h2>
        <ul className="mt-2">
          <li>1. 시작</li>
          <li>2. 여정</li>
        </ul>
      </section>

      <section className="p-6 text-center">
        <h2 className="text-xl font-bold">작가 소개</h2>
        <img src={authorImg} className="mx-auto w-32 mt-3" />
      </section>

    </div>
  );
}
