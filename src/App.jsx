import { useState } from 'react';
// 16 Month Skill Plan · Jul 1, 2026 → Oct 31, 2027
// 488 study days · 16 skills · 1 per month · 5:30 AM – 8:30 AM IST · 3 hours

const START = new Date('2026-07-01');
const TOTAL = 488;
const STUDY_END = 'Oct 31, 2027';

const BLOCKS = [
  { id: 'b1', icon: '🌐', col: '#0EA5E9', title: 'Frontend with Javascript', sub: 'D1–D184 · Jul – Dec 2026', detail: 'Javascript → Typescript → React JS → Next JS → React Native → Node JS', time: '5:30 AM – 8:30 AM IST · 3h daily' },
  { id: 'b2', icon: '☕', col: '#EA580C', title: 'Java Backend', sub: 'D185–D335 · Jan – May 2027', detail: 'J2SE → J2EE → JPA → Spring Boot → Microservices', time: '5:30 AM – 8:30 AM IST · 3h daily' },
  { id: 'b3', icon: '🐍', col: '#8B5CF6', title: 'Python and DevOps', sub: 'D336–D488 · Jun – Oct 2027', detail: 'Python → Django → Fast API → Agentic AI → Devops', time: '5:30 AM – 8:30 AM IST · 3h daily' },
];

