import { useState } from 'react';

// 1064 Days of Code
// Sat Jun 20, 2026 → Fri May 18, 2029
// Block 1: Job Survival Sprint  D1-D103    Jun 20 – Sep 30, 2026  (5h/day · 9AM-2PM)
// Block 2: 12-Month Study Plan  D104-D468  Oct 1, 2026 – Sep 30, 2027 (3h/day · 5:30-8:30AM)
// Block 3: Advanced Studies     D469-D1064 Oct 1, 2027 – May 18, 2029 (3h/day · 5:30-8:30AM)

const START = new Date('2026-06-20');
const TOTAL = 1064;

const BLOCK_META = [
  {
    id: 'b1',
    icon: '🔥',
    col: '#E11D48',
    title: 'Job Survival Sprint',
    sub: 'D1–D3 done (3h) · D4–D103 · Jun 23 – Sep 30, 2026 · 100 days · 5:30-8:30AM + 9-11AM · 5h/day',
    detail:
      'AWS + React Native + React JS + TypeScript — 5 hours daily to secure your position at NextStep and impress Karsten',
    time: 'D1–D3 (Jun 20-22) DONE · 5:30-8:30 AM · 3h only · D4–D103 (Jun 23–Sep 30): 5:30-8:30 AM + 9-11 AM · 5h daily',
  },
  {
    id: 'b2',
    icon: '📚',
    col: '#0EA5E9',
    title: '12-Month Skill Plan',
    sub: 'D104–D468 · Oct 1, 2026 – Sep 30, 2027 · 365 days · 6 skills · 5:30-8:30 AM',
    detail:
      'React JS+Next.js (3mo) → React Native (2mo) → Spring Boot (3mo) → Microservices (2mo) → DevOps+Python (2mo)',
    time: '5:30 AM – 8:30 AM daily · 3 hours',
  },
  {
    id: 'b3',
    icon: '🚀',
    col: '#6366F1',
    title: 'Advanced Studies',
    sub: 'D469–D1064 · Oct 1, 2027 – May 18, 2029 · 596 days',
    detail:
      'Agentic AI using Python (6 months) → Data Structures (12 months) → System Design (7 weeks)',
    time: '5:30 AM – 8:30 AM daily · 3 hours',
  },
];

