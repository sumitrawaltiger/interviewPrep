import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const START = new Date('2026-07-05');
const END = new Date('2030-07-04');
const TOTAL_YEARS = 4;
const TOTAL_DAYS = Math.floor((END - START) / 86400000) + 1; // 1461 days · Jul 5, 2026 → Jul 4, 2030
const ALLOC_WEEKS = Math.floor(TOTAL_DAYS / 7); // 208 full weeks; last skill absorbs remaining days
const TOTAL_WEEKS = Math.ceil(TOTAL_DAYS / 7); // 209 (final week is partial)
const DEADLINE_STR = 'Jul 4, 2030';
const START_ISO = '2026-07-05';
const END_ISO = '2030-07-04';
const WAKE_TIME = '4:00 AM BKK daily';
const STUDY_TIME_STR = '5:00 AM – 8:00 AM BKK · 3h daily';

function dayDate(dayNum) {
  const d = new Date(START);
  d.setDate(d.getDate() + dayNum - 1);
  return d;
}
function dayNum(date) {
  return Math.floor((date - START) / 86400000) + 1;
}
function dayPeriod(ds, de) {
  const a = dayDate(ds);
  const b = dayDate(de);
  if (a.getTime() === b.getTime()) return fmt(a);
  if (a.getFullYear() === b.getFullYear()) {
    return fmtShort(a) + ' – ' + fmt(b);
  }
  return fmtShort(a) + ', ' + a.getFullYear() + ' – ' + fmt(b);
}
function studyWeekOf(day) {
  return Math.ceil(day / 7);
}
function fmt(d) {
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
function fmtShort(d) {
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// 20 skills · 4 years · Jul 5, 2026 → Jul 4, 2030 · wake 4 AM · study 5–8 AM BKK

function scaleWeeks(baseWeeks, targetTotal) {
  const baseSum = baseWeeks.reduce((a, b) => a + b, 0);
  const scaled = baseWeeks.map((w) => Math.floor((w * targetTotal) / baseSum));
  const fracs = baseWeeks.map((w, i) => ({
    i,
    frac: (w * targetTotal) / baseSum - scaled[i],
  }));
  let rem = targetTotal - scaled.reduce((a, b) => a + b, 0);
  fracs.sort((a, b) => b.frac - a.frac);
  for (let k = 0; k < rem; k++) scaled[fracs[k % fracs.length].i]++;
  return scaled;
}

function expandWplan(wplan, weeks) {
  if (wplan.length >= weeks) return wplan.slice(0, weeks);
  const out = [...wplan];
  while (out.length < weeks) {
    const src = wplan[out.length % wplan.length];
    const n = Math.floor(out.length / wplan.length) + 1;
    out.push([src[0] + (n > 1 ? ' · Deep dive ' + n : ' · Practice'), src[1] + ' — extended hands-on']);
  }
  return out;
}

const BASE_WEEKS = [
  8, 3, 9, 6, 6, 4, 4, 4, 3, 10, 4, 4, 3, 8, 7, 11, 14, 10, 16, 16,
];
const SCALED_WEEKS = scaleWeeks(BASE_WEEKS, ALLOC_WEEKS);

const SKILL_DEFS = [
  {
    icon: '📜', color: '#EAB308', dark: '#CA8A04', bg: '#FEFCE8', border: '#FDE047', block: 'b0',
    name: 'Javascript', weeks: 8,
    aboutBody: 'Coder Army Day of Thunder + advanced JS. Core language, async, closures, prototypes, modules.',
    courses: ['Coder Army — MERN course', 'javascript.info', 'MDN Web Docs'],
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
    icon: '🔷', color: '#2563EB', dark: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE', block: 'b0',
    name: 'Typescript', weeks: 3,
    aboutBody: 'TypeScript strict mode: types, interfaces, generics, utility types, type guards.',
    courses: ['TypeScript Handbook', 'Total TypeScript (Matt Pocock)', 'Coder Army MERN'],
    wplan: [
      ['Types & Interfaces', 'primitives, arrays, objects, interfaces'],
      ['Functions & Generics', 'generic functions, constraints, keyof'],
      ['Advanced TS', 'union/intersection, utility types, strict tsconfig'],
    ],
  },
  {
    icon: '⚛', color: '#0EA5E9', dark: '#0369A1', bg: '#F0F9FF', border: '#BAE6FD', block: 'b0',
    name: 'React JS', weeks: 9,
    aboutBody: 'React 19 deep dive: components, hooks, state management, React Router, performance.',
    courses: ['react.dev', 'Coder Army MERN', 'Jack Herrington — React patterns'],
    wplan: [
      ['React Core', 'components, JSX, props, state'],
      ['Hooks I', 'useEffect, useRef, useMemo, useCallback'],
      ['Hooks II', 'useContext, useReducer, custom hooks'],
      ['Routing', 'React Router v6, nested routes, loaders'],
      ['State Management', 'context patterns, Zustand intro'],
      ['Forms & Validation', 'controlled inputs, react-hook-form'],
      ['API Integration', 'fetch, React Query, error boundaries'],
      ['Performance', 'memo, lazy, Suspense, profiling'],
      ['React Capstone', 'full-stack UI project'],
    ],
  },
  {
    icon: '▲', color: '#171717', dark: '#000000', bg: '#F5F5F5', border: '#D4D4D4', block: 'b0',
    name: 'Next JS', weeks: 6,
    aboutBody: 'Next.js: App Router, Server Components, Server Actions, auth, Vercel deploy.',
    courses: ['Anil Dollar — Next.js (Udemy)', 'nextjs.org'],
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
    icon: '📱', color: '#7C3AED', dark: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE', block: 'b0',
    name: 'React Native', weeks: 6,
    aboutBody: 'React Native from ChaiCode: Expo, navigation, device APIs, EAS Build.',
    courses: ['ChaiCode — React Native', 'Expo docs', 'React Navigation docs'],
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
    icon: '🟢', color: '#16A34A', dark: '#15803D', bg: '#F0FDF4', border: '#BBF7D0', block: 'b0',
    name: 'Node JS', weeks: 4,
    aboutBody: 'Node.js runtime: event loop, modules, Express, REST APIs, auth, MongoDB, deployment.',
    courses: ['Node.js official docs', 'Express.js guide', 'The Net Ninja — Node/Express'],
    wplan: [
      ['Node Core', 'event loop, modules, npm, file system'],
      ['Express & REST', 'routing, middleware, validation, error handling'],
      ['Auth & Database', 'JWT, bcrypt, MongoDB/Mongoose'],
      ['Node Capstone', 'full CRUD API, deploy, Postman'],
    ],
  },
  {
    icon: '🐍', color: '#15803D', dark: '#166534', bg: '#F0FDF4', border: '#86EFAC', block: 'b1',
    name: 'Python', weeks: 4,
    aboutBody: 'Python 3 from Ashok IT: fundamentals, OOP, decorators, asyncio.',
    courses: ['Ashok IT — Python', 'Python official docs'],
    wplan: [
      ['Python Basics', 'syntax, data types, functions'],
      ['OOP & Advanced', 'classes, decorators, generators'],
      ['Async & IO', 'asyncio, file handling, context managers'],
      ['Libraries', 'pandas intro, scripting automation'],
    ],
  },
  {
    icon: '🎸', color: '#092E20', dark: '#051B14', bg: '#ECFDF5', border: '#6EE7B7', block: 'b1',
    name: 'Django', weeks: 4,
    aboutBody: 'Django 5 + DRF: models, migrations, admin, serializers, viewsets.',
    courses: ['Dennis Ivy — Django', 'Django official docs', 'DRF docs'],
    wplan: [
      ['Django Core', 'models, migrations, admin'],
      ['DRF Basics', 'serializers, API views'],
      ['Auth & Permissions', 'token auth, throttling'],
      ['FPO Admin API', 'booking admin, deploy'],
    ],
  },
  {
    icon: '⚡', color: '#009688', dark: '#00796B', bg: '#E0F2F1', border: '#80CBC4', block: 'b1',
    name: 'Fast API', weeks: 3,
    aboutBody: 'FastAPI: async routes, Pydantic v2, dependency injection, OAuth2, SQLAlchemy.',
    courses: ['FastAPI official docs', 'TestDriven.io — FastAPI'],
    wplan: [
      ['FastAPI Core', 'routes, Pydantic models'],
      ['Database Layer', 'SQLAlchemy, Alembic'],
      ['Auth & Deploy', 'OAuth2, JWT, Dockerize API'],
    ],
  },
  {
    icon: '🤖', color: '#8B5CF6', dark: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE', block: 'b1',
    name: 'Agentic AI', weeks: 10,
    aboutBody: 'Agentic AI from Ashok IT: LangChain, LangGraph, RAG, multi-agent systems.',
    courses: ['Ashok IT — Agentic AI', 'LangGraph docs', 'LangChain docs'],
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
    icon: '☕', color: '#EA580C', dark: '#C2410C', bg: '#FFF7ED', border: '#FED7AA', block: 'b2',
    name: 'J2SE', weeks: 4,
    aboutBody: 'Java SE: syntax, OOP, collections, streams, lambdas, Optional, records.',
    courses: ['Telusko — Java', 'John Thompson — Java Masterclass', 'Baeldung'],
    wplan: [
      ['Java Syntax & OOP', 'classes, inheritance, polymorphism'],
      ['Collections & Streams', 'ArrayList, HashMap, Stream API'],
      ['Modern Java', 'lambdas, Optional, records'],
      ['Concurrency', 'threads, ExecutorService'],
    ],
  },
  {
    icon: '🏢', color: '#0891B2', dark: '#0E7490', bg: '#ECFEFF', border: '#A5F3FC', block: 'b2',
    name: 'J2EE', weeks: 4,
    aboutBody: 'Jakarta EE: Servlets, JSP, JNDI, JDBC, connection pooling.',
    courses: ['Telusko — Servlet & JSP', 'Java Brains — J2EE', 'Head First Servlets & JSP'],
    wplan: [
      ['Servlets', 'lifecycle, request/response, sessions'],
      ['JSP & JSTL', 'JSP tags, EL, JSTL'],
      ['JDBC & JNDI', 'DataSource, pooling'],
      ['EE Architecture', 'deploy WAR, Tomcat'],
    ],
  },
  {
    icon: '🗄', color: '#7C3AED', dark: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE', block: 'b2',
    name: 'JPA', weeks: 3,
    aboutBody: 'JPA/Hibernate: @Entity, relationships, JPQL, Spring Data JPA, N+1 problem.',
    courses: ['Java Brains — JPA & Hibernate', 'Baeldung — JPA', 'Spring Data JPA docs'],
    wplan: [
      ['JPA Entities', '@Entity, @Id, relationships'],
      ['Queries', 'JPQL, Criteria API'],
      ['Spring Data JPA', 'JpaRepository, N+1 fix, caching'],
    ],
  },
  {
    icon: '🌱', color: '#6DB33F', dark: '#4E9A2E', bg: '#F0FDF4', border: '#86EFAC', block: 'b2',
    name: 'Spring Boot', weeks: 8,
    aboutBody: 'Spring Boot 3: REST APIs, Spring Security + OAuth2, OpenAPI, testing.',
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
    icon: '🏛', color: '#E11D48', dark: '#BE123C', bg: '#FFF1F2', border: '#FECDD3', block: 'b2',
    name: 'Microservices', weeks: 7,
    aboutBody: 'Microservices: Spring Cloud, Kafka, Resilience4j, CQRS, saga patterns.',
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
    icon: '🔧', color: '#6366F1', dark: '#4338CA', bg: '#EEF2FF', border: '#C7D2FE', block: 'b3',
    name: 'Devops', weeks: 11,
    aboutBody: 'DevOps from CloudFolks Hub: Docker, CI/CD, Terraform, monitoring, GitOps.',
    courses: ['CloudFolks Hub — DevOps', 'Docker docs', 'Terraform docs'],
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
    icon: '☁', color: '#D97706', dark: '#B45309', bg: '#FFFBEB', border: '#FDE68A', block: 'b3',
    name: 'AWS', weeks: 14,
    aboutBody: 'CloudFolks Hub + hands-on labs. IAM, VPC, EC2, S3, RDS, Lambda, ECS, CDK, SAA prep.',
    courses: ['CloudFolks Hub — AWS Cloud', 'AWS Skill Builder', 'AWS Official Documentation'],
    wplan: [
      ['IAM & Account', 'users, roles, policies, MFA, CLI'],
      ['VPC Networking', 'subnets, IGW, NAT, SGs, endpoints'],
      ['EC2 & Load Balancing', 'EC2, EBS, ALB, ASG'],
      ['S3 Storage', 'buckets, versioning, lifecycle'],
      ['RDS & DynamoDB', 'RDS, Aurora, DynamoDB'],
      ['Lambda & API Gateway', 'serverless APIs, triggers'],
      ['Cognito & Orchestration', 'user pools, Step Functions'],
      ['ECS, EKS & ECR', 'containers on AWS, Fargate'],
      ['Messaging & DNS', 'SQS, SNS, Route 53, CloudFront'],
      ['Monitoring & Cost', 'CloudWatch, billing, Well-Architected'],
      ['Security & Compliance', 'KMS, WAF, shared responsibility'],
      ['Advanced Services', 'ElastiCache, OpenSearch, EventBridge'],
      ['CDK & Labs', 'IaC patterns, FPO architecture draft'],
      ['SAA Capstone', 'practice exams, weak-area drills'],
    ],
  },
  {
    icon: '☸', color: '#326CE5', dark: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE', block: 'b3',
    name: 'Kubernetes', weeks: 10,
    aboutBody: 'Kubernetes CKA/CKAD path: clusters, workloads, networking, storage, security, Helm.',
    courses: ['KodeKloud — CKA/CKAD', 'Kubernetes official docs', 'Killer.sh practice'],
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
    icon: '🧮', color: '#059669', dark: '#047857', bg: '#ECFDF5', border: '#6EE7B7', block: 'b4',
    name: 'Data Structures', weeks: 16,
    aboutBody: 'All in One Interview Preparation bundle — DSA track. Core patterns, topic-wise problems, 2–3 daily. Bundle expires Jul 4, 2030.',
    courses: ['All in One Interview Preparation — DSA', 'LeetCode', 'Striver A2Z DSA'],
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
      ['Mock Rounds', '5 full timed mock interviews'],
    ],
  },
  {
    icon: '🏗', color: '#DC2626', dark: '#B91C1C', bg: '#FEF2F2', border: '#FECACA', block: 'b4',
    name: 'System Design', weeks: 16,
    aboutBody: 'All in One Interview Preparation bundle — System Design, DBMS, OS & Computer Networks. Classic designs, FPO architecture, mock interviews.',
    courses: ['All in One Interview Preparation — System Design', 'DBMS · OS · Computer Networks', 'ByteByteGo'],
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
      ['Portfolio ADRs I', 'document 5 classic designs'],
      ['Portfolio ADRs II', 'document 5 more designs'],
      ['Final Portfolio', '10 ADRs in GitHub — 4-year plan DONE 🏆'],
    ],
  },
];

