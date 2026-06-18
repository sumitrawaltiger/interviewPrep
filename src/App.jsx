import { useState } from 'react';

// 18 Months of Code — AWS Centric
// Thu Jun 18, 2026 to Fri Dec 17, 2027 — 548 days
// 5:30 AM to 8:30 AM daily mandatory
// AWS = Months 1-3 (PRIORITY per Karsten)
// React Native = Month 4 (FPO frontend)
// Then 14 more skills M05-M18

const START = new Date('2026-06-18');
const TOTAL = 548;

const PHASES = [
  // ══ MONTHS 1-3: AWS (PRIORITY — per Karsten) ═══════════════════════════════

  {
    id: 'm01',
    seq: 1,
    icon: '☁',
    color: '#D97706',
    dark: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'AWS Fundamentals + Core Services',
    label: 'Month 1 of 3 · AWS PRIORITY',
    days: 30,
    ds: 1,
    de: 30,
    period: 'Jun 18 - Jul 17, 2026',
    ms: 'AWS Core Services Done · D30',
    about:
      '30 days. AWS foundations with Educative + Udemy. IAM (users/roles/policies/STS), EC2 (instance types/AMI/EBS/auto scaling), S3 (buckets/policies/versioning/lifecycle/encryption), VPC (subnets/route tables/NAT/IGW/Security Groups/NACL), RDS (PostgreSQL/MySQL), DynamoDB (YOUR FPO database — tables/GSI/LSI/streams), CloudWatch, CloudTrail. Everything maps to your FPO production architecture.',
    courses: [
      'Educative — Become an AWS Cloud Architect (path) · primary',
      'Stephane Maarek — Ultimate AWS Certified Solutions Architect Associate 2026 (Udemy) · core reference',
      'AWS Skill Builder — free labs for hands-on practice · daily 30 min',
      'FPO context: every service = something you use in production (DynamoDB, Lambda, Cognito, S3, CloudWatch)',
    ],
    wplan: [
      {
        w: 1,
        f: 'IAM + EC2 + EBS',
        t: 'IAM users/groups/roles/policies/MFA/STS, EC2 instance types/launch/connect/AMI/EBS volume types/snapshots/backups',
      },
      {
        w: 2,
        f: 'S3 + VPC Networking',
        t: 'S3 buckets/policies/versioning/lifecycle/cross-region replication/encryption. VPC/subnets/route tables/NAT gateway/IGW/Security Groups/NACL',
      },
      {
        w: 3,
        f: 'RDS + DynamoDB + CloudWatch',
        t: 'RDS (Multi-AZ/read replicas/backups), DynamoDB tables/GSI/LSI/streams/TTL (your FPO DB!), CloudWatch metrics/logs/alarms/dashboards',
      },
      {
        w: 4,
        f: 'Hands-on Projects',
        t: 'Build: 3-tier app (ALB + EC2 + RDS), S3 static website + CloudFront CDN, DynamoDB CRUD API. Relate each to FPO Cloud architecture.',
      },
    ],
  },

  {
    id: 'm02',
    seq: 2,
    icon: '⚡',
    color: '#F59E0B',
    dark: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'AWS DevOps + Serverless + Containers',
    label: 'Month 2 of 3 · AWS PRIORITY',
    days: 31,
    ds: 31,
    de: 61,
    period: 'Jul 18 - Aug 17, 2026',
    ms: 'AWS DevOps + Serverless Done · D61',
    about:
      '31 days. Lambda (your FPO architecture!), Step Functions (your FPO workflows!), API Gateway, SQS/SNS/EventBridge (your FPO events!), ECS Fargate, ECR, EKS basics, CodePipeline/CodeBuild/CodeDeploy, GitHub Actions to AWS, Terraform CDK (TypeScript — your FPO stack!). This is your daily work — go deep.',
    courses: [
      'Stephane Maarek — AWS Certified Developer Associate 2026 (Udemy) · Lambda/DynamoDB/API Gateway deep dive',
      'Educative — AWS Lambda and Serverless Architecture · serverless patterns',
      'Stephane Maarek — AWS Certified DevOps Engineer Professional (Udemy) · CI/CD and containers',
      'AWS CDK docs — TypeScript CDK (your FPO uses this for all infrastructure as code)',
    ],
    wplan: [
      {
        w: 5,
        f: 'Lambda + API Gateway + Step Functions',
        t: 'Lambda functions/layers/concurrency/cold starts, API Gateway REST vs HTTP, Step Functions Express vs Standard (YOUR FPO workflows!)',
      },
      {
        w: 6,
        f: 'SQS + SNS + EventBridge + Kinesis',
        t: 'SQS queues/DLQ/FIFO, SNS topics/subscriptions, EventBridge rules/buses/pipes (YOUR FPO event-driven arch!), Kinesis streams',
      },
      {
        w: 7,
        f: 'ECS + ECR + EKS Basics',
        t: 'Docker on AWS (ECR push/pull), ECS task defs/Fargate/services/load balancing, EKS cluster basics with eksctl and kubectl',
      },
      {
        w: 8,
        f: 'CI/CD + CDK + IaC',
        t: 'CodePipeline/CodeBuild/CodeDeploy, GitHub Actions OIDC to AWS (keyless auth), AWS CDK TypeScript (YOUR FPO stack!), Terraform basics',
      },
    ],
  },

  {
    id: 'm03',
    seq: 3,
    icon: '🏆',
    color: '#B45309',
    dark: '#92400E',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'AWS Advanced + Solutions Architect',
    label: 'Month 3 of 3 · AWS PRIORITY',
    days: 31,
    ds: 62,
    de: 92,
    period: 'Aug 18 - Sep 17, 2026',
    ms: 'AWS Advanced + SAA Ready · D92',
    about:
      '31 days. Advanced AWS — Route 53, CloudFront, ElastiCache, Cognito (your FPO auth!), Secrets Manager/KMS, WAF/Shield, Organizations/Control Tower (your FPO governance work!), Well-Architected Framework, cost optimization. SAA-C03 exam prep. Multi-tenant SaaS patterns (your FPO). Advanced CDK patterns.',
    courses: [
      'Stephane Maarek — AWS Solutions Architect Associate SAA-C03 (Udemy) · exam prep + practice tests',
      'Tutorials Dojo — SAA-C03 Practice Exams (600+ questions) · exam simulation',
      'Educative — AWS Security and Compliance · Cognito/KMS/Secrets Manager deep dive',
      'AWS re:Invent talks on multi-tenant SaaS (your FPO architecture) + Serverless patterns',
    ],
    wplan: [
      {
        w: 9,
        f: 'Route 53 + CloudFront + ElastiCache',
        t: 'Route 53 routing policies/health checks, CloudFront distributions/OAC/caching, ElastiCache Redis/Memcached, Global Accelerator',
      },
      {
        w: 10,
        f: 'Cognito + Secrets Manager + Security',
        t: 'Cognito user pools/identity pools/JWT (YOUR FPO auth!), Secrets Manager, KMS keys, WAF/Shield, IAM best practices, SCPs',
      },
      {
        w: 11,
        f: 'Organizations + Well-Architected',
        t: 'AWS Organizations/Control Tower/SCP (your LZA work!), Well-Architected 6 pillars, cost optimization, Trusted Advisor, Savings Plans',
      },
      {
        w: 12,
        f: 'SAA-C03 Exam Prep + Mock Tests',
        t: 'Tutorials Dojo 600 practice questions, weak area revision, hands-on labs. SAA-C03 exam ready. Multi-tenant SaaS architecture patterns.',
      },
    ],
  },

  // ══ MONTH 4: REACT NATIVE (FPO FRONTEND) ══════════════════════════════════

  {
    id: 'm04',
    seq: 4,
    icon: '📱',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'React Native (Chaicode + FPO App)',
    label: 'Month 4 · React Native · FPO Frontend',
    days: 30,
    ds: 93,
    de: 122,
    period: 'Sep 18 - Oct 17, 2026',
    ms: 'React Native Done · D122',
    about:
      '30 days. React Native via Chaicode — FPO Cloud mobile frontend. Core components, React Navigation v6, Redux Toolkit in RN, Expo SDK device APIs, animations, EAS Build. Deploy FPO mobile flight status app to TestFlight on your iPad. Uses your AWS knowledge from M01-M03 for backend calls.',
    courses: [
      'Chaicode — React Native Full Course (primary, free, Hindi + English)',
      'Stephen Grider — The Complete React Native + Hooks Course 4.8 stars (38h) · supplementary',
      'Expo documentation — EAS Build, TestFlight submission, Expo Go debugging',
      'FPO context: mobile app calls your AWS API Gateway + Lambda + DynamoDB from M01-M03',
    ],
    wplan: [
      {
        w: 13,
        f: 'Core Components + Layout',
        t: 'View, Text, Image, TextInput, StyleSheet, Flexbox, FlatList, SectionList — exercises on iPad via Expo Go',
      },
      {
        w: 14,
        f: 'React Navigation v6',
        t: 'Stack Navigator, Bottom Tab Navigator, Drawer Navigator, nested navigation, passing params, deep linking',
      },
      {
        w: 15,
        f: 'State + Device APIs',
        t: 'Redux Toolkit in RN, AsyncStorage persistence, Camera, Location, Push Notifications, Expo SDK modules',
      },
      {
        w: 16,
        f: 'Animations + EAS + FPO App',
        t: 'Reanimated 2, Gesture Handler, EAS Build config, TestFlight submission. FPO mobile flight status app deployed to iPad.',
      },
    ],
  },

  // ══ MONTHS 5-18: REMAINING 14 SKILLS ══════════════════════════════════════

  {
    id: 'm05',
    seq: 5,
    icon: '🟨',
    color: '#F59E0B',
    dark: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'JavaScript',
    label: 'Month 5 · JavaScript',
    days: 31,
    ds: 123,
    de: 153,
    period: 'Oct 18 - Nov 17, 2026',
    ms: 'JavaScript Done · D153',
    about:
      '31 days. JavaScript fundamentals through advanced. ES6+ features, DOM manipulation, Promises, async/await, closures, prototypes, classes. Build 3 projects. Foundation for TypeScript, React, Next.js months ahead.',
    courses: [
      'Jonas Schmedtmann — The Complete JavaScript Course 2026 (Udemy, 69h) · most comprehensive',
      'javascript.info — free online book, best JS reference alongside the course',
    ],
    wplan: [
      {
        w: 17,
        f: 'JS Fundamentals',
        t: 'Variables (let/const/var), data types, operators, control flow, loops, functions, scope, hoisting',
      },
      {
        w: 18,
        f: 'ES6+ Modern JS',
        t: 'Arrow functions, destructuring, spread/rest, template literals, optional chaining, nullish coalescing, modules',
      },
      {
        w: 19,
        f: 'DOM + Async JS',
        t: 'DOM manipulation, events, event delegation. Promises, async/await, fetch API, error handling, JSON',
      },
      {
        w: 20,
        f: 'Advanced + Projects',
        t: "Closures, prototypes, ES6 classes, 'this' keyword. Build: To-Do App + Weather App (fetch) + Quiz App (classes)",
      },
    ],
  },

  {
    id: 'm06',
    seq: 6,
    icon: '🔷',
    color: '#3B82F6',
    dark: '#1D4ED8',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    name: 'TypeScript',
    label: 'Month 6 · TypeScript',
    days: 30,
    ds: 154,
    de: 183,
    period: 'Nov 18 - Dec 17, 2026',
    ms: 'TypeScript Done · D183',
    about:
      '30 days. TypeScript on top of JavaScript. Type system, interfaces, generics, utility types, strict mode, declaration files. Your FPO Cloud AWS CDK and Step Functions are already TypeScript — this formalises that knowledge.',
    courses: [
      'Matt Pocock — Total TypeScript (interactive, free fundamentals + paid advanced) · best TS learning',
      'Stephen Grider — TypeScript The Complete Developers Guide (Udemy) · comprehensive reference',
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
        f: 'Advanced + Config',
        t: 'Decorators, declaration files (.d.ts), tsconfig strict mode. Convert JS projects to TS. Typed AWS CDK patterns.',
      },
    ],
  },

  {
    id: 'm07',
    seq: 7,
    icon: '⚛',
    color: '#0EA5E9',
    dark: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    name: 'React',
    label: 'Month 7 · React',
    days: 31,
    ds: 184,
    de: 214,
    period: 'Dec 18, 2026 - Jan 17, 2027',
    ms: 'React Done · D214',
    about:
      '31 days. React with TypeScript. Components, hooks, React Router v6, Redux Toolkit, RTK Query, testing with React Testing Library. Build FPO flight dashboard capstone — calls your AWS API Gateway from M01-M03. Builds on your existing React knowledge from FPO Cloud work.',
    courses: [
      'John Smilga — React 18 Tutorial and Projects Course 2026 (Udemy, 50h) · 25+ real projects',
      'Max Schwarzmuller — React The Complete Guide 2026 (Udemy) · TypeScript + testing + Redux deep dive',
    ],
    wplan: [
      {
        w: 25,
        f: 'React Foundations',
        t: 'JSX, components, props, useState, conditional rendering, lists/keys. Vite + TypeScript setup.',
      },
      {
        w: 26,
        f: 'Hooks + Router',
        t: 'useEffect, useRef, useMemo, useCallback, custom hooks. React Router v6 nested routes, dynamic params, loaders.',
      },
      {
        w: 27,
        f: 'State Management',
        t: 'Context API + useReducer, Redux Toolkit createSlice/configureStore, RTK Query for async API state management',
      },
      {
        w: 28,
        f: 'Advanced + Capstone',
        t: 'React.memo, lazy/Suspense, error boundaries. Build FPO Flight Dashboard: calls AWS API Gateway + Lambda + DynamoDB.',
      },
    ],
  },

  {
    id: 'm08',
    seq: 8,
    icon: '▲',
    color: '#374151',
    dark: '#111827',
    bg: '#F9FAFB',
    border: '#D1D5DB',
    name: 'Next.js',
    label: 'Month 8 · Next.js',
    days: 31,
    ds: 215,
    de: 245,
    period: 'Jan 18 - Feb 17, 2027',
    ms: 'Next.js Done · D245',
    about:
      '31 days. Next.js 15 with App Router. Server Components, Server Actions, NextAuth v5, Prisma ORM, PostgreSQL, deploy to Vercel. Build FPO web portal as capstone — authenticated flight ops dashboard deployed publicly.',
    courses: [
      'Max Schwarzmuller — Next.js and React The Complete Guide (Udemy, 25h) · App Router focused',
      'Lee Robinson (Vercel) — Next.js Learn (free official course) · App Router fundamentals',
    ],
    wplan: [
      {
        w: 29,
        f: 'App Router Foundations',
        t: 'File-based routing, layouts, loading/error/not-found pages, route groups, parallel routes, intercepting routes',
      },
      {
        w: 30,
        f: 'Server Components + Data',
        t: 'RSC vs Client Components, fetch caching/revalidation, ISR/SSG/SSR, Suspense streaming, Server Actions',
      },
      {
        w: 31,
        f: 'Auth + Database',
        t: 'NextAuth v5 OAuth providers, middleware, protected routes, Prisma ORM + PostgreSQL, migrations',
      },
      {
        w: 32,
        f: 'Deploy + Capstone',
        t: 'Vercel deployment, env vars, image optimization. FPO web portal: auth + flight dashboard + AWS backend.',
      },
    ],
  },

  {
    id: 'm09',
    seq: 9,
    icon: '🐍',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'Python',
    label: 'Month 9 · Python',
    days: 28,
    ds: 246,
    de: 273,
    period: 'Feb 18 - Mar 17, 2027',
    ms: 'Python Done · D273',
    about:
      '28 days. Python fundamentals through advanced plus AWS boto3 automation. OOP, file handling, JSON, APIs, decorators, asyncio. Your SCB Thailand Python work means fast revision. boto3 extends your M01-M03 AWS knowledge into scripting and automation.',
    courses: [
      'Automate the Boring Stuff with Python (Al Sweigart, free online) · practical Python automation',
      'Corey Schafer — Python YouTube playlist (free, best OOP + decorators coverage)',
      'boto3 official docs + FPO context: automate Lambda deploys, DynamoDB ops, CloudWatch log queries',
    ],
    wplan: [
      {
        w: 33,
        f: 'Python Fundamentals + OOP',
        t: 'Variables, data types, control flow, functions, list/dict comprehensions, OOP classes, inheritance, dunder methods',
      },
      {
        w: 34,
        f: 'File + JSON + APIs',
        t: 'File I/O, pathlib, JSON processing, requests library, REST API calls, authentication, error handling',
      },
      {
        w: 35,
        f: 'Advanced Python',
        t: 'Decorators, generators, context managers, type hints, regex, asyncio basics, virtual environments, packaging',
      },
      {
        w: 36,
        f: 'boto3 + AWS Automation',
        t: 'boto3: EC2 provisioning, S3 operations, Lambda invoke, DynamoDB CRUD, CloudWatch log queries — extend M01-M03 AWS',
      },
    ],
  },

  {
    id: 'm10',
    seq: 10,
    icon: '🌶',
    color: '#059669',
    dark: '#047857',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    name: 'Flask',
    label: 'Month 10 · Flask',
    days: 31,
    ds: 274,
    de: 304,
    period: 'Mar 18 - Apr 17, 2027',
    ms: 'Flask Done · D304',
    about:
      '31 days. Flask web framework — routing, Blueprints, SQLAlchemy ORM, Flask-RESTful, JWT auth, testing, deploy to AWS ECS (using your M01-M03 knowledge). Build Employee Management REST API as capstone, containerised and deployed to AWS.',
    courses: [
      'Jose Salvatierra — REST APIs with Flask and Python (Udemy) · best Flask REST API course',
      'Corey Schafer — Flask YouTube series (free) · foundations and Blueprints',
    ],
    wplan: [
      {
        w: 37,
        f: 'Flask Core + Routing',
        t: 'App factory, Blueprints, routing, HTTP methods, request/response, Jinja2 templates, config management',
      },
      {
        w: 38,
        f: 'Database + SQLAlchemy',
        t: 'Flask-SQLAlchemy models, relationships (one-to-many/many-to-many), Flask-Migrate Alembic migrations',
      },
      {
        w: 39,
        f: 'REST API + Auth + JWT',
        t: 'Flask-RESTful, JWT (Flask-JWT-Extended), CORS, request validation, role-based access, error handlers',
      },
      {
        w: 40,
        f: 'Testing + Deploy to AWS',
        t: 'pytest + Flask test client, Docker + Gunicorn + Nginx, deploy to AWS ECS Fargate using M01-M03 skills.',
      },
    ],
  },

  {
    id: 'm11',
    seq: 11,
    icon: '🤖',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Agentic AI using Python',
    label: 'Month 11 · Agentic AI',
    days: 30,
    ds: 305,
    de: 334,
    period: 'Apr 18 - May 17, 2027',
    ms: 'Agentic AI Done · D334',
    about:
      '30 days. LangChain, LangGraph, RAG pipelines, multi-agent systems, MCP protocol, Ed Donner 8 projects. Your SCB Thailand LangChain/LangGraph experience = deep revision plus extension. Capstone: FPO AI assistant (natural language flight queries via LangChain + DynamoDB + Lambda on AWS).',
    courses: [
      'Ed Donner — Complete Agentic AI Engineering Course 2026 (Udemy/own site, 30h) · 8 real projects',
      'Eden Marco — LangChain Develop LLM Powered Applications (Udemy, 22h) · LangChain deep dive',
      'AWS Bedrock docs — deploy Agentic AI on AWS infrastructure from M01-M03',
    ],
    wplan: [
      {
        w: 41,
        f: 'GenAI + LangChain Core',
        t: 'LLMs, embeddings, RAG, LangChain chains/tools/memory/LCEL. Vector DBs (Pinecone/FAISS). Revisit SCB LangChain work.',
      },
      {
        w: 42,
        f: 'LangGraph + Multi-Agent',
        t: 'State machines, conditional edges, supervisor agents, parallel execution, human-in-the-loop — Ed Donner',
      },
      {
        w: 43,
        f: 'Ed Donner 8 Projects',
        t: 'Career Digital Twin, Deep Research Agent, SDR Agent, Browser Agent, MCP server integration, Docker containers',
      },
      {
        w: 44,
        f: 'FPO AI Capstone on AWS',
        t: 'FPO AI: natural language flight queries via LangChain + DynamoDB + Lambda. Deploy to AWS Bedrock/Lambda from M01-M03.',
      },
    ],
  },

  {
    id: 'm12',
    seq: 12,
    icon: '☕',
    color: '#D97706',
    dark: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'J2SE + J2EE + JPA',
    label: 'Month 12 · Java Foundations',
    days: 31,
    ds: 335,
    de: 365,
    period: 'May 18 - Jun 17, 2027',
    ms: 'Java Foundations Done · D365',
    about:
      '31 days. Compressed Java foundations — J2SE (Java 8+, Collections, Streams, Lambdas), J2EE core concepts (Servlets/JDBC/JAX-RS), JPA/Hibernate (entity mapping, relationships, N+1, @Transactional). Your C# .NET 8 background makes Java syntax fast. Foundation for Spring Boot and Microservices months.',
    courses: [
      'Navin Reddy Telusko — Java Programming (YouTube free, comprehensive) · J2SE fast-track',
      'John Thompson — Hibernate and Spring Data JPA Beginner to Guru (Udemy, 55h) · JPA deep dive',
      'Baeldung.com — free Java/Spring articles, best Java reference alongside courses',
    ],
    wplan: [
      {
        w: 45,
        f: 'J2SE: Java 8+ Core',
        t: 'Syntax vs C#, OOP, Collections (ArrayList/HashMap/HashSet), Generics, Lambdas, Stream API, Optional, CompletableFuture',
      },
      {
        w: 46,
        f: 'J2EE: Servlets + JDBC + JAX-RS',
        t: 'HttpServlet lifecycle, JDBC + HikariCP, JAX-RS @Path/@GET/@POST, CDI @Inject, JMS concepts (bridges to Kafka later)',
      },
      {
        w: 47,
        f: 'JPA: Entity Mapping + Relationships',
        t: '@Entity/@Id, @OneToMany/@ManyToMany, CascadeType/FetchType, JPQL, @NamedQuery, N+1 problem, @EntityGraph',
      },
      {
        w: 48,
        f: 'JPA: Transactions + Spring Data',
        t: '@Transactional propagation/isolation, optimistic locking (@Version), JpaRepository, @Query, L1/L2 caching',
      },
    ],
  },

  {
    id: 'm13',
    seq: 13,
    icon: '🌱',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'Spring Boot',
    label: 'Month 13 · Spring Boot',
    days: 30,
    ds: 366,
    de: 395,
    period: 'Jun 18 - Jul 17, 2027',
    ms: 'Spring Boot Done · D395',
    about:
      '30 days. Spring Boot 3 — IoC, Spring MVC REST APIs, Spring Security + JWT + OAuth2, testing (JUnit5/Mockito/Testcontainers). Your C# .NET 8 + FPO Cognito OAuth2 background maps exactly. Deploy to AWS ECS using M01-M03 skills. Build production-grade API.',
    courses: [
      'John Thompson — Spring Framework 6 Beginner to Guru (Udemy, 40h) · most comprehensive',
      'Ranga Karanam — Master Spring Boot 3 and Spring Framework 6 (Udemy, 36h) · practical projects',
    ],
    wplan: [
      {
        w: 49,
        f: 'Spring Boot Core + IoC',
        t: 'Auto-configuration, @Bean/@Component/@Service/@Repository, constructor injection, AOP, @ConfigurationProperties',
      },
      {
        w: 50,
        f: 'Spring MVC + REST APIs',
        t: '@RestController, ResponseEntity, validation (@Valid), @ExceptionHandler, @ControllerAdvice, OpenAPI/Swagger, MapStruct',
      },
      {
        w: 51,
        f: 'Spring Security + OAuth2',
        t: 'SecurityFilterChain, JWT filter, UserDetailsService, BCrypt. OAuth2 resource server + JWKS = your FPO Cognito pattern!',
      },
      {
        w: 52,
        f: 'Testing + Capstone on AWS',
        t: '@WebMvcTest, MockMvc, @DataJpaTest, Testcontainers, Mockito. Build full REST API + JWT + JPA. Deploy to AWS ECS.',
      },
    ],
  },

  {
    id: 'm14',
    seq: 14,
    icon: '🏛',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECDD3',
    name: 'Microservices',
    label: 'Month 14 · Microservices',
    days: 31,
    ds: 396,
    de: 426,
    period: 'Jul 18 - Aug 17, 2027',
    ms: 'Microservices Done · D426',
    about:
      '31 days. Microservices with Spring Cloud, Kafka, CQRS, Event Sourcing, Saga pattern, deploy to AWS EKS. Every single pattern maps to your FPO production work: EventBridge = Kafka, Step Functions = Saga, Lambda = Microservice, DynamoDB streams = Event Sourcing.',
    courses: [
      'Ranga Karanam — Java Spring Boot Microservices with K8s and Docker (Udemy, 35h)',
      'Sean Campbell — Master Spring Boot Microservices CQRS and Event Sourcing (Udemy, 10h)',
    ],
    wplan: [
      {
        w: 53,
        f: 'Service Design + Spring Cloud',
        t: 'DDD bounded contexts, Eureka discovery, Spring Cloud Gateway, config server, Feign clients — all map to FPO',
      },
      {
        w: 54,
        f: 'Resilience + Kafka',
        t: 'Resilience4j circuit breaker/retry/bulkhead. Kafka producers/consumers/partitions — maps to your FPO EventBridge',
      },
      {
        w: 55,
        f: 'CQRS + Event Sourcing',
        t: 'Read/write separation, Axon Framework event store, event replay — maps to FPO mission-feed event sourcing table',
      },
      {
        w: 56,
        f: 'Saga + Deploy to AWS EKS',
        t: 'Orchestration vs choreography (Step Functions = Saga!). Deploy microservices to EKS from M01-M03. Write 1 ADR.',
      },
    ],
  },

  {
    id: 'm15',
    seq: 15,
    icon: '🛡',
    color: '#0369A1',
    dark: '#1e40af',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    name: 'SRE: Site Reliability Engineering',
    label: 'Month 15 · SRE + Docker',
    days: 31,
    ds: 427,
    de: 457,
    period: 'Aug 18 - Sep 17, 2027',
    ms: 'SRE Done · D457',
    about:
      '31 days. SRE principles with Docker as the core practical tool. Docker fundamentals through advanced, multi-stage builds, container security, Trivy scanning. SLOs/SLIs/error budgets, incident response, on-call practices, observability (metrics/logs/traces). Your FPO Cloud on-call experience maps directly.',
    courses: [
      'Nana Janashia TechWorld — Docker and Kubernetes (YouTube free) · best Docker fundamentals',
      'Google SRE Book (free online — sre.google) · SRE principles, chapters 1-10',
      'Datadog docs — APM, distributed tracing, SLO monitoring (your FPO tool!)',
    ],
    wplan: [
      {
        w: 57,
        f: 'Docker Core + CLI',
        t: 'Container vs VM, Dockerfile (FROM/RUN/COPY/CMD), multi-stage builds, docker CLI, image layers, .dockerignore',
      },
      {
        w: 58,
        f: 'Docker Compose + Security',
        t: 'Multi-service Compose, bridge/overlay networks, volumes, Trivy scanning, non-root user, ECR push/pull',
      },
      {
        w: 59,
        f: 'SRE Principles + Incidents',
        t: 'SLOs/SLIs/SLAs, error budgets, toil reduction. Incident severity, runbooks, on-call, blameless post-mortems, MTTR',
      },
      {
        w: 60,
        f: 'Observability + Reliability',
        t: 'Prometheus/Grafana, distributed tracing (Jaeger), Datadog APM (your FPO!). Chaos engineering, canary releases, feature flags.',
      },
    ],
  },

  {
    id: 'm16',
    seq: 16,
    icon: '🔬',
    color: '#4338CA',
    dark: '#3730A3',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'QE: Quality Engineering',
    label: 'Month 16 · QE + Kubernetes',
    days: 30,
    ds: 458,
    de: 487,
    period: 'Sep 18 - Oct 17, 2027',
    ms: 'QE Done · D487',
    about:
      '30 days. QE with Kubernetes as the core infrastructure tool. K8s architecture through EKS deployment, Helm charts, ArgoCD GitOps. Test automation (Jest/Playwright/Postman), BDD Cucumber (maps to your Reqnroll/SpecFlow on FPO!), k6 performance testing, SonarQube quality gates.',
    courses: [
      'Mumshad Mannambeth — Kubernetes for Absolute Beginners (KodeKloud, Udemy) · K8s fundamentals',
      'Kubernetes Official docs + Killercoda labs · hands-on K8s practice',
      'Playwright docs + Cucumber.js docs · test automation (maps to your Reqnroll BDD on FPO)',
    ],
    wplan: [
      {
        w: 61,
        f: 'K8s Core + Networking',
        t: 'Control plane, kubectl, Pods/Deployments/Services, Ingress (nginx), ConfigMaps, Secrets, PVs — deploy to EKS',
      },
      {
        w: 62,
        f: 'K8s Advanced + Helm + EKS',
        t: 'RBAC, HPA, Helm charts (install/upgrade/rollback), AWS EKS deployment, ArgoCD GitOps pipeline',
      },
      {
        w: 63,
        f: 'QE + Test Automation',
        t: 'Testing pyramid, Jest, Playwright/Cypress e2e, Postman/Newman API testing, BDD Cucumber (= your Reqnroll on FPO)',
      },
      {
        w: 64,
        f: 'Performance + Quality Gates',
        t: 'k6/JMeter load testing, SonarQube quality gates, code coverage thresholds, mutation testing, shift-left CI/CD',
      },
    ],
  },

  {
    id: 'm17',
    seq: 17,
    icon: '🏗',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'System Design',
    label: 'Month 17 · System Design',
    days: 31,
    ds: 488,
    de: 518,
    period: 'Oct 18 - Nov 17, 2027',
    ms: 'System Design Done · D518',
    about:
      '31 days. System design interview mastery. Frank Kane 5-step template. Design 1 system per day spoken aloud, 45 minutes, no notes. Your FPO multi-tenant SaaS + Lambda + DynamoDB + Kafka production architecture is a huge advantage. Design YOUR OWN system as one of the practice designs.',
    courses: [
      'Frank Kane ex-Amazon — Mastering the System Design Interview (Udemy, 5h) · framework first',
      'Mikhail Smarshchok — System Design Interview Guide 20+ designs (Udemy, 18h) · classic designs',
      'Bogdan Stashchuk — Pragmatic System Design (Udemy, 12h) · WHY production decisions were made',
    ],
    wplan: [
      {
        w: 65,
        f: 'SD Framework + Classic 1',
        t: 'Frank Kane 5-step. URL Shortener, WhatsApp, Twitter — Requirements to HLD to DB to API, spoken 45 min each',
      },
      {
        w: 66,
        f: 'Classic Designs 2',
        t: 'Netflix, Uber, Notification System, Rate Limiter, Distributed Cache — Mikhail Smarshchok 20+ designs course',
      },
      {
        w: 67,
        f: 'Trade-offs + FPO Design',
        t: 'Bogdan Stashchuk production WHY. Design FPO Flight Optimiser (your system!) using all 18 months of knowledge.',
      },
      {
        w: 68,
        f: 'Mock System Designs x10',
        t: '10 cold designs spoken aloud — no notes — 45 min each. Write Architecture Decision Records for weakest systems.',
      },
    ],
  },

  {
    id: 'm18',
    seq: 18,
    icon: '🧩',
    color: '#374151',
    dark: '#111827',
    bg: '#F9FAFB',
    border: '#D1D5DB',
    name: 'Data Structures (Java)',
    label: 'Month 18 · DSA · FINAL',
    days: 30,
    ds: 519,
    de: 548,
    period: 'Nov 18 - Dec 17, 2027',
    ms: '548 DAYS COMPLETE · Dec 17, 2027',
    about:
      '30 days. Data Structures and Algorithms in Java. Arrays, Linked Lists, Stacks, Queues, Trees, Heaps, Graphs, Sorting, Dynamic Programming. LeetCode in Java. Last month — Day 548 = December 17, 2027 = 18 Months of Code COMPLETE.',
    courses: [
      'Scott Barrett — Java DS and Algorithms plus LeetCode (Udemy, 4.8 stars) · Java + Python side by side',
      'Andrei Neagoie ZTM — Master the Coding Interview DS and Algorithms (Udemy) · FAANG prep',
    ],
    wplan: [
      {
        w: 69,
        f: 'Arrays + Linked Lists + Stacks',
        t: 'Two pointers, sliding window, binary search. Linked list (reverse/cycle/merge). Monotonic stack, min-stack in Java.',
      },
      {
        w: 70,
        f: 'Trees + Heaps',
        t: 'BST operations, DFS (pre/in/post-order), BFS level-order, trie. PriorityQueue, Top-K patterns, heap sort.',
      },
      {
        w: 71,
        f: 'Graphs + Sorting',
        t: 'BFS/DFS, topological sort, Dijkstra, union-find. All sorting algorithms with complexity proofs in Java.',
      },
      {
        w: 72,
        f: 'DP + Final Day 548',
        t: '1D DP (coin change/house robber/jump game), 2D DP (LCS/knapsack), backtracking. Dec 17, 2027 = DONE.',
      },
    ],
  },
];

