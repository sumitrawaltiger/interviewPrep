import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const START = new Date('2026-07-04');
const TOTAL_WEEKS = 150;
const TOTAL_DAYS = TOTAL_WEEKS * 7;
const CLOUD_END_DAY = 30; // Jul 4 – Aug 2, 2026
const JS_START_DAY = 31; // Aug 3, 2026
const AWS_END_DAYS = 61;

function dayDate(dayNum) {
  const d = new Date(START);
  d.setDate(d.getDate() + dayNum - 1);
  return d;
}
function fmt(d) {
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
function fmtShort(d) {
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
function periodDays(ds, de) {
  const a = dayDate(ds);
  const b = dayDate(de);
  if (a.getFullYear() === b.getFullYear()) {
    return fmtShort(a) + ' – ' + fmt(b);
  }
  return fmtShort(a) + ', ' + a.getFullYear() + ' – ' + fmt(b);
}

const SKILLS = [
  {
    icon: '🎓', color: '#10B981', dark: '#059669', bg: '#ECFDF5', border: '#6EE7B7',
    name: 'KodeKloud DevOps, Cloud & AWS',
    aboutBody: 'KodeKloud subscription through Aug 2, 2026 · DevOps, Cloud & AWS — Linux, Docker, Kubernetes, CI/CD, Terraform, AWS/cloud labs on KodeKloud.',
    courses: ['KodeKloud — DevOps learning path', 'KodeKloud — Kubernetes for Beginners', 'KodeKloud — AWS / cloud labs'],
    wplan: [
      ['Linux & Docker', 'shell, containers, images, compose, multi-stage builds'],
      ['Kubernetes Core', 'pods, deployments, services, kubectl, YAML manifests'],
      ['CI/CD & Terraform', 'pipelines, GitHub Actions, IaC basics on KodeKloud'],
      ['Cloud & AWS on KodeKloud', 'AWS/cloud hands-on labs, exam drills — through Aug 2'],
    ],
  },
  {
    icon: '📜', color: '#EAB308', dark: '#CA8A04', bg: '#FEFCE8', border: '#FDE047',
    name: 'Javascript', weeks: 8,
    aboutBody: 'Coder Army Day of Thunder + advanced JS. Core language, async, closures, prototypes, modules.',
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
    icon: '🔷', color: '#2563EB', dark: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE',
    name: 'Typescript', weeks: 3,
    aboutBody: 'TypeScript strict mode: types, interfaces, generics, utility types, type guards.',
    courses: ['Coder Army — MERN Stack course', 'TypeScript Handbook (free)', 'Total TypeScript (Matt Pocock)'],
    wplan: [
      ['Types & Interfaces', 'primitives, arrays, objects, interfaces'],
      ['Functions & Generics', 'generic functions, constraints, keyof'],
      ['Advanced TS', 'union/intersection, utility types, strict tsconfig'],
    ],
  },
  {
    icon: '🟢', color: '#16A34A', dark: '#15803D', bg: '#F0FDF4', border: '#BBF7D0',
    name: 'ExpressJS', weeks: 3,
    aboutBody: 'Express.js: routing, middleware, REST APIs, JWT auth, MongoDB integration.',
    courses: ['Coder Army — MERN Stack course', 'Express.js official guide', 'The Net Ninja — Node/Express (YouTube)'],
    wplan: [
      ['Node & Express Core', 'event loop, modules, routing'],
      ['Middleware & APIs', 'validation, error handling, REST'],
      ['Auth & Project', 'JWT, bcrypt, MongoDB, deploy API'],
    ],
  },
  {
    icon: '⚛', color: '#0EA5E9', dark: '#0369A1', bg: '#F0F9FF', border: '#BAE6FD',
    name: 'React JS', weeks: 9,
    aboutBody: 'React 19 deep dive: components, hooks, state management, React Router, performance.',
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
    icon: '▲', color: '#171717', dark: '#000000', bg: '#F5F5F5', border: '#D4D4D4',
    name: 'Next JS', weeks: 6,
    aboutBody: 'Next.js via Anil Dollar: App Router, Server Components, Server Actions, auth, Vercel deploy.',
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
    icon: '📱', color: '#7C3AED', dark: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE',
    name: 'React Native', weeks: 6,
    aboutBody: 'React Native from ChaiCode: Expo, navigation, device APIs, EAS Build.',
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
    icon: '🐍', color: '#15803D', dark: '#166534', bg: '#F0FDF4', border: '#86EFAC',
    name: 'Python', weeks: 4,
    aboutBody: 'Python 3 from Ashok IT: fundamentals, OOP, decorators, asyncio.',
    courses: ['Ashok IT — Python (paid course)', 'Python official docs'],
    wplan: [
      ['Python Basics', 'syntax, data types, functions'],
      ['OOP & Advanced', 'classes, decorators, generators'],
      ['Async & IO', 'asyncio, file handling, context managers'],
      ['Libraries', 'pandas intro, scripting automation'],
    ],
  },
  {
    icon: '🎸', color: '#092E20', dark: '#051B14', bg: '#ECFDF5', border: '#6EE7B7',
    name: 'Django', weeks: 4,
    aboutBody: 'Django 5 + DRF: models, migrations, admin, serializers, viewsets.',
    courses: ['Dennis Ivy — Django (YouTube)', 'Django official docs', 'DRF docs'],
    wplan: [
      ['Django Core', 'models, migrations, admin'],
      ['DRF Basics', 'serializers, API views'],
      ['Auth & Permissions', 'token auth, throttling'],
      ['FPO Admin API', 'booking admin, deploy'],
    ],
  },
  {
    icon: '⚡', color: '#009688', dark: '#00796B', bg: '#E0F2F1', border: '#80CBC4',
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
    icon: '🤖', color: '#8B5CF6', dark: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE',
    name: 'Agentic AI', weeks: 10,
    aboutBody: 'Agentic AI from Ashok IT: LangChain, LangGraph, RAG, multi-agent systems.',
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
    icon: '☕', color: '#EA580C', dark: '#C2410C', bg: '#FFF7ED', border: '#FED7AA',
    name: 'J2SE', weeks: 4,
    aboutBody: 'Java SE: syntax, OOP, collections, streams, lambdas, Optional, records.',
    courses: ['Telusko — Java (YouTube)', 'John Thompson — Java Masterclass', 'Baeldung'],
    wplan: [
      ['Java Syntax & OOP', 'classes, inheritance, polymorphism'],
      ['Collections & Streams', 'ArrayList, HashMap, Stream API'],
      ['Modern Java', 'lambdas, Optional, records'],
      ['Concurrency', 'threads, ExecutorService'],
    ],
  },
  {
    icon: '🏢', color: '#0891B2', dark: '#0E7490', bg: '#ECFEFF', border: '#A5F3FC',
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
    icon: '🗄', color: '#7C3AED', dark: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE',
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
    icon: '🌱', color: '#6DB33F', dark: '#4E9A2E', bg: '#F0FDF4', border: '#86EFAC',
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
    icon: '🏛', color: '#E11D48', dark: '#BE123C', bg: '#FFF1F2', border: '#FECDD3',
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
    icon: '🔧', color: '#6366F1', dark: '#4338CA', bg: '#EEF2FF', border: '#C7D2FE',
    name: 'Devops', weeks: 11,
    aboutBody: 'DevOps from CloudFolks Hub: Docker, CI/CD, Terraform, monitoring, GitOps.',
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
    icon: '☸', color: '#326CE5', dark: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE',
    name: 'Kubernetes', weeks: 10,
    aboutBody: 'Kubernetes CKA/CKAD path: clusters, workloads, networking, storage, security, Helm.',
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
    icon: '🧮', color: '#059669', dark: '#047857', bg: '#ECFDF5', border: '#6EE7B7',
    name: 'Data Structures', weeks: 20,
    aboutBody: 'DSA deep dive: NeetCode 150 + Blind 75 patterns in Python and Java. 2–3 problems daily.',
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
    icon: '🏗', color: '#DC2626', dark: '#B91C1C', bg: '#FEF2F2', border: '#FECACA',
    name: 'System Design', weeks: 14,
    aboutBody: 'System Design: scalability, classic designs, FPO architecture, whiteboards, portfolio ADRs.',
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
      ['Portfolio Wrap-up', '10 ADRs in GitHub before final AWS block'],
    ],
  },
  {
    icon: '☁', color: '#D97706', dark: '#B45309', bg: '#FFFBEB', border: '#FDE68A',
    name: 'AWS',
    aboutBody: 'Final 61-day AWS block · CloudFolks Hub deep dive — IAM, VPC, EC2, S3, RDS, Lambda, ECS, CDK, SAA prep, FPO capstone. Ends May 18, 2029 🏆',
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
      ['CDK & Capstone', 'FPO AWS architecture + SAA exam prep — D1050 DONE 🏆'],
    ],
  },
];

