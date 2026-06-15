import { useState } from 'react';

const START = new Date('2026-06-14');

const PHASES = [
  // ══ BLOCK 1 — 1 YEAR OF FULL STACK · 365 days · 6 phases ══════════════════
  {
    id: 'react',
    block: 1,
    seq: 1,
    icon: '⚛',
    color: '#0EA5E9',
    dark: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    name: 'React',
    bLabel: 'Block 1 · 1 Year of Full Stack',
    days: 92,
    ds: 1,
    de: 92,
    period: 'Jun 14 – Sep 13, 2026',
    weeks: '13w',
    ms: '⚛ React Complete · Day 92',
    about:
      '92 days · 13 weeks · 3 courses. John Smilga first (50.5h, 25+ real projects), Max Schwarzmüller second angle (TypeScript, testing, Redux), Hindi Q&A final week.',
    courses: [
      'John Smilga — React Tutorial & Projects Course 2025 (50.5h) ★ START HERE',
      'Max Schwarzmüller — React The Complete Guide 2025 (55h)',
      'Hindi Instructor — React Interview Masterclass 200 Q (11h)',
    ],
    wplan: [
      {
        w: 1,
        f: 'Smilga: Setup + JSX',
        t: 'Vite, JSX, props, component patterns — 25+ projects begin',
      },
      {
        w: 2,
        f: 'Smilga: State + Events',
        t: 'useState, event handlers, forms — Person List, City Tours, Todo',
      },
      {
        w: 3,
        f: 'Smilga: Hooks + Data',
        t: 'useEffect, fetch, async/await — Food Recipe, Beachwalk Resort',
      },
      {
        w: 4,
        f: 'Smilga: React Router',
        t: 'React Router v6, nested routes — Tech Store E-commerce project',
      },
      {
        w: 5,
        f: 'Smilga: Context + Hooks',
        t: 'createContext, useContext, useReducer — Budget Calculator',
      },
      {
        w: 6,
        f: 'Smilga: React Query',
        t: 'useQuery, useMutation, caching — Axios integration project',
      },
      {
        w: 7,
        f: 'Smilga: Redux Toolkit',
        t: 'createSlice, configureStore, RTK Query — e-commerce state',
      },
      {
        w: 8,
        f: 'Smilga: TS + Tailwind',
        t: 'TypeScript in React, Tailwind CSS — final projects. Course done.',
      },
      {
        w: 9,
        f: 'Max: TypeScript Deep',
        t: 'Generic components, utility types (Pick/Omit/Partial), strict TS',
      },
      {
        w: 10,
        f: 'Max: Performance+Testing',
        t: 'useMemo, useCallback, React.memo, lazy/Suspense, Testing Library',
      },
      {
        w: 11,
        f: 'Max: Advanced Patterns',
        t: 'Compound components, render props, forwardRef, custom hooks',
      },
      {
        w: 12,
        f: 'Max: Redux + Next.js',
        t: 'Redux Toolkit deep, RTK Query advanced, Next.js intro',
      },
      {
        w: 13,
        f: 'Hindi 200 Q&A + Revision',
        t: 'Hindi 200 React Q&A. Rebuild FPO Flight Status app cold. Day 92.',
      },
    ],
  },

  {
    id: 'nextjs',
    block: 1,
    seq: 2,
    icon: '▲',
    color: '#374151',
    dark: '#111827',
    bg: '#F9FAFB',
    border: '#D1D5DB',
    name: 'Next.js',
    bLabel: 'Block 1 · 1 Year of Full Stack',
    days: 28,
    ds: 93,
    de: 120,
    period: 'Sep 14 – Oct 11, 2026',
    weeks: '4w',
    ms: '▲ Next.js Complete · Day 120',
    about:
      '35 days · 5 weeks · 3 courses. App Router, Server Components, Server Actions, NextAuth v5, Prisma. Deploy to Vercel after every chapter.',
    courses: [
      'Max Schwarzmüller — Next.js & React The Complete Guide (25h)',
      'John Smilga — React Tutorial & Projects Next.js sections (20h)',
      'Anil Dollor — Next.js Full Stack Development Hindi (20h)',
    ],
    wplan: [
      {
        w: 14,
        f: 'App Router Basics',
        t: 'File-based routing, layouts, loading states, error boundaries',
      },
      {
        w: 15,
        f: 'Server Components',
        t: 'RSC vs Client Components, data fetching, streaming, Suspense',
      },
      {
        w: 16,
        f: 'Server Actions + DB',
        t: 'Form actions, Prisma ORM, PostgreSQL, revalidatePath',
      },
      {
        w: 17,
        f: 'Deploy + Capstone',
        t: 'Vercel deploy + NextAuth v5 OAuth — FPO web portal as capstone project',
      },
    ],
  },

  {
    id: 'rn',
    block: 1,
    seq: 3,
    icon: '📱',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'React Native',
    bLabel: 'Block 1 · 1 Year of Full Stack',
    days: 35,
    ds: 121,
    de: 155,
    period: 'Oct 12 – Nov 15, 2026',
    weeks: '5w',
    ms: '📱 React Native Complete · Day 155',
    about:
      '28 days · 4 weeks · 2 courses. Run every exercise on your real iPad via Expo Go. Build FPO-style flight list app with React Navigation.',
    courses: [
      'Stephen Grider — The Complete React Native + Hooks Course 4.8★ (38h)',
      'Max Schwarzmüller — React Native The Practical Guide 2025 (14h)',
    ],
    wplan: [
      {
        w: 18,
        f: 'Core Components',
        t: 'View, Text, Image, StyleSheet, Flexbox, FlatList — exercises on iPad',
      },
      {
        w: 19,
        f: 'Navigation',
        t: 'React Navigation v6 — Stack, Tab, Drawer — FPO flight list app',
      },
      {
        w: 20,
        f: 'Device APIs',
        t: 'Camera, Location, AsyncStorage, Notifications — Expo SDK',
      },
      {
        w: 21,
        f: 'State + Redux',
        t: 'Redux Toolkit in React Native, AsyncStorage persistence, offline state',
      },
      {
        w: 22,
        f: 'Polish + Deploy',
        t: 'Animations, iOS vs Android differences, EAS Build, TestFlight',
      },
    ],
  },

  {
    id: 'spring',
    block: 1,
    seq: 4,
    icon: '🌱',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'Spring Boot',
    bLabel: 'Block 1 · MAX ⭐',
    days: 91,
    ds: 156,
    de: 246,
    period: 'Nov 16, 2026 – Feb 14, 2027',
    weeks: '13w',
    ms: '🌱 Spring Boot Complete · Day 246',
    about:
      '105 days · 15 weeks · MAX TIME · 5 courses. Java 8 fast-track, JPA/Hibernate deep, Spring Security with Cognito OAuth2. Every concept maps to FPO: Bean=Lambda, JPA=DynamoDB.',
    courses: [
      'Navin Reddy Telusko — Java 8 New Features (20h)',
      'John Thompson — Hibernate & Spring Data JPA Beginner to Guru (55h)',
      'Ranga Karanam — Spring Boot with IntelliJ Real-World Project (34h)',
      'John Thompson — Spring Framework 6 Beginner to Guru (40h)',
      'Ranga Karanam — Master Spring Boot 3 & Spring Framework 6 (36h)',
    ],
    wplan: [
      {
        w: 23,
        f: 'Java 8 Fast-Track',
        t: 'Lambdas, Streams, Optional, CompletableFuture — fast using C# background',
      },
      {
        w: 24,
        f: 'JPA Foundations',
        t: '@Entity, @Id, relationships, EntityManager lifecycle',
      },
      {
        w: 25,
        f: 'Spring Data JPA',
        t: 'JpaRepository, JPQL, @Query, Pageable, @Transactional',
      },
      {
        w: 26,
        f: 'N+1 & Performance',
        t: 'N+1 problem, @EntityGraph, JOIN FETCH, lazy vs eager',
      },
      {
        w: 27,
        f: 'Spring Boot Basics',
        t: 'Auto-configuration, starters, Actuator, profiles',
      },
      {
        w: 28,
        f: 'REST APIs',
        t: '@RestController, ResponseEntity, @ExceptionHandler, OpenAPI',
      },
      {
        w: 29,
        f: 'Spring MVC + Testing',
        t: '@WebMvcTest, MockMvc, @DataJpaTest, Testcontainers, Mockito',
      },
      {
        w: 30,
        f: 'Spring IoC Deep',
        t: 'Bean lifecycle, AOP, @Transactional propagation',
      },
      {
        w: 31,
        f: 'Spring Security',
        t: 'SecurityFilterChain, JWT filter, UserDetailsService',
      },
      {
        w: 32,
        f: 'OAuth2 + Cognito',
        t: 'Resource server, JWT validation, Cognito JWKS — your FPO pattern',
      },
      {
        w: 33,
        f: 'Docker + Maven',
        t: 'Dockerfile, multi-stage build, docker-compose, Maven lifecycle',
      },
      {
        w: 34,
        f: 'Full-Stack Connect',
        t: 'Spring Boot API + React frontend — connect both apps',
      },
      {
        w: 35,
        f: 'Capstone + Revision',
        t: 'Build REST API + JWT + JPA from scratch cold. 200 Spring Q&A drill. Week 35 = Day 246 ✅',
      },
    ],
  },

  {
    id: 'micro',
    block: 1,
    seq: 5,
    icon: '🏛',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECDD3',
    name: 'Microservices',
    bLabel: 'Block 1 · MAX ⭐',
    days: 56,
    ds: 247,
    de: 302,
    period: 'Feb 15 – Apr 11, 2027',
    weeks: '8w',
    ms: '🏛 Microservices Complete · Day 302',
    about:
      '56 days · 8 weeks · MAX TIME · 4 courses. Kafka, CQRS, Event Sourcing, Saga, K8s. Every pattern maps to FPO: EventBridge→Kafka, Step Functions→Saga.',
    courses: [
      'Ranga Karanam — Java Spring Boot Microservices with K8s & Docker (35h)',
      'Sergey Kargopolov — Building Microservices with Spring Cloud (30h)',
      'John Thompson — Spring Boot Microservices Beginner to Guru (15h)',
      'Sean Campbell — Master Spring Boot Microservices CQRS & Event Sourcing (10h)',
    ],
    wplan: [
      {
        w: 38,
        f: 'Service Decomposition',
        t: 'DDD bounded contexts, service boundaries, inter-service communication',
      },
      {
        w: 39,
        f: 'Spring Cloud',
        t: 'Eureka, Spring Cloud Gateway, config server, Feign clients',
      },
      {
        w: 40,
        f: 'Resilience Patterns',
        t: 'Resilience4j circuit breaker, retry, bulkhead — your FPO uses this!',
      },
      {
        w: 41,
        f: 'Kafka Deep Dive',
        t: 'Producer, consumer, groups, partitions — maps to FPO EventBridge',
      },
      {
        w: 42,
        f: 'CQRS + Event Sourcing',
        t: 'Separate read/write models, Axon Framework, event store',
      },
      {
        w: 43,
        f: 'Saga Pattern',
        t: 'Orchestration vs choreography — Step Functions = Saga!',
      },
      {
        w: 44,
        f: 'K8s Deployment',
        t: 'Deploy microservices to K8s, Ingress, ConfigMaps, Secrets',
      },
      {
        w: 45,
        f: 'Revision + ADR',
        t: 'Rebuild one microservice cold. Write 1 Architecture Decision Record.',
      },
    ],
  },

  {
    id: 'devops',
    block: 1,
    seq: 6,
    icon: '⚙',
    color: '#EA580C',
    dark: '#C2410C',
    bg: '#FFF7ED',
    border: '#FED7AA',
    name: 'DevOps',
    bLabel: 'Block 1 · Day 365 · 1 Year 🎉',
    days: 63,
    ds: 303,
    de: 365,
    period: 'Apr 12 – Jun 13, 2027',
    weeks: '9w',
    ms: '⚙ DevOps Complete · 1 Year of Full Stack Done 🎉 · Day 365',
    about:
      '49 days · 7 weeks. DevOps courses W46–W51 + 🐍 Python automation scripting in W52. Day 365 = Sunday Jun 13, 2027 — exactly 1 year of Full Stack.',
    courses: [
      'Nana Janashia TechWorld — DevOps Bootcamp (35h) · W46–W49',
      'Mumshad Mannambeth KodeKloud — The Complete DevOps Bootcamp (20h) · W49–W50',
      'Anil Dollor — Mastering DevOps Hindi (8h) · W50',
      'Mumshad Mannambeth — Terraform for Absolute Beginners with Labs (9h) · W51',
      '🐍 Al Sweigart — Automate the Boring Stuff with Python (9h) · W52',
    ],
    wplan: [
      {
        w: 46,
        f: 'Linux + Docker',
        t: 'Linux essentials, Docker images, containers, volumes, docker-compose',
      },
      {
        w: 47,
        f: 'Kubernetes',
        t: 'Pods, Deployments, Services, Ingress, ConfigMaps, AWS EKS',
      },
      {
        w: 48,
        f: 'CI/CD Pipelines',
        t: 'GitHub Actions, OIDC keyless AWS auth, build/test/deploy pipelines',
      },
      {
        w: 49,
        f: 'Terraform IaC',
        t: 'HCL, resources, state, modules — provision FPO AWS with Terraform',
      },
      {
        w: 50,
        f: 'Monitoring + Observability',
        t: 'Prometheus, Grafana, Datadog (your FPO tool), alerts, dashboards',
      },
      {
        w: 51,
        f: 'DevOps Hindi Recap',
        t: 'Anil Dollor Hindi DevOps — advanced GitHub Actions + CI/CD',
      },
      {
        w: 52,
        f: '🐍 Python for DevOps',
        t: 'boto3 FPO Lambda lister, CloudWatch log parser, subprocess, S3 scripts',
      },
      {
        w: 53,
        f: 'Advanced K8s + Helm',
        t: 'Helm charts, Kubernetes operators, HPA autoscaling, resource limits, AWS EKS deep dive',
      },
      {
        w: 54,
        f: 'DevOps Capstone · Day 365',
        t: 'End-to-end pipeline: code → test → Docker → K8s → monitor. Day 365 = 1 Year of Full Stack ✅',
      },
    ],
  },

  // ══ BLOCK 2 — AGENTIC AI USING PYTHON · 35 days · 5 weeks ═════════════════
  {
    id: 'agentic',
    block: 2,
    seq: 7,
    icon: '🤖',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'Agentic AI using Python',
    bLabel: 'Block 2 · Agentic AI using Python',
    days: 35,
    ds: 366,
    de: 400,
    period: 'Jun 14 – Jul 18, 2027',
    weeks: '5w',
    ms: '🤖 Agentic AI Complete · Day 400',
    about:
      '35 days · 5 weeks · 3 courses. LangChain, LangGraph, Ed Donner 8 real projects. Python foundation from DevOps W52 lets you dive straight in. Your SCB Thailand LangChain/LangGraph work makes this revision + deepening. Build FPO AI assistant as capstone.',
    courses: [
      'Dr. Frank Kane — ChatGPT + Generative AI Masterclass 2026 (22h) · W53–W54',
      'Ed Donner — Complete Agentic AI Engineering Course 2026 (30h) · W54–W56',
      'Eden Marco — LangChain Develop LLM Powered Applications (22h) · W56–W57',
    ],
    wplan: [
      {
        w: 53,
        f: 'GenAI Foundations',
        t: 'LLMs, embeddings, RAG, prompt engineering (CoT, ReAct), AWS Bedrock — Frank Kane',
      },
      {
        w: 54,
        f: 'LangChain Core',
        t: 'Chains, agents, tools, memory, LCEL, vector databases (Pinecone, FAISS)',
      },
      {
        w: 55,
        f: 'LangGraph + Multi-Agent',
        t: 'State machines, conditional edges, multi-agent orchestration — Ed Donner',
      },
      {
        w: 56,
        f: 'Ed Donner: 8 Projects',
        t: 'Career Digital Twin, Deep Research, SDR Agent, Browser Agent, MCP integration',
      },
      {
        w: 57,
        f: 'FPO AI Assistant',
        t: 'Build FPO AI: natural language query over flight data. Deploy to Lambda. Portfolio demo.',
      },
    ],
  },

  // ══ BLOCK 3 — SYSTEM DESIGN · 70 days · 10 weeks ══════════════════════════
  {
    id: 'sd',
    block: 3,
    seq: 8,
    icon: '🏗',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'System Design',
    bLabel: 'Block 3 · System Design',
    days: 70,
    ds: 401,
    de: 470,
    period: 'Jul 19 – Sep 26, 2027',
    weeks: '10w',
    ms: '🏗 System Design Complete · Day 470',
    about:
      '70 days · 10 weeks · 5 courses. Design 1 system per day spoken aloud from W59 onwards. Your FPO multi-tenant SaaS, Kafka, Lambda microservices = real production experience most candidates never have.',
    courses: [
      'Frank Kane ex-Amazon — Mastering the System Design Interview (5h) · W58',
      'Michael Pogrebinsky 93K — Software Architecture Modern Large Scale Systems (20h) · W58–W60',
      'Mikhail Smarshchok — System Design Interview Guide 20+ designs (18h) · W60–W63',
      'Bogdan Stashchuk — Pragmatic System Design real trade-offs (12h) · W63–W65',
      'FAANG Insiders — System Design Masterclass 2026 (8h) · W66–W67',
    ],
    wplan: [
      {
        w: 58,
        f: 'SD Framework + Frank Kane',
        t: 'Frank Kane 5-step template. CQRS, Event Sourcing, Saga, API Gateway — all maps to FPO',
      },
      {
        w: 59,
        f: 'Distributed Architecture',
        t: 'Michael Pogrebinsky: CAP theorem, replication, consistency, microservices patterns',
      },
      {
        w: 60,
        f: 'Classic Designs 1',
        t: 'URL Shortener, WhatsApp, Twitter — Requirements→Estimation→HLD→DB→API spoken 45 min',
      },
      {
        w: 61,
        f: 'Classic Designs 2',
        t: 'Netflix, Uber, Notification System — Mikhail Smarshchok 20+ designs course',
      },
      {
        w: 62,
        f: 'Classic Designs 3',
        t: 'Rate Limiter, Search Autocomplete, Distributed Cache, Leaderboard, Web Crawler',
      },
      {
        w: 63,
        f: 'Classic Designs 4',
        t: 'Payment System, News Feed, Ride Sharing, Video Upload — continue Mikhail',
      },
      {
        w: 64,
        f: 'Trade-offs + Production',
        t: 'Bogdan Stashchuk: Netflix, Uber, Airbnb — WHY production decisions were made',
      },
      {
        w: 65,
        f: 'Advanced Designs',
        t: 'FPO Flight Optimiser (your system!), Kafka Streaming Pipeline, Databricks ETL',
      },
      {
        w: 66,
        f: 'FAANG Template Mocks',
        t: 'FAANG Insiders 5-step template — YouTube, Newsfeed, WhatsApp cold designs',
      },
      {
        w: 67,
        f: 'Final Mock Designs',
        t: '10 cold designs spoken aloud — no notes — 45 min each — weakest systems focus',
      },
    ],
  },

  // ══ BLOCK 4 — DATA STRUCTURES USING JAVA · 70 days · 10 weeks ═════════════
  {
    id: 'dsa',
    block: 4,
    seq: 9,
    icon: '🧩',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Data Structures using Java',
    bLabel: 'Block 4 · DSA · FINAL',
    days: 70,
    ds: 471,
    de: 540,
    period: 'Sep 27 – Dec 5, 2027',
    weeks: '10w',
    ms: '🧩 Java DSA Complete · Day 540 · Dec 5, 2027 🎯',
    about:
      '70 days · 10 weeks · 5 courses. 🐍 W68 = Scott Barrett Java+Python DSA side by side. W69–W77 deep Java DSA. Code every problem in Java. Last day Sunday Dec 5, 2027 — 540-day journey complete.',
    courses: [
      '🐍 Scott Barrett 4.8★ — Java DS & Algorithms + LeetCode (10h) · W68 — Java + Python simultaneously',
      'Andrei Neagoie ZTM — Master the Coding Interview DS + Algorithms (20h) · W68–W71',
      'Tim Buchalka 112K — DS & Algorithms Deep Dive Using Java (16h) · W71–W73',
      'Elshad Karimov — Java DS & Algorithms Masterclass (45h) · W73–W77',
      'Andrei Neagoie ZTM — Master Coding Interview Big Tech FAANG (8h) · W77',
    ],
    wplan: [
      {
        w: 68,
        f: '🐍 Java + Python DSA',
        t: 'Scott Barrett: Big O, Arrays, Hash Maps, Linked Lists, Trees — Java AND Python simultaneously',
      },
      {
        w: 69,
        f: 'Trees + BST in Java',
        t: 'DFS preorder/inorder/postorder, BFS level-order, BST insert/delete/validate',
      },
      {
        w: 70,
        f: 'Heaps + Priority Queue',
        t: 'Java PriorityQueue, Top-K patterns, median data stream, merge K lists',
      },
      {
        w: 71,
        f: 'Graphs in Java',
        t: 'BFS/DFS on graphs, topological sort, Dijkstra, Union-Find — Tim Buchalka',
      },
      {
        w: 72,
        f: 'Sorting + Binary Search',
        t: 'All sorting algorithms with complexity proofs, binary search variants in Java',
      },
      {
        w: 73,
        f: 'DP Foundations',
        t: '1D DP: coin change, house robber, jump game — top-down + bottom-up in Java',
      },
      {
        w: 74,
        f: 'Advanced DP',
        t: '2D DP, LCS, edit distance, knapsack — Elshad Karimov Masterclass',
      },
      {
        w: 75,
        f: 'Backtracking + Tries',
        t: 'N-Queens, Sudoku, word search — Trie implementation and problems in Java',
      },
      {
        w: 76,
        f: 'FAANG Hard Patterns',
        t: 'Hard graph, advanced DP from FAANG course — timed, spoken aloud',
      },
      {
        w: 77,
        f: 'Final Day · Dec 5 🎯',
        t: 'Rebuild 3 structures cold. Dec 5, 2027 = Day 540 = 540-Day Journey COMPLETE 🎯',
      },
    ],
  },
];

