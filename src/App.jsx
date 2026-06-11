import { useState } from 'react';

const START = new Date('2027-07-15');

// ── 100 DAYS · 3H/DAY · JUL 15 → OCT 22, 2027 ──────────────────────────────
// DSA courses: Java ONLY (4 Java courses + 1 language-agnostic with Java code)
// SD courses:  5 system design courses
// Final review: 29 days (Days 72–100) — mock + drill + interview prep
const COURSES = [
  // ── DSA — JAVA ONLY ─────────────────────────────────────────────────────────
  {
    seq: 1,
    cat: 'DSA',
    icon: '☕',
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
    lang: 'Java + JS + Python + C#',
    tag: 'START HERE — INTERVIEW FRAMEWORK',
    why: "Interview-first teaching — code examples provided in Java, JavaScript, Python, and C#. Every structure taught asking 'when would an interviewer use this?' Covers Big O, Arrays, Stacks, Queues, Linked Lists, Trees, Graphs, Sorting. 250K students. Best course to build the interview mindset from day 1.",
    courseTopics: [
      'Big O: time + space complexity — analyse every Java solution you write',
      'Arrays, Strings, Hash Tables — Two Pointers, Sliding Window, Frequency Counter in Java',
      'Stacks, Queues, Linked Lists — Java implementation + interview patterns',
      'Trees, Graphs — DFS, BFS, traversals, cycle detection in Java',
      'Sorting: QuickSort, MergeSort in Java — know trade-offs cold',
      'Interview communication framework — how to talk through any problem',
    ],
    practiceDay:
      'Day 8 — rebuild Array, Linked List, Stack, BST in Java from scratch without watching. Use IntelliJ, no hints.',
  },
  {
    seq: 2,
    cat: 'DSA',
    icon: '☕',
    color: '#0EA5E9',
    dark: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    title: 'Java Data Structures & Algorithms + LEETCODE Exercises',
    by: 'Scott Barrett',
    hours: 10,
    rating: 4.8,
    stu: '58K+',
    url: 'https://www.udemy.com/course/java-data-structures-algorithms-leetcode/',
    courseDays: 4,
    practiceDays: 1,
    totalDays: 5,
    dayStart: 9,
    dayEnd: 13,
    startDate: 'Jul 23',
    endDate: 'Jul 27, 2027',
    offset: 8,
    lang: 'Java 100%',
    tag: '4.8★ JAVA + LEETCODE',
    why: "Scott Barrett's Java course — 4.8★ with 100+ LeetCode exercises coded entirely in Java. His animated visuals for data structures are unmatched. Built specifically for experienced Java developers preparing for coding interviews. Every concept immediately drilled with a real LeetCode-style Java problem.",
    courseTopics: [
      '100+ LeetCode exercises coded in Java — integrated into every lesson',
      'Linked Lists: singly + doubly — all pointer manipulation patterns in Java',
      'Trees: BST — insert, delete, validate, traversal with Java exercises',
      'Heaps: min-heap, max-heap — Java PriorityQueue deep dive',
      'Sorting in Java: Merge Sort, Quick Sort implementation + analysis',
      'Big O woven into every lesson — analyse your Java solution each time',
    ],
    practiceDay:
      'Day 13 — re-solve 5 LeetCode problems from this course in Java from memory. Time yourself: Easy < 15 min.',
  },
  {
    seq: 3,
    cat: 'DSA',
    icon: '☕',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    title: 'Data Structures and Algorithms: Deep Dive Using Java',
    by: 'Tim Buchalka (Java Masterclass Academy)',
    hours: 16,
    rating: 4.5,
    stu: '112K+',
    url: 'https://www.udemy.com/course/data-structures-and-algorithms-deep-dive-using-java/',
    courseDays: 6,
    practiceDays: 1,
    totalDays: 7,
    dayStart: 14,
    dayEnd: 20,
    startDate: 'Jul 28',
    endDate: 'Aug 3, 2027',
    offset: 13,
    lang: 'Java 100%',
    tag: '112K STUDENTS — JAVA DEEP DIVE',
    why: "Tim Buchalka's Java Academy — 112K students. Deep-dive implementation-focused course in pure Java. You code every data structure from scratch: Arrays, LinkedLists, Stacks, Queues, Hashtables, Trees, Heaps. Includes Java Collections Framework and sorting algorithms with Java implementations.",
    courseTopics: [
      'Arrays + ArrayLists: Java implementation, resizing, amortised cost',
      'LinkedList: singly and doubly, Java from scratch with all operations',
      'Stacks, Queues, Hashtables — Java implementation + Java Collections',
      'Binary Trees: insert, delete, traversal — all coded in Java',
      'Heaps + HeapSort — Java PriorityQueue internals',
      'Java Collections Framework: ArrayList, LinkedList, TreeMap, HashMap — interview context',
    ],
    practiceDay:
      'Day 20 — implement a Hashtable from scratch in Java. Handle collisions with chaining. No reference.',
  },
  {
    seq: 4,
    cat: 'DSA',
    icon: '☕',
    color: '#D97706',
    dark: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
    title: 'Java Data Structures and Algorithms Masterclass',
    by: 'Elshad Karimov',
    hours: 45,
    rating: 4.5,
    stu: '8K+',
    url: 'https://www.udemy.com/course/java-data-structures-and-algorithms-masterclass/',
    courseDays: 15,
    practiceDays: 3,
    totalDays: 18,
    dayStart: 21,
    dayEnd: 38,
    startDate: 'Aug 4',
    endDate: 'Aug 21, 2027',
    offset: 20,
    lang: 'Java 100%',
    tag: '45H · MOST COMPREHENSIVE JAVA DSA',
    why: 'The most comprehensive Java DSA course on Udemy at 45+ hours. 100+ interview questions from Apple, Amazon, Google, and Microsoft all solved in Java. Covers every data structure and algorithm with detailed Java implementation. Visual explanatory videos with Java code throughout.',
    courseTopics: [
      '100+ interview questions from FAANG — all solved in Java',
      'All linked list variants: singly, doubly, circular — full Java implementation',
      'Trees: BST, AVL Tree, Red-Black Tree — Java implementation with rotations',
      'Graphs: BFS, DFS, Dijkstra, Bellman-Ford — Java adjacency list implementations',
      'Dynamic Programming: top-down + bottom-up — Java solutions',
      'Sorting: all major algorithms implemented and compared in Java',
    ],
    practiceDay:
      "Days 36–38 — re-implement AVL Tree with rotations, Dijkstra's algorithm, and LRU Cache in Java from scratch. 3 full days, no hints.",
  },
  {
    seq: 5,
    cat: 'DSA',
    icon: '☕',
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
    dayStart: 39,
    dayEnd: 42,
    startDate: 'Aug 22',
    endDate: 'Aug 25, 2027',
    offset: 38,
    lang: 'Java + multi-lang',
    tag: 'FAANG LEVEL — FINAL DSA PUSH',
    why: 'The final DSA course before shifting to System Design. Covers the hardest patterns from real FAANG interviews — complex graphs, multi-dimensional DP, and Big Tech interview simulation. Java code examples included. Short at 8h — do in 3 days as a final sharpening push before moving to SD.',
    courseTopics: [
      'FAANG-specific hard graph problems — with Java solutions',
      'Advanced DP patterns from real Google, Meta, Amazon interviews in Java',
      'Interview simulation: manage hints, time pressure, think out loud in Java',
      'Salary negotiation — worth an extra 20–30% on your offer',
      'Offer evaluation: comparing total comp packages',
    ],
    practiceDay:
      'Day 42 — simulate a full Java coding interview in IntelliJ: 2 Medium problems, 45 min total, spoken aloud.',
  },
  // ── SYSTEM DESIGN ────────────────────────────────────────────────────────────
  {
    seq: 6,
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
    dayStart: 43,
    dayEnd: 45,
    startDate: 'Aug 26',
    endDate: 'Aug 28, 2027',
    offset: 42,
    lang: 'Language-agnostic',
    tag: 'START SYSTEM DESIGN HERE',
    why: "Frank Kane is a former Amazon 'Bar Raiser' and hiring manager. Teaches what interviewers actually evaluate. Updated 2025 to include Generative AI + Agentic AI system design. 6 full mock design walkthroughs. Best ROI per hour on Udemy — do this first, it gives you the framework for everything that follows.",
    courseTopics: [
      'The exact evaluation framework Amazon/Google interviewers use',
      'Horizontal vs vertical scaling — when to choose each in an interview',
      'Load balancing, Redis caching, CDN, database sharding',
      'Designing GenAI systems with RAG and Agentic AI — 2025 update',
      '6 mock system design interviews with real company questions',
      'What separates passing from failing — insider perspective',
    ],
    practiceDay:
      'Day 45 — design URL Shortener from scratch: Requirements → Estimation → HLD → DB Schema → API. 45 min, spoken aloud.',
  },
  {
    seq: 7,
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
    dayStart: 46,
    dayEnd: 54,
    startDate: 'Aug 29',
    endDate: 'Sep 6, 2027',
    offset: 45,
    lang: 'Language-agnostic',
    tag: 'DEEP ARCHITECTURE · 93K STUDENTS',
    why: '93K students. Best deep-dive distributed systems course for senior interviews. CQRS, Event Sourcing, Microservices, API Gateway, Saga — all patterns you use daily in FPO Cloud. This course translates your FPO experience into the vocabulary that system design interviewers use.',
    courseTopics: [
      'Distributed systems: consensus, replication, consistency models',
      'Microservices: API Gateway, Service Discovery, Circuit Breaker — your FPO!',
      'CQRS and Event Sourcing — separating read and write models',
      'Saga pattern: orchestration vs choreography — your Step Functions = Saga!',
      'Performance: latency, throughput, bottleneck identification',
      'High availability: failover, disaster recovery, SLA design',
    ],
    practiceDay:
      'Days 53–54 — design WhatsApp then Instagram cold. Paper diagram first, then compare to course solution.',
  },
  {
    seq: 8,
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
    dayStart: 55,
    dayEnd: 62,
    startDate: 'Sep 7',
    endDate: 'Sep 14, 2027',
    offset: 54,
    lang: 'Language-agnostic',
    tag: '20+ COMPLETE DESIGNS',
    why: '20+ complete system designs end-to-end. Best breadth coverage of classic questions on Udemy. Covers URL Shortener, Twitter, WhatsApp, Netflix, Uber, Notification System, Rate Limiter, Search Autocomplete, Distributed Cache, Leaderboard, Web Crawler.',
    courseTopics: [
      'Twitter — tweet fanout, celebrity problem, trending topics',
      'Netflix — encoding pipeline, CDN, adaptive bitrate, recommendations',
      'Uber — geolocation indexing, driver matching, surge, ETA',
      'Notification System — multi-channel, dedup, priorities (FPO uses this!)',
      'Rate Limiter — token bucket, leaky bucket, distributed sliding window',
      'Search Autocomplete — trie in distributed system, prefix caching',
    ],
    practiceDay:
      'Days 61–62 — design Netflix then Uber cold. No notes. 45 min each, spoken aloud.',
  },
  {
    seq: 9,
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
    dayStart: 63,
    dayEnd: 67,
    startDate: 'Sep 15',
    endDate: 'Sep 19, 2027',
    offset: 62,
    lang: 'Language-agnostic',
    tag: 'REAL TRADE-OFFS',
    why: 'Real production architectures from Netflix, Uber, Airbnb explaining WHY choices were made — not just what. This is exactly what senior interviewers want to hear. Teaches you to reason about systems like an engineer, not recite memorised patterns.',
    courseTopics: [
      'Netflix: how they actually scaled — real production decisions',
      'Uber: real-time systems — actual consequences of each architecture choice',
      'Airbnb: search, payments, trust & safety at scale',
      'Trade-off framework: cost vs complexity vs consistency vs availability',
      'When NOT to use microservices — an honest rare assessment',
      'Monolith → microservices migration: strategies and failure modes',
    ],
    practiceDay:
      'Day 67 — design your FPO Flight Optimiser. Walk through it as an interview answer using the 5-step template.',
  },
  {
    seq: 10,
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
    dayStart: 68,
    dayEnd: 71,
    startDate: 'Sep 20',
    endDate: 'Sep 23, 2027',
    offset: 67,
    lang: 'Language-agnostic',
    tag: '2026 FAANG TEMPLATE — FINAL SD COURSE',
    why: '2026 edition from active FAANG engineers. Uses a 5-step template (Requirements → Capacity → API Design → HLD → Deep Dive) matching what modern interviewers expect. Continuously updated. The perfect final course before the 29-day review phase.',
    courseTopics: [
      '5-step interview template used at Google, Meta, Amazon 2026',
      'YouTube: video upload, encoding pipeline, CDN, recommendations',
      'Social Media Newsfeed: fan-out on write vs read, caching, ranking',
      'WhatsApp end-to-end using the FAANG 5-step template',
      'How to handle deep-dive follow-up questions from senior interviewers',
      'Continuously updated — new system designs added regularly',
    ],
    practiceDay:
      'Day 71 — design a system cold using the 5-step template exactly. 45 min, no notes, spoken.',
  },
];

