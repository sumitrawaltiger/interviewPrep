import { useState } from 'react';

// ── 77 WEEKS · 539 DAYS · Mon Jun 15, 2026 → Sun Dec 5, 2027 ────────────────
// 6:00 AM – 9:00 AM daily · 3h/day · 1,617h total
// Every phase ends on a Sunday ·  DevOps, Agentic AI, Java DSA
const START = new Date('2026-06-15');

const PHASES = [
  // ══ BLOCK 1 — 400 DAYS OF CODE (56 weeks) ════════════════════════════════
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
    blockLabel: 'Block 1',
    weeks: 13,
    days: 91,
    dayStart: 1,
    dayEnd: 91,
    wkStart: 1,
    wkEnd: 13,
    startDate: 'Jun 15, 2026',
    endDate: 'Sep 13, 2026',
    hours: '~273h',
    courseH: '175h',
    practiceH: '98h',
    milestone: '⚛ React Complete',
    summary:
      '13 weeks · 91 days · 4 courses. Jonas primary (84h), Max second angle (55h), Smilga projects (25h), Hindi interview Q&A (11h). Build FPO Flight Status dashboard incrementally each week.',
    courses: [
      'Jonas Schmedtmann — The Ultimate React Course 2025 (84h)',
      'Max Schwarzmüller — React The Complete Guide 2025 (55h)',
      'John Smilga — React Tutorial & Projects Course (25h)',
      'Hindi Instructor — React Interview Masterclass 200 Q (11h)',
    ],
    weekPlan: [
      {
        w: 1,
        focus: 'Setup + Components',
        topics:
          'Vite, JSX, props, component patterns — code along every example in VSCode',
      },
      {
        w: 2,
        focus: 'State + Events',
        topics:
          'useState, event handlers, forms, controlled inputs — build counter + todo app',
      },
      {
        w: 3,
        focus: 'Effects + Data',
        topics:
          'useEffect, fetch API, async/await — pull mock flight data from fake API',
      },
      {
        w: 4,
        focus: 'React Router',
        topics:
          'Client-side routing, nested routes, dynamic params — multi-page FPO app',
      },
      {
        w: 5,
        focus: 'Context API',
        topics:
          'createContext, useContext, Provider pattern — global state without Redux',
      },
      {
        w: 6,
        focus: 'React Query',
        topics:
          'useQuery, useMutation, caching, background refetch — replace raw fetch calls',
      },
      {
        w: 7,
        focus: 'Redux Toolkit',
        topics:
          'createSlice, configureStore, RTK Query — airline filter state in FPO',
      },
      {
        w: 8,
        focus: 'Performance',
        topics:
          'useMemo, useCallback, React.memo, lazy, Suspense — profile with DevTools',
      },
      {
        w: 9,
        focus: 'TypeScript in React',
        topics:
          'Component types, generic hooks, typed props — convert Week 4 app to TS',
      },
      {
        w: 10,
        focus: 'Tailwind + Styling',
        topics:
          'Tailwind utility classes, dark mode, responsive — restyle FPO dashboard',
      },
      {
        w: 11,
        focus: 'Testing',
        topics: 'React Testing Library, jest-dom, mock service worker',
      },
      {
        w: 12,
        focus: 'Advanced Patterns',
        topics: 'Compound components, render props, custom hooks library',
      },
      {
        w: 13,
        focus: 'Revision + Interview Q',
        topics:
          'Rebuild FPO Flight Status app from scratch cold. React 200 Q&A drill.',
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
    blockLabel: 'Block 1',
    weeks: 4,
    days: 28,
    dayStart: 92,
    dayEnd: 119,
    wkStart: 14,
    wkEnd: 17,
    startDate: 'Sep 14, 2026',
    endDate: 'Oct 11, 2026',
    hours: '~84h',
    courseH: '52h',
    practiceH: '32h',
    milestone: '📱 React Native Complete',
    summary:
      '4 weeks · 28 days · 2 courses. Run every exercise on your real iPad via Expo Go. Build FPO-style flight list app with React Navigation.',
    courses: [
      'Stephen Grider — The Complete React Native + Hooks Course 4.8★ (38h)',
      'Max Schwarzmüller — React Native The Practical Guide 2025 (14h)',
    ],
    weekPlan: [
      {
        w: 14,
        focus: 'Core Components',
        topics:
          'View, Text, Image, StyleSheet, Flexbox, FlatList — reproduce exercises on iPad',
      },
      {
        w: 15,
        focus: 'Navigation',
        topics:
          'React Navigation v6 — Stack, Tab, Drawer — FPO flight list with 3 screens',
      },
      {
        w: 16,
        focus: 'Device APIs',
        topics:
          'Camera, Location, AsyncStorage, Notifications — Expo SDK modules',
      },
      {
        w: 17,
        focus: 'Polish + Deploy',
        topics:
          'Animations, iOS vs Android differences, EAS Build, TestFlight submit',
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
    blockLabel: 'Block 1',
    weeks: 5,
    days: 35,
    dayStart: 120,
    dayEnd: 154,
    wkStart: 18,
    wkEnd: 22,
    startDate: 'Oct 12, 2026',
    endDate: 'Nov 15, 2026',
    hours: '~105h',
    courseH: '65h',
    practiceH: '40h',
    milestone: '▲ Next.js Complete',
    summary:
      '5 weeks · 35 days · 3 courses. App Router, Server Components, Server Actions, NextAuth v5, Prisma. Deploy to Vercel after every chapter.',
    courses: [
      'Max Schwarzmüller — Next.js & React The Complete Guide (25h)',
      'John Smilga — React Tutorial & Projects Next.js sections (20h)',
      'Anil Dollor — Next.js Full Stack Development Hindi (20h)',
    ],
    weekPlan: [
      {
        w: 18,
        focus: 'App Router Basics',
        topics:
          'File-based routing, layouts, loading states, error boundaries, metadata API',
      },
      {
        w: 19,
        focus: 'Server Components',
        topics: 'RSC vs Client Components, data fetching, streaming, Suspense',
      },
      {
        w: 20,
        focus: 'Server Actions + DB',
        topics:
          'Form actions, Prisma ORM, PostgreSQL, revalidatePath, optimistic UI',
      },
      {
        w: 21,
        focus: 'Auth + Security',
        topics:
          'NextAuth v5, OAuth providers, middleware, protected routes, JWT sessions',
      },
      {
        w: 22,
        focus: 'Deploy + Capstone',
        topics:
          'Vercel deploy, env vars — build FPO web portal as phase capstone',
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
    blockLabel: 'Block 1 · MAX ⭐',
    weeks: 15,
    days: 105,
    dayStart: 155,
    dayEnd: 259,
    wkStart: 23,
    wkEnd: 37,
    startDate: 'Nov 16, 2026',
    endDate: 'Feb 28, 2027',
    hours: '~315h',
    courseH: '185h',
    practiceH: '130h',
    milestone: '🌱 Spring Boot Complete',
    summary:
      '15 weeks — MAX TIME · 105 days · 5 courses. Java 8 fast-track, JPA/Hibernate deep, Spring Security with Cognito OAuth2. Map every concept to FPO: Bean=Lambda, JPA=DynamoDB.',
    courses: [
      'Navin Reddy Telusko — Java 8 New Features (20h)',
      'John Thompson — Hibernate & Spring Data JPA Beginner to Guru (55h)',
      'Ranga Karanam — Spring Boot with IntelliJ Real-World Project (34h)',
      'John Thompson — Spring Framework 6 Beginner to Guru (40h)',
      'Ranga Karanam — Master Spring Boot 3 & Spring Framework 6 (36h)',
    ],
    weekPlan: [
      {
        w: 23,
        focus: 'Java 8 Fast-Track',
        topics:
          'Lambdas, Streams, Optional, CompletableFuture — you know C#, this is fast',
      },
      {
        w: 24,
        focus: 'JPA Foundations',
        topics:
          '@Entity, @Id, relationships (@OneToMany/@ManyToOne), EntityManager lifecycle',
      },
      {
        w: 25,
        focus: 'Spring Data JPA',
        topics: 'JpaRepository, JPQL, @Query, Pageable, @Transactional',
      },
      {
        w: 26,
        focus: 'N+1 & Performance',
        topics:
          'N+1 problem, @EntityGraph, JOIN FETCH, lazy vs eager, query optimisation',
      },
      {
        w: 27,
        focus: 'Spring Boot Basics',
        topics:
          'Auto-configuration, starters, Actuator, profiles, application.yml',
      },
      {
        w: 28,
        focus: 'REST APIs',
        topics:
          '@RestController, ResponseEntity, @ExceptionHandler, validation, OpenAPI',
      },
      {
        w: 29,
        focus: 'Spring MVC + Testing',
        topics: '@WebMvcTest, MockMvc, @DataJpaTest, Testcontainers, Mockito',
      },
      {
        w: 30,
        focus: 'Spring IoC Deep',
        topics:
          'Bean lifecycle, AOP, @Transactional propagation, @Conditional, @Primary',
      },
      {
        w: 31,
        focus: 'Spring Security',
        topics:
          'SecurityFilterChain, JWT filter, UserDetailsService, password encoding',
      },
      {
        w: 32,
        focus: 'OAuth2 + Cognito',
        topics:
          'Resource server, JWT validation, Cognito JWKS — your FPO auth pattern exactly',
      },
      {
        w: 33,
        focus: 'Docker + Maven',
        topics:
          'Dockerfile for Spring Boot, multi-stage build, docker-compose, Maven lifecycle',
      },
      {
        w: 34,
        focus: 'Full-Stack Connect',
        topics:
          'Spring Boot API + React frontend — connect your React app to Spring Boot',
      },
      {
        w: 35,
        focus: 'Spring Boot 4 Preview',
        topics:
          'Spring Boot 4 / Spring 7, GraalVM native image, virtual threads (Project Loom)',
      },
      {
        w: 36,
        focus: 'Capstone Project',
        topics:
          'Build complete REST API + JWT + JPA from scratch — production quality',
      },
      {
        w: 37,
        focus: 'Revision + 200 Q&A',
        topics:
          'Rebuild REST API + JWT auth cold. Spring 200 interview Q&A drill.',
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
    blockLabel: 'Block 1 · MAX ⭐',
    weeks: 7,
    days: 49,
    dayStart: 260,
    dayEnd: 308,
    wkStart: 38,
    wkEnd: 44,
    startDate: 'Mar 1, 2027',
    endDate: 'Apr 18, 2027',
    hours: '~147h',
    courseH: '90h',
    practiceH: '57h',
    milestone: '🏛 Microservices Complete',
    summary:
      '7 weeks — MAX TIME · 49 days · 4 courses. Kafka, CQRS, Event Sourcing, Saga, K8s, Circuit Breaker. Every pattern maps to your FPO Cloud: EventBridge→Kafka, Step Functions→Saga, Lambda→Microservice.',
    courses: [
      'Ranga Karanam — Java Spring Boot Microservices with K8s & Docker (35h)',
      'Sergey Kargopolov — Building Microservices with Spring Cloud (30h)',
      'John Thompson — Spring Boot Microservices Beginner to Guru (15h)',
      'Sean Campbell — Master Spring Boot Microservices CQRS & Event Sourcing (10h)',
    ],
    weekPlan: [
      {
        w: 38,
        focus: 'Service Decomposition',
        topics:
          'DDD bounded contexts, service boundaries, inter-service communication',
      },
      {
        w: 39,
        focus: 'Spring Cloud',
        topics: 'Eureka, Spring Cloud Gateway, config server, Feign clients',
      },
      {
        w: 40,
        focus: 'Resilience Patterns',
        topics:
          'Resilience4j circuit breaker, retry, bulkhead — your FPO uses this!',
      },
      {
        w: 41,
        focus: 'Kafka Deep Dive',
        topics:
          'Producer, consumer, groups, partitions, offsets — relate to FPO EventBridge',
      },
      {
        w: 42,
        focus: 'CQRS + Event Sourcing',
        topics:
          'Separate read/write models, Axon Framework, event store, replay',
      },
      {
        w: 43,
        focus: 'Saga Pattern',
        topics:
          'Orchestration vs choreography, compensating transactions — Step Functions = Saga!',
      },
      {
        w: 44,
        focus: 'K8s + Revision',
        topics:
          'Deploy microservices to K8s, Ingress, ConfigMaps. Write 1 Architecture Decision Record.',
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
    blockLabel: 'Block 1',
    weeks: 6,
    days: 42,
    dayStart: 309,
    dayEnd: 350,
    wkStart: 45,
    wkEnd: 50,
    startDate: 'Apr 19, 2027',
    endDate: 'May 30, 2027',
    hours: '~126h',
    courseH: '79h',
    practiceH: '47h',
    milestone: '⚙ DevOps Complete',
    pythonWeek: 'W50',
    summary:
      '6 weeks · 42 days. DevOps courses (W45–W49) + Python Scripting merged into W50. No standalone Python phase — learn Python automation in the context you will actually use it: DevOps scripting for FPO infrastructure.',
    courses: [
      'Nana Janashia TechWorld — DevOps Bootcamp (35h) · W45–W48',
      'Mumshad Mannambeth KodeKloud — The Complete DevOps Bootcamp (20h) · W48–W49',
      'Anil Dollor — Mastering DevOps Hindi (8h) · W49',
      'Mumshad Mannambeth — Terraform for Absolute Beginners with Labs (9h) · W49',
      '🐍 Al Sweigart — Automate the Boring Stuff with Python (9h) · W50 — Python for DevOps',
    ],
    weekPlan: [
      {
        w: 45,
        focus: 'Linux + Docker',
        topics:
          'Linux essentials, Docker images, containers, volumes, docker-compose — KodeKloud labs',
      },
      {
        w: 46,
        focus: 'Kubernetes',
        topics:
          'Pods, Deployments, Services, Ingress, ConfigMaps, Secrets, AWS EKS',
      },
      {
        w: 47,
        focus: 'CI/CD Pipelines',
        topics:
          'GitHub Actions workflows, OIDC keyless AWS auth, build/test/deploy pipelines',
      },
      {
        w: 48,
        focus: 'Terraform IaC',
        topics:
          'HCL syntax, resources, state, modules — provision FPO AWS resources with Terraform',
      },
      {
        w: 49,
        focus: 'Monitoring + Hindi Recap',
        topics:
          'Prometheus, Grafana, Datadog (your FPO tool), alerts. Hindi DevOps recap — Anil Dollor.',
      },
      {
        w: 50,
        focus: '🐍 Python for DevOps',
        topics:
          'Automate the Boring Stuff: boto3 FPO Lambda lister, CloudWatch log parser, subprocess, regex log parsing, scheduling, S3 automation — Python learned in DevOps context',
      },
    ],
  },
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
    blockLabel: 'Block 2 · Agentic AI using Python',
    weeks: 6,
    days: 42,
    dayStart: 351,
    dayEnd: 392,
    wkStart: 51,
    wkEnd: 56,
    startDate: 'May 31, 2027',
    endDate: 'Jul 11, 2027',
    hours: '~126h',
    courseH: '96h',
    practiceH: '30h',
    milestone: '🤖 Agentic AI using Python Complete · Day 392',
    pythonWeek: 'W51',
    summary:
      '6 weeks · 42 days. W51 = Python core foundations (Angela Yu), then immediately into GenAI and agents. Python learned with purpose — you need it for LangChain. Build FPO AI assistant as capstone.',
    courses: [
      '🐍 Dr. Angela Yu — 100 Days of Code Python Bootcamp Days 1–30 (22h) · W51 only',
      'Dr. Frank Kane — ChatGPT + Generative AI Masterclass 2026 (22h) · W52',
      'Ed Donner — Complete Agentic AI Engineering Course 2026 (30h) · W53–W55',
      'Eden Marco — LangChain Develop LLM Powered Applications (22h) · W55–W56',
    ],
    weekPlan: [
      {
        w: 51,
        focus: '🐍 Python Foundations',
        topics:
          'Angela Yu Days 1–30: variables, OOP, file I/O, exceptions, type hints. Fast-track using your C# background — 1 week is enough to code Python for AI.',
      },
      {
        w: 52,
        focus: 'GenAI Foundations',
        topics:
          'LLMs, embeddings, RAG, prompt engineering (CoT, ReAct), AWS Bedrock — Frank Kane. GenAI concepts land fast now you know Python.',
      },
      {
        w: 53,
        focus: 'LangChain Core',
        topics:
          'Chains, agents, tools, memory, LCEL, vector databases (Pinecone, FAISS) — Eden Marco',
      },
      {
        w: 54,
        focus: 'LangGraph + Multi-Agent',
        topics:
          'State machines, conditional edges, multi-agent orchestration, ReAct + Reflection patterns',
      },
      {
        w: 55,
        focus: 'Ed Donner Projects 1',
        topics:
          'Career Digital Twin, Deep Research agent, SDR Agent — 8 real production projects',
      },
      {
        w: 56,
        focus: 'Ed Donner Projects 2 + FPO AI',
        topics:
          'Engineering Team in Docker, Browser Agent, MCP. Build FPO AI Assistant: natural language query over flight data.',
      },
    ],
  },
  // ══ BLOCK 2 — 100 DAYS DSA + SYSTEM DESIGN (15 weeks) ═══════════════════
  {
    id: 'dsa',
    block: 3,
    seq: 8,
    icon: '🧩',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Java DSA + Python DSA',
    blockLabel: 'Block 3 · DSA + System Design',
    weeks: 7,
    days: 49,
    dayStart: 393,
    dayEnd: 441,
    wkStart: 57,
    wkEnd: 63,
    startDate: 'Jul 12, 2027',
    endDate: 'Aug 29, 2027',
    hours: '~147h',
    courseH: '99h',
    practiceH: '48h',
    milestone: '🧩 Java DSA Complete',
    pythonWeek: 'W57',
    summary:
      "7 weeks · 49 days. W57 = Scott Barrett's Java+Python DSA course (solves problems in both languages side by side). W58–W63 = Java-primary DSA courses. Python problem-solving skills built naturally alongside Java.",
    courses: [
      '🐍 Scott Barrett 4.8★ — Java Data Structures & Algorithms + LeetCode (10h) · W57 — Java + Python side by side',
      'Andrei Neagoie ZTM — Master the Coding Interview DS + Algorithms (20h) · W58–W60',
      'Tim Buchalka 112K — DS & Algorithms Deep Dive Using Java (16h) · W60–W61',
      'Elshad Karimov — Java DS & Algorithms Masterclass 45h (45h) · W61–W63',
      'Andrei Neagoie ZTM — Master Coding Interview Big Tech FAANG (8h) · W63',
    ],
    weekPlan: [
      {
        w: 57,
        focus: '🐍 Python + Java DSA',
        topics:
          'Scott Barrett Java+LeetCode course: solves every problem in both Java and Python. Big O, Arrays, Hash Maps, Linked Lists — two languages simultaneously.',
      },
      {
        w: 58,
        focus: 'Trees + BST in Java',
        topics:
          'DFS preorder/inorder/postorder, BFS level-order, BST insert/delete/validate — all in Java',
      },
      {
        w: 59,
        focus: 'Heaps + Graphs in Java',
        topics:
          'Java PriorityQueue, Top-K patterns, BFS/DFS on graphs, topological sort, Union-Find',
      },
      {
        w: 60,
        focus: 'Sorting + Searching',
        topics:
          'All sorting algorithms in Java — QuickSort, MergeSort, HeapSort — with complexity proofs',
      },
      {
        w: 61,
        focus: 'DP Foundations',
        topics:
          '1D DP: coin change, house robber, jump game. Top-down memoisation in Java.',
      },
      {
        w: 62,
        focus: 'Advanced DP + Backtracking',
        topics:
          '2D DP, interval DP, backtracking N-Queens, Sudoku — Java solutions',
      },
      {
        w: 63,
        focus: 'FAANG Hard + Revision',
        topics:
          'Hard graph, advanced DP — FAANG course. Rebuild 3 structures from scratch cold.',
      },
    ],
  },
  {
    id: 'sd',
    block: 3,
    seq: 9,
    icon: '🏗',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'System Design',
    blockLabel: 'Block 3',
    weeks: 4,
    days: 28,
    dayStart: 442,
    dayEnd: 469,
    wkStart: 64,
    wkEnd: 67,
    startDate: 'Aug 30, 2027',
    endDate: 'Sep 26, 2027',
    hours: '~84h',
    courseH: '63h',
    practiceH: '21h',
    milestone: '🏗 System Design Complete',
    summary:
      '4 weeks · 28 days · 5 courses. Design 1 system from scratch each day spoken aloud. FPO IS a system design answer — multi-tenant SaaS, Lambda microservices, DynamoDB at scale.',
    courses: [
      'Frank Kane ex-Amazon — Mastering the System Design Interview (5h) · W64',
      'Michael Pogrebinsky 93K — Software Architecture Modern Large Scale Systems (20h) · W64–W65',
      'Mikhail Smarshchok — System Design Interview Guide 20+ designs (18h) · W65–W66',
      'Bogdan Stashchuk — Pragmatic System Design real trade-offs (12h) · W66–W67',
      'FAANG Insiders — System Design Masterclass 2026 (8h) · W67',
    ],
    weekPlan: [
      {
        w: 64,
        focus: 'SD Framework + Architecture',
        topics:
          'Frank Kane 5-step template. CQRS, Event Sourcing, Saga, API Gateway — all maps to FPO',
      },
      {
        w: 65,
        focus: 'Classic Designs 1',
        topics:
          'URL Shortener, WhatsApp, Twitter — Requirements→Estimation→HLD→DB→API each day',
      },
      {
        w: 66,
        focus: 'Classic Designs 2',
        topics:
          'Netflix, Uber, Notification System, Rate Limiter — 45 min each spoken aloud, cold',
      },
      {
        w: 67,
        focus: 'Advanced + FPO Design',
        topics:
          'Payment System, FPO Flight Optimiser (your system!), Distributed Cache, Leaderboard',
      },
    ],
  },
  {
    id: 'review',
    block: 3,
    seq: 10,
    icon: '🏁',
    color: '#F59E0B',
    dark: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'DSA + SD Review',
    blockLabel: 'Block 3 · Final Review',
    weeks: 4,
    days: 28,
    dayStart: 470,
    dayEnd: 497,
    wkStart: 68,
    wkEnd: 71,
    startDate: 'Sep 27, 2027',
    endDate: 'Oct 24, 2027',
    hours: '~84h',
    courseH: '0h',
    practiceH: '84h',
    milestone: '🏁 100-Day Review Complete',
    summary:
      '4 weeks · 28 days · pure practice. No new courses. DSA revision in Java, system design mocks, Pramp peer sessions, weak-spot drilling, resume polish.',
    courses: [
      'W68: DSA Revision — rebuild Heap, Dijkstra, Trie, AVL Tree, LRU Cache in Java cold',
      'W69: System Design mocks — 7 designs spoken 45 min each, paper diagram first',
      'W70: Pramp.com peer mocks — 4 sessions + interviewing.io — record yourself once',
      'W71: Weak-spot drill + Resume polish + FPO 90-sec pitch rehearsal cold',
    ],
    weekPlan: [
      {
        w: 68,
        focus: 'DSA Revision in Java',
        topics:
          'Rebuild 5 structures cold: Heap, Graph+Dijkstra, Trie, AVL Tree, LRU Cache — no reference',
      },
      {
        w: 69,
        focus: 'System Design Mocks',
        topics:
          'Twitter, Netflix, Uber, FPO, Payment System — 45 min each spoken, paper diagram first',
      },
      {
        w: 70,
        focus: 'Pramp Peer Mocks',
        topics:
          '4 Pramp sessions + 1 interviewing.io. Record yourself, watch for filler words.',
      },
      {
        w: 71,
        focus: 'Final Polish',
        topics:
          'Resume quantified bullets. LinkedIn headline. FPO 90-sec pitch rehearsed cold.',
      },
    ],
  },
  // ══ BLOCK 3 — INTERVIEW PREPARATION (6 weeks) ════════════════════════════
  {
    id: 'int_java',
    block: 4,
    seq: 11,
    icon: '☕',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'Java + Spring Interview',
    blockLabel: 'Block 4 · Interview Prep',
    weeks: 2,
    days: 14,
    dayStart: 498,
    dayEnd: 511,
    wkStart: 72,
    wkEnd: 73,
    startDate: 'Oct 25, 2027',
    endDate: 'Nov 7, 2027',
    hours: '~42h',
    courseH: '33h',
    practiceH: '9h',
    milestone: null,
    summary:
      '2 weeks · 14 days · 3 courses · 600+ Java+Spring Q&A. Write every code answer from memory. 30 questions per morning as warm-up.',
    courses: [
      'Ranga Karanam in28minutes — Java Programming Interview Guide 200+ Q&A 4.5★ (10h) · W72',
      'Ranga Karanam in28minutes — Spring & Spring Boot Interview Guide 200+ Q&A 4.5★ (10h) · W72–W73',
      'Happy Rawat — Java Interview Masterclass 350 Questions 2026 +PDF 4.6★ (13h) · W73',
    ],
    weekPlan: [
      {
        w: 72,
        focus: 'Java + Spring 400 Q',
        topics:
          'Java 200 Q then Spring 200 Q — OOP, Streams, Collections, IoC, JPA, AOP, @Transactional',
      },
      {
        w: 73,
        focus: '350 Q Masterclass',
        topics:
          'Happy Rawat 350 Q — Core Java, Multithreading, Design Patterns, Spring Security, Microservices',
      },
    ],
  },
  {
    id: 'int_react',
    block: 4,
    seq: 12,
    icon: '⚛',
    color: '#0EA5E9',
    dark: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    name: 'React + RN Interview',
    blockLabel: 'Block 4 · Interview Prep',
    weeks: 1,
    days: 7,
    dayStart: 512,
    dayEnd: 518,
    wkStart: 74,
    wkEnd: 74,
    startDate: 'Nov 8, 2027',
    endDate: 'Nov 14, 2027',
    hours: '~21h',
    courseH: '15h',
    practiceH: '6h',
    milestone: null,
    summary:
      '1 week · 7 days · 2 courses · 200+ React Q&A with TypeScript coding questions. Build 5 components from memory. React Native specifics covered.',
    courses: [
      'Happy Rawat — React Interview Masterclass 200 Q&A +PDF 2026 4.7★ (7h)',
      'Ariel Weinberger — React Interview Questions Coding 2026 TypeScript 4.6★ (8h)',
    ],
    weekPlan: [
      {
        w: 74,
        focus: 'React + RN 200 Q',
        topics:
          'Virtual DOM, reconciliation, fiber, hooks rules, useMemo vs useCallback, TS patterns, RN differences',
      },
    ],
  },
  {
    id: 'int_micro',
    block: 4,
    seq: 13,
    icon: '🏛',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECDD3',
    name: 'Microservices Interview',
    blockLabel: 'Block 4 · Interview Prep',
    weeks: 1,
    days: 7,
    dayStart: 519,
    dayEnd: 525,
    wkStart: 75,
    wkEnd: 75,
    startDate: 'Nov 15, 2027',
    endDate: 'Nov 21, 2027',
    hours: '~21h',
    courseH: '18h',
    practiceH: '3h',
    milestone: null,
    summary:
      "1 week · 7 days. Chad Darby's comprehensive Java+Spring Boot+Microservices+DevOps+Cloud interview course — full-picture Q&A including Docker, K8s, CI/CD, AWS.",
    courses: [
      'Chad Darby — Java Interview Help: Java Spring Boot Microservices DevOps Cloud 4.6★ 30K students (18h)',
    ],
    weekPlan: [
      {
        w: 75,
        focus: 'Microservices Full Q&A',
        topics:
          'Kafka, Circuit Breaker, Saga, CQRS, K8s, Docker, AWS, CI/CD — all Q&A coded on whiteboard',
      },
    ],
  },
  {
    id: 'int_python',
    block: 4,
    seq: 14,
    icon: '🤖',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'Python + AI Interview',
    blockLabel: 'Block 4 · Interview Prep',
    weeks: 1,
    days: 7,
    dayStart: 526,
    dayEnd: 532,
    wkStart: 76,
    wkEnd: 76,
    startDate: 'Nov 22, 2027',
    endDate: 'Nov 28, 2027',
    hours: '~21h',
    courseH: '18h',
    practiceH: '3h',
    milestone: null,
    summary:
      '1 week · 7 days. Agentic AI interview prep (LangChain, LangGraph, RAG, agents) + Core Python Q&A (OOP, decorators, generators, async). Build live agent demo.',
    courses: [
      'Eden Marco — LangChain Agentic AI Engineering 2026 4.7★ 114K students (10h)',
      'Multiple Instructors — Python Interview Questions Core Python OOP Automation 4.5★ (8h)',
    ],
    weekPlan: [
      {
        w: 76,
        focus: 'Python + AI Q&A',
        topics:
          'RAG, LangGraph agents, MCP, OOP, decorators, generators, async — explain each out loud',
      },
    ],
  },
  {
    id: 'int_mock',
    block: 4,
    seq: 15,
    icon: '🎯',
    color: '#F59E0B',
    dark: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'Mock + Final Polish',
    blockLabel: 'Block 4 · Week 77 · FINAL',
    weeks: 1,
    days: 7,
    dayStart: 533,
    dayEnd: 539,
    wkStart: 77,
    wkEnd: 77,
    startDate: 'Nov 29, 2027',
    endDate: 'Dec 5, 2027',
    hours: '~21h',
    courseH: '10h',
    practiceH: '11h',
    milestone: '🎯 Interview Prep Complete · Week 77 · Dec 5, 2027',
    summary:
      'Final week · 7 days. Non-technical interview mastery Mon–Thu, then 3 days of pure mock interview simulation. Last day is Sunday Dec 5, 2027 — end of 77 weeks.',
    courses: [
      'Andrei Neagoie ZTM — Master Coding Interview Non-Technical Resume+Salary+STAR 4.7★ (10h) · Nov 29–Dec 2',
      'Dec 3 (Wed): Full mock — coding + system design + behavioural — Pramp session',
      'Dec 4 (Thu): Cold system design FPO + salary negotiation role-play',
      'Dec 5 (Sun): Final day — FPO 90-sec pitch · LinkedIn + Resume final · Interview Ready',
    ],
    weekPlan: [
      {
        w: 77,
        focus: 'Non-Tech + Full Mocks',
        topics:
          'Resume, salary, STAR stories from FPO. Then 3 cold mocks. Dec 5 Sunday = 77 weeks = DONE.',
      },
    ],
  },
];

// ── MILESTONES (all end on Sundays) ──────────────────────────────────────────
const MILESTONES = [
  {
    day: 91,
    wk: 13,
    date: 'Sep 13, 2026',
    icon: '⚛',
    label: 'React Complete',
    color: '#0EA5E9',
  },
  {
    day: 119,
    wk: 17,
    date: 'Oct 11, 2026',
    icon: '📱',
    label: 'React Native Complete',
    color: '#7C3AED',
  },
  {
    day: 154,
    wk: 22,
    date: 'Nov 15, 2026',
    icon: '▲',
    label: 'Next.js Complete',
    color: '#374151',
  },
  {
    day: 259,
    wk: 37,
    date: 'Feb 28, 2027',
    icon: '🌱',
    label: 'Spring Boot Complete',
    color: '#16A34A',
  },
  {
    day: 308,
    wk: 44,
    date: 'Apr 18, 2027',
    icon: '🏛',
    label: 'Microservices Complete',
    color: '#E11D48',
  },
  {
    day: 350,
    wk: 50,
    date: 'May 30, 2027',
    icon: '⚙',
    label: 'DevOps Complete',
    color: '#EA580C',
  },
  {
    day: 392,
    wk: 56,
    date: 'Jul 11, 2027',
    icon: '🤖',
    label: 'Agentic AI using Python Complete',
    color: '#7C3AED',
  },
  {
    day: 441,
    wk: 63,
    date: 'Aug 29, 2027',
    icon: '🧩',
    label: 'Java DSA + Python DSA Complete',
    color: '#6366F1',
  },
  {
    day: 469,
    wk: 67,
    date: 'Sep 26, 2027',
    icon: '🏗',
    label: 'System Design Complete',
    color: '#16A34A',
  },
  {
    day: 539,
    wk: 77,
    date: 'Dec 5, 2027',
    icon: '🎯',
    label: 'Interview Prep Complete',
    color: '#F59E0B',
  },
];

const TOTAL_DAYS = 539,
  TOTAL_WEEKS = 77,
  TOTAL_HOURS = 1617;

function daysSince() {
  return Math.max(0, Math.floor((new Date() - START) / 864e5));
}
function curPhaseId() {
  const d = daysSince() + 1;
  for (const p of PHASES) if (d <= p.dayEnd) return p.id;
  return null;
}
function pct() {
  return Math.min(100, Math.round((daysSince() / TOTAL_DAYS) * 100));
}
function curWk() {
  return Math.min(TOTAL_WEEKS, Math.floor(daysSince() / 7) + 1);
}

// ── CARD ──────────────────────────────────────────────────────────────────────
function Card({ p, isOpen, onToggle, isCurrent, isDone }) {
  const [wkOpen, setWkOpen] = useState(false);
  const hasPy = !!p.pythonWeek;
  return (
    <div
      id={'p' + p.id}
      style={{
        borderRadius: 12,
        border:
          '2px solid ' +
          (isOpen
            ? p.color + '80'
            : isCurrent
              ? '#F59E0B80'
              : isDone
                ? p.color + '28'
                : p.border),
        background: isOpen ? p.bg : isDone ? '#FAFBFF' : '#fff',
        opacity: isDone ? 0.72 : 1,
        boxShadow: isOpen
          ? `0 6px 22px ${p.color}14`
          : isCurrent
            ? '0 0 0 3px #FEF3C7,0 2px 8px rgba(0,0,0,0.07)'
            : '0 1px 4px rgba(0,0,0,0.05)',
        overflow: 'hidden',
        transition: 'all 0.22s',
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
          padding: '12px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
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
            background: isOpen
              ? `linear-gradient(135deg,${p.color},${p.dark})`
              : isDone
                ? '#F1F5F9'
                : p.bg,
            border: `2px solid ${p.color}35`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.22s',
            boxShadow: isOpen ? `0 4px 12px ${p.color}40` : 'none',
          }}
        >
          <span style={{ fontSize: 18, lineHeight: 1 }}>
            {isDone ? '✅' : p.icon}
          </span>
          <span
            style={{
              fontSize: 8,
              fontWeight: 700,
              color: isOpen ? 'rgba(255,255,255,0.6)' : p.color,
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
              marginBottom: 2,
            }}
          >
            {isCurrent && (
              <span
                style={{
                  fontSize: 9,
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
                  fontSize: 9,
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
                  fontSize: 9,
                  fontWeight: 800,
                  padding: '1px 6px',
                  borderRadius: 12,
                  background: '#DCFCE7',
                  color: '#047857',
                  border: '1px solid #6EE7B7',
                  whiteSpace: 'nowrap',
                }}
              >
                🐍 {p.pythonWeek}
              </span>
            )}
            <span
              style={{
                fontSize: 9,
                fontWeight: 700,
                padding: '1px 6px',
                borderRadius: 12,
                whiteSpace: 'nowrap',
                background:
                  p.block === 1
                    ? '#EEF2FF'
                    : p.block === 2
                      ? '#F5F3FF'
                      : p.block === 3
                        ? '#F0FDF4'
                        : '#FFFBEB',
                color:
                  p.block === 1
                    ? '#4338CA'
                    : p.block === 2
                      ? '#6D28D9'
                      : p.block === 3
                        ? '#15803D'
                        : '#D97706',
                border:
                  '1px solid ' +
                  (p.block === 1
                    ? '#C7D2FE'
                    : p.block === 2
                      ? '#DDD6FE'
                      : p.block === 3
                        ? '#BBF7D0'
                        : '#FDE68A'),
              }}
            >
              W{String(p.wkStart).padStart(2, '0')}–W
              {String(p.wkEnd).padStart(2, '0')}
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
            {p.startDate} → {p.endDate} · {p.weeks}w · {p.days}d
          </div>
          {p.milestone && (
            <div style={{ fontSize: 9, fontWeight: 800, color: p.color }}>
              🏆 {p.milestone}
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
              padding: '2px 9px',
              borderRadius: 14,
              border: `1px solid ${p.color}22`,
              marginBottom: 2,
            }}
          >
            {p.weeks}w
          </div>
          <div style={{ fontSize: 9, color: '#94A3B8' }}>{p.days}d</div>
        </div>

        <span
          style={{
            color: p.color,
            fontSize: 18,
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
            padding: '12px 14px 16px',
          }}
        >
          {/* Python badge if embedded */}
          {hasPy && (
            <div
              style={{
                background: 'linear-gradient(90deg,#DCFCE7,#F0FDF4)',
                border: '1px solid #86EFAC',
                borderRadius: 9,
                padding: '9px 12px',
                marginBottom: 10,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span style={{ fontSize: 20, flexShrink: 0 }}>🐍</span>
              <div>
                <div
                  style={{ fontSize: 11, fontWeight: 800, color: '#047857' }}
                >
                  Python Merged into {p.pythonWeek}
                </div>
                <div
                  style={{ fontSize: 10, color: '#166534', lineHeight: 1.6 }}
                >
                  No standalone Python phase — Python is learned in the context
                  where you will actually use it. This week covers Python{' '}
                  {p.id === 'devops'
                    ? 'scripting for DevOps automation (boto3, subprocess, regex)'
                    : p.id === 'agentic'
                      ? 'foundations (Angela Yu Days 1–30) so you can code LangChain agents immediately after'
                      : 'problem-solving alongside Java (Scott Barrett Java+Python LeetCode course)'}
                  .
                </div>
              </div>
            </div>
          )}

          <div
            style={{
              background: p.color + '0A',
              border: `1px solid ${p.color}22`,
              borderRadius: 9,
              padding: '10px 12px',
              marginBottom: 10,
              fontSize: 12,
              color: '#334155',
              lineHeight: 1.8,
            }}
          >
            {p.summary}
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
                      color: c.startsWith('🐍') ? p.color : p.color,
                      fontSize: 9,
                      flexShrink: 0,
                      marginTop: 2,
                      fontWeight: 700,
                    }}
                  >
                    {c.startsWith('🐍') ? '🐍' : i + 1 + '.'}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      color: c.startsWith('🐍') ? '#047857' : '#374151',
                      lineHeight: 1.6,
                      fontWeight: c.startsWith('🐍') ? 700 : 400,
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
                  marginBottom: 5,
                }}
              >
                ⏰ 6:00 AM–9:00 AM · {p.hours}
              </div>
              <div style={{ display: 'flex', gap: 7, marginBottom: 7 }}>
                {[
                  ['📺', 'Course', p.courseH],
                  ['💻', 'Practice', p.practiceH],
                ].map(([ic, lbl, h]) => (
                  <div
                    key={lbl}
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
                    <div style={{ fontSize: 9, color: '#94A3B8' }}>{lbl}</div>
                  </div>
                ))}
              </div>
              {p.milestone && (
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
                  🏆 {p.milestone}
                </div>
              )}
            </div>
          </div>

          {/* Weekly plan */}
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
              📅 Week-by-Week Plan — {p.weekPlan.length} week
              {p.weekPlan.length > 1 ? 's' : ''}
            </span>
            <span style={{ fontSize: 12, color: p.color }}>
              {wkOpen ? '▲' : '▼'}
            </span>
          </button>

          {wkOpen && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {p.weekPlan.map((wk) => (
                <div
                  key={wk.w}
                  style={{
                    background: '#fff',
                    borderRadius: 8,
                    padding: '9px 11px',
                    border: `1.5px solid ${wk.topics.includes('🐍') || wk.focus.includes('🐍') ? `#86EFAC` : p.color + '18'}`,
                    background:
                      wk.topics.includes('🐍') || wk.focus.includes('🐍')
                        ? '#F0FDF4'
                        : '#fff',
                    display: 'flex',
                    gap: 10,
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 8,
                      background: wk.focus.includes('🐍')
                        ? '#DCFCE7'
                        : p.color + '18',
                      color: wk.focus.includes('🐍') ? '#15803D' : p.color,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{ fontSize: 8, fontWeight: 700, lineHeight: 1 }}
                    >
                      {wk.focus.includes('🐍') ? '🐍' : 'W'}
                    </span>
                    <span
                      style={{ fontSize: 13, fontWeight: 900, lineHeight: 1 }}
                    >
                      {wk.focus.includes('🐍') ? '' : wk.w}
                    </span>
                    {!wk.focus.includes('🐍') && (
                      <span
                        style={{ fontSize: 8, fontWeight: 600, opacity: 0.6 }}
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
                          color: wk.focus.includes('🐍')
                            ? '#047857'
                            : '#0F172A',
                        }}
                      >
                        {wk.focus}
                      </span>
                      {!wk.focus.includes('🐍') && (
                        <span style={{ fontSize: 9, color: '#94A3B8' }}>
                          W{wk.w}
                        </span>
                      )}
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        color: wk.focus.includes('🐍') ? '#166534' : '#64748B',
                        lineHeight: 1.6,
                      }}
                    >
                      {wk.topics}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [open, setOpen] = useState(null);
  const [showMs, setShowMs] = useState(true);
  const dIn = daysSince(),
    cId = curPhaseId(),
    prog = pct(),
    wkNow = curWk();
  const msDone = MILESTONES.filter((m) => m.day <= dIn + 1).length;
  const nextMs = MILESTONES.find((m) => m.day > dIn + 1);
  const toggle = (id) => setOpen(open === id ? null : id);
  const jump = (id) => {
    setOpen(id);
    setTimeout(
      () =>
        document
          .getElementById('p' + id)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
      80,
    );
  };
  const b1 = PHASES.filter((p) => p.block === 1),
    b2 = PHASES.filter((p) => p.block === 2),
    b3 = PHASES.filter((p) => p.block === 3),
    b4 = PHASES.filter((p) => p.block === 4);

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
      {/* HERO */}
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
            maxWidth: 940,
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
                  fontSize: 'clamp(18px,5vw,30px)',
                  fontWeight: 900,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                77 Weeks Coding Journey
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.38)',
                  marginTop: 2,
                }}
              >
                Mon Jun 15, 2026 → Sun Dec 5, 2027 · 539 days · {TOTAL_HOURS}h ·
                6:00 AM–9:00 AM · every phase ends on Sunday
              </div>
            </div>
          </div>

          {/* 4-block summary */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2,1fr)',
              gap: 7,
              marginBottom: 14,
            }}
          >
            {[
              {
                icon: '📚',
                n: 'Block 1',
                t: '1 Year of Code',
                s: 'W01–W50 · Days 1–350',
                d: 'React · RN · Next.js · Spring Boot · Microservices · DevOps',
                col: '#6366F1',
              },
              {
                icon: '🤖',
                n: 'Block 2',
                t: 'Agentic AI using Python',
                s: 'W51–W56 · Days 351–392',
                d: 'GenAI Foundations · LangChain · LangGraph · Ed Donner 8 Projects',
                col: '#7C3AED',
              },
              {
                icon: '💯',
                n: 'Block 3',
                t: 'DSA + System Design',
                s: 'W57–W71 · Days 393–497',
                d: 'Java DSA · System Design courses · Final Review & Mocks',
                col: '#16A34A',
              },
              {
                icon: '🎯',
                n: 'Block 4',
                t: 'Interview Preparation',
                s: 'W72–W77 · Days 498–539',
                d: 'Java · React+RN · Microservices · Python+AI · Mock+Polish',
                col: '#F59E0B',
              },
            ].map(({ icon, n, t, s, d, col }) => (
              <div
                key={n}
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  borderRadius: 10,
                  padding: '10px 10px',
                  border: `1px solid ${col}45`,
                }}
              >
                <div style={{ fontSize: 16, marginBottom: 3 }}>{icon}</div>
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
                    fontSize: 'clamp(10px,2.5vw,12px)',
                    fontWeight: 800,
                    color: '#fff',
                    marginBottom: 2,
                  }}
                >
                  {t}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    color: 'rgba(255,255,255,0.38)',
                    marginBottom: 4,
                  }}
                >
                  {s}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    color: 'rgba(255,255,255,0.32)',
                    lineHeight: 1.5,
                  }}
                >
                  {d}
                </div>
              </div>
            ))}
          </div>

          {/* 77-week bar */}
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
                      dIn + 1 > p.dayEnd
                        ? p.color + '70'
                        : dIn + 1 >= p.dayStart
                          ? p.color
                          : p.color + '38',
                    borderRight: '1px solid rgba(0,0,0,0.1)',
                    transition: 'background 0.3s',
                    position: 'relative',
                  }}
                  onClick={() => jump(p.id)}
                  title={`${p.name} · W${p.wkStart}–W${p.wkEnd}`}
                >
                  {p.pythonWeek && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: '15%',
                        height: '100%',
                        background: 'rgba(52,211,153,0.5)',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 5,
              }}
            >
              {[1, 10, 20, 30, 40, 50, 60, 70, 77].map((w) => (
                <div
                  key={w}
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
                    style={{ fontSize: 8, color: 'rgba(255,255,255,0.38)' }}
                  >
                    W{w}
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
                color: 'rgba(255,255,255,0.28)',
              }}
            >
              <span>Jun 15, 2026 (Mon)</span>
              <span style={{ color: 'rgba(110,231,183,0.7)' }}>
                🐍 = Python merged weeks
              </span>
              <span>Dec 5, 2027 (Sun)</span>
            </div>
          </div>

          {/* Milestones */}
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
              unlocked · every phase ends Sunday
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
                gridTemplateColumns: 'repeat(auto-fill,minmax(230px,1fr))',
                gap: 5,
              }}
            >
              {MILESTONES.map((m, i) => {
                const done = m.day <= dIn + 1,
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
                        W{m.wk} · Day {m.day} · {m.date} (Sun)
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
                      {done ? 'DONE' : isNext ? 'NEXT' : 'W' + m.wk}
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
        style={{ maxWidth: 940, margin: '0 auto', padding: '12px 12px 48px' }}
      >
        {[
          {
            b: 1,
            icon: '📚',
            label: 'BLOCK 1 — 1 Year OF CODE',
            sub: 'Weeks 01–50 · Days 1–350 · Jun 15 2026 → May 30 2027',
            col: '#6366F1',
            phases: b1,
          },
          {
            b: 2,
            icon: '🤖',
            label: 'BLOCK 2 — AGENTIC AI USING PYTHON',
            sub: 'Weeks 51–56 · Days 351–392 · May 31 → Jul 11 2027',
            col: '#7C3AED',
            phases: b2,
          },
          {
            b: 3,
            icon: '💯',
            label: 'BLOCK 3 — DSA + SYSTEM DESIGN',
            sub: 'Weeks 57–71 · Days 393–497 · Jul 12 → Oct 24 2027',
            col: '#16A34A',
            phases: b3,
          },
          {
            b: 4,
            icon: '🎯',
            label: 'BLOCK 4 — INTERVIEW PREPARATION',
            sub: 'Weeks 72–77 · Days 498–539 · Oct 25 → Dec 5 2027 · Last day Sunday',
            col: '#F59E0B',
            phases: b4,
          },
        ].map(({ b, icon, label, sub, col, phases }) => (
          <div key={b}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 9,
                marginTop: b === 1 ? 2 : 18,
              }}
            >
              <div
                style={{
                  height: 2,
                  flex: 1,
                  background: `linear-gradient(90deg,${col},${col}10)`,
                }}
              />
              <div style={{ textAlign: 'center', flexShrink: 0 }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    color: col,
                    letterSpacing: '0.1em',
                  }}
                >
                  {icon} {label}
                </div>
                <div style={{ fontSize: 9, color: '#94A3B8' }}>{sub}</div>
              </div>
              <div
                style={{
                  height: 2,
                  flex: 1,
                  background: `linear-gradient(90deg,${col}10,${col})`,
                }}
              />
            </div>

            {b === 3 && (
              <div
                style={{
                  display: 'flex',
                  gap: 7,
                  flexWrap: 'wrap',
                  marginBottom: 10,
                }}
              >
                {[
                  ['☕', 'Java+Spring', '#16A34A'],
                  ['⚛', 'React+RN', '#0EA5E9'],
                  ['🏛', 'Microservices', '#E11D48'],
                  ['🤖', 'Python+AI', '#7C3AED'],
                  ['🎯', 'Mock', '#F59E0B'],
                ].map(([ic, lbl, c]) => (
                  <span
                    key={lbl}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      background: c + '12',
                      border: `1px solid ${c}30`,
                      borderRadius: 20,
                      padding: '3px 10px',
                    }}
                  >
                    <span style={{ fontSize: 11 }}>{ic}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: c }}>
                      {lbl}
                    </span>
                  </span>
                ))}
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {phases.map((p) => (
                <Card
                  key={p.id}
                  p={p}
                  isOpen={open === p.id}
                  onToggle={() => toggle(p.id)}
                  isCurrent={cId === p.id}
                  isDone={dIn + 1 > p.dayEnd}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Footer */}
        <div
          style={{
            marginTop: 18,
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
            🏆 77 Weeks · Mon Jun 15, 2026 → Sun Dec 5, 2027
          </div>
          <div
            style={{
              fontSize: 11,
              color: 'rgba(255,255,255,0.5)',
              marginBottom: 6,
            }}
          >
            539 days · 1,617 hours · 6:00 AM–9:00 AM · every phase ends Sunday ·
            🐍 Python merged
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
                    fontSize: 9,
                    color: m.color,
                    fontWeight: 700,
                    opacity: m.day <= dIn + 1 ? 1 : 0.38,
                  }}
                >
                  {m.icon} {m.label.split(' ')[0]}
                  {m.label.includes('🐍') || m.label.includes('Python')
                    ? ' 🐍'
                    : ''}
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