const MILESTONES = [
  {
    day: 92,
    date: 'Sep 13, 2026',
    icon: '⚛',
    label: 'React Complete',
    color: '#0EA5E9',
  },
  {
    day: 120,
    date: 'Oct 11, 2026',
    icon: '▲',
    label: 'Next.js Complete',
    color: '#374151',
  },
  {
    day: 155,
    date: 'Nov 15, 2026',
    icon: '📱',
    label: 'React Native Complete',
    color: '#7C3AED',
  },
  {
    day: 246,
    date: 'Feb 14, 2027',
    icon: '🌱',
    label: 'Spring Boot Complete',
    color: '#16A34A',
  },
  {
    day: 302,
    date: 'Apr 11, 2027',
    icon: '🏛',
    label: 'Microservices Complete',
    color: '#E11D48',
  },
  {
    day: 365,
    date: 'Jun 13, 2027',
    icon: '⚙',
    label: 'DevOps Complete · 1 Year Done 🎉',
    color: '#EA580C',
  },
  {
    day: 400,
    date: 'Jul 18, 2027',
    icon: '🤖',
    label: 'Agentic AI Complete',
    color: '#7C3AED',
  },
  {
    day: 470,
    date: 'Sep 26, 2027',
    icon: '🏗',
    label: 'System Design Complete',
    color: '#16A34A',
  },
  {
    day: 540,
    date: 'Dec 5, 2027',
    icon: '🧩',
    label: 'Java DSA Complete · Day 540 🎯',
    color: '#6366F1',
  },
];

