import { useState } from 'react';
// 3 Years of Code · 1096 Days · Jun 20, 2026 → Jun 19, 2029
// 5:30 AM – 8:30 AM daily · 3 hours · No 2nd slot
// Block 1: 16-Month Skill Plan D1-D487   (Jun 20, 2026 – Oct 19, 2027)
// Block 2: Advanced Studies    D488-D1096 (Oct 20, 2027 – Jun 19, 2029)

const START = new Date('2026-06-20');
const TOTAL = 1096;

const BLOCKS = [
  {
    id: 'b1',
    icon: '📚',
    col: '#0EA5E9',
    title: '16-Month Skill Plan',
    sub: 'D1–D487 · Jun 20, 2026 – Oct 19, 2027 · 487 days · 16 skills',
    detail:
      'JavaScript → TypeScript → React → NextJS → React Native → Express/Node → J2SE → J2EE → JPA → Spring Boot → Microservices → Python → Django → Agentic AI → PySpark → DevOps',
    time: '5:30 AM – 8:30 AM · 3h daily',
  },
  {
    id: 'b2',
    icon: '🚀',
    col: '#6366F1',
    title: 'Advanced Studies',
    sub: 'D488–D1096 · Oct 20, 2027 – Jun 19, 2029 · 609 days · 9 phases',
    detail:
      'DSA (5mo) → System Design (2mo) → AWS×3 Certs (7mo) → CKA+TF+Java+Python+Spring Certs (9 total)',
    time: '5:30 AM – 8:30 AM · 3h daily',
  },
];

