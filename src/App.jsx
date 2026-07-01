import { useState } from 'react';
// 1000 Days of Code · Jul 1, 2026 → Jun 30, 2029
// 1000 study days + 96 relaxation = 1096 calendar days
// 16 months (3h) → 100d AWS (5h) → 100d SD → 100d DSA → 100d K8s → 112d Interview (+ 96 relax)

const START = new Date('2026-07-01');
const TOTAL = 1000;
const RELAXATION = 96;
const CALENDAR_DAYS = 1096;
const DEADLINE = 'Jun 30, 2029';
const AWS_DAYS = 100;
const AWS_TIME = '5:30 AM – 8:30 AM + 9 AM – 11 AM IST · 5h daily';
const STUDY_TIME = '5:30 AM – 8:30 AM IST · 3h daily';

const BLOCKS = [
  { id: 'b1', icon: '🎓', col: '#E11D48', title: 'Coder Army MERN Course', sub: 'D1–D123 · Jul – Oct 2026', detail: 'Javascript → ExpressJS → Typescript → React JS', time: STUDY_TIME },
  { id: 'b2', icon: '🌐', col: '#0EA5E9', title: 'Extended Frontend', sub: 'D124–D182 · Nov – Dec 2026', detail: 'Next JS (Anil Dollar) → React Native (ChaiCode)', time: STUDY_TIME },
  { id: 'b3', icon: '🐍', col: '#15803D', title: 'Python Stack', sub: 'D183–D304 · Jan – Apr 2027', detail: 'Python + Agentic AI (Ashok IT) → Django → Fast API', time: STUDY_TIME },
  { id: 'b4', icon: '☕', col: '#EA580C', title: 'Java Backend', sub: 'D305–D457 · May – Sep 2027', detail: 'J2SE → J2EE → JPA → Spring Boot → Microservices', time: STUDY_TIME },
  { id: 'b5', icon: '🔧', col: '#6366F1', title: 'DevOps', sub: 'D458–D488 · Oct 2027', detail: 'CloudFolks Hub paid course · 16 months done', time: STUDY_TIME },
  { id: 'b0', icon: '☁', col: '#D97706', title: '100 Days of AWS', sub: 'D489–D588 · Nov 2027 – Feb 2028', detail: 'CloudFolks Hub · IAM → VPC → EC2 → S3 → Lambda → ECS', time: AWS_TIME, scheduleLink: '#/aws-100-days' },
  { id: 'b6', icon: '🏗', col: '#DC2626', title: 'System Design', sub: 'D589–D688 · Feb – May 2028', detail: '100 days · Fundamentals → Classic designs → FPO', time: STUDY_TIME },
  { id: 'b7', icon: '🧮', col: '#059669', title: 'DSA', sub: 'D689–D788 · May – Aug 2028', detail: '100 days · Arrays → Trees → Graphs → DP → Mocks', time: STUDY_TIME },
  { id: 'b8', icon: '☸', col: '#326CE5', title: 'Kubernetes', sub: 'D789–D888 · Aug – Dec 2028', detail: '100 days · CKA/CKAD path · clusters → workloads → networking', time: STUDY_TIME },
  { id: 'b9', icon: '🎯', col: '#7C3AED', title: 'Interview Preparation', sub: 'D889–D1000 · Dec 2028 – Jun 2029', detail: '112 study days (16 weeks) + 96 relaxation · React + Java + Mocks', time: STUDY_TIME },
];

