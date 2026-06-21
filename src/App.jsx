import { useState } from 'react';

// 1052 Study Days + 12-Day Vipassana Break = 1064 Calendar Days
// Sat Jun 20, 2026 to Fri May 18, 2029
// Block 1 D1-D487: 5:30-8:30 AM (3h) · Block 2-3 D488-D1052: 6:45-8:45 AM (2h)
// Vipassana break Oct 20-31 2027 (not counted) · Vipassana morning 5:30-6:35 AM from Nov 1 2027

const START = new Date('2026-06-20');
const TOTAL = 1052;
const VIP_START = new Date('2027-10-20'); // Vipassana break starts
const VIP_END = new Date('2027-10-31'); // Vipassana break ends
const STUDY_END = new Date('2029-05-18'); // Final day D1052

const BLOCKS = [
  {
    id: 'devops',
    label: '🔧 DevOps',
    sub: 'Months 1-3 · D1-D93 · Jun 20 – Sep 20, 2026',
    col: '#D97706',
    months: 3,
  },
  {
    id: 'frontend',
    label: '⚡ Frontend',
    sub: 'Months 4-8 · D94-D247 · Sep 21, 2026 – Feb 21, 2027',
    col: '#0EA5E9',
    months: 5,
  },
  {
    id: 'python',
    label: '🐍 Python',
    sub: 'Months 9-11 · D248-D337 · Feb 22 – May 22, 2027',
    col: '#16A34A',
    months: 3,
  },
  {
    id: 'java',
    label: '☕ Java',
    sub: 'Months 12-16 · D338-D487 · May 23 – Oct 19, 2027',
    col: '#D97706',
    months: 5,
  },
  {
    id: 'vipassana_break',
    label: '🧘 Vipassana Camp',
    sub: 'Oct 20–31, 2027 · 12-day break · Not counted',
    col: '#9B6DFF',
    months: null,
    isBreak: true,
  },
  {
    id: 'dsa',
    label: '🧩 Data Structures',
    sub: 'D488-D851 · Nov 1, 2027 – Oct 29, 2028 · 52 weeks · 6:45-8:45 AM daily',
    col: '#6366F1',
    months: null,
  },
  {
    id: 'sd',
    label: '🏗 System Design',
    sub: 'D852-D1052 · Oct 30, 2028 – May 18, 2029 · 28 weeks · 6:45-8:45 AM daily',
    col: '#7C3AED',
    months: null,
  },
];

