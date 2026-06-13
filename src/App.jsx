import { useState } from 'react';

const START = new Date('2026-06-14');
const TOTAL = 540;

const PHASES = [
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
    label: 'Block 1 · 1 Year Full Stack',
    days: 92,
    ds: 1,
    de: 92,
    period: 'Jun 14 – Sep 13, 2026',
    weeks: '13w',
    hours: '~276h',
    ch: '116.5h',
    ph: '159.5h',
    ms: '⚛ React Complete · Day 92',
    about:
      '92 days · 3 courses. John Smilga first (50.5h, 25+ real projects), Max Schwarzmüller second angle (TypeScript, testing, Redux Toolkit), Hindi interview Q&A final week.',
    courses: [
      'John Smilga — React Tutorial & Projects Course 2025 (50.5h) ★ START HERE',
      'Max Schwarzmüller — React The Complete Guide 2025 (55h)',
      'Hindi Instructor — React Interview Masterclass 200 Q (11h)',
    ],
    weeks_plan: [
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
        t: 'useEffect, fetch API, async/await — Food Recipe, Beachwalk Resort',
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
        t: 'TypeScript in React, Tailwind CSS — Smilga final projects. Course done.',
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
    id: 'rn',
    block: 1,
    seq: 2,
    icon: '📱',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'React Native',
    label: 'Block 1 · 1 Year Full Stack',
    days: 28,
    ds: 93,
    de: 120,
    period: 'Sep 14 – Oct 11, 2026',
    weeks: '4w',
    hours: '~84h',
    ch: '52h',
    ph: '32h',
    ms: '📱 React Native Complete · Day 120',
    about:
      '28 days · 4 weeks · 2 courses. Run every exercise on your real iPad via Expo Go. Build FPO-style flight list app with React Navigation.',
    courses: [
      'Stephen Grider — The Complete React Native + Hooks Course 4.8★ (38h)',
      'Max Schwarzmüller — React Native The Practical Guide 2025 (14h)',
    ],
    weeks_plan: [
      {
        w: 14,
        f: 'Core Components',
        t: 'View, Text, Image, StyleSheet, Flexbox, FlatList — exercises on iPad',
      },
      {
        w: 15,
        f: 'Navigation',
        t: 'React Navigation v6 — Stack, Tab, Drawer — FPO flight list app',
      },
      {
        w: 16,
        f: 'Device APIs',
        t: 'Camera, Location, AsyncStorage, Notifications — Expo SDK modules',
      },
      {
        w: 17,
        f: 'Polish + Deploy',
        t: 'Animations, iOS vs Android differences, EAS Build, TestFlight',
      },
    ],
  },

  {
    id: 'nextjs',
    block: 1,
    seq: 3,
    icon: '▲',
    color: '#374151',
    dark: '#111827',
    bg: '#F9FAFB',
    border: '#D1D5DB',
    name: 'Next.js',
    label: 'Block 1 · 1 Year Full Stack',
    days: 35,
    ds: 121,
    de: 155,
    period: 'Oct 12 – Nov 15, 2026',
    weeks: '5w',
    hours: '~105h',
    ch: '65h',
    ph: '40h',
    ms: '▲ Next.js Complete · Day 155',
    about:
      '35 days · 5 weeks · 3 courses. App Router, Server Components, Server Actions, NextAuth v5, Prisma. Deploy to Vercel after every chapter.',
    courses: [
      'Max Schwarzmüller — Next.js & React The Complete Guide (25h)',
      'John Smilga — React Tutorial & Projects Next.js sections (20h)',
      'Anil Dollor — Next.js Full Stack Development Hindi (20h)',
    ],
    weeks_plan: [
      {
        w: 18,
        f: 'App Router Basics',
        t: 'File-based routing, layouts, loading states, error boundaries',
      },
      {
        w: 19,
        f: 'Server Components',
        t: 'RSC vs Client Components, data fetching, streaming, Suspense',
      },
      {
        w: 20,
        f: 'Server Actions + DB',
        t: 'Form actions, Prisma ORM, PostgreSQL, revalidatePath',
      },
      {
        w: 21,
        f: 'Auth + Security',
        t: 'NextAuth v5, OAuth providers, middleware, protected routes',
      },
      {
        w: 22,
        f: 'Deploy + Capstone',
        t: 'Vercel deploy, env vars — FPO web portal as capstone project',
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
    label: 'Block 1 · MAX ⭐',
    days: 105,
    ds: 156,
    de: 260,
    period: 'Nov 16, 2026 – Feb 28, 2027',
    weeks: '15w',
    hours: '~315h',
    ch: '185h',
    ph: '130h',
    ms: '🌱 Spring Boot Complete · Day 260',
    about:
      '105 days · 15 weeks · MAX TIME · 5 courses. Java 8 fast-track, JPA/Hibernate deep, Spring Security with Cognito OAuth2. Every concept maps to FPO: Bean=Lambda, JPA=DynamoDB.',
    courses: [
      'Navin Reddy Telusko — Java 8 New Features (20h)',
      'John Thompson — Hibernate & Spring Data JPA Beginner to Guru (55h)',
      'Ranga Karanam — Spring Boot with IntelliJ Real-World Project (34h)',
      'John Thompson — Spring Framework 6 Beginner to Guru (40h)',
      'Ranga Karanam — Master Spring Boot 3 & Spring Framework 6 (36h)',
    ],
    weeks_plan: [
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
        t: 'Spring Boot API + React frontend — connect apps together',
      },
      {
        w: 35,
        f: 'Spring Boot 4 Preview',
        t: 'Spring Boot 4, GraalVM native image, virtual threads',
      },
      {
        w: 36,
        f: 'Capstone Project',
        t: 'Build REST API + JWT + JPA from scratch — production quality',
      },
      {
        w: 37,
        f: 'Revision + 200 Q&A',
        t: 'Rebuild REST API + JWT auth cold. 200 Spring Q&A drill.',
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
    label: 'Block 1 · MAX ⭐',
    days: 56,
    ds: 261,
    de: 316,
    period: 'Mar 1 – Apr 25, 2027',
    weeks: '8w',
    hours: '~168h',
    ch: '90h',
    ph: '78h',
    ms: '🏛 Microservices Complete · Day 316',
    about:
      '56 days · 8 weeks · MAX TIME · 4 courses. Kafka, CQRS, Event Sourcing, Saga, K8s, Circuit Breaker. Every pattern maps to FPO Cloud: EventBridge→Kafka, Step Functions→Saga.',
    courses: [
      'Ranga Karanam — Java Spring Boot Microservices with K8s & Docker (35h)',
      'Sergey Kargopolov — Building Microservices with Spring Cloud (30h)',
      'John Thompson — Spring Boot Microservices Beginner to Guru (15h)',
      'Sean Campbell — Master Spring Boot Microservices CQRS & Event Sourcing (10h)',
    ],
    weeks_plan: [
      {
        w: 38,
        f: 'Service Decomposition',
        t: 'DDD bounded contexts, service boundaries, REST vs events',
      },
      {
        w: 39,
        f: 'Spring Cloud',
        t: 'Eureka, Spring Cloud Gateway, config server, Feign',
      },
      {
        w: 40,
        f: 'Resilience Patterns',
        t: 'Resilience4j circuit breaker, retry, bulkhead — FPO uses this!',
      },
      {
        w: 41,
        f: 'Kafka Deep Dive',
        t: 'Producer, consumer, groups, partitions — relates to FPO EventBridge',
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
    label: 'Block 1 · Day 365 🏁',
    days: 49,
    ds: 317,
    de: 365,
    period: 'Apr 26 – Jun 13, 2027',
    weeks: '7w',
    hours: '~147h',
    ch: '79h',
    ph: '68h',
    ms: '⚙ DevOps Complete · Day 365 · 1 Year 🎉',
    about:
      '49 days · 7 weeks. DevOps courses (W46–W51) + Python automation scripting in W52. Day 365 = Sunday Jun 13, 2027 — 1 full year of Full Stack complete.',
    courses: [
      'Nana Janashia TechWorld — DevOps Bootcamp (35h) · W46–W49',
      'Mumshad Mannambeth KodeKloud — The Complete DevOps Bootcamp (20h) · W49–W50',
      'Anil Dollor — Mastering DevOps Hindi (8h) · W50',
      'Mumshad Mannambeth — Terraform Beginners with Labs (9h) · W51',
      '🐍 Al Sweigart — Automate the Boring Stuff with Python (9h) · W52',
    ],
    weeks_plan: [
      {
        w: 46,
        f: 'Linux + Docker',
        t: 'Linux essentials, Docker images, containers, docker-compose — KodeKloud labs',
      },
      {
        w: 47,
        f: 'Kubernetes',
        t: 'Pods, Deployments, Services, Ingress, ConfigMaps, AWS EKS',
      },
      {
        w: 48,
        f: 'CI/CD Pipelines',
        t: 'GitHub Actions, OIDC keyless AWS auth, build/test/deploy',
      },
      {
        w: 49,
        f: 'Terraform IaC',
        t: 'HCL, resources, state, modules — provision FPO AWS resources',
      },
      {
        w: 50,
        f: 'Monitoring + Observability',
        t: 'Prometheus, Grafana, Datadog (your FPO tool), alerts',
      },
      {
        w: 51,
        f: 'DevOps Hindi Recap',
        t: 'Anil Dollor Hindi DevOps — advanced GitHub Actions CI/CD deep',
      },
      {
        w: 52,
        f: '🐍 Python for DevOps',
        t: 'boto3 FPO Lambda lister, CloudWatch log parser, subprocess, S3 scripts — Day 365 ✅',
      },
    ],
  },

  {
    id: 'agentic',
    block: 1,
    seq: 7,
    icon: '🤖',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'Agentic AI using Python',
    label: 'Block 1 · Day 400',
    days: 35,
    ds: 366,
    de: 400,
    period: 'Jun 14 – Jul 18, 2027',
    weeks: '5w',
    hours: '~105h',
    ch: '74h',
    ph: '31h',
    ms: '🤖 Agentic AI Complete · Day 400',
    about:
      '35 days · 5 weeks · 3 courses. Python from W52 lets you dive straight in. LangChain, LangGraph, Ed Donner 8 real projects. Build FPO AI assistant as capstone. Your SCB LangChain/LangGraph work = deepening, not starting from scratch.',
    courses: [
      'Dr. Frank Kane — ChatGPT + Generative AI Masterclass 2026 (22h) · W53–W54',
      'Ed Donner — Complete Agentic AI Engineering Course 2026 (30h) · W54–W56',
      'Eden Marco — LangChain Develop LLM Powered Applications (22h) · W56–W57',
    ],
    weeks_plan: [
      {
        w: 53,
        f: 'GenAI Foundations',
        t: 'LLMs, embeddings, RAG, prompt engineering, AWS Bedrock — Frank Kane',
      },
      {
        w: 54,
        f: 'LangChain Core',
        t: 'Chains, agents, tools, memory, LCEL, vector DBs (Pinecone, FAISS)',
      },
      {
        w: 55,
        f: 'LangGraph + Multi-Agent',
        t: 'State machines, conditional edges, multi-agent orchestration',
      },
      {
        w: 56,
        f: 'Ed Donner: 8 Projects',
        t: 'Career Digital Twin, Deep Research agent, SDR Agent, Browser Agent',
      },
      {
        w: 57,
        f: 'FPO AI Assistant',
        t: 'Natural language query over flight data. Deploy to Lambda. Portfolio demo.',
      },
    ],
  },

  {
    id: 'dsa',
    block: 2,
    seq: 8,
    icon: '🧩',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Java DSA',
    label: 'Block 2 · Interview Prep',
    days: 70,
    ds: 401,
    de: 470,
    period: 'Jul 19 – Sep 26, 2027',
    weeks: '10w',
    hours: '~210h',
    ch: '99h',
    ph: '111h',
    ms: '🧩 Java DSA Complete · Day 470',
    about:
      '70 days · 10 weeks · 5 courses. W58 = Scott Barrett Java+Python simultaneously. W59–W67 deep Java DSA with 4 courses. Extensive practice — code every problem in Java. Strong DSA for Full Stack, Data Engineering, AI Engineering, Backend roles.',
    courses: [
      '🐍 Scott Barrett 4.8★ — Java DS & Algorithms + LeetCode (10h) · W58 — Java + Python',
      'Andrei Neagoie ZTM — Master the Coding Interview DS + Algorithms (20h) · W59–W61',
      'Tim Buchalka 112K — DS & Algorithms Deep Dive Using Java (16h) · W61–W63',
      'Elshad Karimov — Java DS & Algorithms Masterclass (45h) · W63–W67',
      'Andrei Neagoie ZTM — Master Coding Interview Big Tech FAANG (8h) · W67',
    ],
    weeks_plan: [
      {
        w: 58,
        f: '🐍 Java + Python DSA',
        t: 'Scott Barrett: Big O, Arrays, Hash Maps, Linked Lists, Trees — Java AND Python',
      },
      {
        w: 59,
        f: 'Arrays + Hash Maps',
        t: 'Two Pointers, Sliding Window, Frequency Counter — Java, timed',
      },
      {
        w: 60,
        f: 'Linked Lists + Stacks',
        t: 'Singly/Doubly LL, Floyd cycle detection, Monotonic Stack — Java',
      },
      {
        w: 61,
        f: 'Trees + BST',
        t: 'DFS pre/in/postorder, BFS level-order, BST insert/delete/validate',
      },
      {
        w: 62,
        f: 'Heaps + Priority Queues',
        t: 'Java PriorityQueue, Top-K patterns, median data stream',
      },
      {
        w: 63,
        f: 'Graphs in Java',
        t: 'BFS/DFS, topological sort, Dijkstra, Bellman-Ford, Union-Find',
      },
      {
        w: 64,
        f: 'Sorting + Binary Search',
        t: 'All sorting algorithms with complexity proofs, binary search variants',
      },
      {
        w: 65,
        f: 'Dynamic Programming 1',
        t: '1D DP: coin change, house robber, jump game — top-down + bottom-up',
      },
      {
        w: 66,
        f: 'Dynamic Programming 2',
        t: '2D DP, LCS, edit distance, knapsack, interval DP — timed',
      },
      {
        w: 67,
        f: 'FAANG Patterns',
        t: 'Hard graph, advanced DP, backtracking — FAANG course. 3 structures cold.',
      },
    ],
  },

  {
    id: 'sd',
    block: 2,
    seq: 9,
    icon: '🏗',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'System Design',
    label: 'Block 2 · Interview Prep',
    days: 70,
    ds: 471,
    de: 540,
    period: 'Sep 27 – Dec 5, 2027',
    weeks: '10w',
    hours: '~210h',
    ch: '63h',
    ph: '147h',
    ms: '🏗 System Design Complete · Day 540 · Dec 5 🎯',
    about:
      "70 days · 10 weeks · 5 courses. Design 1 system per day spoken aloud. FPO multi-tenant SaaS, Kafka, Lambda microservices = real production experience most candidates don't have. Last day Sunday Dec 5, 2027.",
    courses: [
      'Frank Kane ex-Amazon — Mastering the System Design Interview (5h) · W68',
      'Michael Pogrebinsky 93K — Software Architecture Modern Large Scale Systems (20h) · W68–W70',
      'Mikhail Smarshchok — System Design Interview Guide 20+ designs (18h) · W70–W72',
      'Bogdan Stashchuk — Pragmatic System Design real trade-offs (12h) · W72–W74',
      'FAANG Insiders — System Design Masterclass 2026 (8h) · W74–W77',
    ],
    weeks_plan: [
      {
        w: 68,
        f: 'SD Framework + Frank Kane',
        t: '5-step template: Requirements→Capacity→API→HLD→Deep Dive. 6 mocks.',
      },
      {
        w: 69,
        f: 'Distributed Architecture',
        t: 'CQRS, Event Sourcing, Saga, API Gateway — all maps to FPO',
      },
      {
        w: 70,
        f: 'Classic Designs 1',
        t: 'URL Shortener, WhatsApp, Twitter — spoken 45 min each',
      },
      {
        w: 71,
        f: 'Classic Designs 2',
        t: 'Netflix, Uber, Notification System — Mikhail Smarshchok course',
      },
      {
        w: 72,
        f: 'Classic Designs 3',
        t: 'Rate Limiter, Search Autocomplete, Distributed Cache, Leaderboard',
      },
      {
        w: 73,
        f: 'Trade-offs + Production',
        t: 'Bogdan: Netflix, Uber, Airbnb real decisions — WHY not just WHAT',
      },
      {
        w: 74,
        f: 'Advanced Designs',
        t: 'Payment System, FPO Flight Optimiser (your system!), Kafka pipeline',
      },
      {
        w: 75,
        f: 'FAANG Template + Mocks',
        t: 'FAANG Insiders 5-step — YouTube, Newsfeed, WhatsApp. Cold designs daily.',
      },
      {
        w: 76,
        f: 'Mock Design Week',
        t: '5 cold designs per day, 45 min each, no notes — focus on weakest 3',
      },
      {
        w: 77,
        f: 'Final Mock · Day 540',
        t: 'Last cold designs. Dec 5, 2027 = Day 540 = Journey Complete 🎯',
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
    icon: '📱',
    label: 'React Native Complete',
    color: '#7C3AED',
  },
  {
    day: 155,
    date: 'Nov 15, 2026',
    icon: '▲',
    label: 'Next.js Complete',
    color: '#374151',
  },
  {
    day: 260,
    date: 'Feb 28, 2027',
    icon: '🌱',
    label: 'Spring Boot Complete',
    color: '#16A34A',
  },
  {
    day: 316,
    date: 'Apr 25, 2027',
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
    label: 'Agentic AI Complete · Day 400',
    color: '#7C3AED',
  },
  {
    day: 470,
    date: 'Sep 26, 2027',
    icon: '🧩',
    label: 'Java DSA Complete · Day 470',
    color: '#6366F1',
  },
  {
    day: 540,
    date: 'Dec 5, 2027',
    icon: '🏗',
    label: 'System Design Complete · Day 540 🎯',
    color: '#16A34A',
  },
];

function daysIn() {
  return Math.max(0, Math.floor((new Date() - START) / 864e5));
}
function curId() {
  const d = daysIn() + 1;
  for (const p of PHASES) if (d <= p.de) return p.id;
  return null;
}
function pct() {
  return Math.min(100, Math.round((daysIn() / TOTAL) * 100));
}

function PhaseCard({ p, open, onToggle, isCurrent, isDone }) {
  const [wkOpen, setWkOpen] = useState(false);
  const hasPy = p.id === 'devops' || p.id === 'dsa';
  const b1col = { bg: '#EEF2FF', color: '#4338CA', border: '#C7D2FE' };
  const b2col = { bg: '#FFF7ED', color: '#C2410C', border: '#FED7AA' };
  const bc = p.block === 1 ? b1col : b2col;

  return (
    <div
      id={'p-' + p.id}
      style={{
        borderRadius: 12,
        border: `2px solid ${open ? p.color + '90' : isCurrent ? '#F59E0B' : isDone ? p.color + '30' : p.border}`,
        background: open ? p.bg : isDone ? '#FAFBFF' : '#fff',
        opacity: isDone ? 0.75 : 1,
        boxShadow: open
          ? `0 6px 24px ${p.color}18`
          : isCurrent
            ? '0 0 0 3px #FEF3C7,0 2px 8px rgba(0,0,0,0.07)'
            : '0 1px 4px rgba(0,0,0,0.05)',
        overflow: 'hidden',
        transition: 'all 0.22s',
        marginBottom: 8,
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
            width: 52,
            height: 52,
            borderRadius: 12,
            flexShrink: 0,
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
            transition: 'all 0.22s',
          }}
        >
          <span style={{ fontSize: 18, lineHeight: 1 }}>
            {isDone ? '✅' : p.icon}
          </span>
          <span
            style={{
              fontSize: 8,
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
              gap: 5,
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
                  padding: '1px 7px',
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
                  fontSize: 9,
                  fontWeight: 800,
                  padding: '1px 7px',
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
                  fontSize: 9,
                  fontWeight: 800,
                  padding: '1px 7px',
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
                fontSize: 9,
                fontWeight: 700,
                padding: '1px 7px',
                borderRadius: 12,
                background: bc.bg,
                color: bc.color,
                border: `1px solid ${bc.border}`,
                whiteSpace: 'nowrap',
              }}
            >
              {p.label}
            </span>
            <span
              style={{
                fontSize: 'clamp(11px,3vw,13px)',
                fontWeight: 800,
                color: '#0F172A',
              }}
            >
              {p.name}
            </span>
          </div>
          <div style={{ fontSize: 10, color: '#64748B', marginBottom: 1 }}>
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
              fontSize: 13,
              fontWeight: 900,
              color: p.color,
              background: p.color + '12',
              padding: '2px 10px',
              borderRadius: 14,
              border: `1px solid ${p.color}22`,
              marginBottom: 2,
            }}
          >
            {p.weeks}
          </div>
          <div style={{ fontSize: 9, color: '#94A3B8' }}>{p.days}d</div>
        </div>
        <span
          style={{
            color: p.color,
            fontSize: 18,
            flexShrink: 0,
            transform: open ? 'rotate(90deg)' : 'none',
            transition: 'transform 0.2s',
            opacity: open ? 1 : 0.3,
          }}
        >
          ›
        </span>
      </button>

      {open && (
        <div
          style={{
            borderTop: `2px solid ${p.color}18`,
            padding: '13px 15px 16px',
          }}
        >
          <div
            style={{
              background: p.color + '0A',
              border: `1px solid ${p.color}22`,
              borderRadius: 9,
              padding: '10px 12px',
              marginBottom: 10,
              fontSize: 12,
              color: '#334155',
              lineHeight: 1.85,
            }}
          >
            {p.about}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))',
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
                  marginBottom: 5,
                }}
              >
                📚 COURSES
              </div>
              {p.courses.map((c, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', gap: 5, padding: '2px 0' }}
                >
                  <span
                    style={{
                      fontSize: 9,
                      flexShrink: 0,
                      marginTop: 2,
                      fontWeight: 700,
                      color: c.startsWith('🐍') ? p.color : p.color,
                    }}
                  >
                    {c.startsWith('🐍') ? '🐍' : i + 1 + '.'}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      color: c.startsWith('🐍') ? '#047857' : '#374151',
                      lineHeight: 1.6,
                      fontWeight: c.startsWith('🐍') ? 600 : 400,
                    }}
                  >
                    {c}
                  </span>
                </div>
              ))}
            </div>
            <div
              style={{
                background: '#F8FAFF',
                border: '1px solid #E0E7FF',
                borderRadius: 8,
                padding: '9px 11px',
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 800,
                  color: '#4F46E5',
                  letterSpacing: '0.08em',
                  marginBottom: 6,
                }}
              >
                ⏰ 6:00 AM – 9:00 AM · {p.hours}
              </div>
              <div style={{ display: 'flex', gap: 7, marginBottom: 7 }}>
                {[
                  ['📺', 'Course', p.ch],
                  ['💻', 'Practice', p.ph],
                ].map(([ic, lb, h]) => (
                  <div
                    key={lb}
                    style={{
                      flex: 1,
                      background: '#fff',
                      borderRadius: 7,
                      padding: '6px 7px',
                      border: '1px solid #E2E8F0',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: 13 }}>{ic}</div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: '#0F172A',
                      }}
                    >
                      {h}
                    </div>
                    <div style={{ fontSize: 9, color: '#94A3B8' }}>{lb}</div>
                  </div>
                ))}
              </div>
              {p.ms && (
                <div
                  style={{
                    background: `${p.color}12`,
                    border: `1px solid ${p.color}28`,
                    borderRadius: 7,
                    padding: '6px 8px',
                    fontSize: 10,
                    fontWeight: 700,
                    color: p.color,
                  }}
                >
                  🏆 {p.ms}
                </div>
              )}
            </div>
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
              padding: '8px 12px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: wkOpen ? 8 : 0,
            }}
          >
            <span style={{ fontSize: 10, fontWeight: 700, color: p.color }}>
              📅 Week-by-Week Plan — {p.weeks_plan.length} weeks
            </span>
            <span style={{ fontSize: 12, color: p.color }}>
              {wkOpen ? '▲' : '▼'}
            </span>
          </button>

          {wkOpen && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {p.weeks_plan.map((wk) => {
                const isPy = wk.f.includes('🐍');
                return (
                  <div
                    key={wk.w}
                    style={{
                      background: isPy ? '#F0FDF4' : '#fff',
                      borderRadius: 8,
                      padding: '9px 11px',
                      border: `1.5px solid ${isPy ? '#86EFAC' : p.color + '18'}`,
                      display: 'flex',
                      gap: 10,
                      alignItems: 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
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
                          fontSize: isPy ? 14 : 8,
                          fontWeight: 700,
                          lineHeight: 1,
                        }}
                      >
                        {isPy ? '🐍' : 'W'}
                      </span>
                      {!isPy && (
                        <span
                          style={{
                            fontSize: 12,
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
                          gap: 5,
                          alignItems: 'center',
                          marginBottom: 2,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            color: isPy ? '#047857' : '#0F172A',
                          }}
                        >
                          {wk.f}
                        </span>
                        {!isPy && (
                          <span style={{ fontSize: 9, color: '#94A3B8' }}>
                            W{wk.w}
                          </span>
                        )}
                      </div>
                      <div
                        style={{
                          fontSize: 10,
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
      {/* HERO */}
      <div
        style={{
          background:
            'linear-gradient(135deg,#1E1B4B 0%,#4338CA 52%,#1A365D 100%)',
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
            maxWidth: 940,
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
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
                width: 52,
                height: 52,
                borderRadius: 13,
                flexShrink: 0,
                background: 'linear-gradient(135deg,#F59E0B,#D97706)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 26,
                boxShadow: '0 6px 20px rgba(245,158,11,0.5)',
              }}
            >
              🏆
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: 9,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.32)',
                  marginBottom: 2,
                }}
              >
                Sumit Rawal · NextStep Bangkok · FPO Cloud
              </div>
              <div
                style={{
                  fontSize: 'clamp(18px,5vw,28px)',
                  fontWeight: 900,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                540-Day Coding Journey
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.4)',
                  marginTop: 2,
                }}
              >
                Sun Jun 14, 2026 → Sun Dec 5, 2027 · 540 days · 1,620h · 6:00
                AM–9:00 AM
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 8,
              marginBottom: 14,
            }}
          >
            {[
              {
                icon: '📚',
                n: 'Block 1',
                t: '1 Year of Full Stack',
                s: 'Days 1–400 · Jun 14 2026 → Jul 18 2027',
                desc: 'React · RN · Next.js · Spring Boot · Microservices · DevOps · Agentic AI',
                col: '#6366F1',
              },
              {
                icon: '💡',
                n: 'Block 2',
                t: 'DSA + System Design',
                s: 'Days 401–540 · Jul 19 → Dec 5 2027',
                desc: 'Java DSA 10 weeks (D401–D470) · System Design 10 weeks (D471–D540)',
                col: '#16A34A',
              },
            ].map(({ icon, n, t, s, desc, col }) => (
              <div
                key={n}
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  borderRadius: 10,
                  padding: '11px 12px',
                  border: `1px solid ${col}50`,
                }}
              >
                <div style={{ fontSize: 18, marginBottom: 3 }}>{icon}</div>
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 800,
                    color: col,
                    marginBottom: 1,
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontSize: 'clamp(10px,2.8vw,13px)',
                    fontWeight: 800,
                    color: '#fff',
                    marginBottom: 3,
                  }}
                >
                  {t}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    color: 'rgba(255,255,255,0.42)',
                    marginBottom: 4,
                  }}
                >
                  {s}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    color: 'rgba(255,255,255,0.3)',
                    lineHeight: 1.55,
                  }}
                >
                  {desc}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 10 }}>
            <div
              style={{
                height: 14,
                borderRadius: 7,
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
                    background:
                      d + 1 > p.de
                        ? p.color + '70'
                        : d + 1 >= p.ds
                          ? p.color
                          : p.color + '38',
                    borderRight: '1px solid rgba(0,0,0,0.1)',
                    transition: 'background 0.3s',
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
                marginTop: 5,
              }}
            >
              {[1, 92, 155, 260, 316, 365, 400, 470, 540].map((day) => (
                <div
                  key={day}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 1,
                      height: 4,
                      background: 'rgba(255,255,255,0.25)',
                    }}
                  />
                  <span
                    style={{ fontSize: 7, color: 'rgba(255,255,255,0.35)' }}
                  >
                    D{day}
                  </span>
                </div>
              ))}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 2,
                fontSize: 8,
                color: 'rgba(255,255,255,0.3)',
              }}
            >
              <span>Jun 14, 2026</span>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 700 }}>
                {prog}% · Day {Math.min(d + 1, 540)} of 540
              </span>
              <span>Dec 5, 2027</span>
            </div>
          </div>

          <button
            onClick={() => setShowMs(!showMs)}
            style={{
              width: '100%',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 9,
              padding: '8px 12px',
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
                fontSize: 11,
                fontWeight: 700,
                color: 'rgba(255,255,255,0.7)',
              }}
            >
              🏆 Completion Announcements — {msDone} of {MILESTONES.length}{' '}
              unlocked
            </span>
            <span
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: 14,
                transform: showMs ? 'rotate(90deg)' : 'none',
                transition: 'transform 0.2s',
              }}
            >
              ›
            </span>
          </button>

          {showMs && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))',
                gap: 5,
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
                      gap: 8,
                      background: isNext
                        ? 'rgba(245,158,11,0.18)'
                        : done
                          ? 'rgba(255,255,255,0.1)'
                          : 'rgba(255,255,255,0.04)',
                      borderRadius: 8,
                      padding: '7px 10px',
                      border: `1px solid ${isNext ? 'rgba(245,158,11,0.5)' : done ? m.color + '45' : 'rgba(255,255,255,0.07)'}`,
                    }}
                  >
                    <span style={{ fontSize: 16, flexShrink: 0 }}>
                      {done ? '✅' : isNext ? '🎯' : m.icon}
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          color: done
                            ? '#fff'
                            : isNext
                              ? '#FDE68A'
                              : 'rgba(255,255,255,0.38)',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {m.label}
                      </div>
                      <div
                        style={{ fontSize: 9, color: 'rgba(255,255,255,0.28)' }}
                      >
                        Day {m.day} · {m.date}
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 800,
                        padding: '1px 6px',
                        borderRadius: 10,
                        flexShrink: 0,
                        background: done
                          ? m.color + '28'
                          : isNext
                            ? 'rgba(245,158,11,0.2)'
                            : 'rgba(255,255,255,0.06)',
                        color: done
                          ? m.color
                          : isNext
                            ? '#F59E0B'
                            : 'rgba(255,255,255,0.22)',
                      }}
                    >
                      {done ? 'DONE' : isNext ? 'NEXT' : 'D' + m.day}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* BODY */}
      <div
        style={{ maxWidth: 940, margin: '0 auto', padding: '14px 12px 48px' }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 10,
            marginTop: 2,
          }}
        >
          <div
            style={{
              height: 2,
              flex: 1,
              background: 'linear-gradient(90deg,#6366F1,#6366F110)',
            }}
          />
          <div style={{ textAlign: 'center', flexShrink: 0 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: '#6366F1',
                letterSpacing: '0.1em',
              }}
            >
              📚 BLOCK 1 — 1 YEAR OF FULL STACK
            </div>
            <div style={{ fontSize: 9, color: '#94A3B8' }}>
              Days 1–400 · Jun 14 2026 → Jul 18 2027 · React, RN, Next.js,
              Spring Boot, Microservices, DevOps, Agentic AI
            </div>
          </div>
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
            gap: 8,
            marginBottom: 18,
          }}
        >
          {b1.map((p) => (
            <PhaseCard
              key={p.id}
              p={p}
              open={openId === p.id}
              onToggle={() => toggle(p.id)}
              isCurrent={cid === p.id}
              isDone={d + 1 > p.de}
            />
          ))}
        </div>

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
              height: 2,
              flex: 1,
              background: 'linear-gradient(90deg,#16A34A,#16A34A10)',
            }}
          />
          <div style={{ textAlign: 'center', flexShrink: 0 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: '#16A34A',
                letterSpacing: '0.1em',
              }}
            >
              💡 BLOCK 2 — DSA + SYSTEM DESIGN
            </div>
            <div style={{ fontSize: 9, color: '#94A3B8' }}>
              Days 401–540 · Jul 19 → Dec 5 2027 · 10 weeks Java DSA + 10 weeks
              System Design
            </div>
          </div>
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
            gap: 8,
            marginBottom: 18,
          }}
        >
          {b2.map((p) => (
            <PhaseCard
              key={p.id}
              p={p}
              open={openId === p.id}
              onToggle={() => toggle(p.id)}
              isCurrent={cid === p.id}
              isDone={d + 1 > p.de}
            />
          ))}
        </div>

        <div
          style={{
            background: 'linear-gradient(135deg,#1E1B4B,#4338CA)',
            borderRadius: 14,
            padding: '16px 18px',
            boxShadow: '0 6px 24px rgba(99,102,241,0.3)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 15,
              fontWeight: 900,
              color: '#FDE68A',
              marginBottom: 4,
            }}
          >
            🏆 540 Days · Sun Jun 14, 2026 → Sun Dec 5, 2027
          </div>
          <div
            style={{
              fontSize: 11,
              color: 'rgba(255,255,255,0.5)',
              marginBottom: 8,
            }}
          >
            1,620 hours · 6:00 AM–9:00 AM · Block 1: 400 Days · Block 2: 20
            Weeks DSA + System Design
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 4,
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
                    fontSize: 9,
                    color: m.color,
                    fontWeight: 700,
                    opacity: m.day <= d + 1 ? 1 : 0.38,
                  }}
                >
                  {m.icon} {m.label.split(' ')[0]}
                </span>
                {i < a.length - 1 && (
                  <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 9 }}>
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
