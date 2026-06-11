import { useState } from 'react';

// ── 144 DAYS · 432H · JUL 15 → DEC 5, 2027 ─────────────────────────────────
const PHASES = [
  {
    id: 'sysdesign',
    n: 1,
    name: 'System Design',
    icon: '🏗',
    color: '#0EA5E9',
    dark: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    days: 30,
    total: 90,
    courseH: 55,
    practiceH: 35,
    offset: 0,
    startDate: 'Jul 15, 2027',
    endDate: 'Aug 13, 2027',
    tag: 'START HERE',
    daily:
      '6:00–7:30 AM course (1.5h) · 7:30–9:00 AM design 1 system from scratch on paper (1.5h)',
    leetcode:
      'Design 20 systems from scratch: URL Shortener, WhatsApp, Netflix, Uber, Twitter, Instagram, Google Docs, Notification System, Rate Limiter, Distributed Cache, Search Autocomplete, Payment System, Ride Sharing, News Feed, Video Streaming, Leaderboard, Web Crawler, Pastebin, Flight Booking System (your FPO!), Airline Operations Dashboard.',
    topics: [
      'Week 1: Fundamentals — Scalability, Load Balancing, Caching (Redis), CDN, CAP theorem, ACID vs BASE',
      'Week 2: Databases — SQL vs NoSQL, Sharding, Replication, DynamoDB (you know this from FPO!)',
      'Week 3: APIs + Messaging — REST vs gRPC, Rate Limiting, Kafka/SQS, Event-Driven (you know EventBridge)',
      'Week 4: Design classics — URL Shortener, WhatsApp, Netflix, Uber, Twitter — one per day, spoken aloud',
      'Week 5 (Days 26–30): Advanced systems + estimation practice + mock design sessions',
    ],
    practice: [
      'Every day: design 1 system on paper BEFORE solutions — 45 minutes strict',
      'FPO superpower: Lambda=Microservice, Step Functions=Saga, DynamoDB=NoSQL, Kafka=EventBridge',
      'Speak out loud while designing — 50% of system design score is communication',
      'Draw: Requirements → Estimation → HLD → Database Schema → API Design → Deep Dive',
      "Watch ByteByteGo YouTube for each system you design — Alex Xu's diagrams are unmatched",
    ],
    courses: [
      {
        h: 5,
        title: 'Mastering the System Design Interview',
        by: 'Frank Kane (ex-Amazon Hiring Manager)',
        rating: 4.6,
        stu: '47K+',
        url: 'https://www.udemy.com/course/system-design-interview-prep/',
        tag: '🥇 START HERE',
        tc: '#15803D',
        why: 'Frank Kane is an ex-Amazon hiring manager — teaches exactly what interviewers look for. 5h, do first. Six mock design walkthroughs. Best ROI per hour on Udemy for system design.',
      },
      {
        h: 20,
        title: 'Software Architecture & Design of Modern Large Scale Systems',
        by: 'Michael Pogrebinsky',
        rating: 4.6,
        stu: '93K+',
        url: 'https://www.udemy.com/course/software-architecture-design-of-modern-large-scale-systems/',
        tag: '🏛 ARCHITECTURE',
        tc: '#0369A1',
        why: "93K students. Deep distributed systems — exactly what Senior/Staff interviews test. CQRS, Event Sourcing, Microservices, API Gateway, Saga. You'll recognise FPO Cloud in every example.",
      },
      {
        h: 18,
        title: 'System Design Interview Guide for Software Architecture',
        by: 'Mikhail Smarshchok',
        rating: 4.5,
        stu: '25K+',
        url: 'https://www.udemy.com/course/system-design-a-comprehensive-guide/',
        tag: '🎯 20+ SYSTEMS',
        tc: '#7C3AED',
        why: "20+ complete system designs end-to-end. Best coverage of advanced systems: real-time, distributed, event-driven. Great for Week 3–4 after Frank Kane's framework.",
      },
      {
        h: 12,
        title: 'Pragmatic System Design',
        by: 'Bogdan Stashchuk',
        rating: 4.5,
        stu: '15K+',
        url: 'https://www.udemy.com/course/pragmatic-system-design/',
        tag: '⚡ TRADE-OFFS',
        tc: '#D97706',
        why: 'Real production architectures from Netflix, Uber, Airbnb with honest trade-off discussion — exactly what interviewers want to hear. Pragmatic, not theoretical.',
      },
    ],
  },
  {
    id: 'java',
    n: 2,
    name: 'Java 8 + Spring Boot Interview',
    icon: '☕',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    days: 28,
    total: 84,
    courseH: 52,
    practiceH: 32,
    offset: 30,
    startDate: 'Aug 14, 2027',
    endDate: 'Sep 10, 2027',
    tag: '',
    daily:
      '6:00–7:30 AM course Q&A (1.5h) · 7:30–9:00 AM write code answers from memory (1.5h)',
    leetcode:
      'Prepare written answers for 200+ Java interview questions. Coding focus: Streams API problems, Lambda expressions, OOP design patterns, Spring Bean lifecycle, JPA N+1, JWT auth flow, Microservices patterns.',
    topics: [
      'Week 5–6: Core Java — OOP, Collections, Generics, Exception handling, Multithreading, equals/hashCode',
      'Week 7: Java 8 — Streams API (coding!), Lambdas, Optional, CompletableFuture, Method references',
      'Week 8: Spring Boot — DI, Bean lifecycle, AOP, @Transactional, JPA relationships, N+1 fix, REST best practices',
      'Week 9 (4 days): Spring Security + Microservices — JWT flow, OAuth2, Circuit Breaker, Saga, Kafka, K8s for interviews',
    ],
    practice: [
      "Write every Streams solution from memory — don't copy-paste, your hands must remember the syntax",
      'For every concept: explain out loud as if teaching a junior developer',
      'Write 5 Java 8 Streams problems daily (filter, map, groupingBy, flatMap, reduce)',
      'Prepare STAR answers using FPO: DLH trajectory bug, LZA migration, multi-tenant Cognito provisioning',
      'Translate FPO C# patterns to Java equivalents — highlight polyglot experience in interviews',
    ],
    courses: [
      {
        h: 10,
        title: 'Java Programming Interview Guide — 200+ Questions & Answers',
        by: 'Ranga Karanam (in28minutes)',
        rating: 4.5,
        stu: '80K+',
        url: 'https://www.udemy.com/course/java-interview-questions-and-answers/',
        tag: '🥇 JAVA 200 Q&A',
        tc: '#15803D',
        why: '200+ Java Q&A with code examples. Java 5–8 features, Collections, Generics, Multithreading, Functional Programming. Perfect interview revision format by Ranga Karanam.',
      },
      {
        h: 10,
        title: 'Spring & Spring Boot Interview Guide — 200+ Questions',
        by: 'Ranga Karanam (in28minutes)',
        rating: 4.5,
        stu: '60K+',
        url: 'https://www.udemy.com/course/spring-interview-questions-and-answers/',
        tag: '🌱 SPRING 200 Q&A',
        tc: '#0369A1',
        why: '200 Spring/Spring Boot/JPA/AOP/REST Q&A with code. Covers IoC, Bean scopes, @Transactional, JPA, REST. Do alongside Java guide — they pair perfectly.',
      },
      {
        h: 18,
        title:
          'Java Interview Help — Java Spring Boot Microservices DevOps Cloud',
        by: 'Chad Darby',
        rating: 4.6,
        stu: '30K+',
        url: 'https://www.udemy.com/course/java-interview-help/',
        tag: '🎯 FULL STACK',
        tc: '#7C3AED',
        why: 'Covers the full Java developer interview: Java, Spring Boot, Microservices, REST, DevOps, Cloud in one course. Chad Darby is a top Udemy Java instructor. Best full-picture interview prep.',
      },
      {
        h: 14,
        title: 'Java Interview Questions Bootcamp — 1000+ Q&A Master Class',
        by: 'Multiple Instructors',
        rating: 4.5,
        stu: '20K+',
        url: 'https://www.udemy.com/course/java-interview-questions-bootcamp-master-class-1000-java-questions/',
        tag: '💯 1000 Q&A',
        tc: '#D97706',
        why: '1000+ Java Q&A covering Generics, Collections, Multithreading, Design Patterns, OOP, Functional Programming. Use as daily warm-up — 30 Q&A every morning.',
      },
    ],
  },
  {
    id: 'react',
    n: 3,
    name: 'React + Frontend Interview',
    icon: '⚛',
    color: '#F59E0B',
    dark: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    days: 16,
    total: 48,
    courseH: 29,
    practiceH: 19,
    offset: 58,
    startDate: 'Sep 11, 2027',
    endDate: 'Sep 26, 2027',
    tag: '',
    daily:
      '6:00–7:30 AM course Q&A (1.5h) · 7:30–9:00 AM build components from memory (1.5h)',
    leetcode:
      'Prepare answers for 100+ React interview questions. Build 5 components from memory: custom hook, context provider, infinite scroll, debounced search, virtualized list.',
    topics: [
      'Days 1–5: React fundamentals — Virtual DOM, reconciliation, fiber, component lifecycle, Pure Component vs memo',
      'Days 6–9: Hooks deep dive — useState, useEffect, useCallback, useMemo, useRef, custom hooks, rules of hooks',
      'Days 10–12: State management — Context API, Redux Toolkit, React Query, Zustand comparison for interviews',
      'Days 13–15: Performance — React.memo, lazy/Suspense, code splitting, useTransition, TypeScript in React',
      'Day 16: Next.js SSR/SSG/ISR interview questions, testing with RTL, frontend take-home exercise',
    ],
    practice: [
      'Build each React pattern from scratch without reference — hooks, context, compound components',
      "Explain every concept out loud: 'Virtual DOM works by...' until it flows naturally",
      'Implement useCallback, useMemo, React.memo and actually measure re-render impact in DevTools',
      'Prepare 3 code examples from your FPO React/RN work to discuss in interviews',
      'Do 1 full frontend take-home: build a flight search UI in 90 minutes, deploy to Netlify',
    ],
    courses: [
      {
        h: 11,
        title: 'React Interview Masterclass — 200 Questions (Hindi)',
        by: 'Hindi Instructor',
        rating: 4.4,
        stu: '15K+',
        url: 'https://www.udemy.com/course/react-interview-masterclass-top-200-questions-in-hindi/',
        tag: '🥇 200 Q&A',
        tc: '#15803D',
        why: '200 React Q&A in Hindi — makes tricky concepts crystal clear. Virtual DOM, reconciliation, fiber, hooks rules, performance patterns. Perfect interview consolidation.',
      },
      {
        h: 10,
        title:
          'Master the Coding Interview: Non-Technical (Resume, Salary, Behavioural)',
        by: 'Andrei Neagoie (ZTM)',
        rating: 4.7,
        stu: '60K+',
        url: 'https://www.udemy.com/course/master-the-coding-interview-get-more-job-offers/',
        tag: '🤝 NON-TECH',
        tc: '#0369A1',
        why: '4.7★. Resume, LinkedIn, salary negotiation, STAR behavioral Q&A. 40% of hiring is non-technical. Your 12+ years + AWS certs + FPO experience is gold — this course teaches you to present it.',
      },
      {
        h: 8,
        title: 'JavaScript Interview Prep — Become a Frontend Developer',
        by: 'Multiple Instructors',
        rating: 4.5,
        stu: '20K+',
        url: 'https://www.udemy.com/course/javascript-interview-prep-become-a-frontend-developer/',
        tag: '🟨 JS INTERVIEW',
        tc: '#D97706',
        why: "JavaScript interview questions: closures, hoisting, event loop, promises, async/await, prototype chain, this keyword. Fills gaps the React-specific course doesn't cover.",
      },
    ],
  },
  {
    id: 'mock',
    n: 4,
    name: 'Mock Interviews + Final Polish',
    icon: '🎯',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECDD3',
    days: 20,
    total: 60,
    courseH: 18,
    practiceH: 42,
    offset: 74,
    startDate: 'Sep 27, 2027',
    endDate: 'Oct 16, 2027',
    tag: '',
    daily:
      '6:00–7:00 AM course/revision (1h) · 7:00–8:30 AM timed mock session (1.5h) · 8:30–9:00 AM review (0.5h)',
    leetcode:
      '10 full system design mocks (45 min each, spoken aloud). Resume + LinkedIn final polish. 5+ Pramp peer mock sessions. Behavioral STAR stories ready for 15 questions.',
    topics: [
      'Days 1–5: System Design mocks — 1 full design per day spoken aloud, compare with expert solution',
      'Days 6–10: Peer mocks on Pramp.com — book 5 free sessions, take turns interviewing each other',
      'Days 11–14: Behavioral prep — 15 STAR stories written from FPO work (bugs, migrations, leadership)',
      'Days 15–18: Resume final polish + LinkedIn update — quantify every bullet with real FPO numbers',
      "Days 19–20: Company research — target companies' tech stack, engineering blogs, recent launches",
    ],
    practice: [
      'Pramp.com — book 5 free peer mock interviews, no excuses, different partner each time',
      'interviewing.io — 2 anonymous FAANG engineer mock sessions (first is free)',
      'Record 1 mock session on video — watch playback for filler words and body language',
      'FPO STAR stories: DLH NullRef bug fix, LZA migration spike, multi-tenant Cognito provisioning for 9 pools',
      'Know your numbers: X flights/day, Y airlines, Z Lambda cold starts fixed — quantify everything',
    ],
    courses: [
      {
        h: 8,
        title: 'Master the Coding Interview: Big Tech (FAANG Interviews)',
        by: 'Andrei Neagoie (ZTM)',
        rating: 4.6,
        stu: '40K+',
        url: 'https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/',
        tag: '🏢 FAANG PREP',
        tc: '#15803D',
        why: 'Advanced patterns used at FAANG/MAANG. Do in Week 1 of this phase. Harder graph, DP, and system design questions at Big Tech difficulty — prepares you for the toughest interviews.',
      },
      {
        h: 10,
        title: 'Cracking the Coding Interview Bootcamp — Algorithms',
        by: 'Zach Miller',
        rating: 4.5,
        stu: '30K+',
        url: 'https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/',
        tag: '🔑 CRACK CTI',
        tc: '#0369A1',
        why: 'Based on the famous Gayle McDowell book. Algorithmic thinking frameworks and problem-solving patterns for whiteboard coding interviews. Do in Week 2 alongside Pramp sessions.',
      },
    ],
  },
  {
    id: 'dsa',
    n: 5,
    name: 'DSA + LeetCode Patterns',
    icon: '🧩',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    days: 50,
    total: 150,
    courseH: 93,
    practiceH: 57,
    offset: 94,
    startDate: 'Oct 17, 2027',
    endDate: 'Dec 5, 2027',
    tag: 'FINAL PHASE 🏁',
    daily:
      '6:00–7:00 AM course/theory (1h) · 7:00–8:30 AM LeetCode problems (1.5h) · 8:30–9:00 AM review solutions (0.5h)',
    leetcode:
      'Target: 200+ problems — 40 Easy, 110 Medium, 50 Hard. Use NeetCode 150 as your roadmap. By Dec 5 you must solve Medium problems in under 20 minutes.',
    topics: [
      'Week 11–12 (Oct 17–30): Big O, Arrays, Strings, Hashing — Two Pointers, Sliding Window, Prefix Sum (40 problems)',
      'Week 13–14 (Oct 31–Nov 13): Linked Lists, Stacks, Queues, Binary Trees, BST — DFS, BFS, Tree DP (40 problems)',
      'Week 15–16 (Nov 14–Nov 27): Graphs — BFS, DFS, Topological Sort, Dijkstra, Union-Find (35 problems)',
      'Week 17–18 (Nov 28–Dec 5): Dynamic Programming — Knapsack, LCS, 2D DP, Backtracking (25 problems + speed drill)',
      'Dec 5 final: Re-solve your 20 hardest problems at speed — Easy < 8 min, Medium < 18 min',
    ],
    practice: [
      'Solve every problem BEFORE watching solution — minimum 20 min struggle time, no shortcuts',
      'Time yourself: Easy < 15 min, Medium < 25 min, Hard < 40 min — track in notebook',
      'After every 10 problems: identify weakest pattern and drill 5 more on it specifically',
      'Daily: 4 problems minimum — 1 Easy warm-up + 2 Medium + 1 Hard attempt',
      'Final week: 10 problems per day at full speed — simulate interview pressure',
    ],
    courses: [
      {
        h: 39,
        title: 'Master the Coding Interview: Data Structures + Algorithms',
        by: 'Andrei Neagoie (Zero To Mastery)',
        rating: 4.6,
        stu: '140K+',
        url: 'https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/',
        tag: '🥇 PRIMARY',
        tc: '#15803D',
        why: "Interview-first DSA — Andrei teaches 'when would an interviewer use this?' for every structure. Best for actual job interviews. 140K students. Covers all patterns with interview context.",
      },
      {
        h: 28,
        title: 'Python Data Structures & Algorithms + LeetCode Exercises',
        by: 'Scott Barrett',
        rating: 4.8,
        stu: '60K+',
        url: 'https://www.udemy.com/course/data-structures-algorithms-python/',
        tag: '🥈 LEETCODE',
        tc: '#0369A1',
        why: '4.8★ — highest rated DSA+LeetCode course on Udemy. Scott integrates LeetCode directly into every lesson. Even in Java, use this to understand patterns then re-implement. Exceptional problem-pattern approach.',
      },
      {
        h: 26,
        title: 'JavaScript Algorithms and Data Structures Masterclass',
        by: 'Colt Steele',
        rating: 4.7,
        stu: '350K+',
        url: 'https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/',
        tag: '🎨 VISUALISE',
        tc: '#7C3AED',
        why: '350K students. Best visual animations for sorting, trees, graphs. Use for visual understanding of algorithms — Colt makes abstract concepts concrete. Watch alongside solving problems.',
      },
    ],
  },
];

