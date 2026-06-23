import { useState } from 'react';
// 1064 Days of Code · Jun 20, 2026 → May 18, 2029
// 5:30 AM – 8:30 AM daily · 3 hours · No 2nd slot
// Block 1: 16-Month Skill Plan D1-D468   (Jun 20, 2026 – Sep 30, 2027)
// Block 2: Advanced Studies    D469-D1064 (Oct 1, 2027 – May 18, 2029)

const START = new Date('2026-06-20');
const TOTAL = 1064;

const BLOCKS = [
  {
    id: 'b1',
    icon: '📚',
    col: '#0EA5E9',
    title: '16-Month Skill Plan',
    sub: 'D1–D468 · Jun 20, 2026 – Sep 30, 2027 · 468 days · 5 skills',
    detail:
      'React+Next.js → React Native → Express.js → Spring Boot → Microservices → DevOps+Python → Django → Agentic AI',
    time: '5:30 AM – 8:30 AM · 3h daily',
  },
  {
    id: 'b2',
    icon: '🚀',
    col: '#6366F1',
    title: 'Advanced Studies',
    sub: 'D469–D1064 · Oct 1, 2027 – May 18, 2029 · 596 days · 8 phases',
    detail:
      'DSA (8mo) → System Design (4mo) → AWS×3 Certs (3mo) → CKA+TF+Java+Python+Spring Certs (9 total)',
    time: '5:30 AM – 8:30 AM · 3h daily',
  },
];

