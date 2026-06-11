import { useState } from 'react';

// ── 144 DAYS · 432H · JUL 15 → DEC 5, 2027 ─────────────────────────────────
const PHASES = [
  {
    id: 'java',
    n: 1,
    icon: '☕',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'Java Spring Boot Developer',
    role: '🏢 Target Role: Java Spring Boot / Microservices Developer',
    days: 30,
    total: 90,
    courseH: 54,
    practiceH: 36,
    offset: 0,
    startDate: 'Jul 15, 2027',
    endDate: 'Aug 13, 2027',
    tag: 'ROLE 1',
    daily:
      '6:00–7:30 AM → Course Q&A (1.5h) · 7:30–9:00 AM → Write code answers from memory (1.5h)',
    whatYouNeedToKnow: [
      'Core Java: OOP, Collections, Generics, Multithreading, equals/hashCode contract',
      'Java 8+: Streams API, Lambdas, Optional, CompletableFuture, Method references',
      'Spring Boot: IoC/DI, Bean lifecycle, @Transactional, AOP, auto-configuration',
      'Spring Data JPA: Entity mapping, N+1 problem fix, JPQL, @Query, Specifications',
      'Spring Security: JWT auth flow, OAuth2, Cognito integration (your FPO experience!)',
      'Microservices: Circuit Breaker, Saga pattern, Kafka, API Gateway, K8s basics',
      'Testing: @WebMvcTest, @DataJpaTest, Testcontainers, Mockito — interviewers love this',
    ],
    practice: [
      'Write 5 Java 8 Streams problems daily from memory (filter, map, groupingBy, flatMap, reduce)',
      'Explain every Spring concept out loud as if teaching — IoC, DI, AOP, @Transactional',
      'Build a mini REST API from scratch in 30 min — CRUD + JWT auth + Dockerfile',
      'Map FPO patterns to Java: C# Lambda → Spring @Service, EventBridge → Kafka, DynamoDB → JPA',
      'Prepare STAR stories: DLH trajectory NullRef bug, LZA migration, multi-tenant Cognito for 9 pools',
    ],
    interviewQs: [
      'What is the difference between @Component, @Service, @Repository, @Controller?',
      'Explain how Spring @Transactional propagation works — REQUIRED vs REQUIRES_NEW',
      'How do you solve the N+1 problem in JPA? (your answer: @EntityGraph / JOIN FETCH)',
      'Design a JWT authentication flow end-to-end in Spring Security',
      'What is the Saga pattern? Orchestration vs Choreography? (your FPO uses Step Functions = Saga)',
      'How does Kafka consumer group work? What is a partition? (you use Kafka in FPO daily)',
    ],
    courses: [
      {
        h: 10,
        title: 'Java Programming Interview Guide — 200+ Q&A',
        by: 'Ranga Karanam (in28minutes)',
        rating: 4.5,
        stu: '80K+',
        url: 'https://www.udemy.com/course/java-interview-questions-and-answers/',
        tag: '🥇 JAVA 200 Q&A',
        tc: '#15803D',
        why: 'Best Java interview format — 200+ questions with code examples. Java 8 Streams, Collections, Generics, Multithreading, OOP deep dive. Perfect structured revision.',
      },
      {
        h: 10,
        title: 'Spring & Spring Boot Interview Guide — 200+ Q&A',
        by: 'Ranga Karanam (in28minutes)',
        rating: 4.5,
        stu: '60K+',
        url: 'https://www.udemy.com/course/spring-interview-questions-and-answers/',
        tag: '🌱 SPRING 200 Q&A',
        tc: '#0369A1',
        why: '200 Spring Q&A covering IoC, Bean scopes, @Transactional, JPA, AOP, REST, Microservices. Pairs perfectly with the Java guide. Do both simultaneously.',
      },
      {
        h: 13,
        title: 'Java Interview Masterclass — Top 350 Questions 2026 (PDF)',
        by: 'Happy Rawat',
        rating: 4.6,
        stu: '2K+',
        url: 'https://www.udemy.com/course/top-250-java-interview-questions/',
        tag: '💯 350 Q&A + PDF',
        tc: '#7C3AED',
        why: '350 questions covering Core Java, OOP, Collections, Multithreading, Generics, Spring, Spring Boot with PDF tracker. Last updated Dec 2025. Great daily warm-up — 30 Q every morning.',
      },
      {
        h: 12,
        title:
          'Java Interview Help — Java Spring Boot Microservices DevOps Cloud',
        by: 'Chad Darby',
        rating: 4.6,
        stu: '30K+',
        url: 'https://www.udemy.com/course/java-interview-help/',
        tag: '🎯 FULL STACK',
        tc: '#D97706',
        why: "Full-picture Java interview: Java + Spring Boot + Microservices + REST + DevOps + Cloud in one course. Chad Darby is one of Udemy's top Java instructors. Covers presentation skills too.",
      },
      {
        h: 9,
        title: 'Spring and Spring Boot Basic Interview Guide 2026',
        by: 'Multiple Instructors',
        rating: 4.7,
        stu: '3K+',
        url: 'https://www.udemy.com/course/spring-and-spring-boot-basic-interview-guide-2026/',
        tag: '🆕 2026 UPDATED',
        tc: '#059669',
        why: 'Updated April 2026 — covers Spring 7, Spring Boot 4, and latest interview patterns. IoC, DI, MVC, AOP, Profiles, Bean Scopes, Auto-Configuration, Embedded Servers. Perfect final revision.',
      },
    ],
  },
  {
    id: 'react',
    n: 2,
    icon: '⚛',
    color: '#0EA5E9',
    dark: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    name: 'React JS + React Native Developer',
    role: '💻 Target Role: React JS / React Native Developer (TypeScript)',
    days: 25,
    total: 75,
    courseH: 45,
    practiceH: 30,
    offset: 30,
    startDate: 'Aug 14, 2027',
    endDate: 'Sep 7, 2027',
    tag: 'ROLE 2',
    daily:
      '6:00–7:30 AM → Course Q&A (1.5h) · 7:30–9:00 AM → Build components from memory in TypeScript (1.5h)',
    whatYouNeedToKnow: [
      'React Fundamentals: Virtual DOM, reconciliation, fiber, component lifecycle, keys',
      'Hooks deep dive: useState, useEffect, useCallback, useMemo, useRef, useContext, useReducer',
      'Custom hooks: build useDebounce, useFetch, useLocalStorage, useClickOutside from scratch',
      'TypeScript in React: interfaces, generics, utility types (Pick/Omit/Partial), typed hooks',
      'State management: Context API vs Redux Toolkit vs React Query — know trade-offs cold',
      'Performance: React.memo, lazy/Suspense, code splitting, useTransition, profiler',
      'React Native specifics: StyleSheet, FlatList, Navigation, Expo, EAS Build, platform differences',
    ],
    practice: [
      'Build 5 components from memory with TypeScript — no copy-paste: custom hook, virtualized list, debounced search',
      "Explain every concept out loud: 'Virtual DOM works by...' until it sounds completely natural",
      'Implement useCallback + useMemo and MEASURE re-renders with React DevTools profiler',
      'Prepare 3 real code examples from your FPO React/RN work — have GitHub links ready',
      'Build a complete TypeScript React app in 90 min: flight search UI with hooks + API call + React Query',
    ],
    interviewQs: [
      "What is the Virtual DOM and how does React's reconciliation (fiber) work?",
      'Explain the difference between useCallback and useMemo — when do you actually need them?',
      'How would you type a generic React component with TypeScript? Show me the syntax.',
      'What is the difference between React.memo, PureComponent, and useMemo?',
      "How does React Native differ from React JS — what can't you do in RN that you can in React?",
      "Explain how you'd implement infinite scroll in React with React Query.",
    ],
    courses: [
      {
        h: 13,
        title: 'React Interview Masterclass — Top 200 Questions (+PDF) 2026',
        by: 'Happy Rawat',
        rating: 4.7,
        stu: '2.5K+',
        url: 'https://www.udemy.com/course/react-interview/',
        tag: '🥇 200 Q&A + PDF',
        tc: '#15803D',
        why: '4.7★. 200 React Q&A covering Hooks, Redux, TypeScript, Lifecycle, Routing with PDF + PPT revision book and interview tracker Excel sheet. Updated Dec 2025. Best structured React interview prep.',
      },
      {
        h: 8,
        title:
          'React Interview Questions — Coding Interview 2026 (TypeScript + RxJS)',
        by: 'Ariel Weinberger',
        rating: 4.6,
        stu: '8K+',
        url: 'https://www.udemy.com/course/react-interview-questions-coding-interview-2023/',
        tag: '💻 CODING+TS',
        tc: '#0369A1',
        why: '58 REAL React coding interview questions with TypeScript — you solve each problem yourself before the solution. Covers TypeScript and RxJS patterns essential for senior React roles.',
      },
      {
        h: 7,
        title:
          'React JS Complete Exam/Interview Test Preparation 2025 (420+ Q)',
        by: 'Multiple Instructors',
        rating: 4.6,
        stu: '3K+',
        url: 'https://www.udemy.com/course/react-js-complete-exam-interview-test-preparation-2025/',
        tag: '420 MCQ TESTS',
        tc: '#7C3AED',
        why: '420+ exam-style MCQ questions covering React + React Native basics (navigation, UI elements, platform differences). 40-50% scenario-based. Perfect daily practice test format.',
      },
      {
        h: 9,
        title:
          'Master the Coding Interview: Non-Technical (Resume, Salary, STAR)',
        by: 'Andrei Neagoie (ZTM)',
        rating: 4.7,
        stu: '60K+',
        url: 'https://www.udemy.com/course/master-the-coding-interview-get-more-job-offers/',
        tag: '🤝 NON-TECH',
        tc: '#D97706',
        why: '4.7★. Resume writing, LinkedIn optimisation, salary negotiation, STAR behavioral Q&A. 40% of hiring is non-technical. Your 12+ years + 7 AWS certs + FPO airline experience is gold — learn to present it.',
      },
      {
        h: 8,
        title: 'JavaScript Interview Prep — Become a Frontend Developer',
        by: 'Multiple Instructors',
        rating: 4.5,
        stu: '20K+',
        url: 'https://www.udemy.com/course/javascript-interview-prep-become-a-frontend-developer/',
        tag: '🟨 JS CORE',
        tc: '#059669',
        why: "JavaScript interview essentials: closures, hoisting, event loop, promises, async/await, prototype chain, 'this' keyword. Covers what React-specific courses miss. Essential for senior frontend roles.",
      },
    ],
  },
  {
    id: 'pyai',
    n: 3,
    icon: '🤖',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'Python + Generative & Agentic AI',
    role: '🧠 Target Role: Python AI Engineer / GenAI Developer / LLM Engineer',
    days: 25,
    total: 75,
    courseH: 45,
    practiceH: 30,
    offset: 55,
    startDate: 'Sep 8, 2027',
    endDate: 'Oct 2, 2027',
    tag: 'ROLE 3',
    daily:
      '6:00–7:30 AM → Course (1.5h) · 7:30–9:00 AM → Build an AI agent or RAG pipeline (1.5h)',
    whatYouNeedToKnow: [
      'Python fundamentals: OOP, decorators, generators, async/await, type hints — interviewers test basics first',
      'LLM concepts: tokenisation, embeddings, temperature, context window, fine-tuning vs RAG',
      'LangChain: chains, agents, tools, memory, LCEL, RAG pipeline with vector databases (Pinecone, FAISS)',
      'LangGraph: state machines, conditional edges, multi-agent orchestration, ReAct + Reflection patterns',
      'Agentic patterns: ReAct, Reflection, Planning, Multi-agent (orchestrator + sub-agents), MCP protocol',
      'AWS Bedrock + boto3: invoke_model, Knowledge Bases, Agents for Bedrock — your FPO infra!',
      'Evaluation: how to measure LLM output quality, hallucination detection, LangSmith tracing',
    ],
    practice: [
      'Build a RAG pipeline from scratch: PDF → chunk → embed → Pinecone → retrieve → generate',
      'Build a LangGraph multi-agent workflow: planner → researcher → writer with state management',
      'Deploy a LangChain agent as an AWS Lambda with API Gateway — your exact FPO pattern',
      'Build FPO AI Assistant: natural language query over flight data using LangChain + DynamoDB tool',
      'Prepare GitHub portfolio: 3 AI agent projects with README, architecture diagram, demo video',
    ],
    interviewQs: [
      'What is RAG and why is it better than fine-tuning for most enterprise use cases?',
      'Explain the ReAct pattern — Reasoning + Acting. How does LangGraph implement this?',
      'What is a vector database? How does cosine similarity work for retrieval?',
      'How would you build a multi-agent system where agents coordinate? What is MCP?',
      "How do you evaluate an LLM agent's output? What metrics do you use?",
      'How would you deploy a LangChain agent to production on AWS? Walk me through the architecture.',
    ],
    courses: [
      {
        h: 22,
        title:
          'LangChain: Agentic AI Engineering with LangChain & LangGraph 2026',
        by: 'Eden Marco',
        rating: 4.7,
        stu: '114K+',
        url: 'https://www.udemy.com/course/langchain/',
        tag: '🥇 LANGCHAIN CORE',
        tc: '#15803D',
        why: '114K students. Re-recorded 2026 — supports LangChain v1.2+. Covers LangChain fundamentals, LangGraph agents, RAG, MCP, production deployment. Eden Marco is the definitive LangChain instructor on Udemy.',
      },
      {
        h: 15,
        title: 'Complete Agentic AI Bootcamp with LangGraph and LangChain',
        by: 'Multiple Instructors',
        rating: 4.8,
        stu: '6K+',
        url: 'https://www.udemy.com/course/complete-agentic-ai-bootcamp-with-langgraph-and-langchain/',
        tag: '🕸 LANGGRAPH',
        tc: '#0369A1',
        why: '4.8★ — highest rated in this category. Deep LangGraph: state machines, multi-agent coordination, ReAct + Reflection patterns, agentic RAG. Customer service bots, data processors, recommendation engines.',
      },
      {
        h: 8,
        title: 'Python Interview Questions — Core Python + OOP + Automation',
        by: 'Multiple Instructors',
        rating: 4.5,
        stu: '15K+',
        url: 'https://www.udemy.com/course/python-interview-questions-and-answers/',
        tag: '🐍 PYTHON CORE',
        tc: '#D97706',
        why: "Core Python interview Q&A: OOP, decorators, generators, async, closures, type hints. AI interviewers always test Python fundamentals before LangChain. Don't skip this even after 400 days.",
      },
    ],
  },
  {
    id: 'sysdesign',
    n: 4,
    icon: '🏗',
    color: '#F59E0B',
    dark: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'System Design',
    role: '📐 Cross-Cutting: Required for ALL 3 Roles at Senior Level',
    days: 22,
    total: 66,
    courseH: 40,
    practiceH: 26,
    offset: 80,
    startDate: 'Oct 3, 2027',
    endDate: 'Oct 24, 2027',
    tag: 'ALL ROLES',
    daily:
      '6:00–7:20 AM → Course (1.33h) · 7:20–9:00 AM → Design 1 system from scratch on paper (1.67h)',
    whatYouNeedToKnow: [
      'Core building blocks: Load Balancer, CDN, Cache (Redis), Message Queue (Kafka), API Gateway, DB',
      'SQL vs NoSQL trade-offs, Sharding, Replication, CAP theorem, ACID vs BASE',
      'Scalability: horizontal vs vertical, stateless services, database read replicas',
      'Microservices: Service Discovery, Circuit Breaker, Saga, API Gateway, CQRS, Event Sourcing',
      'AI-specific: Vector DB architecture, LLM serving infrastructure, RAG system design, Agent orchestration',
      'Estimation: back-of-envelope QPS, storage, bandwidth — practice 10 scenarios',
    ],
    practice: [
      'Design 1 system every day — 45 min strict, spoken aloud, paper first',
      'Java role: Design URL Shortener, WhatsApp, Notification System, Flight Booking System (your FPO!)',
      'React role: Design a CDN, Real-time Collaboration (Google Docs), Social Media Feed',
      'AI role: Design a RAG System, LLM Serving Infrastructure, AI Agent Orchestration Platform',
      'FPO superpower: your architecture IS a system design answer — Lambda=microservice, DynamoDB=NoSQL at scale',
    ],
    interviewQs: [
      'Design a real-time flight trajectory optimisation system (your FPO!) — walk me through it',
      'Design a notification system supporting email, push, SMS (FPO uses this for airline alerts!)',
      "Design a RAG system for a large enterprise knowledge base — what's your vector DB choice?",
      'How would you scale a Java Spring Boot API from 100 RPS to 100K RPS?',
      'Design a multi-tenant SaaS platform — how do you isolate data? (your FPO is multi-tenant!)',
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
        why: 'Ex-Amazon hiring manager teaches exactly what interviewers look for. 5h, 6 mock design walkthroughs. Best ROI per hour on Udemy. Do this first — it gives you the interview framework.',
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
        why: "93K students. Deep distributed systems — CQRS, Event Sourcing, Microservices, API Gateway, Saga. You'll recognise FPO Cloud in every example. Essential for senior Java + senior AI roles.",
      },
      {
        h: 15,
        title: 'System Design Interview Guide for Software Architecture',
        by: 'Mikhail Smarshchok',
        rating: 4.5,
        stu: '25K+',
        url: 'https://www.udemy.com/course/system-design-a-comprehensive-guide/',
        tag: '🎯 20+ SYSTEMS',
        tc: '#7C3AED',
        why: '20+ complete system designs: URL Shortener, WhatsApp, Netflix, Uber, Twitter, Search Autocomplete, Notification System, Rate Limiter. One per day in this phase.',
      },
    ],
  },
  {
    id: 'dsa',
    n: 5,
    icon: '🧩',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'DSA + LeetCode Patterns',
    role: '🏁 Universal: Required for ALL Technical Interviews',
    days: 28,
    total: 84,
    courseH: 50,
    practiceH: 34,
    offset: 102,
    startDate: 'Oct 25, 2027',
    endDate: 'Nov 21, 2027',
    tag: 'LAST = FRESHEST 🧠',
    daily:
      '6:00–7:00 AM → Course/theory (1h) · 7:00–8:30 AM → LeetCode 4 problems (1.5h) · 8:30–9:00 AM → Review (0.5h)',
    whatYouNeedToKnow: [
      "Arrays + Strings: Two Pointers, Sliding Window, Prefix Sum, Kadane's algorithm",
      "Linked Lists: Fast/Slow pointer, reversal, cycle detection (Floyd's algorithm)",
      'Stacks + Queues: Monotonic stack, sliding window maximum, implement queue using stacks',
      'Trees + Graphs: DFS, BFS, topological sort, Dijkstra, Union-Find, backtracking',
      'Dynamic Programming: top-down memoisation, bottom-up tabulation, 1D + 2D DP patterns',
      'Hash Maps: frequency counting, two-sum pattern, anagram grouping, sliding window + hash',
    ],
    practice: [
      'Attempt every problem for 25 min BEFORE watching solution — the struggle is the learning',
      'Time yourself: Easy < 15 min, Medium < 25 min — track every session in a notebook',
      'After every 10 problems: identify your weakest pattern and drill 5 targeted problems on it',
      'Daily: 1 Easy warm-up + 2 Medium + 1 Hard attempt — 4 problems minimum every day',
      'Final 5 days (Nov 17–21): 8 problems/day at speed — simulate interview pressure daily',
    ],
    interviewQs: [
      'Find the longest substring without repeating characters (Sliding Window — Medium)',
      "Detect a cycle in a linked list and find the start node (Floyd's algorithm — Medium)",
      'Given a matrix, find the number of islands (Graph BFS/DFS — Medium)',
      'Coin Change: minimum coins to make a target (DP bottom-up — Medium)',
      'LRU Cache implementation (HashMap + Doubly Linked List — Hard)',
      'Serialize and Deserialize a Binary Tree (BFS/DFS — Hard)',
    ],
    courses: [
      {
        h: 20,
        title: 'Master the Coding Interview: Data Structures + Algorithms',
        by: 'Andrei Neagoie (ZTM)',
        rating: 4.6,
        stu: '250K+',
        url: 'https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/',
        tag: '🥇 INTERVIEW-FIRST',
        tc: '#15803D',
        why: "250K students. Interview-first DSA — Andrei asks 'when would an interviewer use this?' for every structure. Best for actual job interviews, not academic CS. Covers all patterns with interview context.",
      },
      {
        h: 18,
        title: 'Python Data Structures & Algorithms + LeetCode Exercises',
        by: 'Scott Barrett',
        rating: 4.8,
        stu: '60K+',
        url: 'https://www.udemy.com/course/data-structures-algorithms-python/',
        tag: '🥈 4.8★ LEETCODE',
        tc: '#0369A1',
        why: '4.8★ — highest rated DSA+LeetCode course on Udemy. Scott integrates LeetCode directly into every lesson. 100+ coding exercises with full explanations. Even in Java, use this for pattern understanding.',
      },
      {
        h: 12,
        title: 'JavaScript Algorithms and Data Structures Masterclass',
        by: 'Colt Steele',
        rating: 4.7,
        stu: '350K+',
        url: 'https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/',
        tag: '🎨 BEST VISUALS',
        tc: '#7C3AED',
        why: '350K students. Best visual animations for sorting, trees, graphs on Udemy. Use for visual understanding of algorithms you find hard to grasp from code alone. Colt makes abstract → concrete.',
      },
    ],
  },
  {
    id: 'mock',
    n: 6,
    icon: '🎯',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECDD3',
    name: 'Mock Interviews + Final Polish',
    role: '✅ Finish Line: All 3 Roles Interview-Ready by Dec 5',
    days: 14,
    total: 42,
    courseH: 25,
    practiceH: 17,
    offset: 130,
    startDate: 'Nov 22, 2027',
    endDate: 'Dec 5, 2027',
    tag: 'FINISH LINE 🏁',
    daily:
      '6:00–7:00 AM → Course revision (1h) · 7:00–8:30 AM → Timed mock session (1.5h) · 8:30–9:00 AM → Feedback review (0.5h)',
    whatYouNeedToKnow: [
      'Java mock: 10 technical questions answered on whiteboard from memory in 40 min',
      'React mock: build a TypeScript component from scratch in 20 min, then explain decisions',
      'AI mock: explain your RAG pipeline or LangGraph agent architecture in 10 min',
      'System design mock: design any of the 20 systems you practiced, spoken aloud in 45 min',
      'DSA mock: 2 LeetCode Medium problems in 40 min total — strict timer every session',
      'Behavioral: 15 STAR stories from FPO ready cold — DLH bug, LZA migration, team leadership',
    ],
    practice: [
      'Pramp.com: book 4 free peer mock interview sessions — different partner each time',
      'interviewing.io: 2 anonymous FAANG engineer mock sessions (first one free)',
      'Record yourself on video for 1 session — watch for filler words, pacing, confidence',
      'Resume final polish: quantify every FPO bullet with real numbers (X flights/day, Y airlines, Z% latency fix)',
      "LinkedIn: headline → 'Java | React | Agentic AI | AWS | 7 Certs' — recruiters search these keywords",
    ],
    interviewQs: [
      'Tell me about yourself — 90-second pitch covering FPO + your 400-day upskilling journey',
      'Walk me through your most challenging technical problem and how you solved it (FPO STAR story)',
      'Why are you leaving NextStep? / What are you looking for in your next role?',
      'Where do you see Agentic AI impacting flight operations in the next 3 years?',
      'What is your salary expectation? (know your number — Senior/Staff range in your target market)',
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
        why: 'FAANG-level patterns — harder graph, DP, system design. Do in Week 1 of this phase. Prepares you for the hardest interview questions at Big Tech difficulty.',
      },
      {
        h: 7,
        title: 'Java Interview Masterclass — Top 350 Questions Quick Revision',
        by: 'Happy Rawat',
        rating: 4.6,
        stu: '2K+',
        url: 'https://www.udemy.com/course/top-250-java-interview-questions/',
        tag: '☕ JAVA FINAL',
        tc: '#0369A1',
        why: 'Speed-run the Java 350 Q&A tracker in 7h — a focused final revision of every Java concept. Do 50 questions per day as your morning warm-up this week.',
      },
      {
        h: 10,
        title: 'System Design Interview Guide — Full Mock Sessions',
        by: 'Mikhail Smarshchok',
        rating: 4.5,
        stu: '25K+',
        url: 'https://www.udemy.com/course/system-design-a-comprehensive-guide/',
        tag: '🏗 SD MOCKS',
        tc: '#7C3AED',
        why: 'Full system design mock sessions. Use the last 10h of this course for mock walkthroughs — speak every design out loud in 45 min exactly as you would in a real interview.',
      },
    ],
  },
];

