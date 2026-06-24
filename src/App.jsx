import { useState } from 'react';
// 1000 Days of Code · Jun 25, 2026 → Mar 20, 2029
// 1000 study days · 10 blocks × 100 days · 5:30 AM – 8:30 AM · 3 hours
// Miss a morning? That calendar day = relaxation day (plan extends)

const START = new Date('2026-06-25');
const TOTAL = 1000;
const STUDY_END = 'Mar 20, 2029';

const BLOCKS = [
  {
    id: 'b1',
    icon: '☁',
    col: '#D97706',
    title: '100 Days of AWS',
    sub: 'D1–D100 · Jun 25 – Oct 2, 2026 · 100 days',
    detail: 'AWS — block 1 of 10',
    time: '5:30 AM – 8:30 AM · 3h daily',
  },
  {
    id: 'b2',
    icon: '📜',
    col: '#EAB308',
    title: '100 Days of Javascript/Typescript',
    sub: 'D101–D200 · Oct 3, 2026 – Jan 10, 2027 · 100 days',
    detail: 'Javascript/Typescript — block 2 of 10',
    time: '5:30 AM – 8:30 AM · 3h daily',
  },
  {
    id: 'b3',
    icon: '⚛',
    col: '#0EA5E9',
    title: '100 Days of React/React native',
    sub: 'D201–D300 · Jan 11 – Apr 20, 2027 · 100 days',
    detail: 'React/React native — block 3 of 10',
    time: '5:30 AM – 8:30 AM · 3h daily',
  },
  {
    id: 'b4',
    icon: '🐍',
    col: '#16A34A',
    title: '100 Days of Python',
    sub: 'D301–D400 · Apr 21 – Jul 29, 2027 · 100 days',
    detail: 'Python — block 4 of 10',
    time: '5:30 AM – 8:30 AM · 3h daily',
  },
  {
    id: 'b5',
    icon: '🤖',
    col: '#8B5CF6',
    title: '100 Days of Agentic AI Study',
    sub: 'D401–D500 · Jul 30 – Nov 6, 2027 · 100 days',
    detail: 'Agentic AI — block 5 of 10',
    time: '5:30 AM – 8:30 AM · 3h daily',
  },
  {
    id: 'b6',
    icon: '☕',
    col: '#EA580C',
    title: '100 Days of Java',
    sub: 'D501–D600 · Nov 7, 2027 – Feb 14, 2028 · 100 days',
    detail: 'Java — block 6 of 10',
    time: '5:30 AM – 8:30 AM · 3h daily',
  },
  {
    id: 'b7',
    icon: '🏛',
    col: '#E11D48',
    title: '100 Days of Microservices',
    sub: 'D601–D700 · Feb 15 – May 24, 2028 · 100 days',
    detail: 'Microservices — block 7 of 10',
    time: '5:30 AM – 8:30 AM · 3h daily',
  },
  {
    id: 'b8',
    icon: '🔧',
    col: '#6366F1',
    title: '100 Days of DevOps',
    sub: 'D701–D800 · May 25 – Sep 1, 2028 · 100 days',
    detail: 'DevOps — block 8 of 10',
    time: '5:30 AM – 8:30 AM · 3h daily',
  },
  {
    id: 'b9',
    icon: '🧩',
    col: '#4F46E5',
    title: '100 Days of Data Structures',
    sub: 'D801–D900 · Sep 2 – Dec 10, 2028 · 100 days',
    detail: 'Data Structures — block 9 of 10',
    time: '5:30 AM – 8:30 AM · 3h daily',
  },
  {
    id: 'b10',
    icon: '🏗',
    col: '#7C3AED',
    title: '100 Days of System Design',
    sub: 'D901–D1000 · Dec 11, 2028 – Mar 20, 2029 · 100 days',
    detail: 'System Design — block 10 of 10',
    time: '5:30 AM – 8:30 AM · 3h daily',
  },
];

