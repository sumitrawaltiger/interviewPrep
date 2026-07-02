import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const START = new Date('2026-07-04');
const TOTAL_WEEKS = 150;

function weekStart(w) {
  const d = new Date(START);
  d.setDate(d.getDate() + (w - 1) * 7);
  return d;
}
function weekEnd(w) {
  const d = weekStart(w);
  d.setDate(d.getDate() + 6);
  return d;
}
function fmt(d) {
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
function fmtShort(d) {
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
function period(ws, we) {
  const a = weekStart(ws);
  const b = weekEnd(we);
  if (a.getFullYear() === b.getFullYear()) {
    return fmtShort(a) + ' – ' + fmt(b);
  }
  return fmtShort(a) + ', ' + a.getFullYear() + ' – ' + fmt(b);
}

const SKILLS = [
  {
    id: 's1', block: 'b1', seq: 1, icon: '📜', color: '#EAB308', dark: '#CA8A04', bg: '#FEFCE8', border: '#FDE047',
    name: 'Javascript', weeks: 8,
    about: 'Weeks 1–8 · Coder Army Day of Thunder + advanced JS. Core language, async, closures, prototypes, modules.',
    courses: ['Coder Army — Web Dev + System Design + Security + DevOps (MERN)', 'javascript.info (free)', 'MDN Web Docs'],
    wplan: [
      ['JS Basics', 'syntax, let/const, types, operators, control flow'],
      ['Functions & Scope', 'closures, hoisting, this, arrow functions'],
      ['Objects & Arrays', 'destructuring, spread, map/filter/reduce'],
      ['Async JS I', 'callbacks, Promises, error handling'],
      ['Async JS II', 'async/await, fetch, event loop'],
      ['OOP & Prototypes', 'classes, prototype chain, inheritance'],
      ['Modules & Tooling', 'ES modules, npm, bundler basics'],
      ['JS Capstone', 'mini projects, Coder Army lectures wrap-up'],
    ],
  },
  {
    id: 's2', block: 'b1', seq: 2, icon: '🔷', color: '#2563EB', dark: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE',
    name: 'Typescript', weeks: 3,
    about: 'Weeks 9–11 · TypeScript strict mode: types, interfaces, generics, utility types, type guards.',
    courses: ['Coder Army — MERN Stack course', 'TypeScript Handbook (free)', 'Total TypeScript (Matt Pocock)'],
    wplan: [
      ['Types & Interfaces', 'primitives, arrays, objects, interfaces'],
      ['Functions & Generics', 'generic functions, constraints, keyof'],
      ['Advanced TS', 'union/intersection, utility types, strict tsconfig'],
    ],
  },
  {
    id: 's3', block: 'b1', seq: 3, icon: '🟢', color: '#16A34A', dark: '#15803D', bg: '#F0FDF4', border: '#BBF7D0',
    name: 'ExpressJS', weeks: 3,
    about: 'Weeks 12–14 · Express.js: routing, middleware, REST APIs, JWT auth, MongoDB integration.',
    courses: ['Coder Army — MERN Stack course', 'Express.js official guide', 'The Net Ninja — Node/Express (YouTube)'],
    wplan: [
      ['Node & Express Core', 'event loop, modules, routing'],
      ['Middleware & APIs', 'validation, error handling, REST'],
      ['Auth & Project', 'JWT, bcrypt, MongoDB, deploy API'],
    ],
  },
  {
    id: 's4', block: 'b1', seq: 4, icon: '⚛', color: '#0EA5E9', dark: '#0369A1', bg: '#F0F9FF', border: '#BAE6FD',
    name: 'React JS', weeks: 9,
    about: 'Weeks 15–23 · React 19 deep dive: components, hooks, state management, React Router, performance.',
    courses: ['Coder Army — MERN Stack course', 'react.dev official docs', 'Jack Herrington — React patterns'],
    wplan: [
      ['React Core', 'components, JSX, props, state'],
      ['Hooks I', 'useEffect, useRef, useMemo, useCallback'],
      ['Hooks II', 'useContext, useReducer, custom hooks'],
      ['Routing', 'React Router v6, nested routes, loaders'],
      ['State Management', 'context patterns, Zustand intro'],
      ['Forms & Validation', 'controlled inputs, react-hook-form'],
      ['API Integration', 'fetch, React Query, error boundaries'],
      ['Performance', 'memo, lazy, Suspense, profiling'],
      ['MERN Capstone', 'full-stack project, course completion'],
    ],
  },
  {
    id: 's5', block: 'b1', seq: 5, icon: '▲', color: '#171717', dark: '#000000', bg: '#F5F5F5', border: '#D4D4D4',
    name: 'Next JS', weeks: 6,
    about: 'Weeks 24–29 · Next.js via Anil Dollar: App Router, Server Components, Server Actions, auth, Vercel deploy.',
    courses: ['Anil Dollar — Next.js (Udemy)', 'nextjs.org official docs'],
    wplan: [
      ['App Router', 'file-based routing, layouts, RSC'],
      ['Data Fetching', 'Server Actions, caching, revalidation'],
      ['Auth & Middleware', 'NextAuth, protected routes'],
      ['Database Layer', 'Prisma, API routes'],
      ['Advanced Patterns', 'parallel routes, intercepting routes'],
      ['FPO Portal', 'flight search UI, deploy to Vercel'],
    ],
  },
  {
    id: 's6', block: 'b1', seq: 6, icon: '📱', color: '#7C3AED', dark: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE',
    name: 'React Native', weeks: 6,
    about: 'Weeks 30–35 · React Native from ChaiCode: Expo, navigation, device APIs, EAS Build.',
    courses: ['ChaiCode — React Native (official website)', 'Expo docs', 'React Navigation docs'],
    wplan: [
      ['RN Basics', 'Expo setup, core components, Flexbox'],
      ['Navigation', 'stack/tab navigators, deep linking'],
      ['State & APIs', 'AsyncStorage, fetch, offline patterns'],
      ['Device APIs', 'camera, location, notifications'],
      ['Native Modules', 'platform-specific code, gestures'],
      ['FPO Mobile App', 'flight status screen, EAS Build'],
    ],
  },
  {
    id: 's7', block: 'b2', seq: 7, icon: '🐍', color: '#15803D', dark: '#166534', bg: '#F0FDF4', border: '#86EFAC',
    name: 'Python', weeks: 4,
    about: 'Weeks 36–39 · Python 3 from Ashok IT: fundamentals, OOP, decorators, asyncio.',
    courses: ['Ashok IT — Python (paid course)', 'Python official docs'],
    wplan: [
      ['Python Basics', 'syntax, data types, functions'],
      ['OOP & Advanced', 'classes, decorators, generators'],
      ['Async & IO', 'asyncio, file handling, context managers'],
      ['Libraries', 'pandas intro, scripting automation'],
    ],
  },
  {
    id: 's8', block: 'b2', seq: 8, icon: '🎸', color: '#092E20', dark: '#051B14', bg: '#ECFDF5', border: '#6EE7B7',
    name: 'Django', weeks: 4,
    about: 'Weeks 40–43 · Django 5 + DRF: models, migrations, admin, serializers, viewsets.',
    courses: ['Dennis Ivy — Django (YouTube)', 'Django official docs', 'DRF docs'],
    wplan: [
      ['Django Core', 'models, migrations, admin'],
      ['DRF Basics', 'serializers, API views'],
      ['Auth & Permissions', 'token auth, throttling'],
      ['FPO Admin API', 'booking admin, deploy'],
    ],
  },
  {
    id: 's9', block: 'b2', seq: 9, icon: '⚡', color: '#009688', dark: '#00796B', bg: '#E0F2F1', border: '#80CBC4',
    name: 'Fast API', weeks: 3,
    about: 'Weeks 44–46 · FastAPI: async routes, Pydantic v2, dependency injection, OAuth2, SQLAlchemy.',
    courses: ['FastAPI official docs', 'TestDriven.io — FastAPI'],
    wplan: [
      ['FastAPI Core', 'routes, Pydantic models'],
      ['Database Layer', 'SQLAlchemy, Alembic'],
      ['Auth & Deploy', 'OAuth2, JWT, Dockerize API'],
    ],
  },
  {
    id: 's10', block: 'b2', seq: 10, icon: '🤖', color: '#8B5CF6', dark: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE',
    name: 'Agentic AI', weeks: 10,
    about: 'Weeks 47–56 · Agentic AI from Ashok IT: LangChain, LangGraph, RAG, multi-agent systems.',
    courses: ['Ashok IT — Agentic AI (paid course)', 'LangGraph docs', 'LangChain docs'],
    wplan: [
      ['GenAI Foundations', 'LLMs, tokens, embeddings'],
      ['RAG Pipeline', 'vector stores, chunking, retrieval'],
      ['LangChain', 'chains, tools, memory'],
      ['LangGraph', 'agents, state machines, multi-step'],
      ['Tool Use & APIs', 'function calling, external tools'],
      ['Agent Projects I', 'research agent, code assistant'],
      ['Agent Projects II', 'Career Twin, Deep Research'],
      ['Evaluation & Safety', 'guardrails, evals, monitoring'],
      ['Production Patterns', 'deploy agents, cost control'],
      ['FPO AI Capstone', 'natural language flight queries'],
    ],
  },
  {
    id: 's11', block: 'b3', seq: 11, icon: '☕', color: '#EA580C', dark: '#C2410C', bg: '#FFF7ED', border: '#FED7AA',
    name: 'J2SE', weeks: 4,
    about: 'Weeks 57–60 · Java SE: syntax, OOP, collections, streams, lambdas, Optional, records.',
    courses: ['Telusko — Java (YouTube)', 'John Thompson — Java Masterclass', 'Baeldung'],
    wplan: [
      ['Java Syntax & OOP', 'classes, inheritance, polymorphism'],
      ['Collections & Streams', 'ArrayList, HashMap, Stream API'],
      ['Modern Java', 'lambdas, Optional, records'],
      ['Concurrency', 'threads, ExecutorService'],
    ],
  },
  {
    id: 's12', block: 'b3', seq: 12, icon: '🏢', color: '#0891B2', dark: '#0E7490', bg: '#ECFEFF', border: '#A5F3FC',
    name: 'J2EE', weeks: 4,
    about: 'Weeks 61–64 · Jakarta EE: Servlets, JSP, JNDI, JDBC, connection pooling.',
    courses: ['Telusko — Servlet & JSP', 'Java Brains — J2EE', 'Head First Servlets & JSP'],
    wplan: [
      ['Servlets', 'lifecycle, request/response, sessions'],
      ['JSP & JSTL', 'JSP tags, EL, JSTL'],
      ['JDBC & JNDI', 'DataSource, pooling'],
      ['EE Architecture', 'deploy WAR, Tomcat'],
    ],
  },
  {
    id: 's13', block: 'b3', seq: 13, icon: '🗄', color: '#7C3AED', dark: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE',
    name: 'JPA', weeks: 3,
    about: 'Weeks 65–67 · JPA/Hibernate: @Entity, relationships, JPQL, Spring Data JPA, N+1 problem.',
    courses: ['Java Brains — JPA & Hibernate', 'Baeldung — JPA', 'Spring Data JPA docs'],
    wplan: [
      ['JPA Entities', '@Entity, @Id, relationships'],
      ['Queries', 'JPQL, Criteria API'],
      ['Spring Data JPA', 'JpaRepository, N+1 fix, caching'],
    ],
  },
  {
    id: 's14', block: 'b3', seq: 14, icon: '🌱', color: '#6DB33F', dark: '#4E9A2E', bg: '#F0FDF4', border: '#86EFAC',
    name: 'Spring Boot', weeks: 8,
    about: 'Weeks 68–75 · Spring Boot 3: REST APIs, Spring Security + OAuth2, OpenAPI, testing.',
    courses: ['John Thompson — Spring Boot 3', 'Baeldung — Spring Boot', 'Spring Security docs'],
    wplan: [
      ['Spring Boot Core', 'starters, REST controllers'],
      ['Dependency Injection', 'beans, configuration, profiles'],
      ['Spring Security I', 'auth, roles, JWT'],
      ['Spring Security II', 'OAuth2, method security'],
      ['Data Layer', 'JPA integration, transactions'],
      ['Testing', 'JUnit 5, Mockito, Testcontainers'],
      ['Observability', 'Actuator, logging, metrics'],
      ['FPO API', 'Spring Boot flight API capstone'],
    ],
  },
  {
    id: 's15', block: 'b3', seq: 15, icon: '🏛', color: '#E11D48', dark: '#BE123C', bg: '#FFF1F2', border: '#FECDD3',
    name: 'Microservices', weeks: 7,
    about: 'Weeks 76–82 · Microservices: Spring Cloud, Kafka, Resilience4j, CQRS, saga patterns.',
    courses: ['Ranga Karanam — Microservices', 'Spring Cloud docs', 'microservices.io'],
    wplan: [
      ['MS Fundamentals', '12-factor, bounded contexts, DDD'],
      ['Service Communication', 'REST, gRPC, API contracts'],
      ['Spring Cloud', 'Eureka, Config Server, API Gateway'],
      ['Resilience', 'circuit breaker, retry, bulkhead'],
      ['Event-Driven', 'Kafka producers/consumers'],
      ['CQRS & Saga', 'event sourcing, distributed transactions'],
      ['FPO Decomposition', 'flight/booking/auth services'],
    ],
  },
  {
    id: 's16', block: 'b4', seq: 16, icon: '🔧', color: '#6366F1', dark: '#4338CA', bg: '#EEF2FF', border: '#C7D2FE',
    name: 'Devops', weeks: 11,
    about: 'Weeks 83–93 · DevOps from CloudFolks Hub: Docker, CI/CD, Terraform, monitoring, GitOps.',
    courses: ['CloudFolks Hub — DevOps (paid course)', 'Docker docs', 'Terraform docs'],
    wplan: [
      ['Linux & Shell', 'bash, permissions, networking basics'],
      ['Docker', 'images, containers, compose, multi-stage'],
      ['CI/CD', 'GitHub Actions, pipelines, artifacts'],
      ['IaC — Terraform', 'modules, state, AWS provider'],
      ['Monitoring', 'Prometheus, Grafana, alerts'],
      ['Logging & Tracing', 'ELK, OpenTelemetry intro'],
      ['Secrets & Security', 'Vault patterns, OIDC'],
      ['GitOps', 'Argo CD, deployment strategies'],
      ['Infrastructure Patterns', 'blue/green, canary'],
      ['FPO Pipeline I', 'build, test, deploy pipeline'],
      ['FPO Pipeline II', 'full pipeline + monitoring capstone'],
    ],
  },
  {
    id: 's17', block: 'b4', seq: 17, icon: '☸', color: '#326CE5', dark: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE',
    name: 'Kubernetes', weeks: 10,
    about: 'Weeks 94–103 · Kubernetes CKA/CKAD path: clusters, workloads, networking, storage, security, Helm.',
    courses: ['KodeKloud — CKA/CKAD courses', 'Kubernetes official docs', 'Killer.sh CKA/CKAD practice'],
    wplan: [
      ['Architecture & kubectl', 'control plane, nodes, contexts'],
      ['Pods & Workloads', 'Deployments, ReplicaSets, Jobs'],
      ['Services & Networking', 'ClusterIP, Ingress, DNS, NetworkPolicies'],
      ['Storage', 'PV, PVC, ConfigMaps, Secrets'],
      ['Scheduling', 'requests/limits, affinity, taints'],
      ['Security & RBAC', 'ServiceAccounts, Roles, Pod Security'],
      ['Observability', 'probes, logging, troubleshooting'],
      ['Helm & GitOps', 'charts, releases, Argo CD on K8s'],
      ['FPO on K8s', 'deploy services, HPA, rolling updates'],
      ['CKA/CKAD Mocks', 'timed labs, weak-area drills'],
    ],
  },
  {
    id: 's18', block: 'b4', seq: 18, icon: '☁', color: '#D97706', dark: '#B45309', bg: '#FFFBEB', border: '#FDE68A',
    name: 'AWS', weeks: 9, scheduleLink: '#/aws-100-days',
    about: 'CloudFolks Hub AWS + hands-on labs. IAM, VPC, EC2, S3, RDS, Lambda, ECS — after KodeKloud foundation.',
    courses: ['CloudFolks Hub — AWS Cloud (paid course)', 'AWS Skill Builder', 'AWS Official Documentation'],
    wplan: [
      ['IAM & Account', 'users, roles, policies, MFA, CLI'],
      ['VPC Networking', 'subnets, IGW, NAT, SGs, endpoints'],
      ['EC2 & Load Balancing', 'EC2, EBS, ALB, ASG'],
      ['S3 Storage', 'buckets, versioning, lifecycle'],
      ['RDS & DynamoDB', 'RDS, Aurora, DynamoDB'],
      ['Lambda & API Gateway', 'serverless APIs, triggers'],
      ['ECS, EKS & ECR', 'containers on AWS, Fargate'],
      ['Messaging & DNS', 'SQS, SNS, Route 53, CloudFront'],
      ['CDK & Capstone', 'FPO AWS architecture + exam prep'],
    ],
  },
  {
    id: 's_kk', block: 'b0', seq: 0, icon: '🎓', color: '#10B981', dark: '#059669', bg: '#ECFDF5', border: '#6EE7B7',
    name: 'KodeKloud DevOps & Cloud', weeks: 4,
    about: 'KodeKloud 1-month subscription (through Aug 2, 2026) · DevOps & Cloud — Linux, Docker, Kubernetes, CI/CD, Terraform, AWS/cloud labs on KodeKloud.',
    courses: ['KodeKloud — DevOps learning path', 'KodeKloud — Kubernetes for Beginners', 'KodeKloud — AWS / cloud labs'],
    wplan: [
      ['Linux & Docker', 'shell, containers, images, compose, multi-stage builds'],
      ['Kubernetes Core', 'pods, deployments, services, kubectl, YAML manifests'],
      ['CI/CD & Terraform', 'pipelines, GitHub Actions, IaC basics on KodeKloud'],
      ['Cloud on KodeKloud', 'AWS/cloud hands-on labs, exam-style drills, revision'],
    ],
  },
  {
    id: 's19', block: 'b5', seq: 19, icon: '🧮', color: '#059669', dark: '#047857', bg: '#ECFDF5', border: '#6EE7B7',
    name: 'Data Structures', weeks: 20,
    about: 'Weeks 117–136 · DSA deep dive: NeetCode 150 + Blind 75 patterns in Python and Java. 2–3 problems daily.',
    courses: ['NeetCode.io', 'LeetCode Premium', 'Striver A2Z DSA'],
    wplan: [
      ['Arrays & Hashing', 'two sum, anagrams, top K'],
      ['Two Pointers', 'sliding window, palindrome'],
      ['Stacks & Queues', 'valid parentheses, monotonic stack'],
      ['Linked Lists', 'reverse, cycle, merge lists'],
      ['Binary Search', 'search rotated, boundary problems'],
      ['Trees I', 'traversals, BST basics'],
      ['Trees II', 'LCA, serialize, validate BST'],
      ['Tries & Heaps', 'word search, kth largest'],
      ['Backtracking I', 'subsets, combinations'],
      ['Backtracking II', 'permutations, N-Queens'],
      ['Graphs I', 'BFS/DFS, islands, topo sort'],
      ['Graphs II', 'Dijkstra, union-find'],
      ['DP I', 'climbing stairs, house robber'],
      ['DP II', 'coin change, knapsack'],
      ['DP III', 'LCS, edit distance'],
      ['Greedy', 'intervals, jump game'],
      ['Advanced Patterns', 'bit manipulation, math tricks'],
      ['Mixed Review I', 'weak-area drills, timed sets'],
      ['Mixed Review II', 'company-tagged problems'],
      ['Mock Rounds', '5 full timed mock interviews'],
    ],
  },
  {
    id: 's20', block: 'b5', seq: 20, icon: '🏗', color: '#DC2626', dark: '#B91C1C', bg: '#FEF2F2', border: '#FECACA',
    name: 'System Design', weeks: 14,
    about: 'Weeks 137–150 · System Design: scalability, classic designs, FPO architecture, whiteboards, portfolio ADRs.',
    courses: ['Alex Xu — System Design Interview', 'Gaurav Sen (YouTube)', 'ByteByteGo', 'DDIA (Kleppmann)'],
    wplan: [
      ['Fundamentals', 'scalability, CAP, load balancers'],
      ['Databases', 'SQL vs NoSQL, sharding, replication'],
      ['Caching & CDN', 'Redis, cache strategies, invalidation'],
      ['Messaging', 'SQS, SNS, Kafka, pub/sub patterns'],
      ['API Design', 'REST vs gRPC, rate limiting, gateway'],
      ['URL Shortener', 'hashing, Redis, analytics'],
      ['Social Systems', 'Twitter timeline, notifications'],
      ['Ride & Chat', 'Uber matching, WhatsApp architecture'],
      ['Search & Storage', 'Elasticsearch, object storage at scale'],
      ['FPO Architecture I', 'flight search, booking flow'],
      ['FPO Architecture II', 'payments, inventory, multi-region'],
      ['Mock Interviews I', '5 whiteboard sessions'],
      ['Mock Interviews II', '5 more designs, feedback loops'],
      ['Portfolio & Finish', '10 ADRs in GitHub — W150 DONE 🏆'],
    ],
  },
];

const SKILL_ORDER = [
  'KodeKloud DevOps & Cloud', 'AWS', 'Javascript', 'Typescript', 'ExpressJS', 'React JS', 'Next JS', 'React Native',
  'Python', 'Django', 'Fast API', 'Agentic AI', 'J2SE', 'J2EE', 'JPA', 'Spring Boot',
  'Microservices', 'Devops', 'Kubernetes', 'Data Structures', 'System Design',
];

const BLOCK_BY_SKILL = {
  'KodeKloud DevOps & Cloud': 'b0',
  AWS: 'b0',
  Javascript: 'b1', Typescript: 'b1', ExpressJS: 'b1', 'React JS': 'b1', 'Next JS': 'b1', 'React Native': 'b1',
  Python: 'b2', Django: 'b2', 'Fast API': 'b2', 'Agentic AI': 'b2',
  J2SE: 'b3', J2EE: 'b3', JPA: 'b3', 'Spring Boot': 'b3', Microservices: 'b3',
  Devops: 'b4', Kubernetes: 'b4',
  'Data Structures': 'b5', 'System Design': 'b5',
};

const byName = Object.fromEntries(SKILLS.map((s) => [s.name, s]));
const ORDERED_SKILLS = SKILL_ORDER.map((name, i) => {
  const s = byName[name];
  if (!s) throw new Error('Missing skill: ' + name);
  const aboutBody = s.about.replace(/^Weeks \d+–\d+ · /, '');
  const ordered = {
    ...s,
    aboutBody,
    id: 's' + (i + 1),
    seq: i + 1,
    block: BLOCK_BY_SKILL[name],
  };
  if (name === 'AWS') ordered.scheduleLink = '#/aws-100-days';
  delete ordered.about;
  return ordered;
});

let ws = 1;
const PHASES = ORDERED_SKILLS.map((s) => {
  const we = ws + s.weeks - 1;
  const ds = (ws - 1) * 7 + 1;
  const de = we * 7;
  const days = s.weeks * 7;
  const p = {
    ...s,
    label: s.weeks + ' weeks',
    days,
    weeks: s.weeks,
    ws,
    we,
    ds,
    de,
    period: period(ws, we),
    about: 'Weeks ' + ws + '–' + we + ' · ' + s.aboutBody,
    ms: s.name + ' Complete · W' + we,
    wplan: s.wplan.map((row, i) => ({
      w: ws + i,
      f: 'Week ' + (ws + i) + ': ' + row[0],
      t: row[1],
    })),
  };
  ws = we + 1;
  const { aboutBody, ...phase } = p;
  return phase;
});

const sumWeeks = PHASES.reduce((a, p) => a + p.weeks, 0);
if (sumWeeks !== TOTAL_WEEKS) throw new Error('Week sum ' + sumWeeks + ' !== ' + TOTAL_WEEKS);

const BLOCK_META = {
  b0: { icon: '☁', col: '#D97706', title: 'KodeKloud + AWS', detail: 'W1–W4 KodeKloud DevOps & Cloud → W5–W13 AWS (CloudFolks Hub)', scheduleLink: '#/aws-100-days' },
  b1: { icon: '🎓', col: '#E11D48', title: 'JavaScript Ecosystem', detail: 'Javascript → Typescript → ExpressJS → React → Next JS → React Native' },
  b2: { icon: '🐍', col: '#15803D', title: 'Python Stack', detail: 'Python → Django → Fast API → Agentic AI' },
  b3: { icon: '☕', col: '#EA580C', title: 'Java Backend', detail: 'J2SE → J2EE → JPA → Spring Boot → Microservices' },
  b4: { icon: '🔧', col: '#6366F1', title: 'DevOps & Kubernetes', detail: 'DevOps → Kubernetes' },
  b5: { icon: '🎯', col: '#7C3AED', title: 'Interview Readiness', detail: 'Data Structures → System Design' },
};

const BLOCKS = Object.entries(BLOCK_META).map(([id, meta]) => {
  const phases = PHASES.filter((p) => p.block === id);
  const bws = phases[0].ws;
  const bwe = phases[phases.length - 1].we;
  return {
    id,
    icon: meta.icon,
    col: meta.col,
    title: meta.title,
    sub: 'W' + bws + '–W' + bwe + ' · ' + period(bws, bwe),
    detail: meta.detail,
    time: '5:30 AM – 8:30 AM IST · 3h daily',
    ...(meta.scheduleLink ? { scheduleLink: meta.scheduleLink } : {}),
  };
});

const MILESTONES = PHASES.map((p) => ({
  week: p.we,
  day: p.de,
  icon: p.icon,
  label: p.name + ' Done',
  date: fmt(weekEnd(p.we)),
  color: p.color,
}));

const out = `// Auto-generated · 150 weeks · Jul 4, 2026 → May 18, 2029
export const START = new Date('2026-07-04');
export const TOTAL_WEEKS = ${TOTAL_WEEKS};
export const TOTAL_DAYS = ${TOTAL_WEEKS * 7};
export const DEADLINE = 'May 18, 2029';
export const KODEKLOUD_WEEKS = ${PHASES.find((p) => p.name === 'KodeKloud DevOps & Cloud').weeks};
export const AWS_WEEKS = ${PHASES.find((p) => p.name === 'AWS').weeks};
export const AWS_PLAN_WEEK_START = ${PHASES.find((p) => p.name === 'AWS').ws};
export const STUDY_TIME = '5:30 AM – 8:30 AM IST · 3h daily';

export const BLOCKS = ${JSON.stringify(BLOCKS, null, 2)};

export const PHASES = ${JSON.stringify(PHASES, null, 2)};

export const MILESTONES = ${JSON.stringify(MILESTONES, null, 2)};
`;

const dest = join(__dirname, '../src/data/plan150weeks.js');
writeFileSync(dest, out);
console.log('Wrote', dest);
console.log('Weeks:', sumWeeks);
console.log('Last phase:', PHASES[PHASES.length - 1].period);