SKILL_DEFS.forEach((s, i) => {
  s.weeks = SCALED_WEEKS[i];
  s.wplan = expandWplan(s.wplan, s.weeks);
});

let ds = 1;
const PHASES = SKILL_DEFS.map((s, i) => {
  const isLast = i === SKILL_DEFS.length - 1;
  const days = isLast ? TOTAL_DAYS - ds + 1 : s.weeks * 7;
  const de = ds + days - 1;
  const ws = studyWeekOf(ds);
  const we = studyWeekOf(de);
  const phase = {
    id: 's' + (i + 1),
    seq: i + 1,
    block: s.block,
    icon: s.icon,
    color: s.color,
    dark: s.dark,
    bg: s.bg,
    border: s.border,
    name: s.name,
    label: isLast && days % 7 !== 0
      ? s.weeks + ' weeks + ' + (days % 7) + ' days'
      : s.weeks + ' weeks',
    days,
    weeks: s.weeks,
    ws,
    we,
    ds,
    de,
    period: dayPeriod(ds, de),
    about: 'Weeks ' + ws + '–' + we + ' · ' + s.aboutBody,
    ms: isLast
      ? TOTAL_YEARS + '-Year Plan Complete · ' + DEADLINE_STR + ' · ' + s.name
      : s.name + ' Complete · W' + we,
    courses: s.courses,
    wplan: s.wplan.map((row, j) => ({
      w: ws + j,
      f: 'Week ' + (ws + j) + ': ' + row[0],
      t: row[1],
    })),
    ...(s.name === 'AWS' ? { scheduleLink: '#/aws-100-days' } : {}),
  };
  ds = de + 1;
  return phase;
});