const TOT_DAYS = PHASES.reduce((s, p) => s + p.days, 0);
const TOT_HRS = PHASES.reduce((s, p) => s + p.total, 0);
const TOT_COURSE = PHASES.reduce((s, p) => s + p.courseH, 0);
const TOT_PRAC = PHASES.reduce((s, p) => s + p.practiceH, 0);
const TOT_CCOUNT = PHASES.reduce((s, p) => s + p.courses.length, 0);

// ── COURSE CARD ───────────────────────────────────────────────────────────────
function CourseCard({ c, col }) {
  const isPri = c.tag.startsWith('🥇') || c.tag.includes('CORE');
  return (
    <a
      href={c.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'block',
        textDecoration: 'none',
        background: '#fff',
        border: `1.5px solid ${isPri ? col + '55' : '#E2E8F0'}`,
        borderRadius: 12,
        padding: '12px 14px',
        boxShadow: isPri ? `0 3px 12px ${col}10` : '0 1px 3px rgba(0,0,0,0.04)',
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
      <div style={{ fontSize: 11, color: '#64748B', marginBottom: 6 }}>
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
              marginBottom: 2,
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
                fontSize: 'clamp(12px,3.5vw,14px)',
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
                  background: p.id === 'dsa' ? '#EEF2FF' : p.color + '12',
                  color: p.id === 'dsa' ? '#4338CA' : p.color,
                  border: `1px solid ${p.id === 'dsa' ? '#C7D2FE' : p.color + '28'}`,
                }}
              >
                {p.tag}
              </span>
            )}
          </div>
          <div
            style={{
              fontSize: 10,
              color: p.color,
              fontWeight: 600,
              marginBottom: 2,
            }}
          >
            {p.role}
          </div>
          <div style={{ fontSize: 10, color: '#94A3B8' }}>
            {p.startDate} → {p.endDate} · {p.days}d · {p.courses.length} courses
          </div>
          <div
            style={{
              display: 'flex',
              height: 4,
              borderRadius: 2,
              overflow: 'hidden',
              maxWidth: 160,
              marginTop: 4,
            }}
          >
            <div style={{ flex: cPct, background: p.color }} />
            <div style={{ flex: pPct, background: p.color + '30' }} />
          </div>
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div
            style={{
              fontSize: 'clamp(14px,4vw,17px)',
              fontWeight: 900,
              color: p.color,
              background: p.color + '12',
              padding: '3px 11px',
              borderRadius: 20,
              border: `1px solid ${p.color}22`,
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
          {/* Stats strip */}
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
                <div style={{ fontSize: 14 }}>{ic}</div>
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
          <div style={{ marginBottom: 10 }}>
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

          {/* Course/Practice split bar */}
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
              <div style={{ flex: p.practiceH, background: p.color + '30' }} />
            </div>
          </div>

          {/* Daily plan */}
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

          {/* 3-column: Know + Practice + Sample Qs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
              gap: 10,
              marginBottom: 12,
            }}
          >
            {/* What you need to know */}
            <div
              style={{
                background: `${p.color}08`,
                border: `1px solid ${p.color}22`,
                borderRadius: 9,
                padding: '10px 12px',
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  color: p.color,
                  letterSpacing: '0.08em',
                  marginBottom: 6,
                }}
              >
                📋 MUST KNOW
              </div>
              {p.whatYouNeedToKnow.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 6,
                    alignItems: 'flex-start',
                    padding: '2px 0',
                  }}
                >
                  <span
                    style={{
                      color: p.color,
                      fontSize: 9,
                      flexShrink: 0,
                      marginTop: 3,
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
            {/* Practice ideas */}
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
                💻 PRACTICE
              </div>
              {p.practice.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 6,
                    alignItems: 'flex-start',
                    padding: '2px 0',
                  }}
                >
                  <span
                    style={{
                      color: '#D97706',
                      fontSize: 9,
                      flexShrink: 0,
                      marginTop: 3,
                      fontWeight: 700,
                    }}
                  >
                    ▸
                  </span>
                  <span
                    style={{ fontSize: 10, color: '#78350F', lineHeight: 1.6 }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
            {/* Sample interview questions */}
            <div
              style={{
                background: '#F0FDF4',
                border: '1px solid #BBF7D0',
                borderRadius: 9,
                padding: '10px 12px',
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  color: '#15803D',
                  letterSpacing: '0.08em',
                  marginBottom: 6,
                }}
              >
                🎤 SAMPLE Q&A
              </div>
              {p.interviewQs.map((q, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 6,
                    alignItems: 'flex-start',
                    padding: '2px 0',
                  }}
                >
                  <span
                    style={{
                      color: '#15803D',
                      fontSize: 9,
                      flexShrink: 0,
                      marginTop: 3,
                      fontWeight: 700,
                    }}
                  >
                    Q{i + 1}
                  </span>
                  <span
                    style={{ fontSize: 10, color: '#166534', lineHeight: 1.6 }}
                  >
                    {q}
                  </span>
                </div>
              ))}
            </div>
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
  const [open, setOpen] = useState('java');
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
      {/* HERO */}
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
                  fontSize: 'clamp(16px,5vw,27px)',
                  fontWeight: 900,
                  color: '#fff',
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
                Jul 15 → Dec 5, 2027 · 144 days · 432h · {TOT_CCOUNT} courses ·
                6 AM–9 AM
              </div>
            </div>
          </div>

          {/* 3 target roles */}
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
                icon: '☕',
                label: 'Java Spring Boot',
                sub: '+ Microservices',
                col: '#16A34A',
              },
              {
                icon: '⚛',
                label: 'React JS + RN',
                sub: '+ TypeScript',
                col: '#0EA5E9',
              },
              {
                icon: '🤖',
                label: 'Python AI Eng.',
                sub: 'GenAI + Agentic',
                col: '#7C3AED',
              },
            ].map(({ icon, label, sub, col }) => (
              <div
                key={label}
                style={{
                  background: 'rgba(255,255,255,0.09)',
                  borderRadius: 10,
                  padding: '10px 10px',
                  border: `1px solid ${col}50`,
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 20, marginBottom: 3 }}>{icon}</div>
                <div
                  style={{
                    fontSize: 'clamp(10px,3vw,12px)',
                    fontWeight: 800,
                    color: '#fff',
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    color: col,
                    marginTop: 1,
                    fontWeight: 600,
                  }}
                >
                  {sub}
                </div>
              </div>
            ))}
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
              <div style={{ fontSize: 12, fontWeight: 900, color: '#fff' }}>
                6:00 AM – 9:00 AM · Every Day · 144 Days
              </div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.42)' }}>
                ~1.8h course · ~1.2h practice · Bangkok time · continues after
                400-day Udemy plan
              </div>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontSize: 15, fontWeight: 900, color: '#A5B4FC' }}>
                432h
              </div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.38)' }}>
                total
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
              [TOT_CCOUNT + ' courses', '6 Phases'],
              ['60%/40%', 'Course/Practice'],
              ["Dec 5 '27", '3 Roles Ready'],
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
                ['#16A34A', 30],
                ['#0EA5E9', 25],
                ['#7C3AED', 25],
                ['#F59E0B', 22],
                ['#6366F1', 28],
                ['#E11D48', 14],
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
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>
                Jul 15, 2027
              </span>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>
                Dec 5, 2027 🎯
              </span>
            </div>
          </div>

          {/* Pills */}
          <div
            style={{
              display: 'flex',
              gap: 6,
              overflowX: 'auto',
              paddingBottom: 2,
              scrollbarWidth: 'none',
              WebkitOverflowScrolling: 'touch',
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

      {/* BODY */}
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
            📊 432H STUDY SPLIT · 3 ROLES · DEC 5 TARGETS
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
                {TOT_COURSE}h course
              </span>
            </div>
            <div
              style={{
                flex: TOT_PRAC,
                background: '#A5B4FC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: 9, fontWeight: 800, color: '#312E81' }}>
                {TOT_PRAC}h practice
              </span>
            </div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))',
              gap: 8,
              marginTop: 10,
            }}
          >
            {[
              {
                l: '☕ Java Spring Boot',
                v: 'Apply Now',
                s: '200+ Q&A · Spring Security · JPA',
              },
              {
                l: '⚛ React JS + RN',
                v: 'Apply Now',
                s: 'TypeScript · Hooks · 200+ Q&A',
              },
              {
                l: '🤖 Python AI Eng.',
                v: 'Apply Now',
                s: 'LangChain · LangGraph · RAG',
              },
              {
                l: '🧩 DSA LeetCode',
                v: '200+ Problems',
                s: 'All patterns · Timed · Fresh',
              },
            ].map(({ l, v, s }) => (
              <div
                key={l}
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
                  {l}
                </div>
                <div
                  style={{ fontSize: 12, fontWeight: 800, color: '#0F172A' }}
                >
                  {v}
                </div>
                <div style={{ fontSize: 9, color: '#94A3B8', marginTop: 1 }}>
                  {s}
                </div>
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
            🗓 MASTER SCHEDULE — 6 PHASES · 144 DAYS · 432H
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
                {['', 'Phase', 'Days', 'Study', '📺', '💻', 'Period'].map(
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
                        fontSize: 10,
                      }}
                    >
                      {h}
                    </th>
                  ),
                )}
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
                  <td style={{ padding: '7px 8px' }}>
                    <div
                      style={{
                        fontWeight: 800,
                        color: '#0F172A',
                        fontSize: 11,
                      }}
                    >
                      {p.name}
                    </div>
                    {p.tag && (
                      <div
                        style={{
                          fontSize: 8,
                          fontWeight: 700,
                          color: p.id === 'dsa' ? '#4338CA' : p.color,
                        }}
                      >
                        {p.tag}
                      </div>
                    )}
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
                  <td
                    style={{
                      padding: '7px 8px',
                      color: '#4F46E5',
                      fontSize: 10,
                    }}
                  >
                    {p.courseH}h
                  </td>
                  <td
                    style={{
                      padding: '7px 8px',
                      color: '#94A3B8',
                      fontSize: 10,
                    }}
                  >
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
                  {TOT_PRAC}h
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
            👆 Tap any row to jump to that phase's full plan
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

        {/* FPO superpower */}
        <div
          style={{
            marginTop: 14,
            background: 'linear-gradient(135deg,#F0FDF4,#ECFDF5)',
            borderRadius: 12,
            border: '1px solid #BBF7D0',
            padding: '14px 16px',
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
            🚀 YOUR FPO EXPERIENCE = INTERVIEW GOLD FOR ALL 3 ROLES
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
                '☕ Java',
                'C# .NET 8 patterns → Java equivalents. Cognito OAuth2 = Spring Security JWT. DynamoDB JPA patterns.',
              ],
              [
                '⚛ React',
                '92 days React + 28d RN + 35d Next.js built in 400 days. FPO iPad EFB app = live RN portfolio.',
              ],
              [
                '🤖 Python AI',
                'AWS Bedrock + Agents = Agentic AI on your own infra. FPO LLM assistant = interview demo project.',
              ],
              [
                '🏗 System Design',
                'FPO IS a system design answer: multi-tenant SaaS, Lambda microservices, Kafka events, DynamoDB at scale.',
              ],
              [
                '🏆 Credentials',
                '7 AWS Certs + CKA = instant senior credibility. Mention it in the first 30 seconds.',
              ],
              [
                '📊 Scale',
                'Real airlines: Lufthansa, American, FedEx. Enterprise-grade, real traffic, real stakes.',
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
            💡 <strong>Opening line for every interview:</strong> "At FPO Cloud
            I built a real-time multi-tenant flight trajectory SaaS for
            Lufthansa, American Airlines and FedEx — AWS Lambda microservices,
            Step Functions, DynamoDB, Kafka, React Native iPad app, with 7 AWS
            certifications. In the last 400 days I've added full-stack
            React/TypeScript, Java Spring Boot, and Agentic AI engineering to
            that foundation."
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
            ⚡ 6 RULES — 144 DAYS · 3 ROLES · DEC 5 DEADLINE
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
                "Same habit from 400 days. 544 consecutive days of this habit by Dec 5. Don't break the chain.",
              ],
              [
                '🎯',
                'Apply while preparing',
                "Start applying Week 3 of Phase 1. Don't wait until Dec 5 — interviews take weeks to schedule.",
              ],
              [
                '🗣️',
                'Speak everything aloud',
                'Every concept, every design, every LeetCode approach — verbalise it. Interviews reward communication.',
              ],
              [
                '🏗',
                "Build, don't just watch",
                'Every phase: build one real project. Java REST API, React TS app, LangGraph agent — GitHub links ready.',
              ],
              [
                '🔁',
                'Spaced repetition',
                'Hard problems: revisit after 3 days, 7 days, 14 days. Keep a notebook. Memory compounds.',
              ],
              [
                '📅',
                'Mock every Sunday',
                'Every Sunday: 1 coding mock (45 min) + 1 design mock (45 min). Simulate real interview pressure.',
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
            144 DAYS · 432H · {TOT_CCOUNT} COURSES · 3 ROLES · 6 AM–9 AM · JUL
            15 → DEC 5, 2027
          </div>
        </div>
      </div>
    </div>
  );
}