const PHASES = [
  // ── BLOCK 1: DEVOPS (3 months) ──────────────────────────────────────────
  {
    id: 'm01',
    seq: 1,
    block: 'devops',
    icon: '🔧',
    color: '#D97706',
    dark: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'DevOps with AWS',
    days: 31,
    ds: 1,
    de: 31,
    period: 'Jun 20 - Jul 20, 2026',
    ms: 'DevOps with AWS Done · D31',
    about:
      '31 days. DevOps on AWS — IAM, EC2, S3, VPC, ECS Fargate, ECR, CI/CD (CodePipeline/CodeBuild/CodeDeploy + GitHub Actions OIDC), Docker, Jenkins, SonarQube, AWS CDK TypeScript (your FPO IaC!), Terraform. Everything maps directly to your FPO Cloud daily work.',
    courses: [
      'Stephane Maarek — AWS Certified Developer Associate 2026 (Udemy)',
      'Nana Janashia TechWorld — DevOps Bootcamp (YouTube/Udemy) · Docker, Jenkins, GitHub Actions',
      'AWS Skill Builder — free hands-on labs daily · CodePipeline, CodeBuild, ECS labs',
      'AWS CDK TypeScript docs — you already use this for FPO infrastructure as code',
    ],
    wplan: [
      {
        w: 1,
        f: 'AWS Core: IAM + EC2 + S3 + VPC',
        t: 'IAM users/roles/policies/MFA, EC2 instance types/AMI/EBS, S3 buckets/policies/versioning/encryption, VPC/subnets/Security Groups',
      },
      {
        w: 2,
        f: 'Docker on AWS: ECR + ECS Fargate',
        t: 'Dockerfile/multi-stage builds, ECR push/pull, ECS task definitions/Fargate/services, ALB + ECS integration, health checks',
      },
      {
        w: 3,
        f: 'CI/CD: GitHub Actions + CodePipeline + Jenkins',
        t: 'GitHub Actions OIDC to AWS (keyless auth), CodePipeline/CodeBuild/CodeDeploy, Jenkins declarative pipelines, SonarQube quality gates',
      },
      {
        w: 4,
        f: 'AWS CDK + Terraform + IaC',
        t: 'CDK TypeScript stacks/constructs (your FPO pattern!). Terraform HCL, providers, modules, S3 remote state, workspaces.',
      },
      {
        w: 5,
        f: 'Projects',
        t: 'End-to-end CI/CD pipeline (GitHub → ECS), containerise Flask app with ECR/ECS, Terraform AWS infra provisioning project.',
      },
    ],
  },
  {
    id: 'm02',
    seq: 2,
    block: 'devops',
    icon: '🛡',
    color: '#0369A1',
    dark: '#1e40af',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    name: 'SRE with AWS',
    days: 31,
    ds: 32,
    de: 62,
    period: 'Jul 21 - Aug 20, 2026',
    ms: 'SRE with AWS Done · D62',
    about:
      '31 days. Site Reliability Engineering on AWS — Lambda (your FPO!), Step Functions (your FPO workflows!), EventBridge (your FPO events!), SQS/SNS, DynamoDB (your FPO DB!), CloudWatch, Datadog APM (your FPO tool!), X-Ray tracing. SLOs/SLIs/error budgets, incident response, blameless post-mortems.',
    courses: [
      'Stephane Maarek — AWS Solutions Architect SAA-C03 (Udemy) · architecture + reliability',
      'Google SRE Book (free — sre.google) · chapters 1-10: SLOs, error budgets, on-call, post-mortems',
      'Datadog docs — APM, distributed tracing, SLO monitoring (your live FPO tool — go deep!)',
      'AWS re:Invent — Serverless best practices talks (Lambda/Step Functions from your FPO stack)',
    ],
    wplan: [
      {
        w: 6,
        f: 'Lambda + Step Functions + EventBridge',
        t: 'Lambda layers/concurrency/cold starts, Step Functions Express vs Standard (YOUR FPO!), EventBridge rules/buses/pipes (YOUR FPO events!)',
      },
      {
        w: 7,
        f: 'SQS + SNS + DynamoDB + Kinesis',
        t: 'SQS queues/DLQ/FIFO, SNS topics/subscriptions, DynamoDB tables/GSI/streams/TTL (YOUR FPO DB!), Kinesis streams',
      },
      {
        w: 8,
        f: 'CloudWatch + X-Ray + Datadog',
        t: 'CloudWatch metrics/alarms/dashboards/Logs Insights, X-Ray distributed tracing, Datadog APM — extend your FPO monitoring',
      },
      {
        w: 9,
        f: 'SRE Principles + Incident Response',
        t: 'SLOs/SLIs/SLAs, error budgets, toil reduction. Incident severity, runbooks, on-call rotations, blameless post-mortems, MTTR',
      },
      {
        w: 10,
        f: 'Projects',
        t: 'SLO dashboard on CloudWatch, FPO-style serverless pipeline (Lambda + Step Functions + EventBridge + DynamoDB), post-mortem template.',
      },
    ],
  },
  {
    id: 'm03',
    seq: 3,
    block: 'devops',
    icon: '🔬',
    color: '#4338CA',
    dark: '#3730A3',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'QE with AWS',
    days: 31,
    ds: 63,
    de: 93,
    period: 'Aug 21 - Sep 20, 2026',
    ms: 'QE with AWS Done · D93',
    about:
      '31 days. Quality Engineering on AWS — EKS (Kubernetes), Cognito (your FPO auth!), Secrets Manager/KMS, WAF, AWS Organizations/Control Tower (your LZA work!). Test automation: Jest, Playwright, Postman/Newman, BDD Cucumber (maps to your Reqnroll/SpecFlow on FPO!), k6 performance testing. SAA-C03 exam prep.',
    courses: [
      'Tutorials Dojo — SAA-C03 Practice Exams 600+ questions · AWS certification prep',
      'Mumshad Mannambeth — Kubernetes for Beginners (KodeKloud) · EKS hands-on',
      'Playwright docs + Cucumber.js · test automation (maps to your Reqnroll BDD on FPO)',
      'AWS Cognito docs — user pools/identity pools/JWT (your exact FPO auth pattern)',
    ],
    wplan: [
      {
        w: 11,
        f: 'EKS + Helm + ArgoCD',
        t: 'EKS cluster/kubectl/Pods/Deployments/Services/Ingress, Helm charts (install/upgrade/rollback), ArgoCD GitOps pipeline',
      },
      {
        w: 12,
        f: 'Cognito + Secrets Manager + Security',
        t: 'Cognito user pools/identity pools/JWT (YOUR FPO auth!), Secrets Manager, KMS, WAF/Shield, IAM best practices',
      },
      {
        w: 13,
        f: 'AWS Organizations + Well-Architected',
        t: 'Organizations/SCPs, Control Tower (your LZA work!), Well-Architected 6 pillars, Trusted Advisor, cost optimization',
      },
      {
        w: 14,
        f: 'Test Automation: Jest + Playwright + BDD',
        t: 'Jest unit tests, Playwright/Cypress e2e, Postman/Newman API, BDD Cucumber/Gherkin (= your Reqnroll on FPO!), k6 load testing',
      },
      {
        w: 15,
        f: 'SAA-C03 Mock Exams + Projects',
        t: 'Tutorials Dojo 600 questions, weak area revision. k6 load testing on AWS infra. SonarQube quality gates. SAA-C03 exam ready.',
      },
    ],
  },

  // ── BLOCK 2: FRONTEND (5 months) ────────────────────────────────────────
  {
    id: 'm04',
    seq: 4,
    block: 'frontend',
    icon: '🟨',
    color: '#F59E0B',
    dark: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'JavaScript',
    days: 31,
    ds: 94,
    de: 124,
    period: 'Sep 21 - Oct 21, 2026',
    ms: 'JavaScript Done · D124',
    about:
      '31 days. JavaScript from fundamentals to advanced. ES6+ features, DOM, Promises, async/await, closures, prototypes, classes. Build 3 projects. Foundation for TypeScript, React, Next.js months ahead.',
    courses: [
      'Jonas Schmedtmann — The Complete JavaScript Course 2026 (Udemy, 69h) · most comprehensive',
      'javascript.info — free online book, best JS reference alongside the course',
    ],
    wplan: [
      {
        w: 16,
        f: 'JS Fundamentals',
        t: 'Variables (let/const/var), data types, operators, control flow, loops, functions, scope, hoisting',
      },
      {
        w: 17,
        f: 'ES6+ Modern JS',
        t: 'Arrow functions, destructuring, spread/rest, template literals, optional chaining, nullish coalescing, modules (import/export)',
      },
      {
        w: 18,
        f: 'DOM + Async JS',
        t: 'DOM manipulation, events, event delegation. Promises (.then/.catch), async/await, fetch API, error handling, JSON',
      },
      {
        w: 19,
        f: 'Advanced JS',
        t: "Closures, prototypes, ES6 classes, 'this' keyword, call/apply/bind, WeakMap, Proxy, Reflect, Symbol",
      },
      {
        w: 20,
        f: 'Projects',
        t: 'Build: To-Do App (DOM/events), Weather App (fetch + async/await + API key), Quiz App (ES6 classes + localStorage)',
      },
    ],
  },
  {
    id: 'm05',
    seq: 5,
    block: 'frontend',
    icon: '🔷',
    color: '#3B82F6',
    dark: '#1D4ED8',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    name: 'TypeScript',
    days: 31,
    ds: 125,
    de: 155,
    period: 'Oct 22 - Nov 21, 2026',
    ms: 'TypeScript Done · D155',
    about:
      '31 days. TypeScript — type system, interfaces, generics, utility types, strict mode, decorators. Your FPO Cloud AWS CDK and Step Functions are already TypeScript — this formalises and deepens that existing knowledge.',
    courses: [
      'Matt Pocock — Total TypeScript (free fundamentals + advanced) · best TS learning path',
      'Stephen Grider — TypeScript The Complete Developers Guide (Udemy) · comprehensive with projects',
    ],
    wplan: [
      {
        w: 21,
        f: 'TS Type System',
        t: 'Basic types, annotations, inference, union/intersection, literal types, enums, tuples, unknown vs any vs never',
      },
      {
        w: 22,
        f: 'Interfaces + Classes',
        t: 'Interface vs type alias, extending, implements, access modifiers, abstract classes, readonly, optional properties',
      },
      {
        w: 23,
        f: 'Generics + Utility',
        t: 'Generic functions/interfaces/classes, constraints, Partial/Required/Readonly/Pick/Omit/Record, conditional types',
      },
      {
        w: 24,
        f: 'Advanced TS',
        t: 'Decorators, declaration files (.d.ts), tsconfig strict mode, module resolution. Typed AWS CDK patterns.',
      },
      {
        w: 25,
        f: 'Projects',
        t: 'Convert JS projects to TypeScript. Build typed REST API client. Typed Redux Toolkit store. Typed CDK stack.',
      },
    ],
  },
  {
    id: 'm06',
    seq: 6,
    block: 'frontend',
    icon: '⚛',
    color: '#0EA5E9',
    dark: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    name: 'React',
    days: 31,
    ds: 156,
    de: 186,
    period: 'Nov 22 - Dec 22, 2026',
    ms: 'React Done · D186',
    about:
      '31 days. React with TypeScript. Components, hooks, React Router v6, Redux Toolkit, RTK Query. Build FPO flight dashboard capstone calling AWS API Gateway + Lambda + DynamoDB from Block 1.',
    courses: [
      'John Smilga — React 18 Tutorial and Projects Course 2026 (Udemy, 50h) · 25+ real projects',
      'Max Schwarzmuller — React The Complete Guide 2026 (Udemy) · TypeScript + testing + Redux',
    ],
    wplan: [
      {
        w: 26,
        f: 'React Foundations',
        t: 'JSX, components, props, useState, conditional rendering, lists/keys, event handling. Vite + TypeScript setup.',
      },
      {
        w: 27,
        f: 'Core Hooks + Router',
        t: 'useEffect, useRef, useMemo, useCallback, custom hooks. React Router v6 nested routes, dynamic params, loaders.',
      },
      {
        w: 28,
        f: 'State Management',
        t: 'Context API + useReducer, Redux Toolkit (createSlice/configureStore), RTK Query for async API state management',
      },
      {
        w: 29,
        f: 'Advanced React',
        t: 'React.memo, lazy/Suspense, error boundaries, portals, forwardRef. React Testing Library + Jest unit tests.',
      },
      {
        w: 30,
        f: 'FPO Dashboard',
        t: 'Build FPO Flight Dashboard: flight list, status cards, weather overlay. Calls AWS API Gateway + Lambda + DynamoDB from Block 1.',
      },
    ],
  },
  {
    id: 'm07',
    seq: 7,
    block: 'frontend',
    icon: '▲',
    color: '#374151',
    dark: '#111827',
    bg: '#F9FAFB',
    border: '#D1D5DB',
    name: 'Next.js',
    days: 31,
    ds: 187,
    de: 217,
    period: 'Dec 23, 2026 - Jan 22, 2027',
    ms: 'Next.js Done · D217',
    about:
      '31 days. Next.js 15 App Router. Server Components, Server Actions, NextAuth v5, Prisma ORM, PostgreSQL, Vercel deploy. Build FPO web portal — authenticated flight ops dashboard deployed publicly.',
    courses: [
      'Max Schwarzmuller — Next.js and React The Complete Guide (Udemy, 25h) · App Router',
      'Lee Robinson (Vercel) — Next.js Learn (free official course) · App Router fundamentals',
    ],
    wplan: [
      {
        w: 31,
        f: 'App Router Foundations',
        t: 'File-based routing, layouts, loading/error/not-found pages, route groups, parallel routes',
      },
      {
        w: 32,
        f: 'Server Components + Data',
        t: 'RSC vs Client Components, fetch caching/revalidation, ISR/SSG/SSR strategies, Suspense streaming, Server Actions',
      },
      {
        w: 33,
        f: 'Auth + Database',
        t: 'NextAuth v5 OAuth (Google/GitHub), middleware, protected routes, Prisma ORM + PostgreSQL, migrations',
      },
      {
        w: 34,
        f: 'Deploy + FPO Portal',
        t: 'Vercel deployment, env vars, image optimization. FPO web portal: auth + flight dashboard + AWS API Gateway backend.',
      },
      {
        w: 35,
        f: 'Performance + SEO',
        t: 'Core Web Vitals, next/image, next/font, metadata API, OpenGraph tags, static generation, dynamic rendering trade-offs.',
      },
    ],
  },
  {
    id: 'm08',
    seq: 8,
    block: 'frontend',
    icon: '📱',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'React Native',
    days: 30,
    ds: 218,
    de: 247,
    period: 'Jan 23 - Feb 21, 2027',
    ms: 'React Native Done · D247',
    about:
      '30 days. React Native via Chaicode — FPO Cloud mobile frontend. Core components, React Navigation v6, Redux Toolkit in RN, Expo SDK device APIs, Reanimated 2 animations, EAS Build. Deploy FPO mobile flight status app to TestFlight on your iPad. Calls AWS API Gateway + Lambda from Block 1.',
    courses: [
      'Chaicode — React Native Full Course (primary, free, Hindi + English)',
      'Stephen Grider — The Complete React Native + Hooks Course 4.8 stars (38h) · supplementary',
      'Expo docs — EAS Build, TestFlight submission, Expo Go debugging on iPad',
    ],
    wplan: [
      {
        w: 36,
        f: 'Core Components + Layout',
        t: 'View, Text, Image, TextInput, StyleSheet, Flexbox, FlatList, SectionList — exercises on iPad via Expo Go',
      },
      {
        w: 37,
        f: 'React Navigation v6',
        t: 'Stack, Bottom Tab, Drawer navigators, nested navigation, passing params, deep linking',
      },
      {
        w: 38,
        f: 'State + Device APIs',
        t: 'Redux Toolkit in RN, AsyncStorage, Camera, Location, Push Notifications, Expo SDK modules',
      },
      {
        w: 39,
        f: 'Animations + EAS + FPO',
        t: 'Reanimated 2, Gesture Handler, EAS Build config, TestFlight. Deploy FPO mobile flight status app to iPad.',
      },
    ],
  },

  // ── BLOCK 3: PYTHON (3 months) ──────────────────────────────────────────
  {
    id: 'm09',
    seq: 9,
    block: 'python',
    icon: '🐍',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'Python',
    days: 30,
    ds: 248,
    de: 277,
    period: 'Feb 22 - Mar 23, 2027',
    ms: 'Python Done · D277',
    about:
      '30 days. Python fundamentals through advanced plus AWS boto3 automation. OOP, file handling, JSON, APIs, decorators, asyncio. Your SCB Thailand Python/boto3 experience means fast revision and deepening. Foundation for Agentic AI and Django months.',
    courses: [
      'Automate the Boring Stuff with Python (Al Sweigart, free online) · practical Python',
      'Corey Schafer — Python YouTube playlist (free) · best OOP + decorators coverage',
    ],
    wplan: [
      {
        w: 40,
        f: 'Python Fundamentals + OOP',
        t: 'Variables, data types, control flow, functions, list/dict comprehensions, OOP classes, inheritance, dunder methods, dataclasses',
      },
      {
        w: 41,
        f: 'File + JSON + APIs',
        t: 'File I/O, pathlib, JSON processing, requests library, REST API calls, OAuth2 auth, error handling',
      },
      {
        w: 42,
        f: 'Advanced Python',
        t: 'Decorators, generators, context managers, type hints, regex, asyncio basics, virtual environments, packaging',
      },
      {
        w: 43,
        f: 'boto3 + AWS Automation',
        t: 'boto3: EC2 provisioning, S3 ops, Lambda invoke, DynamoDB CRUD, CloudWatch log queries — extend Block 1 AWS skills',
      },
    ],
  },
  {
    id: 'm10',
    seq: 10,
    block: 'python',
    icon: '🤖',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Agentic AI using Python',
    days: 30,
    ds: 278,
    de: 307,
    period: 'Mar 24 - Apr 22, 2027',
    ms: 'Agentic AI Done · D307',
    about:
      '30 days. LangChain, LangGraph, RAG pipelines, multi-agent systems, MCP protocol, Ed Donner 8 projects. Your SCB Thailand LangChain/LangGraph experience = deep revision + extension. Capstone: FPO AI assistant deployed to Lambda on AWS from Block 1.',
    courses: [
      'Ed Donner — Complete Agentic AI Engineering Course 2026 (Udemy/own site, 30h) · 8 projects',
      'Eden Marco — LangChain Develop LLM Powered Applications (Udemy, 22h) · LangChain deep dive',
    ],
    wplan: [
      {
        w: 44,
        f: 'GenAI + LangChain Core',
        t: 'LLMs, embeddings, RAG, LangChain chains/tools/memory/LCEL. Vector DBs (Pinecone/FAISS). Revisit SCB LangChain work.',
      },
      {
        w: 45,
        f: 'LangGraph + Multi-Agent',
        t: 'State machines, conditional edges, supervisor agents, parallel execution, human-in-the-loop — Ed Donner',
      },
      {
        w: 46,
        f: 'Ed Donner 8 Projects',
        t: 'Career Digital Twin, Deep Research Agent, SDR Agent, Browser Agent, MCP server integration, Engineering Team in Docker',
      },
      {
        w: 47,
        f: 'FPO AI Capstone on AWS',
        t: 'FPO AI: natural language flight queries via LangChain + DynamoDB + Lambda. Deploy to AWS from Block 1.',
      },
    ],
  },
  {
    id: 'm11',
    seq: 11,
    block: 'python',
    icon: '🎸',
    color: '#059669',
    dark: '#047857',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    name: 'Django',
    days: 30,
    ds: 308,
    de: 337,
    period: 'Apr 23 - May 22, 2027',
    ms: 'Django Done · D337',
    about:
      '30 days. Django full-stack web framework — MVT architecture, ORM, Django REST Framework (DRF), JWT auth, admin interface, testing. Build production-grade REST API deployed to AWS ECS using Block 1 skills. Replaces Flask with a more opinionated batteries-included framework.',
    courses: [
      'Dennis Ivy — Python Django 7 Hour Course (YouTube, free) · best Django fundamentals',
      'Jose Salvatierra — REST APIs with Django REST Framework (Udemy) · DRF deep dive',
    ],
    wplan: [
      {
        w: 48,
        f: 'Django Core + MVT',
        t: 'Django project/app structure, MVT architecture, URL routing, views (FBV/CBV), templates, static files, Django ORM',
      },
      {
        w: 49,
        f: 'Django ORM + Admin',
        t: 'Models, migrations, querysets, relationships (ForeignKey/ManyToMany), Django admin customisation, signals',
      },
      {
        w: 50,
        f: 'Django REST Framework',
        t: 'DRF serializers, ViewSets, routers, permissions, JWT auth (djangorestframework-simplejwt), filtering, pagination, throttling',
      },
      {
        w: 51,
        f: 'Testing + Deploy to AWS',
        t: 'pytest-django, APIClient tests, Docker + Gunicorn + Nginx, deploy to AWS ECS Fargate from Block 1. Full REST API capstone.',
      },
    ],
  },

  // ── BLOCK 4: JAVA (5 months) ─────────────────────────────────────────────
  {
    id: 'm12',
    seq: 12,
    block: 'java',
    icon: '☕',
    color: '#D97706',
    dark: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'J2SE (Java Core)',
    days: 30,
    ds: 338,
    de: 367,
    period: 'May 23 - Jun 21, 2027',
    ms: 'J2SE Done · D367',
    about:
      '30 days. Java Core using your C# .NET background for fast learning. Syntax C# vs Java, OOP, Collections, Generics, Java 8+ (Streams, Lambdas, Optional, CompletableFuture), Multithreading, modern Java (records, sealed classes, pattern matching). Foundation for J2EE, JPA and Spring Boot.',
    courses: [
      'Navin Reddy Telusko — Java Programming (YouTube free) · J2SE fast-track',
      'Tim Buchalka — Java Masterclass 2026 (Udemy, 80h) · most comprehensive Java course',
    ],
    wplan: [
      {
        w: 52,
        f: 'Java Syntax + OOP',
        t: 'JDK/JVM/JRE, syntax vs C#, classes, inheritance, polymorphism, interfaces, abstract classes, access modifiers, static',
      },
      {
        w: 53,
        f: 'Collections + Generics',
        t: 'ArrayList, LinkedList, HashMap, HashSet, TreeMap, PriorityQueue, generics (<T>), Comparator, Collections utility class',
      },
      {
        w: 54,
        f: 'Java 8+ Streams + Lambdas',
        t: 'Lambda expressions, Stream API (filter/map/reduce/collect/flatMap), Optional, method references, default interface methods',
      },
      {
        w: 55,
        f: 'Concurrency + Modern Java',
        t: 'Thread/Runnable, ExecutorService, CompletableFuture. Java 14-21: records, sealed classes, pattern matching, text blocks',
      },
    ],
  },
  {
    id: 'm13',
    seq: 13,
    block: 'java',
    icon: '🏭',
    color: '#EA580C',
    dark: '#C2410C',
    bg: '#FFF7ED',
    border: '#FED7AA',
    name: 'J2EE (Java Enterprise)',
    days: 30,
    ds: 368,
    de: 397,
    period: 'Jun 22 - Jul 21, 2027',
    ms: 'J2EE Done · D397',
    about:
      '30 days. Java Enterprise Edition — Servlets, JSP, JDBC, JAX-RS REST APIs, CDI dependency injection, EJB session beans, JMS messaging. Foundation for Spring Boot which simplifies all J2EE specs. JMS bridges directly to Kafka in Microservices month.',
    courses: [
      'Baeldung.com — Java EE articles (free) · Servlets, JDBC, JAX-RS, CDI reference',
      'Ranga Karanam — Java EE and Jakarta EE (Udemy) · practical J2EE projects',
    ],
    wplan: [
      {
        w: 56,
        f: 'Servlets + JSP + JDBC',
        t: 'HttpServlet lifecycle, doGet/doPost, filters, session management. JSP EL/JSTL MVC pattern. JDBC with HikariCP pooling.',
      },
      {
        w: 57,
        f: 'JAX-RS REST APIs',
        t: '@Path, @GET/@POST/@PUT/@DELETE, @PathParam, @QueryParam, Jackson JSON binding, content negotiation, exception mappers',
      },
      {
        w: 58,
        f: 'CDI + EJB Concepts',
        t: 'CDI @Inject/@ApplicationScoped/@RequestScoped, EJB session beans (stateless/stateful), interceptors, lifecycle callbacks',
      },
      {
        w: 59,
        f: 'JMS + Integration',
        t: 'JMS queues vs topics, point-to-point vs pub-sub, JNDI lookup — bridges directly to Kafka producer/consumer patterns in M16',
      },
    ],
  },
  {
    id: 'm14',
    seq: 14,
    block: 'java',
    icon: '🗄',
    color: '#B45309',
    dark: '#92400E',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'JPA / Hibernate',
    days: 30,
    ds: 398,
    de: 427,
    period: 'Jul 22 - Aug 20, 2027',
    ms: 'JPA / Hibernate Done · D427',
    about:
      '30 days. JPA and Hibernate deep dive. Entity mapping, relationships (OneToOne/OneToMany/ManyToMany), JPQL, N+1 problem solutions, @Transactional, Spring Data JPA. Every concept maps to FPO Cloud: DynamoDB replaces relational DB but all ORM patterns transfer directly.',
    courses: [
      'John Thompson — Hibernate and Spring Data JPA Beginner to Guru (Udemy, 55h) · best JPA course',
      'Baeldung.com — JPA/Hibernate articles (free) · N+1, caching, transactions reference',
    ],
    wplan: [
      {
        w: 60,
        f: 'JPA Entity Mapping',
        t: '@Entity, @Id, @GeneratedValue, @Column, @Table, @Embedded, EntityManager, entity lifecycle states, persistence.xml',
      },
      {
        w: 61,
        f: 'Relationships + JPQL',
        t: '@OneToMany, @ManyToMany, CascadeType, FetchType (LAZY/EAGER), @JoinColumn. JPQL queries, @NamedQuery, Pageable pagination',
      },
      {
        w: 62,
        f: 'N+1 + Transactions',
        t: 'Identifying N+1 with SQL logging, @EntityGraph, JOIN FETCH solutions. @Transactional propagation, isolation levels, @Version',
      },
      {
        w: 63,
        f: 'Spring Data JPA + Caching',
        t: 'JpaRepository, @Query, Specification API, L1/L2 caching (EhCache), Hibernate statistics, Spring Data projections',
      },
    ],
  },
  {
    id: 'm15',
    seq: 15,
    block: 'java',
    icon: '🌱',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'Spring Boot',
    days: 30,
    ds: 428,
    de: 457,
    period: 'Aug 21 - Sep 19, 2027',
    ms: 'Spring Boot Done · D457',
    about:
      '30 days. Spring Boot 3 — IoC container, Spring MVC, REST APIs, Spring Security with JWT and OAuth2, testing (JUnit5/Mockito/Testcontainers). Your C# .NET 8 + FPO Cognito OAuth2 background maps exactly to Spring Security. Deploy API to AWS ECS from Block 1.',
    courses: [
      'John Thompson — Spring Framework 6 Beginner to Guru (Udemy, 40h) · most comprehensive',
      'Ranga Karanam — Master Spring Boot 3 and Spring Framework 6 (Udemy, 36h) · practical projects',
    ],
    wplan: [
      {
        w: 64,
        f: 'Spring Boot Core + IoC',
        t: 'Auto-configuration, @Bean/@Component/@Service/@Repository, constructor injection, AOP, @ConfigurationProperties, profiles',
      },
      {
        w: 65,
        f: 'Spring MVC + REST APIs',
        t: '@RestController, ResponseEntity, @Valid, @ExceptionHandler, @ControllerAdvice, OpenAPI/Swagger, DTO + MapStruct',
      },
      {
        w: 66,
        f: 'Spring Security + OAuth2',
        t: 'SecurityFilterChain, JWT filter chain, UserDetailsService, BCrypt. OAuth2 resource server + JWKS = your FPO Cognito pattern!',
      },
      {
        w: 67,
        f: 'Testing + Capstone + AWS',
        t: '@WebMvcTest, MockMvc, @DataJpaTest, Testcontainers, Mockito. Full REST API + JWT + JPA + Docker. Deploy to AWS ECS.',
      },
    ],
  },
  {
    id: 'm16',
    seq: 16,
    block: 'java',
    icon: '🏛',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECDD3',
    name: 'Microservices',
    days: 30,
    ds: 458,
    de: 487,
    period: 'Sep 20 - Oct 19, 2027',
    ms: '487 DAYS COMPLETE · Oct 19, 2027',
    about:
      '30 days. Microservices with Spring Cloud, Kafka, CQRS, Event Sourcing, Saga pattern, deploy to AWS EKS. Every pattern maps to FPO Cloud: EventBridge = Kafka, Step Functions = Saga, Lambda = Microservice, DynamoDB streams = Event Sourcing. Day 487 = Oct 19, 2027 = 16 Months COMPLETE.',
    courses: [
      'Ranga Karanam — Java Spring Boot Microservices with K8s and Docker (Udemy, 35h)',
      'Sean Campbell — Master Spring Boot Microservices CQRS and Event Sourcing (Udemy, 10h)',
    ],
    wplan: [
      {
        w: 68,
        f: 'Service Design + Spring Cloud',
        t: 'DDD bounded contexts, Eureka discovery, Spring Cloud Gateway, config server, Feign clients — all map to FPO architecture',
      },
      {
        w: 69,
        f: 'Resilience + Kafka',
        t: 'Resilience4j circuit breaker/retry/bulkhead. Kafka producers/consumers/partitions — maps to your FPO EventBridge',
      },
      {
        w: 70,
        f: 'CQRS + Event Sourcing',
        t: 'Read/write separation, Axon event store, event replay — maps to FPO mission-feed event sourcing table',
      },
      {
        w: 71,
        f: 'Saga + EKS Deploy + Day 487',
        t: 'Step Functions = Saga! Deploy microservices to AWS EKS from Block 1. Write 1 ADR. Day 487 = Oct 19, 2027 = DONE.',
      },
    ],
  },
  // ── BLOCK 5: DATA STRUCTURES (365 days · 52 weeks) ──────────────────────
  {
    id: 'p17',
    block: 'dsa',
    seq: 17,
    icon: '🧩',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Arrays + Strings',
    days: 28,
    ds: 488,
    de: 515,
    period: 'Nov 1 - Nov 28, 2027',
    ms: 'Arrays + Strings Done · D515',
    about:
      '4 weeks. Two pointers, sliding window, prefix sums, binary search patterns, string manipulation. 50+ LeetCode problems in Java. Foundation for all DSA topics. NOTE: New daily schedule from Nov 1 — Vipassana meditation 5:30-6:35 AM, then study 6:45-8:45 AM (2 hours). Discipline upgrade.',
    courses: [
      'Scott Barrett — Java DSA + LeetCode Exercises (Udemy, 4.8★) · Java implementations',
      'NeetCode 150 — Arrays + Strings playlist (YouTube free) · pattern-based approach',
    ],
    wplan: [
      {
        w: 1,
        f: 'Array Fundamentals + Two Pointers',
        t: 'Static vs dynamic arrays, two-pointer technique (Two Sum, Container With Most Water, 3Sum), sorted array problems',
      },
      {
        w: 2,
        f: 'Sliding Window',
        t: 'Fixed window (max sum subarray), variable window (longest substring no repeat), pattern recognition',
      },
      {
        w: 3,
        f: 'Binary Search on Arrays',
        t: 'Classic binary search, rotated array search, search in 2D matrix, find peak element, binary search on answer',
      },
      {
        w: 4,
        f: 'String Algorithms',
        t: 'String reversal, palindrome check, anagram detection, KMP pattern matching, substring problems. 20 LeetCode problems.',
      },
    ],
  },
  {
    id: 'p18',
    block: 'dsa',
    seq: 18,
    icon: '🔗',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Linked Lists',
    days: 21,
    ds: 516,
    de: 536,
    period: 'Nov 29 - Dec 19, 2027',
    ms: 'Linked Lists Done · D536',
    about:
      '3 weeks. Singly and doubly linked lists, fast/slow pointer technique, reversals, cycle detection, merge operations. 30+ LeetCode problems. Pointer manipulation builds C# reference intuition.',
    courses: [
      'Scott Barrett — Java DSA Linked Lists chapter',
      "NeetCode — Linked List playlist (YouTube) · Floyd's cycle detection explained clearly",
    ],
    wplan: [
      {
        w: 5,
        f: 'Singly Linked List + Reversal',
        t: 'Node structure, insert/delete/traverse, reverse a list iteratively and recursively, reverse k groups',
      },
      {
        w: 6,
        f: 'Fast + Slow Pointers',
        t: "Detect cycle (Floyd's algorithm), find middle node, palindrome linked list, linked list cycle II",
      },
      {
        w: 7,
        f: 'Merge + Complex Operations',
        t: 'Merge two sorted lists, merge k sorted lists, reorder list, LRU Cache implementation. 15 LeetCode problems.',
      },
    ],
  },
  {
    id: 'p19',
    block: 'dsa',
    seq: 19,
    icon: '📚',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Stacks + Queues',
    days: 21,
    ds: 537,
    de: 557,
    period: 'Dec 20 - Jan 9, 2028',
    ms: 'Stacks + Queues Done · D557',
    about:
      '3 weeks. Stack and queue implementations, monotonic stack pattern, min-stack, BFS with queues, deque. 25+ LeetCode problems. Directly applicable to expression parsing and FPO workflow sequencing.',
    courses: [
      'Scott Barrett — Java DSA Stacks + Queues chapter',
      'NeetCode — Stack playlist (YouTube) · monotonic stack pattern mastery',
    ],
    wplan: [
      {
        w: 8,
        f: 'Stack Fundamentals + Min Stack',
        t: 'Stack via array/linked list, Valid Parentheses, Min Stack, Evaluate Reverse Polish Notation, Daily Temperatures',
      },
      {
        w: 9,
        f: 'Monotonic Stack',
        t: 'Next Greater Element, Largest Rectangle in Histogram, Trapping Rain Water, Stock Span Problem — classic patterns',
      },
      {
        w: 10,
        f: 'Queues + Deque',
        t: 'Queue via stacks, sliding window maximum (deque), BFS basics with queue, circular queue implementation',
      },
    ],
  },
  {
    id: 'p20',
    block: 'dsa',
    seq: 20,
    icon: '🌲',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Trees + BST',
    days: 35,
    ds: 558,
    de: 592,
    period: 'Jan 10 - Feb 13, 2028',
    ms: 'Trees + BST Done · D592',
    about:
      '5 weeks. Binary trees, BST (insert/delete/validate), DFS (pre/in/post-order), BFS (level-order), lowest common ancestor, path sum problems. 50+ LeetCode problems. Trees are the most tested interview topic.',
    courses: [
      'Scott Barrett — Java DSA Trees chapter · comprehensive',
      'NeetCode — Trees playlist (YouTube) · 15 must-know tree patterns',
    ],
    wplan: [
      {
        w: 11,
        f: 'Binary Tree Traversals',
        t: 'Pre/in/post-order DFS (iterative + recursive), BFS level-order traversal, zigzag level order, right side view',
      },
      {
        w: 12,
        f: 'Binary Tree Problems',
        t: 'Max depth, diameter, balanced tree check, same tree, symmetric tree, invert tree, path sum I + II',
      },
      {
        w: 13,
        f: 'BST Operations',
        t: 'Insert, delete, search, validate BST, kth smallest in BST, BST iterator, convert sorted array to BST',
      },
      {
        w: 14,
        f: 'Advanced Tree Problems',
        t: 'LCA (binary tree + BST), serialize/deserialize binary tree, construct from traversals, binary tree cameras',
      },
      {
        w: 15,
        f: 'Tree Revision + 20 LeetCode',
        t: 'Timed practice — 20 tree problems cold, no hints, target < 20 min each. Track accuracy and time.',
      },
    ],
  },
  {
    id: 'p21',
    block: 'dsa',
    seq: 21,
    icon: '⛰️',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Heaps + Priority Queue',
    days: 21,
    ds: 593,
    de: 613,
    period: 'Feb 14 - Mar 5, 2028',
    ms: 'Heaps Done · D613',
    about:
      '3 weeks. Min-heap, max-heap, PriorityQueue in Java, heap sort, Top-K pattern, two-heap pattern (median), K-way merge. 25+ LeetCode problems. Heaps power scheduling and optimization systems.',
    courses: [
      'Scott Barrett — Java DSA Heaps chapter',
      'NeetCode — Heap/Priority Queue playlist (YouTube) · Top-K pattern explained',
    ],
    wplan: [
      {
        w: 16,
        f: 'Heap Fundamentals + PriorityQueue',
        t: 'Min/max heap concepts, Java PriorityQueue, heap sort, Kth largest element, Top K frequent elements',
      },
      {
        w: 17,
        f: 'Two Heaps Pattern',
        t: 'Find median from data stream (min-heap + max-heap), sliding window median, IPO problem',
      },
      {
        w: 18,
        f: 'K-Way Merge + Advanced',
        t: 'Merge k sorted lists (heap), K closest points to origin, smallest range covering all lists',
      },
    ],
  },
  {
    id: 'p22',
    block: 'dsa',
    seq: 22,
    icon: '🕸️',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Graphs',
    days: 35,
    ds: 614,
    de: 648,
    period: 'Mar 6 - Apr 9, 2028',
    ms: 'Graphs Done · D648',
    about:
      "5 weeks. Graph representations, BFS/DFS on graphs, topological sort, Dijkstra's algorithm, Union-Find (DSU), cycle detection. 50+ LeetCode problems. Your distributed microservices knowledge maps directly to graph theory.",
    courses: [
      'Scott Barrett — Java DSA Graphs chapter',
      'NeetCode — Graphs playlist (YouTube) · BFS + DFS + Union-Find patterns',
      'William Fiset — Graph Theory Algorithms (YouTube) · Dijkstra, Bellman-Ford deep dives',
    ],
    wplan: [
      {
        w: 19,
        f: 'Graph BFS + DFS',
        t: 'Adjacency list/matrix, BFS (shortest path in unweighted graph), DFS (connected components, path existence, islands)',
      },
      {
        w: 20,
        f: 'Topological Sort',
        t: "Kahn's algorithm (BFS-based), DFS-based toposort, cycle detection in directed graph, course schedule problems",
      },
      {
        w: 21,
        f: 'Union-Find (DSU)',
        t: 'Quick union, union by rank, path compression, number of connected components, redundant connection',
      },
      {
        w: 22,
        f: 'Shortest Path Algorithms',
        t: 'Dijkstra (single source, non-negative weights), Bellman-Ford (negative weights), Floyd-Warshall (all pairs)',
      },
      {
        w: 23,
        f: 'Advanced Graph Problems',
        t: 'Word ladder (BFS), Pacific Atlantic water flow, alien dictionary (toposort), network delay time. 15 LeetCode cold.',
      },
    ],
  },
  {
    id: 'p23',
    block: 'dsa',
    seq: 23,
    icon: '#️⃣',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Hashing + Hash Maps',
    days: 21,
    ds: 649,
    de: 669,
    period: 'Apr 10 - Apr 30, 2028',
    ms: 'Hashing Done · D669',
    about:
      '3 weeks. HashMap, HashSet, collision handling, custom hash functions, frequency maps, two-sum pattern, grouping problems. 25+ LeetCode problems. Hashing powers O(1) lookups — used everywhere in FPO Cloud DynamoDB access patterns.',
    courses: [
      'Scott Barrett — Java DSA Hashing chapter',
      'NeetCode — Hashing playlist (YouTube) · frequency map patterns',
    ],
    wplan: [
      {
        w: 24,
        f: 'HashMap + HashSet Patterns',
        t: 'Two Sum, Group Anagrams, Top K frequent elements, valid Sudoku, longest consecutive sequence',
      },
      {
        w: 25,
        f: 'Frequency Maps + Sliding Window',
        t: 'Substring with all words concatenated, minimum window substring, permutation in string — hash + window combo',
      },
      {
        w: 26,
        f: 'Custom Hashing + Advanced',
        t: 'Design HashMap, design HashSet, find duplicates, longest subarray with equal 0s and 1s',
      },
    ],
  },
  {
    id: 'p24',
    block: 'dsa',
    seq: 24,
    icon: '🔄',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Sorting + Searching',
    days: 28,
    ds: 670,
    de: 697,
    period: 'May 1 - May 28, 2028',
    ms: 'Sorting + Searching Done · D697',
    about:
      '4 weeks. All sorting algorithms with complexity proofs, binary search variants, search in rotated array, matrix search. 35+ LeetCode problems. Understanding sort internals is essential for system design trade-offs.',
    courses: [
      'Scott Barrett — Java DSA Sorting chapter · merge sort, quick sort implementations',
      'NeetCode — Binary Search playlist (YouTube) · binary search on answer technique',
    ],
    wplan: [
      {
        w: 27,
        f: 'Sorting Algorithms',
        t: 'Bubble/selection/insertion O(n²), merge sort O(n log n), quick sort O(n log n avg), counting sort, radix sort — implement all in Java',
      },
      {
        w: 28,
        f: 'Binary Search Variants',
        t: 'Classic, first/last occurrence, find minimum in rotated array, search in rotated array, find peak element',
      },
      {
        w: 29,
        f: 'Binary Search on Answer',
        t: 'Capacity to ship packages, Koko eating bananas, split array largest sum, median of two sorted arrays',
      },
      {
        w: 30,
        f: 'Matrix Search + Complex',
        t: 'Search a 2D matrix, search in sorted matrix, find K closest elements. 15 LeetCode cold timed problems.',
      },
    ],
  },
  {
    id: 'p25',
    block: 'dsa',
    seq: 25,
    icon: '💎',
    color: '#4F46E5',
    dark: '#3730A3',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Dynamic Programming',
    days: 56,
    ds: 698,
    de: 753,
    period: 'May 29 - Jul 23, 2028',
    ms: 'Dynamic Programming Done · D753',
    about:
      '8 weeks MAX TIME. The hardest DSA topic. 1D DP (coin change, house robber, climb stairs), 2D DP (LCS, LIS, knapsack, edit distance), DP on trees, DP on strings. 80+ LeetCode problems. Master this and you stand out in every interview.',
    courses: [
      'NeetCode — DP playlist (YouTube) · pattern-based approach, best DP resource free',
      'Aditya Verma — DP YouTube playlist (Hindi) · knapsack pattern master series',
      'LeetCode DP Study Plan — structured 30-day progression',
    ],
    wplan: [
      {
        w: 31,
        f: '1D DP Fundamentals',
        t: 'Fibonacci (memoization vs tabulation), climb stairs, house robber I + II, coin change, min cost climbing stairs',
      },
      {
        w: 32,
        f: '1D DP Intermediate',
        t: 'Jump game I + II, word break, decode ways, longest increasing subsequence (LIS), partition equal subset sum',
      },
      {
        w: 33,
        f: '2D DP: Knapsack Pattern',
        t: '0/1 knapsack, unbounded knapsack, target sum (subset sum), last stone weight II — classic knapsack problems',
      },
      {
        w: 34,
        f: '2D DP: String Problems',
        t: 'Longest common subsequence (LCS), edit distance, distinct subsequences, interleaving string, wildcard matching',
      },
      {
        w: 35,
        f: 'DP on Grids',
        t: 'Unique paths I + II, min path sum, triangle, dungeon game, cherry pickup — 2D grid traversal DP',
      },
      {
        w: 36,
        f: 'Interval + Stock DP',
        t: 'Best time to buy/sell stock I-IV + cooldown + fee, burst balloons, strange printer — interval DP',
      },
      {
        w: 37,
        f: 'DP on Trees + Digits',
        t: 'House robber III (on tree), diameter via DP, digit DP patterns, counting numbers with unique digits',
      },
      {
        w: 38,
        f: 'DP Revision + 30 LeetCode Cold',
        t: '30 DP problems timed, no hints. Identify patterns — 1D/2D/knapsack/string. Write pattern recognition cheatsheet.',
      },
    ],
  },
  {
    id: 'p26',
    block: 'dsa',
    seq: 26,
    icon: '🔙',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Backtracking + Recursion',
    days: 28,
    ds: 754,
    de: 781,
    period: 'Jul 24 - Aug 20, 2028',
    ms: 'Backtracking Done · D781',
    about:
      '4 weeks. Recursion fundamentals, backtracking template, subsets, permutations, combinations, N-Queens, Sudoku solver, word search. 30+ LeetCode problems. Backtracking is the foundation of constraint satisfaction and combinatorial search.',
    courses: [
      'NeetCode — Backtracking playlist (YouTube) · template approach to all problems',
      'Aditya Verma — Recursion + Backtracking (YouTube Hindi) · systematic recursion tree method',
    ],
    wplan: [
      {
        w: 39,
        f: 'Recursion Fundamentals',
        t: 'Call stack, recursion tree, memoization, subsets (power set), combinations, permutations — exhaustive generation',
      },
      {
        w: 40,
        f: 'Backtracking Template',
        t: 'Choose-Explore-Unchoose pattern, combination sum I+II, phone number letter combinations, palindrome partitioning',
      },
      {
        w: 41,
        f: 'Grid Backtracking',
        t: 'Word search I+II (board DFS), N-Queens, Sudoku solver, rat in a maze — 2D grid backtracking',
      },
      {
        w: 42,
        f: 'Advanced Backtracking',
        t: 'Expression add operators, remove invalid parentheses, restore IP addresses. 10 cold timed backtracking problems.',
      },
    ],
  },
  {
    id: 'p27',
    block: 'dsa',
    seq: 27,
    icon: '🌿',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Greedy Algorithms',
    days: 21,
    ds: 782,
    de: 802,
    period: 'Aug 21 - Sep 10, 2028',
    ms: 'Greedy Done · D802',
    about:
      '3 weeks. Greedy choice property, activity selection, interval scheduling, jump game, task scheduler, Huffman coding concept. 20+ LeetCode problems. Greedy algorithms often replace DP with O(n) solutions.',
    courses: [
      'NeetCode — Greedy playlist (YouTube)',
      'LeetCode Greedy tag — top 20 problems by frequency',
    ],
    wplan: [
      {
        w: 43,
        f: 'Greedy Fundamentals + Intervals',
        t: 'Activity selection, meeting rooms I+II, non-overlapping intervals, merge intervals, insert interval',
      },
      {
        w: 44,
        f: 'Greedy on Arrays + Strings',
        t: 'Jump game I+II, gas station, task scheduler, hand of straights, reconstruct itinerary',
      },
      {
        w: 45,
        f: 'Advanced Greedy',
        t: 'Candy, minimum number of arrows to burst balloons, partition labels, two city scheduling',
      },
    ],
  },
  {
    id: 'p28',
    block: 'dsa',
    seq: 28,
    icon: '🌳',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Tries + Advanced Trees',
    days: 21,
    ds: 803,
    de: 823,
    period: 'Sep 11 - Oct 1, 2028',
    ms: 'Tries + Advanced Trees Done · D823',
    about:
      '3 weeks. Trie (prefix tree) insert/search/startsWith, word dictionary, prefix matching. Segment tree and Fenwick tree (BIT) for range queries. 20+ LeetCode problems.',
    courses: [
      'NeetCode — Tries playlist (YouTube) · implement from scratch',
      'NeetCode — Advanced Trees (segment tree, BIT concepts)',
    ],
    wplan: [
      {
        w: 46,
        f: 'Trie Implementation + Problems',
        t: 'Implement Trie from scratch in Java, implement magic dictionary, search suggestions system, word search II',
      },
      {
        w: 47,
        f: 'Design Trie Problems',
        t: 'Add and search word, replace words, index pairs of a string, maximum XOR (binary trie)',
      },
      {
        w: 48,
        f: 'Segment Tree + Fenwick Tree',
        t: 'Range sum query (mutable), range minimum query, BIT (Fenwick tree) for prefix sums, count of range sum',
      },
    ],
  },
  {
    id: 'p29',
    block: 'dsa',
    seq: 29,
    icon: '🏁',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'LeetCode Revision + Mocks',
    days: 28,
    ds: 824,
    de: 851,
    period: 'Oct 2 - Oct 29, 2028',
    ms: 'DATA STRUCTURES COMPLETE · D852',
    about:
      '4 weeks + 1 day. Full DSA revision and mock interview simulation. Solve 100 problems timed. 1 mock interview per day in final week (spoken aloud, no IDE, whiteboard style). Day 852 = Data Structures COMPLETE.',
    courses: [
      'LeetCode Top Interview 150 · complete all remaining',
      'Pramp.com · free peer mock interviews',
      'Interviewing.io · anonymous mock interviews with FAANG engineers',
    ],
    wplan: [
      {
        w: 49,
        f: 'Arrays + Strings + LinkedList Revision',
        t: 'Re-solve 20 problems from these topics cold. Note patterns missed. Update personal cheatsheet.',
      },
      {
        w: 50,
        f: 'Trees + Graphs + Heap Revision',
        t: 'Re-solve 20 problems cold. Focus on BFS/DFS graph variants and tree DP patterns.',
      },
      {
        w: 51,
        f: 'DP + Backtracking + Greedy Revision',
        t: 'Re-solve 20 problems cold. DP is hardest — spend most time here. Pattern matching drill.',
      },
      {
        w: 52,
        f: 'Full Mock Interviews — Day 852 DONE',
        t: '7 full mock interviews (1/day). Spoken aloud, 45 min each, no IDE. Day 852 = Data Structures COMPLETE 🎉',
      },
    ],
  },

  // ── BLOCK 6: SYSTEM DESIGN (212 days · 30 weeks) ──────────────────────────
  {
    id: 'p30',
    block: 'sd',
    seq: 30,
    icon: '🏗',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'SD Fundamentals + HLD',
    days: 28,
    ds: 852,
    de: 879,
    period: 'Oct 30 - Nov 26, 2028',
    ms: 'SD Fundamentals Done · D879',
    about:
      '4 weeks. System design interview framework, Frank Kane 5-step template, capacity estimation (users/storage/bandwidth), client-server architecture, APIs (REST/GraphQL/gRPC), HTTP/HTTPS, DNS, CDN, load balancers. Your FPO Cloud multi-tenant SaaS is a real system design case study.',
    courses: [
      'Frank Kane ex-Amazon — Mastering the System Design Interview (Udemy, 5h) · framework first',
      'Alex Xu — System Design Interview Vol 1 (book, 309 pages) · must-read',
      'ByteByteGo newsletter (free) — weekly system design breakdowns',
    ],
    wplan: [
      {
        w: 1,
        f: 'SD Framework + Estimation',
        t: 'Frank Kane 5-step template: Clarify requirements → Estimate scale → High-level design → Deep dive → Wrap up. Capacity estimation formulas.',
      },
      {
        w: 2,
        f: 'APIs + Network Layer',
        t: 'REST vs GraphQL vs gRPC, API gateway, HTTP methods, status codes, DNS resolution, CDN (CloudFront = your FPO!), reverse proxy',
      },
      {
        w: 3,
        f: 'Load Balancing + Caching',
        t: 'L4 vs L7 load balancers, round robin/least connections/IP hash, horizontal vs vertical scaling, Redis caching strategies (LRU/LFU/FIFO)',
      },
      {
        w: 4,
        f: 'FPO System Design — Your System',
        t: 'Design FPO Cloud: multi-tenant SaaS, Lambda + Step Functions + DynamoDB + EventBridge + Cognito. Draw the architecture you work on daily.',
      },
    ],
  },
  {
    id: 'p31',
    block: 'sd',
    seq: 31,
    icon: '📈',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'Scalability + Load Balancing',
    days: 21,
    ds: 880,
    de: 900,
    period: 'Nov 27 - Dec 17, 2028',
    ms: 'Scalability Done · D900',
    about:
      '3 weeks. Horizontal vs vertical scaling, auto-scaling, load balancing algorithms, rate limiting, circuit breakers (your FPO uses Resilience4j!), API gateway patterns, stateless vs stateful services.',
    courses: [
      'Alex Xu — System Design Interview Vol 1 chapters on Scalability + Rate Limiter',
      'Resilience4j docs — circuit breaker patterns (you use this in FPO Cloud Microservices)',
    ],
    wplan: [
      {
        w: 5,
        f: 'Horizontal Scaling + Auto-Scaling',
        t: 'Stateless vs stateful services, session management, auto-scaling groups (AWS ASG — your FPO!), scaling metrics and triggers',
      },
      {
        w: 6,
        f: 'Rate Limiting + Circuit Breaker',
        t: 'Token bucket, leaky bucket, sliding window algorithms. Circuit breaker states (closed/open/half-open) — Resilience4j pattern from your FPO',
      },
      {
        w: 7,
        f: 'Design: Rate Limiter + URL Shortener',
        t: 'Full design: Rate Limiter (token bucket + Redis) and URL Shortener (Base62 encoding + DynamoDB) — spoken 45 min each',
      },
    ],
  },
  {
    id: 'p32',
    block: 'sd',
    seq: 32,
    icon: '🗄',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'Databases + Caching',
    days: 28,
    ds: 901,
    de: 928,
    period: 'Dec 18 - Jan 14, 2029',
    ms: 'Databases + Caching Done · D928',
    about:
      '4 weeks. SQL vs NoSQL trade-offs, sharding, replication, CAP theorem, DynamoDB single-table design (your FPO!), Redis caching, consistent hashing, database indexing. This is your strongest area — FPO Cloud uses DynamoDB at scale.',
    courses: [
      'Alex Xu — System Design Interview chapters on Databases',
      'DynamoDB Advanced Patterns re:Invent talks (your FPO uses single-table design!)',
      'Martin Kleppmann — Designing Data-Intensive Applications (DDIA, key chapters)',
    ],
    wplan: [
      {
        w: 8,
        f: 'SQL vs NoSQL + CAP Theorem',
        t: 'ACID vs BASE, CAP theorem (consistency vs availability), SQL (strong consistency), NoSQL (eventual consistency), when to use each',
      },
      {
        w: 9,
        f: 'Sharding + Replication',
        t: 'Horizontal partitioning (hash/range sharding), consistent hashing, read replicas, leader-follower replication, multi-leader',
      },
      {
        w: 10,
        f: 'DynamoDB Deep Dive (your FPO!)',
        t: 'Single-table design, partition keys, GSI/LSI, DynamoDB streams — relate everything to how FPO Cloud uses DynamoDB',
      },
      {
        w: 11,
        f: 'Design: Key-Value Store + Chat',
        t: 'Design: Key-Value Store (consistent hashing + replication) and WhatsApp (WebSocket + message queue). Spoken 45 min each.',
      },
    ],
  },
  {
    id: 'p33',
    block: 'sd',
    seq: 33,
    icon: '🌐',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'Distributed Systems',
    days: 28,
    ds: 929,
    de: 956,
    period: 'Jan 15 - Feb 11, 2029',
    ms: 'Distributed Systems Done · D956',
    about:
      '4 weeks. Consistency models, consensus algorithms (Raft/Paxos concepts), distributed transactions, event sourcing (your FPO mission-feed!), Saga pattern (your Step Functions!), message queues (SQS/Kafka), CQRS.',
    courses: [
      'Martin Kleppmann — DDIA chapters 8-9 (distributed systems fundamentals)',
      'AWS re:Invent — Event Sourcing and CQRS on AWS (your FPO patterns)',
    ],
    wplan: [
      {
        w: 12,
        f: 'Consistency + Consensus',
        t: 'Strong vs eventual consistency, linearizability, Raft consensus algorithm concept, leader election, distributed locks',
      },
      {
        w: 13,
        f: 'Message Queues + Event Sourcing',
        t: 'SQS vs Kafka vs EventBridge (your FPO!), pub-sub, event sourcing (your FPO mission-feed table!), CQRS pattern',
      },
      {
        w: 14,
        f: 'Distributed Transactions + Saga',
        t: '2PC (two-phase commit), Saga pattern orchestration vs choreography (Step Functions = Saga in your FPO!)',
      },
      {
        w: 15,
        f: 'Design: Notification System + News Feed',
        t: 'Full designs spoken 45 min each — Notification System (push/pull/fan-out) and Twitter News Feed (fan-out on write vs read)',
      },
    ],
  },
  {
    id: 'p34',
    block: 'sd',
    seq: 34,
    icon: '🏛',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'Microservices Architecture',
    days: 21,
    ds: 957,
    de: 977,
    period: 'Feb 12 - Mar 4, 2029',
    ms: 'Microservices SD Done · D977',
    about:
      '3 weeks. Service decomposition (DDD), API gateway patterns, service mesh, inter-service communication (REST vs gRPC vs async messaging), observability (your Datadog FPO setup!), deployment patterns (blue-green, canary).',
    courses: [
      'Sam Newman — Building Microservices (book, key chapters)',
      'Chris Richardson — microservices.io patterns catalogue (free online)',
    ],
    wplan: [
      {
        w: 16,
        f: 'Service Decomposition + DDD',
        t: 'Domain-driven design, bounded contexts, strangler fig pattern, decompose monolith. Map to FPO Cloud service boundaries.',
      },
      {
        w: 17,
        f: 'API Gateway + Service Mesh',
        t: 'API gateway (AWS API Gateway — your FPO!), service discovery, sidecar proxy, Istio concepts, inter-service auth',
      },
      {
        w: 18,
        f: 'Design: Uber + Design: Dropbox',
        t: 'Full Uber design (ride matching, GPS, dynamic pricing) + Dropbox design (file sync, chunking, delta sync). 45 min each.',
      },
    ],
  },
  {
    id: 'p35',
    block: 'sd',
    seq: 35,
    icon: '📐',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'Classic Designs',
    days: 35,
    ds: 978,
    de: 1012,
    period: 'Mar 5 - Apr 8, 2029',
    ms: 'Classic Designs Done · D1012',
    about:
      '5 weeks. Design 1 system per day spoken aloud, 45 minutes, no notes. Cover all classic interview systems: URL shortener, WhatsApp, Twitter, YouTube, Netflix, Uber, Airbnb, Instagram, Google Search, Amazon, Ticketmaster, Slack. Your FPO multi-tenant SaaS = one of the designs.',
    courses: [
      'Alex Xu — System Design Interview Vol 1 + Vol 2 (both books)',
      'Mikhail Smarshchok — System Design Interview Guide 20+ designs (Udemy, 18h)',
      'Bogdan Stashchuk — Pragmatic System Design: WHY decisions were made (Udemy, 12h)',
    ],
    wplan: [
      {
        w: 19,
        f: 'URL Shortener + Pastebin + Typeahead',
        t: 'URL Shortener (Base62, DynamoDB, cache), Pastebin (object storage S3), Typeahead (trie + cache). 45 min each spoken.',
      },
      {
        w: 20,
        f: 'WhatsApp + Facebook Messenger',
        t: 'WebSocket connection, message delivery guarantees, group chats, presence system, E2E encryption concepts',
      },
      {
        w: 21,
        f: 'YouTube + Netflix',
        t: 'Video upload pipeline, CDN streaming, adaptive bitrate, recommendation engine basics, storage tier strategy',
      },
      {
        w: 22,
        f: 'Twitter + Instagram + News Feed',
        t: 'Fan-out on write vs read, celebrity problem, graph DB for follows, photo storage, timeline generation',
      },
      {
        w: 23,
        f: 'Uber + Airbnb + Google Maps',
        t: 'Real-time location tracking, geospatial indexing (QuadTree/GeoHash), ride matching, search/ranking, map tile serving',
      },
    ],
  },
  {
    id: 'p36',
    block: 'sd',
    seq: 36,
    icon: '⚡',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'Advanced Designs + Trade-offs',
    days: 21,
    ds: 1013,
    de: 1033,
    period: 'Apr 9 - Apr 29, 2029',
    ms: 'Advanced Designs Done · D1033',
    about:
      '3 weeks. Distributed cache, search engine, payment system, stock exchange, leaderboard. Deep trade-off analysis — why THIS database, why THIS queue, why THIS consistency model. Bogdan Stashchuk production WHY decisions.',
    courses: [
      'Bogdan Stashchuk — Pragmatic System Design (Udemy, 12h) · production trade-offs',
      'Alex Xu — System Design Interview Vol 2 (advanced systems)',
    ],
    wplan: [
      {
        w: 24,
        f: 'Distributed Cache + Search Engine',
        t: 'Design Redis-like distributed cache (consistent hashing + eviction) and Google Search (crawling + indexing + ranking). 45 min each.',
      },
      {
        w: 25,
        f: 'Payment System + Stock Exchange',
        t: 'Payment (idempotency, double-charge prevention, ACID transactions) + Stock Exchange (order book, matching engine, low latency)',
      },
      {
        w: 26,
        f: 'Production Trade-off Masterclass',
        t: 'For each system: WHY DynamoDB vs PostgreSQL? WHY Kafka vs SQS? WHY gRPC vs REST? Write 1 ADR per design.',
      },
    ],
  },
  {
    id: 'p37',
    block: 'sd',
    seq: 37,
    icon: '🎯',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECDD3',
    name: 'Mock Interviews + ADRs + DONE',
    days: 19,
    ds: 1034,
    de: 1052,
    period: 'Apr 30 - May 18, 2029',
    ms: '1052 STUDY DAYS COMPLETE · May 18, 2029',
    about:
      '4+ weeks. Final sprint. 20 full cold system design interviews (spoken aloud, 45 min, no notes). Write Architecture Decision Records for 5 systems. Update GitHub portfolio with all SD diagrams. Day 1064 = May 18, 2029 = 1064 Days of Code COMPLETE.',
    courses: [
      'Pramp.com — free peer system design mock interviews',
      'Interviewing.io — anonymous mock interviews with FAANG engineers',
      'excalidraw.com — draw architecture diagrams for portfolio',
    ],
    wplan: [
      {
        w: 27,
        f: 'Mock SD Interviews 1-7',
        t: '7 full mocks — Day 1035-1041. 45 min each, spoken aloud, no notes. Focus on weakest 3 systems from Classic Designs block.',
      },
      {
        w: 28,
        f: 'Mock SD Interviews 8-14',
        t: '7 more mocks — different systems. Start with requirements clarification. Practice CAP theorem + trade-off articulation.',
      },
      {
        w: 29,
        f: 'ADRs + Portfolio',
        t: 'Write 5 Architecture Decision Records. Draw clean diagrams for portfolio. Update LinkedIn. GitHub portfolio SD section.',
      },
      {
        w: 30,
        f: 'Final Mock + Day 1064 DONE',
        t: '6 final mocks. Day 1064 = May 18, 2029 = 1064 Days · 152 Weeks of Code COMPLETE. 🎉',
      },
    ],
  },
];

