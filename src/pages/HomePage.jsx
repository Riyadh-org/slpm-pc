import React from "react";
import { Link } from "react-router-dom";
import { Mail, MessageCircle, Play } from "lucide-react";
import { intro, backgroundText, rationaleText, outcomesRows } from "../content";

function Paragraphs({ text }) {
  return (
    <div className="space-y-4">
      {text.trim().split(/\n\s*\n/).map((para, i) => (
        <p
          key={i}
          className="text-base leading-8 text-[#314760]"
          dangerouslySetInnerHTML={{ __html: para.trim() }}
        />
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <main>
        <section className="relative overflow-hidden bg-[#0d2240] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(216,196,138,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="relative z-10 flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit rounded-full border border-[#d8c48a]/40 bg-[#d8c48a]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#d8c48a]">
                Official Announcement
              </div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#9fc7ff]">
                Geneva Emergency Session — April 2026
              </p>
              <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Libya Towards <span className="text-[#d8c48a]">Stability</span>
                <br />
                and National Unity
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
                Official announcement, strategic context, and key expected outcomes.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#announcement"
                  className="rounded-2xl bg-[#d8c48a] px-6 py-3 text-sm font-semibold text-[#0d2240] shadow-lg transition hover:scale-[1.02]"
                >
                  View Article
                </a>
                <Link
                  to="/candidates"
                  className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Candidates
                </Link>
              </div>
            </div>

            <div className="relative z-10">
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#d8c48a]">
                      Intro Video
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Official teaser video
                    </p>
                  </div>
                  <div className="rounded-full border border-white/15 bg-white/10 p-3">
                    <Play className="h-5 w-5 text-[#d8c48a]" />
                  </div>
                </div>
                <div className="relative aspect-video overflow-hidden bg-black">
                  <video className="h-full w-full object-cover" controls playsInline>
                    <source src="/videos/intro-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="announcement"
          className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
        >
          <div className="overflow-hidden rounded-[34px] border border-[#d8c48a]/35 bg-white shadow-[0_24px_70px_rgba(13,34,64,0.08)]">
            <div className="border-b border-[#e4e7ee] bg-[#f8fbff] px-6 py-5 sm:px-8 lg:px-10">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="inline-flex w-fit rounded-md bg-[#0d2240] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  OFFICIAL ANNOUNCEMENT
                </div>
                <div className="text-sm text-[#556882]">
                  REF: LY/GVA/2026/APR | April 2026
                </div>
              </div>
            </div>

            <div className="px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
              <div className="rounded-[26px] border border-[#dce3ef] bg-[#fbfcfe] p-6 sm:p-7">
                <Paragraphs text={intro} />
              </div>

              <div className="mt-8 space-y-8">
                <div className="rounded-[28px] border border-[#dce3ef] bg-[#fbfcfe] p-6 sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1c9ae4]">
                    I.
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-[#0d2240] sm:text-3xl">
                    BACKGROUND AND CONTEXT
                  </h3>
                  <div className="mt-5">
                    <Paragraphs text={backgroundText} />
                  </div>
                </div>

                <div className="rounded-[28px] border border-[#dce3ef] bg-[#fbfcfe] p-6 sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1c9ae4]">
                    II.
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-[#0d2240] sm:text-3xl">
                    STRATEGIC RATIONALE
                  </h3>
                  <div className="mt-5">
                    <Paragraphs text={rationaleText} />
                  </div>
                </div>

                <div className="rounded-[28px] border border-[#dce3ef] bg-[#fbfcfe] p-6 sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1c9ae4]">
                    III.
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-[#0d2240] sm:text-3xl">
                    KEY EXPECTED OUTCOMES
                  </h3>

                  <div className="mt-6 overflow-hidden rounded-[16px] border border-[#dce3ef]">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-[#0d2240] text-left text-white">
                          <th className="px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em]">
                            Pillar
                          </th>
                          <th className="px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em]">
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {outcomesRows.map((row, index) => (
                          <tr
                            key={row.pillar}
                            className={index % 2 === 0 ? "bg-[#fbfcfe]" : "bg-white"}
                          >
                            <td className="border-t border-[#e5ebf3] px-5 py-4 align-top font-semibold text-[#0d2240]">
                              {row.pillar}
                            </td>
                            <td className="border-t border-[#e5ebf3] px-5 py-4 text-sm leading-7 text-[#546880]">
                              {row.details}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <Link
                    to="/candidates"
                    className="rounded-2xl bg-[#0d2240] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#12315c]"
                  >
                    Open Candidates Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="rounded-[32px] border border-[#d8c48a]/40 bg-white p-6 shadow-[0_20px_60px_rgba(13,34,64,0.08)] sm:p-8 lg:p-10">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8a7440]">
                Contact Information
              </p>
              <h3 className="mt-3 text-3xl font-bold text-[#0d2240]">
                For inquiries and communication
              </h3>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-[24px] border border-[#d7deea] bg-[#f8fbff] p-6">
                <div className="mb-4 inline-flex rounded-2xl bg-[#0d2240] p-3 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f7f96]">
                  Email
                </p>
                <a
                  href="mailto:Info@slpm-pc.org"
                  className="mt-3 block break-all text-lg font-semibold text-[#0d2240]"
                >
                  Info@slpm-pc.org
                </a>
              </div>

              <div className="rounded-[24px] border border-[#d7deea] bg-[#f8fbff] p-6">
                <div className="mb-4 inline-flex rounded-2xl bg-[#0d2240] p-3 text-white">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f7f96]">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/41783403437"
                  className="mt-3 block text-lg font-semibold text-[#0d2240]"
                >
                  00 41 78 340 34 37
                </a>
              </div>

              <div className="rounded-[24px] border border-[#d8c48a]/50 bg-[#0d2240] p-6 text-white md:col-span-2 lg:col-span-1">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8c48a]">
                  Status
                </p>
                <p className="mt-3 text-xl font-semibold">Site under preparation</p>
                <p className="mt-2 text-sm leading-7 text-white/75">
                  This initial version is built to publish official content and candidate profiles.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0d2240] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm text-white/70">
              Libya Awakens, and the World Witnesses
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#d8c48a]">
              #LibyaUnited #GenevaApril #LibyaFuture
            </p>
          </div>
          <div className="text-sm text-white/70">
            Preparatory Committee for the Geneva Meeting
            <br />
            REF: LY/GVA/2026/APR | April 2026
          </div>
        </div>
      </footer>
    </>
  );
}