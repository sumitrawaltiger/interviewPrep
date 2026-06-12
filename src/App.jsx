import { useState } from 'react';

// ── 77 WEEKS CODING JOURNEY ───────────────────────────────────────────────────
// Mon Jun 15, 2026 → Sun Dec 5, 2027 · 539 days · 77 weeks · 1,617h
// 6:00 AM – 9:00 AM daily · 3h/day · every phase ends on a Sunday
const START = new Date('2026-06-15');

// ── PHASE DATA ────────────────────────────────────────────────────────────────
// Every phase is N full weeks (multiples of 7 days)
// Every endDate is a Sunday — verified mathematically
const PHASES = [
  // ══ BLOCK 1 · 400 DAYS OF CODE · 57 weeks ══════════════════════════════════
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
    blockLabel: 'Block 1 · 400 Days of Code',
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
      '13 weeks · 91 days · 6 courses. Jonas primary, Max second angle, Smilga projects. Build FPO Flight Status dashboard incrementally each week.',
    courses: [
      'Jonas Schmedtmann — The Ultimate React Course 2025 (84h)',
      'Max Schwarzmüller — React The Complete Guide 2025 (55h)',
      'John Smilga — React Tutorial & Projects Course (25h)',
      'Hindi Instructor — React Interview Masterclass 200 Q (11h)',
    ],
    weekPlan: [
      {
        w: 1,
        focus: 'Setup + Big Picture',
        topics:
          'Vite setup, JSX, components, props — code along every example in VSCode',
      },
      {
        w: 2,
        focus: 'State & Events',
        topics:
          'useState, event handlers, forms, controlled inputs — build a counter + todo app',
      },
      {
        w: 3,
        focus: 'Effects & Data',
        topics:
          'useEffect, fetch API, async/await — pull mock flight data from a fake API',
      },
      {
        w: 4,
        focus: 'React Router',
        topics:
          'Client-side routing, nested routes, dynamic params — FPO multi-page app',
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
          'Tailwind utility classes, dark mode, responsive — restyle the FPO dashboard',
      },
      {
        w: 11,
        focus: 'Testing',
        topics:
          'React Testing Library, @testing-library/jest-dom, mock service worker',
      },
      {
        w: 12,
        focus: 'Advanced Patterns',
        topics:
          'Compound components, render props, custom hooks library — portfolio hooks',
      },
      {
        w: 13,
        focus: 'Revision + Polish',
        topics:
          'Re-read all notes cold. Build final FPO Flight Status app from scratch. Interview Q&A drill.',
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
    blockLabel: 'Block 1 · 400 Days of Code',
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
      '4 weeks · 28 days · 2 courses. Run every exercise on your real iPad via Expo Go. Build FPO-style flight list app with navigation.',
    courses: [
      'Stephen Grider — The Complete React Native + Hooks Course 4.8★ (38h)',
      'Max Schwarzmüller — React Native The Practical Guide 2025 (14h)',
    ],
    weekPlan: [
      {
        w: 14,
        focus: 'Core Components',
        topics:
          'View, Text, Image, StyleSheet, Flexbox, FlatList — reproduce Grider exercises on iPad',
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
          'Animations, platform differences (iOS vs Android), EAS Build, TestFlight submit',
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
    blockLabel: 'Block 1 · 400 Days of Code',
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
        topics:
          'RSC vs Client Components, data fetching patterns, streaming, Suspense',
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
          'Vercel deploy, env vars, Edge runtime — build FPO web portal as capstone',
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
    blockLabel: 'Block 1 · MAX ⭐ · 400 Days',
    weeks: 14,
    days: 98,
    dayStart: 155,
    dayEnd: 252,
    wkStart: 23,
    wkEnd: 36,
    startDate: 'Nov 16, 2026',
    endDate: 'Feb 21, 2027',
    hours: '~294h',
    courseH: '185h',
    practiceH: '109h',
    milestone: '🌱 Spring Boot Complete',
    summary:
      '14 weeks — MAX TIME · 98 days · 5 courses. Java 8 fast-track, JPA/Hibernate deep, Spring Security with Cognito OAuth2. Map every concept to FPO: Bean=Lambda, JPA=DynamoDB.',
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
          'Lambdas, Streams API, Optional, CompletableFuture, Method references — you know C#, this is fast',
      },
      {
        w: 24,
        focus: 'JPA Foundations',
        topics:
          '@Entity, @Id, relationships (@OneToMany, @ManyToOne), EntityManager lifecycle',
      },
      {
        w: 25,
        focus: 'Spring Data JPA',
        topics:
          'JpaRepository, JPQL, @Query, Pageable, Specifications, @Transactional',
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
          'Auto-configuration, @SpringBootApplication, starter POMs, Actuator, profiles',
      },
      {
        w: 28,
        focus: 'REST APIs',
        topics:
          '@RestController, @RequestMapping, ResponseEntity, @ExceptionHandler, OpenAPI',
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
          'Bean lifecycle, @Conditional, @Primary, @Qualifier, AOP, @Transactional propagation',
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
          'Spring Boot API + React frontend — connect your Week 1–13 React app to Spring',
      },
      {
        w: 35,
        focus: 'Spring Boot 4 Preview',
        topics:
          'Spring Boot 4 / Spring 7 new features, GraalVM native image, virtual threads',
      },
      {
        w: 36,
        focus: 'Revision + Polish',
        topics:
          'Re-build REST API + JWT auth from scratch cold. 200 Spring interview Q&A drill.',
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
    blockLabel: 'Block 1 · MAX ⭐ · 400 Days',
    weeks: 7,
    days: 49,
    dayStart: 253,
    dayEnd: 301,
    wkStart: 37,
    wkEnd: 43,
    startDate: 'Feb 22, 2027',
    endDate: 'Apr 11, 2027',
    hours: '~147h',
    courseH: '90h',
    practiceH: '57h',
    milestone: '🏛 Microservices Complete',
    summary:
      '7 weeks — MAX TIME · 49 days · 4 courses. Kafka, CQRS, Event Sourcing, Saga, K8s, Circuit Breaker. Every pattern maps to your FPO Cloud architecture.',
    courses: [
      'Ranga Karanam — Java Spring Boot Microservices with K8s & Docker (35h)',
      'Sergey Kargopolov — Building Microservices with Spring Cloud (30h)',
      'John Thompson — Spring Boot Microservices Beginner to Guru (15h)',
      'Sean Campbell — Master Spring Boot Microservices CQRS & Event Sourcing (10h)',
    ],
    weekPlan: [
      {
        w: 37,
        focus: 'Service Decomposition',
        topics:
          'DDD bounded contexts, service boundaries, inter-service communication REST vs events',
      },
      {
        w: 38,
        focus: 'Spring Cloud',
        topics:
          'Eureka service discovery, Spring Cloud Gateway, config server, Feign clients',
      },
      {
        w: 39,
        focus: 'Resilience Patterns',
        topics:
          'Resilience4j circuit breaker, retry, bulkhead, rate limiter — your FPO uses this!',
      },
      {
        w: 40,
        focus: 'Kafka Deep Dive',
        topics:
          'Producer, consumer, consumer groups, partitions, offsets — relate to FPO EventBridge',
      },
      {
        w: 41,
        focus: 'CQRS + Event Sourcing',
        topics:
          'Separate read/write models, Axon Framework, event store, replay — FPO event sourcing',
      },
      {
        w: 42,
        focus: 'Saga Pattern',
        topics:
          'Orchestration vs choreography, compensating transactions — your Step Functions = Saga!',
      },
      {
        w: 43,
        focus: 'K8s + Revision',
        topics:
          'Deploy microservices to K8s, Ingress, ConfigMaps, Secrets. Write 1 Architecture Decision Record.',
      },
    ],
  },
  {
    id: 'python',
    block: 1,
    seq: 6,
    icon: '🐍',
    color: '#059669',
    dark: '#047857',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    name: 'Python',
    blockLabel: 'Block 1 · 400 Days of Code',
    weeks: 4,
    days: 28,
    dayStart: 302,
    dayEnd: 329,
    wkStart: 44,
    wkEnd: 47,
    startDate: 'Apr 12, 2027',
    endDate: 'May 9, 2027',
    hours: '~84h',
    courseH: '47h',
    practiceH: '37h',
    milestone: '🐍 Python Complete',
    summary:
      '4 weeks · 28 days · 4 courses. Core Python + DevOps automation scripting. Foundation for Agentic AI. Write boto3 scripts, parse CloudWatch logs, automate FPO reports.',
    courses: [
      'Dr. Angela Yu — 100 Days of Code Python Bootcamp Days 1–55 (22h)',
      'Al Sweigart — Automate the Boring Stuff with Python (9h)',
      'Ardit Sulce — Python Mega Course Build 10 Apps (9h)',
      'Jose Portilla — Complete Python Bootcamp DevOps focus (7h)',
    ],
    weekPlan: [
      {
        w: 44,
        focus: 'Python Core',
        topics:
          'Variables, lists, dicts, tuples, OOP, exceptions, file I/O — Angela Yu Days 1–30',
      },
      {
        w: 45,
        focus: 'Python Advanced',
        topics:
          'Decorators, generators, context managers, async/await, type hints — Days 31–55',
      },
      {
        w: 46,
        focus: 'Automation Scripts',
        topics:
          'boto3 FPO Lambda lister, CloudWatch log parser, subprocess, regex, scheduling',
      },
      {
        w: 47,
        focus: '10 Real Apps',
        topics:
          'Ardit Sulce 10 apps + Portilla DevOps scripts. Write 1 Python tool for your FPO team.',
      },
    ],
  },
  {
    id: 'devops',
    block: 1,
    seq: 7,
    icon: '⚙',
    color: '#EA580C',
    dark: '#C2410C',
    bg: '#FFF7ED',
    border: '#FED7AA',
    name: 'DevOps',
    blockLabel: 'Block 1 · Day 364 🏁',
    weeks: 5,
    days: 35,
    dayStart: 330,
    dayEnd: 364,
    wkStart: 48,
    wkEnd: 52,
    startDate: 'May 10, 2027',
    endDate: 'Jun 13, 2027',
    hours: '~105h',
    courseH: '72h',
    practiceH: '33h',
    milestone: '⚙ DevOps Complete · Day 364',
    summary:
      '5 weeks · 35 days · 4 courses. Day 364 is the last day (Sunday Jun 13). Nana Janashia #1 globally, KodeKloud interactive labs, Terraform IaC.',
    courses: [
      'Nana Janashia TechWorld with Nana — DevOps Bootcamp (35h)',
      'Mumshad Mannambeth KodeKloud — The Complete DevOps Bootcamp (20h)',
      'Anil Dollor — Mastering DevOps Hindi (8h)',
      'Mumshad Mannambeth — Terraform for Absolute Beginners with Labs (9h)',
    ],
    weekPlan: [
      {
        w: 48,
        focus: 'Linux + Docker',
        topics:
          'Linux essentials, Docker images, containers, volumes, docker-compose — KodeKloud labs',
      },
      {
        w: 49,
        focus: 'Kubernetes',
        topics:
          'Pods, Deployments, Services, Ingress, ConfigMaps, Secrets, K8s on AWS EKS',
      },
      {
        w: 50,
        focus: 'CI/CD Pipelines',
        topics:
          'GitHub Actions workflows, OIDC keyless AWS auth, TeamCity comparison for FPO',
      },
      {
        w: 51,
        focus: 'Terraform IaC',
        topics:
          'HCL syntax, resources, state, modules — provision one FPO AWS resource with Terraform',
      },
      {
        w: 52,
        focus: 'Monitoring + Polish',
        topics:
          'Prometheus, Grafana, CloudWatch, Datadog (you use it!) — Week 52 = end of core plan',
      },
    ],
  },
  {
    id: 'agentic',
    block: 1,
    seq: 8,
    icon: '🤖',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'Agentic AI',
    blockLabel: 'Block 1 · Bonus 5 Weeks',
    weeks: 5,
    days: 35,
    dayStart: 365,
    dayEnd: 399,
    wkStart: 53,
    wkEnd: 57,
    startDate: 'Jun 14, 2027',
    endDate: 'Jul 18, 2027',
    hours: '~105h',
    courseH: '74h',
    practiceH: '31h',
    milestone: '🤖 Agentic AI Complete · Day 399',
    summary:
      '5 bonus weeks · 35 days · 3 courses. LangChain, LangGraph, Ed Donner 8 real projects (Career Digital Twin, Deep Research, SDR Agent, Engineering Team in Docker). Build FPO AI assistant.',
    courses: [
      'Dr. Frank Kane — ChatGPT + Generative AI Masterclass 2026 (22h)',
      'Ed Donner — Complete Agentic AI Engineering Course 2026 (30h)',
      'Eden Marco — LangChain Develop LLM Powered Applications (22h)',
    ],
    weekPlan: [
      {
        w: 53,
        focus: 'GenAI Foundations',
        topics:
          'LLMs, embeddings, RAG, prompt engineering (CoT, ReAct), AWS Bedrock — Frank Kane',
      },
      {
        w: 54,
        focus: 'LangChain Core',
        topics:
          'Chains, agents, tools, memory, LCEL, vector databases (Pinecone, FAISS) — Eden Marco',
      },
      {
        w: 55,
        focus: 'LangGraph + Agents',
        topics:
          'State machines, conditional edges, multi-agent orchestration, ReAct + Reflection',
      },
      {
        w: 56,
        focus: 'Ed Donner Projects',
        topics:
          'Career Digital Twin, Deep Research agent, SDR Agent, Engineering Team in Docker',
      },
      {
        w: 57,
        focus: 'FPO AI + Polish',
        topics:
          'Build FPO AI Assistant: natural language query over flight data. Deploy to Lambda.',
      },
    ],
  },
  // ══ BLOCK 2 · 100 DAYS DSA + SYSTEM DESIGN · 14 weeks ═══════════════════════
  {
    id: 'dsa',
    block: 2,
    seq: 9,
    icon: '🧩',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Java DSA',
    blockLabel: 'Block 2 · 100 Days',
    weeks: 6,
    days: 42,
    dayStart: 400,
    dayEnd: 441,
    wkStart: 58,
    wkEnd: 63,
    startDate: 'Jul 19, 2027',
    endDate: 'Aug 29, 2027',
    hours: '~126h',
    courseH: '99h',
    practiceH: '27h',
    milestone: '🧩 Java DSA Complete',
    summary:
      '6 weeks · 42 days · 5 Java-only DSA courses. Full 3h daily on Udemy + code along. Course days + revision days. No separate LeetCode slot in the 3h block.',
    courses: [
      'Andrei Neagoie ZTM — Master the Coding Interview DS + Algorithms (20h) · W58–W60',
      'Scott Barrett 4.8★ — Java DS & Algorithms + LeetCode (10h) · W60–W61',
      'Tim Buchalka 112K — DS & Algorithms Deep Dive Using Java (16h) · W61–W62',
      'Elshad Karimov — Java DS & Algorithms Masterclass 45h (45h) · W62–W65',
      'Andrei Neagoie ZTM — Master Coding Interview Big Tech FAANG (8h) · W65',
    ],
    weekPlan: [
      {
        w: 58,
        focus: 'Big O + Arrays + Hash',
        topics:
          'Big O analysis, Two Pointers, Sliding Window, Hash Map patterns — all in Java',
      },
      {
        w: 59,
        focus: 'Linked Lists + Stacks',
        topics:
          "Singly/Doubly LL, Floyd's cycle detection, Monotonic Stack, Deque — Java impl",
      },
      {
        w: 60,
        focus: 'Trees + BST',
        topics:
          'DFS preorder/inorder/postorder, BFS level-order, BST insert/delete/validate in Java',
      },
      {
        w: 61,
        focus: 'Heaps + Graphs',
        topics:
          'Java PriorityQueue, Top-K patterns, BFS/DFS on graphs, topological sort',
      },
      {
        w: 62,
        focus: 'DP + Backtracking',
        topics:
          '1D DP (coin change, house robber), 2D DP, backtracking N-Queens — Java solutions',
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
    block: 2,
    seq: 10,
    icon: '🏗',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'System Design',
    blockLabel: 'Block 2 · 100 Days',
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
      '4 weeks · 28 days · 5 courses. Language-agnostic. Design 1 system from scratch each day. FPO IS a system design answer — multi-tenant SaaS, Lambda microservices, DynamoDB at scale.',
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
        focus: 'SD Framework + Arch',
        topics:
          'Frank Kane 5-step template. CQRS, Event Sourcing, Saga, API Gateway — maps to FPO',
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
        focus: 'Advanced + FPO',
        topics:
          'Payment System, FPO Flight Optimiser (your system!), Distributed Cache, Leaderboard',
      },
    ],
  },
  {
    id: 'review',
    block: 2,
    seq: 11,
    icon: '🏁',
    color: '#F59E0B',
    dark: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'DSA + SD Review',
    blockLabel: 'Block 2 · Final Review',
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
      'Week 68: DSA Revision — rebuild Heap, Dijkstra, Trie, AVL Tree, LRU Cache in Java cold',
      'Week 69: System Design mocks — 7 designs spoken 45 min each, paper first',
      'Week 70: Pramp.com peer mocks — 4 sessions + interviewing.io — record yourself once',
      'Week 71: Weak-spot drill + Resume polish + FPO 90-sec pitch rehearsal cold',
    ],
    weekPlan: [
      {
        w: 68,
        focus: 'DSA Revision',
        topics:
          'Rebuild 5 Java data structures cold: Heap, Graph+Dijkstra, Trie, AVL Tree, LRU Cache',
      },
      {
        w: 69,
        focus: 'System Design Mocks',
        topics:
          'Twitter, Netflix, Uber, FPO, Payment System — 45 min each, spoken, paper diagram first',
      },
      {
        w: 70,
        focus: 'Pramp Peer Mocks',
        topics:
          '4 Pramp sessions + 1 interviewing.io session. Record yourself, watch for filler words.',
      },
      {
        w: 71,
        focus: 'Final Polish',
        topics:
          'Resume quantified bullet points. LinkedIn headline. FPO pitch 90 sec rehearsed cold.',
      },
    ],
  },
  // ══ BLOCK 3 · INTERVIEW PREPARATION · 6 weeks ════════════════════════════════
  {
    id: 'int_java',
    block: 3,
    seq: 12,
    icon: '☕',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'Java + Spring Interview',
    blockLabel: 'Block 3 · Interview Prep',
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
      '2 weeks · 14 days · 3 courses · 600+ Java+Spring interview Q&A. Write every code answer from memory. 30 questions per morning as warm-up.',
    courses: [
      'Ranga Karanam in28minutes — Java Programming Interview Guide 200+ Q&A 4.5★ 80K students (10h) · W72',
      'Ranga Karanam in28minutes — Spring & Spring Boot Interview Guide 200+ Q&A 4.5★ 60K students (10h) · W72–W73',
      'Happy Rawat — Java Interview Masterclass 350 Questions 2026 +PDF 4.6★ 3K students (13h) · W73',
    ],
    weekPlan: [
      {
        w: 72,
        focus: 'Java + Spring 400 Q',
        topics:
          'Java 200 Q&A then Spring 200 Q&A — OOP, Streams, Collections, IoC, JPA, AOP, @Transactional',
      },
      {
        w: 73,
        focus: 'Java 350 Masterclass',
        topics:
          'Happy Rawat 350 Q — Core Java, Multithreading, Design Patterns, Spring Security, Microservices',
      },
    ],
  },
  {
    id: 'int_react',
    block: 3,
    seq: 13,
    icon: '⚛',
    color: '#0EA5E9',
    dark: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    name: 'React + RN Interview',
    blockLabel: 'Block 3 · Interview Prep',
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
      'Happy Rawat — React Interview Masterclass 200 Q&A +PDF 2026 4.7★ 2.5K students (7h)',
      'Ariel Weinberger — React Interview Questions Coding 2026 TypeScript 4.6★ 8K students (8h)',
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
    block: 3,
    seq: 14,
    icon: '🏛',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECDD3',
    name: 'Microservices Interview',
    blockLabel: 'Block 3 · Interview Prep',
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
      "1 week · 7 days · Chad Darby's comprehensive Java+Spring Boot+Microservices+DevOps+Cloud interview course — full-picture Q&A including Docker, K8s, CI/CD, AWS.",
    courses: [
      'Chad Darby — Java Interview Help: Java Spring Boot Microservices DevOps Cloud 4.6★ 30K students (18h)',
    ],
    weekPlan: [
      {
        w: 75,
        focus: 'Microservices Full',
        topics:
          'Kafka, Circuit Breaker, Saga, CQRS, K8s, Docker, AWS, CI/CD — all Q&A coded on whiteboard',
      },
    ],
  },
  {
    id: 'int_python',
    block: 3,
    seq: 15,
    icon: '🤖',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'Python + AI Interview',
    blockLabel: 'Block 3 · Interview Prep',
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
    block: 3,
    seq: 16,
    icon: '🎯',
    color: '#F59E0B',
    dark: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'Mock + Final Polish',
    blockLabel: 'Block 3 · Week 77 · FINAL',
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
    milestone: '🎯 Interview Prep Complete · Day 539 · Week 77',
    summary:
      'Final week · 7 days. Non-technical interview mastery Mon–Thu, then 3 days of pure mock interview simulation. Last day is Sunday Dec 5, 2027 — end of 77 weeks.',
    courses: [
      'Andrei Neagoie ZTM — Master the Coding Interview Non-Technical Resume+Salary+STAR 4.7★ 60K students (10h) · Nov 29–Dec 2',
      'Dec 3 (Wed): Full mock — coding + system design + behavioural · Pramp session',
      'Dec 4 (Thu): Full mock — cold system design FPO + salary negotiation role-play',
      'Dec 5 (Fri): Final day — FPO 90-sec pitch rehearsed · LinkedIn + Resume final · You are ready',
    ],
    weekPlan: [
      {
        w: 77,
        focus: 'Non-Tech + Full Mocks',
        topics:
          'Resume, salary, STAR stories from FPO. Then 3 cold mocks. Dec 5 = 77 weeks = DONE.',
      },
    ],
  },
];

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
    day: 252,
    wk: 36,
    date: 'Feb 21, 2027',
    icon: '🌱',
    label: 'Spring Boot Complete',
    color: '#16A34A',
  },
  {
    day: 301,
    wk: 43,
    date: 'Apr 11, 2027',
    icon: '🏛',
    label: 'Microservices Complete',
    color: '#E11D48',
  },
  {
    day: 329,
    wk: 47,
    date: 'May 9, 2027',
    icon: '🐍',
    label: 'Python Complete',
    color: '#059669',
  },
  {
    day: 364,
    wk: 52,
    date: 'Jun 13, 2027',
    icon: '⚙',
    label: 'DevOps Complete · Day 364',
    color: '#EA580C',
  },
  {
    day: 399,
    wk: 57,
    date: 'Jul 18, 2027',
    icon: '🤖',
    label: 'Agentic AI Complete · D399',
    color: '#7C3AED',
  },
  {
    day: 441,
    wk: 63,
    date: 'Aug 29, 2027',
    icon: '🧩',
    label: 'Java DSA Complete',
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
function curId() {
  const d = daysSince() + 1;
  for (const p of PHASES) if (d <= p.dayEnd) return p.id;
  return null;
}
function progPct() {
  return Math.min(100, Math.round((daysSince() / TOTAL_DAYS) * 100));
}
function curWeek() {
  return Math.min(TOTAL_WEEKS, Math.floor(daysSince() / 7) + 1);
}

function Card({ p, isOpen, onToggle, isCurrent, isDone }) {
  const [showWks, setShowWks] = useState(false);
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
                      ? '#F0FDF4'
                      : '#FFFBEB',
                color:
                  p.block === 1
                    ? '#4338CA'
                    : p.block === 2
                      ? '#15803D'
                      : '#D97706',
                border:
                  '1px solid ' +
                  (p.block === 1
                    ? '#C7D2FE'
                    : p.block === 2
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

      {isOpen && (
        <div
          style={{
            borderTop: `2px solid ${p.color}18`,
            padding: '12px 14px 16px',
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
                      color: p.color,
                      fontSize: 9,
                      flexShrink: 0,
                      marginTop: 2,
                      fontWeight: 700,
                    }}
                  >
                    {i + 1}.
                  </span>
                  <span
                    style={{ fontSize: 10, color: '#374151', lineHeight: 1.6 }}
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
              <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
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
                      padding: '6px 8px',
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

          {/* Weekly plan accordion */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowWks(!showWks);
            }}
            style={{
              width: '100%',
              background: 'rgba(0,0,0,0.03)',
              border: `1px solid ${p.color}25`,
              borderRadius: 8,
              padding: '8px 12px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: showWks ? 8 : 0,
            }}
          >
            <span style={{ fontSize: 10, fontWeight: 700, color: p.color }}>
              📅 Week-by-Week Plan ({p.weekPlan.length} weeks){' '}
              {showWks ? '▲' : '▼'}
            </span>
            <span style={{ fontSize: 9, color: '#94A3B8' }}>
              tap to {showWks ? 'hide' : 'expand'}
            </span>
          </button>

          {showWks && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {p.weekPlan.map((wk) => (
                <div
                  key={wk.w}
                  style={{
                    background: '#fff',
                    borderRadius: 8,
                    padding: '9px 11px',
                    border: `1px solid ${p.color}20`,
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
                      background: p.color + '18',
                      color: p.color,
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
                      W
                    </span>
                    <span
                      style={{ fontSize: 13, fontWeight: 900, lineHeight: 1 }}
                    >
                      {wk.w}
                    </span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: '#0F172A',
                        marginBottom: 2,
                      }}
                    >
                      {wk.focus}
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        color: '#64748B',
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

export default function App() {
  const [open, setOpen] = useState(null);
  const [showMs, setShowMs] = useState(true);
  const dIn = daysSince(),
    cId = curId(),
    prog = progPct(),
    wkNow = curWeek();
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
    b3 = PHASES.filter((p) => p.block === 3);

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

          {/* 3-block summary */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 7,
              marginBottom: 14,
            }}
          >
            {[
              {
                icon: '📚',
                n: 'Block 1',
                t: '400 Days of Code',
                s: 'W01–W57 · Days 1–399',
                d: 'React · RN · Next.js · Spring Boot · Microservices · Python · DevOps · Agentic AI',
                col: '#6366F1',
              },
              {
                icon: '💯',
                n: 'Block 2',
                t: '100 Days DSA + SD',
                s: 'W58–W71 · Days 400–497',
                d: 'Java DSA · System Design · Final Review & Mocks',
                col: '#16A34A',
              },
              {
                icon: '🎯',
                n: 'Block 3',
                t: 'Interview Prep',
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
              ['W' + wkNow + ' / W77', 'Current Week'],
              ['Day ' + Math.min(dIn + 1, 539) + ' / 539', 'Current Day'],
              [prog + '%', 'Complete'],
              ['3h/day', '6AM–9AM'],
              [msDone + ' / 11', 'Milestones'],
              [nextMs ? nextMs.label.split(' ')[0] + '…' : '🏆 Done', 'Next'],
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
                    fontSize: 'clamp(10px,3vw,13px)',
                    fontWeight: 900,
                    color: '#fff',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
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
                          : p.color + '35',
                    borderRight: '1px solid rgba(0,0,0,0.1)',
                    transition: 'background 0.3s',
                  }}
                  onClick={() => jump(p.id)}
                  title={`${p.name} · W${p.wkStart}–W${p.wkEnd}`}
                />
              ))}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 5,
                position: 'relative',
              }}
            >
              {[0, 10, 20, 30, 40, 50, 60, 70, 77].map((w) => (
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
                    W{w || 1}
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
              <span>Jun 15, 2026</span>
              <span>Dec 5, 2027</span>
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
                        W{m.wk} · Day {m.day} · {m.date}
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
            label: 'BLOCK 1 — 400 DAYS OF CODE',
            sub: 'Weeks 01–57 · Days 1–399 · Jun 15 2026 → Jul 18 2027 · 8 skills',
            col: '#6366F1',
            phases: b1,
          },
          {
            b: 2,
            icon: '💯',
            label: 'BLOCK 2 — 100 DAYS DSA + SYSTEM DESIGN',
            sub: 'Weeks 58–71 · Days 400–497 · Jul 19 → Oct 24 2027 · Java DSA + SD + Review',
            col: '#16A34A',
            phases: b2,
          },
          {
            b: 3,
            icon: '🎯',
            label: 'BLOCK 3 — INTERVIEW PREPARATION',
            sub: 'Weeks 72–77 · Days 498–539 · Oct 25 → Dec 5 2027 · 5 Role Tracks',
            col: '#F59E0B',
            phases: b3,
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
              marginBottom: 10,
            }}
          >
            539 days · 1,617 hours · 6:00 AM–9:00 AM · every phase ends on
            Sunday
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