const MILESTONES = [
  {
    day: 31,
    icon: '🔧',
    label: 'DevOps with AWS',
    date: 'Jul 20, 2026',
    color: '#D97706',
  },
  {
    day: 62,
    icon: '🛡',
    label: 'SRE with AWS',
    date: 'Aug 20, 2026',
    color: '#0369A1',
  },
  {
    day: 93,
    icon: '🔬',
    label: 'QE with AWS',
    date: 'Sep 20, 2026',
    color: '#4338CA',
  },
  {
    day: 124,
    icon: '🟨',
    label: 'JavaScript',
    date: 'Oct 21, 2026',
    color: '#F59E0B',
  },
  {
    day: 155,
    icon: '🔷',
    label: 'TypeScript',
    date: 'Nov 21, 2026',
    color: '#3B82F6',
  },
  {
    day: 186,
    icon: '⚛',
    label: 'React',
    date: 'Dec 22, 2026',
    color: '#0EA5E9',
  },
  {
    day: 217,
    icon: '▲',
    label: 'Next.js',
    date: 'Jan 22, 2027',
    color: '#374151',
  },
  {
    day: 247,
    icon: '📱',
    label: 'React Native',
    date: 'Feb 21, 2027',
    color: '#7C3AED',
  },
  {
    day: 277,
    icon: '🐍',
    label: 'Python',
    date: 'Mar 23, 2027',
    color: '#16A34A',
  },
  {
    day: 307,
    icon: '🤖',
    label: 'Agentic AI',
    date: 'Apr 22, 2027',
    color: '#6366F1',
  },
  {
    day: 337,
    icon: '🎸',
    label: 'Django',
    date: 'May 22, 2027',
    color: '#059669',
  },
  {
    day: 367,
    icon: '☕',
    label: 'J2SE Java Core',
    date: 'Jun 21, 2027',
    color: '#D97706',
  },
  {
    day: 397,
    icon: '🏭',
    label: 'J2EE Enterprise',
    date: 'Jul 21, 2027',
    color: '#EA580C',
  },
  {
    day: 427,
    icon: '🗄',
    label: 'JPA / Hibernate',
    date: 'Aug 20, 2027',
    color: '#B45309',
  },
  {
    day: 457,
    icon: '🌱',
    label: 'Spring Boot',
    date: 'Sep 19, 2027',
    color: '#16A34A',
  },
  {
    day: 487,
    icon: '🏁',
    label: 'Microservices — DONE',
    date: 'May 18, 2029',
    color: '#E11D48',
  },
  {
    day: 515,
    icon: '🧩',
    label: 'Arrays + Strings',
    date: 'Nov 16, 2027',
    color: '#6366F1',
  },
  {
    day: 557,
    icon: '📚',
    label: 'Stacks + Queues',
    date: 'Dec 28, 2027',
    color: '#6366F1',
  },
  {
    day: 592,
    icon: '🌲',
    label: 'Trees + BST',
    date: 'Feb 1, 2028',
    color: '#6366F1',
  },
  {
    day: 648,
    icon: '🕸',
    label: 'Graphs',
    date: 'Mar 28, 2028',
    color: '#6366F1',
  },
  {
    day: 697,
    icon: '🔄',
    label: 'Sorting + Searching',
    date: 'May 16, 2028',
    color: '#6366F1',
  },
  {
    day: 753,
    icon: '💎',
    label: 'Dynamic Programming',
    date: 'Jul 11, 2028',
    color: '#4F46E5',
  },
  {
    day: 823,
    icon: '🌳',
    label: 'Tries + Advanced Trees',
    date: 'Sep 19, 2028',
    color: '#6366F1',
  },
  {
    day: 851,
    icon: '🏁',
    label: 'DSA COMPLETE',
    date: 'Oct 29, 2028',
    color: '#6366F1',
  },
  {
    day: 879,
    icon: '🏗',
    label: 'SD Fundamentals',
    date: 'Nov 26, 2028',
    color: '#7C3AED',
  },
  {
    day: 928,
    icon: '🗄',
    label: 'Databases + Caching',
    date: 'Jan 14, 2029',
    color: '#7C3AED',
  },
  {
    day: 956,
    icon: '🌐',
    label: 'Distributed Systems',
    date: 'Feb 11, 2029',
    color: '#7C3AED',
  },
  {
    day: 1012,
    icon: '📐',
    label: 'Classic Designs',
    date: 'Apr 8, 2029',
    color: '#7C3AED',
  },
  {
    day: 1052,
    icon: '🏆',
    label: '1052 Study Days — COMPLETE',
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
  const bColors = {
    devops: '#D97706',
    frontend: '#0EA5E9',
    python: '#16A34A',
    java: '#D97706',
  };
  const bBg = {
    devops: '#FFF7ED',
    frontend: '#F0F9FF',
    python: '#F0FDF4',
    java: '#FFFBEB',
  };
  const bBorder = {
    devops: '#FED7AA',
    frontend: '#BAE6FD',
    python: '#BBF7D0',
    java: '#FDE68A',
  };
  const bLabel = {
    devops: 'DevOps',
    frontend: 'Frontend',
    python: 'Python',
    java: 'Java',
  };
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
            {'M' + p.seq}
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
                color: bColors[p.block],
                border: '1px solid ' + bBorder[p.block],
                whiteSpace: 'nowrap',
              }}
            >
              {bLabel[p.block]}
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
            {p.period + ' · ' + p.days + 'd · D' + p.ds + '-D' + p.de}
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
          <div style={{ fontSize: 8, color: '#94A3B8' }}>
            {'M' + p.seq + '/16'}
          </div>
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
            {p.courses.map((c, i) => (
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
                  }}
                >
                  {i + 1 + '.'}
                </span>
                <span
                  style={{ fontSize: 10, color: '#374151', lineHeight: 1.6 }}
                >
                  {c}
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
              {'📅 Week-by-Week — ' + p.wplan.length + ' weeks'}
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
                    <div style={{ display: 'flex', gap: 4, marginBottom: 2 }}>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          color: '#0F172A',
                        }}
                      >
                        {wk.f}
                      </span>
                      <span style={{ fontSize: 8, color: '#94A3B8' }}>
                        {'W' + wk.w}
                      </span>
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
                  'Sat Jun 20, 2026 to Fri May 18, 2029 · 1052 study days + 12-day Vipassana break · D1-D487: 5:30-8:30 AM · D488+: 6:45-8:45 AM'
                }
              </div>
            </div>
          </div>

          {/* 4 block summary */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2,1fr)',
              gap: 6,
              marginBottom: 11,
            }}
          >
            {[
              {
                icon: '🔧',
                label: 'DevOps',
                months: 'M01-M03',
                sub: 'DevOps · SRE · QE — all with AWS',
                col: '#D97706',
                days: 'D1-D93',
              },
              {
                icon: '⚡',
                label: 'Frontend',
                months: 'M04-M08',
                sub: 'JS · TS · React · Next.js · React Native',
                col: '#0EA5E9',
                days: 'D94-D247',
              },
              {
                icon: '🐍',
                label: 'Python',
                months: 'M09-M11',
                sub: 'Python · Agentic AI · Django',
                col: '#16A34A',
                days: 'D248-D337',
              },
              {
                icon: '☕',
                label: 'Java',
                months: 'M12-M16',
                sub: 'J2SE · J2EE · JPA · Spring Boot · Microservices',
                col: '#D97706',
                days: 'D338-D487',
              },
              {
                icon: '🧩',
                label: 'Data Structures',
                months: 'D488-D851',
                sub: 'Nov 1 2027 – Oct 29 2028 · 52 weeks · After Vipassana break · 6:45-8:45 AM + Vipassana 5:30-6:35 AM',
                col: '#6366F1',
                days: '52 weeks',
              },
              {
                icon: '🏗',
                label: 'System Design',
                months: 'D852-D1052',
                sub: 'Oct 30 2028 – May 18 2029 · 28 weeks · 6:45-8:45 AM daily',
                col: '#7C3AED',
                days: '28 weeks',
              },
            ].map((b) => (
              <div
                key={b.label}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: 9,
                  padding: '9px 11px',
                  border: '1px solid ' + b.col + '50',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    marginBottom: 3,
                  }}
                >
                  <span style={{ fontSize: 16 }}>{b.icon}</span>
                  <span style={{ fontSize: 10, fontWeight: 800, color: b.col }}>
                    {b.label}
                  </span>
                  <span
                    style={{
                      fontSize: 8,
                      color: 'rgba(255,255,255,0.4)',
                      marginLeft: 'auto',
                    }}
                  >
                    {b.months}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 8,
                    color: 'rgba(255,255,255,0.6)',
                    marginBottom: 2,
                  }}
                >
                  {b.days}
                </div>
                <div
                  style={{
                    fontSize: 8,
                    color: 'rgba(255,255,255,0.45)',
                    lineHeight: 1.5,
                  }}
                >
                  {b.sub}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              background: 'rgba(245,158,11,0.15)',
              border: '1px solid rgba(245,158,11,0.35)',
              borderRadius: 8,
              padding: '7px 11px',
              marginBottom: 9,
              display: 'flex',
              gap: 8,
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 15 }}>{'⏰'}</span>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)' }}>
              {
                '5:30 AM – 8:30 AM daily · MANDATORY · Weekends: Maximum Time · 1 skill per month'
              }
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
                  title={'M' + p.seq + ': ' + p.name}
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
                {prog +
                  '% · Day ' +
                  Math.min(d + 1, 1052) +
                  ' of 1052 study days'}
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
              {'🏆 16 Monthly Milestones — ' + msDone + ' completed'}
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
        {BLOCKS.map((blk, blkIdx) => {
          if (blk.isBreak)
            return (
              <div key="vipassana" style={{ marginTop: 20 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      height: 2,
                      flex: 1,
                      background: 'linear-gradient(90deg,#9B6DFF,#9B6DFF10)',
                    }}
                  />
                  <div
                    style={{
                      textAlign: 'center',
                      flexShrink: 0,
                      padding: '0 6px',
                    }}
                  >
                    <div
                      style={{
                        fontSize: 'clamp(9px,2.5vw,11px)',
                        fontWeight: 800,
                        color: '#9B6DFF',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {'🧘 VIPASSANA CAMP · BREAK · NOT COUNTED IN STUDY DAYS'}
                    </div>
                    <div
                      style={{ fontSize: 8, color: '#94A3B8', marginTop: 1 }}
                    >
                      {
                        'Oct 20–31, 2027 · 12 days · Silent retreat · Digital detox · Reset before Data Structures'
                      }
                    </div>
                  </div>
                  <div
                    style={{
                      height: 2,
                      flex: 1,
                      background: 'linear-gradient(90deg,#9B6DFF10,#9B6DFF)',
                    }}
                  />
                </div>
                <div
                  style={{
                    background: 'linear-gradient(135deg,#1a0a3e,#120a2e)',
                    border: '2px solid #9B6DFF40',
                    borderRadius: 16,
                    padding: '24px 28px',
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    gap: 20,
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      bottom: -30,
                      right: -30,
                      width: 150,
                      height: 150,
                      background:
                        'radial-gradient(circle,#9B6DFF25,transparent 70%)',
                      borderRadius: '50%',
                    }}
                  />
                  <div style={{ fontSize: 52 }}>{'🧘'}</div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Syne',sans-serif",
                        fontWeight: 800,
                        fontSize: 'clamp(16px,4vw,22px)',
                        color: '#C4A0FF',
                        marginBottom: 6,
                      }}
                    >
                      {'Vipassana Meditation Camp'}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: '#9A92B4',
                        lineHeight: 1.75,
                        marginBottom: 12,
                      }}
                    >
                      {
                        'Wednesday Oct 20 → Sunday Oct 31, 2027 — 12 days of noble silence, no devices, no study. Pure reset after 487 days of intense learning before starting Data Structures on Nov 1.'
                      }
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                      {[
                        '🔇 Noble Silence',
                        '📵 No Devices',
                        '🧘 10h Meditation/day',
                        '🌅 Wake 4:00 AM',
                        '✨ Complete Reset',
                        '📿 Vipassana Technique',
                        '⛺ Residential Camp',
                        '🍃 Vegetarian Food',
                      ].map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: 10,
                            fontWeight: 500,
                            padding: '4px 11px',
                            borderRadius: 8,
                            background: '#9B6DFF18',
                            color: '#C4A0FF',
                            border: '1px solid #9B6DFF30',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div
                      style={{
                        marginTop: 14,
                        padding: '10px 14px',
                        background: '#9B6DFF12',
                        borderRadius: 10,
                        border: '1px solid #9B6DFF25',
                      }}
                    >
                      <div
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          color: '#C4A0FF',
                          marginBottom: 3,
                        }}
                      >
                        {'📅 New Schedule from Nov 1, 2027 (D488 onwards)'}
                      </div>
                      <div style={{ fontSize: 11, color: '#9A92B4' }}>
                        {
                          '🕰 5:30–6:35 AM · Vipassana meditation (65 min) · 6:45–8:45 AM · Study (2 hours) · Daily until May 18, 2029'
                        }
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'center', minWidth: 80 }}>
                    <div
                      style={{
                        fontFamily: "'Syne',sans-serif",
                        fontWeight: 800,
                        fontSize: 40,
                        color: '#9B6DFF',
                        lineHeight: 1,
                      }}
                    >
                      {'12'}
                    </div>
                    <div
                      style={{
                        fontSize: 9,
                        color: '#6B6480',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: 8,
                      }}
                    >
                      {'days'}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Syne',sans-serif",
                        fontWeight: 800,
                        fontSize: 10,
                        color: '#C4A0FF',
                        background: '#9B6DFF18',
                        border: '1px solid #9B6DFF30',
                        borderRadius: 8,
                        padding: '5px 8px',
                      }}
                    >
                      {'NOT COUNTED'}
                    </div>
                  </div>
                </div>
              </div>
            );
          const bPhases = PHASES.filter((p) => p.block === blk.id);
          return (
            <div key={blk.id}>
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
                      'linear-gradient(90deg,' +
                      blk.col +
                      ',' +
                      blk.col +
                      '10)',
                  }}
                />
                <div
                  style={{
                    textAlign: 'center',
                    flexShrink: 0,
                    padding: '0 6px',
                  }}
                >
                  <div
                    style={{
                      fontSize: 'clamp(9px,2.5vw,11px)',
                      fontWeight: 800,
                      color: blk.col,
                      letterSpacing: '0.08em',
                    }}
                  >
                    {blk.months && !isNaN(blk.months)
                      ? blk.label + ' — ' + blk.months + ' MONTHS'
                      : blk.label}
                  </div>
                  <div style={{ fontSize: 8, color: '#94A3B8', marginTop: 1 }}>
                    {blk.sub}
                  </div>
                </div>
                <div
                  style={{
                    height: 2,
                    flex: 1,
                    background:
                      'linear-gradient(90deg,' +
                      blk.col +
                      '10,' +
                      blk.col +
                      ')',
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {bPhases.map((p) => (
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
          );
        })}

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
            {
              '🏆 1052 Study Days + 12-Day Vipassana Break · Jun 20, 2026 to May 18, 2029'
            }
          </div>
          <div
            style={{
              fontSize: 9,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 8,
            }}
          >
            {
              'D1-D487: 5:30-8:30 AM · Break: Oct 20-31, 2027 Vipassana · D488+: Vipassana 5:30-6:35 AM then Study 6:45-8:45 AM daily'
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
                  {p.icon + ' M' + p.seq}
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