const PHASES = [
  // ══ BLOCK 1: 16-MONTH SKILL PLAN (468 days · 8 skills) ══════════════════
  {
    id: 'p1',
    block: 'b1',
    seq: 1,
    icon: '⚛',
    color: '#0EA5E9',
    dark: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    name: 'React JS + Next.js',
    label: 'Skill 1 · 3 Months',
    days: 92,
    ds: 1,
    de: 92,
    period: 'Jun 20 – Sep 19, 2026',
    ms: 'React JS + Next.js Complete · D92',
    about:
      '92 days · 3 months. Month 1-2: React deep dive — hooks, React Router v6, Redux Toolkit, RTK Query, testing, performance. Build FPO flight dashboard calling AWS API Gateway + Lambda. Month 3: Next.js 15 App Router — Server Components, Server Actions, NextAuth v5, Prisma, PostgreSQL, Vercel. Build FPO web portal. All Maximilian Schwarzmüller.',
    courses: [
      'Maximilian Schwarzmüller — React The Complete Guide 2026 incl. React Router and Redux (Udemy)',
      'Maximilian Schwarzmüller — Next.js 14 and 15 The Complete Guide (Udemy)',
      'Lee Robinson (Vercel) — Next.js Learn (free official) · App Router fundamentals',
    ],
    wplan: [
      {
        w: 1,
        f: 'React Foundations + JSX',
        t: 'JSX, functional components, props, useState, useEffect, conditional rendering, lists/keys. Vite + TypeScript. 3 mini projects.',
      },
      {
        w: 2,
        f: 'Core Hooks Deep Dive',
        t: 'useEffect (dependencies/cleanup), useRef, useMemo, useCallback, custom hooks, performance implications',
      },
      {
        w: 3,
        f: 'React Router v6',
        t: 'Nested routes, dynamic params, useParams/useNavigate/useLocation, loaders, actions, error boundaries, protected routes',
      },
      {
        w: 4,
        f: 'Redux Toolkit + RTK Query',
        t: 'createSlice, configureStore, useSelector/useDispatch, RTK Query (createApi, caching, invalidation) for async API state',
      },
      {
        w: 5,
        f: 'Advanced React + Performance',
        t: 'React.memo, lazy/Suspense, code splitting, error boundaries, portals, forwardRef, compound components',
      },
      {
        w: 6,
        f: 'React Testing + TypeScript',
        t: 'React Testing Library, Jest, user-event, mocking. Strict TypeScript with React: typed components, hooks, Redux.',
      },
      {
        w: 7,
        f: 'FPO Dashboard Capstone',
        t: 'Build FPO Flight Dashboard: flight list, status cards, weather overlay. Calls AWS API Gateway + Lambda + DynamoDB.',
      },
      {
        w: 8,
        f: 'Next.js App Router Foundations',
        t: 'File-based routing, layouts, loading/error/not-found pages, route groups, parallel and intercepting routes',
      },
      {
        w: 9,
        f: 'Server Components + Data Fetching',
        t: 'RSC vs Client Components, fetch caching/revalidation (ISR/SSG/SSR), Suspense streaming, Server Actions',
      },
      {
        w: 10,
        f: 'Auth + Database + Deploy',
        t: 'NextAuth v5 OAuth (Google/GitHub), middleware, Prisma ORM + PostgreSQL. Vercel deployment, env vars, image optimisation.',
      },
      {
        w: 11,
        f: 'FPO Web Portal Capstone',
        t: 'FPO web portal: auth + flight dashboard + AWS API Gateway backend. Deployed on Vercel. Portfolio piece.',
      },
    ],
  },
  {
    id: 'p2',
    block: 'b1',
    seq: 2,
    icon: '📱',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'React Native',
    label: 'Skill 2 · 2 Months',
    days: 60,
    ds: 93,
    de: 152,
    period: 'Sep 20 – Nov 18, 2026',
    ms: 'React Native Complete · D152',
    about:
      '60 days · 2 months. React Native via Chaicode + Maximilian Schwarzmüller. Core components, React Navigation v6, Redux Toolkit in RN, Expo SDK device APIs, Reanimated 2 animations, EAS Build. Deploy FPO mobile flight status app to TestFlight on your iPad.',
    courses: [
      'Chaicode — React Native Full Course (free, Hindi+English) · primary',
      'Maximilian Schwarzmüller — React Native The Practical Guide (Udemy) · comprehensive reference',
      'Expo docs — EAS Build, TestFlight, OTA updates, Expo SDK modules',
    ],
    wplan: [
      {
        w: 12,
        f: 'RN Core + Layout',
        t: 'View/Text/Image/TextInput, StyleSheet, Flexbox, FlatList — exercises on iPad via Expo Go',
      },
      {
        w: 13,
        f: 'React Navigation v6',
        t: 'Stack/Tab/Drawer navigators, nested navigation, params, deep linking, auth flow patterns',
      },
      {
        w: 14,
        f: 'State + Expo SDK + APIs',
        t: 'Redux Toolkit, AsyncStorage/MMKV, Camera, Location, Push Notifications, Haptics, SecureStore',
      },
      {
        w: 15,
        f: 'Animations + Gestures',
        t: 'Reanimated 2 (useSharedValue/withSpring), Gesture Handler, PanGestureHandler, drag/swipe interactions',
      },
      {
        w: 16,
        f: 'RN Performance + Debugging',
        t: 'React.memo, useMemo/useCallback, Flipper, Hermes engine, FlatList performance profiling',
      },
      {
        w: 17,
        f: 'EAS Build + FPO App',
        t: 'EAS Build (dev/preview/prod), EAS Submit to TestFlight, OTA updates. FPO mobile flight status app on iPad.',
      },
    ],
  },
  {
    id: 'p2b',
    block: 'b1',
    seq: 3,
    icon: '🟢',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'Express.js + Node.js',
    label: 'Skill 3 · 1 Month',
    days: 30,
    ds: 153,
    de: 182,
    period: 'Nov 19 – Dec 18, 2026',
    ms: 'Express.js + Node.js Complete · D182',
    about:
      '30 days · 1 month. Express.js and Node.js — the JavaScript backend. Right after React Native so you now have full-stack JS (React + RN frontend, Express backend). Node.js event loop, CommonJS vs ESM, async patterns. Express.js routing, middleware chain, REST API design, error handling. MongoDB with Mongoose ODM, JWT authentication, Zod validation. Deploy to AWS ECS using your existing AWS knowledge.',
    courses: [
      'Maximilian Schwarzmüller — NodeJS The Complete Guide incl. MVC REST APIs GraphQL (Udemy, 40h) · primary',
      'Traversy Media — Express.js Crash Course (YouTube free) · quick reference',
      'MongoDB University — M001 MongoDB Basics (free) · Mongoose + Atlas',
    ],
    wplan: [
      {
        w: 18,
        f: 'Node.js Core + Event Loop',
        t: 'Node.js runtime, event loop (phases/macrotask/microtask), CommonJS vs ESM, fs/path/http built-ins, npm, nodemon, dotenv',
      },
      {
        w: 19,
        f: 'Express.js + REST API + MongoDB',
        t: 'Express routing, middleware chain, Mongoose ODM (schemas/models/queries), MongoDB Atlas, CRUD, JWT auth, bcrypt, Zod validation',
      },
      {
        w: 20,
        f: 'Testing + Docker + AWS ECS Deploy',
        t: 'Jest + supertest for Express API testing, Docker containerise, deploy to AWS ECS Fargate. GitHub Actions CI/CD pipeline.',
      },
    ],
  },
  {
    id: 'p3',
    block: 'b1',
    seq: 4,
    icon: '🌱',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'Spring Boot',
    label: 'Skill 3 · 3 Months · Java',
    days: 92,
    ds: 183,
    de: 274,
    period: 'Dec 19, 2026 – Mar 20, 2027',
    ms: 'Spring Boot Complete · D274',
    about:
      '92 days · 3 months. Complete Java backend — J2SE, J2EE, JPA/Hibernate and Spring Boot 3 all in one block. Month 1: Java Core (syntax vs C#, OOP, Collections, Streams/Lambdas, J2EE basics, JPA/Hibernate). Months 2-3: Spring Boot 3 (IoC, REST APIs, Spring Security + JWT + OAuth2, testing). Your C# .NET 8 + FPO Cognito background maps exactly.',
    courses: [
      'Navin Reddy Telusko — Java Programming (YouTube free) · J2SE fast-track using C# background',
      'John Thompson — Hibernate and Spring Data JPA Beginner to Guru (Udemy, 55h) · JPA deep dive',
      'John Thompson — Spring Framework 6 Beginner to Guru (Udemy, 40h) · most comprehensive Spring',
      'Ranga Karanam — Master Spring Boot 3 and Spring Framework 6 (Udemy, 36h) · practical projects',
    ],
    wplan: [
      {
        w: 20,
        f: 'J2SE: Java Syntax + OOP',
        t: 'JDK/JVM/JRE, syntax vs C#, classes, inheritance, polymorphism, interfaces, generics, Collections (ArrayList/HashMap/HashSet)',
      },
      {
        w: 21,
        f: 'J2SE: Java 8+ Streams + Lambdas',
        t: 'Lambda expressions, Stream API (filter/map/reduce/collect), Optional, CompletableFuture, Java 14-21 records + sealed classes',
      },
      {
        w: 22,
        f: 'J2EE + JPA Foundations',
        t: 'Servlets/JDBC/JAX-RS basics, @Entity/@Id, EntityManager, @OneToMany/@ManyToMany, CascadeType, FetchType, JPQL',
      },
      {
        w: 23,
        f: 'JPA Advanced + Spring Data JPA',
        t: 'N+1 + @EntityGraph/JOIN FETCH, @Transactional propagation, JpaRepository, @Query, L1/L2 caching',
      },
      {
        w: 24,
        f: 'Spring Boot Core + IoC + AOP',
        t: 'Auto-configuration, @Bean/@Component/@Service/@Repository, constructor injection, AOP, @ConfigurationProperties',
      },
      {
        w: 25,
        f: 'Spring MVC + REST APIs',
        t: '@RestController, ResponseEntity, @Valid, @ExceptionHandler, @ControllerAdvice, OpenAPI/Swagger, DTO + MapStruct',
      },
      {
        w: 26,
        f: 'Spring Security + OAuth2',
        t: 'SecurityFilterChain, JWT filter, UserDetailsService, BCrypt. OAuth2 resource server + JWKS = your FPO Cognito pattern!',
      },
      {
        w: 27,
        f: 'Testing + AWS ECS Deploy',
        t: '@WebMvcTest, MockMvc, @DataJpaTest, Testcontainers, Mockito. Full REST API + JWT + JPA + Docker → AWS ECS.',
      },
    ],
  },
  {
    id: 'p4',
    block: 'b1',
    seq: 5,
    icon: '🏛',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECDD3',
    name: 'Microservices',
    label: 'Skill 4 · 2 Months · Java',
    days: 61,
    ds: 275,
    de: 335,
    period: 'Mar 21 – May 20, 2027',
    ms: 'Microservices Complete · D335',
    about:
      '61 days · 2 months. Microservices with Spring Cloud, Kafka, CQRS, Event Sourcing, Saga pattern, deploy to AWS EKS. Every pattern maps to FPO Cloud: EventBridge=Kafka, Step Functions=Saga, Lambda=Microservice, DynamoDB streams=Event Sourcing. Your FPO production experience is a massive advantage.',
    courses: [
      'Ranga Karanam — Java Spring Boot Microservices with K8s and Docker (Udemy, 35h)',
      'Sean Campbell — Master Spring Boot Microservices CQRS and Event Sourcing (Udemy, 10h)',
      'Chris Richardson — microservices.io patterns catalogue (free) · all patterns catalogued',
    ],
    wplan: [
      {
        w: 30,
        f: 'Service Design + Spring Cloud',
        t: 'DDD bounded contexts, Eureka discovery, Spring Cloud Gateway, config server, Feign clients — map every pattern to FPO',
      },
      {
        w: 31,
        f: 'Resilience + Kafka',
        t: 'Resilience4j circuit breaker/retry/bulkhead. Kafka producers/consumers/partitions — maps to FPO EventBridge',
      },
      {
        w: 32,
        f: 'CQRS + Event Sourcing',
        t: 'Read/write separation, Axon event store, event replay — maps to FPO mission-feed event sourcing table',
      },
      {
        w: 33,
        f: 'Saga + EKS Deploy + ADR',
        t: 'Orchestration vs choreography Saga (Step Functions=Saga in your FPO!). Deploy to AWS EKS. Write 1 ADR.',
      },
    ],
  },
  {
    id: 'p5',
    block: 'b1',
    seq: 6,
    icon: '🔧',
    color: '#D97706',
    dark: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'DevOps with Python',
    label: 'Skill 5 · ~7 Weeks',
    days: 50,
    ds: 336,
    de: 385,
    period: 'May 21 – Jul 9, 2027',
    ms: 'DevOps with Python Complete · D385',
    about:
      '50 days · 7 weeks. Focused DevOps block. Python (fundamentals, OOP, boto3 AWS automation). Docker, Kubernetes EKS, CI/CD (GitHub Actions + Jenkins), Terraform, Prometheus/Grafana, SonarQube, DevSecOps. AWS deep dive (Lambda, DynamoDB, CDK TypeScript — your FPO stack!). Shorter than originally planned because Django and Agentic AI now follow immediately after.',
    courses: [
      'Corey Schafer — Python YouTube playlist (free) · OOP + decorators + asyncio + boto3',
      'Nana Janashia TechWorld — DevOps Bootcamp (YouTube/Udemy) · Docker, K8s, CI/CD',
      'Mumshad Mannambeth — Kubernetes for Beginners + CKA (KodeKloud) · leverages your CKA cert',
    ],
    wplan: [
      {
        w: 37,
        f: 'Python: Fundamentals + OOP + boto3',
        t: 'Variables, data types, OOP classes, dunder methods, type hints, decorators, generators. boto3: EC2/S3/Lambda/DynamoDB automation.',
      },
      {
        w: 38,
        f: 'DevOps: Docker + EKS + CI/CD',
        t: 'Dockerfile/multi-stage, Docker Compose, ECR, ECS Fargate, EKS/kubectl/Helm, GitHub Actions OIDC to AWS, CodePipeline, SonarQube',
      },
      {
        w: 39,
        f: 'DevOps: Terraform + Monitoring',
        t: 'Terraform HCL/providers/modules/S3 state, Prometheus/Grafana, Datadog APM (your FPO tool!), SRE practices, Trivy DevSecOps',
      },
      {
        w: 40,
        f: 'AWS Deep Dive: FPO Stack',
        t: 'Lambda/Step Functions/DynamoDB/CDK TypeScript (your FPO!), API Gateway, Cognito, CloudWatch, EventBridge. Enterprise pipeline capstone.',
      },
    ],
  },
  {
    id: 'p6',
    block: 'b1',
    seq: 7,
    icon: '🎸',
    color: '#0891B2',
    dark: '#0E7490',
    bg: '#ECFEFF',
    border: '#A5F3FC',
    name: 'Django',
    label: 'Skill 6 · 5 Weeks',
    days: 35,
    ds: 386,
    de: 420,
    period: 'Jul 10 – Aug 13, 2027',
    ms: 'Django Complete · D420',
    about:
      '35 days · 5 weeks. Django MVT framework, Django ORM, migrations, admin, signals, Django REST Framework (DRF) — serializers, ModelViewSet, routers, JWT auth (simplejwt), permissions, filtering, pagination. Build a full REST API with DRF connecting to your Block 1 AWS infrastructure.',
    courses: [
      'Dennis Ivy — Python Django 7 Hour Course (YouTube free) · best Django fundamentals',
      'Jose Salvatierra — REST APIs with Django REST Framework (Udemy) · DRF deep dive',
    ],
    wplan: [
      {
        w: 41,
        f: 'Django Core + MVT + ORM',
        t: 'Django project/app structure, MVT architecture, URL routing, views (FBV/CBV), ORM models, migrations, Django admin, signals',
      },
      {
        w: 42,
        f: 'Django REST Framework (DRF)',
        t: 'DRF serializers, ModelViewSet, routers, JWT auth (simplejwt), permissions (IsAuthenticated/custom), filtering, pagination, throttling',
      },
      {
        w: 43,
        f: 'DRF Advanced + API Capstone',
        t: 'Nested serializers, custom actions (@action), API versioning, OpenAPI docs, testing with APIClient. Build full DRF API connected to AWS.',
      },
    ],
  },
  {
    id: 'p7',
    block: 'b1',
    seq: 8,
    icon: '🤖',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Agentic AI',
    label: 'Skill 7 · 7 Weeks',
    days: 48,
    ds: 421,
    de: 468,
    period: 'Aug 14 – Sep 30, 2027',
    ms: 'Agentic AI — 16-Month Skill Plan COMPLETE · D468 · Sep 30, 2027',
    about:
      '48 days · 7 weeks. LangChain, LangGraph, RAG pipelines, multi-agent systems, MCP protocol, FastAPI (async, Pydantic v2, OpenAPI, AWS Lambda via Mangum). Ed Donner 8 real projects. Your SCB Thailand LangChain/LangGraph experience = deep revision + extension. Capstone: FPO AI assistant (natural language flight queries) deployed to AWS Lambda.',
    courses: [
      'Ed Donner — Complete Agentic AI Engineering Course 2026 (Udemy, 30h) · 8 real projects',
      'Eden Marco — LangChain Develop LLM Powered Applications (Udemy, 22h) · LangChain + LangGraph',
      'Sebastián Ramírez — FastAPI official docs + tiangolo/fastapi (GitHub) · async + Pydantic v2',
      'AWS Bedrock docs — deploy Agentic AI on your FPO Cloud AWS infrastructure',
    ],
    wplan: [
      {
        w: 44,
        f: 'GenAI Foundations + Prompt Engineering',
        t: 'LLMs, tokens, embeddings, RAG architecture, vector DBs (Pinecone/FAISS), CoT/ReAct/few-shot prompt engineering, AWS Bedrock',
      },
      {
        w: 45,
        f: 'LangChain Core + LangGraph',
        t: 'Chains, agents, tools, memory, LCEL, custom tools. LangGraph: state machines, nodes, conditional routing, supervisor agents',
      },
      {
        w: 46,
        f: 'Ed Donner Projects 1-5',
        t: 'Career Digital Twin, Deep Research Agent, SDR Agent, Engineering Team in Docker, Browser Agent — build all 5',
      },
      {
        w: 47,
        f: 'FastAPI + MCP + FPO AI Capstone',
        t: 'FastAPI async/Pydantic v2/Mangum deploy. MCP protocol integration. FPO AI Assistant: natural language flight queries on AWS Lambda.',
      },
    ],
  },
  // ══ BLOCK 2: ADVANCED STUDIES (596 days) ══════════════════════════════════
  {
    id: 'p9',
    block: 'b2',
    seq: 9,
    icon: '🧩',
    color: '#4F46E5',
    dark: '#3730A3',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Data Structures + Algorithms',
    label: 'Block 2 · 8 Months',
    days: 231,
    ds: 469,
    de: 699,
    period: 'Oct 1, 2027 – May 18, 2028',
    ms: 'DSA Complete · D699 · May 18, 2028',
    about:
      '231 days · 8 months. Complete DSA in Python and Java. Arrays, Linked Lists, Stacks, Queues, Trees, BST, Heaps, Graphs, Hashing, Sorting/Searching, Dynamic Programming (hardest — 8 weeks), Backtracking, Greedy, Tries. 400+ LeetCode problems total. Two instructors: Scott Barrett (Python + Java implementations) + NeetCode (pattern-based). Master DP and you stand out in every interview.',
    courses: [
      'Scott Barrett — Python DSA + LeetCode Exercises (Udemy, 4.8★) · Python implementations',
      'Scott Barrett — Java DSA + LeetCode Exercises (Udemy, 4.8★) · Java implementations',
      'NeetCode — Full DSA for Beginners + Advanced (YouTube free) · pattern-based approach',
      'LeetCode Top Interview 150 — structured problem set · complete all 150',
      'Pramp.com — free peer mock interviews (final weeks)',
    ],
    wplan: [
      {
        w: 1,
        f: 'Arrays + Strings',
        t: 'Two pointers, sliding window, prefix sums, binary search on arrays, string manipulation, anagram detection. 50 LeetCode problems in Python + Java.',
      },
      {
        w: 5,
        f: 'Linked Lists + Stacks + Queues',
        t: 'Fast/slow pointer, cycle detection, reversal. Monotonic stack, deque, BFS with queue. 40 LeetCode problems.',
      },
      {
        w: 9,
        f: 'Trees + BST',
        t: 'DFS (pre/in/post-order), BFS level-order, BST ops, LCA, serialize/deserialize. 50 LeetCode problems.',
      },
      {
        w: 14,
        f: 'Heaps + Priority Queue',
        t: 'Min/max heap, Java PriorityQueue, Top-K pattern, two-heap (median), K-way merge. 25 LeetCode problems.',
      },
      {
        w: 17,
        f: 'Graphs',
        t: 'BFS/DFS on graphs, topological sort, Dijkstra, Union-Find (DSU), cycle detection. 50 LeetCode problems.',
      },
      {
        w: 22,
        f: 'Hashing + Sorting + Searching',
        t: 'Frequency maps, two-sum pattern, all sort algorithms with proofs, binary search variants + binary search on answer. 40 problems.',
      },
      {
        w: 26,
        f: 'Dynamic Programming (8 weeks)',
        t: '1D DP (house robber/coin change), 2D DP (LCS/edit distance), knapsack, string DP, grid DP, interval DP. 80 LeetCode problems. Most important topic.',
      },
      {
        w: 34,
        f: 'Backtracking + Greedy + Tries',
        t: 'Subsets, permutations, N-Queens, Sudoku solver, activity selection, interval scheduling, trie insert/search/startsWith. 40 problems.',
      },
      {
        w: 30,
        f: 'Mock Interviews + LeetCode',
        t: '100 timed cold LeetCode problems. 7 full mock interviews (spoken aloud, 45 min, no IDE). Pattern cheatsheet. Cracking any tech interview.',
      },
    ],
  },
  {
    id: 'p10b',
    block: 'b2',
    seq: 11,
    icon: '🏗',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'System Design',
    label: 'Block 2 · 4 Months',
    days: 122,
    ds: 700,
    de: 821,
    period: 'May 19 – Sep 17, 2028',
    ms: 'System Design Complete · D821',
    about:
      '122 days · 4 months. System design interview mastery. Frank Kane 5-step template (Clarify → Estimate → HLD → Deep Dive → Wrap Up). Design 1 system spoken aloud per day (45 min, no notes). Your FPO multi-tenant SaaS + Lambda + DynamoDB + Kafka production experience is a massive advantage — FPO Cloud IS a real system design case study. Cover all classic systems: URL Shortener, WhatsApp, Twitter, YouTube, Netflix, Uber, Airbnb, Payment System, Search Engine. Alex Xu Vol 1 + Vol 2.',
    courses: [
      'Frank Kane ex-Amazon — Mastering the System Design Interview (Udemy, 5h) · framework first, do this week 1',
      'Alex Xu — System Design Interview Vol 1 (book, 309 pages) · URL Shortener through Notification System',
      'Alex Xu — System Design Interview Vol 2 (book) · Payment System, Search Engine, Stock Exchange',
      'Mikhail Smarshchok — System Design Interview Guide 20+ designs (Udemy, 18h) · spoken practice',
      'ByteByteGo (Alex Xu newsletter, free) · weekly system design breakdowns',
    ],
    wplan: [
      {
        w: 1,
        f: 'SD Framework + Estimation + FPO Design',
        t: 'Frank Kane 5-step template: Clarify → Estimate (users/storage/bandwidth) → HLD → Deep Dive → Wrap Up. Design FPO Cloud first — you know it inside out. Multi-tenant SaaS, Lambda, DynamoDB, Step Functions, Cognito.',
      },
      {
        w: 2,
        f: 'Core Concepts: APIs + Load Balancing + Cache',
        t: 'REST vs GraphQL vs gRPC, API Gateway patterns, L4/L7 load balancers, horizontal vs vertical scaling, Redis caching strategies (LRU/LFU/TTL), CDN (your FPO CloudFront!).',
      },
      {
        w: 3,
        f: 'Databases: SQL vs NoSQL + CAP + Sharding',
        t: 'ACID vs BASE, CAP theorem, SQL (strong consistency) vs NoSQL (eventual), sharding (hash/range), consistent hashing, replication, DynamoDB single-table design (your FPO!).',
      },
      {
        w: 4,
        f: 'Classic Design 1: URL Shortener + Pastebin',
        t: 'URL Shortener: Base62 encoding, DynamoDB, cache, CDN. Pastebin: object storage (S3 — your FPO!). Speak each design aloud 45 min with requirements → HLD → DB → API → scale.',
      },
      {
        w: 5,
        f: 'Classic Design 2: WhatsApp + Messenger',
        t: 'WebSocket connections, message delivery guarantees, group chats, presence system, end-to-end encryption concepts, message queue (SQS — your FPO!).',
      },
      {
        w: 6,
        f: 'Classic Design 3: Twitter + Instagram',
        t: 'Fan-out on write vs read, celebrity problem, graph structure for follows, photo/video storage (S3), timeline generation, news feed ranking.',
      },
      {
        w: 7,
        f: 'Classic Design 4: YouTube + Netflix',
        t: 'Video upload pipeline, CDN streaming, adaptive bitrate (HLS), video transcoding workers, recommendation engine basics, storage tiering (S3 Glacier).',
      },
      {
        w: 8,
        f: 'Classic Design 5: Uber + Airbnb + Maps',
        t: 'Real-time GPS tracking (WebSocket), geospatial indexing (QuadTree/GeoHash), ride matching algorithm, search + ranking, map tile serving.',
      },
      {
        w: 10,
        f: 'Distributed Systems Deep Dive',
        t: 'Event Sourcing (your FPO mission-feed!), CQRS, Saga pattern (Step Functions = Saga!), 2PC vs Saga, Kafka pub-sub (your FPO EventBridge!), distributed locks.',
      },
      {
        w: 12,
        f: 'Advanced Designs: Payment + Search + Cache',
        t: 'Payment System (idempotency, double-charge prevention, ACID), Search Engine (crawling/indexing/ranking), Distributed Cache (consistent hashing + eviction), Stock Exchange (order book).',
      },
      {
        w: 14,
        f: 'Rate Limiter + Notification + Leaderboard',
        t: 'Rate limiter (token bucket/leaky bucket/sliding window + Redis), Notification System (push/pull/fan-out), Gaming Leaderboard (sorted sets in Redis), Typeahead Search (trie + cache).',
      },
      {
        w: 16,
        f: 'Mock System Design Interviews',
        t: '10 full cold mock interviews (spoken aloud, 45 min each, no notes). Focus on weakest 3 systems. Write ADRs for 3 designs. GitHub portfolio with system diagrams. D821 = Sep 17, 2028 = SD DONE.',
      },
    ],
  },

  {
    id: 'p10',
    block: 'b2',
    seq: 10,
    icon: '☁',
    color: '#D97706',
    dark: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'AWS Certifications ×3',
    label: 'Block 2 · 7 Months · Certs',
    days: 92,
    ds: 822,
    de: 913,
    period: 'Sep 18 – Dec 18, 2028',
    ms: 'AWS ×3 Certs DONE · D913',
    about:
      '214 days · 7 months. Three AWS certifications back to back. Months 1-2: SAA-C03 (Solutions Architect Associate). Months 3-4: DVA-C02 (Developer Associate) — Lambda, DynamoDB, API Gateway, Cognito, Step Functions (your exact FPO stack!). Months 5-7: DOP-C02 (DevOps Engineer Professional). All Stephane Maarek + Tutorials Dojo practice exams.',
    courses: [
      'Stephane Maarek — Ultimate AWS SAA-C03 2026 (Udemy) · Months 1-2',
      'Tutorials Dojo — SAA-C03 Practice Exams (390 questions) · Exam prep',
      'Stephane Maarek — AWS Certified Developer Associate DVA-C02 (Udemy) · Months 3-4',
      'Tutorials Dojo — DVA-C02 Practice Exams · Exam prep',
      'Stephane Maarek — AWS DevOps Engineer Professional DOP-C02 (Udemy) · Months 5-7',
      'Tutorials Dojo — DOP-C02 Practice Exams · Exam prep',
    ],
    wplan: [
      {
        w: 1,
        f: 'SAA-C03: Full Course + IAM/EC2/S3/VPC/RDS/DDB/ELB/Serverless',
        t: 'Stephane Maarek SAA-C03 full course. IAM, EC2, S3, VPC, RDS, DynamoDB/DAX, ALB/NLB, Lambda, API Gateway, Step Functions, ECS/EKS, SQS/SNS, CloudFront, Route53. Disaster Recovery strategies.',
      },
      {
        w: 4,
        f: 'SAA-C03 Exam → DVA-C02: Lambda + DDB + Cognito + CDK',
        t: 'Tutorials Dojo SAA-C03 mocks. Sit SAA-C03. Begin DVA-C02: Lambda deep dive, DynamoDB advanced, API Gateway, Cognito (your FPO auth!), Step Functions (your FPO!), CDK TypeScript (your FPO IaC!), X-Ray.',
      },
      {
        w: 7,
        f: 'DVA-C02 Exam → DOP-C02: CI/CD + CloudFormation + SSM',
        t: 'Tutorials Dojo DVA-C02 mocks. Sit DVA-C02. Begin DOP-C02: CodePipeline/CodeBuild/CodeDeploy, CloudFormation advanced, Systems Manager, Config, CloudWatch advanced, OpsWorks, Trusted Advisor.',
      },
      {
        w: 11,
        f: 'DOP-C02 Exam — All 3 AWS Certs Done',
        t: 'Tutorials Dojo DOP-C02 mocks (hardest AWS cert). Sit DOP-C02. All 3 AWS certifications achieved. Credly badges + LinkedIn update. D913 = Dec 18, 2028 = AWS DONE 🎉',
      },
    ],
  },
  {
    id: 'p11',
    block: 'b2',
    seq: 12,
    icon: '☸',
    color: '#4338CA',
    dark: '#3730A3',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'CKA Kubernetes Certification',
    label: 'Block 2 · Month 9 · Cert',
    days: 30,
    ds: 914,
    de: 943,
    period: 'Dec 19, 2028 – Jan 17, 2029',
    ms: 'CKA Done · D943',
    about:
      '30 days · 1 month. CKA (Certified Kubernetes Administrator) — you already hold this cert, so this is deep revision + recertification. Focus on weak areas: NetworkPolicies, RBAC, cluster upgrades, etcd backup/restore, troubleshooting. Killer.sh 2 exam simulation sessions (hardest mock available).',
    courses: [
      'Mumshad Mannambeth — CKA (KodeKloud, Udemy) · full course revision',
      'Killer.sh — CKA exam simulator (2 sessions) · closest to real exam difficulty',
      'KodeKloud labs — hands-on K8s cluster practice',
    ],
    wplan: [
      {
        w: 1,
        f: 'K8s Core: Pods + Deployments + Services',
        t: 'kubectl commands, Pods/ReplicaSets/Deployments, Services (ClusterIP/NodePort/LB), ConfigMaps, Secrets, Namespaces',
      },
      {
        w: 2,
        f: 'K8s Networking + Storage + Security',
        t: 'Ingress, NetworkPolicies, PV/PVC/StorageClasses, RBAC (Role/ClusterRole/RoleBinding), ServiceAccounts, PodSecurity',
      },
      {
        w: 3,
        f: 'K8s Cluster Admin + Troubleshooting',
        t: 'Cluster upgrade (kubeadm), etcd backup/restore, cluster installation, node troubleshooting, application failure debugging',
      },
      {
        w: 4,
        f: 'Killer.sh Mocks + Sit CKA',
        t: 'Killer.sh session 1 + 2 (timed, terminal). Review all failures. Sit CKA exam. Credly + LinkedIn update.',
      },
    ],
  },
  {
    id: 'p12',
    block: 'b2',
    seq: 12,
    icon: '🏗',
    color: '#B45309',
    dark: '#92400E',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'Terraform Associate Certification',
    label: 'Block 2 · Month 9 · Cert',
    days: 31,
    ds: 944,
    de: 974,
    period: 'Jan 18 – Feb 17, 2029',
    ms: 'Terraform Associate Done · D974',
    about:
      '31 days · 1 month. HashiCorp Terraform Associate 003. HCL syntax, providers, resources, variables, outputs, modules, state management, remote state (S3+DynamoDB backend), workspaces, meta-arguments, provisioners, import, Terraform Cloud. You already use Terraform for FPO Cloud — this certifies that knowledge.',
    courses: [
      'Bogdan Stashchuk — HashiCorp Terraform Associate 003 (Udemy) · most practical course',
      'HashiCorp Learn — official Terraform tutorials (free) · hands-on labs',
      'ExamPro — Terraform Associate practice exams · exam prep',
    ],
    wplan: [
      {
        w: 1,
        f: 'HCL + Providers + Resources + State',
        t: 'HCL syntax, terraform init/plan/apply/destroy, providers (AWS), resources, data sources, variables, outputs, locals, .tfvars',
      },
      {
        w: 2,
        f: 'Modules + Workspaces + Meta-arguments',
        t: 'Remote state (S3+DynamoDB locking), modules (create/use/publish), workspaces, count/for_each/depends_on, lifecycle blocks',
      },
      {
        w: 3,
        f: 'Advanced + Cloud + Mock Exams',
        t: 'Provisioners, import, moved blocks, Terraform Cloud basics. ExamPro practice tests. Sit Terraform Associate 003 exam.',
      },
    ],
  },
  {
    id: 'p13',
    block: 'b2',
    seq: 13,
    icon: '☕',
    color: '#EA580C',
    dark: '#C2410C',
    bg: '#FFF7ED',
    border: '#FED7AA',
    name: 'Java SE 17 Certification (1Z0-829)',
    label: 'Block 2 · Month 10 · Cert',
    days: 31,
    ds: 975,
    de: 1005,
    period: 'Feb 18 – Mar 20, 2029',
    ms: 'Oracle Java SE 17 Cert Done · D1005',
    about:
      '31 days · 1 month. Oracle Java SE 17 Developer certification (1Z0-829). OOP, generics, collections, streams, lambdas, Optional, modules (JPMS), concurrency, I/O, JDBC, records, sealed classes, pattern matching, switch expressions. Enthuware mock exams — 1000+ questions.',
    courses: [
      'Enthuware — Java SE 17 (1Z0-829) mock exam software · 1000+ questions · best prep tool',
      'Oracle University — Java SE 17 Developer Study Guide (official) · full topic coverage',
      'Tim Buchalka — Java Masterclass 2026 (Udemy) · reference for any topic gaps',
    ],
    wplan: [
      {
        w: 1,
        f: 'Java 17 OOP + Generics + Collections',
        t: 'Classes/inheritance/polymorphism, interfaces (default/static methods), generics (<T>/wildcards/bounds), Collections, Comparator',
      },
      {
        w: 2,
        f: 'Java 17 Streams + Lambdas + Modules',
        t: 'Stream API (filter/map/reduce/collect/flatMap), Optional, method references, functional interfaces, JPMS module-info.java',
      },
      {
        w: 3,
        f: 'Java 17 Concurrency + Records + Mock',
        t: 'ExecutorService, CompletableFuture, synchronized. Records, sealed classes, pattern matching. Enthuware 500 mock Qs. Sit 1Z0-829.',
      },
    ],
  },
  {
    id: 'p14',
    block: 'b2',
    seq: 14,
    icon: '🐍',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'Python PCEP + PCAP Certifications',
    label: 'Block 2 · Month 11 · Cert',
    days: 28,
    ds: 1006,
    de: 1033,
    period: 'Mar 21 – Apr 17, 2029',
    ms: 'Python PCEP + PCAP Done · D1033',
    about:
      '28 days · 1 month. Two Python Institute certifications. PCEP (weeks 1-2): Python basics, data types, control flow, functions, exceptions, strings, lists. PCAP (weeks 3-4): OOP, modules/packages, exceptions hierarchy, file I/O, generators, closures, decorators. Python already solid from Block 1 DevOps — this is structured revision + exam.',
    courses: [
      'Python Institute — PCEP-30-02 official study guide + OpenEDG practice tests · PCEP',
      'Python Institute — PCAP-31-03 official study guide + OpenEDG practice tests · PCAP',
    ],
    wplan: [
      {
        w: 1,
        f: 'PCEP: Basics + Functions + Exceptions',
        t: 'Variables, data types, operators, control flow, functions, exception handling (try/except/finally/raise), strings, lists, tuples',
      },
      {
        w: 2,
        f: 'PCEP Mock Exams + Sit PCEP',
        t: 'OpenEDG PCEP practice tests (100+ questions). Timed mock. Sit PCEP exam. 45 min, 30 questions, 70% to pass.',
      },
      {
        w: 3,
        f: 'PCAP: OOP + Modules + Generators',
        t: 'OOP (classes/inheritance/MRO/dunder methods), modules/packages, file I/O, generators, closures, decorators',
      },
      {
        w: 4,
        f: 'PCAP Mock Exams + Sit PCAP',
        t: 'OpenEDG PCAP practice tests. Timed mock. Sit PCAP exam. 65 min, 40 questions, 70% to pass. Credly + LinkedIn.',
      },
    ],
  },
  {
    id: 'p15',
    block: 'b2',
    seq: 15,
    icon: '🌿',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'Spring Professional Certification',
    label: 'Block 2 · Month 12 · Cert · FINAL',
    days: 31,
    ds: 1034,
    de: 1064,
    period: 'Apr 18 – May 18, 2029',
    ms: 'All 9 Certs + 1064 DAYS COMPLETE · May 18, 2029',
    about:
      '31 days · 1 month. VMware/Broadcom Spring Professional 2024 (EDU-1202) — the most recognised Java/Spring certification. Spring Core (IoC/DI/AOP), Spring Boot auto-configuration, Spring MVC REST APIs, Spring Data JPA, Spring Security (JWT/OAuth2), Spring Testing. You built full Spring Boot apps in Block 1 Skill 3 — this consolidates and certifies that knowledge. Day 1064 = May 18, 2029 = ALL DONE.',
    courses: [
      'VMware/Broadcom — Spring Professional 2024 (EDU-1202) official study guide',
      'John Thompson — Spring Framework 6 Beginner to Guru (Udemy) · reference for gaps',
      'Udemy — Spring Professional Certification mock exam questions · practice tests',
    ],
    wplan: [
      {
        w: 1,
        f: 'Spring Core + Boot + MVC',
        t: 'IoC container, @Bean/@Component/@Autowired, AOP (@Aspect/@Around), Spring Boot auto-configuration, starters, Actuator, @RestController',
      },
      {
        w: 2,
        f: 'Spring Data JPA + Security',
        t: 'JpaRepository, @Transactional, N+1/@EntityGraph, SecurityFilterChain, JWT, OAuth2 resource server (your FPO Cognito pattern!), @PreAuthorize',
      },
      {
        w: 3,
        f: 'Spring Testing + Mock Exams',
        t: '@SpringBootTest, @WebMvcTest, MockMvc, @DataJpaTest, Testcontainers, Mockito. EDU-1202 mock practice. Sit Spring Professional exam.',
      },
      {
        w: 4,
        f: 'All 9 Certs · Day 1064 DONE',
        t: 'Spring cert achieved. All 9 badges on Credly: AWS×3, CKA, Terraform, Java, Python, Spring. Day 1064 = May 18, 2029 = 1064 DAYS COMPLETE 🎉',
      },
    ],
  },
];