const sumWeeks = PHASES.reduce((a, p) => a + p.weeks, 0);
if (sumWeeks !== ALLOC_WEEKS) throw new Error('Week sum ' + sumWeeks + ' !== ' + ALLOC_WEEKS);
if (PHASES[PHASES.length - 1].de !== TOTAL_DAYS) {
  throw new Error('End day ' + PHASES.at(-1).de + ' !== ' + TOTAL_DAYS);
}

const BLOCK_META = {
  b0: { icon: '🎓', col: '#E11D48', title: 'JavaScript Ecosystem', detail: 'Javascript → Typescript → React → Next JS → React Native → Node JS' },
  b1: { icon: '🐍', col: '#15803D', title: 'Python Stack', detail: 'Python → Django → Fast API → Agentic AI' },
  b2: { icon: '☕', col: '#EA580C', title: 'Java Backend', detail: 'J2SE → J2EE → JPA → Spring Boot → Microservices' },
  b3: { icon: '🔧', col: '#6366F1', title: 'DevOps, AWS & Kubernetes', detail: 'DevOps → AWS → Kubernetes' },
  b4: { icon: '🎯', col: '#7C3AED', title: 'Interview Readiness', detail: 'DSA → System Design · All in One Bundle (expires Jul 4, 2030)' },
};