const PHASES = [
  // ══ BLOCK 1: 16-MONTH SKILL PLAN (487 days · 16 skills) ═════════════════
  {
    id: 's1', block: 'b1', seq: 1, icon: '📜',
    color: '#EAB308', dark: '#CA8A04', bg: '#FEFCE8', border: '#FDE047',
    name: 'JavaScript',
    label: 'Skill 1 · 1 Month',
    days: 30, ds: 1, de: 30,
    period: 'Jun 20 – Jul 19, 2026',
    ms: 'JavaScript Complete · D30',
    about: '30 days · 1 month. ES6+ fundamentals: let/const, arrow functions, closures, prototypes, async/await, Promises, modules, destructuring, spread/rest, Map/Set, fetch API. Build 5 mini projects in vanilla JS. Foundation for React, Node, and TypeScript.',
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
    id: 's2', block: 'b1', seq: 2, icon: '🔷',
    color: '#2563EB', dark: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE',
    name: 'TypeScript',
    label: 'Skill 2 · 1 Month',
    days: 30, ds: 31, de: 60,
    period: 'Jul 20 – Aug 18, 2026',
    ms: 'TypeScript Complete · D60',
    about: '30 days · 1 month. Strict TypeScript: basic types, interfaces vs types, generics, utility types, enums, tuples, type guards, discriminated unions, keyof/typeof, tsconfig. Refactor Week 1 JS projects to TypeScript with Vite.',
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
    id: 's3', block: 'b1', seq: 3, icon: '⚛',
    color: '#0EA5E9', dark: '#0369A1', bg: '#F0F9FF', border: '#BAE6FD',
    name: 'React',
    label: 'Skill 3 · 1 Month',
    days: 30, ds: 61, de: 90,
    period: 'Aug 19 – Sep 17, 2026',
    ms: 'React Complete · D90',
    about: '30 days · 1 month. React 19 with TypeScript: JSX, components, props, useState, useEffect, useRef, useMemo, useCallback, custom hooks, React Router v6, Redux Toolkit, RTK Query, React Testing Library. Build FPO flight dashboard (no Next.js yet).',
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
    id: 's4', block: 'b1', seq: 4, icon: '▲',
    color: '#0F172A', dark: '#020617', bg: '#F8FAFC', border: '#CBD5E1',
    name: 'Next.js',
    label: 'Skill 4 · 1 Month',
    days: 30, ds: 91, de: 120,
    period: 'Sep 18 – Oct 17, 2026',
    ms: 'Next.js Complete · D120',
    about: '30 days · 1 month. Next.js 15 App Router: file-based routing, layouts, Server Components vs Client Components, Server Actions, data fetching (SSR/SSG/ISR), NextAuth v5, Prisma + PostgreSQL, Vercel deploy. Build FPO web portal capstone.',
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
    id: 's5', block: 'b1', seq: 5, icon: '📱',
    color: '#7C3AED', dark: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE',
    name: 'React Native',
    label: 'Skill 5 · 1 Month',
    days: 30, ds: 121, de: 150,
    period: 'Oct 18 – Nov 16, 2026',
    ms: 'React Native Complete · D150',
    about: '30 days · 1 month. React Native + Expo: core components, Flexbox, FlatList, React Navigation v6, Redux Toolkit, Expo SDK (Camera, Location, Push), Reanimated 2, EAS Build. Deploy FPO mobile flight app to TestFlight on iPad.',
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
    id: 's6', block: 'b1', seq: 6, icon: '🟢',
    color: '#16A34A', dark: '#15803D', bg: '#F0FDF4', border: '#BBF7D0',
    name: 'Express.js + Node.js',
    label: 'Skill 6 · 1 Month',
    days: 30, ds: 151, de: 180,
    period: 'Nov 17 – Dec 16, 2026',
    ms: 'Express.js + Node.js Complete · D180',
    about: '30 days · 1 month. Node.js event loop, CommonJS vs ESM, Express routing, middleware chain, REST API design, Mongoose + MongoDB Atlas, JWT auth, Zod validation, Jest + supertest, Docker, deploy to AWS ECS Fargate.',
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
    id: 's7', block: 'b1', seq: 7, icon: '☕',
    color: '#EA580C', dark: '#C2410C', bg: '#FFF7ED', border: '#FED7AA',
    name: 'J2SE',
    label: 'Skill 7 · 1 Month',
    days: 30, ds: 181, de: 210,
    period: 'Dec 17, 2026 – Jan 15, 2027',
    ms: 'J2SE Complete · D210',
    about: '30 days · 1 month. Java Standard Edition using C# background: JDK/JVM, syntax, OOP (inheritance, polymorphism, interfaces), generics, Collections (ArrayList/HashMap), Streams/Lambdas, Optional, records, sealed classes. Fast-track with your .NET experience.',
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
    id: 's8', block: 'b1', seq: 8, icon: '🏢',
    color: '#0891B2', dark: '#0E7490', bg: '#ECFEFF', border: '#A5F3FC',
    name: 'J2EE',
    label: 'Skill 8 · 1 Month',
    days: 30, ds: 211, de: 240,
    period: 'Jan 16 – Feb 14, 2027',
    ms: 'J2EE Complete · D240',
    about: '30 days · 1 month. Java Enterprise Edition basics: Servlets, JSP, JDBC, connection pooling, JAX-RS REST basics, deployment descriptors, WAR packaging, Tomcat. Bridge from J2SE to Spring ecosystem.',
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
    id: 's9', block: 'b1', seq: 9, icon: '🗄',
    color: '#7C3AED', dark: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE',
    name: 'JPA',
    label: 'Skill 9 · 1 Month',
    days: 30, ds: 241, de: 270,
    period: 'Feb 15 – Mar 16, 2027',
    ms: 'JPA Complete · D270',
    about: '30 days · 1 month. JPA/Hibernate deep dive: @Entity, @Id, EntityManager, relationships (@OneToMany/@ManyToMany), CascadeType, FetchType, JPQL, @Query, N+1 problem, @EntityGraph, @Transactional, L1/L2 caching.',
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
    id: 's10', block: 'b1', seq: 10, icon: '🌱',
    color: '#16A34A', dark: '#15803D', bg: '#F0FDF4', border: '#BBF7D0',
    name: 'Spring Boot',
    label: 'Skill 10 · 1 Month',
    days: 30, ds: 271, de: 300,
    period: 'Mar 17 – Apr 15, 2027',
    ms: 'Spring Boot Complete · D300',
    about: '30 days · 1 month. Spring Boot 3: auto-configuration, IoC/DI, @RestController REST APIs, @Valid, @ExceptionHandler, Spring Security + JWT + OAuth2 (maps to FPO Cognito!), OpenAPI/Swagger, testing with MockMvc + Testcontainers.',
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
    id: 's11', block: 'b1', seq: 11, icon: '🏛',
    color: '#E11D48', dark: '#BE123C', bg: '#FFF1F2', border: '#FECDD3',
    name: 'Microservices',
    label: 'Skill 11 · 1 Month',
    days: 30, ds: 301, de: 330,
    period: 'Apr 16 – May 15, 2027',
    ms: 'Microservices Complete · D330',
    about: '30 days · 1 month. Spring Cloud microservices: Eureka, Gateway, Feign, Resilience4j, Kafka, CQRS, Event Sourcing, Saga pattern. Deploy to AWS EKS. Every pattern maps to FPO Cloud (EventBridge, Step Functions, DynamoDB streams).',
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
    id: 's12', block: 'b1', seq: 12, icon: '🐍',
    color: '#16A34A', dark: '#15803D', bg: '#F0FDF4', border: '#BBF7D0',
    name: 'Python',
    label: 'Skill 12 · 1 Month',
    days: 30, ds: 331, de: 360,
    period: 'May 16 – Jun 14, 2027',
    ms: 'Python Complete · D360',
    about: '30 days · 1 month. Python 3 fundamentals: variables, data types, OOP, dunder methods, type hints, decorators, generators, asyncio basics, file I/O, virtual environments, pip, boto3 AWS automation (EC2/S3/Lambda/DynamoDB).',
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
    id: 's13', block: 'b1', seq: 13, icon: '🎸',
    color: '#0891B2', dark: '#0E7490', bg: '#ECFEFF', border: '#A5F3FC',
    name: 'Django',
    label: 'Skill 13 · 1 Month',
    days: 30, ds: 361, de: 390,
    period: 'Jun 15 – Jul 14, 2027',
    ms: 'Django Complete · D390',
    about: '30 days · 1 month. Django MVT: models, migrations, admin, views (FBV/CBV), URL routing, signals. Django REST Framework: serializers, ModelViewSet, routers, JWT (simplejwt), permissions, filtering. Build REST API connected to AWS.',
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
    id: 's14', block: 'b1', seq: 14, icon: '🤖',
    color: '#6366F1', dark: '#4338CA', bg: '#EEF2FF', border: '#C7D2FE',
    name: 'Agentic AI',
    label: 'Skill 14 · 1 Month',
    days: 30, ds: 391, de: 420,
    period: 'Jul 15 – Aug 13, 2027',
    ms: 'Agentic AI Complete · D420',
    about: '30 days · 1 month. LangChain, LangGraph, RAG pipelines, multi-agent systems, MCP protocol, FastAPI + Pydantic v2, AWS Bedrock. Ed Donner projects. Capstone: FPO AI assistant (natural language flight queries) on AWS Lambda.',
    courses: [
      'Ed Donner — Complete Agentic AI Engineering 2026 (Udemy)',
      'Eden Marco — LangChain LLM Applications (Udemy)',
      'AWS Bedrock docs — deploy on FPO Cloud',
    ],
    wplan: [
      { w: 1, f: 'GenAI + Prompt Engineering', t: 'LLMs, embeddings, RAG, vector DBs, CoT/ReAct, AWS Bedrock' },
      { w: 2, f: 'LangChain + LangGraph', t: 'chains, agents, tools, LCEL, state machines, supervisor agents' },
      { w: 3, f: 'Ed Donner Projects', t: 'Career Digital Twin, Deep Research Agent, SDR Agent — build 3' },
      { w: 4, f: 'FPO AI Capstone', t: 'FastAPI + Mangum, MCP integration, FPO AI assistant on Lambda' },
    ],
  },
  {
    id: 's15', block: 'b1', seq: 15, icon: '⚡',
    color: '#F59E0B', dark: '#D97706', bg: '#FFFBEB', border: '#FDE68A',
    name: 'Big Data with PySpark',
    label: 'Skill 15 · 1 Month',
    days: 30, ds: 421, de: 450,
    period: 'Aug 14 – Sep 12, 2027',
    ms: 'Big Data with PySpark Complete · D450',
    about: '30 days · 1 month. Apache Spark with PySpark: RDDs, DataFrames, Spark SQL, transformations/actions, joins, window functions, partitioning, Spark Streaming basics, Delta Lake intro. Process FPO flight telemetry datasets on local/Databricks community.',
    courses: [
      'Databricks — Apache Spark Python API docs (official)',
      'Frank Kane — Taming Big Data with Apache Spark and Python (Udemy)',
      'Jose Portilla — Spark and Python for Big Data (Udemy)',
    ],
    wplan: [
      { w: 1, f: 'Spark + PySpark Foundations', t: 'Spark architecture, RDDs, DataFrames, SparkSession, lazy evaluation' },
      { w: 2, f: 'Spark SQL + Transformations', t: 'select/filter/groupBy, joins, aggregations, window functions, UDFs' },
      { w: 3, f: 'Data Pipelines + Performance', t: 'partitioning, caching, broadcast joins, shuffle optimization, Parquet/S3' },
      { w: 4, f: 'FPO Big Data Capstone', t: 'ingest flight telemetry CSV/JSON, analytics with PySpark, write to S3/Delta' },
    ],
  },
  {
    id: 's16', block: 'b1', seq: 16, icon: '🔧',
    color: '#D97706', dark: '#B45309', bg: '#FFFBEB', border: '#FDE68A',
    name: 'DevOps',
    label: 'Skill 16 · 1 Month (~5 Weeks)',
    days: 37, ds: 451, de: 487,
    period: 'Sep 13 – Oct 19, 2027',
    ms: 'DevOps — 16-Month Skill Plan COMPLETE · D487 · Oct 19, 2027',
    about: '37 days · ~5 weeks. Docker, Kubernetes/EKS, CI/CD (GitHub Actions + Jenkins), Terraform, Prometheus/Grafana, SonarQube, DevSecOps. AWS deep dive: Lambda, DynamoDB, CDK TypeScript (FPO stack!). Ends D487 = Oct 19, 2027 = 16-MONTH PLAN COMPLETE.',
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
  // ══ BLOCK 2: ADVANCED STUDIES (609 days) ══════════════════════════════════
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
    days: 154,
    ds: 488,
    de: 641,
    period: 'Oct 20, 2027 – Mar 21, 2028',
    ms: 'DSA Complete · D641 · Mar 21, 2028',
    about:
      '154 days · 5 months. Complete DSA in Python and Java. Arrays, Linked Lists, Stacks, Queues, Trees, BST, Heaps, Graphs, Hashing, Sorting/Searching, Dynamic Programming (hardest — 8 weeks), Backtracking, Greedy, Tries. 400+ LeetCode problems total. Two instructors: Scott Barrett (Python + Java implementations) + NeetCode (pattern-based). Master DP and you stand out in every interview.',
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
    days: 77,
    ds: 642,
    de: 718,
    period: 'Mar 22 – Jun 6, 2028',
    ms: 'System Design Complete · D718 · Jun 6, 2028',
    about:
      '77 days · 2 months. System design interview mastery. Frank Kane 5-step template (Clarify → Estimate → HLD → Deep Dive → Wrap Up). Design 1 system spoken aloud per day (45 min, no notes). Your FPO multi-tenant SaaS + Lambda + DynamoDB + Kafka production experience is a massive advantage — FPO Cloud IS a real system design case study. Cover all classic systems: URL Shortener, WhatsApp, Twitter, YouTube, Netflix, Uber, Airbnb, Payment System, Search Engine. Alex Xu Vol 1 + Vol 2.',
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
        t: '10 full cold mock interviews (spoken aloud, 45 min each, no notes). Focus on weakest 3 systems. Write ADRs for 3 designs. GitHub portfolio with system diagrams. D718 = Jun 6, 2028 = SD DONE.',
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
    days: 195,
    ds: 719,
    de: 913,
    period: 'Jun 7 – Dec 18, 2028',
    ms: 'AWS ×3 Certs DONE · D913',
    about:
      '195 days · 7 months. Three AWS certifications back to back. Months 1-2: SAA-C03 (Solutions Architect Associate). Months 3-4: DVA-C02 (Developer Associate) — Lambda, DynamoDB, API Gateway, Cognito, Step Functions (your exact FPO stack!). Months 5-7: DOP-C02 (DevOps Engineer Professional). All Stephane Maarek + Tutorials Dojo practice exams.',
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
    label: 'Block 2 · Month 12 · Cert',
    days: 31,
    ds: 1034,
    de: 1064,
    period: 'Apr 18 – May 18, 2029',
    ms: 'Spring Professional Cert Done · D1064 · May 18, 2029',
    about:
      '31 days · 1 month. VMware/Broadcom Spring Professional 2024 (EDU-1202) — the most recognised Java/Spring certification. Spring Core (IoC/DI/AOP), Spring Boot auto-configuration, Spring MVC REST APIs, Spring Data JPA, Spring Security (JWT/OAuth2), Spring Testing. You built full Spring Boot apps in Block 1 — this consolidates and certifies that knowledge. All 9 certs achieved by D1064.',
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
        f: 'Spring Cert + All 9 Badges',
        t: 'Sit Spring Professional exam. All 9 badges on Credly: AWS×3, CKA, Terraform, Java, Python, Spring. D1064 = May 18, 2029 = ALL 9 CERTS DONE 🎉',
      },
    ],
  },
  {
    id: 'p16',
    block: 'b2',
    seq: 16,
    icon: '🏆',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECDD3',
    name: '3-Year Journey Capstone',
    label: 'Block 2 · Final Month · WRAP-UP',
    days: 32,
    ds: 1065,
    de: 1096,
    period: 'May 19 – Jun 19, 2029',
    ms: '3 YEARS COMPLETE · D1096 · Jun 19, 2029',
    about:
      '32 days · ~1 month. Final capstone month after all 9 certifications. Polish GitHub portfolio (FPO Cloud, React, Spring, AI, PySpark projects). Update resume + LinkedIn. Full-stack mock interviews (coding + system design + behavioural). Blog 3 ADRs. Celebrate 3 years: Jun 20, 2026 → Jun 19, 2029 = 1096 days = DONE.',
    courses: [
      'Pramp.com + interviewing.io — mock interviews (coding + system design)',
      'Your GitHub portfolio — README overhaul for all capstone projects',
      'LinkedIn + resume — showcase 16 skills + 9 certs + FPO Cloud production experience',
    ],
    wplan: [
      {
        w: 1,
        f: 'Portfolio + GitHub Polish',
        t: 'README for every project: FPO web portal, mobile app, Spring APIs, AI assistant, PySpark pipeline. Pin top 6 repos. Architecture diagrams.',
      },
      {
        w: 2,
        f: 'Mock Interviews Round 1',
        t: '5 timed LeetCode mocks + 3 system design mocks (spoken aloud). Record yourself. Fix weakest patterns from DSA block.',
      },
      {
        w: 3,
        f: 'Mock Interviews Round 2 + Resume',
        t: '5 more coding mocks, 2 behavioural (STAR stories from FPO/SCB). Resume v3: 16 skills, 9 certs, metrics. LinkedIn featured section.',
      },
      {
        w: 4,
        f: '3 Years Complete · D1096',
        t: 'Final review: 16 skills ✓ 9 certs ✓ DSA ✓ System Design ✓ AWS ✓. Day 1096 = Jun 19, 2029 = 3 YEARS OF CODE COMPLETE 🏆',
      },
    ],
  },
];