const PHASES = [
  // ══ BLOCK 1: JOB SURVIVAL SPRINT · 103 days ════════════════════════════

  {
    id: 'b1p1',
    block: 'b1',
    seq: 1,
    icon: '⚡',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECDD3',
    name: 'Job Survival Sprint',
    label: 'Block 1 · 5h/day',
    days: 103,
    ds: 1,
    de: 103,
    period: 'Jun 20 – Sep 30, 2026',
    ms: 'Job Survival Sprint COMPLETE · D103',
    about:
      'Days 1-3 (Jun 20-22) COMPLETE — 3h/day (5:30-8:30 AM only). Days 4-103 (Jun 23–Sep 30): 5 hours daily. Slot 1 (5:30-8:30 AM, 3h): AWS deep dive for Karsten/NextStep. Slot 2 (9-11 AM, 2h): 100-day frontend sprint — JavaScript 30d (Jun 23–Jul 22) → TypeScript 10d (Jul 23–Aug 1) → React JS 30d (Aug 2–Aug 31) → React Native 30d (Sep 1–Sep 30). All by Maximilian Schwarzmüller (Udemy) + Chaicode. Your manager Karsten flagged AWS and practical skills as the priority. This block is laser-focused on proving your value at NextStep + FPO Cloud. AWS (Lambda/DynamoDB/Step Functions/CDK — what you use daily) + React Native (FPO mobile) + React JS + TypeScript. No other topics. Pure survival and performance.',
    courses: [
      'SLOT 1 (5:30-8:30 AM) — AWS: Stephane Maarek AWS Developer Associate + SAA-C03 (Udemy) · Lambda, DynamoDB, Step Functions, Cognito, ECS, CDK',
      'SLOT 2 (9-11 AM) JavaScript 30d: Maximilian Schwarzmüller — JavaScript The Complete Guide (Udemy) · Jun 23–Jul 22',
      'SLOT 2 (9-11 AM) TypeScript 10d: Maximilian Schwarzmüller — Understanding TypeScript (Udemy) · Jul 23–Aug 1',
      'SLOT 2 (9-11 AM) React 30d: Maximilian Schwarzmüller — React The Complete Guide 2026 (Udemy) · Aug 2–Aug 31',
      'SLOT 2 (9-11 AM) React Native 30d: Chaicode React Native Full Course (free) + Maximilian Schwarzmüller RN guide · Sep 1–Sep 30',
    ],
    wplan: [
      {
        w: 1,
        f: '[SLOT1] AWS: IAM + EC2 + S3 + VPC  ·  [SLOT2 JS W1] Fundamentals',
        t: 'SLOT1: IAM users/roles/policies, EC2 lifecycle, S3 buckets/policies/versioning, VPC/subnets/Security Groups. SLOT2: Variables, data types, operators, control flow, loops, functions, scope',
      },
      {
        w: 2,
        f: '[SLOT1] AWS: Lambda + Step Functions  ·  [SLOT2 JS W2] ES6+ Modern JS',
        t: 'SLOT1: Lambda (your FPO!): layers/concurrency/cold starts, Step Functions Express vs Standard (your FPO workflows!). SLOT2: Arrow functions, destructuring, spread/rest, template literals, modules',
      },
      {
        w: 3,
        f: '[SLOT1] AWS: DynamoDB + Cognito  ·  [SLOT2 JS W3] DOM + Async JS',
        t: 'SLOT1: DynamoDB tables/GSI/streams/TTL (your FPO DB!), Cognito user pools/JWT (your FPO auth!). SLOT2: DOM manipulation, events, Promises, async/await, fetch API',
      },
      {
        w: 4,
        f: '[SLOT1] AWS: ECS + ECR + CDK  ·  [SLOT2 JS W4] Advanced + Projects',
        t: 'SLOT1: Docker/ECR/ECS Fargate, AWS CDK TypeScript stacks (your FPO IaC!). SLOT2: Closures, prototypes, ES6 classes. Build: To-Do App + Weather App + Quiz App',
      },
      {
        w: 4.3,
        f: '[SLOT2] TypeScript 10 days  ·  Jul 23 – Aug 1',
        t: 'SLOT2: Maximilian Schwarzmüller Understanding TypeScript — type system, interfaces, generics, Partial/Required/Omit/Pick, strict mode, tsconfig. Apply to FPO CDK code.',
      },
      {
        w: 5,
        f: '[SLOT1] AWS: CloudWatch + SRE  ·  [SLOT2 React W1] React Foundations',
        t: 'SLOT1: CloudWatch metrics/alarms/dashboards, Datadog APM (your FPO tool!), X-Ray tracing, SLOs/error budgets. SLOT2: JSX, components, props, useState, useEffect, conditional rendering',
      },
      {
        w: 6,
        f: '[SLOT1] AWS: API Gateway + SQS  ·  [SLOT2 React W2] Hooks + Router',
        t: 'SLOT1: API Gateway REST vs HTTP, SQS/SNS/EventBridge, Kinesis. SLOT2: useRef/useMemo/useCallback, custom hooks, React Router v6, nested routes, dynamic params',
      },
      {
        w: 7,
        f: '[SLOT1] AWS: Terraform + GitHub Actions  ·  [SLOT2 React W3] State Mgmt',
        t: 'SLOT1: Terraform HCL/modules/S3 state, GitHub Actions OIDC to AWS, CodePipeline/CodeBuild. SLOT2: Redux Toolkit, RTK Query, Context API + useReducer',
      },
      {
        w: 8,
        f: '[SLOT1] AWS: Well-Architected  ·  [SLOT2 React W4] Advanced + FPO',
        t: 'SLOT1: Well-Architected 6 pillars, SAA-C03 prep, Trusted Advisor. SLOT2: React.memo, lazy/Suspense, error boundaries. Build FPO flight dashboard calling AWS Lambda.',
      },
      {
        w: 9,
        f: '[SLOT1] AWS: EKS + KMS  ·  [SLOT2 RN W1] Core Components',
        t: 'SLOT1: EKS cluster/kubectl basics, KMS encryption, Secrets Manager. SLOT2: View/Text/Image/TextInput, StyleSheet, Flexbox, FlatList — exercises on iPad via Expo Go',
      },
      {
        w: 10,
        f: '[SLOT1] AWS: Revision + SAA-C03  ·  [SLOT2 RN W2] Navigation',
        t: 'SLOT1: Full AWS revision, SAA-C03 practice questions (Tutorials Dojo). SLOT2: React Navigation v6 — Stack/Bottom Tab/Drawer, nested navigation, passing params',
      },
      {
        w: 11,
        f: '[SLOT1] AWS: Projects  ·  [SLOT2 RN W3] State + Device APIs',
        t: 'SLOT1: Build 3-tier app (ALB+EC2+RDS) + Serverless pipeline (Lambda+Step Functions+DynamoDB). SLOT2: Redux Toolkit in RN, AsyncStorage, Camera, Location, Push Notifications',
      },
      {
        w: 12,
        f: '[SLOT1] AWS: Portfolio + Karsten  ·  [SLOT2 RN W4] FPO App + EAS Build',
        t: 'SLOT1: Write ADR, update Datadog dashboards, polish FPO architecture doc for Karsten. SLOT2: FPO mobile flight app — flight list, status cards, AWS API Gateway calls. EAS Build → TestFlight.',
      },
    ],
  },

  // ══ BLOCK 2: 12-MONTH SKILL PLAN · 365 days · 5 skills ════════════════

  {
    id: 'b2p1',
    block: 'b2',
    seq: 2,
    icon: '⚛',
    color: '#0EA5E9',
    dark: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    name: 'React JS + Next.js',
    label: 'Block 2 · Months 1-3',
    days: 92,
    ds: 104,
    de: 195,
    period: 'Oct 1 – Dec 31, 2026',
    ms: 'React JS + Next.js Complete · D195',
    about:
      '91 days · 3 months. React JS and Next.js combined. JS and TypeScript already covered in Block 1 Slot 2. Month 1-2: React deep dive — hooks, React Router v6, Redux Toolkit, RTK Query, testing, performance. Build FPO flight dashboard. Month 3: Next.js 15 App Router — Server Components, Server Actions, NextAuth v5, Prisma, PostgreSQL, Vercel. Build FPO web portal. All Maximilian Schwarzmüller.',
    courses: [
      'Maximilian Schwarzmüller — React The Complete Guide 2026 incl. React Router and Redux (Udemy)',
      'Maximilian Schwarzmüller — Next.js 14 and 15 The Complete Guide (Udemy)',
      'Lee Robinson (Vercel) — Next.js Learn (free official) · App Router fundamentals',
    ],
    wplan: [
      {
        w: 1,
        f: 'React Foundations + JSX',
        t: 'JSX, functional components, props, useState, useEffect, conditional rendering, lists/keys. Vite + TypeScript. Re-build Block 1 projects.',
      },
      {
        w: 2,
        f: 'Core Hooks Deep Dive',
        t: 'useEffect (dependencies/cleanup), useRef, useMemo, useCallback, custom hooks, rules of hooks, performance implications',
      },
      {
        w: 3,
        f: 'React Router v6',
        t: 'Nested routes, dynamic params, useParams/useNavigate/useLocation, loaders, actions, error boundaries, protected routes',
      },
      {
        w: 4,
        f: 'Redux Toolkit + RTK Query',
        t: 'createSlice, configureStore, useSelector/useDispatch, RTK Query (createApi, caching, invalidation) for async API state',
      },
      {
        w: 5,
        f: 'Advanced React + Performance',
        t: 'React.memo, lazy/Suspense, code splitting, error boundaries, portals, forwardRef, compound components, render patterns',
      },
      {
        w: 6,
        f: 'React Testing + TypeScript',
        t: 'React Testing Library, Jest, user-event, mocking. Strict TypeScript with React: typed components, hooks, Redux store.',
      },
      {
        w: 7,
        f: 'FPO Dashboard Capstone',
        t: 'Build FPO Flight Dashboard: flight list, status cards, weather overlay. Calls AWS API Gateway + Lambda + DynamoDB from Block 1.',
      },
      {
        w: 8,
        f: 'Next.js App Router Foundations',
        t: 'File-based routing, layouts, loading/error/not-found pages, route groups, parallel and intercepting routes',
      },
      {
        w: 9,
        f: 'Server Components + Data Fetching',
        t: 'RSC vs Client Components, fetch caching/revalidation (ISR/SSG/SSR), Suspense streaming, Server Actions, mutations',
      },
      {
        w: 10,
        f: 'Auth + Database + Deploy',
        t: 'NextAuth v5 OAuth (Google/GitHub), middleware, Prisma ORM + PostgreSQL. Vercel deployment, env vars, image optimisation.',
      },
      {
        w: 11,
        f: 'FPO Web Portal Capstone',
        t: 'FPO web portal: auth + flight dashboard + AWS API Gateway backend. Deployed on Vercel. Publicly accessible portfolio piece.',
      },
    ],
  },

  {
    id: 'b2p3',
    block: 'b2',
    seq: 3,
    icon: '📱',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'React Native',
    label: 'Block 2 · Months 4-5',
    days: 59,
    ds: 196,
    de: 254,
    period: 'Jan 1 – Feb 28, 2027',
    ms: 'React Native Complete · D254',
    about:
      '60 days · 2 months. React Native deep dive — building on Block 1 Slot 2 foundations (30 days RN already done). Advanced navigation, performance optimisation, EAS Build CI/CD, Expo SDK, offline support, OTA updates. Ship FPO mobile app v2 to TestFlight. Chaicode + Maximilian Schwarzmüller.',
    courses: [
      'Chaicode — React Native Full Course (free, Hindi+English) · primary',
      'Maximilian Schwarzmüller — React Native The Practical Guide (Udemy) · comprehensive reference',
      'Expo docs — EAS Build, TestFlight submission, OTA updates, Expo SDK modules',
    ],
    wplan: [
      {
        w: 12,
        f: 'RN Core Revision + StyleSheet',
        t: 'Re-build all Block 1 RN components from scratch. StyleSheet deep dive, Flexbox layouts, FlatList optimisation (keyExtractor/getItemLayout).',
      },
      {
        w: 13,
        f: 'React Navigation v6 Advanced',
        t: 'Nested navigators, modal stacks, custom tab bars, animated transitions, deep linking, authentication flow patterns',
      },
      {
        w: 14,
        f: 'State + Expo SDK + Device APIs',
        t: 'Redux Toolkit in RN, AsyncStorage/MMKV, Camera, Location, Push Notifications (FCM/APNs), Haptics, SecureStore',
      },
      {
        w: 15,
        f: 'Animations + Gestures',
        t: 'Reanimated 2 (useSharedValue/useAnimatedStyle/withSpring), Gesture Handler, PanGestureHandler, drag/swipe interactions',
      },
      {
        w: 16,
        f: 'RN Performance + Debugging',
        t: 'React.memo in RN, useMemo/useCallback, Flipper debugging, Hermes engine, FlatList performance profiling',
      },
      {
        w: 17,
        f: 'EAS Build + OTA + FPO App v2',
        t: 'EAS Build (dev/preview/prod), EAS Submit to TestFlight, OTA updates. FPO App v2: offline mode, real-time updates, push notifications.',
      },
      {
        w: 18,
        f: 'RN Testing + Portfolio Polish',
        t: 'Jest + React Native Testing Library, Detox e2e basics. Polish FPO mobile app for portfolio. Update App Store screenshots.',
      },
      {
        w: 19,
        f: 'RN Capstone + Handover to Spring',
        t: 'Final FPO mobile app review, bug fixes, performance audit. Write README. Prepare for Java/Spring Boot block starting Mar 1.',
      },
    ],
  },

  {
    id: 'b2p4',
    block: 'b2',
    seq: 4,
    icon: '🌱',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'Spring Boot',
    label: 'Block 2 · Months 6-8 · Java',
    days: 92,
    ds: 255,
    de: 346,
    period: 'Mar 1 – May 31, 2027',
    ms: 'Spring Boot Complete · D346',
    about:
      '92 days · 3 months. Complete Java backend foundation — covers J2SE, J2EE, JPA/Hibernate and Spring Boot 3 all in one block. Month 1: Java Core (J2SE syntax, OOP, Collections, Streams/Lambdas, J2EE basics, JPA/Hibernate + N+1 solutions). Months 2-3: Spring Boot 3 deep dive (IoC, REST APIs, Spring Security + JWT + OAuth2, testing, deploy to AWS ECS). Your C# .NET 8 + FPO Cognito background maps exactly.',
    courses: [
      'Navin Reddy Telusko — Java Programming (YouTube free) · J2SE fast-track using C# background',
      'John Thompson — Hibernate and Spring Data JPA Beginner to Guru (Udemy, 55h) · JPA deep dive',
      'John Thompson — Spring Framework 6 Beginner to Guru (Udemy, 40h) · most comprehensive Spring',
      'Ranga Karanam — Master Spring Boot 3 and Spring Framework 6 (Udemy, 36h) · practical projects',
    ],
    wplan: [
      {
        w: 20,
        f: 'J2SE: Java Syntax + OOP',
        t: 'JDK/JVM/JRE, syntax vs C#, classes, inheritance, polymorphism, interfaces, generics, Collections (ArrayList/HashMap/HashSet/TreeMap)',
      },
      {
        w: 21,
        f: 'J2SE: Java 8+ Streams + Lambdas',
        t: 'Lambda expressions, Stream API (filter/map/reduce/collect/flatMap), Optional, CompletableFuture, Java 14-21 (records, sealed classes)',
      },
      {
        w: 22,
        f: 'J2EE + JPA Foundations',
        t: 'Servlets/JDBC/JAX-RS basics, @Entity/@Id, EntityManager, @OneToMany/@ManyToMany, CascadeType, FetchType, JPQL queries, Pageable',
      },
      {
        w: 23,
        f: 'JPA Advanced + Spring Data JPA',
        t: 'N+1 problem + @EntityGraph/JOIN FETCH solutions, @Transactional propagation/isolation, JpaRepository, @Query, L1/L2 caching',
      },
      {
        w: 24,
        f: 'Spring Boot Core + IoC + AOP',
        t: 'Auto-configuration, @Bean/@Component/@Service/@Repository, constructor injection, AOP, @ConfigurationProperties, profiles, Actuator',
      },
      {
        w: 25,
        f: 'Spring MVC + REST APIs',
        t: '@RestController, ResponseEntity, @Valid, @ExceptionHandler, @ControllerAdvice, OpenAPI/Swagger, DTO pattern + MapStruct',
      },
      {
        w: 26,
        f: 'Spring Security + JWT',
        t: 'SecurityFilterChain, JWT filter chain, UserDetailsService, BCrypt, role-based access (@PreAuthorize), method security',
      },
      {
        w: 27,
        f: 'Spring OAuth2 + Testing',
        t: 'OAuth2 resource server + JWKS endpoint = your exact FPO Cognito pattern! @WebMvcTest, MockMvc, @DataJpaTest, Testcontainers, Mockito',
      },
      {
        w: 28,
        f: 'Spring Boot Capstone + AWS Deploy',
        t: 'Build complete REST API + JWT + JPA + Docker from scratch cold. Deploy to AWS ECS from Block 1. 200 Spring Boot Q&A drill.',
      },
      {
        w: 29,
        f: 'Spring Boot Revision + Handover',
        t: 'Revise all Spring concepts. Polish REST API project. Write ADR for Spring Boot architecture decision. Ready for Microservices month.',
      },
    ],
  },

  {
    id: 'b2p5',
    block: 'b2',
    seq: 5,
    icon: '🏛',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECDD3',
    name: 'Microservices',
    label: 'Block 2 · Months 9-10 · Java',
    days: 61,
    ds: 347,
    de: 407,
    period: 'Jun 1 – Jul 31, 2027',
    ms: 'Microservices Complete · D407',
    about:
      '61 days · 2 months. Microservices with Spring Cloud, Kafka, CQRS, Event Sourcing, Saga pattern, deploy to AWS EKS. Every single pattern maps directly to FPO Cloud: EventBridge = Kafka, Step Functions = Saga, Lambda = Microservice, DynamoDB streams = Event Sourcing. Your FPO production experience is a massive advantage here.',
    courses: [
      'Ranga Karanam — Java Spring Boot Microservices with K8s and Docker (Udemy, 35h)',
      'Sean Campbell — Master Spring Boot Microservices CQRS and Event Sourcing (Udemy, 10h)',
      'Chris Richardson — microservices.io patterns catalogue (free) · all patterns catalogued',
    ],
    wplan: [
      {
        w: 30,
        f: 'Service Design + Spring Cloud',
        t: 'DDD bounded contexts, Eureka service discovery, Spring Cloud Gateway, config server, Feign clients — map every pattern to FPO architecture',
      },
      {
        w: 31,
        f: 'Resilience Patterns',
        t: 'Resilience4j circuit breaker/retry/rate limiter/bulkhead — maps to FPO Step Function error handling and retry policies',
      },
      {
        w: 32,
        f: 'Kafka Deep Dive',
        t: 'Kafka producers/consumers/consumer groups/partitions/offsets — maps directly to your FPO EventBridge + Kafka workloads (DLH/AAL/FDX)',
      },
      {
        w: 33,
        f: 'CQRS + Event Sourcing',
        t: 'Read/write model separation, Axon Framework event store, event replay, projections — maps to FPO mission-feed event sourcing table',
      },
      {
        w: 34,
        f: 'Saga Pattern',
        t: 'Orchestration vs choreography Saga — AWS Step Functions IS a Saga orchestrator (your FPO!). Compensating transactions.',
      },
      {
        w: 35,
        f: 'K8s Deployment + Observability',
        t: 'Deploy microservices to AWS EKS from Block 1. Prometheus/Grafana for inter-service monitoring. Distributed tracing with X-Ray.',
      },
      {
        w: 36,
        f: 'Microservices Capstone + ADR',
        t: 'Full microservices system end-to-end: API Gateway → services → Kafka → CQRS. Write 1 ADR. Map every component to FPO Cloud.',
      },
    ],
  },

  {
    id: 'b2p6',
    block: 'b2',
    seq: 6,
    icon: '🔧',
    color: '#D97706',
    dark: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'DevOps with Python',
    label: 'Block 2 · Months 11-12 · FINAL',
    days: 61,
    ds: 408,
    de: 468,
    period: 'Aug 1 – Sep 30, 2027',
    ms: '12-Month Plan COMPLETE · D468 · Sep 30, 2027',
    about:
      '61 days · 2 months. DevOps block covering Python + full DevOps stack. Month 1: Python (fundamentals, OOP, boto3 AWS automation — extends Block 1 AWS + Block 2 skills). Month 2: DevOps (Docker, Kubernetes EKS, CI/CD GitHub Actions + Jenkins, Terraform, Prometheus/Grafana, SonarQube, DevSecOps). Build enterprise pipeline as capstone. Day 468 = Sep 30, 2027 = 12 months COMPLETE.',
    courses: [
      'Corey Schafer — Python YouTube playlist (free) · OOP + decorators + asyncio + boto3',
      'Automate the Boring Stuff with Python (Al Sweigart, free online) · Python automation',
      'Nana Janashia TechWorld — DevOps Bootcamp (YouTube/Udemy) · Docker, K8s, CI/CD',
      'Mumshad Mannambeth — Kubernetes for Beginners + CKA (KodeKloud) · leverages your CKA cert',
    ],
    wplan: [
      {
        w: 37,
        f: 'Python: Fundamentals + OOP',
        t: 'Variables, data types, control flow, functions, list/dict comprehensions, OOP classes, inheritance, dunder methods, type hints',
      },
      {
        w: 38,
        f: 'Python: Advanced + boto3',
        t: 'Decorators, generators, context managers, asyncio, regex. boto3: EC2/S3/Lambda/DynamoDB/CloudWatch automation — extend Block 1 AWS',
      },
      {
        w: 39,
        f: 'DevOps: Docker + ECR + ECS',
        t: 'Dockerfile/multi-stage builds, Docker Compose, ECR push/pull, ECS Fargate task defs/services, container health checks, Trivy scanning',
      },
      {
        w: 40,
        f: 'DevOps: Kubernetes + EKS + Helm',
        t: 'EKS cluster/kubectl, Pods/Deployments/Services/Ingress, ConfigMaps/Secrets, PVs, Helm charts, RBAC, HPA, ArgoCD GitOps',
      },
      {
        w: 41,
        f: 'DevOps: CI/CD + Terraform',
        t: 'GitHub Actions OIDC to AWS, CodePipeline/CodeBuild, Jenkins pipelines, SonarQube quality gates, Terraform IaC (HCL/modules/workspaces)',
      },
      {
        w: 42,
        f: 'DevOps: Monitoring + DevSecOps',
        t: 'Prometheus/Grafana, Datadog APM (your FPO tool!), OWASP, AWS Secrets Manager. Full pipeline: GitHub→GHA→SonarQube→Docker→ECR→EKS→Monitor.',
      },
      {
        w: 43,
        f: 'Capstone + Sep 30 Block 2 DONE',
        t: 'End-to-end enterprise pipeline. GitHub portfolio polish. Update CV. Day 468 = Sep 30, 2027 = 12-Month Plan COMPLETE 🎉',
      },
    ],
  },

  // ══ BLOCK 3: ADVANCED STUDIES · 596 days ═══════════════════════════════

  {
    id: 'b3p1',
    block: 'b3',
    seq: 14,
    icon: '🤖',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Agentic AI + Django + FastAPI + Express.js',
    label: 'Block 3 · 6 Months',
    days: 183,
    ds: 469,
    de: 651,
    period: 'Oct 1, 2027 – Mar 31, 2028',
    ms: 'Agentic AI + Django + FastAPI + Express.js Complete · D651',
    about:
      '182 days · 6 months. Four topics within the same timeframe. Agentic AI (LangChain, LangGraph, RAG, multi-agent, Ed Donner 8 projects) + Django (MVT, ORM, DRF REST APIs) + FastAPI (async, Pydantic, OpenAPI) + Express.js/Node.js (REST APIs, middleware, MongoDB). Your SCB Thailand LangChain/LangGraph experience = deep revision + extension. Capstone: FPO AI assistant deployed to AWS Lambda.',
    courses: [
      'Ed Donner — Complete Agentic AI Engineering Course 2026 (Udemy/own site, 30h) · 8 real Agentic AI projects',
      'Eden Marco — LangChain Develop LLM Powered Applications (Udemy, 22h) · LangChain + LangGraph deep dive',
      'Dennis Ivy — Python Django 7 Hour Course (YouTube free) · best Django fundamentals',
      'Jose Salvatierra — REST APIs with Django REST Framework (Udemy) · DRF serializers, ViewSets, JWT',
      'Sebastián Ramírez — FastAPI official docs + tiangolo/fastapi (GitHub) · async, Pydantic, OpenAPI',
      'Maximilian Schwarzmüller — NodeJS The Complete Guide incl. MVC REST APIs GraphQL (Udemy) · Express.js',
    ],
    wplan: [
      {
        w: 1,
        f: 'GenAI Foundations + Prompt Engineering',
        t: 'LLMs, tokens, embeddings, RAG architecture, vector DBs (Pinecone/FAISS), CoT/ReAct/few-shot prompt engineering, AWS Bedrock',
      },
      {
        w: 2,
        f: 'LangChain Core',
        t: 'Chains, agents, tools, memory, LCEL expression language, custom tools, callbacks, streaming. Revisit SCB LangChain work.',
      },
      {
        w: 3,
        f: 'LangGraph + Multi-Agent Systems',
        t: 'State machines, nodes, edges, conditional routing, supervisor agents, parallel execution, human-in-the-loop — Ed Donner',
      },
      {
        w: 4,
        f: 'Ed Donner Projects 1-4',
        t: 'Career Digital Twin, Deep Research Agent, SDR Agent, Engineering Team in Docker containers — build all 4',
      },
      {
        w: 5,
        f: 'Ed Donner Projects 5-8',
        t: 'Browser Agent, MCP (Model Context Protocol) integration, production deployment patterns, cost and rate management',
      },
      {
        w: 6,
        f: 'FPO AI Capstone + Deploy',
        t: 'FPO AI Assistant: natural language flight queries via LangChain + DynamoDB + Lambda. Deploy to AWS. Portfolio demo.',
      },
    ],
  },
  {
    id: 'b3p2',
    block: 'b3',
    seq: 15,
    icon: '🧩',
    color: '#4F46E5',
    dark: '#3730A3',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'DSA + AWS/K8s/TF/Linux/Java/Python/Spring Certs',
    label: 'Block 3 · 12 Months',
    days: 365,
    ds: 652,
    de: 1016,
    period: 'Apr 1, 2028 – Mar 31, 2029',
    ms: 'DSA + All 9 Certs (AWS×3/CKA/TF/Linux/Java/Python/Spring) COMPLETE · D1016',
    about:
      '365 days · 12 months. Two tracks running in parallel. TRACK 1 — DSA in Java: Arrays, Linked Lists, Stacks, Queues, Trees, BST, Heaps, Graphs, Hashing, Sorting, Dynamic Programming (8 weeks, hardest topic), Backtracking, Greedy, Tries. 300+ LeetCode problems. TRACK 2 — Certifications: AWS (SAA-C03, Developer Associate, DevOps Engineer Professional), CKA Kubernetes (revision + re-cert), Terraform Associate, Linux LFCS, Oracle Java SE 17 Developer (1Z0-829), Python PCEP + PCAP (Python Institute), VMware Spring Professional 2024 (EDU-1202). Morning 5:30-8:30 AM alternates between DSA problem solving and cert study.',
    courses: [
      'Scott Barrett — Java DSA + LeetCode Exercises (Udemy, 4.8★) · Java implementations · DSA Track',
      'NeetCode — Full DSA playlist (YouTube free) · pattern-based approach · DSA Track',
      'LeetCode Top Interview 150 — complete all 150 problems · DSA Track',
      'Stephane Maarek — AWS SAA-C03 + Developer Associate + DevOps Engineer Pro (Udemy) · Cert Track',
      'Tutorials Dojo — AWS Practice Exams SAA/DVA/DOP (600+ questions each) · Cert Track',
      'Mumshad Mannambeth — CKA Certified Kubernetes Administrator (KodeKloud) · Cert Track',
      'HashiCorp — Terraform Associate 003 official study guide + Udemy Bogdan Stashchuk · Cert Track',
      'Linux Foundation — LFCS (Linux Foundation Certified SysAdmin) official curriculum · Cert Track',
      'Oracle University — Java SE 17 Developer (1Z0-829) official study guide + Enthuware mock exams · Cert Track',
      'Python Institute — PCEP (Entry) + PCAP (Associate) official study guides + practice tests · Cert Track',
      'VMware/Broadcom — Spring Professional 2024 (EDU-1202) official study guide + Udemy mock exams · Cert Track',
    ],
    wplan: [
      {
        w: 1,
        f: '[DSA] Arrays + Strings  ·  [CERT] Linux Foundations',
        t: 'DSA: Two pointers, sliding window, prefix sums, binary search, string manipulation. 50 problems. CERT: Linux CLI, file system, processes, permissions, networking, systemd — LFCS prep begins.',
      },
      {
        w: 5,
        f: '[DSA] Linked Lists + Stacks/Queues  ·  [CERT] Linux Advanced',
        t: 'DSA: Fast/slow pointer, cycle detection, reversal, monotonic stack, deque. 40 problems. CERT: Shell scripting, cron jobs, user management, package management, storage — LFCS exam ready.',
      },
      {
        w: 8,
        f: '[DSA] Trees + BST  ·  [CERT] AWS SAA-C03 Prep',
        t: 'DSA: DFS (pre/in/post-order), BFS level-order, BST ops, LCA. 50 problems. CERT: AWS SAA-C03 — Stephane Maarek course. VPC, EC2, S3, RDS, DynamoDB, Route53, CloudFront, ELB/ASG.',
      },
      {
        w: 13,
        f: '[DSA] Heaps + Graphs  ·  [CERT] AWS SAA-C03 Exam',
        t: 'DSA: PriorityQueue, Top-K, Dijkstra, BFS/DFS, topological sort, Union-Find. 50 problems. CERT: SAA-C03 Tutorials Dojo 600 practice questions → sit SAA-C03 exam.',
      },
      {
        w: 18,
        f: '[DSA] Hashing + Sorting  ·  [CERT] AWS Developer Associate',
        t: 'DSA: Frequency maps, two-sum pattern, all sort algorithms with proofs. 40 problems. CERT: AWS DVA-C02 — Lambda, DynamoDB, API Gateway, Cognito, Step Functions (your FPO stack!). Tutorials Dojo practice exam.',
      },
      {
        w: 22,
        f: '[DSA] Dynamic Programming (8 weeks)  ·  [CERT] AWS DevOps Pro',
        t: 'DSA: 1D DP, 2D DP, knapsack, string DP, grid DP, interval DP. 80 LeetCode problems — most important topic. CERT: AWS DOP-C02 — CodePipeline, CodeBuild, CodeDeploy, CloudFormation, OpsWorks, Systems Manager.',
      },
      {
        w: 30,
        f: '[DSA] Backtracking + Greedy + Tries  ·  [CERT] Terraform Assoc',
        t: 'DSA: Subsets, permutations, N-Queens, activity selection, trie insert/search. 40 problems. CERT: Terraform Associate 003 — HCL, providers, modules, state, workspaces, meta-arguments. Bogdan Stashchuk + official guide.',
      },
      {
        w: 36,
        f: '[DSA] DSA Revision  ·  [CERT] CKA Kubernetes',
        t: 'DSA: Revise all topics, timed cold problems, pattern recognition drills. CERT: CKA — Mumshad KodeKloud. Pods/Deployments/Services/Ingress/RBAC/NetworkPolicies/PVs/Helm. Killer.sh mock exam. Re-certify if needed.',
      },
      {
        w: 39,
        f: '[DSA] Advanced Revision  ·  [CERT] Python PCEP + PCAP',
        t: 'DSA: Timed cold revision of weakest topics. CERT: Python PCEP (Entry) — sit exam. Then PCAP (Associate) — exceptions, OOP, modules, file I/O, generators. Python Institute mock tests.',
      },
      {
        w: 42,
        f: '[DSA] Mock Interviews  ·  [CERT] Java 1Z0-829',
        t: 'DSA: 100 timed cold LeetCode problems. 7 full mock interviews (spoken aloud, 45 min, no IDE). CERT: Oracle Java SE 17 Developer (1Z0-829) — Enthuware 1000+ mock questions. Java streams, generics, modules, concurrency, records, sealed classes.',
      },
      {
        w: 47,
        f: '[DSA] Final Drills  ·  [CERT] Spring Professional 2024',
        t: 'DSA: Pattern cheatsheet compilation. CERT: VMware Spring Professional (EDU-1202) — Spring Core, Spring Boot, Spring Data JPA, Spring Security, Spring MVC, Spring AOP, Spring Testing. 200+ mock questions. Sit exam.',
      },
      {
        w: 50,
        f: '[DSA] Final Cold Problems  ·  [CERT] All 9 Certs Final Revision',
        t: 'DSA: Final 50 cold problems timed. CERT: Revise all 9 certs (AWS×3, CKA, Terraform, Linux, Java, Python, Spring). Credly badge updates. LinkedIn announcements. GitHub cert showcase page.',
      },
      {
        w: 52,
        f: '[DSA+CERT] Final Week · D1016 DONE',
        t: 'DSA cheatsheet final polish. All cert badges on LinkedIn/Credly. GitHub DSA portfolio (Java solutions). Day 1016 = Mar 31, 2029 = DSA + Certs COMPLETE 🎉',
      },
    ],
  },
  {
    id: 'b3p3',
    block: 'b3',
    seq: 16,
    icon: '🏗',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'System Design',
    label: 'Block 3 · 7 Weeks · FINAL',
    days: 48,
    ds: 1017,
    de: 1064,
    period: 'Apr 1 – May 18, 2029',
    ms: '1064 DAYS COMPLETE · May 18, 2029',
    about:
      '49 days · 7 weeks. System design interview mastery. Frank Kane 5-step template. Design 1 system spoken aloud per day, 45 minutes, no notes. Your FPO multi-tenant SaaS + Lambda + DynamoDB + Kafka production experience is a massive advantage. Day 1064 = May 18, 2029 = COMPLETE.',
    courses: [
      'Frank Kane ex-Amazon — Mastering the System Design Interview (Udemy, 5h) · framework first',
      'Alex Xu — System Design Interview Vol 1 + Vol 2 (books) · must-read',
      'Mikhail Smarshchok — System Design Interview Guide 20+ designs (Udemy, 18h) · classic systems',
    ],
    wplan: [
      {
        w: 1,
        f: 'SD Framework + HLD + Estimation',
        t: 'Frank Kane 5-step template, capacity estimation. Design FPO Cloud (YOUR system!) first — you know it inside out.',
      },
      {
        w: 2,
        f: 'Classic Designs 1',
        t: 'URL Shortener, WhatsApp, Twitter — requirements → HLD → DB choice → API → scale. Spoken 45 min each.',
      },
      {
        w: 3,
        f: 'Classic Designs 2',
        t: 'YouTube, Netflix, Uber, Airbnb, Rate Limiter, Notification System. Trade-offs: SQL vs NoSQL, sync vs async.',
      },
      {
        w: 4,
        f: 'Databases + Distributed Systems',
        t: 'CAP theorem, sharding, replication, consistent hashing, DynamoDB single-table design (your FPO!), Kafka, Saga pattern',
      },
      {
        w: 5,
        f: 'Advanced Designs',
        t: 'Payment System, Search Engine, Distributed Cache, Stock Exchange. Bogdan Stashchuk WHY decisions.',
      },
      {
        w: 6,
        f: 'Mock System Design Interviews',
        t: '7 full cold mocks (1/day), spoken aloud, 45 min, no notes. Focus on weakest 3 systems.',
      },
      {
        w: 7,
        f: 'Final Mocks + Portfolio + Day 1064',
        t: 'Final mocks. ADRs for 5 systems. GitHub portfolio. Day 1064 = May 18, 2029 = 1064 DAYS COMPLETE 🎉',
      },
    ],
  },
];