const PHASES = [
  { id: 's1', block: 'b1', seq: 1, icon: '📜', color: '#EAB308', dark: '#CA8A04', bg: '#FEFCE8', border: '#FDE047', name: 'Javascript', label: 'Month 1 · 31 days', days: 31, ds: 1, de: 31, period: 'Jul 1 – Jul 31, 2026', ms: 'Javascript Complete · D31', about: 'Month 1. JavaScript ES6+ fundamentals: variables, functions, closures, prototypes, arrays/objects, map/filter/reduce, async/await, Promises, modules. Build 8 mini projects. Foundation for TypeScript and React.', courses: [
      'Maximilian Schwarzmüller — JavaScript Complete Guide (Udemy)',
      'javascript.info (free)',
      'MDN Web Docs',
      'Corey Schafer — JS playlist (YouTube)',
    ], wplan: [
      { w: 1, f: 'Week 1: JS Basics', t: 'syntax, let/const, data types, operators, control flow' },
      { w: 2, f: 'Week 2: Functions & Scope', t: 'closures, hoisting, this keyword, arrow functions' },
      { w: 3, f: 'Week 3: Objects & Arrays', t: 'destructuring, spread, map/filter/reduce, JSON' },
      { w: 4, f: 'Week 4: Async JS', t: 'Promises, async/await, fetch, ES modules, npm' },
    ], },
  { id: 's2', block: 'b1', seq: 2, icon: '🔷', color: '#2563EB', dark: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE', name: 'Typescript', label: 'Month 2 · 31 days', days: 31, ds: 32, de: 62, period: 'Aug 1 – Aug 31, 2026', ms: 'Typescript Complete · D62', about: 'Month 2. TypeScript strict mode: types, interfaces, generics, utility types, enums, tuples, type guards, narrowing. Configure tsconfig. Refactor Month 1 JS projects to TypeScript.', courses: [
      'Maximilian Schwarzmüller — Understanding TypeScript (Udemy)',
      'TypeScript Handbook (free)',
      'Total TypeScript (Matt Pocock)',
      'typescriptlang.org docs',
    ], wplan: [
      { w: 1, f: 'Week 1: Types & Interfaces', t: 'primitives, arrays, objects, interfaces, type aliases' },
      { w: 2, f: 'Week 2: Functions & Generics', t: 'generic functions, constraints, keyof, typeof' },
      { w: 3, f: 'Week 3: Advanced Types', t: 'union/intersection, discriminated unions, utility types' },
      { w: 4, f: 'Week 4: TS Project', t: 'strict tsconfig, migrate JS projects, build typed CLI tool' },
    ], },
  { id: 's3', block: 'b1', seq: 3, icon: '⚛', color: '#0EA5E9', dark: '#0369A1', bg: '#F0F9FF', border: '#BAE6FD', name: 'React JS', label: 'Month 3 · 30 days', days: 30, ds: 63, de: 92, period: 'Sep 1 – Sep 30, 2026', ms: 'React JS Complete · D92', about: 'Month 3. React 19: components, JSX, props, state, hooks, React Router, Redux Toolkit, RTK Query, testing with React Testing Library.', courses: [
      'Maximilian Schwarzmüller — React Complete Guide (Udemy)',
      'react.dev official docs',
      'Jack Herrington — React patterns (YouTube)',
      'Kent C. Dodds — Testing Library',
    ], wplan: [
      { w: 1, f: 'Week 1: React Core', t: 'components, JSX, props, state, event handling' },
      { w: 2, f: 'Week 2: Hooks Deep Dive', t: 'useEffect, useContext, useReducer, custom hooks' },
      { w: 3, f: 'Week 3: Routing & State', t: 'React Router v6, Redux Toolkit, RTK Query' },
      { w: 4, f: 'Week 4: Testing & Project', t: 'RTL tests, build dashboard app with API integration' },
    ], },
  { id: 's4', block: 'b1', seq: 4, icon: '▲', color: '#171717', dark: '#000000', bg: '#F5F5F5', border: '#D4D4D4', name: 'Next JS', label: 'Month 4 · 31 days', days: 31, ds: 93, de: 123, period: 'Oct 1 – Oct 31, 2026', ms: 'Next JS Complete · D123', about: 'Month 4. Next.js 15 App Router: Server Components, Server Actions, layouts, NextAuth, Prisma ORM, middleware, deploy to Vercel. FPO web portal foundation.', courses: [
      'Maximilian Schwarzmüller — Next.js 15 Guide (Udemy)',
      'Next.js docs (nextjs.org)',
      'Lee Robinson — Next.js tutorials',
      'Vercel deployment guides',
    ], wplan: [
      { w: 1, f: 'Week 1: App Router', t: 'file-based routing, layouts, RSC vs client components' },
      { w: 2, f: 'Week 2: Data Fetching', t: 'Server Actions, caching, revalidation, Prisma setup' },
      { w: 3, f: 'Week 3: Auth & API', t: 'NextAuth, middleware, protected routes' },
      { w: 4, f: 'Week 4: FPO Portal', t: 'flight search UI, deploy to Vercel, performance audit' },
    ], },
  { id: 's5', block: 'b1', seq: 5, icon: '📱', color: '#7C3AED', dark: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE', name: 'React Native', label: 'Month 5 · 30 days', days: 30, ds: 124, de: 153, period: 'Nov 1 – Nov 30, 2026', ms: 'React Native Complete · D153', about: 'Month 5. React Native + Expo: navigation, device APIs, push notifications, EAS Build. Build FPO mobile flight status app.', courses: [
      'Maximilian Schwarzmüller — React Native Guide (Udemy)',
      'Chaicode — React Native (free)',
      'Expo docs',
      'React Navigation docs',
    ], wplan: [
      { w: 1, f: 'Week 1: RN Basics', t: 'Expo setup, core components, StyleSheet, Flexbox' },
      { w: 2, f: 'Week 2: Navigation', t: 'React Navigation stack/tab, deep linking' },
      { w: 3, f: 'Week 3: Device APIs', t: 'camera, location, AsyncStorage, push notifications' },
      { w: 4, f: 'Week 4: FPO Mobile App', t: 'flight status screen, EAS Build, TestFlight/APK' },
    ], },
  { id: 's6', block: 'b1', seq: 6, icon: '🟢', color: '#16A34A', dark: '#15803D', bg: '#F0FDF4', border: '#BBF7D0', name: 'Node JS', label: 'Month 6 · 31 days', days: 31, ds: 154, de: 184, period: 'Dec 1 – Dec 31, 2026', ms: 'Node JS Complete · D184', about: 'Month 6. Node.js: event loop, Express.js, REST APIs, middleware, JWT auth, WebSockets. Build production Node API for FPO.', courses: [
      'Maximilian Schwarzmüller — Node.js Guide (Udemy)',
      'Node.js docs',
      'Express.js official guide',
      'The Net Ninja — Node (YouTube)',
    ], wplan: [
      { w: 1, f: 'Week 1: Node Fundamentals', t: 'event loop, modules, fs, path, streams' },
      { w: 2, f: 'Week 2: Express APIs', t: 'routing, middleware, validation, error handling' },
      { w: 3, f: 'Week 3: Auth & Real-time', t: 'JWT, bcrypt, WebSockets, Socket.io' },
      { w: 4, f: 'Week 4: FPO API', t: 'REST API for flights, deploy on AWS EC2/ECS' },
    ], },
  { id: 's7', block: 'b2', seq: 7, icon: '☕', color: '#EA580C', dark: '#C2410C', bg: '#FFF7ED', border: '#FED7AA', name: 'J2SE', label: 'Month 7 · 31 days', days: 31, ds: 185, de: 215, period: 'Jan 1 – Jan 31, 2027', ms: 'J2SE Complete · D215', about: 'Month 7. Java SE: syntax, OOP, collections, streams, lambdas, Optional, records, generics, multithreading basics.', courses: [
      'Navin Reddy Telusko — Java (YouTube)',
      'John Thompson — Java Masterclass (Udemy)',
      'Oracle Java Tutorials',
      'Baeldung — Java basics',
    ], wplan: [
      { w: 1, f: 'Week 1: Java Syntax & OOP', t: 'classes, inheritance, polymorphism, interfaces' },
      { w: 2, f: 'Week 2: Collections & Streams', t: 'ArrayList, HashMap, Stream API, collectors' },
      { w: 3, f: 'Week 3: Modern Java', t: 'lambdas, Optional, records, sealed classes' },
      { w: 4, f: 'Week 4: Concurrency & I/O', t: 'threads, ExecutorService, NIO basics' },
    ], },
  { id: 's8', block: 'b2', seq: 8, icon: '🏢', color: '#0891B2', dark: '#0E7490', bg: '#ECFEFF', border: '#A5F3FC', name: 'J2EE', label: 'Month 8 · 28 days', days: 28, ds: 216, de: 243, period: 'Feb 1 – Feb 28, 2027', ms: 'J2EE Complete · D243', about: 'Month 8. Java EE / Jakarta EE: Servlets, JSP, JNDI, JDBC, connection pooling, transactions.', courses: [
      'Telusko — Servlet & JSP (YouTube)',
      'Java Brains — J2EE (YouTube)',
      'Oracle Java EE tutorial',
      'Head First Servlets & JSP (book)',
    ], wplan: [
      { w: 1, f: 'Week 1: Servlets', t: 'lifecycle, request/response, session management' },
      { w: 2, f: 'Week 2: JSP & JSTL', t: 'JSP tags, EL, JSTL, MVC pattern' },
      { w: 3, f: 'Week 3: JDBC & JNDI', t: 'DataSource, connection pooling, transactions' },
      { w: 4, f: 'Week 4: EE Architecture', t: 'deploy WAR, compare Tomcat vs WildFly' },
    ], },
  { id: 's9', block: 'b2', seq: 9, icon: '🗄', color: '#7C3AED', dark: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE', name: 'JPA', label: 'Month 9 · 31 days', days: 31, ds: 244, de: 274, period: 'Mar 1 – Mar 31, 2027', ms: 'JPA Complete · D274', about: 'Month 9. JPA/Hibernate: @Entity, relationships, JPQL, Spring Data JPA, @Transactional, N+1 problem.', courses: [
      'Java Brains — JPA & Hibernate (YouTube)',
      'Baeldung — JPA tutorials',
      'Vlad Mihalcea — High-Performance JPA',
      'Spring Data JPA docs',
    ], wplan: [
      { w: 1, f: 'Week 1: JPA Entities', t: '@Entity, @Id, relationships, cascading' },
      { w: 2, f: 'Week 2: Queries', t: 'JPQL, Criteria API, native queries' },
      { w: 3, f: 'Week 3: Spring Data JPA', t: 'JpaRepository, custom queries, paging' },
      { w: 4, f: 'Week 4: Performance', t: 'N+1 fix, caching, batch operations' },
    ], },
  { id: 's10', block: 'b2', seq: 10, icon: '🌱', color: '#6DB33F', dark: '#4E9A2E', bg: '#F0FDF4', border: '#86EFAC', name: 'Spring Boot', label: 'Month 10 · 30 days', days: 30, ds: 275, de: 304, period: 'Apr 1 – Apr 30, 2027', ms: 'Spring Boot Complete · D304', about: 'Month 10. Spring Boot 3: REST APIs, Spring Security + OAuth2 (FPO Cognito!), OpenAPI, Actuator, testing.', courses: [
      'John Thompson — Spring Boot 3 (Udemy)',
      'Baeldung — Spring Boot tutorials',
      'Spring official guides',
      'Spring Security docs',
    ], wplan: [
      { w: 1, f: 'Week 1: Spring Boot Core', t: 'starters, auto-config, REST controllers' },
      { w: 2, f: 'Week 2: Security', t: 'Spring Security, JWT, OAuth2 resource server' },
      { w: 3, f: 'Week 3: Testing', t: 'JUnit 5, Mockito, @WebMvcTest, Testcontainers' },
      { w: 4, f: 'Week 4: FPO API', t: 'Spring Boot flight API + Cognito auth on ECS' },
    ], },
  { id: 's11', block: 'b2', seq: 11, icon: '🏛', color: '#E11D48', dark: '#BE123C', bg: '#FFF1F2', border: '#FECDD3', name: 'Microservices', label: 'Month 11 · 31 days', days: 31, ds: 305, de: 335, period: 'May 1 – May 31, 2027', ms: 'Microservices Complete · D335', about: 'Month 11. Microservices: Spring Cloud, Kafka, Resilience4j, CQRS, saga patterns. Decompose FPO on AWS.', courses: [
      'Ranga Karanam — Microservices with K8s (Udemy)',
      'Spring Cloud docs',
      'Chris Richardson — microservices.io',
      'Confluent Kafka tutorials',
    ], wplan: [
      { w: 1, f: 'Week 1: MS Fundamentals', t: '12-factor, bounded contexts, DDD' },
      { w: 2, f: 'Week 2: Spring Cloud', t: 'Eureka, Config Server, API Gateway' },
      { w: 3, f: 'Week 3: Event-Driven', t: 'Kafka producers/consumers, CQRS' },
      { w: 4, f: 'Week 4: FPO Decomposition', t: 'flight/booking/auth services on ECS/EKS' },
    ], },
  { id: 's12', block: 'b3', seq: 12, icon: '🐍', color: '#15803D', dark: '#166534', bg: '#F0FDF4', border: '#86EFAC', name: 'Python', label: 'Month 12 · 30 days', days: 30, ds: 336, de: 365, period: 'Jun 1 – Jun 30, 2027', ms: 'Python Complete · D365', about: 'Month 12. Python 3: fundamentals, OOP, decorators, asyncio, boto3, pandas. Foundation for Django, FastAPI, and Agentic AI.', courses: [
      'Corey Schafer — Python playlist (YouTube)',
      'Dr. Angela Yu — 100 Days of Python (Udemy)',
      'Real Python tutorials',
      'Python official docs',
    ], wplan: [
      { w: 1, f: 'Week 1: Python Basics', t: 'syntax, data types, functions, comprehensions' },
      { w: 2, f: 'Week 2: OOP & Advanced', t: 'classes, decorators, generators, context managers' },
      { w: 3, f: 'Week 3: Async & boto3', t: 'asyncio, aiohttp, boto3 EC2/S3/Lambda' },
      { w: 4, f: 'Week 4: Data & Automation', t: 'pandas intro, AWS automation scripts' },
    ], },
  { id: 's13', block: 'b3', seq: 13, icon: '🎸', color: '#092E20', dark: '#051B14', bg: '#ECFDF5', border: '#6EE7B7', name: 'Django', label: 'Month 13 · 31 days', days: 31, ds: 366, de: 396, period: 'Jul 1 – Jul 31, 2027', ms: 'Django Complete · D396', about: 'Month 13. Django 5 + DRF: models, migrations, admin, serializers, viewsets, permissions. FPO admin backend.', courses: [
      'Dennis Ivy — Django tutorials (YouTube)',
      'William Vincent — Django for APIs (book)',
      'Django official docs',
      'DRF official docs',
    ], wplan: [
      { w: 1, f: 'Week 1: Django Core', t: 'models, migrations, admin, templates' },
      { w: 2, f: 'Week 2: DRF Basics', t: 'serializers, API views, routers' },
      { w: 3, f: 'Week 3: Auth & Permissions', t: 'token auth, permissions, throttling' },
      { w: 4, f: 'Week 4: FPO Admin', t: 'booking admin API, deploy on AWS' },
    ], },
  { id: 's14', block: 'b3', seq: 14, icon: '⚡', color: '#009688', dark: '#00796B', bg: '#E0F2F1', border: '#80CBC4', name: 'Fast API', label: 'Month 14 · 31 days', days: 31, ds: 397, de: 427, period: 'Aug 1 – Aug 31, 2027', ms: 'Fast API Complete · D427', about: 'Month 14. FastAPI: async routes, Pydantic v2, dependency injection, OAuth2, SQLAlchemy, deploy on AWS.', courses: [
      'FastAPI official docs',
      'Raymond Hettinger — async Python',
      'TestDriven.io — FastAPI course',
      'Tiago Forte — API design patterns',
    ], wplan: [
      { w: 1, f: 'Week 1: FastAPI Core', t: 'routes, path/query params, Pydantic models' },
      { w: 2, f: 'Week 2: Database Layer', t: 'SQLAlchemy, Alembic, CRUD operations' },
      { w: 3, f: 'Week 3: Auth & Middleware', t: 'OAuth2, JWT, CORS, rate limiting' },
      { w: 4, f: 'Week 4: Deploy FPO API', t: 'Dockerize, deploy to AWS ECS, OpenAPI docs' },
    ], },
  { id: 's15', block: 'b3', seq: 15, icon: '🤖', color: '#8B5CF6', dark: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE', name: 'Agentic AI', label: 'Month 15 · 30 days', days: 30, ds: 428, de: 457, period: 'Sep 1 – Sep 30, 2027', ms: 'Agentic AI Complete · D457', about: 'Month 15. Agentic AI: LangChain, LangGraph, RAG, AWS Bedrock, multi-agent systems, MCP. FPO AI assistant on Lambda.', courses: [
      'Ed Donner — Agentic AI Engineering 2026 (Udemy)',
      'Eden Marco — LangChain (Udemy)',
      'AWS Bedrock docs',
      'LangGraph documentation',
    ], wplan: [
      { w: 1, f: 'Week 1: GenAI + RAG', t: 'LLMs, embeddings, vector stores, Bedrock' },
      { w: 2, f: 'Week 2: LangChain + LangGraph', t: 'chains, agents, tools, state machines' },
      { w: 3, f: 'Week 3: Ed Donner Projects', t: 'Career Twin, Deep Research, SDR Agent' },
      { w: 4, f: 'Week 4: FPO AI Capstone', t: 'natural language flight queries on Lambda' },
    ], },
  { id: 's16', block: 'b3', seq: 16, icon: '🔧', color: '#6366F1', dark: '#4338CA', bg: '#EEF2FF', border: '#C7D2FE', name: 'Devops', label: 'Month 16 · 31 days', days: 31, ds: 458, de: 488, period: 'Oct 1 – Oct 31, 2027', ms: '16 MONTHS COMPLETE · D488 · Oct 31, 2027', about: 'Month 16. DevOps capstone: Docker, Kubernetes/EKS, CI/CD, Terraform, monitoring. PLAN COMPLETE Oct 31, 2027.', courses: [
      'Nana Janashia — DevOps Bootcamp (Udemy)',
      'Mumshad Mannambeth — Kubernetes CKA (KodeKloud)',
      'HashiCorp Learn — Terraform',
      'Bogdan Stashchuk — Terraform (Udemy)',
    ], wplan: [
      { w: 1, f: 'Week 1: Docker + ECR', t: 'multi-stage Dockerfile, compose, push to ECR' },
      { w: 2, f: 'Week 2: Kubernetes + EKS', t: 'deployments, services, ingress, Helm' },
      { w: 3, f: 'Week 3: CI/CD + Terraform', t: 'GitHub Actions OIDC, IaC modules' },
      { w: 4, f: 'Week 4: FPO Pipeline', t: 'full pipeline + monitoring. 16 MONTHS DONE 🏆' },
    ], },
];

