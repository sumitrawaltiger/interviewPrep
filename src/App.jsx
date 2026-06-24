import { useState } from 'react';
// 1000 Days of Code · Jun 20, 2026 → Jun 19, 2029
// 1000 study days · 96 relaxation days · 5:30 AM – 8:30 AM · 3 hours
// Block 1: 16-Month Skill Plan D1-D487   (Jun 20, 2026 – Oct 19, 2027)
// Block 2: Advanced Studies    D488-D1000 (Oct 20, 2027 – study complete ~Mar 15, 2029)

const START = new Date('2026-06-20');
const TOTAL = 1000;
const RELAXATION = 96;
const CALENDAR_END = 'Jun 19, 2029';

const BLOCKS = [
  {
    id: 'b1',
    icon: '📚',
    col: '#0EA5E9',
    title: '16-Month Skill Plan',
    sub: 'D1–D487 · Jun 20, 2026 – Oct 19, 2027 · 487 days · 16 skills',
    detail:
      'Python → FastAPI → Agentic AI → Django → JavaScript → TypeScript → React → NextJS → React Native → Node.js → J2SE → J2EE → JPA → Spring Boot → Microservices → DevOps',
    time: '5:30 AM – 8:30 AM · 3h daily',
  },
  {
    id: 'b2',
    icon: '🚀',
    col: '#6366F1',
    title: 'Advanced Studies',
    sub: 'D488–D1000 · Oct 20, 2027 – Jun 19, 2029 · 513 study days · 8 phases · 96 relaxation days',
    detail:
      'DSA (5mo) → System Design (2mo) → AWS → K8s → DevOps → Java → Python → React Interview Prep',
    time: '5:30 AM – 8:30 AM · 3h daily',
  },
];