const MILESTONES = [
  {
    day: 103,
    icon: '🔥',
    label: 'Job Survival Sprint DONE',
    date: 'Sep 30, 2026',
    color: '#E11D48',
  },
  {
    day: 195,
    icon: '⚛',
    label: 'React JS + Next.js Done',
    date: 'Dec 31, 2026',
    color: '#0EA5E9',
  },
  {
    day: 254,
    icon: '📱',
    label: 'React Native Done',
    date: 'Feb 28, 2027',
    color: '#7C3AED',
  },
  {
    day: 346,
    icon: '🌱',
    label: 'Spring Boot Done',
    date: 'May 31, 2027',
    color: '#16A34A',
  },
  {
    day: 407,
    icon: '🏛',
    label: 'Microservices Done',
    date: 'Jul 31, 2027',
    color: '#E11D48',
  },
  {
    day: 468,
    icon: '🔧',
    label: 'DevOps+Python — 12mo DONE',
    date: 'Sep 30, 2027',
    color: '#D97706',
  },
  {
    day: 651,
    icon: '🤖',
    label: 'Agentic AI + Django + FastAPI + Express DONE',
    date: 'Mar 31, 2028',
    color: '#6366F1',
  },
  {
    day: 1016,
    icon: '🧩',
    label: 'DSA + All 9 Certs DONE',
    date: 'Mar 31, 2029',
    color: '#4F46E5',
  },
  {
    day: 1064,
    icon: '🏆',
    label: '1064 Days COMPLETE',
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
  const bTag = {
    b1: '🔥 Job Survival',
    b2: '📚 12-Month Plan',
    b3: '🚀 Advanced',
  };
  const bCol = { b1: '#E11D48', b2: '#0EA5E9', b3: '#6366F1' };
  const bBg = { b1: '#FFF1F2', b2: '#F0F9FF', b3: '#EEF2FF' };
  const bBdr = { b1: '#FECDD3', b2: '#BAE6FD', b3: '#C7D2FE' };
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
                background: bBg[p.block],
                color: bCol[p.block],
                border: '1px solid ' + bBdr[p.block],
                whiteSpace: 'nowrap',
              }}
            >
              {bTag[p.block]}
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
      col: '#E11D48',
      title: '🔥 BLOCK 1 · JOB SURVIVAL SPRINT',
      sub: 'D1–D3 DONE (Jun 20-22 · 3h) · D4–D103 · Jun 23 – Sep 30, 2026 · 100 days remaining · 5:30-8:30 AM (3h) + 9-11 AM (2h) · 5h total',
      ids: ['b1p1'],
      bg: '#FFF1F2',
    },
    {
      col: '#0EA5E9',
      title: '📚 BLOCK 2 · 12-MONTH SKILL PLAN',
      sub: 'D104–D468 · Oct 1, 2026 – Sep 30, 2027 · 365 days · 5:30-8:30 AM · React+Next.js (3mo) → RN (2mo) → Spring Boot (3mo) → Microservices (2mo) → DevOps+Python (2mo)',
      ids: ['b2p1', 'b2p3', 'b2p4', 'b2p5', 'b2p6'],
      bg: '#F0F9FF',
    },
    {
      col: '#6366F1',
      title: '🚀 BLOCK 3 · ADVANCED STUDIES',
      sub: 'D469–D1064 · Oct 1, 2027 – May 18, 2029 · 596 days · 3 hours/day · 5:30–8:30 AM · Agentic AI → DSA → System Design',
      ids: ['b3p1', 'b3p2', 'b3p3'],
      bg: '#EEF2FF',
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
                  'Sat Jun 20, 2026 → Fri May 18, 2029 · 3 blocks · 16 skills · D1-D103: 5:30-8:30AM + 9-11AM'
                }
              </div>
            </div>
          </div>

          {/* BLOCK SUMMARY CARDS */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 7,
              marginBottom: 11,
            }}
          >
            {BLOCK_META.map((b) => (
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
                    marginBottom: 5,
                  }}
                >
                  <span style={{ fontSize: 16 }}>{b.icon}</span>
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
                    fontSize: 9,
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.7)',
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

          {/* TIMING BANNERS */}
          <div
            style={{
              background: 'rgba(225,29,72,0.15)',
              border: '1px solid rgba(225,29,72,0.4)',
              borderRadius: 8,
              padding: '8px 12px',
              marginBottom: 6,
              display: 'flex',
              gap: 9,
              alignItems: 'flex-start',
            }}
          >
            <span style={{ fontSize: 14, flexShrink: 0, marginTop: 1 }}>
              {'🔥'}
            </span>
            <div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: '#FCA5A5',
                  marginBottom: 1,
                }}
              >
                {
                  '✅ D1–D3 DONE (Jun 20-22 · 3h) · D4–D103 (Jun 23–Sep 30) · Slot 1: 5:30-8:30 AM AWS (3h) + Slot 2: 9-11 AM Frontend Sprint (2h)'
                }
              </div>
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.5)' }}>
                {
                  'Slot 2 · 9-11 AM · Jun 23–Sep 30: JS 30d (Jun 23–Jul 22) → TS 10d (Jul 23–Aug 1) → React 30d (Aug 2–Aug 31) → React Native 30d (Sep 1–Sep 30) · All Maximilian + Chaicode'
                }
              </div>
            </div>
          </div>
          <div
            style={{
              background: 'rgba(14,165,233,0.12)',
              border: '1px solid rgba(14,165,233,0.35)',
              borderRadius: 8,
              padding: '8px 12px',
              marginBottom: 6,
              display: 'flex',
              gap: 9,
              alignItems: 'flex-start',
            }}
          >
            <span style={{ fontSize: 14, flexShrink: 0, marginTop: 1 }}>
              {'⏰'}
            </span>
            <div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: '#7DD3FC',
                  marginBottom: 1,
                }}
              >
                {'D104–D1064 · 5:30 AM – 8:30 AM · 3 hours/day · MANDATORY'}
              </div>
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.5)' }}>
                {
                  'Oct 1, 2026 onwards · 12-Month Skill Plan then Advanced Studies · Weekends: Maximum Time'
                }
              </div>
            </div>
          </div>

          {/* PROGRESS BAR */}
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
              <span>{'Jun 20, 2026'}</span>
              <span
                style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 700 }}
              >
                {prog + '% · Day ' + Math.min(d + 1, 1064) + ' of 1064'}
              </span>
              <span>{'May 18, 2029'}</span>
            </div>
          </div>

          {/* MILESTONES */}
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
            {'🏆 1064 Days of Code · Jun 20, 2026 → May 18, 2029'}
          </div>
          <div
            style={{
              fontSize: 9,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 8,
            }}
          >
            {
              'Block 1: Job Survival (D1-D3 done 3h · D4-D103 Jun 23–Sep 30 · 5h/day) · Block 2: 12 Skills (365d · 3h/day) · Block 3: Advanced (596d · 3h/day)'
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