const MILESTONES = [
  { day: 31, icon: '📜', label: 'Javascript Done', date: 'Jul 31, 2026', color: '#EAB308' },
  { day: 62, icon: '🔷', label: 'Typescript Done', date: 'Aug 31, 2026', color: '#2563EB' },
  { day: 92, icon: '⚛', label: 'React JS Done', date: 'Sep 30, 2026', color: '#0EA5E9' },
  { day: 123, icon: '▲', label: 'Next JS Done', date: 'Oct 31, 2026', color: '#171717' },
  { day: 153, icon: '📱', label: 'React Native Done', date: 'Nov 30, 2026', color: '#7C3AED' },
  { day: 184, icon: '🟢', label: 'Node JS Done', date: 'Dec 31, 2026', color: '#16A34A' },
  { day: 215, icon: '☕', label: 'J2SE Done', date: 'Jan 31, 2027', color: '#EA580C' },
  { day: 243, icon: '🏢', label: 'J2EE Done', date: 'Feb 28, 2027', color: '#0891B2' },
  { day: 274, icon: '🗄', label: 'JPA Done', date: 'Mar 31, 2027', color: '#7C3AED' },
  { day: 304, icon: '🌱', label: 'Spring Boot Done', date: 'Apr 30, 2027', color: '#6DB33F' },
  { day: 335, icon: '🏛', label: 'Microservices Done', date: 'May 31, 2027', color: '#E11D48' },
  { day: 365, icon: '🐍', label: 'Python Done', date: 'Jun 30, 2027', color: '#16A34A' },
  { day: 396, icon: '🎸', label: 'Django Done', date: 'Jul 31, 2027', color: '#092E20' },
  { day: 427, icon: '⚡', label: 'Fast API Done', date: 'Aug 31, 2027', color: '#009688' },
  { day: 457, icon: '🤖', label: 'Agentic AI Done', date: 'Sep 30, 2027', color: '#8B5CF6' },
  { day: 488, icon: '🔧', label: 'Devops — 16 MONTHS DONE', date: 'Oct 31, 2027', color: '#6366F1' },
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
      title: '🌐 FRONTEND WITH JAVASCRIPT · MONTHS 1–6',
      sub: 'Jul – Dec 2026 · Javascript → Typescript → React JS → Next JS → React Native → Node JS',
      ids: ['s1', 's2', 's3', 's4', 's5', 's6'],
    },
    {
      col: '#EA580C',
      title: '☕ JAVA BACKEND · MONTHS 7–11',
      sub: 'Jan – May 2027 · J2SE → J2EE → JPA → Spring Boot → Microservices',
      ids: ['s7', 's8', 's9', 's10', 's11'],
    },
    {
      col: '#8B5CF6',
      title: '🐍 PYTHON AND DEVOPS · MONTHS 12–16',
      sub: 'Jun – Oct 2027 · Python → Django → Fast API → Agentic AI → Devops',
      ids: ['s12', 's13', 's14', 's15', 's16'],
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
                {'16 Month Skill Plan'}
              </div>
              <div
                style={{
                  fontSize: 9,
                  color: 'rgba(255,255,255,0.6)',
                  marginTop: 2,
                }}
              >
                {
                  'Wed Jul 1, 2026 → Sun Oct 31, 2027 · 5:30 AM – 8:30 AM IST · 3h · 488 study days · 16 skills'
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
                  '5:30 AM – 8:30 AM IST daily · 3 hours · MANDATORY · Every day including weekends'
                }
              </div>
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.5)' }}>
                {
                  'Jul 1, 2026 → Oct 31, 2027 · 488 study days · daily 5:30–8:30 AM IST · no days off'
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
                {prog + '% · Study Day ' + sd + ' of ' + TOTAL + ' · Target ' + STUDY_END}
              </span>
              <span>{STUDY_END}</span>
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
            {'🏆 16 Month Skill Plan · Jul 1, 2026 → Oct 31, 2027 · 16 skills × 1 month'}
          </div>
          <div
            style={{
              fontSize: 9,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 8,
            }}
          >
            {
              'JS → TS → React → Next → RN → Node → J2SE → J2EE → JPA → Spring Boot → Microservices → Python → Django → FastAPI → Agentic AI → DevOps · 5:30–8:30 AM IST · 3h'
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