const MAIN_SKILL_ORDER = [
  'Javascript', 'Typescript', 'ExpressJS', 'React JS', 'Next JS', 'React Native',
  'Python', 'Django', 'Fast API', 'Agentic AI', 'J2SE', 'J2EE', 'JPA', 'Spring Boot',
  'Microservices', 'Devops', 'Kubernetes', 'Data Structures', 'System Design',
];

const BLOCK_BY_SKILL = {
  'KodeKloud DevOps, Cloud & AWS': 'b0',
  Javascript: 'b1', Typescript: 'b1', ExpressJS: 'b1', 'React JS': 'b1', 'Next JS': 'b1', 'React Native': 'b1',
  Python: 'b2', Django: 'b2', 'Fast API': 'b2', 'Agentic AI': 'b2',
  J2SE: 'b3', J2EE: 'b3', JPA: 'b3', 'Spring Boot': 'b3', Microservices: 'b3',
  Devops: 'b4', Kubernetes: 'b4',
  'Data Structures': 'b5', 'System Design': 'b5',
  AWS: 'b6',
};

const byName = Object.fromEntries(SKILLS.map((s) => [s.name, s]));

function makeWplan(skill, ws, count) {
  const rows = skill.wplan.slice(0, count);
  while (rows.length < count) {
    const i = rows.length;
    rows.push(skill.wplan[i % skill.wplan.length]);
  }
  return rows.map((row, i) => ({
    w: ws + i,
    f: 'Week ' + (ws + i) + ': ' + row[0],
    t: row[1],
  }));
}

