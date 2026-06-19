import { useState } from 'react';

// 16 Months of Code
// Sat Jun 20, 2026 to Tue Oct 19, 2027 — 487 days
// 5:30 AM to 8:30 AM daily mandatory · 1 skill per month

const START = new Date('2026-06-20');
const TOTAL = 487;

const PHASES = [
  {
    id: 'm01',
    seq: 1,
    icon: '🔧',
    color: '#D97706',
    dark: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'DevOps with AWS',
    label: 'Month 1 · AWS Priority',
    days: 31,
    ds: 1,
    de: 31,
    period: 'Jun 20 - Jul 20, 2026',
    ms: 'DevOps with AWS Done · D31',
    about:
      '31 days. DevOps practices using AWS as the platform. CI/CD with CodePipeline/CodeBuild/CodeDeploy and GitHub Actions (OIDC keyless auth to AWS). Docker on AWS (ECR, ECS Fargate). AWS CDK TypeScript (your FPO IaC!). Terraform for AWS infra. IAM, EC2, S3, VPC foundations. Jenkins pipelines. SonarQube quality gates. Everything maps to your FPO Cloud daily work.',
    courses: [
      'Stephane Maarek — Ultimate AWS Certified Developer Associate 2026 (Udemy) · CI/CD + Lambda + DynamoDB',
      'Nana Janashia TechWorld — DevOps Bootcamp (YouTube/Udemy) · Docker, Jenkins, GitHub Actions',
      'AWS Skill Builder — free hands-on labs daily (CodePipeline, CodeBuild, ECS labs)',
      'AWS CDK TypeScript docs — you already use this for FPO infrastructure as code',
    ],
    wplan: [
      {
        w: 1,
        f: 'AWS Core: IAM + EC2 + S3 + VPC',
        t: 'IAM users/roles/policies/MFA, EC2 instance types/AMI/EBS, S3 buckets/policies/versioning/encryption, VPC/Security Groups/NACL',
      },
      {
        w: 2,
        f: 'Docker on AWS: ECR + ECS Fargate',
        t: 'Dockerfile/multi-stage builds, ECR push/pull, ECS task definitions/Fargate/services, ALB + ECS, container health checks',
      },
      {
        w: 3,
        f: 'CI/CD: GitHub Actions + CodePipeline + Jenkins',
        t: 'GitHub Actions OIDC to AWS (keyless auth), CodePipeline/CodeBuild/CodeDeploy, Jenkins declarative pipelines, SonarQube quality gates',
      },
      {
        w: 4,
        f: 'AWS CDK + Terraform + IaC',
        t: 'CDK TypeScript stacks/constructs (your FPO pattern!), multi-env deploy. Terraform HCL, providers, state, modules, S3 remote state.',
      },
      {
        w: 5,
        f: 'Projects + Review',
        t: 'Build: end-to-end CI/CD pipeline (GitHub to ECS), containerise a Flask app with ECR/ECS, Terraform AWS infra provisioning.',
      },
    ],
  },
  {
    id: 'm02',
    seq: 2,
    icon: '🛡',
    color: '#0369A1',
    dark: '#1e40af',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    name: 'SRE with AWS',
    label: 'Month 2 · AWS Priority',
    days: 31,
    ds: 32,
    de: 62,
    period: 'Jul 21 - Aug 20, 2026',
    ms: 'SRE with AWS Done · D62',
    about:
      '31 days. Site Reliability Engineering using AWS tools. Lambda (your FPO architecture!), Step Functions (your FPO workflows!), EventBridge (your FPO events!), SQS/SNS, CloudWatch, Datadog APM (your FPO tool!), X-Ray distributed tracing. SLOs/SLIs/error budgets, incident response, on-call, blameless post-mortems. Directly applicable to FPO Cloud production on-call.',
    courses: [
      'Stephane Maarek — AWS SAA-C03 Solutions Architect (Udemy) · architecture + reliability patterns',
      'Google SRE Book (free — sre.google) · chapters 1-10: SLOs, error budgets, on-call, post-mortems',
      'Datadog docs — APM, distributed tracing, SLO monitoring (your live FPO tool — go deep!)',
      'AWS re:Invent — Serverless best practices (Lambda/Step Functions patterns from your FPO stack)',
    ],
    wplan: [
      {
        w: 6,
        f: 'Lambda + Step Functions + EventBridge',
        t: 'Lambda layers/concurrency/cold starts, Step Functions Express vs Standard (YOUR FPO!), EventBridge rules/buses/pipes (YOUR FPO events!)',
      },
      {
        w: 7,
        f: 'SQS + SNS + DynamoDB Streams + Kinesis',
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
        f: 'Projects + Review',
        t: 'Build: SLO dashboard on CloudWatch, FPO-style serverless pipeline (Lambda + Step Functions + EventBridge + DynamoDB), post-mortem template.',
      },
    ],
  },
  {
    id: 'm03',
    seq: 3,
    icon: '🔬',
    color: '#4338CA',
    dark: '#3730A3',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'QE with AWS',
    label: 'Month 3 · AWS Priority',
    days: 31,
    ds: 63,
    de: 93,
    period: 'Aug 21 - Sep 20, 2026',
    ms: 'QE with AWS Done · D93',
    about:
      '31 days. Quality Engineering using AWS infrastructure. EKS (Kubernetes on AWS), Cognito (your FPO auth!), Secrets Manager/KMS, WAF, AWS Organizations/Control Tower (your LZA governance work!). Test automation: Jest, Playwright, Postman/Newman, BDD Cucumber (maps to your Reqnroll/SpecFlow on FPO!), k6 performance testing.',
    courses: [
      'Stephane Maarek — SAA-C03 Practice Tests + Tutorials Dojo 600 questions · AWS certification prep',
      'Mumshad Mannambeth — Kubernetes for Beginners (KodeKloud) · EKS hands-on',
      'Playwright docs + Cucumber.js · test automation (maps to your Reqnroll BDD on FPO Cloud)',
      'AWS Cognito docs — user pools/identity pools/JWT deep dive (your exact FPO auth pattern)',
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
        t: 'Organizations/SCPs, Control Tower (your LZA work!), Well-Architected 6 pillars, Trusted Advisor, cost optimization, SAA-C03 prep',
      },
      {
        w: 14,
        f: 'Test Automation: Jest + Playwright + BDD',
        t: 'Jest unit tests, Playwright/Cypress e2e, Postman/Newman API testing, BDD Cucumber/Gherkin (maps to your Reqnroll on FPO!)',
      },
      {
        w: 15,
        f: 'k6 Performance + SAA-C03 Mock Exams',
        t: 'k6/JMeter load testing on AWS infrastructure, SonarQube quality gates. Tutorials Dojo 600 questions. SAA-C03 exam ready.',
      },
    ],
  },
  {
    id: 'm04',
    seq: 4,
    icon: '🔷',
    color: '#3B82F6',
    dark: '#1D4ED8',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    name: 'TypeScript',
    label: 'Month 4',
    days: 31,
    ds: 94,
    de: 124,
    period: 'Sep 21 - Oct 21, 2026',
    ms: 'TypeScript Done · D124',
    about:
      '31 days. TypeScript — type system, interfaces, generics, utility types, strict mode, decorators, declaration files. Your FPO Cloud AWS CDK and Step Functions are already TypeScript — this formalises and deepens that existing knowledge.',
    courses: [
      'Matt Pocock — Total TypeScript (free fundamentals + advanced) · best TS learning path',
      'Stephen Grider — TypeScript The Complete Developers Guide (Udemy) · comprehensive with projects',
    ],
    wplan: [
      {
        w: 16,
        f: 'TS Type System',
        t: 'Basic types, annotations, inference, union/intersection, literal types, enums, tuples, unknown vs any vs never',
      },
      {
        w: 17,
        f: 'Interfaces + Classes',
        t: 'Interface vs type alias, extending, implements, access modifiers, abstract classes, readonly, optional properties',
      },
      {
        w: 18,
        f: 'Generics + Utility Types',
        t: 'Generic functions/interfaces/classes, constraints, Partial/Required/Readonly/Pick/Omit/Record, conditional types',
      },
      {
        w: 19,
        f: 'Advanced TS + Config',
        t: 'Decorators, declaration files (.d.ts), tsconfig strict mode, module resolution. Convert JS projects to TS. Typed AWS CDK patterns.',
      },
      {
        w: 20,
        f: 'TS Projects + Review',
        t: 'Build: typed REST API client, typed Redux Toolkit store, typed CDK stack. Convert existing JS code to strict TypeScript.',
      },
    ],
  },
  {
    id: 'm05',
    seq: 5,
    icon: '📱',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'React Native',
    label: 'Month 5 · FPO Frontend',
    days: 31,
    ds: 125,
    de: 155,
    period: 'Oct 22 - Nov 21, 2026',
    ms: 'React Native Done · D155',
    about:
      '31 days. React Native via Chaicode — FPO Cloud mobile frontend. Core components, React Navigation v6, Redux Toolkit in RN, Expo SDK device APIs, Reanimated 2 animations, EAS Build. Deploy FPO mobile flight status app to TestFlight on your iPad. Calls AWS API Gateway + Lambda + DynamoDB from M01-M03.',
    courses: [
      'Chaicode — React Native Full Course (primary, free, Hindi + English)',
      'Stephen Grider — The Complete React Native + Hooks Course 4.8 stars (38h) · supplementary',
      'Expo docs — EAS Build, TestFlight submission, Expo Go debugging on your iPad',
    ],
    wplan: [
      {
        w: 21,
        f: 'Core Components + Layout',
        t: 'View, Text, Image, TextInput, StyleSheet, Flexbox, FlatList, SectionList — all exercises on iPad via Expo Go',
      },
      {
        w: 22,
        f: 'React Navigation v6',
        t: 'Stack Navigator, Bottom Tab Navigator, Drawer Navigator, nested navigation, passing params, deep linking',
      },
      {
        w: 23,
        f: 'State + AsyncStorage + Device APIs',
        t: 'Redux Toolkit in RN, AsyncStorage persistence, Camera, Location, Push Notifications, Expo SDK modules',
      },
      {
        w: 24,
        f: 'Animations + EAS Build',
        t: 'Reanimated 2 (useSharedValue/useAnimatedStyle), Gesture Handler, PanGestureHandler, EAS Build config, TestFlight submission',
      },
      {
        w: 25,
        f: 'FPO Mobile App + Deploy',
        t: 'Build FPO mobile flight status app: list flights, check status, weather overlay. Deploy to TestFlight. Portfolio demo.',
      },
    ],
  },
  {
    id: 'm06',
    seq: 6,
    icon: '🟨',
    color: '#F59E0B',
    dark: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'JavaScript',
    label: 'Month 6',
    days: 31,
    ds: 156,
    de: 186,
    period: 'Nov 22 - Dec 22, 2026',
    ms: 'JavaScript Done · D186',
    about:
      '31 days. JavaScript fundamentals through advanced. ES6+ features, DOM, Promises, async/await, closures, prototypes, classes. Build 3 projects. Foundation for React and Next.js months ahead.',
    courses: [
      'Jonas Schmedtmann — The Complete JavaScript Course 2026 (Udemy, 69h) · most comprehensive',
      'javascript.info — free online book, best JS reference alongside the course',
    ],
    wplan: [
      {
        w: 26,
        f: 'JS Fundamentals',
        t: 'Variables (let/const/var), data types, operators, control flow, loops, functions, scope, hoisting',
      },
      {
        w: 27,
        f: 'ES6+ Modern JS',
        t: 'Arrow functions, destructuring, spread/rest, template literals, optional chaining, nullish coalescing, modules',
      },
      {
        w: 28,
        f: 'DOM + Async JS',
        t: 'DOM manipulation, events, event delegation. Promises, async/await, fetch API, error handling, JSON',
      },
      {
        w: 29,
        f: 'Advanced JS',
        t: "Closures, prototypes, ES6 classes, 'this' keyword, call/apply/bind, WeakMap/WeakSet, Proxy, Reflect",
      },
      {
        w: 30,
        f: 'JS Projects + Review',
        t: 'Build: To-Do App (DOM/events), Weather App (fetch + async/await), Quiz App (ES6 classes + local storage)',
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
    label: 'Month 7',
    days: 31,
    ds: 187,
    de: 217,
    period: 'Dec 23, 2026 - Jan 22, 2027',
    ms: 'React Done · D217',
    about:
      '31 days. React with TypeScript. Components, hooks, React Router v6, Redux Toolkit, RTK Query. Build FPO flight dashboard calling AWS API Gateway + Lambda + DynamoDB from M01-M03. Builds on your existing React knowledge from FPO Cloud work.',
    courses: [
      'John Smilga — React 18 Tutorial and Projects Course 2026 (Udemy, 50h) · 25+ real projects',
      'Max Schwarzmuller — React The Complete Guide 2026 (Udemy) · TypeScript + testing + Redux',
    ],
    wplan: [
      {
        w: 31,
        f: 'React Foundations',
        t: 'JSX, components, props, useState, conditional rendering, lists/keys. Vite + TypeScript setup.',
      },
      {
        w: 32,
        f: 'Core Hooks + Router',
        t: 'useEffect, useRef, useMemo, useCallback, custom hooks. React Router v6 nested routes, dynamic params, loaders.',
      },
      {
        w: 33,
        f: 'State Management',
        t: 'Context API + useReducer, Redux Toolkit createSlice/configureStore, RTK Query for async API state',
      },
      {
        w: 34,
        f: 'Advanced React',
        t: 'React.memo, lazy/Suspense, error boundaries, portals, forwardRef, React Testing Library + Jest',
      },
      {
        w: 35,
        f: 'FPO Dashboard Capstone',
        t: 'Build FPO Flight Dashboard: flight list, status cards, weather overlay. Calls AWS API Gateway + Lambda + DynamoDB from M01.',
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
    label: 'Month 8',
    days: 30,
    ds: 218,
    de: 247,
    period: 'Jan 23 - Feb 21, 2027',
    ms: 'Next.js Done · D247',
    about:
      '30 days. Next.js 15 App Router. Server Components, Server Actions, NextAuth v5, Prisma ORM, PostgreSQL, Vercel deploy. Build FPO web portal as capstone — authenticated flight ops dashboard deployed publicly.',
    courses: [
      'Max Schwarzmuller — Next.js and React The Complete Guide (Udemy, 25h) · App Router focused',
      'Lee Robinson (Vercel) — Next.js Learn (free official course) · App Router fundamentals',
    ],
    wplan: [
      {
        w: 36,
        f: 'App Router Foundations',
        t: 'File-based routing, layouts, loading/error/not-found pages, route groups, parallel routes, intercepting routes',
      },
      {
        w: 37,
        f: 'Server Components + Data Fetching',
        t: 'RSC vs Client Components, fetch caching/revalidation, ISR/SSG/SSR strategies, Suspense streaming, Server Actions',
      },
      {
        w: 38,
        f: 'Auth + Database',
        t: 'NextAuth v5 OAuth providers (Google/GitHub), middleware, protected routes, Prisma ORM + PostgreSQL, Alembic migrations',
      },
      {
        w: 39,
        f: 'Deploy + FPO Web Portal Capstone',
        t: 'Vercel deployment, env vars, image optimization. FPO web portal: auth + flight dashboard + AWS API Gateway backend.',
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
    label: 'Month 9',
    days: 30,
    ds: 248,
    de: 277,
    period: 'Feb 22 - Mar 23, 2027',
    ms: 'Python Done · D277',
    about:
      '30 days. Python fundamentals through advanced plus AWS boto3 automation. OOP, file handling, JSON, APIs, decorators, asyncio. Your SCB Thailand Python/boto3 experience means fast revision and deepening. Foundation for Agentic AI and Flask months.',
    courses: [
      'Automate the Boring Stuff with Python (Al Sweigart, free online) · practical Python automation',
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
        t: 'File I/O, pathlib, JSON processing, requests library, REST API calls, OAuth2 auth, error handling, sessions',
      },
      {
        w: 42,
        f: 'Advanced Python',
        t: 'Decorators, generators, context managers, type hints, regex (re module), asyncio basics, virtual environments, packaging',
      },
      {
        w: 43,
        f: 'boto3 + AWS Automation + Review',
        t: 'boto3: EC2 provisioning, S3 ops, Lambda invoke, DynamoDB CRUD, CloudWatch log queries — extend M01-M03 AWS skills',
      },
    ],
  },
  {
    id: 'm10',
    seq: 10,
    icon: '🤖',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Agentic AI using Python',
    label: 'Month 10',
    days: 30,
    ds: 278,
    de: 307,
    period: 'Mar 24 - Apr 22, 2027',
    ms: 'Agentic AI Done · D307',
    about:
      '30 days. LangChain, LangGraph, RAG pipelines, multi-agent systems, MCP protocol, Ed Donner 8 projects. Your SCB Thailand LangChain/LangGraph experience = deep revision + extension. Capstone: FPO AI assistant (natural language flight queries via LangChain + DynamoDB + Lambda on AWS).',
    courses: [
      'Ed Donner — Complete Agentic AI Engineering Course 2026 (Udemy/own site, 30h) · 8 real projects',
      'Eden Marco — LangChain Develop LLM Powered Applications (Udemy, 22h) · LangChain deep dive',
    ],
    wplan: [
      {
        w: 44,
        f: 'GenAI Foundations + LangChain Core',
        t: 'LLMs, embeddings, RAG architecture, LangChain chains/tools/memory/LCEL. Vector DBs (Pinecone/FAISS). Revisit SCB LangChain work.',
      },
      {
        w: 45,
        f: 'LangGraph + Multi-Agent Systems',
        t: 'State machines, conditional edges, supervisor agents, parallel execution, human-in-the-loop patterns — Ed Donner course',
      },
      {
        w: 46,
        f: 'Ed Donner 8 Projects',
        t: 'Career Digital Twin, Deep Research Agent, SDR Agent, Browser Agent, MCP server integration, Engineering Team in Docker',
      },
      {
        w: 47,
        f: 'FPO AI Capstone on AWS',
        t: 'FPO AI Assistant: natural language flight queries via LangChain + DynamoDB + Lambda. Deploy to AWS. Portfolio demo.',
      },
    ],
  },
  {
    id: 'm11',
    seq: 11,
    icon: '🌶',
    color: '#059669',
    dark: '#047857',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    name: 'Flask',
    label: 'Month 11',
    days: 30,
    ds: 308,
    de: 337,
    period: 'Apr 23 - May 22, 2027',
    ms: 'Flask Done · D337',
    about:
      '30 days. Flask web framework — routing, Blueprints, SQLAlchemy ORM, Flask-RESTful, JWT auth, testing, deploy to AWS ECS Fargate. Build Employee Management REST API capstone containerised and deployed to AWS using M01 skills.',
    courses: [
      'Jose Salvatierra — REST APIs with Flask and Python (Udemy) · best Flask REST API course',
      'Corey Schafer — Flask YouTube series (free) · foundations and Blueprints',
    ],
    wplan: [
      {
        w: 48,
        f: 'Flask Core + Blueprints',
        t: 'App factory pattern, Blueprints, routing, HTTP methods, request/response, Jinja2 templates, config management',
      },
      {
        w: 49,
        f: 'Database + SQLAlchemy',
        t: 'Flask-SQLAlchemy models, one-to-many/many-to-many relationships, Flask-Migrate Alembic migrations, query patterns',
      },
      {
        w: 50,
        f: 'REST API + JWT Auth',
        t: 'Flask-RESTful resources, JWT (Flask-JWT-Extended), CORS, request validation (@validate_args), role-based access, error handlers',
      },
      {
        w: 51,
        f: 'Testing + Deploy to AWS ECS',
        t: 'pytest + Flask test client, Docker + Gunicorn + Nginx, deploy to AWS ECS Fargate from M01 skills. Employee Management API capstone.',
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
    name: 'J2SE (Java Core)',
    label: 'Month 12 · Java Block',
    days: 30,
    ds: 338,
    de: 367,
    period: 'May 23 - Jun 21, 2027',
    ms: 'J2SE Done · D367',
    about:
      '30 days. Java Core using your C# .NET background for fast learning. Syntax C# vs Java, OOP, Collections framework, Generics, Java 8+ (Streams, Lambdas, Optional, CompletableFuture), Multithreading, modern Java (records, sealed classes, pattern matching). Foundation for J2EE, JPA and Spring Boot.',
    courses: [
      'Navin Reddy Telusko — Java Programming (YouTube free, comprehensive) · J2SE fast-track',
      'Tim Buchalka — Java Masterclass 2026 (Udemy, 80h) · most comprehensive Java course',
    ],
    wplan: [
      {
        w: 52,
        f: 'Java Syntax + OOP',
        t: 'JDK/JVM/JRE, syntax vs C#, classes, inheritance, polymorphism, interfaces, abstract classes, access modifiers, static members',
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
        t: 'Thread/Runnable, ExecutorService, CompletableFuture. Java 14-21: records, sealed classes, pattern matching, text blocks, switch expressions',
      },
    ],
  },
  {
    id: 'm13',
    seq: 13,
    icon: '🏭',
    color: '#EA580C',
    dark: '#C2410C',
    bg: '#FFF7ED',
    border: '#FED7AA',
    name: 'J2EE (Java Enterprise)',
    label: 'Month 13 · Java Block',
    days: 30,
    ds: 368,
    de: 397,
    period: 'Jun 22 - Jul 21, 2027',
    ms: 'J2EE Done · D397',
    about:
      '30 days. Java Enterprise Edition — Servlets, JSP, JDBC, JAX-RS (REST APIs in Java), CDI dependency injection, EJB session beans, JMS messaging. Foundation for Spring Boot which simplifies all J2EE specs. JMS directly bridges to Kafka in Microservices month.',
    courses: [
      'Baeldung.com — Java EE articles (free, best J2EE reference) · Servlets, JDBC, JAX-RS, CDI',
      'Ranga Karanam — Java EE and Jakarta EE (Udemy) · practical J2EE projects',
    ],
    wplan: [
      {
        w: 56,
        f: 'Servlets + JSP + JDBC',
        t: 'HttpServlet lifecycle, doGet/doPost, filters, session management. JSP EL/JSTL MVC pattern. JDBC with HikariCP connection pooling.',
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
    icon: '🗄',
    color: '#B45309',
    dark: '#92400E',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'JPA / Hibernate',
    label: 'Month 14 · Java Block',
    days: 30,
    ds: 398,
    de: 427,
    period: 'Jul 22 - Aug 20, 2027',
    ms: 'JPA / Hibernate Done · D427',
    about:
      '30 days. JPA and Hibernate deep dive. Entity mapping, relationships (OneToOne/OneToMany/ManyToMany), JPQL, Criteria API, N+1 problem solutions, @Transactional, Spring Data JPA. Every concept maps to FPO Cloud: DynamoDB replaces relational DB but all ORM patterns transfer directly.',
    courses: [
      'John Thompson — Hibernate and Spring Data JPA Beginner to Guru (Udemy, 55h) · best JPA course',
      'Baeldung.com — JPA/Hibernate articles (free) · N+1, caching, transactions deep reference',
    ],
    wplan: [
      {
        w: 60,
        f: 'JPA Entity Mapping',
        t: '@Entity, @Id, @GeneratedValue, @Column, @Table, @Embedded/@Embeddable, EntityManager, entity lifecycle states',
      },
      {
        w: 61,
        f: 'Relationships + JPQL',
        t: '@OneToMany, @ManyToMany, CascadeType, FetchType (LAZY/EAGER), @JoinColumn. JPQL queries, @NamedQuery, Pageable pagination',
      },
      {
        w: 62,
        f: 'N+1 Problem + Transactions',
        t: 'Identifying N+1 with SQL logging, @EntityGraph, JOIN FETCH solutions. @Transactional propagation, isolation levels, optimistic locking (@Version)',
      },
      {
        w: 63,
        f: 'Spring Data JPA + Caching',
        t: 'JpaRepository, @Query, Specification API. L1/L2 caching (EhCache), Hibernate statistics, Spring Data projections, QueryDSL',
      },
    ],
  },
  {
    id: 'm15',
    seq: 15,
    icon: '🌱',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'Spring Boot',
    label: 'Month 15 · Java Block',
    days: 30,
    ds: 428,
    de: 457,
    period: 'Aug 21 - Sep 19, 2027',
    ms: 'Spring Boot Done · D457',
    about:
      '30 days. Spring Boot 3 — IoC container, Spring MVC, REST APIs, Spring Security with JWT and OAuth2, testing (JUnit5/Mockito/Testcontainers). Your C# .NET 8 + FPO Cognito OAuth2 background maps exactly to Spring Security. Deploy production API to AWS ECS using M01 skills.',
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
        t: '@RestController, ResponseEntity, @Valid, @ExceptionHandler, @ControllerAdvice, OpenAPI/Swagger, DTO + MapStruct (your FPO pattern!)',
      },
      {
        w: 66,
        f: 'Spring Security + OAuth2',
        t: 'SecurityFilterChain, JWT filter chain, UserDetailsService, BCrypt. OAuth2 resource server + JWKS endpoint = your exact FPO Cognito pattern!',
      },
      {
        w: 67,
        f: 'Testing + Capstone + AWS Deploy',
        t: '@WebMvcTest, MockMvc, @DataJpaTest, Testcontainers, Mockito. Build full REST API + JWT + JPA + Docker. Deploy to AWS ECS from M01.',
      },
    ],
  },
  {
    id: 'm16',
    seq: 16,
    icon: '🏛',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECDD3',
    name: 'Microservices',
    label: 'Month 16 · Java Block · FINAL',
    days: 30,
    ds: 458,
    de: 487,
    period: 'Sep 20 - Oct 19, 2027',
    ms: '487 DAYS COMPLETE · Oct 19, 2027',
    about:
      '30 days. Microservices with Spring Cloud, Kafka, CQRS, Event Sourcing, Saga pattern, deploy to AWS EKS. Every single pattern maps to FPO Cloud: EventBridge = Kafka, Step Functions = Saga, Lambda = Microservice, DynamoDB streams = Event Sourcing. Your FPO production experience is a massive advantage. Day 487 = Oct 19, 2027 = 16 Months COMPLETE.',
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
        t: 'Resilience4j circuit breaker/retry/bulkhead. Kafka producers/consumers/partitions/offsets — maps to your FPO EventBridge',
      },
      {
        w: 70,
        f: 'CQRS + Event Sourcing',
        t: 'Read/write model separation, Axon Framework event store, event replay — maps to FPO mission-feed event sourcing table',
      },
      {
        w: 71,
        f: 'Saga + EKS Deploy + Final Day',
        t: 'Orchestration vs choreography (Step Functions = Saga!). Deploy microservices to AWS EKS from M01-M03. Day 487 = DONE.',
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
    icon: '🔷',
    label: 'TypeScript',
    date: 'Oct 21, 2026',
    color: '#3B82F6',
  },
  {
    day: 155,
    icon: '📱',
    label: 'React Native',
    date: 'Nov 21, 2026',
    color: '#7C3AED',
  },
  {
    day: 186,
    icon: '🟨',
    label: 'JavaScript',
    date: 'Dec 22, 2026',
    color: '#F59E0B',
  },
  {
    day: 217,
    icon: '⚛',
    label: 'React',
    date: 'Jan 22, 2027',
    color: '#0EA5E9',
  },
  {
    day: 247,
    icon: '▲',
    label: 'Next.js',
    date: 'Feb 21, 2027',
    color: '#374151',
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
    icon: '🌶',
    label: 'Flask',
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
  const isAWS = p.seq <= 3;
  const isRN = p.seq === 5;
  const isJava = p.seq >= 12;
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
            {isAWS && !isDone && (
              <span
                style={{
                  fontSize: 8,
                  fontWeight: 800,
                  padding: '1px 6px',
                  borderRadius: 12,
                  background: '#FEF3C7',
                  color: '#B45309',
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
            {isJava && !isDone && (
              <span
                style={{
                  fontSize: 8,
                  fontWeight: 800,
                  padding: '1px 6px',
                  borderRadius: 12,
                  background: '#FFF7ED',
                  color: '#B45309',
                  border: '1px solid #FED7AA',
                  whiteSpace: 'nowrap',
                }}
              >
                {'☕ Java'}
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

  const sections = [
    {
      col: '#D97706',
      title: 'MONTHS 1-3 · AWS PRIORITY',
      sub: 'D1-D93 · Jun 20 – Sep 20, 2026 · DevOps with AWS · SRE with AWS · QE with AWS',
      ids: ['m01', 'm02', 'm03'],
    },
    {
      col: '#3B82F6',
      title: 'MONTHS 4-11 · CORE SKILLS',
      sub: 'D94-D337 · Sep 21, 2026 – May 22, 2027 · TypeScript · React Native · JS · React · Next.js · Python · Agentic AI · Flask',
      ids: ['m04', 'm05', 'm06', 'm07', 'm08', 'm09', 'm10', 'm11'],
    },
    {
      col: '#D97706',
      title: 'MONTHS 12-16 · JAVA BLOCK',
      sub: 'D338-D487 · May 23 2027 – Oct 19 2027 · J2SE · J2EE · JPA · Spring Boot · Microservices',
      ids: ['m12', 'm13', 'm14', 'm15', 'm16'],
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

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(120px,1fr))',
              gap: 5,
              marginBottom: 11,
            }}
          >
            {PHASES.map((p, i) => {
              const done = d + 1 > p.de,
                cur = d + 1 >= p.ds && d + 1 <= p.de;
              return (
                <div
                  key={p.id}
                  onClick={() => jump(p.id)}
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: 8,
                    padding: '7px 9px',
                    border:
                      '1px solid ' +
                      (cur
                        ? '#F59E0B80'
                        : done
                          ? p.color + '60'
                          : p.color + '30'),
                    cursor: 'pointer',
                    opacity: done ? 0.6 : 1,
                    transition: 'all 0.2s',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      marginBottom: 2,
                    }}
                  >
                    <span style={{ fontSize: 13 }}>
                      {done ? '✅' : cur ? '🔥' : p.icon}
                    </span>
                    <span
                      style={{ fontSize: 8, fontWeight: 800, color: p.color }}
                    >
                      {'M' + p.seq}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 9,
                      fontWeight: 700,
                      color: '#fff',
                      lineHeight: 1.3,
                    }}
                  >
                    {p.name.split(' ')[0] + ' ' + (p.name.split(' ')[1] || '')}
                  </div>
                </div>
              );
            })}
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
            <span style={{ fontSize: 15, flexShrink: 0 }}>{'⏰'}</span>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)' }}>
              {
                '5:30 AM – 8:30 AM daily · MANDATORY · Weekends: Maximum Time · 1 skill per month · 16 skills'
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
              '487 days · 5:30 AM to 8:30 AM mandatory · AWS first · Java block last · 1 skill per month'
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