const PHASES = [
  { id: 's1', block: 'b1', seq: 1, icon: '📜', color: '#EAB308', dark: '#CA8A04', bg: '#FEFCE8', border: '#FDE047', name: 'Javascript', label: 'Month 1 · 31 days', days: 31, ds: 1, de: 31, period: 'Jul 1 – Jul 31, 2026', ms: 'Javascript Complete · D31', about: 'Month 1 · Coder Army MERN course starts Jul 2026. JavaScript ES6+ fundamentals: variables, functions, closures, prototypes, arrays/objects, async/await, Promises, modules.', dayLinks: [
      { href: '#/day-001', label: 'Day 001 · Jul 1, 2026', done: true },
    ], courses: [
      'Coder Army — Web Dev + System Design + Security + DevOps (MERN)',
      'javascript.info (free)',
      'MDN Web Docs',
    ], wplan: [
      { w: 1, f: 'Week 1: JS Basics', t: 'syntax, let/const, data types, operators, control flow' },
      { w: 2, f: 'Week 2: Functions & Scope', t: 'closures, hoisting, this keyword, arrow functions' },
      { w: 3, f: 'Week 3: Objects & Arrays', t: 'destructuring, spread, map/filter/reduce, JSON' },
      { w: 4, f: 'Week 4: Async JS', t: 'Promises, async/await, fetch, ES modules, npm' },
    ], },
  { id: 's2', block: 'b1', seq: 2, icon: '🟢', color: '#16A34A', dark: '#15803D', bg: '#F0FDF4', border: '#BBF7D0', name: 'ExpressJS', label: 'Month 2 · 30 days', days: 30, ds: 32, de: 61, period: 'Aug 1 – Aug 30, 2026', ms: 'ExpressJS Complete · D61', about: 'Month 2 · Coder Army MERN course. Express.js: routing, middleware, REST APIs, JWT auth, MongoDB integration.', courses: [
      'Coder Army — MERN Stack course',
      'Express.js official guide',
      'The Net Ninja — Node/Express (YouTube)',
    ], wplan: [
      { w: 1, f: 'Week 1: Node & Express Core', t: 'event loop, modules, Express setup, routing' },
      { w: 2, f: 'Week 2: Middleware & APIs', t: 'custom middleware, validation, error handling' },
      { w: 3, f: 'Week 3: Auth & Database', t: 'JWT, bcrypt, MongoDB/Mongoose' },
      { w: 4, f: 'Week 4: Course Project API', t: 'full CRUD API, deploy, Postman' },
    ], },
  { id: 's3', block: 'b1', seq: 3, icon: '🔷', color: '#2563EB', dark: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE', name: 'Typescript', label: 'Month 3 · 31 days', days: 31, ds: 62, de: 92, period: 'Aug 31 – Sep 30, 2026', ms: 'Typescript Complete · D92', about: 'Month 3 · Coder Army MERN course. TypeScript strict mode: types, interfaces, generics, utility types, type guards.', courses: [
      'Coder Army — MERN Stack course',
      'TypeScript Handbook (free)',
      'Total TypeScript (Matt Pocock)',
    ], wplan: [
      { w: 1, f: 'Week 1: Types & Interfaces', t: 'primitives, arrays, objects, interfaces' },
      { w: 2, f: 'Week 2: Functions & Generics', t: 'generic functions, constraints, keyof' },
      { w: 3, f: 'Week 3: Advanced Types', t: 'union/intersection, utility types' },
      { w: 4, f: 'Week 4: TS + Express', t: 'strict tsconfig, typed Express routes' },
    ], },
  { id: 's4', block: 'b1', seq: 4, icon: '⚛', color: '#0EA5E9', dark: '#0369A1', bg: '#F0F9FF', border: '#BAE6FD', name: 'React JS', label: 'Month 4 · 31 days', days: 31, ds: 93, de: 123, period: 'Oct 1 – Oct 31, 2026', ms: 'React JS Complete · D123', about: 'Month 4 · Coder Army MERN course · React JS capstone. React 19: components, JSX, hooks, React Router, API integration. MERN capstone.', courses: [
      'Coder Army — MERN Stack course',
      'react.dev official docs',
      'Jack Herrington — React patterns',
    ], wplan: [
      { w: 1, f: 'Week 1: React Core', t: 'components, JSX, props, state' },
      { w: 2, f: 'Week 2: Hooks Deep Dive', t: 'useEffect, useContext, useReducer, custom hooks' },
      { w: 3, f: 'Week 3: Routing & State', t: 'React Router v6, context, API integration' },
      { w: 4, f: 'Week 4: MERN Capstone', t: 'full-stack project, course completion 🏆' },
    ], },
  { id: 's5', block: 'b2', seq: 5, icon: '▲', color: '#171717', dark: '#000000', bg: '#F5F5F5', border: '#D4D4D4', name: 'Next JS', label: 'Month 5 · 28 days', days: 28, ds: 124, de: 151, period: 'Nov 1 – Nov 28, 2026', ms: 'Next JS Complete · D151', about: 'Month 5. Next.js via Anil Dollar Udemy: App Router, Server Components, Server Actions, auth, deploy to Vercel.', courses: [
      'Anil Dollar — Next.js (Udemy)',
      'nextjs.org official docs',
    ], wplan: [
      { w: 1, f: 'Week 1: App Router', t: 'file-based routing, layouts, RSC' },
      { w: 2, f: 'Week 2: Data Fetching', t: 'Server Actions, caching, Prisma' },
      { w: 3, f: 'Week 3: Auth & API', t: 'NextAuth, middleware, protected routes' },
      { w: 4, f: 'Week 4: FPO Portal', t: 'flight search UI, deploy to Vercel' },
    ], },
  { id: 's6', block: 'b2', seq: 6, icon: '📱', color: '#7C3AED', dark: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE', name: 'React Native', label: 'Month 6 · 31 days', days: 31, ds: 152, de: 182, period: 'Nov 29 – Dec 29, 2026', ms: 'React Native Complete · D182', about: 'Month 6. React Native from ChaiCode official website: Expo, navigation, device APIs, EAS Build.', courses: [
      'ChaiCode — React Native (official website)',
      'Expo docs',
      'React Navigation docs',
    ], wplan: [
      { w: 1, f: 'Week 1: RN Basics', t: 'Expo setup, core components, Flexbox' },
      { w: 2, f: 'Week 2: Navigation', t: 'React Navigation stack/tab' },
      { w: 3, f: 'Week 3: Device APIs', t: 'camera, location, AsyncStorage' },
      { w: 4, f: 'Week 4: FPO Mobile App', t: 'flight status screen, EAS Build' },
    ], },
  { id: 's7', block: 'b3', seq: 7, icon: '🐍', color: '#15803D', dark: '#166534', bg: '#F0FDF4', border: '#86EFAC', name: 'Python', label: 'Month 7 · 30 days', days: 30, ds: 183, de: 212, period: 'Dec 30, 2026 – Jan 28, 2027', ms: 'Python Complete · D212', about: 'Month 7. Python 3 from Ashok IT paid course: fundamentals, OOP, decorators, asyncio.', courses: [
      'Ashok IT — Python (paid course)',
      'Python official docs',
    ], wplan: [
      { w: 1, f: 'Week 1: Python Basics', t: 'syntax, data types, functions' },
      { w: 2, f: 'Week 2: OOP & Advanced', t: 'classes, decorators, generators' },
      { w: 3, f: 'Week 3: Async', t: 'asyncio, aiohttp' },
      { w: 4, f: 'Week 4: Automation', t: 'scripts, pandas intro' },
    ], },
  { id: 's8', block: 'b3', seq: 8, icon: '🎸', color: '#092E20', dark: '#051B14', bg: '#ECFDF5', border: '#6EE7B7', name: 'Django', label: 'Month 8 · 31 days', days: 31, ds: 213, de: 243, period: 'Jan 29 – Feb 28, 2027', ms: 'Django Complete · D243', about: 'Month 8. Django 5 + DRF: models, migrations, admin, serializers, viewsets.', courses: [
      'Dennis Ivy — Django (YouTube)',
      'Django official docs',
      'DRF docs',
    ], wplan: [
      { w: 1, f: 'Week 1: Django Core', t: 'models, migrations, admin' },
      { w: 2, f: 'Week 2: DRF Basics', t: 'serializers, API views' },
      { w: 3, f: 'Week 3: Auth & Permissions', t: 'token auth, throttling' },
      { w: 4, f: 'Week 4: FPO Admin', t: 'booking admin API' },
    ], },
  { id: 's9', block: 'b3', seq: 9, icon: '⚡', color: '#009688', dark: '#00796B', bg: '#E0F2F1', border: '#80CBC4', name: 'Fast API', label: 'Month 9 · 30 days', days: 30, ds: 244, de: 273, period: 'Mar 1 – Mar 30, 2027', ms: 'Fast API Complete · D273', about: 'Month 9. FastAPI: async routes, Pydantic v2, dependency injection, OAuth2, SQLAlchemy.', courses: [
      'FastAPI official docs',
      'TestDriven.io — FastAPI',
    ], wplan: [
      { w: 1, f: 'Week 1: FastAPI Core', t: 'routes, Pydantic models' },
      { w: 2, f: 'Week 2: Database Layer', t: 'SQLAlchemy, Alembic' },
      { w: 3, f: 'Week 3: Auth & Middleware', t: 'OAuth2, JWT, CORS' },
      { w: 4, f: 'Week 4: Deploy API', t: 'Dockerize, OpenAPI' },
    ], },
  { id: 's10', block: 'b3', seq: 10, icon: '🤖', color: '#8B5CF6', dark: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE', name: 'Agentic AI', label: 'Month 10 · 31 days', days: 31, ds: 274, de: 304, period: 'Mar 31 – Apr 30, 2027', ms: 'Agentic AI Complete · D304', about: 'Month 10. Agentic AI from Ashok IT paid course: LangChain, LangGraph, RAG, multi-agent systems.', courses: [
      'Ashok IT — Agentic AI (paid course)',
      'LangGraph docs',
      'LangChain docs',
    ], wplan: [
      { w: 1, f: 'Week 1: GenAI + RAG', t: 'LLMs, embeddings, vector stores' },
      { w: 2, f: 'Week 2: LangChain + LangGraph', t: 'chains, agents, tools' },
      { w: 3, f: 'Week 3: Agent Projects', t: 'Career Twin, Deep Research' },
      { w: 4, f: 'Week 4: FPO AI Capstone', t: 'natural language flight queries' },
    ], },
  { id: 's11', block: 'b4', seq: 11, icon: '☕', color: '#EA580C', dark: '#C2410C', bg: '#FFF7ED', border: '#FED7AA', name: 'J2SE', label: 'Month 11 · 31 days', days: 31, ds: 305, de: 335, period: 'May 1 – May 31, 2027', ms: 'J2SE Complete · D335', about: 'Month 11. Java SE: syntax, OOP, collections, streams, lambdas, Optional, records.', courses: [
      'Telusko — Java (YouTube)',
      'John Thompson — Java Masterclass',
      'Baeldung',
    ], wplan: [
      { w: 1, f: 'Week 1: Java Syntax & OOP', t: 'classes, inheritance, polymorphism' },
      { w: 2, f: 'Week 2: Collections & Streams', t: 'ArrayList, HashMap, Stream API' },
      { w: 3, f: 'Week 3: Modern Java', t: 'lambdas, Optional, records' },
      { w: 4, f: 'Week 4: Concurrency', t: 'threads, ExecutorService' },
    ], },
  { id: 's12', block: 'b4', seq: 12, icon: '🏢', color: '#0891B2', dark: '#0E7490', bg: '#ECFEFF', border: '#A5F3FC', name: 'J2EE', label: 'Month 12 · 30 days', days: 30, ds: 336, de: 365, period: 'Jun 1 – Jun 30, 2027', ms: 'J2EE Complete · D365', about: 'Month 12. Jakarta EE: Servlets, JSP, JNDI, JDBC, connection pooling.', courses: [
      'Telusko — Servlet & JSP',
      'Java Brains — J2EE',
      'Head First Servlets & JSP',
    ], wplan: [
      { w: 1, f: 'Week 1: Servlets', t: 'lifecycle, request/response, sessions' },
      { w: 2, f: 'Week 2: JSP & JSTL', t: 'JSP tags, EL, JSTL' },
      { w: 3, f: 'Week 3: JDBC & JNDI', t: 'DataSource, pooling' },
      { w: 4, f: 'Week 4: EE Architecture', t: 'deploy WAR, Tomcat' },
    ], },
  { id: 's13', block: 'b4', seq: 13, icon: '🗄', color: '#7C3AED', dark: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE', name: 'JPA', label: 'Month 13 · 31 days', days: 31, ds: 366, de: 396, period: 'Jul 1 – Jul 31, 2027', ms: 'JPA Complete · D396', about: 'Month 13. JPA/Hibernate: @Entity, relationships, JPQL, Spring Data JPA, N+1 problem.', courses: [
      'Java Brains — JPA & Hibernate',
      'Baeldung — JPA',
      'Spring Data JPA docs',
    ], wplan: [
      { w: 1, f: 'Week 1: JPA Entities', t: '@Entity, @Id, relationships' },
      { w: 2, f: 'Week 2: Queries', t: 'JPQL, Criteria API' },
      { w: 3, f: 'Week 3: Spring Data JPA', t: 'JpaRepository, paging' },
      { w: 4, f: 'Week 4: Performance', t: 'N+1 fix, caching' },
    ], },
  { id: 's14', block: 'b4', seq: 14, icon: '🌱', color: '#6DB33F', dark: '#4E9A2E', bg: '#F0FDF4', border: '#86EFAC', name: 'Spring Boot', label: 'Month 14 · 30 days', days: 30, ds: 397, de: 426, period: 'Aug 1 – Aug 30, 2027', ms: 'Spring Boot Complete · D426', about: 'Month 14. Spring Boot 3: REST APIs, Spring Security + OAuth2, OpenAPI, testing.', courses: [
      'John Thompson — Spring Boot 3',
      'Baeldung — Spring Boot',
      'Spring Security docs',
    ], wplan: [
      { w: 1, f: 'Week 1: Spring Boot Core', t: 'starters, REST controllers' },
      { w: 2, f: 'Week 2: Security', t: 'Spring Security, JWT, OAuth2' },
      { w: 3, f: 'Week 3: Testing', t: 'JUnit 5, Mockito, Testcontainers' },
      { w: 4, f: 'Week 4: FPO API', t: 'Spring Boot flight API' },
    ], },
  { id: 's15', block: 'b4', seq: 15, icon: '🏛', color: '#E11D48', dark: '#BE123C', bg: '#FFF1F2', border: '#FECDD3', name: 'Microservices', label: 'Month 15 · 31 days', days: 31, ds: 427, de: 457, period: 'Aug 31 – Sep 30, 2027', ms: 'Microservices Complete · D457', about: 'Month 15. Microservices: Spring Cloud, Kafka, Resilience4j, CQRS, saga patterns.', courses: [
      'Ranga Karanam — Microservices',
      'Spring Cloud docs',
      'microservices.io',
    ], wplan: [
      { w: 1, f: 'Week 1: MS Fundamentals', t: '12-factor, bounded contexts' },
      { w: 2, f: 'Week 2: Spring Cloud', t: 'Eureka, Config Server, API Gateway' },
      { w: 3, f: 'Week 3: Event-Driven', t: 'Kafka producers/consumers' },
      { w: 4, f: 'Week 4: FPO Decomposition', t: 'flight/booking/auth services' },
    ], },
  { id: 's16', block: 'b5', seq: 16, icon: '🔧', color: '#6366F1', dark: '#4338CA', bg: '#EEF2FF', border: '#C7D2FE', name: 'Devops', label: 'Month 16 · 31 days', days: 31, ds: 458, de: 488, period: 'Oct 1 – Oct 31, 2027', ms: 'Devops Complete · D488', about: 'Month 16. DevOps from CloudFolks Hub paid course. Then 100 days AWS → System Design → DSA → Kubernetes → Interview Prep through Jun 2029.', courses: [
      'CloudFolks Hub — DevOps (paid course)',
      'Docker docs',
      'Kubernetes docs',
    ], wplan: [
      { w: 1, f: 'Week 1: Docker + ECR', t: 'multi-stage Dockerfile, compose' },
      { w: 2, f: 'Week 2: Kubernetes + EKS', t: 'deployments, services, ingress' },
      { w: 3, f: 'Week 3: CI/CD + Terraform', t: 'GitHub Actions OIDC, IaC' },
      { w: 4, f: 'Week 4: FPO Pipeline', t: 'full pipeline + monitoring. 16 MONTHS DONE 🏆' },
    ], },
  { id: 's0', block: 'b0', seq: 'AWS', icon: '☁', color: '#D97706', dark: '#B45309', bg: '#FFFBEB', border: '#FDE68A', name: 'AWS', label: '100 days · 5h daily', days: 100, ds: 489, de: 588, period: 'Nov 1, 2027 – Feb 8, 2028', ms: 'AWS Complete · D588 · Feb 8, 2028', about: 'Nov 2027 – Feb 2028 · 100 days · 5 hours daily (5:30–8:30 AM + 9–11 AM IST). CloudFolks Hub AWS + hands-on labs. IAM, VPC, EC2, S3, RDS, Lambda, Cognito, ECS. After 16-month skill plan.', courses: [
      'CloudFolks Hub — AWS Cloud (paid course)',
      'AWS Skill Builder',
      'AWS Official Documentation',
    ], wplan: [
      { w: 1, f: 'Week 1: IAM & Account', t: 'IAM users, roles, policies, MFA, CLI' },
      { w: 2, f: 'Week 2: VPC Networking', t: 'subnets, IGW, NAT, SGs, endpoints' },
      { w: 3, f: 'Week 3: EC2 & Load Balancing', t: 'EC2, EBS, ALB, ASG' },
      { w: 4, f: 'Week 4: S3 Storage', t: 'buckets, versioning, lifecycle' },
      { w: 5, f: 'Week 5: RDS & DynamoDB', t: 'RDS, Aurora, DynamoDB' },
      { w: 6, f: 'Week 6: Lambda & API Gateway', t: 'serverless APIs, triggers' },
      { w: 7, f: 'Week 7: Cognito & Orchestration', t: 'user pools, Step Functions' },
      { w: 8, f: 'Week 8: ECS, EKS & ECR', t: 'containers on AWS, Fargate' },
      { w: 9, f: 'Week 9: Messaging & DNS', t: 'SQS, SNS, Route 53, CloudFront' },
      { w: 10, f: 'Week 10: CDK & Capstone', t: 'FPO AWS architecture + exam prep' },
    ],
    scheduleLink: '#/aws-100-days', },
  { id: 's17', block: 'b6', seq: 'SD', icon: '🏗', color: '#DC2626', dark: '#B91C1C', bg: '#FEF2F2', border: '#FECACA', name: 'System Design', label: '100 days', days: 100, ds: 589, de: 688, period: 'Feb 9 – May 18, 2028', ms: 'System Design Complete · D688 · May 18, 2028', about: '100 days of System Design (Feb 9 – May 18, 2028). Scalability fundamentals, classic designs, FPO architecture, weekly whiteboards, mock interviews. 3h daily 5:30–8:30 AM IST.', courses: [
      'Alex Xu — System Design Interview',
      'Gaurav Sen (YouTube)',
      'ByteByteGo',
      'DDIA (Kleppmann)',
    ], wplan: [
      { w: 1, f: 'Week 1: Fundamentals', t: 'scalability, CAP, load balancers' },
      { w: 2, f: 'Week 2: Databases', t: 'SQL vs NoSQL, sharding' },
      { w: 3, f: 'Week 3: Messaging', t: 'SQS, SNS, Kafka' },
      { w: 4, f: 'Week 4: API & Microservices', t: 'REST vs gRPC, gateway' },
      { w: 5, f: 'Week 5: URL Shortener', t: 'hashing, Redis' },
      { w: 6, f: 'Week 6: Social Systems', t: 'Twitter timeline, notifications' },
      { w: 7, f: 'Week 7: Ride & Chat', t: 'Uber matching, WhatsApp' },
      { w: 8, f: 'Week 8: FPO Architecture', t: 'flight search, booking' },
      { w: 9, f: 'Week 9: Mock Interviews', t: '5 whiteboard sessions' },
      { w: 10, f: 'Week 10: Portfolio', t: '10 ADRs in GitHub' },
    ], },
  { id: 's18', block: 'b7', seq: 'DSA', icon: '🧮', color: '#059669', dark: '#047857', bg: '#ECFDF5', border: '#6EE7B7', name: 'DSA', label: '100 days', days: 100, ds: 689, de: 788, period: 'May 19 – Aug 26, 2028', ms: 'DSA Complete · D788 · Aug 26, 2028', about: '100 days of DSA (May 19 – Aug 26, 2028). NeetCode 150 + Blind 75 patterns in Python and Java. 3h daily: 1h review, 2h timed problems.', courses: [
      'NeetCode.io',
      'LeetCode Premium',
      'Striver A2Z DSA',
    ], wplan: [
      { w: 1, f: 'Week 1: Arrays & Hashing', t: 'two sum, anagrams, top K' },
      { w: 2, f: 'Week 2: Two Pointers', t: 'sliding window, palindrome' },
      { w: 3, f: 'Week 3: Stacks & Lists', t: 'valid parentheses, LRU cache' },
      { w: 4, f: 'Week 4: Trees & BST', t: 'traversals, LCA' },
      { w: 5, f: 'Week 5: Graphs', t: 'BFS/DFS, islands' },
      { w: 6, f: 'Week 6: Heaps', t: 'merge intervals, kth largest' },
      { w: 7, f: 'Week 7: Backtracking', t: 'subsets, permutations' },
      { w: 8, f: 'Week 8: DP I', t: 'coin change, knapsack' },
      { w: 9, f: 'Week 9: DP II & Greedy', t: 'edit distance, greedy' },
      { w: 10, f: 'Week 10: Mocks', t: '5 full mock rounds' },
    ], },
  { id: 's19', block: 'b8', seq: 'K8s', icon: '☸', color: '#326CE5', dark: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE', name: 'Kubernetes', label: '100 days', days: 100, ds: 789, de: 888, period: 'Aug 27 – Dec 4, 2028', ms: 'Kubernetes Complete · D888 · Dec 4, 2028', about: '100 days of Kubernetes (Aug–Dec 2028). Core concepts, kubectl, workloads, networking, storage, security, Helm, and CKA/CKAD exam prep. 3h daily 5:30–8:30 AM IST. First half of the post-DSA block before interview prep.', courses: [
      'KodeKloud — CKA/CKAD courses',
      'Kubernetes official docs',
      'Killer.sh CKA/CKAD practice',
    ], wplan: [
      { w: 1, f: 'Week 1: Architecture & kubectl', t: 'control plane, nodes, contexts, imperative vs declarative' },
      { w: 2, f: 'Week 2: Pods & Workloads', t: 'Deployments, ReplicaSets, DaemonSets, Jobs, CronJobs' },
      { w: 3, f: 'Week 3: Services & Networking', t: 'ClusterIP, NodePort, Ingress, DNS, NetworkPolicies' },
      { w: 4, f: 'Week 4: Storage', t: 'PV, PVC, StorageClass, ConfigMaps, Secrets' },
      { w: 5, f: 'Week 5: Scheduling & Resources', t: 'requests/limits, affinity, taints, tolerations' },
      { w: 6, f: 'Week 6: Security & RBAC', t: 'ServiceAccounts, Roles, RoleBindings, Pod Security' },
      { w: 7, f: 'Week 7: Observability', t: 'probes, logging, metrics-server, troubleshooting' },
      { w: 8, f: 'Week 8: Helm & GitOps intro', t: 'charts, releases, Argo CD basics' },
      { w: 9, f: 'Week 9: FPO on K8s', t: 'deploy FPO services, HPA, rolling updates' },
      { w: 10, f: 'Week 10: CKA/CKAD mocks', t: 'timed labs, weak-area drills' },
    ], },
  { id: 's20', block: 'b9', seq: 'INT', icon: '🎯', color: '#7C3AED', dark: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE', name: 'Interview Preparation', label: '16 weeks · 112 days', days: 112, ds: 889, de: 1000, period: 'Dec 5, 2028 – Jun 30, 2029', ms: '1000 Study Days Complete · D1000', about: '112 study days (16 weeks, D889–D1000) plus 96 relaxation days through Jun 30, 2029 when 5:30–8:30 AM IST is not possible. React + Java interviews, behavioral STAR stories, DSA/SD revision, mocks. Study content ends ~Mar 26, 2029; calendar deadline Jun 30, 2029.', courses: [
      'GreatFrontEnd — React interviews',
      'Java Brains — Java 8 + Streams',
      'Exponent — behavioral',
      'Pramp / Interviewing.io mocks',
    ], wplan: [
      { w: 1, f: 'Weeks 1–2: React Interviews', t: 'hooks, performance, patterns, system design tie-ins' },
      { w: 2, f: 'Weeks 3–4: Java Interviews', t: 'Java 8, streams, Spring Boot Q&A' },
      { w: 3, f: 'Weeks 5–6: DSA & SD Revision', t: '2 problems/day, 2 system designs/week' },
      { w: 4, f: 'Weeks 7–8: Behavioral & Resume', t: 'STAR stories, resume v3, LinkedIn, portfolio' },
      { w: 5, f: 'Weeks 9–12: Mock Interviews', t: '3 mocks/week — coding, design, behavioral' },
      { w: 6, f: 'Weeks 13–16: Interview Season', t: 'daily mocks, company prep — D1000 DONE 🏆' },
      { w: 7, f: '🛋 96 Relaxation Days (Aug 2028 – Jun 2029)', t: 'spread across the full post-DSA window when 5:30–8:30 AM study is not possible' },
    ], },
];