const MILESTONES = [
  { day: 30, icon: '📜', label: 'JavaScript Done', date: 'Jul 19, 2026', color: '#EAB308' },
  { day: 60, icon: '🔷', label: 'TypeScript Done', date: 'Aug 18, 2026', color: '#2563EB' },
  { day: 90, icon: '⚛', label: 'React Done', date: 'Sep 17, 2026', color: '#0EA5E9' },
  { day: 120, icon: '▲', label: 'Next.js Done', date: 'Oct 17, 2026', color: '#0F172A' },
  { day: 150, icon: '📱', label: 'React Native Done', date: 'Nov 16, 2026', color: '#7C3AED' },
  { day: 180, icon: '🟢', label: 'Express/Node Done', date: 'Dec 16, 2026', color: '#16A34A' },
  { day: 210, icon: '☕', label: 'J2SE Done', date: 'Jan 15, 2027', color: '#EA580C' },
  { day: 240, icon: '🏢', label: 'J2EE Done', date: 'Feb 14, 2027', color: '#0891B2' },
  { day: 270, icon: '🗄', label: 'JPA Done', date: 'Mar 16, 2027', color: '#7C3AED' },
  { day: 300, icon: '🌱', label: 'Spring Boot Done', date: 'Apr 15, 2027', color: '#16A34A' },
  { day: 330, icon: '🏛', label: 'Microservices Done', date: 'May 15, 2027', color: '#E11D48' },
  { day: 360, icon: '🐍', label: 'Python Done', date: 'Jun 14, 2027', color: '#16A34A' },
  { day: 390, icon: '🎸', label: 'Django Done', date: 'Jul 14, 2027', color: '#0891B2' },
  { day: 420, icon: '🤖', label: 'Agentic AI Done', date: 'Aug 13, 2027', color: '#6366F1' },
  { day: 450, icon: '⚡', label: 'PySpark Done', date: 'Sep 12, 2027', color: '#F59E0B' },
  { day: 487, icon: '🔧', label: 'DevOps — 16mo DONE', date: 'Oct 19, 2027', color: '#D97706' },
  { day: 641, icon: '🧩', label: 'DSA Complete', date: 'Mar 21, 2028', color: '#4F46E5' },
  { day: 718, icon: '🏗', label: 'System Design Done', date: 'Jun 6, 2028', color: '#7C3AED' },
  { day: 913, icon: '☁', label: 'AWS ×3 Certs Done', date: 'Dec 18, 2028', color: '#D97706' },
  { day: 943, icon: '☸', label: 'CKA Done', date: 'Jan 17, 2029', color: '#4338CA' },
  { day: 974, icon: '🏗', label: 'Terraform Done', date: 'Feb 17, 2029', color: '#B45309' },
  { day: 1005, icon: '☕', label: 'Java SE 17 Done', date: 'Mar 20, 2029', color: '#EA580C' },
  { day: 1033, icon: '🐍', label: 'Python PCEP+PCAP Done', date: 'Apr 17, 2029', color: '#16A34A' },
  { day: 1064, icon: '🌿', label: 'Spring Cert — ALL 9 DONE', date: 'May 18, 2029', color: '#16A34A' },
  { day: 1096, icon: '🏆', label: '3 YEARS COMPLETE', date: 'Jun 19, 2029', color: '#E11D48' },
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
      title: '📚 BLOCK 1 · 16-MONTH SKILL PLAN · 16 SKILLS',
      sub: 'D1–D487 · Jun 20, 2026 – Oct 19, 2027 · 487 days · 5:30–8:30 AM · JS → TS → React → NextJS → RN → Express → J2SE → J2EE → JPA → Spring → Micro → Python → Django → Agentic AI → PySpark → DevOps',
      ids: ['s1','s2','s3','s4','s5','s6','s7','s8','s9','s10','s11','s12','s13','s14','s15','s16'],
    },
    {
      col: '#6366F1',
      title: '🚀 BLOCK 2 · ADVANCED STUDIES',
      sub: 'D488–D1096 · Oct 20, 2027 – Jun 19, 2029 · 609 days · 5:30–8:30 AM · DSA (5mo) → System Design (2mo) → AWS×3 Certs (7mo) → CKA+TF+Java+Python+Spring Certs → Capstone',
      ids: ['p9', 'p10b', 'p10', 'p11', 'p12', 'p13', 'p14', 'p15', 'p16'],
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
                {'3 Years of Code'}
              </div>
              <div
                style={{
                  fontSize: 9,
                  color: 'rgba(255,255,255,0.6)',
                  marginTop: 2,
                }}
              >
                {
                  'Sat Jun 20, 2026 → Wed Jun 19, 2029 · 5:30 AM – 8:30 AM daily · 3 hours · 1096 days'
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
                  'Jun 20, 2026 → Jun 19, 2029 · 1096 days · 3 years · Single focused study slot · No 2nd slot'
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
                {prog + '% · Day ' + Math.min(d + 1, 1096) + ' of 1096'}
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
            {'🏆 3 Years of Code · Jun 20, 2026 → Jun 19, 2029 · 1096 Days'}
          </div>
          <div
            style={{
              fontSize: 9,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 8,
            }}
          >
            {
              'Block 1: 16-Month Skills (D1–D487) · Block 2: Advanced Studies (D488–D1096) · 5:30–8:30 AM · 3h daily · 3 years'
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