const MILESTONES = [
  {
    day: 92,
    icon: '⚛',
    label: 'React JS + Next.js Done',
    date: 'Sep 19, 2026',
    color: '#0EA5E9',
  },
  {
    day: 152,
    icon: '📱',
    label: 'React Native Done',
    date: 'Nov 18, 2026',
    color: '#7C3AED',
  },
  {
    day: 182,
    icon: '🟢',
    label: 'Express.js Done',
    date: 'Dec 18, 2026',
    color: '#16A34A',
  },
  {
    day: 274,
    icon: '🌱',
    label: 'Spring Boot Done',
    date: 'Mar 20, 2027',
    color: '#16A34A',
  },
  {
    day: 335,
    icon: '🏛',
    label: 'Microservices Done',
    date: 'May 20, 2027',
    color: '#E11D48',
  },
  {
    day: 385,
    icon: '🔧',
    label: 'DevOps+Python Done',
    date: 'Jul 9, 2027',
    color: '#D97706',
  },
  {
    day: 420,
    icon: '🎸',
    label: 'Django Done',
    date: 'Aug 13, 2027',
    color: '#0891B2',
  },
  {
    day: 468,
    icon: '🤖',
    label: 'Agentic AI — 16mo DONE',
    date: 'Sep 30, 2027',
    color: '#6366F1',
  },

  {
    day: 699,
    icon: '🧩',
    label: 'DSA Complete',
    date: 'May 18, 2028',
    color: '#4F46E5',
  },
  {
    day: 821,
    icon: '🏗',
    label: 'System Design Done',
    date: 'Sep 17, 2028',
    color: '#7C3AED',
  },
  {
    day: 913,
    icon: '☁',
    label: 'AWS ×3 Certs Done',
    date: 'Dec 18, 2028',
    color: '#D97706',
  },
  {
    day: 943,
    icon: '☸',
    label: 'CKA Done',
    date: 'Jan 17, 2029',
    color: '#4338CA',
  },
  {
    day: 974,
    icon: '🏗',
    label: 'Terraform Done',
    date: 'Feb 17, 2029',
    color: '#B45309',
  },
  {
    day: 1005,
    icon: '☕',
    label: 'Java SE 17 Done',
    date: 'Mar 20, 2029',
    color: '#EA580C',
  },
  {
    day: 1033,
    icon: '🐍',
    label: 'Python PCEP+PCAP Done',
    date: 'Apr 17, 2029',
    color: '#16A34A',
  },
  {
    day: 1064,
    icon: '🏆',
    label: 'Spring Cert — ALL 9 DONE',
    date: 'May 18, 2029',
    color: '#E11D48',
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
  return Math.min(100, Math.round((daysIn() / TOTAL) * 100));
}

function Card({ p, open, onToggle, isCurrent, isDone }) {
  const [wkOpen, setWkOpen] = useState(false);
  const bTag = { b1: '📚 Skill Plan', b2: '🚀 Advanced' };
  const bCol = { b1: '#0EA5E9', b2: '#6366F1' };
  const bBg = { b1: '#F0F9FF', b2: '#EEF2FF' };
  const bBdr = { b1: '#BAE6FD', b2: '#C7D2FE' };
  return (
    <div
      id={'ph-' + p.id}
      style={{
        borderRadius: 12,
        overflow: 'hidden',
        transition: 'all 0.22s',
        border:
          '2px solid ' +
          (open
            ? p.color + '80'
            : isCurrent
              ? '#F59E0B80'
              : isDone
                ? p.color + '28'
                : p.border),
        background: open ? p.bg : isDone ? '#FAFBFF' : '#fff',
        opacity: isDone ? 0.78 : 1,
        boxShadow: open
          ? '0 6px 24px ' + p.color + '18'
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
          padding: '11px 13px',
          display: 'flex',
          alignItems: 'center',
          gap: 9,
          textAlign: 'left',
          fontFamily: 'inherit',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 11,
            flexShrink: 0,
            background: open
              ? 'linear-gradient(135deg,' + p.color + ',' + p.dark + ')'
              : isDone
                ? '#F1F5F9'
                : p.bg,
            border: '2px solid ' + p.color + '35',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: open ? '0 4px 14px ' + p.color + '45' : 'none',
          }}
        >
          <span style={{ fontSize: 17, lineHeight: 1 }}>
            {isDone ? '✅' : p.icon}
          </span>
          <span
            style={{
              fontSize: 7,
              fontWeight: 700,
              color: open ? 'rgba(255,255,255,0.6)' : p.color,
              marginTop: 1,
            }}
          >
            {'#' + p.seq}
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
                {'📍 NOW'}
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
                {'✅ DONE'}
              </span>
            )}
            <span
              style={{
                fontSize: 8,
                fontWeight: 700,
                padding: '1px 6px',
                borderRadius: 10,
                background: bBg[p.block],
                color: bCol[p.block],
                border: '1px solid ' + bBdr[p.block],
                whiteSpace: 'nowrap',
              }}
            >
              {bTag[p.block]}
            </span>
            <span
              style={{
                fontSize: 'clamp(12px,3.8vw,14px)',
                fontWeight: 900,
                color: '#0F172A',
              }}
            >
              {p.name}
            </span>
          </div>
          <div style={{ fontSize: 9, color: '#64748B', marginBottom: 1 }}>
            {p.period + ' · ' + p.days + 'd · D' + p.ds + '–D' + p.de}
          </div>
          <div style={{ fontSize: 8, fontWeight: 700, color: p.color }}>
            {'🏆 ' + p.ms}
          </div>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 900,
              color: p.color,
              background: p.color + '12',
              padding: '2px 9px',
              borderRadius: 12,
              border: '1px solid ' + p.color + '22',
              marginBottom: 2,
            }}
          >
            {p.days + 'd'}
          </div>
          <div style={{ fontSize: 8, color: '#94A3B8' }}>{p.label}</div>
        </div>
        <span
          style={{
            color: p.color,
            fontSize: 17,
            flexShrink: 0,
            opacity: open ? 1 : 0.3,
            transform: open ? 'rotate(90deg)' : 'none',
            transition: 'transform 0.2s',
          }}
        >
          {'›'}
        </span>
      </button>
      {open && (
        <div
          style={{
            borderTop: '2px solid ' + p.color + '18',
            padding: '10px 13px 15px',
          }}
        >
          <div
            style={{
              background: p.color + '0A',
              border: '1px solid ' + p.color + '22',
              borderRadius: 9,
              padding: '9px 12px',
              marginBottom: 10,
              fontSize: 11,
              color: '#334155',
              lineHeight: 1.8,
            }}
          >
            {p.about}
          </div>
          <div
            style={{
              background: '#F8FAFC',
              borderRadius: 8,
              padding: '9px 11px',
              border: '1px solid #E2E8F0',
              marginBottom: 10,
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
              {'📚 COURSES'}
            </div>
            {p.courses.map((co, i) => (
              <div
                key={i}
                style={{ display: 'flex', gap: 6, padding: '3px 0' }}
              >
                <span
                  style={{
                    fontSize: 9,
                    flexShrink: 0,
                    fontWeight: 700,
                    color: p.color,
                    marginTop: 1,
                  }}
                >
                  {i + 1 + '.'}
                </span>
                <span
                  style={{ fontSize: 10, color: '#374151', lineHeight: 1.6 }}
                >
                  {co}
                </span>
              </div>
            ))}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setWkOpen(!wkOpen);
            }}
            style={{
              width: '100%',
              background: p.color + '08',
              border: '1px solid ' + p.color + '25',
              borderRadius: 8,
              padding: '7px 11px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: wkOpen ? 8 : 0,
            }}
          >
            <span style={{ fontSize: 10, fontWeight: 700, color: p.color }}>
              {'📅 Week-by-Week — ' + p.wplan.length + ' phases'}
            </span>
            <span style={{ fontSize: 11, color: p.color }}>
              {wkOpen ? '▲' : '▼'}
            </span>
          </button>
          {wkOpen && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {p.wplan.map((wk) => (
                <div
                  key={wk.w}
                  style={{
                    display: 'flex',
                    gap: 8,
                    alignItems: 'flex-start',
                    background: '#fff',
                    borderRadius: 8,
                    padding: '8px 10px',
                    border: '1.5px solid ' + p.color + '18',
                  }}
                >
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 8,
                      flexShrink: 0,
                      background: p.color + '15',
                      color: p.color,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{ fontSize: 7, fontWeight: 700, lineHeight: 1 }}
                    >
                      {'W'}
                    </span>
                    <span
                      style={{ fontSize: 12, fontWeight: 900, lineHeight: 1 }}
                    >
                      {wk.w}
                    </span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: '#0F172A',
                        marginBottom: 2,
                      }}
                    >
                      {wk.f}
                    </div>
                    <div
                      style={{ fontSize: 9, color: '#64748B', lineHeight: 1.6 }}
                    >
                      {wk.t}
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
  const [openId, setOpenId] = useState(null);
  const [showMs, setShowMs] = useState(true);
  const d = daysIn(),
    cid = curId(),
    prog = pct();
  const msDone = MILESTONES.filter((m) => m.day <= d + 1).length;
  const nextMs = MILESTONES.find((m) => m.day > d + 1);
  const toggle = (id) => setOpenId(openId === id ? null : id);
  const jump = (id) => {
    setOpenId(id);
    setTimeout(
      () =>
        document
          .getElementById('ph-' + id)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' }),
      80,
    );
  };

  const sections = [
    {
      col: '#0EA5E9',
      title: '📚 BLOCK 1 · 16-MONTH SKILL PLAN · 8 SKILLS',
      sub: 'D1–D468 · Jun 20, 2026 – Sep 30, 2027 · 468 days · 5:30–8:30 AM · React+Next.js → RN → Express.js → Spring Boot → Micro → DevOps+Python → Django → Agentic AI',
      ids: ['p1', 'p2', 'p2b', 'p3', 'p4', 'p5', 'p6', 'p7'],
    },
    {
      col: '#6366F1',
      title: '🚀 BLOCK 2 · ADVANCED STUDIES',
      sub: 'D469–D1064 · Oct 1, 2027 – May 18, 2029 · 596 days · 5:30–8:30 AM · DSA → System Design → AWS×3 Certs → CKA+TF+Java+Python+Spring Certs',
      ids: ['p9', 'p10b', 'p10', 'p11', 'p12', 'p13', 'p14', 'p15'],
    },
  ];

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
      <div
        style={{
          background:
            'linear-gradient(135deg,#1a237e 0%,#283593 42%,#1565C0 100%)',
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
              'radial-gradient(circle,rgba(255,255,255,0.05) 1px,transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div
          style={{
            maxWidth: 700,
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 11,
              marginBottom: 10,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                flexShrink: 0,
                background: 'linear-gradient(135deg,#F59E0B,#D97706)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                boxShadow: '0 4px 18px rgba(245,158,11,0.5)',
              }}
            >
              {'🏆'}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                  marginBottom: 1,
                }}
              >
                {'Sumit Rawal · NextStep Bangkok · FPO Cloud'}
              </div>
              <div
                style={{
                  fontSize: 'clamp(20px,6vw,28px)',
                  fontWeight: 900,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                {'1064 Days of Code'}
              </div>
              <div
                style={{
                  fontSize: 9,
                  color: 'rgba(255,255,255,0.6)',
                  marginTop: 2,
                }}
              >
                {
                  'Sat Jun 20, 2026 → Fri May 18, 2029 · 5:30 AM – 8:30 AM daily · 3 hours'
                }
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2,1fr)',
              gap: 7,
              marginBottom: 11,
            }}
          >
            {BLOCKS.map((b) => (
              <div
                key={b.id}
                style={{
                  background: 'rgba(255,255,255,0.09)',
                  borderRadius: 10,
                  padding: '10px 12px',
                  border: '1px solid ' + b.col + '50',
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
                  <span style={{ fontSize: 15 }}>{b.icon}</span>
                  <span style={{ fontSize: 10, fontWeight: 800, color: b.col }}>
                    {b.title}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 8,
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.6,
                    marginBottom: 5,
                  }}
                >
                  {b.sub}
                </div>
                <div
                  style={{
                    fontSize: 8,
                    color: 'rgba(255,255,255,0.6)',
                    marginBottom: 3,
                  }}
                >
                  {b.detail}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.85)',
                    background: b.col + '20',
                    borderRadius: 6,
                    padding: '3px 8px',
                    display: 'inline-block',
                  }}
                >
                  {b.time}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              background: 'rgba(14,165,233,0.14)',
              border: '1px solid rgba(14,165,233,0.4)',
              borderRadius: 8,
              padding: '8px 12px',
              marginBottom: 10,
              display: 'flex',
              gap: 9,
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 15, flexShrink: 0 }}>{'⏰'}</span>
            <div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: '#7DD3FC',
                  marginBottom: 1,
                }}
              >
                {
                  '5:30 AM – 8:30 AM daily · 3 hours · MANDATORY · Every day including weekends'
                }
              </div>
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.5)' }}>
                {
                  'Jun 20, 2026 → May 18, 2029 · 1064 days · Single focused study slot · No 2nd slot'
                }
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 10 }}>
            <div
              style={{
                height: 11,
                borderRadius: 5,
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
                        ? p.color + '75'
                        : d + 1 >= p.ds
                          ? p.color
                          : p.color + '30',
                  }}
                  onClick={() => jump(p.id)}
                  title={'D' + p.ds + '–D' + p.de + ': ' + p.name}
                />
              ))}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 3,
                fontSize: 8,
                color: 'rgba(255,255,255,0.4)',
              }}
            >
              <span>{'Jun 20, 2026'}</span>
              <span
                style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 700 }}
              >
                {prog + '% · Day ' + Math.min(d + 1, 1064) + ' of 1064'}
              </span>
              <span>{'May 18, 2029'}</span>
            </div>
          </div>

          <button
            onClick={() => setShowMs(!showMs)}
            style={{
              width: '100%',
              background: 'rgba(255,255,255,0.09)',
              border: '1px solid rgba(255,255,255,0.18)',
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
              {'🏆 ' +
                MILESTONES.length +
                ' Milestones — ' +
                msDone +
                ' completed'}
            </span>
            <span
              style={{
                color: 'rgba(255,255,255,0.55)',
                fontSize: 13,
                transform: showMs ? 'rotate(90deg)' : 'none',
                transition: 'transform 0.2s',
              }}
            >
              {'›'}
            </span>
          </button>
          {showMs && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill,minmax(148px,1fr))',
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
                          : 'rgba(255,255,255,0.07)',
                      border:
                        '1px solid ' +
                        (isNext
                          ? 'rgba(245,158,11,0.5)'
                          : done
                            ? m.color + '55'
                            : 'rgba(255,255,255,0.1)'),
                    }}
                  >
                    <span style={{ fontSize: 13, flexShrink: 0 }}>
                      {done ? '✅' : isNext ? '🎯' : m.icon}
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: 9,
                          fontWeight: 700,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          color: done
                            ? '#fff'
                            : isNext
                              ? '#FDE68A'
                              : 'rgba(255,255,255,0.6)',
                        }}
                      >
                        {m.label}
                      </div>
                      <div
                        style={{ fontSize: 7, color: 'rgba(255,255,255,0.35)' }}
                      >
                        {'D' + m.day + ' · ' + m.date}
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: 7,
                        fontWeight: 800,
                        padding: '1px 4px',
                        borderRadius: 5,
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

      <div
        style={{ maxWidth: 700, margin: '0 auto', padding: '14px 10px 44px' }}
      >
        {sections.map((sec) => (
          <div key={sec.title}>
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
                  background:
                    'linear-gradient(90deg,' + sec.col + ',' + sec.col + '10)',
                }}
              />
              <div
                style={{ textAlign: 'center', flexShrink: 0, padding: '0 6px' }}
              >
                <div
                  style={{
                    fontSize: 'clamp(9px,2.5vw,11px)',
                    fontWeight: 800,
                    color: sec.col,
                    letterSpacing: '0.08em',
                  }}
                >
                  {sec.title}
                </div>
                <div style={{ fontSize: 8, color: '#94A3B8', marginTop: 1 }}>
                  {sec.sub}
                </div>
              </div>
              <div
                style={{
                  height: 2,
                  flex: 1,
                  background:
                    'linear-gradient(90deg,' + sec.col + '10,' + sec.col + ')',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {PHASES.filter((p) => sec.ids.includes(p.id)).map((p) => (
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

        <div
          style={{
            marginTop: 22,
            background: 'linear-gradient(135deg,#1a237e,#1565C0)',
            borderRadius: 12,
            padding: '15px 17px',
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
            {'🏆 1064 Days of Code · Jun 20, 2026 → May 18, 2029'}
          </div>
          <div
            style={{
              fontSize: 9,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 8,
            }}
          >
            {
              'Block 1: 16-Month Skills (D1–D468) · Block 2: Advanced Studies (D469–D1064) · 5:30–8:30 AM · 3h daily'
            }
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 4,
              flexWrap: 'wrap',
            }}
          >
            {PHASES.map((p, i, a) => (
              <span
                key={p.id}
                style={{ display: 'flex', alignItems: 'center', gap: 2 }}
              >
                <span
                  style={{
                    fontSize: 8,
                    color: p.color,
                    fontWeight: 700,
                    opacity: d + 1 > p.de ? 1 : 0.35,
                  }}
                >
                  {p.icon + ' ' + p.name.split(' ')[0]}
                </span>
                {i < a.length - 1 && (
                  <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 8 }}>
                    {'·'}
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