const TOT_DAYS = PHASES.reduce((s, p) => s + p.days, 0);
const TOT_HOURS = PHASES.reduce((s, p) => s + p.total, 0);
const TOT_COURSE = PHASES.reduce((s, p) => s + p.courseH, 0);
const TOT_PRACTICE = PHASES.reduce((s, p) => s + p.practiceH, 0);
const TOT_COURSES = PHASES.reduce((s, p) => s + p.courses.length, 0);

// ── COURSE CARD ───────────────────────────────────────────────────────────────
function CourseCard({ c, col }) {
  const isPrimary = c.tag.startsWith('🥇');
  return (
    <a
      href={c.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'block',
        textDecoration: 'none',
        background: '#fff',
        border: `1.5px solid ${isPrimary ? col + '55' : '#E2E8F0'}`,
        borderRadius: 12,
        padding: '12px 14px',
        boxShadow: isPrimary
          ? `0 3px 12px ${col}12`
          : '0 1px 3px rgba(0,0,0,0.04)',
        transition: 'all 0.18s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = `0 6px 18px ${col}18`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)';
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 8,
          marginBottom: 4,
        }}
      >
        <span
          style={{
            fontSize: 12,
            fontWeight: 800,
            color: '#0F172A',
            lineHeight: 1.4,
            flex: 1,
          }}
        >
          {c.title}
        </span>
        <span
          style={{
            fontSize: 9,
            fontWeight: 800,
            padding: '2px 7px',
            borderRadius: 20,
            background: c.tc + '15',
            color: c.tc,
            border: `1px solid ${c.tc}30`,
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {c.tag}
        </span>
      </div>
      <div style={{ fontSize: 11, color: '#64748B', marginBottom: 7 }}>
        by {c.by}
      </div>
      <div
        style={{
          display: 'flex',
          gap: 10,
          flexWrap: 'wrap',
          marginBottom: 7,
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 900, color: col }}>
          ⏱ {c.h}h
        </span>
        <span style={{ fontSize: 11, fontWeight: 700, color: '#F59E0B' }}>
          ★ {c.rating}
        </span>
        <span style={{ fontSize: 11, color: '#94A3B8' }}>👥 {c.stu}</span>
      </div>
      <div
        style={{
          fontSize: 11,
          color: '#4338CA',
          lineHeight: 1.6,
          background: '#F0F4FF',
          borderRadius: 8,
          padding: '7px 10px',
          border: '1px solid #E0E7FF',
        }}
      >
        💡 {c.why}
      </div>
      <div
        style={{
          marginTop: 8,
          fontSize: 10,
          color: '#94A3B8',
          textDecoration: 'underline',
        }}
      >
        → Open on Udemy
      </div>
    </a>
  );
}

// ── PHASE BLOCK ───────────────────────────────────────────────────────────────
function Block({ p, isOpen, onToggle }) {
  const cPct = Math.round((p.courseH / p.total) * 100);
  const pPct = 100 - cPct;
  const barL = ((p.offset / 144) * 100).toFixed(1) + '%';
  const barW = ((p.days / 144) * 100).toFixed(1) + '%';

  return (
    <div
      id={'b-' + p.id}
      style={{
        borderRadius: 14,
        border: `2px solid ${isOpen ? p.color + '70' : p.border}`,
        background: isOpen ? p.bg : '#fff',
        boxShadow: isOpen
          ? `0 8px 28px ${p.color}12`
          : '0 1px 5px rgba(0,0,0,0.05)',
        overflow: 'hidden',
        transition: 'all 0.25s',
      }}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '14px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          textAlign: 'left',
          fontFamily: 'inherit',
        }}
      >
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: 13,
            flexShrink: 0,
            background: isOpen
              ? `linear-gradient(135deg,${p.color},${p.dark})`
              : p.bg,
            border: `2px solid ${p.color}35`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24,
            transition: 'all 0.25s',
            boxShadow: isOpen ? `0 4px 14px ${p.color}40` : 'none',
          }}
        >
          {p.icon}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: 'flex',
              gap: 7,
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: 3,
            }}
          >
            <span
              style={{
                fontSize: 9,
                fontWeight: 800,
                padding: '2px 7px',
                borderRadius: 20,
                background: p.color + '18',
                color: p.color,
                border: `1px solid ${p.color}30`,
              }}
            >
              PHASE {p.n}
            </span>
            <span
              style={{
                fontSize: 'clamp(13px,4vw,15px)',
                fontWeight: 900,
                color: '#0F172A',
              }}
            >
              {p.name}
            </span>
            {p.tag && (
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 800,
                  padding: '2px 7px',
                  borderRadius: 20,
                  background: p.color + '15',
                  color: p.color,
                  border: `1px solid ${p.color}30`,
                }}
              >
                {p.tag}
              </span>
            )}
          </div>
          <div style={{ fontSize: 10, color: '#64748B', marginBottom: 3 }}>
            {p.startDate} → {p.endDate} · {p.days}d · {p.courses.length} courses
          </div>
          <div
            style={{
              display: 'flex',
              height: 4,
              borderRadius: 2,
              overflow: 'hidden',
              maxWidth: 150,
            }}
          >
            <div style={{ flex: cPct, background: p.color }} />
            <div style={{ flex: pPct, background: p.color + '35' }} />
          </div>
        </div>

        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div
            style={{
              fontSize: 'clamp(14px,4vw,17px)',
              fontWeight: 900,
              color: p.color,
              background: p.color + '12',
              padding: '3px 12px',
              borderRadius: 20,
              border: `1px solid ${p.color}25`,
              marginBottom: 2,
            }}
          >
            {p.total}h
          </div>
          <div style={{ fontSize: 9, color: '#94A3B8' }}>{p.days}d × 3h</div>
        </div>

        <span
          style={{
            color: p.color,
            fontSize: 22,
            flexShrink: 0,
            transform: isOpen ? 'rotate(90deg)' : 'none',
            transition: 'transform 0.2s',
            opacity: isOpen ? 1 : 0.3,
          }}
        >
          ›
        </span>
      </button>

      {/* Body */}
      {isOpen && (
        <div
          style={{
            borderTop: `2px solid ${p.color}18`,
            padding: '14px 16px 18px',
          }}
        >
          {/* Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: 7,
              marginBottom: 12,
            }}
          >
            {[
              ['📅', p.days + 'd', 'days'],
              ['📺', p.courseH + 'h', cPct + '% course'],
              ['💻', p.practiceH + 'h', pPct + '% practice'],
              ['📚', p.courses.length, 'courses'],
            ].map(([ic, v, l]) => (
              <div
                key={l}
                style={{
                  background: '#F8FAFC',
                  borderRadius: 8,
                  padding: '8px 5px',
                  border: '1px solid #E2E8F0',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 15 }}>{ic}</div>
                <div
                  style={{
                    fontSize: 'clamp(11px,3vw,13px)',
                    fontWeight: 800,
                    color: '#0F172A',
                  }}
                >
                  {v}
                </div>
                <div style={{ fontSize: 9, color: '#94A3B8', marginTop: 1 }}>
                  {l}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div style={{ marginBottom: 12 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 3,
              }}
            >
              <span style={{ fontSize: 10, color: '#94A3B8' }}>
                Position in 144-day plan
              </span>
              <span style={{ fontSize: 10, color: p.color, fontWeight: 700 }}>
                {p.startDate} → {p.endDate}
              </span>
            </div>
            <div
              style={{
                height: 7,
                background: '#F1F5F9',
                borderRadius: 4,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  borderRadius: 4,
                  background: `linear-gradient(90deg,${p.color},${p.dark})`,
                  marginLeft: barL,
                  width: barW,
                  boxShadow: `0 0 6px ${p.color}50`,
                }}
              />
            </div>
          </div>

          {/* Course / Practice bar */}
          <div style={{ marginBottom: 12 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 3,
              }}
            >
              <span style={{ fontSize: 11, color: '#374151', fontWeight: 600 }}>
                📺 Course: {p.courseH}h ({cPct}%)
              </span>
              <span style={{ fontSize: 11, color: '#374151', fontWeight: 600 }}>
                💻 Practice: {p.practiceH}h ({pPct}%)
              </span>
            </div>
            <div
              style={{
                height: 9,
                background: '#F1F5F9',
                borderRadius: 5,
                overflow: 'hidden',
                display: 'flex',
              }}
            >
              <div style={{ flex: p.courseH, background: p.color }} />
              <div style={{ flex: p.practiceH, background: p.color + '35' }} />
            </div>
          </div>

          {/* Daily schedule */}
          <div
            style={{
              background: '#F8FAFF',
              border: '1px solid #E0E7FF',
              borderRadius: 9,
              padding: '10px 12px',
              marginBottom: 10,
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: '#4F46E5',
                letterSpacing: '0.1em',
                marginBottom: 3,
              }}
            >
              ⏰ DAILY 6:00–9:00 AM
            </div>
            <div style={{ fontSize: 11, color: '#374151', lineHeight: 1.7 }}>
              {p.daily}
            </div>
          </div>

          {/* Topics */}
          <div style={{ marginBottom: 10 }}>
            <div
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: '#94A3B8',
                letterSpacing: '0.1em',
                marginBottom: 6,
              }}
            >
              📋 WEEK-BY-WEEK TOPICS
            </div>
            {p.topics.map((t, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: 8,
                  alignItems: 'flex-start',
                  padding: '3px 0',
                }}
              >
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 5,
                    background: p.color + '20',
                    color: p.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 9,
                    fontWeight: 900,
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  {i + 1}
                </div>
                <span
                  style={{ fontSize: 11, color: '#374151', lineHeight: 1.65 }}
                >
                  {t}
                </span>
              </div>
            ))}
          </div>

          {/* LeetCode / Practice target */}
          <div
            style={{
              background: '#FFFBEB',
              border: '1px solid #FDE68A',
              borderRadius: 9,
              padding: '10px 12px',
              marginBottom: 12,
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: '#D97706',
                letterSpacing: '0.1em',
                marginBottom: 4,
              }}
            >
              🎯 PRACTICE TARGET
            </div>
            <div style={{ fontSize: 11, color: '#78350F', lineHeight: 1.65 }}>
              {p.leetcode}
            </div>
          </div>

          {/* Practice tips */}
          <div
            style={{
              background: '#F0FDF4',
              border: '1px solid #BBF7D0',
              borderRadius: 9,
              padding: '10px 12px',
              marginBottom: 14,
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: '#15803D',
                letterSpacing: '0.1em',
                marginBottom: 6,
              }}
            >
              💻 PRACTICE TIPS
            </div>
            {p.practice.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: 7,
                  alignItems: 'flex-start',
                  padding: '2px 0',
                }}
              >
                <span
                  style={{
                    color: p.color,
                    fontSize: 10,
                    flexShrink: 0,
                    marginTop: 2,
                    fontWeight: 700,
                  }}
                >
                  ▸
                </span>
                <span
                  style={{ fontSize: 11, color: '#166534', lineHeight: 1.65 }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Courses */}
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: '#94A3B8',
              letterSpacing: '0.12em',
              marginBottom: 9,
            }}
          >
            COURSES ({p.courses.length}) — TAP TO OPEN UDEMY
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {p.courses.map((c, i) => (
              <CourseCard key={i} c={c} col={p.color} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [open, setOpen] = useState('dsa');
  const go = (id) => {
    setOpen(id);
    setTimeout(
      () =>
        document
          .getElementById('b-' + id)
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
            'linear-gradient(135deg,#1E1B4B 0%,#4338CA 48%,#1A365D 100%)',
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
            position: 'absolute',
            top: -80,
            right: -60,
            width: 300,
            height: 300,
            borderRadius: '50%',
            pointerEvents: 'none',
            background:
              'radial-gradient(circle,rgba(99,102,241,0.22) 0%,transparent 65%)',
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
                borderRadius: 13,
                flexShrink: 0,
                background: 'linear-gradient(135deg,#6366F1,#8B5CF6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                boxShadow: '0 6px 20px rgba(99,102,241,0.5)',
              }}
            >
              💼
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
                Sumit Rawal · After 400 Days of Code · NextStep Bangkok
              </div>
              <div
                style={{
                  fontSize: 'clamp(17px,5vw,28px)',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                }}
              >
                Interview Preparation Plan
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.36)',
                  marginTop: 2,
                }}
              >
                Jul 15, 2027 → Dec 5, 2027 · 144 days · 432h · {TOT_COURSES}{' '}
                courses · 6 AM–9 AM
              </div>
            </div>
          </div>

          {/* Schedule banner */}
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
              <div style={{ fontSize: 12, fontWeight: 900, color: '#FFFFFF' }}>
                6:00 AM – 9:00 AM · Every Day · 144 Days
              </div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.42)' }}>
                ~1.7h course · ~1.3h practice · Bangkok time · continues after
                400-day Udemy plan
              </div>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontSize: 15, fontWeight: 900, color: '#A5B4FC' }}>
                432h
              </div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.38)' }}>
                total study
              </div>
            </div>
          </div>

          {/* Stats 3-col mobile */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 7,
              marginBottom: 14,
            }}
          >
            {[
              ['144d', '~5 Months'],
              ['432h', 'Total Study'],
              ['3h/day', '6–9 AM'],
              [TOT_COURSES + ' courses', '5 Phases'],
              [`${TOT_COURSE}h / ${TOT_PRACTICE}h`, 'Course/Practice'],
              ["Dec 5, '27", 'Interview Ready'],
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
                    color: '#FFFFFF',
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

          {/* 144-day bar */}
          <div style={{ marginBottom: 8 }}>
            <div
              style={{
                height: 10,
                borderRadius: 5,
                overflow: 'hidden',
                display: 'flex',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.3)',
              }}
            >
              {[
                ['#0EA5E9', 30],
                ['#16A34A', 28],
                ['#F59E0B', 16],
                ['#E11D48', 20],
                ['#6366F1', 50],
              ].map(([col, fl], i) => (
                <div key={i} style={{ flex: fl, background: col }} />
              ))}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 4,
              }}
            >
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.42)' }}>
                Jul 15, 2027
              </span>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.42)' }}>
                Dec 5, 2027 🎯
              </span>
            </div>
          </div>

          {/* Phase pills */}
          <div
            style={{
              display: 'flex',
              gap: 6,
              overflowX: 'auto',
              paddingBottom: 2,
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
            }}
          >
            {PHASES.map((p) => (
              <button
                key={p.id}
                onClick={() => go(p.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 20,
                  padding: '4px 10px',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: p.color,
                  }}
                />
                <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.55)' }}>
                  {p.icon} {p.name}
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
        {/* Summary card */}
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
            📊 432H STUDY SPLIT + TARGETS
          </div>
          <div
            style={{
              display: 'flex',
              height: 16,
              borderRadius: 8,
              overflow: 'hidden',
              marginBottom: 8,
            }}
          >
            <div
              style={{
                flex: TOT_COURSE,
                background: '#6366F1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: 9, fontWeight: 800, color: '#fff' }}>
                {TOT_COURSE}h courses
              </span>
            </div>
            <div
              style={{
                flex: TOT_PRACTICE,
                background: '#A5B4FC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: 9, fontWeight: 800, color: '#312E81' }}>
                {TOT_PRACTICE}h practice
              </span>
            </div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
              gap: 8,
              marginTop: 10,
            }}
          >
            {[
              {
                label: '🧩 LeetCode target',
                val: '300+ problems',
                sub: '60E · 170M · 70H',
              },
              {
                label: '🏗 System designs',
                val: '20 systems',
                sub: 'Full HLD + API + DB',
              },
              {
                label: '☕ Java Q&A',
                val: '400+ answered',
                sub: 'Written from memory',
              },
              {
                label: '🎯 Mock interviews',
                val: '8+ sessions',
                sub: 'Pramp + interviewing.io',
              },
            ].map(({ label, val, sub }) => (
              <div
                key={label}
                style={{
                  background: '#F8FAFC',
                  borderRadius: 9,
                  padding: '10px 12px',
                  border: '1px solid #E2E8F0',
                }}
              >
                <div
                  style={{ fontSize: 10, color: '#64748B', marginBottom: 3 }}
                >
                  {label}
                </div>
                <div
                  style={{ fontSize: 13, fontWeight: 800, color: '#0F172A' }}
                >
                  {val}
                </div>
                <div style={{ fontSize: 9, color: '#94A3B8' }}>{sub}</div>
              </div>
            ))}
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
            🗓 MASTER SCHEDULE — 5 PHASES · 144 DAYS · 432H
          </div>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: 11,
              minWidth: 430,
            }}
          >
            <thead>
              <tr style={{ background: '#F8FAFC' }}>
                {[
                  '',
                  'Phase',
                  'Days',
                  'Study',
                  '📺 Course',
                  '💻 Practice',
                  'Period',
                ].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: '6px 8px',
                      textAlign: 'left',
                      color: '#64748B',
                      fontWeight: 700,
                      borderBottom: '2px solid #E2E8F0',
                      whiteSpace: 'nowrap',
                      fontSize: 10,
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PHASES.map((p, i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom: '1px solid #F1F5F9',
                    cursor: 'pointer',
                    transition: 'background 0.1s',
                  }}
                  onClick={() => go(p.id)}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = '#F8FAFC')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = 'transparent')
                  }
                >
                  <td style={{ padding: '7px 8px' }}>
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: 7,
                        background: p.color + '18',
                        color: p.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 15,
                      }}
                    >
                      {p.icon}
                    </div>
                  </td>
                  <td
                    style={{
                      padding: '7px 8px',
                      fontWeight: 800,
                      color: '#0F172A',
                      fontSize: 11,
                    }}
                  >
                    {p.name}
                  </td>
                  <td
                    style={{
                      padding: '7px 8px',
                      fontWeight: 700,
                      color: '#374151',
                    }}
                  >
                    {p.days}
                  </td>
                  <td
                    style={{
                      padding: '7px 8px',
                      fontWeight: 900,
                      color: p.color,
                    }}
                  >
                    {p.total}h
                  </td>
                  <td style={{ padding: '7px 8px', color: '#4F46E5' }}>
                    {p.courseH}h
                  </td>
                  <td style={{ padding: '7px 8px', color: '#94A3B8' }}>
                    {p.practiceH}h
                  </td>
                  <td
                    style={{
                      padding: '7px 8px',
                      color: '#64748B',
                      fontSize: 10,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {p.startDate}
                  </td>
                </tr>
              ))}
              <tr
                style={{
                  background: '#F8FAFC',
                  borderTop: '2px solid #E2E8F0',
                  fontWeight: 800,
                }}
              >
                <td
                  colSpan={2}
                  style={{ padding: '8px', color: '#0F172A', fontSize: 12 }}
                >
                  TOTAL
                </td>
                <td style={{ padding: '8px', color: '#0F172A' }}>
                  {TOT_DAYS}d
                </td>
                <td style={{ padding: '8px', color: '#4F46E5', fontSize: 14 }}>
                  432h
                </td>
                <td style={{ padding: '8px', color: '#4F46E5' }}>
                  {TOT_COURSE}h
                </td>
                <td style={{ padding: '8px', color: '#94A3B8' }}>
                  {TOT_PRACTICE}h
                </td>
                <td
                  style={{
                    padding: '8px',
                    fontSize: 10,
                    color: '#16A34A',
                    fontWeight: 700,
                  }}
                >
                  🎯 Dec 5, 2027
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ marginTop: 6, fontSize: 10, color: '#94A3B8' }}>
            👆 Tap any row to jump to that phase
          </div>
        </div>

        {/* Phase blocks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          {PHASES.map((p) => (
            <Block
              key={p.id}
              p={p}
              isOpen={open === p.id}
              onToggle={() => (open === p.id ? setOpen(null) : go(p.id))}
            />
          ))}
        </div>

        {/* FPO superpower callout */}
        <div
          style={{
            marginTop: 14,
            background: 'linear-gradient(135deg,#F0FDF4,#ECFDF5)',
            borderRadius: 12,
            border: '1px solid #BBF7D0',
            padding: '16px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: '#15803D',
              letterSpacing: '0.12em',
              marginBottom: 10,
            }}
          >
            🚀 YOUR FPO EXPERIENCE = INTERVIEW GOLD
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
              gap: 8,
            }}
          >
            {[
              [
                'System Design',
                'Lambda=Microservice · DynamoDB=NoSQL · Kafka=EventBridge · API Gateway=Load Balancer',
              ],
              [
                'Java Interview',
                'C# + .NET 8 background → Java patterns are the same. Highlight polyglot skills.',
              ],
              [
                'Behavioural',
                'FPO NullRef bug (DLH EN-2026) · LZA migration spike · Multi-tenant Cognito provisioning',
              ],
              [
                'Architecture',
                'Step Functions=Saga · S3 archive=tiered storage · Cognito+OAuth2=auth at scale',
              ],
              [
                'Credentials',
                '7 AWS Certs + CKA = instant senior credibility before a single interview question',
              ],
              [
                'Scale',
                'Real airlines: Lufthansa, American Airlines, FedEx — enterprise-scale, real traffic',
              ],
            ].map(([title, desc]) => (
              <div
                key={title}
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  borderRadius: 8,
                  padding: '9px 11px',
                  border: '1px solid #DCFCE7',
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#0F172A',
                    marginBottom: 2,
                  }}
                >
                  {title}
                </div>
                <div
                  style={{ fontSize: 10, color: '#64748B', lineHeight: 1.6 }}
                >
                  {desc}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 10,
              padding: '10px 12px',
              background: 'rgba(255,255,255,0.8)',
              borderRadius: 8,
              border: '1px solid #BBF7D0',
              fontSize: 11,
              color: '#166534',
              lineHeight: 1.75,
            }}
          >
            💡 <strong>Open every interview with:</strong> "At FPO Cloud I
            designed a real-time multi-tenant flight trajectory system for
            Lufthansa, American Airlines and FedEx using AWS Lambda + Step
            Functions + DynamoDB + Kafka, handling live ACARS data from 15
            airlines…" — that single sentence puts you in the top 5% of
            candidates.
          </div>
        </div>

        {/* Rules */}
        <div
          style={{
            marginTop: 12,
            background: '#fff',
            borderRadius: 12,
            border: '1px solid #E2E8F0',
            padding: '16px 14px',
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
            ⚡ 6 RULES — 144 DAYS TO INTERVIEW-READY
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(185px,1fr))',
              gap: 12,
            }}
          >
            {[
              [
                '⏰',
                '6 AM–9 AM every day',
                "Same habit from 400 days. Don't break the chain now — you're 400 days in.",
              ],
              [
                '🚫',
                'Never skip the struggle',
                'Attempt every LeetCode problem 25 min BEFORE solutions. The struggle IS the learning.',
              ],
              [
                '🗣️',
                'Talk while you solve',
                'Verbalise your approach out loud every time. 50% of interview scoring is communication.',
              ],
              [
                '✍️',
                'Paper before laptop',
                'System design: always draw on paper first. Interviewers think visually.',
              ],
              [
                '🔁',
                'Spaced repetition',
                'Re-solve hard problems after 3 days, 7 days, 14 days. Use a notebook. Memory compounds.',
              ],
              [
                '📅',
                'Weekly mock session',
                'Every Sunday: 1 mock coding (45 min) + 1 mock design (45 min). Simulate real conditions.',
              ],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}
              >
                <span style={{ fontSize: 20, flexShrink: 0, lineHeight: 1.3 }}>
                  {icon}
                </span>
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: 2,
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{ fontSize: 11, color: '#64748B', lineHeight: 1.65 }}
                  >
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 12, textAlign: 'center', paddingBottom: 24 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 4,
              flexWrap: 'wrap',
              marginBottom: 5,
            }}
          >
            {PHASES.map((p, i, a) => (
              <span
                key={p.id}
                style={{ display: 'flex', alignItems: 'center', gap: 3 }}
              >
                <span style={{ fontSize: 10, fontWeight: 700, color: p.color }}>
                  {p.icon} {p.name}
                </span>
                {i < a.length - 1 && (
                  <span style={{ color: '#CBD5E1', fontSize: 11 }}>›</span>
                )}
              </span>
            ))}
          </div>
          <div
            style={{ fontSize: 10, color: '#94A3B8', letterSpacing: '0.1em' }}
          >
            144 DAYS · 432H · {TOT_COURSES} COURSES · 300+ LEETCODE · 6 AM–9 AM
            · JUL 15 → DEC 5, 2027
          </div>
        </div>
      </div>
    </div>
  );
}
