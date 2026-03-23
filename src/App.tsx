import { useState } from "react";

const coverKo = "/cover.png";
const coverEn = "/cover_en.png";
const authorImg = "/Soon Hong 1.png";

const placeholderCover = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1200" viewBox="0 0 800 1200">
  <rect width="100%" height="100%" fill="#d1d5db"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Georgia, serif" font-size="36" fill="#475569">Book Cover</text>
</svg>` )}`;

const placeholderAuthor = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
  <rect width="100%" height="100%" fill="#e5e7eb"/>
  <circle cx="300" cy="220" r="90" fill="#cbd5e1"/>
  <rect x="180" y="340" width="240" height="140" rx="70" fill="#cbd5e1"/>
  <text x="50%" y="540" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="28" fill="#475569">Author Photo</text>
</svg>` )}`;

export default function MyMysticalRiverWebsite() {
  const [lang, setLang] = useState("ko");
  const [koSrc, setKoSrc] = useState(coverKo);
  const [enSrc, setEnSrc] = useState(coverEn);
  const [authorSrc, setAuthorSrc] = useState(authorImg);
  const [showBookMore, setShowBookMore] = useState(false);
  const [showAuthorMore, setShowAuthorMore] = useState(false);
  const isKo = lang === "ko";

  const t = isKo
    ? {
        badge: "홍순완 자전에세이",
        title: "신비스러운 나의 강들",
        subtitle: "남강에서 허드슨강까지",
        hero: "삶과 기억, 고통과 감사가 하나의 흐름으로 이어지는 자전에세이",
        eventLabel: "📢 출판기념회 안내",
        eventTitle: "『신비스러운 나의 강들』 출판기념회",
        eventDate: "2026년 4월 12일",
        eventDesc: "소중한 분들을 모시고 출판기념회를 개최합니다. 함께 자리해 주셔서 이 의미 있는 시간을 나누어 주시기 바랍니다.",
        eventBtn: ["이메일로", "문의하기"],
        about: "책 소개",
        aboutShort:
          "병상에서 시작된 기록이 한 인간의 전 생애를 돌아보게 하는 자전에세이입니다. 고향과 이민의 삶, 가족과 신앙, 기억과 죽음, 슬픔과 감사가 하나의 흐름 안에서 만납니다.",
        aboutMore:
          "이 책은 남강의 기억에서 시작해 허드슨강에 이르기까지, 한 사람의 내면과 시대의 흐름을 함께 담아냅니다. 투병의 시간, 가족의 기억, 신앙과 성찰, 이민자의 삶이 조용하지만 깊은 문장으로 이어집니다.",
        buy: "Amazon 구매",
        contact: "문의하기",
        readMore: "자세히 보기",
        readLess: "접기",
        featureTitle: "이 책이 담고 있는 것",
        featureCards: [
          {
            title: "두 강이 만나는 자리에서",
            body: "남강과 허드슨강, 고향과 이민의 삶, 병상에서의 성찰과 신앙의 기록이 한 권의 에세이로 흐릅니다.",
          },
          {
            title: "투병을 넘어 삶 전체를 돌아보는 책",
            body: "맨해튼 재활원에서 시작된 기록은 가족, 친구, 기억, 죽음, 사랑, 감사에 대한 깊은 묵상으로 확장됩니다.",
          },
          {
            title: "한 인간의 시간과 역사",
            body: "1945년 진주에서 시작해 미국 이민, 사업, 마라톤, 신앙, 문학 활동으로 이어진 작가의 여정을 담았습니다.",
          },
        ],
        quoteTitle: "책 속의 문장",
        quotes: [
          "“맨해튼은 인간의 내면이 외화된 풍경이다.”",
          "“남강과 허드슨, 어머니와 아버지, 슬픔과 희망이 함께 흐르다가 마침내 하나의 강이 된다.”",
          "“고통을 감사로 받아들이면 그것이 강이 되고, 그 강이 빛이 된다.”",
        ],
        toc: "목차",
        tocItems: [
          "작가의 말",
          "프롤로그",
          "1부. 허드슨강은 흐르는데",
          "2부. 내 생의 유별난 체험",
          "3부. 이윽고 보내는 편지",
          "4부. 진주, 그리고 맨해튼",
          "애필로그",
        ],
        author: "작가 소개",
        authorBody:
          "1945년 경남 진주 출생. 1977년 미국으로 이민하여 국제무역 사업을 전개했습니다. 마라톤 러너이자 월남전 참전용사, 천주교 신자로 살아왔으며 고향과 미국에서의 시간, 인간과 삶에 대한 성찰이 이 책의 바탕을 이룹니다.",
        authorMore:
          "오랜 시간 미국과 한국을 오가며 살아온 작가는 사업, 가족, 질병, 신앙, 문학을 함께 통과하며 삶의 의미를 묵상해 왔습니다. 이 책은 그러한 시간의 응축이며, 개인의 회고를 넘어 독자 자신의 삶을 돌아보게 하는 힘을 지닙니다.",
      }
    : {
        badge: "Autobiographical Memoir",
        title: "My Mystical River",
        subtitle: "From the Nam River to the Hudson",
        hero: "A deeply reflective memoir where life, memory, suffering, and gratitude flow together as one continuous journey.",
        eventLabel: "📢 Book Launch Event",
        eventTitle: "My Mystical River Book Launch",
        eventDate: "April 12, 2026",
        eventDesc:
          "You are warmly invited to join this special book launch gathering. We would be honored to share this meaningful occasion with you.",
        eventBtn: ["Contact by", "Email"],
        about: "About the Book",
        aboutShort:
          "This memoir, begun during a time of illness, reflects on an entire lifetime of experiences, memories, and meaning. It brings together homeland and immigration, family and faith, memory and mortality in one continuous flow.",
        aboutMore:
          "Beginning with memories of the Nam River and extending to life by the Hudson, the book gathers illness, family, faith, immigration, and reflection into one sustained autobiographical narrative.",
        buy: "Buy on Amazon",
        contact: "Contact",
        readMore: "Read More",
        readLess: "Close",
        featureTitle: "What This Book Holds",
        featureCards: [
          {
            title: "Where Two Rivers Meet",
            body: "The Nam River and the Hudson, homeland and immigration, illness and faith come together in one flowing memoir.",
          },
          {
            title: "A Book That Reflects on an Entire Life",
            body: "What began in a Manhattan rehabilitation center expands into meditation on family, friendship, memory, death, love, and gratitude.",
          },
          {
            title: "One Person's Time and History",
            body: "From Jinju in 1945 to immigration, business, marathon running, faith, and literary life in America, the author's path is gathered here.",
          },
        ],
        quoteTitle: "Lines from the Book",
        quotes: [
          '"Manhattan is a landscape where the inner life has been externalized."',
          '"The Nam and the Hudson, mother and father, sorrow and hope flow together until they become a single river."',
          '"When suffering is accepted with gratitude, it becomes a river, and that river becomes light."',
        ],
        toc: "Contents",
        tocItems: [
          "Prologue: A Record for the Years Remaining",
          "Part I. The Hudson Flows On",
          "Part II. The Extraordinary Encounters of My Life",
          "Part III. Letters Sent at Long Last",
          "Part IV. Jinju, and Manhattan",
          "Epilogue: Our Family",
          "Proofreader's Note: A Note from the Proofreader",
        ],
        author: "About the Author",
        authorBody:
          "Born in Jinju, Korea, in 1945, Soon Wan Hong immigrated to the United States in 1977 and built a career in international trade. A marathon runner, Vietnam War veteran, and Catholic believer, he has carried a lifelong reflection on homeland, America, faith, and the meaning of human life.",
        authorMore:
          "Living between Korea and the United States for decades, the author has reflected on work, family, illness, faith, and literature. This memoir distills those years into a quiet but deeply personal record.",
      };

  const amazonLink = isKo
    ? "https://www.amazon.com/dp/B0GTHL9C3D?ref=ppx_yo2ov_dt_b_fed_asin_title"
    : "https://www.amazon.com/dp/B0GR1Q2B2Z";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="fixed right-4 top-4 z-50 flex gap-2">
        <button
          onClick={() => setLang("ko")}
          className={`rounded px-3 py-1 ${isKo ? "bg-black text-white" : "border bg-white"}`}
        >
          KOR
        </button>
        <button
          onClick={() => setLang("en")}
          className={`rounded px-3 py-1 ${!isKo ? "bg-black text-white" : "border bg-white"}`}
        >
          ENG
        </button>
      </div>

      <section className="bg-teal-800 px-6 py-10 text-white md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="inline-flex rounded-full border border-white/30 px-3 py-1 text-xs">{t.badge}</div>
          {isKo && (
            <div className="mt-4 text-lg tracking-[0.12em] text-[#e7d9a8]" style={{ fontVariant: "small-caps", textTransform: "lowercase" }}>
              my mystical river
            </div>
          )}
          <h1 className="mt-2 text-3xl font-bold md:text-5xl">{t.title}</h1>
          <p className={`mt-3 text-xl md:text-2xl ${!isKo ? "italic opacity-90" : ""}`}>{t.subtitle}</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/90 md:text-lg">{t.hero}</p>
          {!isKo && <div className="mt-3 text-sm tracking-[0.08em] text-white/80">by Soon Wan Hong</div>}
        </div>
      </section>

      <section className="px-6 py-6 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 rounded-2xl border border-[#e7d9a8] bg-[#fff8e6] p-5 md:flex-row md:items-center">
          <div>
            <div className="text-sm font-semibold tracking-wide text-[#b89f5b]">{t.eventLabel}</div>
            <div className="mt-1 text-xl font-bold">{t.eventTitle}</div>
            <div className="mt-2 text-slate-700">{t.eventDate}</div>
            <div className="mt-1 leading-7 text-slate-600">{t.eventDesc}</div>
          </div>
          <a
            href="mailto:seunghyuplee@hotmail.com"
            className="inline-flex min-h-[78px] min-w-[92px] flex-col items-center justify-center rounded-xl border border-[#e7d9a8] bg-white px-3 py-2 text-center text-[12px] font-semibold leading-5 text-[#0f4c5c] shadow-sm"
          >
            <span>{t.eventBtn[0]}</span>
            <span>{t.eventBtn[1]}</span>
          </a>
        </div>
      </section>

      <section className="px-6 py-4 md:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 rounded-[28px] bg-white p-6 shadow md:grid-cols-[280px_minmax(0,1fr)] md:p-8">
          <div className="text-center">
            <img
              src={isKo ? koSrc : enSrc}
              onError={() => (isKo ? setKoSrc(placeholderCover) : setEnSrc(placeholderCover))}
              className="mx-auto w-full max-w-[250px] rounded-2xl shadow-[0_35px_40px_-15px_rgba(0,0,0,0.35)]"
              alt={isKo ? "한글판 표지" : "영문판 표지"}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">{t.about}</h2>
            <p className="mt-4 leading-8 text-slate-700">{t.aboutShort}</p>
            {showBookMore && (
              <p className="mt-4 leading-8 text-slate-600">{t.aboutMore}</p>
            )}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={amazonLink} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-black px-5 py-3 text-center font-bold text-white">
                {t.buy}
              </a>
              <a href="mailto:seunghyuplee@hotmail.com" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center font-bold text-slate-900">
                {t.contact}
              </a>
              <button
                onClick={() => setShowBookMore(!showBookMore)}
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center font-bold text-slate-900"
              >
                {showBookMore ? t.readLess : t.readMore}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-4 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            {t.featureCards.map((card) => (
              <div key={card.title} className="rounded-[24px] bg-white p-6 shadow">
                <h3 className="text-3xl font-bold leading-tight">{card.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-6 md:px-10">
        <div className="mx-auto max-w-6xl rounded-[28px] bg-[#071632] p-7 text-white shadow">
          <h2 className="text-3xl font-bold">{t.quoteTitle}</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {t.quotes.map((quote) => (
              <div key={quote} className="rounded-[24px] border border-white/15 px-6 py-8 text-2xl leading-[1.8] text-white/95">
                {quote}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-4 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow">
          <h2 className="text-3xl font-bold">{t.toc}</h2>
          <div className="mt-5 space-y-3">
            {t.tocItems.map((i) => (
              <div key={i} className="rounded-xl border border-slate-200 px-4 py-3 text-slate-700">
                {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-4 pb-10 md:px-10">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 shadow">
          <h2 className="text-3xl font-bold">{t.author}</h2>
          <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-start">
            <div className="text-center md:text-left">
              <img
                src={authorSrc}
                onError={() => setAuthorSrc(placeholderAuthor)}
                className="mx-auto w-[160px] rounded-xl shadow md:mx-0"
                alt="작가 사진"
              />
            </div>
            <div>
              <p className="leading-8 text-slate-700">{t.authorBody}</p>
              {showAuthorMore && (
                <p className="mt-4 leading-8 text-slate-600">{t.authorMore}</p>
              )}
              <div className="mt-4">
                <button
                  onClick={() => setShowAuthorMore(!showAuthorMore)}
                  className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-900"
                >
                  {showAuthorMore ? t.readLess : t.readMore}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
