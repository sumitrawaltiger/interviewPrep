import { useState } from 'react';

// 16 Months of Code
// Sat Jun 20, 2026 to Tue Oct 19, 2027 — 487 days
// 5:30 AM to 8:30 AM daily mandatory
// Block 1: DevOps (3 months) → Block 2: Frontend (5 months) → Block 3: Python (3 months) → Block 4: Java (5 months)

const START = new Date('2026-06-20');
const TOTAL = 487;

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
    date: 'Oct 19, 2027',
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
                {'16 Months of Code'}
              </div>
              <div
                style={{
                  fontSize: 9,
                  color: 'rgba(255,255,255,0.6)',
                  marginTop: 2,
                }}
              >
                {
                  'Sat Jun 20, 2026 to Tue Oct 19, 2027 · 487 days · 5:30 AM to 8:30 AM daily mandatory'
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
                {prog + '% · Day ' + Math.min(d + 1, 487) + ' of 487'}
              </span>
              <span>{'Oct 19, 2027'}</span>
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
        {BLOCKS.map((blk) => {
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
                    {blk.label + ' — ' + blk.months + ' MONTHS'}
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
            {'🏆 16 Months of Code · Jun 20, 2026 to Oct 19, 2027'}
          </div>
          <div
            style={{
              fontSize: 9,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 8,
            }}
          >
            {
              '487 days · 5:30 AM to 8:30 AM mandatory · DevOps(3) → Frontend(5) → Python(3) → Java(5)'
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