const BLOCKS = Object.entries(BLOCK_META).map(([id, meta]) => {
  const phases = PHASES.filter((p) => p.block === id);
  return {
    id,
    icon: meta.icon,
    col: meta.col,
    title: meta.title,
    sub: 'W' + phases[0].ws + '–W' + phases.at(-1).we + ' · ' + dayPeriod(phases[0].ds, phases.at(-1).de),
    detail: meta.detail,
    time: STUDY_TIME_STR,
    ...(meta.scheduleLink ? { scheduleLink: meta.scheduleLink } : {}),
  };
});

const YEARS = Array.from({ length: TOTAL_YEARS }, (_, i) => {
  const yStart = new Date(START);
  yStart.setFullYear(yStart.getFullYear() + i);
  const yEnd = new Date(START);
  yEnd.setFullYear(yEnd.getFullYear() + i + 1);
  yEnd.setDate(yEnd.getDate() - 1);
  const yds = dayNum(yStart);
  const yde = dayNum(yEnd);
  const phases = PHASES.filter((p) => p.ds <= yde && p.de >= yds);
  return {
    n: i + 1,
    ds: yds,
    de: yde,
    ws: studyWeekOf(yds),
    we: studyWeekOf(yde),
    label: 'Year ' + (i + 1),
    period: fmt(yStart) + ' – ' + fmt(yEnd),
    skills: phases.map((p) => p.name),
    phaseIds: phases.map((p) => p.id),
  };
});