function daysIn() {
  return Math.max(0, Math.floor((new Date() - START) / 86400000));
}
function curId() {
  const d = daysIn() + 1;
  for (const p of PHASES) if (d <= p.de) return p.id;
  return null;
}
function pct() {
  return Math.min(100, Math.round((daysIn() / 540) * 100));
}

// ── responsive helpers ────────────────────────────────────────────────────────
const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 640;

function Card({ p, open, onToggle, isCurrent, isDone }) {
  const [wkOpen, setWkOpen] = useState(false);
  const hasPy = p.id === 'dsa' || p.id === 'devops';
  const bc = {
    1: { bg: '#EEF2FF', color: '#4338CA', border: '#C7D2FE' },
    2: { bg: '#F5F3FF', color: '#6D28D9', border: '#DDD6FE' },
    3: { bg: '#F0FDF4', color: '#15803D', border: '#BBF7D0' },
    4: { bg: '#EEF2FF', color: '#4338CA', border: '#C7D2FE' },
  }[p.block];

  return (
    <div
      id={'p-' + p.id}
      style={{
        borderRadius: 12,
        overflow: 'hidden',
        transition: 'all 0.22s',
        border: `2px solid ${open ? p.color + '80' : isCurrent ? '#F59E0B80' : isDone ? p.color + '28' : p.border}`,
        background: open ? p.bg : isDone ? '#FAFBFF' : '#fff',
        opacity: isDone ? 0.75 : 1,
        boxShadow: open
          ? `0 6px 22px ${p.color}14`
          : isCurrent
            ? '0 0 0 3px #FEF3C7,0 2px 8px rgba(0,0,0,0.06)'
            : '0 1px 4px rgba(0,0,0,0.05)',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '10px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          textAlign: 'left',
          fontFamily: 'inherit',
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            flexShrink: 0,
            transition: 'all 0.22s',
            background: open
              ? `linear-gradient(135deg,${p.color},${p.dark})`
              : isDone
                ? '#F1F5F9'
                : p.bg,
            border: `2px solid ${p.color}35`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: open ? `0 4px 12px ${p.color}45` : 'none',
          }}
        >
          <span style={{ fontSize: 16, lineHeight: 1 }}>
            {isDone ? '✅' : p.icon}
          </span>
          <span
            style={{
              fontSize: 7,
              fontWeight: 700,
              color: open ? 'rgba(255,255,255,0.65)' : p.color,
              marginTop: 1,
            }}
          >
            #{p.seq}
          </span>
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: 'flex',
              gap: 4,
              alignItems: 'center',
              flexWrap: 'wrap',
              marginBottom: 2,
            }}
          >
            {isCurrent && (
              <span
                style={{
                  fontSize: 8,
                  fontWeight: 800,
                  padding: '1px 6px',
                  borderRadius: 12,
                  background: '#FEF3C7',
                  color: '#D97706',
                  border: '1px solid #FDE68A',
                  whiteSpace: 'nowrap',
                }}
              >
                📍 NOW
              </span>
            )}
            {isDone && (
              <span
                style={{
                  fontSize: 8,
                  fontWeight: 800,
                  padding: '1px 6px',
                  borderRadius: 12,
                  background: '#DCFCE7',
                  color: '#15803D',
                  border: '1px solid #86EFAC',
                }}
              >
                ✅ DONE
              </span>
            )}
            {hasPy && (
              <span
                style={{
                  fontSize: 8,
                  fontWeight: 800,
                  padding: '1px 6px',
                  borderRadius: 12,
                  background: '#DCFCE7',
                  color: '#047857',
                  border: '1px solid #6EE7B7',
                  whiteSpace: 'nowrap',
                }}
              >
                🐍 Python
              </span>
            )}
            <span
              style={{
                fontSize: 8,
                fontWeight: 700,
                padding: '1px 6px',
                borderRadius: 12,
                whiteSpace: 'nowrap',
                background: bc.bg,
                color: bc.color,
                border: `1px solid ${bc.border}`,
              }}
            >
              {p.bLabel}
            </span>
            <span
              style={{
                fontSize: 'clamp(12px,3.5vw,14px)',
                fontWeight: 800,
                color: '#0F172A',
              }}
            >
              {p.name}
            </span>
          </div>
          <div style={{ fontSize: 9, color: '#64748B', marginBottom: 1 }}>
            {p.period} · D{p.ds}–D{p.de} · {p.days}d · {p.weeks}
          </div>
          {p.ms && (
            <div style={{ fontSize: 9, fontWeight: 800, color: p.color }}>
              🏆 {p.ms}
            </div>
          )}
        </div>

        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 900,
              color: p.color,
              background: p.color + '12',
              padding: '2px 8px',
              borderRadius: 12,
              border: `1px solid ${p.color}22`,
              marginBottom: 2,
            }}
          >
            {p.weeks}
          </div>
          <div style={{ fontSize: 8, color: '#94A3B8' }}>{p.days}d</div>
        </div>
        <span
          style={{
            color: p.color,
            fontSize: 16,
            flexShrink: 0,
            opacity: open ? 1 : 0.3,
            transform: open ? 'rotate(90deg)' : 'none',
            transition: 'transform 0.2s',
          }}
        >
          ›
        </span>
      </button>

      {open && (
        <div
          style={{
            borderTop: `2px solid ${p.color}18`,
            padding: '10px 12px 14px',
          }}
        >
          <div
            style={{
              background: p.color + '0A',
              border: `1px solid ${p.color}22`,
              borderRadius: 9,
              padding: '9px 11px',
              marginBottom: 10,
              fontSize: 11,
              color: '#334155',
              lineHeight: 1.75,
            }}
          >
            {p.about}
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              marginBottom: 10,
            }}
          >
            <div
              style={{
                background: '#F8FAFC',
                borderRadius: 8,
                padding: '9px 11px',
                border: '1px solid #E2E8F0',
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 800,
                  color: '#374151',
                  letterSpacing: '0.08em',
                  marginBottom: 6,
                }}
              >
                📚 COURSES
              </div>
              {p.courses.map((crs, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', gap: 6, padding: '2px 0' }}
                >
                  <span
                    style={{
                      fontSize: 9,
                      flexShrink: 0,
                      marginTop: 2,
                      fontWeight: 700,
                      color: crs.startsWith('🐍') ? '#047857' : p.color,
                    }}
                  >
                    {crs.startsWith('🐍') ? '🐍' : i + 1 + '.'}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      lineHeight: 1.6,
                      color: crs.startsWith('🐍') ? '#047857' : '#374151',
                      fontWeight: crs.startsWith('🐍') ? 600 : 400,
                    }}
                  >
                    {crs}
                  </span>
                </div>
              ))}
            </div>
            {p.ms && (
              <div
                style={{
                  background: `${p.color}12`,
                  border: `1px solid ${p.color}28`,
                  borderRadius: 8,
                  padding: '8px 10px',
                  fontSize: 10,
                  fontWeight: 700,
                  color: p.color,
                }}
              >
                🏆 {p.ms}
              </div>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setWkOpen(!wkOpen);
            }}
            style={{
              width: '100%',
              background: `${p.color}08`,
              border: `1px solid ${p.color}25`,
              borderRadius: 8,
              padding: '8px 11px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: wkOpen ? 8 : 0,
            }}
          >
            <span style={{ fontSize: 10, fontWeight: 700, color: p.color }}>
              📅 Week-by-Week Plan — {p.wplan.length} weeks
            </span>
            <span style={{ fontSize: 12, color: p.color }}>
              {wkOpen ? '▲' : '▼'}
            </span>
          </button>

          {wkOpen && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {p.wplan.map((wk) => {
                const isPy = wk.f.includes('🐍');
                return (
                  <div
                    key={wk.w}
                    style={{
                      display: 'flex',
                      gap: 8,
                      alignItems: 'flex-start',
                      background: isPy ? '#F0FDF4' : '#fff',
                      borderRadius: 8,
                      padding: '8px 10px',
                      border: `1.5px solid ${isPy ? '#86EFAC' : p.color + '18'}`,
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        flexShrink: 0,
                        background: isPy ? '#DCFCE7' : p.color + '18',
                        color: isPy ? '#15803D' : p.color,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span
                        style={{
                          fontSize: isPy ? 12 : 7,
                          fontWeight: 700,
                          lineHeight: 1,
                        }}
                      >
                        {isPy ? '🐍' : 'W'}
                      </span>
                      {!isPy && (
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 900,
                            lineHeight: 1,
                          }}
                        >
                          {wk.w}
                        </span>
                      )}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          display: 'flex',
                          gap: 4,
                          alignItems: 'center',
                          marginBottom: 2,
                          flexWrap: 'wrap',
                        }}
                      >
                        <span
                          style={{
                            fontSize: 10,
                            fontWeight: 700,
                            color: isPy ? '#047857' : '#0F172A',
                          }}
                        >
                          {wk.f}
                        </span>
                        {!isPy && (
                          <span style={{ fontSize: 8, color: '#94A3B8' }}>
                            W{wk.w}
                          </span>
                        )}
                      </div>
                      <div
                        style={{
                          fontSize: 9,
                          color: isPy ? '#166534' : '#64748B',
                          lineHeight: 1.6,
                        }}
                      >
                        {wk.t}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [openId, setOpenId] = useState(null);
  const [showMs, setShowMs] = useState(true);

  const d = daysIn();
  const cid = curId();
  const prog = pct();
  const msDone = MILESTONES.filter((m) => m.day <= d + 1).length;
  const nextMs = MILESTONES.find((m) => m.day > d + 1);

  const toggle = (id) => setOpenId(openId === id ? null : id);
  const jump = (id) => {
    setOpenId(id);
    setTimeout(
      () =>
        document
          .getElementById('p-' + id)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
      80,
    );
  };

  const b1 = PHASES.filter((p) => p.block === 1);
  const b2 = PHASES.filter((p) => p.block === 2);
  const b3 = PHASES.filter((p) => p.block === 3);
  const b4 = PHASES.filter((p) => p.block === 4);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#F0F4FF',
        fontFamily: "'Segoe UI',system-ui,sans-serif",
        color: '#0F172A',
        overflowX: 'hidden',
      }}
    >
      {/* ── HERO ── */}
      <div
        style={{
          background:
            'linear-gradient(135deg,#1a237e 0%,#283593 40%,#1565C0 100%)',
          padding: '16px 12px 14px',
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
            maxWidth: 680,
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Title row */}
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
                width: 44,
                height: 44,
                borderRadius: 12,
                flexShrink: 0,
                background: 'linear-gradient(135deg,#F59E0B,#D97706)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                boxShadow: '0 4px 16px rgba(245,158,11,0.5)',
              }}
            >
              🏆
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.5)',
                  marginBottom: 1,
                }}
              >
                Sumit Rawal · NextStep Bangkok · FPO Cloud
              </div>
              <div
                style={{
                  fontSize: 'clamp(20px,6vw,30px)',
                  fontWeight: 900,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                540 Days of Code
              </div>
              <div
                style={{
                  fontSize: 9,
                  color: 'rgba(255,255,255,0.6)',
                  marginTop: 2,
                }}
              >
                Jun 14, 2026 → Dec 5, 2027 · 540 days · 1,620h · 5:30–8:30 AM
              </div>
            </div>
          </div>

          {/* 4-block summary — single column on mobile */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
              gap: 6,
              marginBottom: 12,
            }}
          >
            {[
              {
                icon: '📚',
                n: 'Block 1',
                t: '1 Year of Full Stack',
                s: 'D1–D365 · Jun 14 2026 – Jun 13 2027',
                desc: 'React · Next.js · RN · Spring Boot · Microservices · DevOps',
                col: '#6366F1',
              },
              {
                icon: '🤖',
                n: 'Block 2',
                t: 'Agentic AI using Python',
                s: 'D366–D400 · 5 weeks',
                desc: 'LangChain · LangGraph · Ed Donner 8 Projects',
                col: '#7C3AED',
              },
              {
                icon: '🏗',
                n: 'Block 3',
                t: 'System Design',
                s: 'D401–D470 · 10 weeks',
                desc: 'Frank Kane → Pogrebinsky → Mikhail → Bogdan → FAANG',
                col: '#16A34A',
              },
              {
                icon: '🧩',
                n: 'Block 4',
                t: 'DSA using Java',
                s: 'D471–D540 · 10 weeks · Dec 5 🎯',
                desc: '5 Java DSA courses · Scott Barrett Java+Python',
                col: '#6366F1',
              },
            ].map(({ icon, n, t, s, desc, col }) => (
              <div
                key={n}
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  borderRadius: 9,
                  padding: '9px 11px',
                  border: `1px solid ${col}70`,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    marginBottom: 4,
                  }}
                >
                  <span style={{ fontSize: 14 }}>{icon}</span>
                  <span style={{ fontSize: 9, fontWeight: 800, color: col }}>
                    {n}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 'clamp(11px,3vw,13px)',
                    fontWeight: 800,
                    color: '#fff',
                    marginBottom: 2,
                  }}
                >
                  {t}
                </div>
                <div
                  style={{
                    fontSize: 8,
                    color: 'rgba(255,255,255,0.6)',
                    marginBottom: 3,
                  }}
                >
                  {s}
                </div>
                <div
                  style={{
                    fontSize: 8,
                    color: 'rgba(255,255,255,0.45)',
                    lineHeight: 1.5,
                  }}
                >
                  {desc}
                </div>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div style={{ marginBottom: 10 }}>
            <div
              style={{
                height: 12,
                borderRadius: 6,
                overflow: 'hidden',
                display: 'flex',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)',
                gap: 1,
              }}
            >
              {PHASES.map((p) => (
                <div
                  key={p.id}
                  style={{
                    flex: p.days,
                    cursor: 'pointer',
                    transition: 'background 0.3s',
                    borderRight: '1px solid rgba(0,0,0,0.1)',
                    background:
                      d + 1 > p.de
                        ? p.color + '70'
                        : d + 1 >= p.ds
                          ? p.color
                          : p.color + '38',
                  }}
                  onClick={() => jump(p.id)}
                  title={p.name + ' D' + p.ds + '–D' + p.de}
                />
              ))}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 4,
                fontSize: 8,
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              <span>Jun 14, 2026</span>
              <span
                style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 700 }}
              >
                {prog}% · Day {Math.min(d + 1, 540)} of 540
              </span>
              <span>Dec 5, 2027</span>
            </div>
          </div>

          {/* Milestones toggle */}
          <button
            onClick={() => setShowMs(!showMs)}
            style={{
              width: '100%',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 8,
              padding: '7px 11px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: showMs ? 8 : 0,
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              🏆 9 Milestones — {msDone} of 9 unlocked
            </span>
            <span
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: 13,
                transform: showMs ? 'rotate(90deg)' : 'none',
                transition: 'transform 0.2s',
              }}
            >
              ›
            </span>
          </button>

          {/* Milestones — 3 cols on desktop, 1 col on mobile via auto-fit */}
          {showMs && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3,1fr)',
                gap: 4,
              }}
            >
              {MILESTONES.map((m, i) => {
                const done = m.day <= d + 1,
                  isNext = nextMs && nextMs.day === m.day;
                return (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      borderRadius: 7,
                      padding: '6px 8px',
                      background: isNext
                        ? 'rgba(245,158,11,0.25)'
                        : done
                          ? 'rgba(255,255,255,0.18)'
                          : 'rgba(255,255,255,0.09)',
                      border: `1px solid ${isNext ? 'rgba(245,158,11,0.5)' : done ? m.color + '45' : 'rgba(255,255,255,0.1)'}`,
                    }}
                  >
                    <span style={{ fontSize: 13, flexShrink: 0 }}>
                      {done ? '✅' : isNext ? '🎯' : m.icon}
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: 8,
                          fontWeight: 700,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          color: done
                            ? '#fff'
                            : isNext
                              ? '#FDE68A'
                              : 'rgba(255,255,255,0.65)',
                        }}
                      >
                        {m.label}
                      </div>
                      <div
                        style={{ fontSize: 7, color: 'rgba(255,255,255,0.4)' }}
                      >
                        D{m.day} · {m.date}
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: 7,
                        fontWeight: 800,
                        padding: '1px 5px',
                        borderRadius: 6,
                        flexShrink: 0,
                        background: done
                          ? m.color + '28'
                          : isNext
                            ? 'rgba(245,158,11,0.25)'
                            : 'rgba(255,255,255,0.08)',
                        color: done
                          ? m.color
                          : isNext
                            ? '#F59E0B'
                            : 'rgba(255,255,255,0.3)',
                      }}
                    >
                      {done ? '✓' : isNext ? '→' : 'D' + m.day}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* ── BODY ── */}
      <div
        style={{ maxWidth: 680, margin: '0 auto', padding: '12px 10px 40px' }}
      >
        {[
          {
            col: '#6366F1',
            icon: '📚',
            title: 'BLOCK 1 — 1 YEAR OF FULL STACK',
            sub: 'Days 1–365 · Jun 14 2026 → Jun 13 2027 · React, Next.js, RN, Spring Boot, Microservices, DevOps',
            phases: b1,
          },
          {
            col: '#7C3AED',
            icon: '🤖',
            title: 'BLOCK 2 — AGENTIC AI USING PYTHON',
            sub: 'Days 366–400 · Jun 14 → Jul 18 2027 · 5 weeks',
            phases: b2,
          },
          {
            col: '#16A34A',
            icon: '🏗',
            title: 'BLOCK 3 — SYSTEM DESIGN',
            sub: 'Days 401–470 · Jul 19 → Sep 26 2027 · 10 weeks',
            phases: b3,
          },
          {
            col: '#6366F1',
            icon: '🧩',
            title: 'BLOCK 4 — DATA STRUCTURES USING JAVA',
            sub: 'Days 471–540 · Sep 27 → Dec 5 2027 · 10 weeks · Last day = Day 540 🎯',
            phases: b4,
          },
        ].map(({ col, icon, title, sub, phases }) => (
          <div key={title}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 8,
                marginTop: 16,
              }}
            >
              <div
                style={{
                  height: 2,
                  flex: 1,
                  background: `linear-gradient(90deg,${col},${col}10)`,
                }}
              />
              <div
                style={{ textAlign: 'center', flexShrink: 0, padding: '0 4px' }}
              >
                <div
                  style={{
                    fontSize: 'clamp(9px,2.5vw,11px)',
                    fontWeight: 800,
                    color: col,
                    letterSpacing: '0.08em',
                  }}
                >
                  {icon} {title}
                </div>
                <div style={{ fontSize: 8, color: '#94A3B8', marginTop: 1 }}>
                  {sub}
                </div>
              </div>
              <div
                style={{
                  height: 2,
                  flex: 1,
                  background: `linear-gradient(90deg,${col}10,${col})`,
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {phases.map((p) => (
                <Card
                  key={p.id}
                  p={p}
                  open={openId === p.id}
                  onToggle={() => toggle(p.id)}
                  isCurrent={cid === p.id}
                  isDone={d + 1 > p.de}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Footer */}
        <div
          style={{
            marginTop: 20,
            background: 'linear-gradient(135deg,#1E1B4B,#4338CA)',
            borderRadius: 12,
            padding: '14px 16px',
            boxShadow: '0 6px 24px rgba(99,102,241,0.3)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 'clamp(12px,4vw,15px)',
              fontWeight: 900,
              color: '#FDE68A',
              marginBottom: 3,
            }}
          >
            🏆 540 Days of Code · Jun 14, 2026 → Dec 5, 2027
          </div>
          <div
            style={{
              fontSize: 9,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 8,
            }}
          >
            1,620 hours · 5:30 AM–8:30 AM · 4 Blocks · 9 Milestones · every
            phase ends Sunday
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 3,
              flexWrap: 'wrap',
            }}
          >
            {MILESTONES.map((m, i, a) => (
              <span
                key={m.label}
                style={{ display: 'flex', alignItems: 'center', gap: 2 }}
              >
                <span
                  style={{
                    fontSize: 8,
                    color: m.color,
                    fontWeight: 700,
                    opacity: m.day <= d + 1 ? 1 : 0.38,
                  }}
                >
                  {m.icon} {m.label.split(' ')[0]}
                </span>
                {i < a.length - 1 && (
                  <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 8 }}>
                    ›
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