const REVIEW_DAYS = 29; // Days 72–100
const TOTAL_HRS = COURSES.reduce((s, c) => s + c.hours, 0);
const TOTAL_DAYS = 100;
const DSA_COURSES = COURSES.filter((c) => c.cat === 'DSA');
const SD_COURSES = COURSES.filter((c) => c.cat === 'SD');

function daysSinceStart() {
  return Math.max(0, Math.floor((new Date() - START) / (24 * 60 * 60 * 1000)));
}
function currentSeq() {
  const d = daysSinceStart();
  for (const c of COURSES) if (d < c.offset + c.totalDays) return c.seq;
  return 11; // final review
}

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
          <span style={{ fontSize: 14, lineHeight: 1 }}>{c.icon}</span>
          <span
            style={{
              fontSize: 14,
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
              color: isOpen ? 'rgba(255,255,255,0.6)' : c.color + '99',
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
            {c.cat === 'DSA' && (
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 800,
                  padding: '2px 7px',
                  borderRadius: 20,
                  background: '#EEF2FF',
                  color: '#4338CA',
                  border: '1px solid #C7D2FE',
                }}
              >
                ☕ JAVA
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
              {c.hours}h
            </span>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#F59E0B' }}>
              ★{c.rating}
            </span>
            <span style={{ fontSize: 10, color: '#94A3B8' }}>👥{c.stu}</span>
            <span
              style={{
                fontSize: 9,
                fontWeight: 600,
                padding: '1px 6px',
                borderRadius: 10,
                background: '#F1F5F9',
                color: '#64748B',
              }}
            >
              {c.lang}
            </span>
            <span style={{ fontSize: 10, color: '#64748B' }}>
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

      {isOpen && (
        <div
          style={{
            borderTop: `2px solid ${c.color}18`,
            padding: '13px 15px 17px',
          }}
        >
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
                📺 {c.courseDays} DAYS — COURSE + CODE ALONG
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
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
                    marginBottom: 4,
                  }}
                >
                  💪 {c.practiceDays} DAY{c.practiceDays > 1 ? 'S' : ''} —
                  REVISION FROM SCRATCH
                </div>
                <div
                  style={{ fontSize: 11, color: '#78350F', lineHeight: 1.75 }}
                >
                  {c.practiceDay}
                </div>
              </div>
              <div
                style={{
                  background: '#F8FAFF',
                  border: '1px solid #E0E7FF',
                  borderRadius: 9,
                  padding: '9px 11px',
                  fontSize: 10,
                  color: '#4F46E5',
                  lineHeight: 1.65,
                }}
              >
                ⏰ <strong>Full 3h daily:</strong> 6:00–9:00 AM · Udemy + code
                along · no separate LeetCode slot in this 100-day plan
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
                  fontSize: 'clamp(17px,5vw,27px)',
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
                Jul 15 → Oct 22, 2027 · 10 courses · {TOTAL_HRS}h · 3h/day ·
                6:00 AM–9:00 AM
              </div>
            </div>
          </div>

          {/* 500 days gold banner */}
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
              ['Day ' + Math.min(daysIn + 1, 100), 'of 100 Days'],
              ['500d', "Jun'26→Oct'27"],
              ['3h/day', '6–9 AM'],
              [TOTAL_HRS + 'h', 'Course Hrs'],
              ['☕ Java', 'DSA Language'],
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
                    fontSize: 'clamp(11px,3.5vw,14px)',
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

          {/* 100-day bar */}
          <div style={{ marginBottom: 10 }}>
            <div
              style={{
                height: 12,
                borderRadius: 6,
                overflow: 'hidden',
                display: 'flex',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3)',
                gap: 1,
              }}
            >
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
                    borderRight: '1px solid rgba(0,0,0,0.12)',
                    transition: 'background 0.3s',
                  }}
                />
              ))}
              <div
                style={{
                  flex: REVIEW_DAYS,
                  background: daysIn >= 72 ? '#16A34A' : '#16A34A55',
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 4,
              }}
            >
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>
                ☕ Java DSA (#1–5, Days 1–42)
              </span>
              <span
                style={{
                  fontSize: 9,
                  color: 'rgba(255,255,255,0.65)',
                  fontWeight: 700,
                }}
              >
                Day {Math.min(daysIn + 1, 100)} · {pct}%
              </span>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>
                🏗 SD (#6–10) · 🏁 Review
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
                  d{c.dayStart} #{c.seq} {c.cat === 'DSA' ? '☕' : '🏗'}
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
            📐 HOW THIS 100-DAY PLAN WORKS
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))',
              gap: 8,
              marginBottom: 10,
            }}
          >
            {[
              {
                icon: '☕',
                t: 'DSA in Java',
                d: '5 courses, Days 1–42. All data structures and algorithms coded in Java. Code along with IntelliJ open.',
                col: '#6366F1',
              },
              {
                icon: '🏗',
                t: 'System Design',
                d: '5 courses, Days 43–71. Language-agnostic architecture and design interview prep.',
                col: '#16A34A',
              },
              {
                icon: '🏁',
                t: 'Final Review (29 days)',
                d: 'Days 72–100. Mock interviews, revision, weak-spot drilling, and interview simulation.',
                col: '#F59E0B',
              },
            ].map(({ icon, t, d, col }) => (
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
                    marginBottom: 4,
                  }}
                >
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 6,
                      background: col + '18',
                      color: col,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 13,
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
              padding: '10px 12px',
              background: 'linear-gradient(90deg,#EEF2FF,#F0F9FF)',
              borderRadius: 8,
              border: '1px solid #C7D2FE',
              fontSize: 11,
              color: '#4338CA',
              lineHeight: 1.7,
            }}
          >
            ⏰{' '}
            <strong>
              6:00 AM – 9:00 AM · Full 3 hours · Every day · 100 days.
            </strong>{' '}
            Udemy course + code along. No separate LeetCode slot — the exercises
            inside the courses are your practice.
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
            🗓 100-DAY SEQUENCE — TAP ROW TO JUMP
          </div>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: 10,
              minWidth: 500,
            }}
          >
            <thead>
              <tr style={{ background: '#F8FAFC' }}>
                {['Days', '#', 'Title', 'Hrs', 'Dates', '★', 'Lang'].map(
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
                      {curSeq === c.seq ? '📍' : ''}
                      {c.dayStart}–{c.dayEnd}
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
                      maxWidth: 200,
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
                      {c.cat === 'DSA' ? '☕ Java' : '🏗 SD'}
                    </span>
                  </td>
                </tr>
              ))}
              <tr
                style={{
                  borderBottom: '1px solid #F1F5F9',
                  background: curSeq === 11 ? '#F0FDF4' : 'transparent',
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
                    72–100
                  </span>
                </td>
                <td style={{ padding: '7px 8px' }}>
                  <span style={{ fontSize: 13 }}>🏁</span>
                </td>
                <td
                  style={{
                    padding: '7px 8px',
                    fontWeight: 600,
                    color: '#0F172A',
                  }}
                >
                  Final Revision + Mock Interviews (29 days)
                </td>
                <td style={{ padding: '7px 8px', color: '#64748B' }}>—</td>
                <td
                  style={{ padding: '7px 8px', color: '#64748B', fontSize: 10 }}
                >
                  Sep 24 → Oct 22
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
                  TOTAL — 10 courses + 29-day review
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
                  style={{ padding: '8px', fontSize: 9, color: '#94A3B8' }}
                >
                  Jul 15 → Oct 22, 2027 · 300h total · 3h/day
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* DSA section */}
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
            ☕ JAVA DSA — COURSES 1–5 · DAYS 1–42
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

        {/* SD section */}
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
            🏗 SYSTEM DESIGN — COURSES 6–10 · DAYS 43–71
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

        {/* Final review 29 days */}
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
              marginBottom: 12,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
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
                  DAYS 72–100 · 29 DAYS
                </span>
                <span
                  style={{ fontSize: 15, fontWeight: 900, color: '#0F172A' }}
                >
                  Final Revision + Mock Interviews
                </span>
              </div>
              <div style={{ fontSize: 10, color: '#64748B' }}>
                Sep 24 – Oct 22, 2027 · 87h · Day 100 = Oct 22 🎯
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
              gap: 8,
              marginBottom: 10,
            }}
          >
            {[
              {
                d: 'Days 72–78',
                t: 'DSA Revision Week',
                b: 'Rebuild all 5 key structures from scratch in Java: Heap, Graph + Dijkstra, Trie, AVL Tree, LRU Cache. No reference. Use IntelliJ.',
              },
              {
                d: 'Days 79–85',
                t: 'System Design Mocks',
                b: 'Design 1 system per day cold — 45 min, paper first, 5-step template. Twitter, Netflix, Uber, Notification System, Rate Limiter, Payment System, FPO.',
              },
              {
                d: 'Days 86–92',
                t: 'Mock Interview Week',
                b: 'Pramp.com peer sessions (3 sessions). interviewing.io if available. Record yourself once and watch for filler words and pacing.',
              },
              {
                d: 'Days 93–97',
                t: 'Weak Spot Drill',
                b: 'Identify your 3 weakest DSA topics + 2 weakest system designs. Spend 5 days re-watching + re-coding those specific sections.',
              },
              {
                d: 'Days 98–99',
                t: 'Final Polish',
                b: "Resume final update. LinkedIn headline: 'Java | Spring Boot | React | System Design | 7 AWS Certs'. FPO 90-second pitch rehearsed cold.",
              },
              {
                d: 'Day 100 🎯',
                t: 'Interview Ready',
                b: 'Oct 22, 2027. 500 days of coding streak. You are ready. Apply aggressively. Every interview teaches you more than a week of solo prep.',
              },
            ].map(({ d, t, b }) => (
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
                  {b}
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
            💡 <strong>Every system design round:</strong> "At FPO Cloud I
            designed a real-time multi-tenant flight trajectory SaaS for
            Lufthansa, American Airlines and FedEx — Lambda microservices, Step
            Functions Saga, DynamoDB, Kafka, 7 AWS certs..." — top 5% before
            drawing a diagram.
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 12, textAlign: 'center', paddingBottom: 24 }}>
          <div
            style={{
              fontSize: 13,
              color: '#FDE68A',
              fontWeight: 900,
              marginBottom: 4,
              textShadow: '0 1px 8px rgba(0,0,0,0.2)',
            }}
          >
            🏆 500 Days Total · 400 Days of Code + 100 Days DSA & System Design
          </div>
          <div
            style={{ fontSize: 10, color: '#94A3B8', letterSpacing: '0.1em' }}
          >
            500 DAYS · 6:00 AM–9:00 AM · JUN 10 2026 → OCT 22 2027 · ☕ JAVA DSA
            · 🏗 SYSTEM DESIGN
          </div>
        </div>
      </div>
    </div>
  );
}
