import React, { useMemo, useState } from "react";
import { Globe } from "lucide-react";
import {
  pageContent,
  candidatesPresented,
  candidatesReferred,
  comparisonRows,
} from "../content";

function CandidateCard({ candidate, labels, lang }) {
  const data = candidate[lang];
  const isArabic = lang === "ar";

  const fields = [
    ["birth", data.birth],
    ["residence", data.residence],
    ["rank", data.rank],
    ["currentPosition", data.currentPosition],
    ["specialization", data.specialization],
    ["education", data.education],
    ["career", data.career],
    ["achievements", data.achievements],
    ["note", data.note],
    ["stance", data.stance],
  ];

  return (
    <article
      dir={isArabic ? "rtl" : "ltr"}
      className={`group overflow-hidden rounded-[28px] border border-[#d7deea] bg-white shadow-[0_10px_35px_rgba(13,34,64,0.06)] ${
        isArabic ? "text-right" : ""
      }`}
    >
      <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
        <div className="p-6 pb-0 lg:p-6">
          <div className="aspect-square w-full overflow-hidden rounded-[24px] border border-[#d7deea] bg-[#edf2f8]">
            <img
              src={candidate.image}
              alt={data.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>

        <div className="p-6 pt-0 sm:p-8 sm:pt-0 lg:pl-0 lg:pt-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex rounded-full bg-[#0d2240] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white">
              {labels.candidate} {candidate.id}
            </span>

            {data.nationality && (
              <span className="inline-flex rounded-full border border-[#d8c48a]/40 bg-[#d8c48a]/10 px-3 py-1.5 text-xs font-semibold text-[#8a7440]">
                {data.nationality}
              </span>
            )}
          </div>

          <h3 className="mt-5 text-3xl font-bold leading-tight text-[#0d2240]">
            {data.name}
          </h3>

          <div className="mt-6 grid gap-4">
            {fields.map(([key, value]) =>
              value ? (
                <div
                  key={key}
                  className="rounded-2xl border border-[#edf1f6] bg-[#fafcff] px-4 py-4"
                >
                  <div className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-[#7d8da5]">
                    {labels[key]}
                  </div>
                  <div className="text-[15px] leading-8 text-[#314760]">{value}</div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function SectionTitle({ eyebrow, title, lang }) {
  const isArabic = lang === "ar";

  return (
    <div dir={isArabic ? "rtl" : "ltr"} className={isArabic ? "text-right" : ""}>
      <div className="text-sm font-bold uppercase tracking-[0.35em] text-[#1c9ae4]">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-[#0d2240] sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function CandidatesPage() {
  const [lang, setLang] = useState("en");
  const t = useMemo(() => pageContent[lang], [lang]);
  const isArabic = lang === "ar";

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="overflow-hidden rounded-[34px] border border-[#d8c48a]/35 bg-white shadow-[0_24px_70px_rgba(13,34,64,0.08)]">
        <div className="border-b border-[#e4e7ee] bg-[#f8fbff] px-6 py-5 sm:px-8 lg:px-10">
          <div className={`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ${isArabic ? "sm:flex-row-reverse" : ""}`}>
            <div>
              <div className="inline-flex w-fit rounded-md bg-[#0d2240] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                {t.articleBadge}
              </div>
              <h1 className="mt-4 text-3xl font-bold text-[#0d2240] sm:text-4xl">
                {lang === "ar" ? "المترشحون" : "Candidates"}
              </h1>
            </div>

            <button
              onClick={() => setLang((prev) => (prev === "en" ? "ar" : "en"))}
              className="inline-flex items-center gap-2 rounded-2xl border border-[#d7deea] bg-white px-4 py-2 text-sm font-semibold text-[#0d2240] transition hover:bg-[#f3f7fb]"
            >
              <Globe className="h-4 w-4" />
              {t.switchLabel}
            </button>
          </div>
        </div>

        <div className="px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="rounded-[30px] border border-[#dce3ef] bg-[linear-gradient(180deg,#fbfcfe_0%,#f4f8fd_100%)] p-7 sm:p-9">
            <div className={`mx-auto max-w-4xl ${isArabic ? "text-right" : ""}`}>
              <div className="mb-4 inline-flex rounded-full border border-[#d8c48a]/45 bg-[#d8c48a]/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#8a7440]">
                2026
              </div>

              <h2 className="text-3xl font-bold leading-tight text-[#0d2240] sm:text-4xl">
                {t.introTitle}
              </h2>

              <p className="mt-3 text-lg font-semibold text-[#1c9ae4]">
                {t.introSub}
              </p>

              <p className="mt-6 text-[17px] leading-9 text-[#314760]">
                {t.introText}
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-10">
            <section className="rounded-[30px] border border-[#dce3ef] bg-[#fbfcfe] p-6 sm:p-8">
              <SectionTitle
                eyebrow={isArabic ? "أولًا" : "I."}
                title={t.contextTitle}
                lang={lang}
              />
              <p className={`mt-6 text-[16px] leading-9 text-[#314760] ${isArabic ? "text-right" : ""}`}>
                {t.contextText}
              </p>
            </section>

            <section className="rounded-[30px] border border-[#dce3ef] bg-[#fbfcfe] p-6 sm:p-8">
              <SectionTitle
                eyebrow={isArabic ? "ثانيًا" : "II."}
                title={t.presentedTitle}
                lang={lang}
              />
              <div className="mt-8 space-y-8">
                {candidatesPresented.map((candidate) => (
                  <CandidateCard
                    key={candidate.id}
                    candidate={candidate}
                    labels={t.labels}
                    lang={lang}
                  />
                ))}
              </div>
            </section>

            <section className="rounded-[30px] border border-[#dce3ef] bg-[#fbfcfe] p-6 sm:p-8">
              <SectionTitle
                eyebrow={isArabic ? "ثالثًا" : "III."}
                title={t.referredTitle}
                lang={lang}
              />
              <div className="mt-8 space-y-8">
                {candidatesReferred.map((candidate) => (
                  <CandidateCard
                    key={candidate.id}
                    candidate={candidate}
                    labels={t.labels}
                    lang={lang}
                  />
                ))}
              </div>
            </section>

            <section className="rounded-[30px] border border-[#dce3ef] bg-[#fbfcfe] p-6 sm:p-8">
              <SectionTitle
                eyebrow={isArabic ? "رابعًا" : "IV."}
                title={t.comparisonTitle}
                lang={lang}
              />

              <div className="mt-8 overflow-x-auto rounded-[20px] border border-[#dce3ef]">
                <table
                  dir={isArabic ? "rtl" : "ltr"}
                  className={`min-w-full border-collapse ${isArabic ? "text-right" : "text-left"}`}
                >
                  <thead>
                    <tr className="bg-[#0d2240] text-white">
                      <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.15em]">
                        {t.tableHeaders.candidate}
                      </th>
                      <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.15em]">
                        {t.tableHeaders.specialization}
                      </th>
                      <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.15em]">
                        {t.tableHeaders.previousPosition}
                      </th>
                      <th className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.15em]">
                        {t.tableHeaders.support}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows[lang].map((row, index) => (
                      <tr
                        key={row.candidate}
                        className={index % 2 === 0 ? "bg-[#fbfcfe]" : "bg-white"}
                      >
                        <td className="border-t border-[#e5ebf3] px-5 py-4 font-semibold text-[#0d2240]">
                          {row.candidate}
                        </td>
                        <td className="border-t border-[#e5ebf3] px-5 py-4 text-sm leading-7 text-[#546880]">
                          {row.specialization}
                        </td>
                        <td className="border-t border-[#e5ebf3] px-5 py-4 text-sm leading-7 text-[#546880]">
                          {row.previousPosition}
                        </td>
                        <td className="border-t border-[#e5ebf3] px-5 py-4 text-sm leading-7 text-[#546880]">
                          {row.support}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}