function buildPhase(skill, ds, de, seq, id, extra = {}) {
  const days = de - ds + 1;
  const weeks = skill.weeks ?? Math.ceil(days / 7);
  const ws = Math.ceil(ds / 7);
  const we = Math.ceil(de / 7);
  const wplanCount = skill.weeks ?? weeks;
  return {
    ...skill,
    id,
    seq,
    block: BLOCK_BY_SKILL[skill.name],
    label: skill.weeks ? weeks + ' weeks' : days + ' days',
    days,
    weeks,
    ws,
    we,
    ds,
    de,
    period: periodDays(ds, de),
    about: (ds === 1
      ? 'Jul 4 – Aug 2, 2026 · '
      : de === TOTAL_DAYS
        ? 'Final block · '
        : 'Weeks ' + ws + '–' + we + ' · ') + skill.aboutBody,
    ms: de === TOTAL_DAYS
      ? '150 Study Days Complete · D1050 · ' + skill.name
      : skill.name + ' Complete · W' + we,
    wplan: makeWplan(skill, ws, wplanCount),
    ...extra,
  };
}

const PHASES = [];
let seq = 1;

// 1. KodeKloud + Cloud + AWS intro (30 days, through Aug 2)
PHASES.push(buildPhase(byName['KodeKloud DevOps, Cloud & AWS'], 1, CLOUD_END_DAY, seq, 's' + seq));
seq++;

// 2. Main stack from Aug 3 (137 weeks)
let ds = JS_START_DAY;
for (const name of MAIN_SKILL_ORDER) {
  const skill = byName[name];
  const de = ds + skill.weeks * 7 - 1;
  PHASES.push(buildPhase(skill, ds, de, seq, 's' + seq));
  ds = de + 1;
  seq++;
}

// 3. Final AWS block (61 days)
const awsStart = ds;
const awsEnd = TOTAL_DAYS;
if (awsEnd - awsStart + 1 !== AWS_END_DAYS) {
  throw new Error('AWS end days mismatch: ' + (awsEnd - awsStart + 1) + ' !== ' + AWS_END_DAYS);
}
PHASES.push(buildPhase(byName.AWS, awsStart, awsEnd, seq, 's' + seq, {
  scheduleLink: '#/aws-100-days',
}));