const MILESTONES = [
  {
    day: 30,
    icon: '☁',
    label: 'AWS Core Services Done',
    date: 'Jul 17, 2026',
    color: '#D97706',
  },
  {
    day: 61,
    icon: '⚡',
    label: 'AWS DevOps + Serverless',
    date: 'Aug 17, 2026',
    color: '#F59E0B',
  },
  {
    day: 92,
    icon: '🏆',
    label: 'AWS Advanced + SAA Ready',
    date: 'Sep 17, 2026',
    color: '#B45309',
  },
  {
    day: 122,
    icon: '📱',
    label: 'React Native Done',
    date: 'Oct 17, 2026',
    color: '#7C3AED',
  },
  {
    day: 153,
    icon: '🟨',
    label: 'JavaScript',
    date: 'Nov 17, 2026',
    color: '#F59E0B',
  },
  {
    day: 183,
    icon: '🔷',
    label: 'TypeScript',
    date: 'Dec 17, 2026',
    color: '#3B82F6',
  },
  {
    day: 214,
    icon: '⚛',
    label: 'React',
    date: 'Jan 17, 2027',
    color: '#0EA5E9',
  },
  {
    day: 245,
    icon: '▲',
    label: 'Next.js',
    date: 'Feb 17, 2027',
    color: '#374151',
  },
  {
    day: 273,
    icon: '🐍',
    label: 'Python',
    date: 'Mar 17, 2027',
    color: '#16A34A',
  },
  {
    day: 304,
    icon: '🌶',
    label: 'Flask',
    date: 'Apr 17, 2027',
    color: '#059669',
  },
  {
    day: 334,
    icon: '🤖',
    label: 'Agentic AI',
    date: 'May 17, 2027',
    color: '#6366F1',
  },
  {
    day: 365,
    icon: '☕',
    label: 'Java (J2SE+J2EE+JPA)',
    date: 'Jun 17, 2027',
    color: '#D97706',
  },
  {
    day: 395,
    icon: '🌱',
    label: 'Spring Boot',
    date: 'Jul 17, 2027',
    color: '#16A34A',
  },
  {
    day: 426,
    icon: '🏛',
    label: 'Microservices',
    date: 'Aug 17, 2027',
    color: '#E11D48',
  },
  {
    day: 457,
    icon: '🛡',
    label: 'SRE + Docker',
    date: 'Sep 17, 2027',
    color: '#0369A1',
  },
  {
    day: 487,
    icon: '🔬',
    label: 'QE + Kubernetes',
    date: 'Oct 17, 2027',
    color: '#4338CA',
  },
  {
    day: 518,
    icon: '🏗',
    label: 'System Design',
    date: 'Nov 17, 2027',
    color: '#7C3AED',
  },
  {
    day: 548,
    icon: '🧩',
    label: 'DSA Java DONE',
    date: 'Dec 17, 2027',
    color: '#374151',
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
  const [topicOpen, setTopicOpen] = useState(false);
  const [wkOpen, setWkOpen] = useState(false);
  const isAWS = p.seq <= 3;
  const isRN = p.seq === 4;
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
              : isAWS && !isDone
                ? '#D97706'
                : isDone
                  ? p.color + '28'
                  : p.border),
        background: open ? p.bg : isDone ? '#FAFBFF' : '#fff',
        opacity: isDone ? 0.78 : 1,
        boxShadow: open
          ? '0 6px 24px ' + p.color + '18'
          : isCurrent
            ? '0 0 0 3px #FEF3C7,0 2px 8px rgba(0,0,0,0.06)'
            : isAWS && !isDone
              ? '0 0 0 2px #FEF3C7'
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
            {isAWS && !isDone && (
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
                {'⭐ PRIORITY'}
              </span>
            )}
            {isRN && !isDone && (
              <span
                style={{
                  fontSize: 8,
                  fontWeight: 800,
                  padding: '1px 6px',
                  borderRadius: 12,
                  background: '#F5F3FF',
                  color: '#6D28D9',
                  border: '1px solid #DDD6FE',
                  whiteSpace: 'nowrap',
                }}
              >
                {'📱 FPO Frontend'}
              </span>
            )}
            <span
              style={{
                fontSize: 8,
                fontWeight: 700,
                padding: '1px 6px',
                borderRadius: 10,
                background: p.color + '15',
                color: p.color,
                border: '1px solid ' + p.color + '30',
                whiteSpace: 'nowrap',
              }}
            >
              {p.label}
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
            {p.period + ' · ' + p.days + ' days · D' + p.ds + '-D' + p.de}
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
            {'M' + p.seq + '/18'}
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
              {'📚 COURSES + RESOURCES'}
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
                    marginTop: 1,
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
              {'📅 Week-by-Week Plan — 4 weeks'}
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
                        display: 'flex',
                        gap: 4,
                        alignItems: 'center',
                        marginBottom: 2,
                      }}
                    >
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
                {'18 Months of Code'}
              </div>
              <div
                style={{
                  fontSize: 9,
                  color: 'rgba(255,255,255,0.6)',
                  marginTop: 2,
                }}
              >
                {
                  'Thu Jun 18, 2026 to Fri Dec 17, 2027 · 548 days · 5:30 AM to 8:30 AM daily mandatory'
                }
              </div>
            </div>
          </div>

          <div
            style={{
              background: 'rgba(245,158,11,0.22)',
              border: '1px solid rgba(245,158,11,0.5)',
              borderRadius: 9,
              padding: '9px 12px',
              marginBottom: 11,
              display: 'flex',
              gap: 9,
              alignItems: 'flex-start',
            }}
          >
            <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>
              {'⭐'}
            </span>
            <div>
              <div style={{ fontSize: 10, fontWeight: 800, color: '#FDE68A' }}>
                {'AWS PRIORITY — Months 1-3 · per Karsten performance review'}
              </div>
              <div
                style={{
                  fontSize: 8,
                  color: 'rgba(255,255,255,0.6)',
                  marginTop: 2,
                }}
              >
                {
                  'M01: AWS Core Services (IAM/EC2/S3/VPC/RDS/DynamoDB) · M02: DevOps+Serverless+Containers (Lambda/Step Functions/ECS/EKS/CDK) · M03: Advanced+SAA-C03 (Cognito/Secrets Manager/Organizations/Well-Architected)'
                }
              </div>
            </div>
          </div>

          <div
            style={{
              background: 'rgba(124,58,237,0.2)',
              border: '1px solid rgba(124,58,237,0.4)',
              borderRadius: 9,
              padding: '8px 12px',
              marginBottom: 11,
              display: 'flex',
              gap: 9,
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 16, flexShrink: 0 }}>{'📱'}</span>
            <div>
              <div style={{ fontSize: 10, fontWeight: 800, color: '#DDD6FE' }}>
                {'REACT NATIVE — Month 4 · FPO Cloud Mobile Frontend'}
              </div>
              <div
                style={{
                  fontSize: 8,
                  color: 'rgba(255,255,255,0.55)',
                  marginTop: 1,
                }}
              >
                {
                  'Chaicode course · Build FPO mobile flight status app · calls AWS API Gateway + Lambda + DynamoDB from M01-M03'
                }
              </div>
            </div>
          </div>

          <div
            style={{
              background: 'rgba(245,158,11,0.15)',
              border: '1px solid rgba(245,158,11,0.35)',
              borderRadius: 8,
              padding: '7px 11px',
              marginBottom: 11,
              display: 'flex',
              gap: 8,
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 15, flexShrink: 0 }}>{'⏰'}</span>
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
              <span>{'Jun 18, 2026'}</span>
              <span
                style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 700 }}
              >
                {prog + '% · Day ' + Math.min(d + 1, 548) + ' of 548'}
              </span>
              <span>{'Dec 17, 2027'}</span>
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
              {'🏆 18 Monthly Milestones — ' + msDone + ' completed'}
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
                gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))',
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
        {[
          {
            label: '⭐ MONTHS 1-3 · AWS PRIORITY',
            sub: 'D1-D92 · Jun 18 – Sep 17, 2026 · Core Services + DevOps/Serverless + Advanced/SAA-C03',
            col: '#D97706',
            ids: ['m01', 'm02', 'm03'],
          },
          {
            label: '📱 MONTH 4 · REACT NATIVE',
            sub: 'D93-D122 · Sep 18 – Oct 17, 2026 · Chaicode course · FPO mobile app on iPad',
            col: '#7C3AED',
            ids: ['m04'],
          },
          {
            label: '📚 MONTHS 5-18 · REMAINING SKILLS',
            sub: 'D123-D548 · Oct 18, 2026 – Dec 17, 2027 · JS, TS, React, Next.js, Python, Flask, AI, Java, Spring Boot, Microservices, SRE, QE, SD, DSA',
            col: '#6366F1',
            ids: [
              'm05',
              'm06',
              'm07',
              'm08',
              'm09',
              'm10',
              'm11',
              'm12',
              'm13',
              'm14',
              'm15',
              'm16',
              'm17',
              'm18',
            ],
          },
        ].map((section) => (
          <div key={section.label}>
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
                    section.col +
                    ',' +
                    section.col +
                    '10)',
                }}
              />
              <div
                style={{ textAlign: 'center', flexShrink: 0, padding: '0 6px' }}
              >
                <div
                  style={{
                    fontSize: 'clamp(9px,2.5vw,11px)',
                    fontWeight: 800,
                    color: section.col,
                    letterSpacing: '0.08em',
                  }}
                >
                  {section.label}
                </div>
                <div style={{ fontSize: 8, color: '#94A3B8', marginTop: 1 }}>
                  {section.sub}
                </div>
              </div>
              <div
                style={{
                  height: 2,
                  flex: 1,
                  background:
                    'linear-gradient(90deg,' +
                    section.col +
                    '10,' +
                    section.col +
                    ')',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {PHASES.filter((p) => section.ids.includes(p.id)).map((p) => (
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
            {'🏆 18 Months of Code · Jun 18, 2026 to Dec 17, 2027'}
          </div>
          <div
            style={{
              fontSize: 9,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 8,
            }}
          >
            {
              '548 days · 5:30 AM to 8:30 AM mandatory · AWS first (M1-M3) · React Native (M4) · 14 skills (M5-M18)'
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