const MILESTONES = PHASES.map((p) => ({
  week: p.we,
  day: p.de,
  icon: p.icon,
  label: p.de === TOTAL_DAYS ? TOTAL_YEARS + '-Year Plan Complete' : p.name + ' Done',
  date: p.de === TOTAL_DAYS ? DEADLINE_STR : fmt(dayDate(p.de)),
  color: p.color,
}));

const awsPhase = PHASES.find((p) => p.name === 'AWS');
const jsPhase = PHASES.find((p) => p.name === 'Javascript');

const out = `// Auto-generated · 20 skills · ${TOTAL_YEARS} years · Jul 5, 2026 → ${DEADLINE_STR} · ${TOTAL_DAYS} days
export const START = new Date('${START_ISO}');
export const END = new Date('${END_ISO}');
export const TOTAL_YEARS = ${TOTAL_YEARS};
export const TOTAL_WEEKS = ${TOTAL_WEEKS};
export const TOTAL_DAYS = ${TOTAL_DAYS};
export const SKILL_COUNT = 20;
export const DEADLINE = '${DEADLINE_STR}';
export const AWS_PLAN_START = ${awsPhase.ds};
export const JS_PLAN_START = ${jsPhase.ds};
export const WAKE_TIME = '${WAKE_TIME}';
export const STUDY_TIME = '${STUDY_TIME_STR}';

export const YEARS = ${JSON.stringify(YEARS, null, 2)};

export const BLOCKS = ${JSON.stringify(BLOCKS, null, 2)};

export const PHASES = ${JSON.stringify(PHASES, null, 2)};

export const MILESTONES = ${JSON.stringify(MILESTONES, null, 2)};
`;

writeFileSync(join(__dirname, '../src/data/plan150weeks.js'), out);
console.log('Wrote plan150weeks.js');
console.log('Skills:', PHASES.length, '· Weeks:', sumWeeks, '· Years:', TOTAL_YEARS);
console.log('AWS:', awsPhase.period);
console.log('JS:', jsPhase.period);
console.log('End:', PHASES.at(-1).period, '·', DEADLINE_STR, '· Day', TOTAL_DAYS);
