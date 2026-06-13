import { useState } from 'react';

// ── 540 DAYS · Sun Jun 14, 2026 → Sun Dec 5, 2027 ────────────────────────────
// 6:00 AM – 9:00 AM · 3h/day · 1,620h total
// Block 1: 365 days (1 Year Full Stack) · Block 2: 175 days (25 weeks, 5×5)
// Every phase ends on Sunday
const START = new Date('2026-06-14');

const PHASES = [
  // ══ BLOCK 1 — 1 YEAR OF FULL STACK · 365 days ════════════════════════════
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
    blockLabel: 'Block 1 · 1 Year of Full Stack',
    days: 92,
    dayStart: 1,
    dayEnd: 92,
    startDate: 'Jun 14, 2026',
    endDate: 'Sep 13, 2026',
    hours: '~276h',
    courseH: '116.5h',
    practiceH: '159.5h',
    milestone: '⚛ React Complete · Day 92',
    summary:
      '92 days · 3 courses. John Smilga first (50.5h, 25+ real projects), Max second angle (TypeScript, testing, Redux), Hindi interview Q&A final week.',
    courses: [
      'John Smilga — React Tutorial & Projects Course 2025 (50.5h) ★ START HERE — 25+ real projects',
      'Max Schwarzmüller — React The Complete Guide 2025 (55h) — TypeScript, testing, Redux Toolkit',
      'Hindi Instructor — React Interview Masterclass 200 Q (11h) — final week interview drill',
    ],
    weekPlan: [
      {
        w: 1,
        focus: 'Smilga: Setup + JSX',
        topics:
          'Vite, JSX, props, component patterns — 25+ projects begin, code along in VSCode',
      },
      {
        w: 2,
        focus: 'Smilga: State + Events',
        topics:
          'useState, event handlers, forms — Person List, City Tours, Todo projects',
      },
      {
        w: 3,
        focus: 'Smilga: Hooks + Data',
        topics:
          'useEffect, fetch API, async/await — Food Recipe project, Beachwalk Resort',
      },
      {
        w: 4,
        focus: 'Smilga: React Router',
        topics:
          'React Router v6, nested routes, dynamic params — Tech Store E-commerce project',
      },
      {
        w: 5,
        focus: 'Smilga: Context + Hooks',
        topics:
          'createContext, useContext, custom hooks, useReducer — Budget Calculator project',
      },
      {
        w: 6,
        focus: 'Smilga: React Query',
        topics:
          'useQuery, useMutation, caching, background refetch — Axios integration project',
      },
      {
        w: 7,
        focus: 'Smilga: Redux Toolkit',
        topics:
          'createSlice, configureStore, RTK Query — full e-commerce state management',
      },
      {
        w: 8,
        focus: 'Smilga: TS + Tailwind',
        topics:
          'TypeScript in React, Tailwind CSS — Smilga final projects. 50.5h course complete.',
      },
      {
        w: 9,
        focus: 'Max: TypeScript Deep',
        topics:
          'Generic components, utility types (Pick/Omit/Partial), typed hooks, strict TS',
      },
      {
        w: 10,
        focus: 'Max: Performance+Testing',
        topics:
          'useMemo, useCallback, React.memo, lazy/Suspense, React Testing Library',
      },
      {
        w: 11,
        focus: 'Max: Advanced Patterns',
        topics:
          'Compound components, render props, forwardRef, HOC, custom hooks library',
      },
      {
        w: 12,
        focus: 'Max: Redux + Next.js',
        topics:
          'Redux Toolkit deep, RTK Query advanced, Next.js intro, deployment',
      },
      {
        w: 13,
        focus: 'Hindi 200 Q&A + Revision',
        topics:
          'Hindi 200 React Q&A. Rebuild FPO Flight Status app cold. Day 92 ✅',
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
    blockLabel: 'Block 1 · 1 Year of Full Stack',
    days: 28,
    dayStart: 93,
    dayEnd: 120,
    startDate: 'Sep 14, 2026',
    endDate: 'Oct 11, 2026',
    hours: '~84h',
    courseH: '52h',
    practiceH: '32h',
    milestone: '📱 React Native Complete · Day 120',
    summary:
      '28 days · 4 weeks · 2 courses. Run every exercise on your real iPad via Expo Go. Build FPO-style flight list app with React Navigation.',
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
        topics: 'Animations, iOS vs Android, EAS Build, TestFlight submit',
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
    blockLabel: 'Block 1 · 1 Year of Full Stack',
    days: 35,
    dayStart: 121,
    dayEnd: 155,
    startDate: 'Oct 12, 2026',
    endDate: 'Nov 15, 2026',
    hours: '~105h',
    courseH: '65h',
    practiceH: '40h',
    milestone: '▲ Next.js Complete · Day 155',
    summary:
      '35 days · 5 weeks · 3 courses. App Router, Server Components, Server Actions, NextAuth v5, Prisma. Deploy to Vercel after every chapter.',
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
        topics: 'Vercel deploy, env vars — build FPO web portal as capstone',
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
    blockLabel: 'Block 1 · MAX ⭐ · 1 Year Full Stack',
    days: 105,
    dayStart: 156,
    dayEnd: 260,
    startDate: 'Nov 16, 2026',
    endDate: 'Feb 28, 2027',
    hours: '~315h',
    courseH: '185h',
    practiceH: '130h',
    milestone: '🌱 Spring Boot Complete · Day 260',
    summary:
      '105 days · 15 weeks · 5 courses. Java 8 fast-track, JPA/Hibernate deep, Spring Security with Cognito OAuth2. Every concept maps to FPO: Bean=Lambda, JPA=DynamoDB.',
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
          'Lambdas, Streams, Optional, CompletableFuture — fast using C# background',
      },
      {
        w: 24,
        focus: 'JPA Foundations',
        topics: '@Entity, @Id, relationships, EntityManager lifecycle',
      },
      {
        w: 25,
        focus: 'Spring Data JPA',
        topics: 'JpaRepository, JPQL, @Query, Pageable, @Transactional',
      },
      {
        w: 26,
        focus: 'N+1 & Performance',
        topics: 'N+1 problem, @EntityGraph, JOIN FETCH, lazy vs eager',
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
        topics: 'Bean lifecycle, AOP, @Transactional propagation, @Conditional',
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
        topics: 'Dockerfile for Spring Boot, multi-stage build, docker-compose',
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
          'Spring Boot 4, GraalVM native image, virtual threads (Project Loom)',
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
    blockLabel: 'Block 1 · MAX ⭐ · 1 Year Full Stack',
    days: 56,
    dayStart: 261,
    dayEnd: 316,
    startDate: 'Mar 1, 2027',
    endDate: 'Apr 25, 2027',
    hours: '~168h',
    courseH: '90h',
    practiceH: '78h',
    milestone: '🏛 Microservices Complete · Day 316',
    summary:
      '56 days · 8 weeks · 4 courses. Kafka, CQRS, Event Sourcing, Saga, K8s, Circuit Breaker. Every pattern maps to FPO Cloud: EventBridge→Kafka, Step Functions→Saga.',
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
          'Producer, consumer, groups, partitions — relate to FPO EventBridge',
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
        topics: 'Orchestration vs choreography — Step Functions = Saga!',
      },
      {
        w: 44,
        focus: 'K8s Deployment',
        topics: 'Deploy microservices to K8s, Ingress, ConfigMaps, Secrets',
      },
      {
        w: 45,
        focus: 'Revision + ADR',
        topics:
          'Rebuild one microservice from scratch. Write 1 Architecture Decision Record.',
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
    blockLabel: 'Block 1 · Day 365 🏁 · 1 Year Full Stack',
    days: 49,
    dayStart: 317,
    dayEnd: 365,
    startDate: 'Apr 26, 2027',
    endDate: 'Jun 13, 2027',
    hours: '~147h',
    courseH: '79h',
    practiceH: '68h',
    milestone: '⚙ DevOps Complete · Day 365 · 1 Year of Full Stack 🎉',
    pythonWeek: 'W52',
    summary:
      '49 days · 7 weeks. DevOps courses (W46–W51) + Python automation scripting in W52. Day 365 = Sunday Jun 13, 2027 — 1 full year of Full Stack complete.',
    courses: [
      'Nana Janashia TechWorld — DevOps Bootcamp (35h) · W46–W49',
      'Mumshad Mannambeth KodeKloud — The Complete DevOps Bootcamp (20h) · W49–W50',
      'Anil Dollor — Mastering DevOps Hindi (8h) · W50',
      'Mumshad Mannambeth — Terraform for Absolute Beginners with Labs (9h) · W51',
      '🐍 Al Sweigart — Automate the Boring Stuff with Python (9h) · W52 — Python for DevOps',
    ],
    weekPlan: [
      {
        w: 46,
        focus: 'Linux + Docker',
        topics:
          'Linux essentials, Docker images, containers, volumes, docker-compose — KodeKloud labs',
      },
      {
        w: 47,
        focus: 'Kubernetes',
        topics:
          'Pods, Deployments, Services, Ingress, ConfigMaps, Secrets, AWS EKS',
      },
      {
        w: 48,
        focus: 'CI/CD Pipelines',
        topics:
          'GitHub Actions workflows, OIDC keyless AWS auth, build/test/deploy pipelines',
      },
      {
        w: 49,
        focus: 'Terraform IaC',
        topics:
          'HCL, resources, state, modules — provision FPO AWS resources with Terraform',
      },
      {
        w: 50,
        focus: 'Monitoring + Observability',
        topics:
          'Prometheus, Grafana, Datadog (your FPO tool), alerts, dashboards',
      },
      {
        w: 51,
        focus: 'DevOps Hindi Recap',
        topics:
          'Anil Dollor Hindi DevOps — advanced GitHub Actions + CI/CD deep dive',
      },
      {
        w: 52,
        focus: '🐍 Python for DevOps',
        topics:
          'Automate the Boring Stuff: boto3 FPO Lambda lister, CloudWatch log parser, subprocess, S3 scripts — Day 365 ✅',
      },
    ],
  },
  // ══ BLOCK 2 — 25 WEEKS · 5×5 SKILLS ══════════════════════════════════════
  // Agentic AI + Kafka Streams + PySpark+Azure: skills you already have from SCB & Bangkok Bank
  // Java DSA + System Design: interview preparation
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
    blockLabel: 'Block 2 · SCB / Bangkok Bank Skills',
    days: 35,
    dayStart: 366,
    dayEnd: 400,
    startDate: 'Jun 14, 2027',
    endDate: 'Jul 18, 2027',
    hours: '~105h',
    courseH: '74h',
    practiceH: '31h',
    milestone: '🤖 Agentic AI Complete · Day 400',
    summary:
      '35 days · 5 weeks · 3 courses. LangChain, LangGraph, Ed Donner 8 real projects. Python foundation from W52 DevOps lets you dive straight in. Your SCB LangGraph/LangChain work makes this revision + deepening, not starting from scratch. Build FPO AI assistant as capstone.',
    courses: [
      'Dr. Frank Kane — ChatGPT + Generative AI Masterclass 2026 (22h) · W53–W54',
      'Ed Donner — Complete Agentic AI Engineering Course 2026 (30h) · W54–W56',
      'Eden Marco — LangChain Develop LLM Powered Applications (22h) · W56–W57',
    ],
    weekPlan: [
      {
        w: 53,
        focus: 'GenAI Foundations',
        topics:
          'LLMs, embeddings, RAG, prompt engineering (CoT, ReAct), AWS Bedrock — Frank Kane. Revise your SCB LangChain patterns.',
      },
      {
        w: 54,
        focus: 'LangChain Core',
        topics:
          'Chains, agents, tools, memory, LCEL, vector databases (Pinecone, FAISS). Deepen beyond SCB work.',
      },
      {
        w: 55,
        focus: 'LangGraph + Multi-Agent',
        topics:
          'State machines, conditional edges, multi-agent orchestration — revisit your SCB LangGraph patterns with deeper theory',
      },
      {
        w: 56,
        focus: 'Ed Donner: 8 Projects',
        topics:
          'Career Digital Twin, Deep Research agent, SDR Agent, Engineering Team in Docker, Browser Agent, MCP',
      },
      {
        w: 57,
        focus: 'FPO AI Assistant',
        topics:
          'Build FPO AI: natural language query over flight data using LangChain + DynamoDB. Deploy to Lambda. Portfolio demo.',
      },
    ],
  },
  {
    id: 'kafka',
    block: 2,
    seq: 8,
    icon: '📨',
    color: '#DC2626',
    dark: '#B91C1C',
    bg: '#FEF2F2',
    border: '#FECACA',
    name: 'Kafka Streams',
    blockLabel: 'Block 2 · SCB / Bangkok Bank Skills',
    days: 35,
    dayStart: 401,
    dayEnd: 435,
    startDate: 'Jul 19, 2027',
    endDate: 'Aug 22, 2027',
    hours: '~105h',
    courseH: '50h',
    practiceH: '55h',
    milestone: '📨 Kafka Streams Complete · Day 435',
    summary:
      '35 days · 5 weeks · 2 courses. Kafka Streams API, KStream/KTable, stateful operations, windowing, exactly-once semantics. Builds directly on your FPO EventBridge + Microservices Kafka experience AND your SCB/Bangkok Bank event streaming work.',
    courses: [
      'Stephane Maarek — Apache Kafka Series: Kafka Streams for Data Processing 4.7★ 30K students (14h) · W58–W59',
      'Confluent — Kafka Streams in Java complete (16h) · W59–W60',
    ],
    weekPlan: [
      {
        w: 58,
        focus: 'Kafka Streams Core',
        topics:
          'KStream, KTable, KGroupedStream, aggregations, joins — Stephane Maarek. Relate to your SCB streaming pipelines.',
      },
      {
        w: 59,
        focus: 'Windowing + Joins',
        topics:
          'Time windows (tumbling, hopping, session), stream-stream joins, stream-table joins',
      },
      {
        w: 60,
        focus: 'Stateful Operations',
        topics:
          'State stores, interactive queries, changelog topics, RocksDB internals',
      },
      {
        w: 61,
        focus: 'Exactly-Once + Scaling',
        topics:
          'Exactly-once semantics, fault tolerance, partition scaling, monitoring Kafka Streams apps',
      },
      {
        w: 62,
        focus: 'Capstone + FPO Integration',
        topics:
          'Build FPO real-time flight event streaming pipeline. Connect to FPO Kafka cluster. Deploy.',
      },
    ],
  },
  {
    id: 'pyspark',
    block: 2,
    seq: 9,
    icon: '⚡',
    color: '#F59E0B',
    dark: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'PySpark + Azure Databricks + ADF',
    blockLabel: 'Block 2 · SCB / Bangkok Bank Skills',
    days: 35,
    dayStart: 436,
    dayEnd: 470,
    startDate: 'Aug 23, 2027',
    endDate: 'Sep 26, 2027',
    hours: '~105h',
    courseH: '60h',
    practiceH: '45h',
    milestone: '⚡ PySpark + Azure Complete · Day 470',
    summary:
      '35 days · 5 weeks · 3 courses. PySpark, Azure Databricks, Azure Data Factory. Your SCB Thailand core banking modernization with Azure Databricks/PySpark + Bangkok Bank work is your biggest differentiator. This is deepening and formalizing, not starting from scratch.',
    courses: [
      'Ramkumar Ramakrishnan — PySpark Essentials for Data Scientists 4.6★ 35K students (14h) · W63–W64',
      'Eshant Garg — Azure Databricks & Spark for Data Engineers 4.5★ 25K students (25h) · W64–W65',
      'Mr K Learning — Azure Data Factory Pipeline Activities 4.7★ 18K students (21h) · W66–W67',
    ],
    weekPlan: [
      {
        w: 63,
        focus: 'PySpark Core',
        topics:
          'RDDs, DataFrames, Spark SQL, transformations, actions — revisit your SCB PySpark patterns formally',
      },
      {
        w: 64,
        focus: 'Spark Optimisation',
        topics:
          'Catalyst optimizer, broadcast joins, partitioning, caching, AQE — go deeper than SCB work',
      },
      {
        w: 65,
        focus: 'Azure Databricks',
        topics:
          'Databricks workspace, Delta Lake, Unity Catalog, notebooks, cluster config, MLflow — your SCB environment',
      },
      {
        w: 66,
        focus: 'Databricks Pipelines + ADF',
        topics:
          'Databricks pipelines, DLT. ADF triggers, linked services, datasets, integration runtimes.',
      },
      {
        w: 67,
        focus: 'ADF + Capstone ETL',
        topics:
          'Full Azure Data Factory pipeline: ingest → transform → load. Build SCB-style banking data ETL for portfolio.',
      },
    ],
  },
  {
    id: 'dsa',
    block: 2,
    seq: 10,
    icon: '🧩',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Java DSA',
    blockLabel: 'Block 2 · Interview Preparation',
    days: 35,
    dayStart: 471,
    dayEnd: 505,
    startDate: 'Sep 27, 2027',
    endDate: 'Oct 31, 2027',
    hours: '~105h',
    courseH: '54h',
    practiceH: '51h',
    milestone: '🧩 Java DSA Complete · Day 505',
    pythonWeek: 'W68',
    summary:
      '35 days · 5 weeks · 4 courses. W68 = Scott Barrett Java+Python DSA side by side. W69–W72 = interview-focused courses. Code every problem in Java. Strong DSA for all job types — Full Stack, Data Engineering, AI Engineering, Backend.',
    courses: [
      '🐍 Scott Barrett 4.8★ — Java DS & Algorithms + LeetCode (10h) · W68 — Java + Python simultaneously',
      'Andrei Neagoie ZTM — Master the Coding Interview DS + Algorithms (20h) · W69–W70',
      'Tim Buchalka 112K — DS & Algorithms Deep Dive Using Java (16h) · W70–W71',
      'Andrei Neagoie ZTM — Master Coding Interview Big Tech FAANG (8h) · W72',
    ],
    weekPlan: [
      {
        w: 68,
        focus: '🐍 Java + Python DSA',
        topics:
          'Scott Barrett: Big O, Arrays, Hash Maps, Linked Lists, Trees — problems in Java AND Python',
      },
      {
        w: 69,
        focus: 'Trees + Graphs',
        topics:
          'BST, DFS/BFS, topological sort, Dijkstra, Union-Find — Java implementations timed',
      },
      {
        w: 70,
        focus: 'Heaps + DP Foundations',
        topics:
          'Java PriorityQueue, Top-K patterns, 1D DP: coin change, house robber, jump game',
      },
      {
        w: 71,
        focus: 'Advanced DP + Sorting',
        topics:
          '2D DP, backtracking, all sorting algorithms with complexity proofs in Java',
      },
      {
        w: 72,
        focus: 'FAANG Patterns + Review',
        topics:
          'Hard graph + advanced DP from FAANG course. Rebuild 3 structures from scratch cold.',
      },
    ],
  },
  {
    id: 'sd',
    block: 2,
    seq: 11,
    icon: '🏗',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'System Design',
    blockLabel: 'Block 2 · Interview Preparation',
    days: 35,
    dayStart: 506,
    dayEnd: 540,
    startDate: 'Nov 1, 2027',
    endDate: 'Dec 5, 2027',
    hours: '~105h',
    courseH: '63h',
    practiceH: '42h',
    milestone: '🏗 System Design Complete · Day 540 · Dec 5, 2027 🎯',
    summary:
      "35 days · 5 weeks · 5 courses. Design 1 system per day spoken aloud. Your FPO multi-tenant SaaS, Kafka Streams, PySpark pipelines, Lambda microservices = real production system design experience that most candidates don't have. Last day Sunday Dec 5, 2027.",
    courses: [
      'Frank Kane ex-Amazon — Mastering the System Design Interview (5h) · W73',
      'Michael Pogrebinsky 93K — Software Architecture Modern Large Scale Systems (20h) · W73–W74',
      'Mikhail Smarshchok — System Design Interview Guide 20+ designs (18h) · W74–W75',
      'Bogdan Stashchuk — Pragmatic System Design real trade-offs (12h) · W75–W76',
      'FAANG Insiders — System Design Masterclass 2026 (8h) · W76–W77',
    ],
    weekPlan: [
      {
        w: 73,
        focus: 'SD Framework + Arch',
        topics:
          'Frank Kane 5-step template. CQRS, Event Sourcing, Saga, API Gateway — all maps to FPO. Michael Pogrebinsky distributed systems.',
      },
      {
        w: 74,
        focus: 'Classic Designs 1',
        topics:
          'URL Shortener, WhatsApp, Twitter, Netflix — Requirements→Estimation→HLD→DB→API spoken 45 min each',
      },
      {
        w: 75,
        focus: 'Classic Designs 2',
        topics:
          'Uber, Notification System, Rate Limiter, Distributed Cache — Bogdan trade-off reasoning',
      },
      {
        w: 76,
        focus: 'Advanced + FPO Design',
        topics:
          'Payment System, FPO Flight Optimiser (your system!), Kafka Streaming pipeline, Databricks ETL — FAANG template',
      },
      {
        w: 77,
        focus: 'Mock Designs + Final Day',
        topics:
          '5 cold mock designs spoken aloud — no notes. Dec 5, 2027 = Day 540 = 540-Day Journey COMPLETE 🎯',
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
    label: 'DevOps Complete · 1 Year Full Stack 🎉',
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
    day: 435,
    date: 'Aug 22, 2027',
    icon: '📨',
    label: 'Kafka Streams Complete',
    color: '#DC2626',
  },
  {
    day: 470,
    date: 'Sep 26, 2027',
    icon: '⚡',
    label: 'PySpark + Azure Complete',
    color: '#F59E0B',
  },
  {
    day: 505,
    date: 'Oct 31, 2027',
    icon: '🧩',
    label: 'Java DSA Complete',
    color: '#6366F1',
  },
  {
    day: 540,
    date: 'Dec 5, 2027',
    icon: '🏗',
    label: 'System Design Complete · Day 540 · Dec 5 🎯',
    color: '#16A34A',
  },
];

const TOTAL_DAYS = 540,
  TOTAL_HOURS = 1620;

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

function Card({ p, isOpen, onToggle, isCurrent, isDone }) {
  const [wkOpen, setWkOpen] = useState(false);
  const hasPy = !!p.pythonWeek;
  const bc =
    p.block === 1
      ? { bg: '#EEF2FF', color: '#4338CA', border: '#C7D2FE' }
      : { bg: '#FFF7ED', color: '#C2410C', border: '#FED7AA' };
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
            ? '0 0 0 3px #FEF3C7,0 2px 8px rgba(0,0,0,0.06)'
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
                background: bc.bg,
                color: bc.color,
                border: `1px solid ${bc.border}`,
              }}
            >
              {p.blockLabel}
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
            {p.startDate} → {p.endDate} · D{p.dayStart}–D{p.dayEnd} · {p.days}d
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
            {p.days}d
          </div>
          <div style={{ fontSize: 9, color: '#94A3B8' }}>{p.hours}</div>
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
              <span style={{ fontSize: 18, flexShrink: 0 }}>🐍</span>
              <div>
                <div
                  style={{ fontSize: 11, fontWeight: 800, color: '#047857' }}
                >
                  Python merged into {p.pythonWeek}
                </div>
                <div
                  style={{ fontSize: 10, color: '#166534', lineHeight: 1.6 }}
                >
                  {p.id === 'devops'
                    ? 'Python automation scripting (boto3, subprocess, log parsing) — learned in DevOps context.'
                    : 'Python DSA alongside Java (Scott Barrett Java+Python LeetCode course).'}
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
              {p.courses.map((crs, i) => (
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
                      color: crs.startsWith('🐍') ? p.color : p.color,
                    }}
                  >
                    {crs.startsWith('🐍') ? '🐍' : i + 1 + '.'}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      color: crs.startsWith('🐍') ? '#047857' : '#374151',
                      lineHeight: 1.6,
                      fontWeight: crs.startsWith('🐍') ? 600 : 400,
                    }}
                  >
                    {crs}
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
                    background: wk.focus.includes('🐍') ? '#F0FDF4' : '#fff',
                    borderRadius: 8,
                    padding: '9px 11px',
                    border: `1.5px solid ${wk.focus.includes('🐍') ? '#86EFAC' : p.color + '18'}`,
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
                      style={{ fontSize: 12, fontWeight: 900, lineHeight: 1 }}
                    >
                      {wk.focus.includes('🐍') ? '' : wk.w}
                    </span>
                    {!wk.focus.includes('🐍') && (
                      <span
                        style={{
                          fontSize: 8,
                          fontWeight: 600,
                          opacity: 0.6,
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

export default function App() {
  const [open, setOpen] = useState(null);
  const [showMs, setShowMs] = useState(true);
  const dIn = daysSince(),
    cId = curPhaseId(),
    prog = pct();
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
    b2 = PHASES.filter((p) => p.block === 2);

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
                  fontSize: 'clamp(18px,5vw,28px)',
                  fontWeight: 900,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                540-Days of Code
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.38)',
                  marginTop: 2,
                }}
              >
                Sun Jun 14, 2026 → Sun Dec 5, 2027 · 540 days · {TOTAL_HOURS}h ·
                6:00 AM–9:00 AM
              </div>
            </div>
          </div>

          {/* 2-block summary */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 7,
              marginBottom: 14,
            }}
          >
            {[
              {
                icon: '📚',
                n: 'Block 1',
                t: '1 Year of Full Stack',
                s: 'Days 1–365 · Jun 14 2026 → Jun 13 2027',
                d: 'React (92d) · React Native · Next.js · Spring Boot · Microservices · DevOps',
                col: '#6366F1',
              },
              {
                icon: '🚀',
                n: 'Block 2',
                t: '5×5 Skills',
                s: 'Days 366–540 · Jun 14 → Dec 5 2027 · 25 weeks',
                d: 'Agentic AI 5w · Kafka Streams 5w · PySpark+Azure 5w · Java DSA 5w · System Design 5w',
                col: '#F59E0B',
              },
            ].map(({ icon, n, t, s, d, col }) => (
              <div
                key={n}
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  borderRadius: 10,
                  padding: '11px 12px',
                  border: `1px solid ${col}45`,
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
                    fontSize: 'clamp(10px,2.5vw,13px)',
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
                    color: 'rgba(255,255,255,0.4)',
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
                  {d}
                </div>
              </div>
            ))}
          </div>

          {/* SCB callout */}
          <div
            style={{
              background: 'rgba(245,158,11,0.15)',
              border: '1px solid rgba(245,158,11,0.4)',
              borderRadius: 10,
              padding: '9px 14px',
              marginBottom: 12,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <span style={{ fontSize: 20, flexShrink: 0 }}>💼</span>
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, color: '#FDE68A' }}>
                Block 2 Skills — you already have real production experience in
                3 of 5
              </div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)' }}>
                SCB Thailand &amp; Bangkok Bank: LangChain/LangGraph (Agentic
                AI) · Kafka Streams · Azure Databricks/PySpark/ADF — Block 2
                deepens what you already know
              </div>
            </div>
          </div>

          {/* Skill tags */}
          <div
            style={{
              display: 'flex',
              gap: 5,
              flexWrap: 'wrap',
              marginBottom: 14,
            }}
          >
            {[
              ['⚛', 'React+RN+Next', '#0EA5E9'],
              ['🌱', 'Spring Boot', '#16A34A'],
              ['🏛', 'Microservices', '#E11D48'],
              ['⚙', 'DevOps', '#EA580C'],
              ['🤖', 'Agentic AI', '#7C3AED'],
              ['📨', 'Kafka Streams', '#DC2626'],
              ['⚡', 'PySpark+Azure', '#F59E0B'],
              ['🧩', 'Java DSA', '#6366F1'],
              ['🏗', 'System Design', '#16A34A'],
            ].map(([ic, lbl, col]) => (
              <span
                key={lbl}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 3,
                  background: col + '20',
                  border: `1px solid ${col}40`,
                  borderRadius: 20,
                  padding: '3px 9px',
                  fontSize: 9,
                  fontWeight: 700,
                  color: col,
                  whiteSpace: 'nowrap',
                }}
              >
                {ic} {lbl}
              </span>
            ))}
          </div>

          {/* Progress bar */}
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
                  }}
                  onClick={() => jump(p.id)}
                  title={`${p.name} · D${p.dayStart}–D${p.dayEnd}`}
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
              {[1, 92, 155, 260, 316, 365, 400, 435, 470, 505, 540].map((d) => (
                <div
                  key={d}
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
                    D{d}
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
              <span>Jun 14, 2026</span>
              <span
                style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 700 }}
              >
                {prog}% · Day {Math.min(dIn + 1, 540)} of 540
              </span>
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

      {/* ── BODY ── */}
      <div
        style={{ maxWidth: 940, margin: '0 auto', padding: '12px 12px 48px' }}
      >
        {/* Block 1 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 9,
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
              Days 1–365 · Jun 14 2026 → Jun 13 2027 · 52 weeks + 1 day
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

        {/* Block 2 */}
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
              background: 'linear-gradient(90deg,#F59E0B,#F59E0B10)',
            }}
          />
          <div style={{ textAlign: 'center', flexShrink: 0 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: '#D97706',
                letterSpacing: '0.1em',
              }}
            >
              🚀 BLOCK 2 — 5×5 SKILLS
            </div>
            <div style={{ fontSize: 9, color: '#94A3B8' }}>
              Days 366–540 · Jun 14 → Dec 5 2027 · 5 skills × 5 weeks each = 25
              weeks
            </div>
          </div>
          <div
            style={{
              height: 2,
              flex: 1,
              background: 'linear-gradient(90deg,#F59E0B10,#F59E0B)',
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

        {/* Footer */}
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
            1,620 hours · 6:00 AM–9:00 AM · Block 1: 1 Year Full Stack · Block
            2: 5×5 Skills
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
                    opacity: m.day <= dIn + 1 ? 1 : 0.4,
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
