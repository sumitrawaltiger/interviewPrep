import { useState } from 'react';

const START = new Date('2027-07-15');

// 100 Days of DSA + System Design
// 3h/day — FULL 3 hours on Udemy course + code along
// Each course block = course days + practice/revision days
// Day 100 = Oct 22, 2027
const COURSES = [
  {
    seq: 1,
    cat: 'DSA',
    icon: '🧩',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    title: 'Master the Coding Interview: Data Structures + Algorithms',
    by: 'Andrei Neagoie (Zero To Mastery)',
    hours: 20,
    rating: 4.7,
    stu: '250K+',
    url: 'https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/',
    courseDays: 7,
    practiceDays: 1,
    totalDays: 8,
    dayStart: 1,
    dayEnd: 8,
    startDate: 'Jul 15',
    endDate: 'Jul 22, 2027',
    offset: 0,
    tag: 'START HERE — DAY 1',
    why: "Interview-first teaching. Every data structure is taught by asking 'when would an interviewer use this?' Big O, Arrays, Stacks, Queues, Linked Lists, Trees, Graphs — all with interview context. Code examples in JS, Python, Java, C#. 250K students.",
    courseTopics: [
      'Big O: time + space complexity — analyse every solution you write',
      'Arrays, Hash Tables: Two Pointers, Sliding Window, Frequency Counter',
      'Stacks, Queues, Linked Lists — implementation + interview patterns',
      'Trees, Graphs — DFS, BFS, traversals, cycle detection',
      'Sorting: QuickSort, MergeSort — trade-offs for interviews',
      'Interview framework: how to talk through any problem out loud',
    ],
    practiceDay:
      'Day 8 — code every structure from scratch without watching. Build Array, Linked List, Stack, BST in your chosen language.',
  },
  {
    seq: 2,
    cat: 'DSA',
    icon: '🧩',
    color: '#0EA5E9',
    dark: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    title: 'Python Data Structures & Algorithms + LeetCode Exercises',
    by: 'Scott Barrett',
    hours: 18,
    rating: 4.8,
    stu: '60K+',
    url: 'https://www.udemy.com/course/data-structures-algorithms-python/',
    courseDays: 6,
    practiceDays: 1,
    totalDays: 7,
    dayStart: 9,
    dayEnd: 15,
    startDate: 'Jul 23',
    endDate: 'Jul 29, 2027',
    offset: 8,
    tag: '4.8★ HIGHEST RATED — DAY 9',
    why: "Highest-rated DSA course on Udemy. Scott's visual animations make patterns click. Covers 100+ LeetCode-style exercises. Even if you don't write Python, use this for the pattern recognition and visual clarity it provides for each structure.",
    courseTopics: [
      'Visual animations for every data structure — best on Udemy',
      'Linked Lists: singly + doubly, all pointer manipulation patterns',
      'Trees: BST — insert, delete, validate with real exercises',
      'Sorting deep dive: Bubble, Selection, Merge, Quick with code',
      'Hash Tables: collision handling, implementation from scratch',
      'Big O analysis woven into every lesson',
    ],
    practiceDay:
      'Day 15 — rebuild LinkedList reversal and BST validation from memory. Explain each algorithm out loud.',
  },
  {
    seq: 3,
    cat: 'DSA',
    icon: '🧩',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    title: 'JavaScript Algorithms and Data Structures Masterclass',
    by: 'Colt Steele',
    hours: 22,
    rating: 4.7,
    stu: '350K+',
    url: 'https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/',
    courseDays: 8,
    practiceDays: 2,
    totalDays: 10,
    dayStart: 16,
    dayEnd: 25,
    startDate: 'Jul 30',
    endDate: 'Aug 8, 2027',
    offset: 15,
    tag: 'BEST VISUALS · 350K STUDENTS — DAY 16',
    why: "Most enrolled DSA course on Udemy with 350K+ students. Colt's animations for sorting, recursion, trees, and graphs are the clearest anywhere online. Especially valuable for recursion intuition and sorting algorithm understanding.",
    courseTopics: [
      'Problem solving approach: patterns before memorisation',
      'Recursion: call stack, helper method, pure recursion — animated',
      'Advanced sorting: Radix Sort, Counting Sort — beyond comparison',
      'Binary Search Trees: insert, find, traversal — animated',
      'Binary Heaps, Priority Queue: visual step-by-step',
      'Graphs: adjacency list vs matrix, DFS, BFS — all visualised',
    ],
    practiceDay:
      'Days 24–25 — implement QuickSort and MergeSort from scratch. Draw the recursion tree on paper first, then code.',
  },
  {
    seq: 4,
    cat: 'DSA',
    icon: '🧩',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECDD3',
    title: 'Data Structures & Algorithms: Level-up for Coding Interviews',
    by: 'Prateek Narang (ex-Google Senior Engineer)',
    hours: 25,
    rating: 4.5,
    stu: '45K+',
    url: 'https://www.udemy.com/course/cpp-data-structures-algorithms-levelup-prateek-narang/',
    courseDays: 9,
    practiceDays: 2,
    totalDays: 11,
    dayStart: 26,
    dayEnd: 36,
    startDate: 'Aug 9',
    endDate: 'Aug 19, 2027',
    offset: 25,
    tag: 'EX-GOOGLE — DAY 26',
    why: "ex-Google Senior Engineer. The 'brute force first, then optimise' approach mirrors exactly how real interviews unfold. 150+ problems covering every advanced pattern. Code in C++ but logic is language-agnostic.",
    courseTopics: [
      'Brute force → optimise approach for every single problem',
      'Advanced DP: 2D DP, DP on trees, knapsack variants',
      'Advanced Graphs: Dijkstra, Bellman-Ford, Floyd-Warshall, MST',
      'Tries: autocomplete, word search, prefix matching',
      'Backtracking: pruning, state-space search, N-Queens',
      '150+ carefully selected problems — each teaching a specific pattern',
    ],
    practiceDay:
      'Days 35–36 — solve 3 problems using brute force first, then optimise each. Time yourself.',
  },
  {
    seq: 5,
    cat: 'DSA',
    icon: '🧩',
    color: '#D97706',
    dark: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
    title: 'Mastering Data Structures & Algorithms using C and C++',
    by: 'Abdul Bari',
    hours: 58,
    rating: 4.7,
    stu: '229K+',
    url: 'https://www.udemy.com/course/datastructurescncpp/',
    courseDays: 20,
    practiceDays: 5,
    totalDays: 25,
    dayStart: 37,
    dayEnd: 61,
    startDate: 'Aug 20',
    endDate: 'Sep 13, 2027',
    offset: 36,
    tag: 'LEGENDARY FOUNDATIONS — DAY 37',
    why: 'The legendary deep-foundations course. 229K students. Abdul Bari explains HOW data structures work internally at a level no other instructor touches. Whiteboard-first teaching. Language is C/C++ but conceptual depth is language-agnostic.',
    courseTopics: [
      'Physical vs logical data structures — memory model fundamentals',
      'Recursion: recurrence relation + time complexity from first principles',
      'Every sorting algorithm with whiteboard complexity proofs',
      'Trees: AVL, Red-Black — self-balancing internals + rotation logic',
      'Graphs: DFS, BFS, Spanning Trees, Shortest Paths — deep proofs',
      'Hashing: collision resolution, hash function design, load factor',
    ],
    practiceDay:
      '5 revision days (Days 57–61) — re-implement 5 data structures from scratch: Heap, AVL Tree, Graph with Dijkstra, Hash Table, and Trie. No reference.',
  },
  {
    seq: 6,
    cat: 'DSA',
    icon: '🧩',
    color: '#DC2626',
    dark: '#B91C1C',
    bg: '#FEF2F2',
    border: '#FECACA',
    title: 'Master the Coding Interview: Big Tech (FAANG Interviews)',
    by: 'Andrei Neagoie (Zero To Mastery)',
    hours: 8,
    rating: 4.6,
    stu: '40K+',
    url: 'https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/',
    courseDays: 3,
    practiceDays: 1,
    totalDays: 4,
    dayStart: 62,
    dayEnd: 65,
    startDate: 'Sep 14',
    endDate: 'Sep 17, 2027',
    offset: 61,
    tag: 'FAANG LEVEL · FINAL DSA PUSH — DAY 62',
    why: 'The final DSA course before shifting to System Design. Covers the hardest patterns from real FAANG interviews — complex graph problems, multi-dimensional DP, and Big Tech interview simulation. Short but dense at 8h.',
    courseTopics: [
      'FAANG-specific hard graph problems — company-sourced',
      'Advanced DP patterns from real Google, Meta, Amazon interviews',
      'Interview simulation: manage hints, time pressure, think out loud',
      "Salary negotiation — worth an extra 20–30% (Andrei's own data)",
      'Offer evaluation: comparing total compensation packages',
    ],
    practiceDay:
      'Day 65 — simulate a full coding interview: 2 Medium problems in 45 min, spoken aloud throughout.',
  },
  {
    seq: 7,
    cat: 'SD',
    icon: '🏗',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    title: 'Mastering the System Design Interview',
    by: 'Frank Kane (ex-Amazon Bar Raiser & Hiring Manager)',
    hours: 5,
    rating: 4.6,
    stu: '47K+',
    url: 'https://www.udemy.com/course/system-design-interview-prep/',
    courseDays: 2,
    practiceDays: 1,
    totalDays: 3,
    dayStart: 66,
    dayEnd: 68,
    startDate: 'Sep 18',
    endDate: 'Sep 20, 2027',
    offset: 65,
    tag: 'START SYSTEM DESIGN HERE — DAY 66',
    why: "Frank Kane is a former Amazon 'Bar Raiser' and hiring manager who interviewed thousands of engineers. Teaches what interviewers actually look for. Updated 2025 with Generative AI + Agentic AI system design. 6 full mock walkthroughs. Best ROI per hour on all of Udemy.",
    courseTopics: [
      'The exact framework Amazon/Google interviewers use to evaluate',
      'Horizontal vs vertical scaling — when to choose each',
      'Load balancing, Redis caching, CDN, database sharding',
      'Designing GenAI systems with RAG and Agentic AI — 2025',
      '6 mock system design interviews with real company questions',
      'What separates passing from failing — insider perspective',
    ],
    practiceDay:
      'Day 68 — design URL Shortener from scratch on paper. Requirements → Estimation → HLD → DB Schema → API. 45 min, spoken aloud.',
  },
  {
    seq: 8,
    cat: 'SD',
    icon: '🏗',
    color: '#0EA5E9',
    dark: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    title: 'Software Architecture & Design of Modern Large Scale Systems',
    by: 'Michael Pogrebinsky',
    hours: 20,
    rating: 4.6,
    stu: '93K+',
    url: 'https://www.udemy.com/course/software-architecture-design-of-modern-large-scale-systems/',
    courseDays: 7,
    practiceDays: 2,
    totalDays: 9,
    dayStart: 69,
    dayEnd: 77,
    startDate: 'Sep 21',
    endDate: 'Sep 29, 2027',
    offset: 68,
    tag: 'DEEP ARCHITECTURE — DAY 69',
    why: '93K students. Best deep-dive distributed systems course for senior interviews. CQRS, Event Sourcing, Microservices patterns, API Gateway, Saga — every pattern you use daily in FPO Cloud. This translates your FPO experience into system design interview language.',
    courseTopics: [
      'Distributed systems: consensus, replication, consistency models',
      'Microservices: API Gateway, Service Discovery, Circuit Breaker — your FPO!',
      'CQRS and Event Sourcing — separating read and write models',
      'Saga pattern: orchestration vs choreography — your Step Functions = Saga!',
      'Performance: latency, throughput, bottleneck identification',
      'High availability: failover, disaster recovery, SLA design',
    ],
    practiceDay:
      'Days 76–77 — design WhatsApp then Instagram from scratch. Paper diagram first. Compare your design to the course solution.',
  },
  {
    seq: 9,
    cat: 'SD',
    icon: '🏗',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    title: 'System Design Interview Guide for Software Architecture',
    by: 'Mikhail Smarshchok',
    hours: 18,
    rating: 4.5,
    stu: '25K+',
    url: 'https://www.udemy.com/course/system-design-a-comprehensive-guide/',
    courseDays: 6,
    practiceDays: 2,
    totalDays: 8,
    dayStart: 78,
    dayEnd: 85,
    startDate: 'Sep 30',
    endDate: 'Oct 7, 2027',
    offset: 77,
    tag: '20+ COMPLETE DESIGNS — DAY 78',
    why: '20+ complete system designs end-to-end: requirements, estimation, HLD, deep dive. Best breadth coverage of classic interview questions. Covers URL Shortener, Twitter, WhatsApp, Netflix, Uber, Notification System, Rate Limiter, Search Autocomplete, Distributed Cache, Leaderboard.',
    courseTopics: [
      'URL Shortener — hashing, redirect, scalability',
      'Twitter — fanout, celebrity problem, trending topics',
      'Netflix — encoding pipeline, CDN, adaptive bitrate, recommendations',
      'Uber — geolocation indexing, driver matching, surge, ETA',
      'Notification System — multi-channel, dedup, priorities',
      'Rate Limiter — token bucket, leaky bucket, distributed sliding window',
    ],
    practiceDay:
      'Days 84–85 — design Netflix then Uber cold. No notes, no reference. 45 min each spoken aloud.',
  },
  {
    seq: 10,
    cat: 'SD',
    icon: '🏗',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECDD3',
    title: 'Pragmatic System Design',
    by: 'Bogdan Stashchuk',
    hours: 12,
    rating: 4.5,
    stu: '15K+',
    url: 'https://www.udemy.com/course/pragmatic-system-design/',
    courseDays: 4,
    practiceDays: 1,
    totalDays: 5,
    dayStart: 86,
    dayEnd: 90,
    startDate: 'Oct 8',
    endDate: 'Oct 12, 2027',
    offset: 85,
    tag: 'REAL TRADE-OFFS — DAY 86',
    why: 'Real production architectures from Netflix, Uber, Airbnb with honest trade-off discussion — explaining WHY certain choices were made in production, not just what. This is exactly what senior interviewers want to hear.',
    courseTopics: [
      'Netflix: how they actually scaled — real production decisions',
      'Uber: real-time systems — actual consequences of each choice',
      'Airbnb: search, payments, trust & safety at scale',
      'Trade-off framework: cost vs complexity vs consistency vs availability',
      'When NOT to use microservices — an honest assessment',
      'Monolith → microservices migration: strategies and failure modes',
    ],
    practiceDay:
      'Day 90 — design your FPO Flight Optimiser system. Walk through it as if answering an interview question. Your real work = perfect demo.',
  },
  {
    seq: 11,
    cat: 'SD',
    icon: '🏗',
    color: '#D97706',
    dark: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
    title: 'System Design Masterclass 2026 — From FAANG Insiders',
    by: 'FAANG Insiders Team',
    hours: 8,
    rating: 4.7,
    stu: '8K+',
    url: 'https://www.udemy.com/course/system-design-masterclass/',
    courseDays: 3,
    practiceDays: 1,
    totalDays: 4,
    dayStart: 91,
    dayEnd: 94,
    startDate: 'Oct 13',
    endDate: 'Oct 16, 2027',
    offset: 90,
    tag: '2026 FAANG TEMPLATE — DAY 91',
    why: '2026 edition from active FAANG engineers. Uses a 5-step template (Requirements → Capacity → API → HLD → Deep Dive) matching what modern interviewers expect. Continuously updated. The perfect final course before the review week.',
    courseTopics: [
      '5-step interview template used at Google, Meta, Amazon 2026',
      'YouTube: video upload, encoding pipeline, CDN, recommendations',
      'Social Media Newsfeed: fan-out on write vs read, caching, ranking',
      'WhatsApp end-to-end using the FAANG template',
      'How to handle follow-up deep dives from senior interviewers',
      'Continuously updated — new system designs added regularly',
    ],
    practiceDay:
      'Day 94 — design a system of your choice cold. 45 min, use the 5-step FAANG template exactly.',
  },
];