const PHASES = [
  {
    id: 'p1',
    block: 'b1',
    seq: 1,
    icon: '☁',
    color: '#D97706',
    dark: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'AWS',
    label: 'Block 1 · 100 Days',
    days: 100,
    ds: 1,
    de: 100,
    period: 'Jun 25 – Oct 2, 2026',
    ms: 'AWS Complete · D100',
    about: '100 study days. AWS deep dive for FPO Cloud stack: IAM, VPC, EC2, S3, RDS, DynamoDB, Lambda, API Gateway, Cognito, Step Functions, ECS/EKS, SQS/SNS, CloudFront, Route53, CDK TypeScript. Hands-on labs + architecture whiteboards. Build production-grade AWS skills.',
    courses: [
      'Stephane Maarek — Ultimate AWS SAA-C03 (Udemy)',
      'AWS Skill Builder — free labs',
      'Tutorials Dojo — scenario questions',
      'AWS Well-Architected Framework (free)',
    ],
    wplan: [
      { w: 1, f: 'Weeks 1-2: IAM + VPC + EC2', t: 'IAM policies/roles, VPC subnets, security groups, EC2 types, ALB/NLB' },
      { w: 2, f: 'Weeks 3-4: S3 + RDS + DynamoDB', t: 'S3 storage classes, RDS, DynamoDB single-table design, GSI, streams' },
      { w: 3, f: 'Weeks 5-6: Lambda + API Gateway + Serverless', t: 'Lambda, API Gateway, Step Functions, Cognito — your FPO auth pattern' },
      { w: 4, f: 'Weeks 7-8: ECS/EKS + Messaging', t: 'ECS Fargate, EKS basics, SQS/SNS/EventBridge, CloudFront' },
      { w: 5, f: 'Weeks 9-10: CDK + FPO Capstone', t: 'CDK TypeScript IaC, deploy FPO stack, disaster recovery, cost optimization' },
    ],
  },
  {
    id: 'p2',
    block: 'b2',
    seq: 2,
    icon: '📜',
    color: '#EAB308',
    dark: '#CA8A04',
    bg: '#FEFCE8',
    border: '#FDE047',
    name: 'Javascript/Typescript',
    label: 'Block 2 · 100 Days',
    days: 100,
    ds: 101,
    de: 200,
    period: 'Oct 3, 2026 – Jan 10, 2027',
    ms: 'Javascript/Typescript Complete · D200',
    about: '100 study days. JavaScript ES6+ and TypeScript: let/const, closures, prototypes, async/await, Promises, modules, destructuring, strict TypeScript, generics, utility types. Node.js fundamentals. Build 10 mini projects.',
    courses: [
      'Maximilian Schwarzmüller — JavaScript Complete Guide (Udemy)',
      'javascript.info (free)',
      'Maximilian Schwarzmüller — Understanding TypeScript (Udemy)',
      'MDN Web Docs',
    ],
    wplan: [
      { w: 1, f: 'Weeks 1-2: JS Core + ES6+', t: 'variables, functions, closures, arrays/objects, map/filter/reduce' },
      { w: 2, f: 'Weeks 3-4: Async JS + Modules', t: 'Promises, async/await, fetch, ES modules, npm' },
      { w: 3, f: 'Weeks 5-6: TypeScript', t: 'types, interfaces, generics, utility types, strict mode' },
      { w: 4, f: 'Weeks 7-8: Node.js Basics', t: 'event loop, fs/path, Express intro, REST API' },
      { w: 5, f: 'Weeks 9-10: JS/TS Capstone', t: 'Full-stack mini app with TypeScript + Node API' },
    ],
  },
  {
    id: 'p3',
    block: 'b3',
    seq: 3,
    icon: '⚛',
    color: '#0EA5E9',
    dark: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    name: 'React/React native',
    label: 'Block 3 · 100 Days',
    days: 100,
    ds: 201,
    de: 300,
    period: 'Jan 11 – Apr 20, 2027',
    ms: 'React/React native Complete · D300',
    about: '100 study days. React 19 + Next.js 15 + React Native: hooks, React Router, Redux Toolkit, RTK Query, Next.js App Router, Server Components, React Native + Expo. Build FPO web portal + mobile app.',
    courses: [
      'Maximilian Schwarzmüller — React Complete Guide (Udemy)',
      'Maximilian Schwarzmüller — Next.js 15 Guide (Udemy)',
      'Chaicode — React Native (free)',
      'React docs (react.dev)',
    ],
    wplan: [
      { w: 1, f: 'Weeks 1-3: React Core', t: 'hooks, React Router, Redux Toolkit, RTK Query, testing' },
      { w: 2, f: 'Weeks 4-6: Next.js', t: 'App Router, RSC, Server Actions, NextAuth, Prisma, Vercel' },
      { w: 3, f: 'Weeks 7-8: React Native', t: 'Expo, navigation, device APIs, EAS Build' },
      { w: 4, f: 'Weeks 9-10: FPO Capstone', t: 'FPO web portal + mobile flight status app' },
    ],
  },
  {
    id: 'p4',
    block: 'b4',
    seq: 4,
    icon: '🐍',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'Python',
    label: 'Block 4 · 100 Days',
    days: 100,
    ds: 301,
    de: 400,
    period: 'Apr 21 – Jul 29, 2027',
    ms: 'Python Complete · D400',
    about: '100 study days. Python 3 mastery: fundamentals, OOP, decorators, generators, asyncio, type hints, boto3, FastAPI basics, Django REST Framework intro, data processing with pandas. Foundation for Agentic AI in Block 5.',
    courses: [
      'Corey Schafer — Python playlist (YouTube)',
      'Dr. Angela Yu — 100 Days of Python (Udemy)',
      'Real Python — tutorials',
      'FastAPI official docs',
    ],
    wplan: [
      { w: 1, f: 'Weeks 1-2: Python Fundamentals', t: 'syntax, data types, control flow, functions, comprehensions, venv' },
      { w: 2, f: 'Weeks 3-4: OOP + Advanced Python', t: 'classes, dunder methods, decorators, generators, context managers' },
      { w: 3, f: 'Weeks 5-6: Async + boto3', t: 'asyncio, aiohttp, boto3 EC2/S3/Lambda/DynamoDB automation' },
      { w: 4, f: 'Weeks 7-8: FastAPI + DRF', t: 'FastAPI async routes, Pydantic v2, Django REST Framework basics' },
      { w: 5, f: 'Weeks 9-10: Python Capstone', t: 'Build flight-data API with FastAPI + AWS integration' },
    ],
  },
  {
    id: 'p5',
    block: 'b5',
    seq: 5,
    icon: '🤖',
    color: '#8B5CF6',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'Agentic AI',
    label: 'Block 5 · 100 Days',
    days: 100,
    ds: 401,
    de: 500,
    period: 'Jul 30 – Nov 6, 2027',
    ms: 'Agentic AI Complete · D500',
    about: '100 study days. Agentic AI: LangChain, LangGraph, RAG pipelines, multi-agent systems, MCP protocol, AWS Bedrock, FastAPI deployment. Ed Donner projects. Capstone: FPO AI assistant on AWS Lambda.',
    courses: [
      'Ed Donner — Agentic AI Engineering 2026 (Udemy)',
      'Eden Marco — LangChain (Udemy)',
      'AWS Bedrock docs',
      'LangGraph documentation',
    ],
    wplan: [
      { w: 1, f: 'Weeks 1-2: GenAI + Prompt Engineering', t: 'LLMs, embeddings, RAG, vector DBs, AWS Bedrock' },
      { w: 2, f: 'Weeks 3-4: LangChain + LangGraph', t: 'chains, agents, tools, state machines, supervisor agents' },
      { w: 3, f: 'Weeks 5-6: Ed Donner Projects', t: 'Career Digital Twin, Deep Research, SDR Agent, Browser Agent' },
      { w: 4, f: 'Weeks 7-8: MCP + Multi-Agent', t: 'MCP protocol, custom tools, agent orchestration' },
      { w: 5, f: 'Weeks 9-10: FPO AI Capstone', t: 'FPO AI assistant: natural language flight queries on Lambda' },
    ],
  },
  {
    id: 'p6',
    block: 'b6',
    seq: 6,
    icon: '☕',
    color: '#EA580C',
    dark: '#C2410C',
    bg: '#FFF7ED',
    border: '#FED7AA',
    name: 'Java',
    label: 'Block 6 · 100 Days',
    days: 100,
    ds: 501,
    de: 600,
    period: 'Nov 7, 2027 – Feb 14, 2028',
    ms: 'Java Complete · D600',
    about: '100 study days. Java enterprise foundations: J2SE, J2EE, JPA/Hibernate, Spring Boot 3, Spring Security + OAuth2 (FPO Cognito!), REST APIs, testing, OpenAPI. Prepares you for the Microservices block next.',
    courses: [
      'Navin Reddy Telusko — Java (YouTube)',
      'John Thompson — Spring Boot 3 (Udemy)',
      'Baeldung — Spring tutorials',
      'Spring official docs',
    ],
    wplan: [
      { w: 1, f: 'Weeks 1-2: J2SE + OOP', t: 'syntax, collections, streams, lambdas, Optional, records' },
      { w: 2, f: 'Weeks 3-4: JPA + Spring Data', t: '@Entity, relationships, JpaRepository, @Transactional' },
      { w: 3, f: 'Weeks 5-6: Spring Boot + Security', t: 'REST APIs, JWT, OAuth2 resource server, validation' },
      { w: 4, f: 'Weeks 7-8: Testing + OpenAPI', t: 'JUnit 5, Mockito, Testcontainers, Swagger/OpenAPI' },
      { w: 5, f: 'Weeks 9-10: Java Capstone', t: 'Spring Boot monolith API with JPA + Cognito auth on AWS ECS' },
    ],
  },
  {
    id: 'p7',
    block: 'b7',
    seq: 7,
    icon: '🏛',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECDD3',
    name: 'Microservices',
    label: 'Block 7 · 100 Days',
    days: 100,
    ds: 601,
    de: 700,
    period: 'Feb 15 – May 24, 2028',
    ms: 'Microservices Complete · D700',
    about: '100 study days. Microservices architecture: Spring Cloud, service discovery, API Gateway, Kafka event streaming, Resilience4j, CQRS, saga patterns, distributed tracing, DDD bounded contexts. Build FPO Cloud as a microservices system on AWS.',
    courses: [
      'Ranga Karanam — Microservices with Spring Boot and K8s (Udemy)',
      'Spring Cloud official docs',
      'Confluent Kafka tutorials',
      'Chris Richardson — microservices.io (free)',
    ],
    wplan: [
      { w: 1, f: 'Weeks 1-2: Microservices Fundamentals', t: '12-factor app, bounded contexts, DDD, API contracts, strangler fig' },
      { w: 2, f: 'Weeks 3-4: Spring Cloud + Service Mesh', t: 'Eureka/Consul, API Gateway, Config Server, circuit breakers' },
      { w: 3, f: 'Weeks 5-6: Kafka + Event-Driven', t: 'producers/consumers, topics, event sourcing, CQRS intro' },
      { w: 4, f: 'Weeks 7-8: Resilience + Distributed Tracing', t: 'Resilience4j, retries, bulkhead, OpenTelemetry, Zipkin' },
      { w: 5, f: 'Weeks 9-10: FPO Microservices Capstone', t: 'Decompose FPO into flight/booking/auth services on ECS/EKS' },
    ],
  },
  {
    id: 'p8',
    block: 'b8',
    seq: 8,
    icon: '🔧',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'DevOps',
    label: 'Block 8 · 100 Days',
    days: 100,
    ds: 701,
    de: 800,
    period: 'May 25 – Sep 1, 2028',
    ms: 'DevOps Complete · D800',
    about: '100 study days. DevOps mastery: Docker, Kubernetes/EKS, CI/CD (GitHub Actions, Jenkins), Terraform/IaC, Prometheus/Grafana, SonarQube, DevSecOps. Deploy and operate FPO Cloud infrastructure.',
    courses: [
      'Nana Janashia — DevOps Bootcamp (Udemy)',
      'Mumshad Mannambeth — Kubernetes + CKA (KodeKloud)',
      'HashiCorp Learn — Terraform (free)',
      'Bogdan Stashchuk — Terraform (Udemy)',
    ],
    wplan: [
      { w: 1, f: 'Weeks 1-2: Docker + Compose', t: 'Dockerfile multi-stage, networking, volumes, ECR' },
      { w: 2, f: 'Weeks 3-4: Kubernetes + EKS', t: 'pods, deployments, services, ingress, Helm, kubectl' },
      { w: 3, f: 'Weeks 5-6: CI/CD Pipelines', t: 'GitHub Actions OIDC to AWS, CodePipeline, SonarQube' },
      { w: 4, f: 'Weeks 7-8: Terraform + Monitoring', t: 'HCL, modules, remote state, Prometheus/Grafana' },
      { w: 5, f: 'Weeks 9-10: DevOps Capstone', t: 'End-to-end pipeline for FPO Cloud on EKS' },
    ],
  },
  {
    id: 'p9',
    block: 'b9',
    seq: 9,
    icon: '🧩',
    color: '#4F46E5',
    dark: '#3730A3',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Data Structures',
    label: 'Block 9 · 100 Days',
    days: 100,
    ds: 801,
    de: 900,
    period: 'Sep 2 – Dec 10, 2028',
    ms: 'Data Structures Complete · D900',
    about: '100 study days. DSA in Python and Java: arrays, linked lists, trees, graphs, heaps, hashing, sorting, dynamic programming, backtracking, greedy. 300+ LeetCode problems. NeetCode patterns + mock interviews.',
    courses: [
      'NeetCode — DSA course (YouTube free)',
      'Scott Barrett — Python + Java DSA (Udemy)',
      'LeetCode Top Interview 150',
      'Pramp.com — mock interviews',
    ],
    wplan: [
      { w: 1, f: 'Weeks 1-2: Arrays + Strings + Linked Lists', t: 'two pointers, sliding window, fast/slow pointer — 60 problems' },
      { w: 2, f: 'Weeks 3-4: Trees + Graphs', t: 'DFS/BFS, BST, topological sort, Union-Find — 60 problems' },
      { w: 3, f: 'Weeks 5-6: Heaps + Hashing + Sorting', t: 'priority queue, frequency maps, binary search — 50 problems' },
      { w: 4, f: 'Weeks 7-8: Dynamic Programming', t: '1D/2D DP, knapsack, string DP — 80 problems' },
      { w: 5, f: 'Weeks 9-10: Backtracking + Greedy + Mocks', t: 'subsets, permutations, greedy — 50 problems + 7 mocks' },
    ],
  },
  {
    id: 'p10',
    block: 'b10',
    seq: 10,
    icon: '🏗',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'System Design',
    label: 'Block 10 · 100 Days',
    days: 100,
    ds: 901,
    de: 1000,
    period: 'Dec 11, 2028 – Mar 20, 2029',
    ms: '1000 DAYS COMPLETE · D1000 · Mar 20, 2029',
    about: '100 study days. System design mastery. Frank Kane framework, Alex Xu designs, classic systems (URL Shortener, WhatsApp, Twitter, YouTube, Uber, Payment). FPO Cloud as real case study. 20 spoken-aloud designs. D1000 = DONE.',
    courses: [
      'Frank Kane — System Design Interview (Udemy)',
      'Alex Xu — System Design Interview Vol 1 + 2 (books)',
      'ByteByteGo newsletter (free)',
      'Mikhail Smarshchok — 20+ designs (Udemy)',
    ],
    wplan: [
      { w: 1, f: 'Weeks 1-2: SD Framework + FPO Design', t: 'Clarify → Estimate → HLD → Deep Dive → Wrap Up. Design FPO Cloud.' },
      { w: 2, f: 'Weeks 3-4: Core Concepts', t: 'APIs, load balancing, caching, CDN, databases, CAP, sharding' },
      { w: 3, f: 'Weeks 5-6: Classic Designs 1', t: 'URL Shortener, WhatsApp, Twitter, Instagram — spoken aloud daily' },
      { w: 4, f: 'Weeks 7-8: Classic Designs 2', t: 'YouTube, Netflix, Uber, Payment System, Search Engine' },
      { w: 5, f: 'Weeks 9-10: Mock SD + Portfolio', t: '10 full cold mock interviews + ADRs + portfolio diagrams. D1000 COMPLETE 🏆' },
    ],
  },
];