const PHASES = [
  // ══ BLOCK 1: 16-MONTH SKILL PLAN (487 days · 16 skills) ═════════════════
  {
    id: 's1', block: 'b1', seq: 1, icon: '🐍',
    color: '#16A34A', dark: '#15803D', bg: '#F0FDF4', border: '#BBF7D0',
    name: 'Python',
    label: 'Skill 1 · Month 1',
    days: 30, ds: 1, de: 30,
    period: 'Jun 20 – Jul 19, 2026',
    ms: 'Python Complete · D30',
    about: '30 days · Month 1. Python 3 fundamentals: variables, data types, OOP, dunder methods, type hints, decorators, generators, asyncio basics, file I/O, virtual environments, pip, boto3 AWS automation (EC2/S3/Lambda/DynamoDB). Foundation for FastAPI, Agentic AI, and Django.',
    courses: [
      'Corey Schafer — Python YouTube playlist (free)',
      'Dr. Angela Yu — 100 Days of Python (Udemy)',
      'Real Python — articles and tutorials',
    ],
    wplan: [
      { w: 1, f: 'Python Fundamentals', t: 'syntax, data types, control flow, functions, comprehensions, venv/pip' },
      { w: 2, f: 'OOP + Type Hints', t: 'classes, inheritance, dunder methods, dataclasses, type hints, mypy' },
      { w: 3, f: 'Decorators + Generators', t: 'decorators, generators, itertools, context managers, exceptions' },
      { w: 4, f: 'boto3 + AWS Automation', t: 'boto3 EC2/S3/Lambda/DynamoDB scripts, automate FPO Cloud tasks' },
    ],
  },
  {
    id: 's2', block: 'b1', seq: 2, icon: '⚡',
    color: '#059669', dark: '#047857', bg: '#ECFDF5', border: '#A7F3D0',
    name: 'FastAPI',
    label: 'Skill 2 · Month 2',
    days: 30, ds: 31, de: 60,
    period: 'Jul 20 – Aug 18, 2026',
    ms: 'FastAPI Complete · D60',
    about: '30 days · Month 2. FastAPI on your Python foundation: async/await, Pydantic v2, dependency injection, routers, middleware, WebSockets, OpenAPI/Swagger, pytest + TestClient, SQLAlchemy async, JWT auth. Capstone: async flight-data REST API prototype.',
    courses: [
      'Sebastián Ramírez — FastAPI official docs (fastapi.tiangolo.com) · primary',
      'tiangolo/full-stack-fastapi-template (GitHub) · production patterns',
      'Jose Salvatierra — FastAPI course (Udemy) · async + Pydantic v2 + deploy',
    ],
    wplan: [
      { w: 1, f: 'FastAPI Core + Pydantic v2', t: 'async def routes, Pydantic BaseModel, validation, response models, dependency injection' },
      { w: 2, f: 'Routers + Auth + Database', t: 'APIRouter, OAuth2 JWT, SQLAlchemy async, CORS, middleware, exception handlers' },
      { w: 3, f: 'Testing + WebSockets + OpenAPI', t: 'pytest + httpx TestClient, WebSocket endpoints, background tasks, OpenAPI docs' },
      { w: 4, f: 'FastAPI Capstone', t: 'flight-data REST API with async endpoints, JWT auth, OpenAPI docs — ready for Agentic AI next month' },
    ],
  },
  {
    id: 's3', block: 'b1', seq: 3, icon: '🤖',
    color: '#6366F1', dark: '#4338CA', bg: '#EEF2FF', border: '#C7D2FE',
    name: 'Agentic AI using Python',
    label: 'Skill 3 · Month 3',
    days: 30, ds: 61, de: 90,
    period: 'Aug 19 – Sep 17, 2026',
    ms: 'Agentic AI using Python Complete · D90',
    about: '30 days · Month 3. Agentic AI with Python: LangChain, LangGraph, RAG pipelines, multi-agent systems, MCP protocol, AWS Bedrock. Extend your FastAPI API with AI agents. Ed Donner projects. Capstone: FPO AI assistant (natural language flight queries).',
    courses: [
      'Ed Donner — Complete Agentic AI Engineering 2026 (Udemy)',
      'Eden Marco — LangChain LLM Applications (Udemy)',
      'AWS Bedrock docs — deploy on FPO Cloud',
    ],
    wplan: [
      { w: 1, f: 'GenAI + Prompt Engineering', t: 'LLMs, embeddings, RAG, vector DBs, CoT/ReAct, AWS Bedrock' },
      { w: 2, f: 'LangChain + LangGraph', t: 'chains, agents, tools, LCEL, state machines, supervisor agents' },
      { w: 3, f: 'Ed Donner Projects', t: 'Career Digital Twin, Deep Research Agent, SDR Agent — build 3' },
      { w: 4, f: 'FPO AI Capstone', t: 'MCP + multi-agent logic in Python, expose via FastAPI, Mangum deploy to AWS Lambda' },
    ],
  },
  {
    id: 's4', block: 'b1', seq: 4, icon: '🎸',
    color: '#0891B2', dark: '#0E7490', bg: '#ECFEFF', border: '#A5F3FC',
    name: 'Django',
    label: 'Skill 4 · Month 4',
    days: 30, ds: 91, de: 120,
    period: 'Sep 18 – Oct 17, 2026',
    ms: 'Django Complete · D120',
    about: '30 days · Month 4. Django MVT: models, migrations, admin, views (FBV/CBV), URL routing, signals. Django REST Framework: serializers, ModelViewSet, routers, JWT (simplejwt), permissions, filtering. Build REST API connected to AWS — compare with your FastAPI experience.',
    courses: [
      'Dennis Ivy — Python Django 7 Hour Course (YouTube)',
      'Jose Salvatierra — Django REST Framework (Udemy)',
      'Django docs — official tutorial',
    ],
    wplan: [
      { w: 1, f: 'Django Core + ORM', t: 'project/app structure, models, migrations, admin, URL routing, views' },
      { w: 2, f: 'Django REST Framework', t: 'serializers, ModelViewSet, routers, permissions, filtering, pagination' },
      { w: 3, f: 'DRF Advanced', t: 'JWT auth (simplejwt), nested serializers, @action, API versioning, OpenAPI' },
      { w: 4, f: 'DRF API Capstone', t: 'full REST API connected to AWS infrastructure, testing with APIClient' },
    ],
  },
  {
    id: 's5', block: 'b1', seq: 5, icon: '📜',
    color: '#EAB308', dark: '#CA8A04', bg: '#FEFCE8', border: '#FDE047',
    name: 'JavaScript',
    label: 'Skill 5 · Month 5',
    days: 30, ds: 121, de: 150,
    period: 'Oct 18 – Nov 16, 2026',
    ms: 'JavaScript Complete · D150',
    about: '30 days · Month 5. ES6+ fundamentals: let/const, arrow functions, closures, prototypes, async/await, Promises, modules, destructuring, spread/rest, Map/Set, fetch API. Build 5 mini projects in vanilla JS. Foundation for TypeScript, React, and Node.js.',
    courses: [
      'Maximilian Schwarzmüller — JavaScript Complete Guide (Udemy)',
      'javascript.info (free) — modern JS deep reference',
      'MDN Web Docs — JavaScript guide',
    ],
    wplan: [
      { w: 1, f: 'Variables, Types, Operators', t: 'let/const, primitives, truthy/falsy, ==vs===, template literals, typeof' },
      { w: 2, f: 'Functions + Closures + Scope', t: 'arrow functions, IIFE, closures, hoisting, this keyword, call/apply/bind' },
      { w: 3, f: 'Objects, Arrays, ES6+', t: 'object literals, spread, destructuring, array methods (map/filter/reduce), optional chaining' },
      { w: 4, f: 'Async JS + Modules', t: 'Promises, async/await, fetch, error handling, ES modules import/export, npm basics' },
    ],
  },
  {
    id: 's6', block: 'b1', seq: 6, icon: '🔷',
    color: '#2563EB', dark: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE',
    name: 'TypeScript',
    label: 'Skill 6 · Month 6',
    days: 30, ds: 151, de: 180,
    period: 'Nov 17 – Dec 16, 2026',
    ms: 'TypeScript Complete · D180',
    about: '30 days · Month 6. Strict TypeScript: basic types, interfaces vs types, generics, utility types, enums, tuples, type guards, discriminated unions, keyof/typeof, tsconfig. Refactor Month 5 JS projects to TypeScript with Vite.',
    courses: [
      'Maximilian Schwarzmüller — Understanding TypeScript (Udemy)',
      'TypeScript Handbook (typescriptlang.org) — official docs',
      'Matt Pocock — Total TypeScript (free tips)',
    ],
    wplan: [
      { w: 1, f: 'Types + Interfaces', t: 'primitives, arrays, tuples, interfaces, type aliases, union/intersection types' },
      { w: 2, f: 'Functions + Generics', t: 'typed functions, generics <T>, constraints, generic interfaces, function overloads' },
      { w: 3, f: 'Advanced Types', t: 'utility types (Partial/Pick/Omit/Record), keyof, typeof, indexed access, enums' },
      { w: 4, f: 'Strict Mode + Project', t: 'tsconfig strict, unknown vs any, type guards, narrowing, migrate JS projects to TS' },
    ],
  },
  {
    id: 's7', block: 'b1', seq: 7, icon: '⚛',
    color: '#0EA5E9', dark: '#0369A1', bg: '#F0F9FF', border: '#BAE6FD',
    name: 'React',
    label: 'Skill 7 · Month 7',
    days: 30, ds: 181, de: 210,
    period: 'Dec 17, 2026 – Jan 15, 2027',
    ms: 'React Complete · D210',
    about: '30 days · Month 7. React 19 with TypeScript: JSX, components, props, useState, useEffect, useRef, useMemo, useCallback, custom hooks, React Router v6, Redux Toolkit, RTK Query, React Testing Library. Build FPO flight dashboard.',
    courses: [
      'Maximilian Schwarzmüller — React The Complete Guide 2026 (Udemy)',
      'React docs (react.dev) — official beta docs',
      'Kent C. Dodds — Epic React (patterns reference)',
    ],
    wplan: [
      { w: 1, f: 'React Foundations', t: 'Vite+React+TS, JSX, components, props, useState, conditional rendering, lists/keys' },
      { w: 2, f: 'Hooks Deep Dive', t: 'useEffect deps/cleanup, useRef, useMemo, useCallback, custom hooks, performance' },
      { w: 3, f: 'Routing + State', t: 'React Router v6 nested routes, Redux Toolkit, RTK Query for API state' },
      { w: 4, f: 'Testing + FPO Dashboard', t: 'React Testing Library, Jest. FPO flight dashboard calling AWS API Gateway + Lambda' },
    ],
  },
  {
    id: 's8', block: 'b1', seq: 8, icon: '▲',
    color: '#0F172A', dark: '#020617', bg: '#F8FAFC', border: '#CBD5E1',
    name: 'Next.js',
    label: 'Skill 8 · Month 8',
    days: 30, ds: 211, de: 240,
    period: 'Jan 16 – Feb 14, 2027',
    ms: 'Next.js Complete · D240',
    about: '30 days · Month 8. Next.js 15 App Router: file-based routing, layouts, Server Components vs Client Components, Server Actions, data fetching (SSR/SSG/ISR), NextAuth v5, Prisma + PostgreSQL, Vercel deploy. Build FPO web portal capstone.',
    courses: [
      'Maximilian Schwarzmüller — Next.js 14 and 15 Complete Guide (Udemy)',
      'Lee Robinson — Next.js Learn (free official)',
      'Vercel docs — App Router + Server Components',
    ],
    wplan: [
      { w: 1, f: 'App Router Foundations', t: 'file routing, layouts, loading/error pages, route groups, parallel routes' },
      { w: 2, f: 'Server Components + Actions', t: 'RSC vs client, fetch caching, Suspense, Server Actions, revalidation' },
      { w: 3, f: 'Auth + Database', t: 'NextAuth v5 OAuth, middleware, Prisma ORM, PostgreSQL, env vars' },
      { w: 4, f: 'FPO Web Portal Capstone', t: 'auth + flight dashboard + AWS backend, Vercel deploy, portfolio piece' },
    ],
  },
  {
    id: 's9', block: 'b1', seq: 9, icon: '📱',
    color: '#7C3AED', dark: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE',
    name: 'React Native',
    label: 'Skill 9 · Month 9',
    days: 30, ds: 241, de: 270,
    period: 'Feb 15 – Mar 16, 2027',
    ms: 'React Native Complete · D270',
    about: '30 days · Month 9. React Native + Expo: core components, Flexbox, FlatList, React Navigation v6, Redux Toolkit, Expo SDK (Camera, Location, Push), Reanimated 2, EAS Build. Deploy FPO mobile flight app to TestFlight on iPad.',
    courses: [
      'Chaicode — React Native Full Course (free)',
      'Maximilian Schwarzmüller — React Native Practical Guide (Udemy)',
      'Expo docs — EAS Build, TestFlight, SDK modules',
    ],
    wplan: [
      { w: 1, f: 'RN Core + Layout', t: 'View/Text/Image, StyleSheet, Flexbox, FlatList — Expo Go on iPad' },
      { w: 2, f: 'Navigation + State', t: 'Stack/Tab navigators, Redux Toolkit, AsyncStorage, deep linking' },
      { w: 3, f: 'Expo SDK + Animations', t: 'Camera, Location, Notifications, Reanimated 2, Gesture Handler' },
      { w: 4, f: 'EAS Build + FPO App', t: 'EAS Build/Submit, TestFlight, OTA updates. FPO mobile flight status app' },
    ],
  },
  {
    id: 's10', block: 'b1', seq: 10, icon: '🟢',
    color: '#16A34A', dark: '#15803D', bg: '#F0FDF4', border: '#BBF7D0',
    name: 'Node.js',
    label: 'Skill 10 · Month 10',
    days: 30, ds: 271, de: 300,
    period: 'Mar 17 – Apr 15, 2027',
    ms: 'Node.js Complete · D300',
    about: '30 days · Month 10. Node.js + Express: event loop, CommonJS vs ESM, Express routing, middleware chain, REST API design, Mongoose + MongoDB Atlas, JWT auth, Zod validation, Jest + supertest, Docker, deploy to AWS ECS Fargate.',
    courses: [
      'Maximilian Schwarzmüller — NodeJS Complete Guide (Udemy, 40h)',
      'Traversy Media — Express.js Crash Course (YouTube)',
      'MongoDB University — M001 MongoDB Basics (free)',
    ],
    wplan: [
      { w: 1, f: 'Node.js Core', t: 'event loop, modules, fs/path/http, npm, nodemon, dotenv, async patterns' },
      { w: 2, f: 'Express + MongoDB', t: 'routing, middleware, Mongoose ODM, CRUD, JWT, bcrypt, Zod' },
      { w: 3, f: 'Testing + Docker', t: 'Jest + supertest, API testing, Docker containerise' },
      { w: 4, f: 'AWS ECS Deploy', t: 'ECS Fargate deploy, GitHub Actions CI/CD pipeline' },
    ],
  },
  {
    id: 's11', block: 'b1', seq: 11, icon: '☕',
    color: '#EA580C', dark: '#C2410C', bg: '#FFF7ED', border: '#FED7AA',
    name: 'J2SE',
    label: 'Skill 11 · Month 11',
    days: 30, ds: 301, de: 330,
    period: 'Apr 16 – May 15, 2027',
    ms: 'J2SE Complete · D330',
    about: '30 days · Month 11. Java Standard Edition using C# background: JDK/JVM, syntax, OOP (inheritance, polymorphism, interfaces), generics, Collections (ArrayList/HashMap), Streams/Lambdas, Optional, records, sealed classes. Fast-track with your .NET experience.',
    courses: [
      'Navin Reddy Telusko — Java Programming (YouTube free)',
      'Tim Buchalka — Java Masterclass (Udemy) · reference',
      'Oracle Java Tutorials — J2SE official',
    ],
    wplan: [
      { w: 1, f: 'Java Syntax + OOP', t: 'JDK/JVM/JRE, classes, inheritance, polymorphism, interfaces, generics' },
      { w: 2, f: 'Collections + Streams', t: 'ArrayList/HashMap/HashSet, Stream API filter/map/reduce, Optional' },
      { w: 3, f: 'Java 8-21 Features', t: 'lambdas, records, sealed classes, pattern matching, CompletableFuture' },
      { w: 4, f: 'J2SE Practice', t: '10 coding exercises, compare Java vs C# patterns, mini CLI app' },
    ],
  },
  {
    id: 's12', block: 'b1', seq: 12, icon: '🏢',
    color: '#0891B2', dark: '#0E7490', bg: '#ECFEFF', border: '#A5F3FC',
    name: 'J2EE',
    label: 'Skill 12 · Month 12',
    days: 30, ds: 331, de: 360,
    period: 'May 16 – Jun 14, 2027',
    ms: 'J2EE Complete · D360',
    about: '30 days · Month 12. Java Enterprise Edition basics: Servlets, JSP, JDBC, connection pooling, JAX-RS REST basics, deployment descriptors, WAR packaging, Tomcat. Bridge from J2SE to Spring ecosystem.',
    courses: [
      'Java Brains — J2EE/Servlets playlist (YouTube)',
      'Oracle — Jakarta EE Tutorial (free)',
      'Baeldung — Java EE concepts',
    ],
    wplan: [
      { w: 1, f: 'Servlets + JSP', t: 'HttpServlet, doGet/doPost, ServletContext, JSP EL, JSTL' },
      { w: 2, f: 'JDBC + Connection Pool', t: 'DriverManager, PreparedStatement, transactions, HikariCP connection pool' },
      { w: 3, f: 'JAX-RS REST Basics', t: '@Path, @GET/@POST, JSON with Jackson, deploy WAR to Tomcat' },
      { w: 4, f: 'J2EE Mini Project', t: 'REST API with JDBC backend, deploy to Tomcat, compare to Spring approach' },
    ],
  },
  {
    id: 's13', block: 'b1', seq: 13, icon: '🗄',
    color: '#7C3AED', dark: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE',
    name: 'JPA',
    label: 'Skill 13 · Month 13',
    days: 30, ds: 361, de: 390,
    period: 'Jun 15 – Jul 14, 2027',
    ms: 'JPA Complete · D390',
    about: '30 days · Month 13. JPA/Hibernate deep dive: @Entity, @Id, EntityManager, relationships (@OneToMany/@ManyToMany), CascadeType, FetchType, JPQL, @Query, N+1 problem, @EntityGraph, @Transactional, L1/L2 caching.',
    courses: [
      'John Thompson — Hibernate and Spring Data JPA (Udemy, 55h)',
      'Baeldung — JPA/Hibernate tutorials',
      'Vlad Mihalcea — High-Performance Java Persistence (blog)',
    ],
    wplan: [
      { w: 1, f: 'JPA Foundations', t: '@Entity/@Id/@Column, EntityManager, persistence context, basic CRUD' },
      { w: 2, f: 'Relationships + JPQL', t: '@OneToMany/@ManyToMany, cascade, fetch types, JPQL queries' },
      { w: 3, f: 'Spring Data JPA', t: 'JpaRepository, @Query, paging, sorting, specifications' },
      { w: 4, f: 'Advanced JPA', t: 'N+1 + JOIN FETCH, @Transactional propagation, caching, Testcontainers' },
    ],
  },
  {
    id: 's14', block: 'b1', seq: 14, icon: '🌱',
    color: '#16A34A', dark: '#15803D', bg: '#F0FDF4', border: '#BBF7D0',
    name: 'Spring Boot',
    label: 'Skill 14 · Month 14',
    days: 30, ds: 391, de: 420,
    period: 'Jul 15 – Aug 13, 2027',
    ms: 'Spring Boot Complete · D420',
    about: '30 days · Month 14. Spring Boot 3: auto-configuration, IoC/DI, @RestController REST APIs, @Valid, @ExceptionHandler, Spring Security + JWT + OAuth2 (maps to FPO Cognito!), OpenAPI/Swagger, testing with MockMvc + Testcontainers.',
    courses: [
      'John Thompson — Spring Framework 6 Beginner to Guru (Udemy)',
      'Ranga Karanam — Master Spring Boot 3 (Udemy)',
      'Spring.io guides — official quickstarts',
    ],
    wplan: [
      { w: 1, f: 'Spring Core + Boot', t: '@Bean/@Component/@Service, auto-config, starters, @ConfigurationProperties' },
      { w: 2, f: 'REST APIs + Validation', t: '@RestController, DTOs, @Valid, @ExceptionHandler, OpenAPI/Swagger' },
      { w: 3, f: 'Spring Security + OAuth2', t: 'SecurityFilterChain, JWT filter, OAuth2 resource server + JWKS = FPO Cognito!' },
      { w: 4, f: 'Testing + Deploy', t: '@WebMvcTest, MockMvc, Testcontainers, Docker → AWS ECS deploy' },
    ],
  },
  {
    id: 's15', block: 'b1', seq: 15, icon: '🏛',
    color: '#E11D48', dark: '#BE123C', bg: '#FFF1F2', border: '#FECDD3',
    name: 'Microservices',
    label: 'Skill 15 · Month 15',
    days: 30, ds: 421, de: 450,
    period: 'Aug 14 – Sep 12, 2027',
    ms: 'Microservices Complete · D450',
    about: '30 days · Month 15. Spring Cloud microservices: Eureka, Gateway, Feign, Resilience4j, Kafka, CQRS, Event Sourcing, Saga pattern. Deploy to AWS EKS. Every pattern maps to FPO Cloud (EventBridge, Step Functions, DynamoDB streams).',
    courses: [
      'Ranga Karanam — Spring Boot Microservices with K8s (Udemy)',
      'Sean Campbell — CQRS and Event Sourcing (Udemy)',
      'Chris Richardson — microservices.io (free patterns)',
    ],
    wplan: [
      { w: 1, f: 'Service Design + Spring Cloud', t: 'DDD bounded contexts, Eureka, Gateway, config server, Feign' },
      { w: 2, f: 'Resilience + Kafka', t: 'circuit breaker, retry, bulkhead, Kafka producers/consumers' },
      { w: 3, f: 'CQRS + Event Sourcing', t: 'read/write separation, event store, replay — FPO mission-feed pattern' },
      { w: 4, f: 'Saga + EKS Deploy', t: 'orchestration vs choreography, deploy to EKS, write 1 ADR' },
    ],
  },
  {
    id: 's16', block: 'b1', seq: 16, icon: '🔧',
    color: '#D97706', dark: '#B45309', bg: '#FFFBEB', border: '#FDE68A',
    name: 'DevOps',
    label: 'Skill 16 · Month 16 (~5 Weeks)',
    days: 37, ds: 451, de: 487,
    period: 'Sep 13 – Oct 19, 2027',
    ms: 'DevOps — 16-Month Skill Plan COMPLETE · D487 · Oct 19, 2027',
    about: '37 days · Month 16 (~5 weeks). Docker, Kubernetes/EKS, CI/CD (GitHub Actions + Jenkins), Terraform, Prometheus/Grafana, SonarQube, DevSecOps. AWS deep dive: Lambda, DynamoDB, CDK TypeScript (FPO stack!). Ends D487 = Oct 19, 2027 = 16-MONTH PLAN COMPLETE.',
    courses: [
      'Nana Janashia — DevOps Bootcamp (YouTube/Udemy)',
      'Mumshad Mannambeth — Kubernetes + CKA (KodeKloud)',
      'HashiCorp Learn — Terraform tutorials (free)',
    ],
    wplan: [
      { w: 1, f: 'Docker + Container Orchestration', t: 'Dockerfile multi-stage, Compose, ECR, ECS Fargate, kubectl basics' },
      { w: 2, f: 'Kubernetes + CI/CD', t: 'EKS, Helm, GitHub Actions OIDC to AWS, CodePipeline, SonarQube' },
      { w: 3, f: 'Terraform + Monitoring', t: 'Terraform HCL/modules/S3 state, Prometheus/Grafana, Datadog APM, Trivy' },
      { w: 4, f: 'AWS FPO Stack + Wrap-Up', t: 'Lambda/Step Functions/DynamoDB/CDK, enterprise pipeline capstone. D487 = Oct 19, 2027 DONE 🎉' },
    ],
  },
  // ══ BLOCK 2: ADVANCED STUDIES (513 study days · 96 relaxation days in window) ══
  {
    id: 'p9',
    block: 'b2',
    seq: 17,
    icon: '🧩',
    color: '#4F46E5',
    dark: '#3730A3',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Data Structures + Algorithms',
    label: 'Block 2 · 5 Months',
    days: 130,
    ds: 488,
    de: 617,
    period: 'Oct 20, 2027 – Feb 14, 2028',
    ms: 'DSA Complete · D617',
    about:
      '130 study days · ~4 months. Complete DSA in Python and Java. Arrays, Linked Lists, Stacks, Queues, Trees, BST, Heaps, Graphs, Hashing, Sorting/Searching, Dynamic Programming (hardest — 8 weeks), Backtracking, Greedy, Tries. 400+ LeetCode problems total. Two instructors: Scott Barrett (Python + Java implementations) + NeetCode (pattern-based). Master DP and you stand out in every interview.',
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
    label: 'Block 2 · 2 Months',
    days: 65,
    ds: 618,
    de: 682,
    period: 'Feb 15 – Apr 20, 2028',
    ms: 'System Design Complete · D682',
    about:
      '65 study days · ~2 months. System design interview mastery. Frank Kane 5-step template (Clarify → Estimate → HLD → Deep Dive → Wrap Up). Design 1 system spoken aloud per day (45 min, no notes). Your FPO multi-tenant SaaS + Lambda + DynamoDB + Kafka production experience is a massive advantage — FPO Cloud IS a real system design case study. Cover all classic systems: URL Shortener, WhatsApp, Twitter, YouTube, Netflix, Uber, Airbnb, Payment System, Search Engine. Alex Xu Vol 1 + Vol 2.',
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
        t: '10 full cold mock interviews (spoken aloud, 45 min each, no notes). Focus on weakest 3 systems. Write ADRs for 3 designs. GitHub portfolio with system diagrams. D682 = SD DONE.',
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
    name: 'AWS Interview Preparation',
    label: 'Block 2 · Interview Prep',
    days: 191,
    ds: 683,
    de: 873,
    period: 'Apr 21 – Nov 8, 2028',
    ms: 'AWS Interview Prep Done · D873',
    about:
      '191 study days · ~7 months. AWS interview mastery — not certification. IAM, VPC, EC2, S3, RDS, DynamoDB, Lambda, API Gateway, Cognito, Step Functions, ECS/EKS, SQS/SNS, CloudFront, Route53, CDK, disaster recovery. Map every service to your FPO Cloud production experience. Whiteboard architecture, scenario-based Qs, cost optimization, security best practices. 150+ spoken-aloud answers + 10 AWS mock interviews.',
    courses: [
      'Frank Kane ex-Amazon — AWS Certified Solutions Architect course (Udemy) · concepts not exam',
      'Stephane Maarek — AWS SAA-C03 (Udemy) · service deep dives for interviews',
      'Tutorials Dojo — AWS scenario questions · interview-style Q bank',
      'AWS Well-Architected Framework (free) · pillars for system design answers',
    ],
    wplan: [
      {
        w: 1,
        f: 'IAM + VPC + EC2 + S3',
        t: 'IAM policies/roles/OIDC, VPC subnets/NACLs/security groups, EC2 types/spot/reserved, S3 storage classes/lifecycle/versioning. 40 interview Qs mapped to FPO Cloud.',
      },
      {
        w: 4,
        f: 'Lambda + DynamoDB + API Gateway',
        t: 'Lambda cold start, concurrency, DynamoDB single-table design/partitions/GSI/streams, API Gateway auth/CORS/throttling. Your exact FPO stack — speak every design decision aloud.',
      },
      {
        w: 7,
        f: 'Serverless + Cognito + Step Functions',
        t: 'Cognito user pools vs identity pools (your FPO auth!), Step Functions Saga patterns, EventBridge, SQS/SNS fan-out, X-Ray tracing. Scenario: design multi-tenant SaaS on AWS.',
      },
      {
        w: 11,
        f: 'ECS/EKS + CI/CD + CDK',
        t: 'ECS Fargate vs EKS trade-offs, CodePipeline/CodeBuild, CloudFormation vs CDK (your FPO IaC!), disaster recovery strategies. 5 AWS architecture whiteboard sessions.',
      },
      {
        w: 14,
        f: 'AWS Mock Interviews + FPO Deep Dive',
        t: '10 full AWS mock interviews (45 min spoken). Cost optimization, Well-Architected review of FPO Cloud, security audit scenarios. D873 = AWS INTERVIEW PREP DONE 🎉',
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
    name: 'Kubernetes Interview Preparation',
    label: 'Block 2 · Interview Prep',
    days: 25,
    ds: 874,
    de: 898,
    period: 'Nov 9 – Dec 3, 2028',
    ms: 'Kubernetes Interview Prep Done · D898',
    about:
      '25 study days. Kubernetes interview mastery — not certification. Pods, Deployments, Services, Ingress, ConfigMaps, Secrets, RBAC, NetworkPolicies, PV/PVC, HPA, troubleshooting (CrashLoopBackOff, ImagePullBackOff), kubectl deep dive. Design K8s architecture for FPO microservices. 80+ verbal Qs + 3 hands-on troubleshooting scenarios.',
    courses: [
      'Mumshad Mannambeth — Kubernetes for Beginners (KodeKloud) · concepts for interviews',
      'TechWorld with Nana — Kubernetes Interview Questions (YouTube)',
      'KodeKloud — CKA-style labs (free) · hands-on troubleshooting practice',
    ],
    wplan: [
      {
        w: 1,
        f: 'K8s Core Objects',
        t: 'Pods/ReplicaSets/Deployments, Services (ClusterIP/NodePort/LB), Namespaces, labels/selectors, probes (liveness/readiness/startup). 25 interview Qs spoken aloud.',
      },
      {
        w: 2,
        f: 'Networking + Storage + Security',
        t: 'Ingress vs LoadBalancer, NetworkPolicies, PV/PVC/StorageClasses, RBAC, ServiceAccounts, Secrets management. Scenario: secure multi-tenant cluster.',
      },
      {
        w: 3,
        f: 'Troubleshooting + Scaling',
        t: 'kubectl debug/describe/logs, common failure modes, HPA/VPA, resource requests/limits, QoS classes, node affinity/taints. 3 timed troubleshooting drills.',
      },
      {
        w: 4,
        f: 'K8s Mock Interviews',
        t: '5 K8s mock interviews: design deployment for FPO microservices on EKS, debug broken pods live, explain architecture trade-offs. D898 = K8s INTERVIEW PREP DONE.',
      },
    ],
  },
  {
    id: 'p12',
    block: 'b2',
    seq: 12,
    icon: '🔧',
    color: '#D97706',
    dark: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'DevOps Interview Preparation',
    label: 'Block 2 · Interview Prep',
    days: 26,
    ds: 899,
    de: 924,
    period: 'Dec 4 – Dec 29, 2028',
    ms: 'DevOps Interview Prep Done · D924',
    about:
      '26 study days. DevOps interview mastery — Docker, CI/CD (GitHub Actions, Jenkins), Terraform/IaC, monitoring (Prometheus/Grafana), GitOps, SRE practices, incident response, blue-green/canary deployments. Map Terraform + pipelines to FPO Cloud. 70+ scenario Qs + 4 DevOps mock interviews.',
    courses: [
      'Nana Janashia — DevOps Interview Questions (YouTube)',
      'Bogdan Stashchuk — Terraform practical course (Udemy) · IaC interview topics',
      'Google SRE Book (free) · reliability + incident response answers',
      'HashiCorp Learn — Terraform tutorials · hands-on for whiteboard Qs',
    ],
    wplan: [
      {
        w: 1,
        f: 'Docker + CI/CD Pipelines',
        t: 'Dockerfile best practices, multi-stage builds, Docker Compose vs K8s, GitHub Actions OIDC to AWS, Jenkins pipelines, artifact management. 20 interview Qs.',
      },
      {
        w: 2,
        f: 'Terraform + IaC Interview Qs',
        t: 'HCL, state management, remote state (S3+DynamoDB), modules, workspaces, count/for_each, drift detection. Whiteboard: design IaC for FPO Cloud infrastructure.',
      },
      {
        w: 3,
        f: 'Monitoring + SRE + GitOps',
        t: 'Prometheus/Grafana/Datadog (your FPO tool!), SLI/SLO/SLA, error budgets, on-call incident response, ArgoCD/Flux GitOps patterns. Scenario Qs.',
      },
      {
        w: 4,
        f: 'DevOps Mock Interviews',
        t: '4 DevOps mock interviews: design CI/CD for microservices, troubleshoot pipeline failure, explain blue-green deploy, Terraform module design. D924 = DEVOPS INTERVIEW PREP DONE.',
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
    name: 'Java Interview Preparation',
    label: 'Block 2 · Interview Prep',
    days: 26,
    ds: 925,
    de: 950,
    period: 'Dec 30, 2028 – Jan 24, 2029',
    ms: 'Java Interview Prep Done · D950',
    about:
      '26 study days. Java interview mastery — not certification. Java 8 tricky questions (lambdas, functional interfaces, method references, Optional pitfalls). Streams API tricky questions (parallel streams, collectors, groupingBy, flatMap, reduce vs collect). OOP, Collections, Generics, Concurrency (ExecutorService, CompletableFuture, synchronized vs locks), equals/hashCode, immutability. Spring Boot interview Qs from your Block 1 experience. 100+ spoken-aloud answers.',
    courses: [
      'Durga Software Solutions — Java 8 Features interview Q&A (YouTube) · lambdas + streams',
      'Java Brains — Java Streams API playlist (YouTube) · tricky stream operations',
      'Ed Yordan — Java Interview Questions (Udemy) · comprehensive Q&A bank',
      'Baeldung — Java Streams Cookbook (free) · advanced collectors + grouping',
    ],
    wplan: [
      {
        w: 1,
        f: 'Java 8 Tricky Questions',
        t: 'Lambdas vs anonymous classes, effectively final, functional interfaces (@FunctionalInterface), method references (static/instance/constructor), Optional (orElse vs orElseGet trap), default/static interface methods. 30 tricky MCQs spoken aloud.',
      },
      {
        w: 2,
        f: 'Streams API Tricky Questions',
        t: 'Intermediate vs terminal ops, lazy evaluation traps, parallel stream pitfalls, collect(Collectors.*), groupingBy/partitioningBy, flatMap vs map, reduce identity value trap, findFirst vs findAny. 40 stream coding + verbal Qs.',
      },
      {
        w: 3,
        f: 'OOP + Collections + Concurrency',
        t: 'Inheritance vs composition, equals/hashCode contract, HashMap internals, ConcurrentHashMap, ArrayList vs LinkedList, ExecutorService, CompletableFuture, synchronized vs ReentrantLock. 30 interview Qs.',
      },
      {
        w: 4,
        f: 'Spring + Java Mock Interviews',
        t: 'Spring IoC/DI, @Transactional pitfalls, JPA N+1, REST API design, JVM memory model basics. 5 timed Java mock interviews (spoken aloud, 45 min). Cheat sheet of top 50 Java 8 + Streams traps.',
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
    name: 'Python Interview Preparation',
    label: 'Block 2 · Interview Prep',
    days: 24,
    ds: 951,
    de: 974,
    period: 'Jan 25 – Feb 17, 2029',
    ms: 'Python Interview Prep Done · D974',
    about:
      '24 study days. Python interview mastery — not certification. Data types, OOP, dunder methods, decorators, generators, GIL, memory management, list/dict comprehensions, *args/**kwargs, shallow vs deep copy, asyncio basics, context managers, type hints. FastAPI/Django interview Qs from Block 1. 80+ verbal Qs + 4 Python coding challenges.',
    courses: [
      'Real Python — Python Interview Questions (articles)',
      'Corey Schafer — Python OOP + Decorators (YouTube) · interview favourites',
      'Ed Yordan — Python Interview Questions (Udemy) · comprehensive Q bank',
      'LeetCode — Python-specific easy/medium problems · live coding practice',
    ],
    wplan: [
      {
        w: 1,
        f: 'Python Fundamentals + OOP',
        t: 'Mutable vs immutable, list/dict/set internals, MRO, dunder methods (__str__, __repr__, __eq__), @property, @classmethod vs @staticmethod. 25 spoken Qs.',
      },
      {
        w: 2,
        f: 'Decorators + Generators + GIL',
        t: 'Decorator syntax + functools.wraps, generator yield/send, itertools, GIL implications, multiprocessing vs threading vs asyncio. 20 tricky Qs.',
      },
      {
        w: 3,
        f: 'Python Coding Challenges',
        t: 'Live coding: flatten nested list, LRU cache, rate limiter, custom context manager, async fetch pattern. 10 LeetCode mediums in Python.',
      },
      {
        w: 4,
        f: 'Python Mock Interviews',
        t: '4 Python mock interviews: FastAPI/Django architecture Qs, explain Agentic AI FPO project, debug Python code live. D974 = PYTHON INTERVIEW PREP DONE.',
      },
    ],
  },
  {
    id: 'p15',
    block: 'b2',
    seq: 15,
    icon: '⚛',
    color: '#0EA5E9',
    dark: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    name: 'React Interview Preparation',
    label: 'Block 2 · Interview Prep · FINAL',
    days: 26,
    ds: 975,
    de: 1000,
    period: 'Feb 18 – Mar 15, 2029',
    ms: 'React Interview Prep + 1000 DAYS COMPLETE · D1000 · Mar 15, 2029',
    about:
      '26 study days. React interview mastery — hooks deep dive, reconciliation, virtual DOM, state management (Redux Toolkit vs Context), performance (memo, useMemo, useCallback, code splitting), React 18/19 features (Suspense, concurrent rendering), custom hooks patterns, testing strategy, TypeScript + React. Build 5 mini components live in interviews. D1000 = 1000 DAYS OF CODE COMPLETE.',
    courses: [
      'GreatFrontEnd — React Interview Questions (free) · most comprehensive React Q bank',
      'Kent C. Dodds — Epic React (patterns) · advanced hooks + performance',
      'Maximilian Schwarzmüller — React Interview Prep sections (Udemy) · hooks + Redux',
      'ui.dev — React Interview Guide (blog) · reconciliation + fiber architecture',
    ],
    wplan: [
      {
        w: 1,
        f: 'React Core + Hooks Tricky Qs',
        t: 'Virtual DOM vs real DOM, reconciliation, useState batching, useEffect cleanup traps, stale closure problem, useRef vs useState, rules of hooks. 30 spoken-aloud Qs.',
      },
      {
        w: 2,
        f: 'State Management + Performance',
        t: 'Redux Toolkit vs Context vs Zustand, RTK Query caching, React.memo when to use, useMemo/useCallback traps, lazy/Suspense, error boundaries, key prop traps. 25 Qs.',
      },
      {
        w: 3,
        f: 'Advanced React + TypeScript',
        t: 'Custom hooks patterns, compound components, render props vs HOCs, React 18 concurrent features, typed props/generics with TS, React Router v6 interview Qs. 5 live coding challenges.',
      },
      {
        w: 4,
        f: 'React Mock Interviews + D1000 Done',
        t: '5 full React mock interviews (build component live, explain architecture, optimize re-renders). Portfolio walkthrough: FPO dashboard + web portal. D1000 = Mar 15, 2029 = 1000 DAYS COMPLETE 🏆',
      },
    ],
  },
];

const MILESTONES = [
  { day: 30, icon: '🐍', label: 'Python Done', date: 'Jul 19, 2026', color: '#16A34A' },
  { day: 60, icon: '⚡', label: 'FastAPI Done', date: 'Aug 18, 2026', color: '#059669' },
  { day: 90, icon: '🤖', label: 'Agentic AI Done', date: 'Sep 17, 2026', color: '#6366F1' },
  { day: 120, icon: '🎸', label: 'Django Done', date: 'Oct 17, 2026', color: '#0891B2' },
  { day: 150, icon: '📜', label: 'JavaScript Done', date: 'Nov 16, 2026', color: '#EAB308' },
  { day: 180, icon: '🔷', label: 'TypeScript Done', date: 'Dec 16, 2026', color: '#2563EB' },
  { day: 210, icon: '⚛', label: 'React Done', date: 'Jan 15, 2027', color: '#0EA5E9' },
  { day: 240, icon: '▲', label: 'Next.js Done', date: 'Feb 14, 2027', color: '#0F172A' },
  { day: 270, icon: '📱', label: 'React Native Done', date: 'Mar 16, 2027', color: '#7C3AED' },
  { day: 300, icon: '🟢', label: 'Node.js Done', date: 'Apr 15, 2027', color: '#16A34A' },
  { day: 330, icon: '☕', label: 'J2SE Done', date: 'May 15, 2027', color: '#EA580C' },
  { day: 360, icon: '🏢', label: 'J2EE Done', date: 'Jun 14, 2027', color: '#0891B2' },
  { day: 390, icon: '🗄', label: 'JPA Done', date: 'Jul 14, 2027', color: '#7C3AED' },
  { day: 420, icon: '🌱', label: 'Spring Boot Done', date: 'Aug 13, 2027', color: '#16A34A' },
  { day: 450, icon: '🏛', label: 'Microservices Done', date: 'Sep 12, 2027', color: '#E11D48' },
  { day: 487, icon: '🔧', label: 'DevOps — 16mo DONE', date: 'Oct 19, 2027', color: '#D97706' },
  { day: 617, icon: '🧩', label: 'DSA Complete', date: 'Feb 14, 2028', color: '#4F46E5' },
  { day: 682, icon: '🏗', label: 'System Design Done', date: 'Apr 20, 2028', color: '#7C3AED' },
  { day: 873, icon: '☁', label: 'AWS Interview Prep Done', date: 'Nov 8, 2028', color: '#D97706' },
  { day: 898, icon: '☸', label: 'Kubernetes Interview Done', date: 'Dec 3, 2028', color: '#4338CA' },
  { day: 924, icon: '🔧', label: 'DevOps Interview Done', date: 'Dec 29, 2028', color: '#D97706' },
  { day: 950, icon: '☕', label: 'Java Interview Prep Done', date: 'Jan 24, 2029', color: '#EA580C' },
  { day: 974, icon: '🐍', label: 'Python Interview Prep Done', date: 'Feb 17, 2029', color: '#16A34A' },
  { day: 1000, icon: '⚛', label: 'React Interview — 1000 DAYS DONE', date: 'Mar 15, 2029', color: '#0EA5E9' },
];

function daysIn() {
  return Math.max(0, Math.floor((new Date() - START) / 86400000));
}
function studyDay() {
  return Math.min(daysIn() + 1, TOTAL);
}
function curId() {
  const d = studyDay();
  for (const p of PHASES) if (d <= p.de) return p.id;
  return null;
}
function pct() {
  return Math.min(100, Math.round((studyDay() / TOTAL) * 100));
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
    sd = studyDay(),
    cid = curId(),
    prog = pct();
  const msDone = MILESTONES.filter((m) => m.day <= sd).length;
  const nextMs = MILESTONES.find((m) => m.day > sd);
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
      title: '📚 BLOCK 1 · 16-MONTH SKILL PLAN · 16 SKILLS',
      sub: 'D1–D487 · Jun 20, 2026 – Oct 19, 2027 · 487 days · 5:30–8:30 AM · Python → FastAPI → Agentic AI → Django → JS → TS → React → NextJS → RN → Node → J2SE → J2EE → JPA → Spring → Micro → DevOps',
      ids: ['s1','s2','s3','s4','s5','s6','s7','s8','s9','s10','s11','s12','s13','s14','s15','s16'],
    },
    {
      col: '#6366F1',
      title: '🚀 BLOCK 2 · ADVANCED STUDIES',
      sub: 'D488–D1000 · Oct 20, 2027 – Jun 19, 2029 · 513 study days · 96 relaxation · DSA → SD → AWS → K8s → DevOps → Java → Python → React Interview Prep',
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
                {'1000 Days of Code'}
              </div>
              <div
                style={{
                  fontSize: 9,
                  color: 'rgba(255,255,255,0.6)',
                  marginTop: 2,
                }}
              >
                {
                  'Sat Jun 20, 2026 → Wed Jun 19, 2029 · 5:30 AM – 8:30 AM · 3h · 1000 study days + 96 relaxation days'
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
                  'Jun 20, 2026 → Jun 19, 2029 · 1000 study days · 96 relaxation days if you miss 5:30–8:30 AM · No 2nd slot'
                }
              </div>
            </div>
          </div>


          <div
            style={{
              background: 'rgba(245,158,11,0.14)',
              border: '1px solid rgba(245,158,11,0.4)',
              borderRadius: 8,
              padding: '8px 12px',
              marginBottom: 10,
              display: 'flex',
              gap: 9,
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 15, flexShrink: 0 }}>{'🌴'}</span>
            <div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: '#FDE68A',
                  marginBottom: 1,
                }}
              >
                {'96 relaxation days · skip 5:30–8:30 AM when unavoidable'}
              </div>
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.5)' }}>
                {
                  '1000 study days of content · 96 buffer days · finish by Jun 19, 2029'
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
                      sd > p.de
                        ? p.color + '75'
                        : sd >= p.ds
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
                {prog + '% · Study Day ' + sd + ' of 1000 · Deadline ' + CALENDAR_END}
              </span>
              <span>{'Jun 19, 2029'}</span>
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
                const done = m.day <= sd,
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
                  isDone={sd > p.de}
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
            {'🏆 1000 Days of Code · Jun 20, 2026 → Jun 19, 2029 · 1000 study + 96 relaxation'}
          </div>
          <div
            style={{
              fontSize: 9,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 8,
            }}
          >
            {
              'Block 1: 16-Month Skills (D1–D487) · Block 2: Advanced Studies (D488–D1000) · 5:30–8:30 AM · 3h · 96 relaxation days'
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
                    opacity: sd > p.de ? 1 : 0.35,
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