const REVIEW = {
  dayStart: 95,
  dayEnd: 100,
  startDate: 'Oct 17',
  endDate: 'Oct 22, 2027',
  title: 'Final Revision Week',
};

const TOTAL_DAYS = 100;
const TOTAL_HRS = COURSES.reduce((s, c) => s + c.hours, 0);
const DSA_COURSES = COURSES.filter((c) => c.cat === 'DSA');
const SD_COURSES = COURSES.filter((c) => c.cat === 'SD');

function daysSinceStart() {
  return Math.max(0, Math.floor((new Date() - START) / (24 * 60 * 60 * 1000)));
}
function currentSeq() {
  const d = daysSinceStart();
  for (const c of COURSES) {
    if (d < c.offset + c.totalDays) return c.seq;
  }
  return 12; // review week or beyond
}

// ── CARD ──────────────────────────────────────────────────────────────────────
function Card({ c, isOpen, onToggle, isCurrent }) {
  return (
    <div
      id={'c' + c.seq}
      style={{
        borderRadius: 14,
        border:
          '2px solid ' +
          (isOpen ? c.color + '75' : isCurrent ? '#F59E0B90' : c.border),
        background: isOpen ? c.bg : '#fff',
        boxShadow: isOpen
          ? `0 8px 28px ${c.color}15`
          : isCurrent
            ? '0 0 0 3px #FEF3C7,0 2px 8px rgba(0,0,0,0.06)'
            : '0 1px 5px rgba(0,0,0,0.05)',
        overflow: 'hidden',
        transition: 'all 0.25s',
      }}
    >
      {/* ── Header ── */}
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '13px 15px',
          display: 'flex',
          alignItems: 'center',
          gap: 11,
          textAlign: 'left',
          fontFamily: 'inherit',
        }}
      >
        {/* Day badge */}
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: 13,
            flexShrink: 0,
            background: isOpen
              ? `linear-gradient(135deg,${c.color},${c.dark})`
              : c.bg,
            border: `2px solid ${c.color}35`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.25s',
            boxShadow: isOpen ? `0 4px 14px ${c.color}45` : 'none',
          }}
        >
          <span
            style={{
              fontSize: 8,
              fontWeight: 800,
              letterSpacing: '0.06em',
              color: isOpen ? 'rgba(255,255,255,0.65)' : c.color,
            }}
          >
            {c.cat}
          </span>
          <span
            style={{
              fontSize: 16,
              fontWeight: 900,
              lineHeight: 1,
              color: isOpen ? '#fff' : c.color,
            }}
          >
            #{c.seq}
          </span>
          <span
            style={{
              fontSize: 8,
              fontWeight: 700,
              color: isOpen ? 'rgba(255,255,255,0.55)' : c.color + '99',
            }}
          >
            d{c.dayStart}–{c.dayEnd}
          </span>
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: 'flex',
              gap: 6,
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: 3,
            }}
          >
            {isCurrent && (
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 800,
                  padding: '2px 7px',
                  borderRadius: 20,
                  background: '#FEF3C7',
                  color: '#D97706',
                  border: '1px solid #FDE68A',
                }}
              >
                📍 TODAY
              </span>
            )}
            <span
              style={{
                fontSize: 'clamp(11px,3.5vw,13px)',
                fontWeight: 800,
                color: '#0F172A',
                lineHeight: 1.35,
              }}
            >
              {c.title}
            </span>
          </div>
          <div style={{ fontSize: 10, color: '#64748B', marginBottom: 3 }}>
            by {c.by}
          </div>
          <div
            style={{
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 900, color: c.color }}>
              {c.hours}h course
            </span>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#F59E0B' }}>
              ★{c.rating}
            </span>
            <span style={{ fontSize: 10, color: '#94A3B8' }}>👥{c.stu}</span>
            <span style={{ fontSize: 10, color: '#64748B', fontWeight: 600 }}>
              {c.startDate} → {c.endDate}
            </span>
          </div>
        </div>

        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 900,
              color: c.color,
              background: c.color + '12',
              padding: '3px 10px',
              borderRadius: 18,
              border: `1px solid ${c.color}22`,
              marginBottom: 2,
            }}
          >
            {c.totalDays}d
          </div>
          <div style={{ fontSize: 9, color: '#94A3B8' }}>
            {c.courseDays}+{c.practiceDays}
          </div>
        </div>

        <span
          style={{
            color: c.color,
            fontSize: 20,
            flexShrink: 0,
            transform: isOpen ? 'rotate(90deg)' : 'none',
            transition: 'transform 0.2s',
            opacity: isOpen ? 1 : 0.3,
          }}
        >
          ›
        </span>
      </button>

      {/* ── Body ── */}
      {isOpen && (
        <div
          style={{
            borderTop: `2px solid ${c.color}18`,
            padding: '13px 15px 17px',
          }}
        >
          {/* Why */}
          <div
            style={{
              background: c.color + '0A',
              border: `1px solid ${c.color}22`,
              borderRadius: 10,
              padding: '11px 13px',
              marginBottom: 12,
            }}
          >
            <div
              style={{
                fontSize: 9,
                fontWeight: 800,
                color: c.color,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 5,
              }}
            >
              {c.tag}
            </div>
            <div style={{ fontSize: 12, color: '#334155', lineHeight: 1.85 }}>
              {c.why}
            </div>
          </div>

          {/* Topics + Practice side by side */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
              gap: 9,
              marginBottom: 12,
            }}
          >
            <div
              style={{
                background: '#F8FAFC',
                borderRadius: 9,
                padding: '10px 12px',
                border: '1px solid #E2E8F0',
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  color: '#374151',
                  letterSpacing: '0.08em',
                  marginBottom: 6,
                }}
              >
                📺 {c.courseDays} DAYS COURSE CONTENT
              </div>
              {c.courseTopics.map((item, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', gap: 6, padding: '2px 0' }}
                >
                  <span
                    style={{
                      color: c.color,
                      fontSize: 9,
                      flexShrink: 0,
                      marginTop: 2,
                      fontWeight: 700,
                    }}
                  >
                    ▸
                  </span>
                  <span
                    style={{ fontSize: 10, color: '#374151', lineHeight: 1.6 }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                background: '#FFFBEB',
                border: '1px solid #FDE68A',
                borderRadius: 9,
                padding: '10px 12px',
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  color: '#D97706',
                  letterSpacing: '0.08em',
                  marginBottom: 6,
                }}
              >
                💪 {c.practiceDays} DAY{c.practiceDays > 1 ? 'S' : ''}{' '}
                CODE-ALONG REVISION
              </div>
              <div style={{ fontSize: 11, color: '#78350F', lineHeight: 1.75 }}>
                {c.practiceDay}
              </div>
              <div
                style={{
                  marginTop: 10,
                  padding: '8px 10px',
                  background: '#FEF3C7',
                  borderRadius: 7,
                  border: '1px solid #FDE68A',
                }}
              >
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 800,
                    color: '#92400E',
                    marginBottom: 3,
                  }}
                >
                  ⏰ FULL 3 HOURS DAILY
                </div>
                <div
                  style={{ fontSize: 10, color: '#78350F', lineHeight: 1.6 }}
                >
                  6:00–9:00 AM · Udemy course + code along · no LeetCode in this
                  slot
                </div>
              </div>
            </div>
          </div>

          <a
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              background: `linear-gradient(135deg,${c.color},${c.dark})`,
              color: '#fff',
              borderRadius: 9,
              padding: '10px 16px',
              textDecoration: 'none',
              fontSize: 12,
              fontWeight: 700,
              boxShadow: `0 4px 14px ${c.color}40`,
              transition: 'all 0.18s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = `0 6px 20px ${c.color}55`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = `0 4px 14px ${c.color}40`;
            }}
          >
            Open on Udemy →
          </a>
        </div>
      )}
    </div>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [open, setOpen] = useState(1);
  const curSeq = currentSeq();
  const daysIn = Math.min(100, daysSinceStart());
  const pct = Math.round((daysIn / 100) * 100);

  const toggle = (seq) => setOpen(open === seq ? null : seq);
  const jump = (seq) => {
    setOpen(seq);
    setTimeout(
      () =>
        document
          .getElementById('c' + seq)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
      80,
    );
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#F0F4FF',
        fontFamily: "'Segoe UI',system-ui,-apple-system,sans-serif",
        color: '#0F172A',
        overflowX: 'hidden',
      }}
    >
      {/* ── HERO ── */}
      <div
        style={{
          background:
            'linear-gradient(135deg,#1E1B4B 0%,#4338CA 50%,#1A365D 100%)',
          padding: '22px 14px 18px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            backgroundImage:
              'radial-gradient(circle,rgba(255,255,255,0.055) 1px,transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />

        <div
          style={{
            maxWidth: 900,
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Title */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 14,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                flexShrink: 0,
                background: 'linear-gradient(135deg,#6366F1,#8B5CF6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                boxShadow: '0 6px 20px rgba(99,102,241,0.5)',
              }}
            >
              💯
            </div>
            <div>
              <div
                style={{
                  fontSize: 9,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.32)',
                  marginBottom: 2,
                }}
              >
                Sumit Rawal · 500 Days of Coding Journey · 400 + 100
              </div>
              <div
                style={{
                  fontSize: 'clamp(17px,5vw,28px)',
                  fontWeight: 900,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                100 Days of DSA + System Design
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.36)',
                  marginTop: 2,
                }}
              >
                Jul 15 → Oct 22, 2027 · 11 courses · {TOTAL_HRS}h · 3h/day ·
                6:00–9:00 AM
              </div>
            </div>
          </div>

          {/* 500 days milestone banner */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background:
                'linear-gradient(90deg,rgba(245,158,11,0.22),rgba(99,102,241,0.18))',
              border: '1px solid rgba(245,158,11,0.5)',
              borderRadius: 10,
              padding: '9px 14px',
              marginBottom: 10,
            }}
          >
            <span style={{ fontSize: 22, flexShrink: 0 }}>🏆</span>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 900,
                  color: '#FDE68A',
                  letterSpacing: '-0.01em',
                }}
              >
                500 Days of Coding — 400 + 100
              </div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.55)' }}>
                Jun 10, 2026 → Oct 22, 2027 · 6:00 AM–9:00 AM every single day
              </div>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontSize: 15, fontWeight: 900, color: '#FDE68A' }}>
                500d
              </div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>
                total streak
              </div>
            </div>
          </div>

          {/* 3h/day banner */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(99,102,241,0.18)',
              border: '1px solid rgba(99,102,241,0.4)',
              borderRadius: 10,
              padding: '9px 14px',
              marginBottom: 14,
            }}
          >
            <span style={{ fontSize: 20 }}>⏰</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 900, color: '#fff' }}>
                6:00 AM – 9:00 AM · Full 3 Hours · Every Day · 100 Days
              </div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.42)' }}>
                Udemy course + code along the entire 3 hours · Days 401–500 of
                your coding journey
              </div>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontSize: 15, fontWeight: 900, color: '#A5B4FC' }}>
                300h
              </div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.38)' }}>
                total study
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 7,
              marginBottom: 14,
            }}
          >
            {[
              ['Day ' + Math.min(daysIn + 1, 100), 'Current Day'],
              ['11', 'Courses'],
              ['300h', 'Days 401–500'],
              [TOTAL_HRS + 'h', 'Course Hrs'],
              ['3h/day', '6–9 AM'],
              ['Oct 22', 'Finish 🎯'],
            ].map(([v, l]) => (
              <div
                key={l}
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  borderRadius: 9,
                  padding: '8px 8px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(12px,3.5vw,15px)',
                    fontWeight: 900,
                    color: '#fff',
                  }}
                >
                  {v}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    color: 'rgba(255,255,255,0.36)',
                    marginTop: 1,
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>

          {/* 100-day progress bar */}
          <div style={{ marginBottom: 10 }}>
            <div
              style={{
                height: 12,
                borderRadius: 6,
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.12)',
                marginBottom: 4,
              }}
            >
              {/* Course segments */}
              <div style={{ height: '100%', display: 'flex' }}>
                {COURSES.map((c) => (
                  <div
                    key={c.seq}
                    style={{
                      flex: c.totalDays,
                      background:
                        daysIn >= c.dayEnd
                          ? c.color
                          : daysIn >= c.dayStart
                            ? c.color
                            : c.color + '55',
                      transition: 'background 0.3s',
                      position: 'relative',
                      borderRight: '1px solid rgba(0,0,0,0.15)',
                    }}
                  />
                ))}
                <div
                  style={{
                    flex: 6,
                    background: daysIn >= 95 ? '#16A34A' : '#16A34A55',
                  }}
                />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>
                🧩 DSA (#1–6)
              </span>
              <span
                style={{
                  fontSize: 9,
                  color: 'rgba(255,255,255,0.65)',
                  fontWeight: 700,
                }}
              >
                Day {Math.min(daysIn + 1, 100)} of 100 ({pct}%)
              </span>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>
                🏗 SD (#7–11)
              </span>
            </div>
          </div>

          {/* Quick-jump pills */}
          <div
            style={{
              display: 'flex',
              gap: 5,
              overflowX: 'auto',
              paddingBottom: 2,
              scrollbarWidth: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {COURSES.map((c) => (
              <button
                key={c.seq}
                onClick={() => jump(c.seq)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  background:
                    curSeq === c.seq
                      ? 'rgba(255,255,255,0.22)'
                      : 'rgba(255,255,255,0.07)',
                  border:
                    '1px solid ' +
                    (curSeq === c.seq
                      ? 'rgba(255,255,255,0.55)'
                      : 'rgba(255,255,255,0.12)'),
                  borderRadius: 20,
                  padding: '3px 10px',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: c.color,
                  }}
                />
                <span
                  style={{
                    fontSize: 9,
                    color: 'rgba(255,255,255,0.65)',
                    fontWeight: curSeq === c.seq ? 800 : 400,
                  }}
                >
                  d{c.dayStart} #{c.seq}
                  {curSeq === c.seq ? ' ←' : ''}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div
        style={{ maxWidth: 900, margin: '0 auto', padding: '12px 12px 48px' }}
      >
        {/* Structure card */}
        <div
          style={{
            background: '#fff',
            borderRadius: 12,
            border: '1px solid #E2E8F0',
            padding: '14px 16px',
            marginBottom: 11,
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: '#94A3B8',
              letterSpacing: '0.12em',
              marginBottom: 12,
            }}
          >
            📐 HOW EACH COURSE BLOCK WORKS
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
              gap: 8,
            }}
          >
            {[
              {
                n: '1',
                icon: '📺',
                t: 'Course Days',
                d: 'Full 3 hours on Udemy. Watch + code along every example. Pause and rebuild every concept yourself before moving on.',
                col: '#6366F1',
              },
              {
                n: '2',
                icon: '💪',
                t: 'Revision Days',
                d: 'Rebuild key data structures or designs from scratch — no watching, no hints. Reinforce what the course taught.',
                col: '#F59E0B',
              },
              {
                n: '3',
                icon: '📝',
                t: 'Final Review (Days 95–100)',
                d: '6 days to revisit your 5 hardest topics, do mock system design sessions, and polish interview readiness.',
                col: '#16A34A',
              },
            ].map(({ n, icon, t, d, col }) => (
              <div
                key={t}
                style={{
                  background: '#F8FAFC',
                  borderRadius: 9,
                  padding: '11px 12px',
                  border: '1px solid #E2E8F0',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: 8,
                    alignItems: 'center',
                    marginBottom: 5,
                  }}
                >
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      background: col + '18',
                      color: col,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 12,
                      flexShrink: 0,
                    }}
                  >
                    {icon}
                  </span>
                  <span
                    style={{ fontSize: 11, fontWeight: 700, color: '#0F172A' }}
                  >
                    {t}
                  </span>
                </div>
                <div
                  style={{ fontSize: 10, color: '#64748B', lineHeight: 1.65 }}
                >
                  {d}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 10,
              padding: '10px 12px',
              background: 'linear-gradient(90deg,#EEF2FF,#F0F9FF)',
              borderRadius: 8,
              border: '1px solid #C7D2FE',
              fontSize: 11,
              color: '#4338CA',
              lineHeight: 1.7,
            }}
          >
            ⏰ <strong>6:00 AM – 9:00 AM · Full 3 hours · Every day.</strong> No
            LeetCode slot — that's separate after you get a job offer. This 100
            days is 100% course + code-along mastery.
          </div>
        </div>

        {/* Master table */}
        <div
          style={{
            background: '#fff',
            borderRadius: 12,
            border: '1px solid #E2E8F0',
            padding: '14px 14px',
            marginBottom: 11,
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            overflowX: 'auto',
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: '#94A3B8',
              letterSpacing: '0.12em',
              marginBottom: 10,
            }}
          >
            🗓 100-DAY COURSE SEQUENCE — TAP ROW TO JUMP
          </div>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: 10,
              minWidth: 490,
            }}
          >
            <thead>
              <tr style={{ background: '#F8FAFC' }}>
                {['Days', '#', 'Title', 'Hrs', 'Dates', '★', 'Type'].map(
                  (h) => (
                    <th
                      key={h}
                      style={{
                        padding: '6px 8px',
                        textAlign: 'left',
                        color: '#64748B',
                        fontWeight: 700,
                        borderBottom: '2px solid #E2E8F0',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {COURSES.map((c) => (
                <tr
                  key={c.seq}
                  style={{
                    borderBottom: '1px solid #F1F5F9',
                    cursor: 'pointer',
                    background: curSeq === c.seq ? '#FFFBEB' : 'transparent',
                    transition: 'background 0.1s',
                  }}
                  onClick={() => jump(c.seq)}
                  onMouseEnter={(e) => {
                    if (curSeq !== c.seq)
                      e.currentTarget.style.background = '#F8FAFC';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      curSeq === c.seq ? '#FFFBEB' : 'transparent';
                  }}
                >
                  <td style={{ padding: '7px 8px' }}>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: c.color,
                        background: c.color + '12',
                        padding: '2px 7px',
                        borderRadius: 12,
                      }}
                    >
                      {curSeq === c.seq ? '📍' : ''} {c.dayStart}–{c.dayEnd}
                    </span>
                  </td>
                  <td style={{ padding: '7px 8px' }}>
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 6,
                        background: c.color + '18',
                        color: c.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 10,
                        fontWeight: 900,
                      }}
                    >
                      {c.seq}
                    </div>
                  </td>
                  <td
                    style={{
                      padding: '7px 8px',
                      fontWeight: curSeq === c.seq ? 800 : 600,
                      color: '#0F172A',
                      maxWidth: 220,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {c.title}
                  </td>
                  <td
                    style={{
                      padding: '7px 8px',
                      fontWeight: 700,
                      color: c.color,
                    }}
                  >
                    {c.hours}h
                  </td>
                  <td
                    style={{
                      padding: '7px 8px',
                      color: '#64748B',
                      fontSize: 10,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {c.startDate} → {c.endDate}
                  </td>
                  <td
                    style={{
                      padding: '7px 8px',
                      color: '#F59E0B',
                      fontWeight: 700,
                    }}
                  >
                    ★{c.rating}
                  </td>
                  <td style={{ padding: '7px 8px' }}>
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        padding: '2px 7px',
                        borderRadius: 20,
                        background: c.cat === 'DSA' ? '#EEF2FF' : '#F0FDF4',
                        color: c.cat === 'DSA' ? '#4338CA' : '#15803D',
                        border:
                          '1px solid ' +
                          (c.cat === 'DSA' ? '#C7D2FE' : '#BBF7D0'),
                      }}
                    >
                      {c.cat === 'DSA' ? '🧩 DSA' : '🏗 SD'}
                    </span>
                  </td>
                </tr>
              ))}
              {/* Final review row */}
              <tr
                style={{
                  borderBottom: '1px solid #F1F5F9',
                  background: curSeq === 12 ? '#F0FDF4' : 'transparent',
                }}
              >
                <td style={{ padding: '7px 8px' }}>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: '#16A34A',
                      background: '#DCFCE7',
                      padding: '2px 7px',
                      borderRadius: 12,
                    }}
                  >
                    95–100
                  </span>
                </td>
                <td style={{ padding: '7px 8px' }}>
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      background: '#DCFCE7',
                      color: '#15803D',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 10,
                      fontWeight: 900,
                    }}
                  >
                    ✓
                  </div>
                </td>
                <td
                  style={{
                    padding: '7px 8px',
                    fontWeight: 600,
                    color: '#0F172A',
                  }}
                >
                  Final Revision Week
                </td>
                <td style={{ padding: '7px 8px', color: '#64748B' }}>—</td>
                <td
                  style={{ padding: '7px 8px', color: '#64748B', fontSize: 10 }}
                >
                  Oct 17 → Oct 22, 2027
                </td>
                <td style={{ padding: '7px 8px', color: '#64748B' }}>—</td>
                <td style={{ padding: '7px 8px' }}>
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 700,
                      padding: '2px 7px',
                      borderRadius: 20,
                      background: '#F0FDF4',
                      color: '#15803D',
                      border: '1px solid #BBF7D0',
                    }}
                  >
                    🏁 Review
                  </span>
                </td>
              </tr>
              <tr
                style={{
                  background: '#F8FAFC',
                  borderTop: '2px solid #E2E8F0',
                }}
              >
                <td
                  style={{
                    padding: '8px',
                    fontWeight: 800,
                    color: '#6366F1',
                    fontSize: 11,
                  }}
                >
                  1–100
                </td>
                <td
                  colSpan={2}
                  style={{
                    padding: '8px',
                    fontWeight: 800,
                    color: '#0F172A',
                    fontSize: 11,
                  }}
                >
                  TOTAL — 11 courses + revision
                </td>
                <td
                  style={{
                    padding: '8px',
                    fontWeight: 900,
                    color: '#4F46E5',
                    fontSize: 13,
                  }}
                >
                  {TOTAL_HRS}h
                </td>
                <td
                  colSpan={3}
                  style={{ padding: '8px', fontSize: 10, color: '#94A3B8' }}
                >
                  Jul 15, 2027 → Oct 22, 2027 · 300h study · 3h/day
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ marginTop: 6, fontSize: 9, color: '#94A3B8' }}>
            👆 Tap any row to jump to that course
          </div>
        </div>

        {/* DSA section heading */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 9,
          }}
        >
          <div
            style={{
              height: 2,
              flex: 1,
              background: 'linear-gradient(90deg,#6366F1,#6366F110)',
            }}
          />
          <span
            style={{
              fontSize: 11,
              fontWeight: 800,
              color: '#6366F1',
              letterSpacing: '0.1em',
              whiteSpace: 'nowrap',
            }}
          >
            🧩 DSA — COURSES 1–6 · Days 1–65
          </span>
          <div
            style={{
              height: 2,
              flex: 1,
              background: 'linear-gradient(90deg,#6366F110,#6366F1)',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 9,
            marginBottom: 16,
          }}
        >
          {DSA_COURSES.map((c) => (
            <Card
              key={c.seq}
              c={c}
              isOpen={open === c.seq}
              onToggle={() => toggle(c.seq)}
              isCurrent={curSeq === c.seq}
            />
          ))}
        </div>

        {/* SD section heading */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 9,
          }}
        >
          <div
            style={{
              height: 2,
              flex: 1,
              background: 'linear-gradient(90deg,#16A34A,#16A34A10)',
            }}
          />
          <span
            style={{
              fontSize: 11,
              fontWeight: 800,
              color: '#16A34A',
              letterSpacing: '0.1em',
              whiteSpace: 'nowrap',
            }}
          >
            🏗 SYSTEM DESIGN — COURSES 7–11 · Days 66–94
          </span>
          <div
            style={{
              height: 2,
              flex: 1,
              background: 'linear-gradient(90deg,#16A34A10,#16A34A)',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 9,
            marginBottom: 14,
          }}
        >
          {SD_COURSES.map((c) => (
            <Card
              key={c.seq}
              c={c}
              isOpen={open === c.seq}
              onToggle={() => toggle(c.seq)}
              isCurrent={curSeq === c.seq}
            />
          ))}
        </div>

        {/* Final review block */}
        <div
          style={{
            background: 'linear-gradient(135deg,#F0FDF4,#ECFDF5)',
            borderRadius: 12,
            border: '2px solid #BBF7D0',
            padding: '14px 16px',
            marginBottom: 11,
            boxShadow: '0 4px 16px rgba(22,163,74,0.1)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 10,
            }}
          >
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 12,
                background: 'linear-gradient(135deg,#16A34A,#15803D)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                boxShadow: '0 4px 12px rgba(22,163,74,0.4)',
              }}
            >
              🏁
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  gap: 7,
                  alignItems: 'center',
                  marginBottom: 2,
                }}
              >
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 800,
                    padding: '2px 8px',
                    borderRadius: 20,
                    background: '#DCFCE7',
                    color: '#15803D',
                    border: '1px solid #86EFAC',
                  }}
                >
                  DAYS 95–100
                </span>
                <span
                  style={{ fontSize: 15, fontWeight: 900, color: '#0F172A' }}
                >
                  Final Revision Week
                </span>
              </div>
              <div style={{ fontSize: 10, color: '#64748B' }}>
                Oct 17–22, 2027 · 6 days · 18h · Day 100 = Oct 22 🎯
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))',
              gap: 8,
            }}
          >
            {[
              {
                d: 'Day 95',
                t: 'DSA Revision',
                body: 'Rebuild your 3 hardest data structures from scratch: Heap, Graph with Dijkstra, Trie. No reference. Code in your interview language.',
              },
              {
                d: 'Day 96',
                t: 'SD Revision',
                body: "Design Twitter + Uber cold — 45 min each, paper diagram first, spoken aloud. Compare to Mikhail's solutions.",
              },
              {
                d: 'Day 97',
                t: 'Mock Interview 1',
                body: 'Full coding mock: simulate 2 problems in 45 min, spoken. Then 45 min system design. Pramp.com or peer session.',
              },
              {
                d: 'Day 98',
                t: 'Weak Spot Drill',
                body: 'Identify your 3 weakest topics from the entire 100 days. Spend the full 3 hours re-watching + re-coding those sections.',
              },
              {
                d: 'Day 99',
                t: 'Mock Interview 2',
                body: 'Full mock again — different partner. Record yourself. Watch for filler words, pacing, communication quality.',
              },
              {
                d: 'Day 100',
                t: 'Interview Ready 🎯',
                body: 'Review your FPO system design answer. Polish your 90-second intro. You are ready. Start applying aggressively.',
              },
            ].map(({ d, t, body }) => (
              <div
                key={d}
                style={{
                  background: 'rgba(255,255,255,0.8)',
                  borderRadius: 9,
                  padding: '10px 12px',
                  border: '1px solid #DCFCE7',
                }}
              >
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 800,
                    color: '#16A34A',
                    letterSpacing: '0.1em',
                    marginBottom: 3,
                  }}
                >
                  {d}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#0F172A',
                    marginBottom: 3,
                  }}
                >
                  {t}
                </div>
                <div
                  style={{ fontSize: 10, color: '#64748B', lineHeight: 1.6 }}
                >
                  {body}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FPO superpower */}
        <div
          style={{
            background: '#fff',
            borderRadius: 12,
            border: '1px solid #E2E8F0',
            padding: '14px 16px',
            marginBottom: 11,
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: '#94A3B8',
              letterSpacing: '0.12em',
              marginBottom: 10,
            }}
          >
            🚀 YOUR FPO EXPERIENCE = SYSTEM DESIGN ANSWERS
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(165px,1fr))',
              gap: 7,
              marginBottom: 10,
            }}
          >
            {[
              ['API Gateway', 'Load Balancer + Auth + Rate Limiter'],
              ['AWS Lambda', 'Microservice / FaaS'],
              ['Step Functions', 'Saga Orchestration Pattern'],
              ['EventBridge + Kafka', 'Message Queue / Event-Driven'],
              ['DynamoDB', 'NoSQL + Partition Key Strategy'],
              ['S3 + archive', 'Object Storage + Tiered Storage'],
              ['Cognito + OAuth2', 'Auth at Scale + Multi-tenant RBAC'],
              ['CloudWatch+Datadog', 'Monitoring + Distributed Tracing'],
              ['Multi-tenant airlines', 'Multi-tenancy Architecture'],
              ['7 AWS Certs + CKA', 'Instant Senior Credibility'],
            ].map(([tech, concept]) => (
              <div
                key={tech}
                style={{
                  background: '#F8FAFC',
                  borderRadius: 8,
                  padding: '8px 10px',
                  border: '1px solid #E2E8F0',
                }}
              >
                <div
                  style={{ fontSize: 11, fontWeight: 700, color: '#0F172A' }}
                >
                  {tech}
                </div>
                <div style={{ fontSize: 10, color: '#64748B' }}>
                  → {concept}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              padding: '10px 12px',
              background: '#F0FDF4',
              borderRadius: 8,
              border: '1px solid #BBF7D0',
              fontSize: 11,
              color: '#166534',
              lineHeight: 1.8,
            }}
          >
            💡 <strong>Every system design interview:</strong> "At FPO Cloud I
            designed a real-time multi-tenant flight trajectory SaaS for
            Lufthansa, American Airlines and FedEx — Lambda microservices, Step
            Functions Saga, DynamoDB, Kafka, 7 AWS certs..." — top 5% before a
            diagram is drawn.
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 12, textAlign: 'center', paddingBottom: 24 }}>
          <div
            style={{
              fontSize: 13,
              color: '#6366F1',
              fontWeight: 900,
              marginBottom: 4,
            }}
          >
            💯 500 Days Total · 400 Days of Code + 100 Days DSA & SD · Oct 22,
            2027
          </div>
          <div
            style={{ fontSize: 10, color: '#94A3B8', letterSpacing: '0.1em' }}
          >
            500 DAYS · 6:00 AM–9:00 AM · Jun 10 2026 → Oct 22 2027 · 400 DAYS
            UDEMY + 100 DAYS DSA & SYSTEM DESIGN
          </div>
        </div>
      </div>
    </div>
  );
}