const MILESTONES = [
  { day: 100, icon: '☁', label: 'AWS Done', date: 'Oct 2, 2026', color: '#D97706' },
  { day: 200, icon: '📜', label: 'Javascript/Typescript Done', date: 'Jan 10, 2027', color: '#EAB308' },
  { day: 300, icon: '⚛', label: 'React/React native Done', date: 'Apr 20, 2027', color: '#0EA5E9' },
  { day: 400, icon: '🐍', label: 'Python Done', date: 'Jul 29, 2027', color: '#16A34A' },
  { day: 500, icon: '🤖', label: 'Agentic AI Done', date: 'Nov 6, 2027', color: '#8B5CF6' },
  { day: 600, icon: '☕', label: 'Java Done', date: 'Feb 14, 2028', color: '#EA580C' },
  { day: 700, icon: '🏛', label: 'Microservices Done', date: 'May 24, 2028', color: '#E11D48' },
  { day: 800, icon: '🔧', label: 'DevOps Done', date: 'Sep 1, 2028', color: '#6366F1' },
  { day: 900, icon: '🧩', label: 'Data Structures Done', date: 'Dec 10, 2028', color: '#4F46E5' },
  { day: 1000, icon: '🏗', label: 'System Design — 1000 DAYS DONE', date: 'Mar 20, 2029', color: '#7C3AED' },
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
              {blk?.title || p.block}
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
      col: '#1565C0',
      title: '🔥 1000 DAYS OF CODE · 10 BLOCKS × 100 DAYS',
      sub: 'D1–D1000 · Jun 25, 2026 – Mar 20, 2029 · AWS → Javascript/Typescript → React/React native → Python → Agentic AI → Java → Microservices → DevOps → DSA → System Design',
      ids: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10'],
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
                  'Thu Jun 25, 2026 → Wed Mar 20, 2029 · 5:30 AM – 8:30 AM · 3h · 1000 study days · 10 blocks'
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
                  'Jun 25, 2026 → Mar 20, 2029 · 1000 study days · relaxation days when 5:30–8:30 AM is impossible · No 2nd slot'
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
                {'Relaxation days · when 5:30–8:30 AM study is impossible'}
              </div>
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.5)' }}>
                {
                  'That day does not count as a study day · your finish date extends beyond Mar 20, 2029'
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
              <span>{'Jun 25, 2026'}</span>
              <span
                style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 700 }}
              >
                {prog + '% · Study Day ' + sd + ' of 1000 · Target ' + STUDY_END}
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
            {'🏆 1000 Days of Code · Jun 25, 2026 → Mar 20, 2029 · 10 blocks × 100 days'}
          </div>
          <div
            style={{
              fontSize: 9,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 8,
            }}
          >
            {
              'AWS → Javascript/Typescript → React/React native → Python → Agentic AI → Java → Microservices → DevOps → DSA → System Design · 5:30–8:30 AM · 3h'
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