const MILESTONES = [
  { day: 31, icon: '📜', label: 'Javascript Done', date: 'Jul 31, 2026', color: '#EAB308' },
  { day: 61, icon: '🟢', label: 'ExpressJS Done', date: 'Aug 30, 2026', color: '#16A34A' },
  { day: 92, icon: '🔷', label: 'Typescript Done', date: 'Sep 30, 2026', color: '#2563EB' },
  { day: 123, icon: '⚛', label: 'React JS Done', date: 'Oct 31, 2026', color: '#0EA5E9' },
  { day: 151, icon: '▲', label: 'Next JS Done', date: 'Nov 28, 2026', color: '#171717' },
  { day: 182, icon: '📱', label: 'React Native Done', date: 'Dec 29, 2026', color: '#7C3AED' },
  { day: 212, icon: '🐍', label: 'Python Done', date: 'Jan 28, 2027', color: '#15803D' },
  { day: 243, icon: '🎸', label: 'Django Done', date: 'Feb 28, 2027', color: '#092E20' },
  { day: 273, icon: '⚡', label: 'Fast API Done', date: 'Mar 30, 2027', color: '#009688' },
  { day: 304, icon: '🤖', label: 'Agentic AI Done', date: 'Apr 30, 2027', color: '#8B5CF6' },
  { day: 335, icon: '☕', label: 'J2SE Done', date: 'May 31, 2027', color: '#EA580C' },
  { day: 365, icon: '🏢', label: 'J2EE Done', date: 'Jun 30, 2027', color: '#0891B2' },
  { day: 396, icon: '🗄', label: 'JPA Done', date: 'Jul 31, 2027', color: '#7C3AED' },
  { day: 426, icon: '🌱', label: 'Spring Boot Done', date: 'Aug 30, 2027', color: '#6DB33F' },
  { day: 457, icon: '🏛', label: 'Microservices Done', date: 'Sep 30, 2027', color: '#E11D48' },
  { day: 488, icon: '🔧', label: 'Devops Done', date: 'Oct 31, 2027', color: '#6366F1' },
  { day: 588, icon: '☁', label: 'AWS Done', date: 'Feb 8, 2028', color: '#D97706' },
  { day: 688, icon: '🏗', label: 'System Design Done', date: 'May 18, 2028', color: '#DC2626' },
  { day: 788, icon: '🧮', label: 'DSA Done', date: 'Aug 26, 2028', color: '#059669' },
  { day: 888, icon: '☸', label: 'Kubernetes Done', date: 'Dec 4, 2028', color: '#326CE5' },
  { day: 1000, icon: '🎯', label: '1000 Study Days Complete', date: 'Mar 26, 2029', color: '#7C3AED' },
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
  const blk = BLOCKS.find((b) => b.id === p.block);
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
                background: (blk?.col || '#E2E8F0') + '18',
                color: blk?.col || '#64748B',
                border: '1px solid ' + (blk?.col || '#E2E8F0') + '40',
                whiteSpace: 'nowrap',
              }}
            >
              {blk?.scheduleLink ? (
                <a
                  href={blk.scheduleLink}
                  onClick={(e) => e.stopPropagation()}
                  style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: 2 }}
                >
                  {blk.title}
                </a>
              ) : (
                blk?.title || p.block
              )}
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
          {p.dayLinks?.length > 0 && (
            <div
              style={{
                background: p.bg,
                borderRadius: 8,
                padding: '9px 11px',
                border: '1px solid ' + p.border,
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  fontWeight: 800,
                  color: p.dark,
                  letterSpacing: '0.08em',
                  marginBottom: 6,
                }}
              >
                {'📓 DAILY STUDY LOG'}
              </div>
              {p.dayLinks.map((d) => (
                <a
                  key={d.href}
                  href={d.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '7px 9px',
                    borderRadius: 7,
                    background: '#fff',
                    border: '1px solid ' + p.border,
                    textDecoration: 'none',
                    color: '#0F172A',
                    marginBottom: 4,
                  }}
                >
                  <span style={{ fontSize: 12 }}>{d.done ? '✅' : '📄'}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: p.color }}>{d.label}</span>
                  <span style={{ marginLeft: 'auto', fontSize: 9, color: '#64748B' }}>{'View →'}</span>
                </a>
              ))}
            </div>
          )}
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
    { col: '#E11D48', title: '🎓 CODER ARMY MERN · MONTHS 1–4', sub: 'Jul – Oct 2026 · Javascript → ExpressJS → Typescript → React JS · 3h daily', ids: ['s1','s2','s3','s4'] },
    { col: '#0EA5E9', title: '🌐 EXTENDED FRONTEND · MONTHS 5–6', sub: 'Nov – Dec 2026 · Next JS (Anil Dollar) → React Native (ChaiCode)', ids: ['s5','s6'] },
    { col: '#15803D', title: '🐍 PYTHON STACK · MONTHS 7–10', sub: 'Jan – Apr 2027 · Python + Agentic AI (Ashok IT) → Django → Fast API', ids: ['s7','s8','s9','s10'] },
    { col: '#EA580C', title: '☕ JAVA BACKEND · MONTHS 11–15', sub: 'May – Sep 2027 · J2SE → J2EE → JPA → Spring Boot → Microservices', ids: ['s11','s12','s13','s14','s15'] },
    { col: '#6366F1', title: '🔧 DEVOPS · MONTH 16', sub: 'Oct 2027 · CloudFolks Hub · ends Oct 31, 2027', ids: ['s16'] },
    { col: '#D97706', title: '☁ 100 DAYS OF AWS', sub: 'Nov 2027 – Feb 2028 · 5h daily (5:30–8:30 AM + 9–11 AM) · CloudFolks Hub', ids: ['s0'] },
    { col: '#DC2626', title: '🏗 SYSTEM DESIGN · 100 DAYS', sub: 'Feb – May 2028 · D589–D688', ids: ['s17'] },
    { col: '#059669', title: '🧮 DSA · 100 DAYS', sub: 'May – Aug 2028 · D689–D788', ids: ['s18'] },
    { col: '#326CE5', title: '☸ KUBERNETES · 100 DAYS', sub: 'Aug – Dec 2028 · D789–D888', ids: ['s19'] },
    { col: '#7C3AED', title: '🎯 INTERVIEW PREP · D889–D1000', sub: 'Dec 2028 – Jun 2029 · 112 study days (16 weeks) + 96 relaxation', ids: ['s20'] },
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
                  'Wed Jul 1, 2026 → Sun Jun 30, 2029 · 5:30 AM – 8:30 AM IST · 3h · 1000 study days + 96 relaxation'
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
            {BLOCKS.map((b) => {
              const hc = b.headerCol || b.col;
              return (
              <div
                key={b.id}
                style={{
                  background: 'rgba(255,255,255,0.09)',
                  borderRadius: 10,
                  padding: '10px 12px',
                  border: '1px solid ' + hc + '70',
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
                  {b.scheduleLink ? (
                    <a
                      href={b.scheduleLink}
                      style={{
                        fontSize: 10,
                        fontWeight: 800,
                        color: hc,
                        textShadow: b.headerCol ? '0 1px 3px rgba(0,0,0,0.35)' : 'none',
                        textDecoration: 'underline',
                        textUnderlineOffset: 3,
                      }}
                    >
                      {b.title}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 800,
                        color: hc,
                        textShadow: b.headerCol ? '0 1px 3px rgba(0,0,0,0.35)' : 'none',
                      }}
                    >
                      {b.title}
                    </span>
                  )}
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
                    background: hc + '30',
                    borderRadius: 6,
                    padding: '3px 8px',
                    display: 'inline-block',
                  }}
                >
                  {b.time}
                </div>
              </div>
            );
            })}
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
                  'Jul 2026: Javascript from D1 · 3h daily (5:30–8:30 AM) · Nov 2027 onward: 100 days AWS at 5h'
                }
              </div>
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.5)' }}>
                {
                  'Jul 1, 2026 → Jun 30, 2029 · Javascript from D1 · AWS after 16 months · ' + CALENDAR_DAYS + ' calendar days total'
                }
              </div>
            </div>
          </div>

          <div
            style={{
              background: 'rgba(245,158,11,0.14)',
              border: '1px solid rgba(245,158,11,0.45)',
              borderRadius: 8,
              padding: '8px 12px',
              marginBottom: 10,
              display: 'flex',
              gap: 9,
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 15, flexShrink: 0 }}>{'🛋'}</span>
            <div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: '#FDE68A',
                  marginBottom: 1,
                }}
              >
                {RELAXATION + ' Relaxation Days — when 5:30–8:30 AM IST is not possible'}
              </div>
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.5)' }}>
                {
                  TOTAL + ' mandatory study days · ' + RELAXATION + ' relaxation days in post-DSA window (Aug 2028 – Jun 2029) · ' + CALENDAR_DAYS + ' calendar days · finish by ' + DEADLINE
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
              <span>{'Jul 1, 2026'}</span>
              <span
                style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 700 }}
              >
                {prog + '% · Study Day ' + sd + ' of ' + TOTAL + ' · Deadline ' + DEADLINE}
              </span>
              <span>{DEADLINE}</span>
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
            {'🏆 1000 Days of Code · Jul 1, 2026 → Jun 30, 2029 · 1000 study + 96 relaxation'}
          </div>
          <div
            style={{
              fontSize: 9,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 8,
            }}
          >
            {
              'Javascript (D1) → 16 Skills → AWS (5h) → SD → DSA → K8s → Interview · 3h daily'
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