if (PHASES[PHASES.length - 1].de !== TOTAL_DAYS) {
  throw new Error('Plan does not end on day ' + TOTAL_DAYS);
}

const sumWeeks = PHASES.reduce((a, p) => a + p.weeks, 0);

const BLOCK_META = {
  b0: { icon: '🎓', col: '#10B981', title: 'KodeKloud DevOps, Cloud & AWS', detail: 'Jul 4 – Aug 2, 2026 · 30 days · KodeKloud subscription' },
  b1: { icon: '🎓', col: '#E11D48', title: 'JavaScript Ecosystem', detail: 'Javascript → Typescript → ExpressJS → React → Next JS → React Native' },
  b2: { icon: '🐍', col: '#15803D', title: 'Python Stack', detail: 'Python → Django → Fast API → Agentic AI' },
  b3: { icon: '☕', col: '#EA580C', title: 'Java Backend', detail: 'J2SE → J2EE → JPA → Spring Boot → Microservices' },
  b4: { icon: '🔧', col: '#6366F1', title: 'DevOps & Kubernetes', detail: 'DevOps → Kubernetes' },
  b5: { icon: '🎯', col: '#7C3AED', title: 'Interview Readiness', detail: 'Data Structures → System Design' },
  b6: { icon: '☁', col: '#D97706', title: 'AWS Final Block', detail: '61 days · CloudFolks Hub · SAA prep + FPO capstone', scheduleLink: '#/aws-100-days' },
};

const BLOCKS = Object.entries(BLOCK_META).map(([id, meta]) => {
  const phases = PHASES.filter((p) => p.block === id);
  const bws = phases[0].ws;
  const bwe = phases[phases.length - 1].we;
  const bds = phases[0].ds;
  const bde = phases[phases.length - 1].de;
  return {
    id,
    icon: meta.icon,
    col: meta.col,
    title: meta.title,
    sub: 'W' + bws + '–W' + bwe + ' · ' + periodDays(bds, bde),
    detail: meta.detail,
    time: '5:30 AM – 8:30 AM IST · 3h daily',
    ...(meta.scheduleLink ? { scheduleLink: meta.scheduleLink } : {}),
  };
});

const MILESTONES = PHASES.map((p) => ({
  week: p.we,
  day: p.de,
  icon: p.icon,
  label: p.de === TOTAL_DAYS ? 'Plan Complete · ' + p.name : p.name + ' Done',
  date: fmt(dayDate(p.de)),
  color: p.color,
}));

const cloudPhase = PHASES[0];
const awsFinal = PHASES[PHASES.length - 1];

const out = `// Auto-generated · 150 weeks · Jul 4, 2026 → May 18, 2029
export const START = new Date('2026-07-04');
export const TOTAL_WEEKS = ${TOTAL_WEEKS};
export const TOTAL_DAYS = ${TOTAL_DAYS};
export const DEADLINE = 'May 18, 2029';
export const CLOUD_END_DAY = ${CLOUD_END_DAY};
export const JS_START_DAY = ${JS_START_DAY};
export const KODEKLOUD_END = 'Aug 2, 2026';
export const AWS_END_DAYS = ${AWS_END_DAYS};
export const AWS_PLAN_START = ${awsFinal.ds};
export const AWS_PLAN_WEEK_START = ${awsFinal.ws};
export const STUDY_TIME = '5:30 AM – 8:30 AM IST · 3h daily';

export const BLOCKS = ${JSON.stringify(BLOCKS, null, 2)};

export const PHASES = ${JSON.stringify(PHASES, null, 2)};

export const MILESTONES = ${JSON.stringify(MILESTONES, null, 2)};
`;

const dest = join(__dirname, '../src/data/plan150weeks.js');
writeFileSync(dest, out);
console.log('Wrote', dest);
console.log('Phases:', PHASES.length);
console.log('First:', PHASES[0].name, PHASES[0].period);
console.log('JS:', PHASES[1].name, PHASES[1].period);
console.log('Last AWS:', awsFinal.period, 'D' + awsFinal.ds + '-D' + awsFinal.de);
console.log('Sum weeks (approx):', sumWeeks);
