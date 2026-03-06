"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const ease = [0.33, 1, 0.68, 1];
const easeOut = [0.22, 1, 0.36, 1];

const DROP_FILES = [
  { name: "paper_01.pdf", size: "1.2 MB" },
  { name: "contract_NDA.pdf", size: "340 KB" },
  { name: "research_notes.pdf", size: "890 KB" },
];

const SECTIONS = [
  { label: "Research papers", count: 18, color: "from-violet-500/25 to-violet-500/5" },
  { label: "Contracts & legal", count: 12, color: "from-blue-500/25 to-blue-500/5" },
  { label: "Notes & drafts", count: 12, color: "from-cyan-500/25 to-cyan-500/5" },
];

const CHAT_QUERY = "What are the main points across these documents?";
const CHAT_ANSWER =
  "Your documents fall into three areas: research papers (18), contracts and legal (12), and notes (12). The main themes are agreement terms and deadlines in the contracts, and methodology and results in the research. I can go deeper on any section.";

export function MagicQueryDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });
  const [step, setStep] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorDropped, setCursorDropped] = useState(false);
  const [releaseFiles, setReleaseFiles] = useState(false);
  const [filesDropped, setFilesDropped] = useState(false);
  const [sectioningDone, setSectioningDone] = useState(false);
  const [showQuery, setShowQuery] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const t1 = setTimeout(() => setStep(1), 600);
    const t2 = setTimeout(() => setCursorVisible(true), 1400);
    const t3 = setTimeout(() => setCursorDropped(true), 3200);
    const t4 = setTimeout(() => setReleaseFiles(true), 3550);
    const t5 = setTimeout(() => setFilesDropped(true), 4800);
    const t6 = setTimeout(() => setStep(2), 6200);
    const t7 = setTimeout(() => setSectioningDone(true), 7500);
    const t8 = setTimeout(() => setStep(3), 9200);
    const t9 = setTimeout(() => setShowQuery(true), 9600);
    const t10 = setTimeout(() => setShowAnswer(true), 11500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
      clearTimeout(t8);
      clearTimeout(t9);
      clearTimeout(t10);
    };
  }, [isInView]);

  const MacBar = () => (
    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/30">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
      </div>
      <span className="text-xs text-zinc-500 ml-3 font-mono">PrivyAI</span>
    </div>
  );

  const SectionTabs = ({ activeIndex = 0 }: { activeIndex?: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease }}
      className="flex-shrink-0 w-[140px] sm:w-[160px] border-r border-white/5 bg-black/20 py-3"
    >
      <p className="text-[10px] uppercase tracking-wider text-zinc-600 px-3 mb-2">Sections</p>
      <div className="space-y-0.5">
        {SECTIONS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 * i, duration: 0.4, ease }}
            className={`px-3 py-2 text-xs font-medium cursor-default rounded-r-md border-l-2 ${
              activeIndex === i
                ? "border-violet-400 bg-violet-500/10 text-violet-200"
                : "border-transparent text-zinc-500 hover:text-zinc-400 hover:bg-white/[0.03]"
            }`}
          >
            <span className="truncate block">{s.label}</span>
            <span className="text-[10px] text-zinc-600 mt-0.5 block">{s.count} docs</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const showSidebar = step === 2 || step === 3;
  const activeSectionIndex = step === 3 ? 0 : 0; // highlight first section in chat step

  return (
    <section ref={ref} className="py-20 md:py-28 px-6 relative" id="product-magic">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 text-center mb-6"
        >
          How it works
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-center text-white tracking-tight mb-12 md:mb-14"
        >
          Drop the folder.
          <br />
          <span className="text-zinc-400">Ask the question.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="relative"
        >
          <div className="glass-strong rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-500/5 min-h-[360px]">
            <MacBar />

            <div className="flex min-h-[300px]">
              {showSidebar && (
                <SectionTabs activeIndex={activeSectionIndex} />
              )}
              <div className="p-6 min-h-[300px] flex-1 min-w-0">
                <AnimatePresence mode="wait" initial={false}>
                {/* Step 1: Drop zone → files land */}
                {step === 1 && (
                  <motion.div
                    key="drop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.45, ease } }}
                    transition={{ duration: 0.5, ease }}
                    className="h-full flex flex-col relative"
                  >
                    {!filesDropped ? (
                      <>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.15, duration: 0.6, ease }}
                          className="flex-1 rounded-xl border-2 border-dashed border-white/20 bg-white/[0.03] flex flex-col items-center justify-center gap-3 py-12"
                        >
                          <div className="w-12 h-12 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center">
                            <svg className="w-6 h-6 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                            </svg>
                          </div>
                          <p className="text-sm text-zinc-400">Drop folder here</p>
                          <p className="text-xs text-zinc-600">or click to browse</p>
                        </motion.div>

                        {/* Cursor dragging folder → drops into zone */}
                        {cursorVisible && (
                          <motion.div
                            className="absolute inset-0 pointer-events-none flex items-start justify-start pt-16 pb-12"
                            style={{ left: 0, top: 0 }}
                          >
                            <motion.div
                              className="absolute flex items-center justify-center"
                              initial={{ left: "12%", top: "18%", opacity: 0 }}
                              animate={
                                cursorDropped
                                  ? { left: "50%", top: "48%", opacity: 0, transition: { delay: 0.4, duration: 0.45, ease } }
                                  : { left: "50%", top: "48%", opacity: 1, transition: { duration: 1.6, ease } }
                              }
                              style={{ transform: "translate(-50%, -50%)" }}
                            >
                              {/* Mouse pointer */}
                              <svg
                                className="w-6 h-6 text-white drop-shadow-md flex-shrink-0"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.87a.5.5 0 00.35-.85L6.35 2.86a.5.5 0 00-.85.35z" />
                              </svg>
                              {/* Folder being dragged */}
                              <motion.div
                                className="absolute left-5 top-4 flex items-center gap-1 rounded-lg border border-white/20 bg-zinc-700/90 px-2 py-1.5 shadow-lg"
                                initial={{ y: 0, opacity: 1 }}
                                animate={
                                  cursorDropped
                                    ? { y: 36, opacity: 0, transition: { duration: 0.5, ease: easeOut } }
                                    : {}
                                }
                              >
                                <svg className="w-4 h-4 text-amber-400/90" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
                                </svg>
                                <span className="text-[10px] font-medium text-zinc-300">folder</span>
                              </motion.div>
                            </motion.div>
                          </motion.div>
                        )}

                        {/* Files falling in after cursor drop */}
                        {releaseFiles && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, ease }}
                            className="absolute inset-0 pointer-events-none flex items-center justify-center pt-16"
                          >
                            <div className="flex items-center justify-center gap-2 sm:gap-4">
                              {DROP_FILES.map((f, i) => (
                                <motion.div
                                  key={f.name}
                                  initial={{ y: -50, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ delay: i * 0.15, duration: 0.6, ease: easeOut }}
                                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-zinc-800/80 px-3 py-2 shadow-lg"
                                >
                                  <svg className="w-4 h-4 text-red-400/80 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
                                  </svg>
                                  <span className="text-xs text-zinc-300 font-medium truncate max-w-[90px]">{f.name}</span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease }}
                        className="space-y-2"
                      >
                        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">42 documents added</p>
                        {DROP_FILES.map((f, i) => (
                          <motion.div
                            key={f.name}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.45, ease }}
                            className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2"
                          >
                            <div className="w-8 h-8 rounded bg-red-500/20 flex items-center justify-center">
                              <svg className="w-4 h-4 text-red-400/80" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
                              </svg>
                            </div>
                            <span className="text-sm text-zinc-300">{f.name}</span>
                            <span className="text-xs text-zinc-600 ml-auto">{f.size}</span>
                          </motion.div>
                        ))}
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.4, ease }}
                          className="text-xs text-emerald-400/90 mt-2 flex items-center gap-1.5"
                        >
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Organizing into sections…
                        </motion.p>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* Step 2: Sectioning results */}
                {step === 2 && (
                  <motion.div
                    key="sections"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.45, ease } }}
                    transition={{ duration: 0.5, ease }}
                    className="space-y-3"
                  >
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-4">
                      {sectioningDone ? "Documents by section" : "Organizing…"}
                    </p>
                    <div className="space-y-2">
                      {SECTIONS.map((s, i) => (
                        <motion.div
                          key={s.label}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: sectioningDone ? i * 0.15 : 0, duration: 0.5, ease }}
                          className={`rounded-xl p-4 bg-gradient-to-r ${s.color} border border-white/5 flex items-center justify-between`}
                        >
                          <span className="text-zinc-200 font-medium text-sm">{s.label}</span>
                          <span className="text-zinc-500 text-sm">{s.count} docs</span>
                        </motion.div>
                      ))}
                    </div>
                    {sectioningDone && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.4, ease }}
                        className="text-xs text-emerald-400/90 mt-3 flex items-center gap-1.5"
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Ready. Ask anything.
                      </motion.p>
                    )}
                  </motion.div>
                )}

                {/* Step 3: Chat + quick answer */}
                {step === 3 && (
                  <motion.div
                    key="chat"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.45, ease } }}
                    transition={{ duration: 0.5, ease }}
                    className="space-y-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-500/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-violet-300 text-sm">Q</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-zinc-300 text-sm font-medium min-h-[1.5rem] flex items-center gap-0.5 flex-wrap">
                          {showQuery ? CHAT_QUERY : ""}
                          {showQuery && (
                            <span className="inline-block w-0.5 h-4 bg-violet-400 rounded-sm animate-cursor-blink ml-0.5" />
                          )}
                        </p>
                      </div>
                    </div>

                    {showAnswer && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease }}
                        className="flex items-start gap-3 pl-1"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                          <p className="text-zinc-300 text-sm leading-relaxed">{CHAT_ANSWER}</p>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
