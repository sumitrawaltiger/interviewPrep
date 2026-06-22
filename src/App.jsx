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
    sub: 'D104–D468 · Oct 1, 2026 – Sep 30, 2027 · 365 days · 1 skill per month',
    detail:
      'JS → TS → React → Next.js → React Native → J2SE → J2EE → JPA → Spring Boot → Microservices → Python → DevOps',
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
      'Days 1-3 (Jun 20-22) COMPLETE — 3h/day (5:30-8:30 AM only). Days 4-103 (Jun 23 – Sep 30): 5 hours daily — Slot 1: 5:30–8:30 AM (3h) + Slot 2: 9:00–11:00 AM (2h). Your manager Karsten flagged AWS and practical skills as the priority. This block is laser-focused on proving your value at NextStep + FPO Cloud. AWS (Lambda/DynamoDB/Step Functions/CDK — what you use daily) + React Native (FPO mobile) + React JS + TypeScript. No other topics. Pure survival and performance.',
    courses: [
      'Stephane Maarek — AWS Developer Associate + SAA-C03 (Udemy) · Lambda, DynamoDB, Step Functions, Cognito, ECS',
      'Chaicode — React Native Full Course (free, Hindi+English) · FPO mobile app on iPad via Expo Go',
      'Matt Pocock — Total TypeScript (free) · TypeScript the right way',
      'John Smilga — React 18 Projects Course (Udemy) · practical React for FPO dashboard',
      'AWS CDK TypeScript docs · deep-dive your existing FPO infrastructure code',
    ],
    wplan: [
      {
        w: 1,
        f: 'AWS Core: IAM + EC2 + S3 + VPC',
        t: 'IAM users/roles/policies/MFA/STS, EC2 lifecycle (launch/stop/terminate), S3 buckets/policies/versioning, VPC/subnets/Security Groups/NACL',
      },
      {
        w: 2,
        f: 'AWS Serverless: Lambda + Step Functions',
        t: 'Lambda (your FPO!): layers/concurrency/cold starts/triggers. Step Functions Express vs Standard (your FPO workflows!). EventBridge rules.',
      },
      {
        w: 3,
        f: 'AWS: DynamoDB + API Gateway + Cognito',
        t: 'DynamoDB (your FPO DB!): tables/GSI/LSI/streams/TTL. API Gateway REST vs HTTP. Cognito user pools/JWT (your FPO auth!).',
      },
      {
        w: 4,
        f: 'AWS: ECS + ECR + CDK TypeScript',
        t: 'Docker basics, ECR push/pull, ECS Fargate task defs/services. AWS CDK TypeScript stacks and constructs (your FPO IaC!).',
      },
      {
        w: 5,
        f: 'TypeScript Fundamentals',
        t: 'Type system, interfaces vs type aliases, union/intersection, generics, Partial/Required/Omit/Pick utility types, strict mode, tsconfig',
      },
      {
        w: 6,
        f: 'TypeScript Advanced + FPO CDK Types',
        t: 'Decorators, declaration files (.d.ts), conditional types, mapped types. Apply to your existing FPO CDK TypeScript code.',
      },
      {
        w: 7,
        f: 'React JS Foundations',
        t: 'JSX, components, props, useState, useEffect, conditional rendering, lists/keys. Vite + TypeScript setup. 3 mini projects.',
      },
      {
        w: 8,
        f: 'React Hooks + Router + Redux',
        t: 'useRef/useMemo/useCallback, custom hooks, React Router v6 nested routes, Redux Toolkit createSlice, RTK Query for API calls',
      },
      {
        w: 9,
        f: 'React Native Foundations',
        t: 'View/Text/Image/TextInput, StyleSheet, Flexbox, FlatList — exercises on your iPad via Expo Go',
      },
      {
        w: 10,
        f: 'React Native Navigation + State',
        t: 'React Navigation v6 (Stack/Tab/Drawer), nested navigation, AsyncStorage, Redux Toolkit in RN',
      },
      {
        w: 11,
        f: 'React Native Device APIs + Animations',
        t: 'Camera, Location, Push Notifications, Expo SDK. Reanimated 2 (useSharedValue/useAnimatedStyle), Gesture Handler',
      },
      {
        w: 12,
        f: 'React Native: FPO App + EAS Build',
        t: 'Build FPO mobile flight status app: flight list, status cards, AWS API Gateway calls. EAS Build config + TestFlight submit to iPad.',
      },
      {
        w: 13,
        f: 'AWS Advanced: CloudWatch + SRE',
        t: 'CloudWatch metrics/alarms/dashboards/Logs Insights, Datadog APM (your FPO tool!), X-Ray tracing, SLOs/error budgets',
      },
      {
        w: 14,
        f: 'AWS: Terraform + GitHub Actions CI/CD',
        t: 'Terraform HCL/providers/modules/S3 state. GitHub Actions OIDC to AWS (keyless auth). CodePipeline/CodeBuild. SonarQube quality gates.',
      },
      {
        w: 15,
        f: 'Revision + Portfolio + Karsten Review',
        t: 'Revise all AWS services. Polish FPO mobile app. Write ADR for one FPO decision. Update Datadog dashboards. Ready for Karsten review.',
      },
    ],
  },

  // ══ BLOCK 2: 12-MONTH STUDY PLAN · 365 days ════════════════════════════

  {
    id: 'b2p1',
    block: 'b2',
    seq: 2,
    icon: '🟨',
    color: '#F59E0B',
    dark: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'JavaScript',
    label: 'Block 2 · Month 1',
    days: 31,
    ds: 104,
    de: 134,
    period: 'Oct 1 – Oct 31, 2026',
    ms: 'JavaScript Complete · D134',
    about:
      '31 days. JavaScript from fundamentals to advanced. ES6+ features, DOM, Promises, async/await, closures, prototypes, classes. Build 3 projects. After Block 1 you already know React — now go deep on the language itself.',
    courses: [
      'Jonas Schmedtmann — The Complete JavaScript Course 2026 (Udemy, 69h) · most comprehensive',
      'javascript.info — free online book, best JS reference alongside the course',
    ],
    wplan: [
      {
        w: 1,
        f: 'JS Fundamentals',
        t: 'Variables (let/const/var), data types, operators, control flow, loops, functions, scope, hoisting, strict mode',
      },
      {
        w: 2,
        f: 'ES6+ Modern JS',
        t: 'Arrow functions, destructuring, spread/rest, template literals, optional chaining, nullish coalescing, modules (import/export)',
      },
      {
        w: 3,
        f: 'DOM + Async JS',
        t: 'DOM manipulation, events, event delegation. Promises (.then/.catch), async/await, fetch API, error handling, JSON',
      },
      {
        w: 4,
        f: 'Advanced + Projects',
        t: "Closures, prototypes, ES6 classes, 'this' keyword, call/apply/bind. Build: To-Do App + Weather App (fetch) + Quiz App (classes)",
      },
    ],
  },
  {
    id: 'b2p2',
    block: 'b2',
    seq: 3,
    icon: '🔷',
    color: '#3B82F6',
    dark: '#1D4ED8',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    name: 'TypeScript',
    label: 'Block 2 · Month 2',
    days: 31,
    ds: 135,
    de: 165,
    period: 'Nov 1 – Dec 1, 2026',
    ms: 'TypeScript Complete · D165',
    about:
      '31 days. TypeScript deep dive — building on your Block 1 foundations. Generics, utility types, declaration files, strict mode. Your FPO CDK code is already TypeScript — this formalises and deepens everything.',
    courses: [
      'Matt Pocock — Total TypeScript (free fundamentals + advanced) · best TS resource',
      'Stephen Grider — TypeScript The Complete Developers Guide (Udemy) · comprehensive projects',
    ],
    wplan: [
      {
        w: 5,
        f: 'TS Type System',
        t: 'Basic types, annotations, inference, union/intersection, literal types, enums, tuples, unknown vs any vs never',
      },
      {
        w: 6,
        f: 'Interfaces + Classes',
        t: 'Interface vs type alias, extending, implements, access modifiers, abstract classes, readonly, optional properties',
      },
      {
        w: 7,
        f: 'Generics + Utility',
        t: 'Generic functions/interfaces/classes, constraints, Partial/Required/Readonly/Pick/Omit/Record, conditional types',
      },
      {
        w: 8,
        f: 'Advanced TS + CDK',
        t: 'Decorators, declaration files (.d.ts), tsconfig strict mode. Apply advanced TS patterns to FPO CDK infrastructure code.',
      },
    ],
  },
  {
    id: 'b2p3',
    block: 'b2',
    seq: 4,
    icon: '⚛',
    color: '#0EA5E9',
    dark: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    name: 'React JS',
    label: 'Block 2 · Month 3',
    days: 31,
    ds: 166,
    de: 196,
    period: 'Dec 2, 2026 – Jan 1, 2027',
    ms: 'React JS Complete · D196',
    about:
      '31 days. React deep dive — building on your Block 1 foundations. Advanced hooks, React Router v6, Redux Toolkit + RTK Query, testing, performance. Build FPO flight dashboard calling your AWS API Gateway.',
    courses: [
      'John Smilga — React 18 Tutorial and Projects (Udemy, 50h) · 25+ projects',
      'Max Schwarzmuller — React The Complete Guide 2026 (Udemy) · TypeScript + Redux + testing',
    ],
    wplan: [
      {
        w: 9,
        f: 'React Foundations Deep Dive',
        t: 'JSX, components, props, useState, conditional rendering, lists/keys. Vite + TypeScript. Re-build all 3 Block 1 mini projects from scratch.',
      },
      {
        w: 10,
        f: 'Hooks + Router',
        t: 'useEffect, useRef, useMemo, useCallback, custom hooks. React Router v6 nested routes, dynamic params, loaders, error boundaries',
      },
      {
        w: 11,
        f: 'State Management',
        t: 'Context API + useReducer, Redux Toolkit (createSlice/configureStore), RTK Query for async API state, optimistic updates',
      },
      {
        w: 12,
        f: 'Advanced + FPO Dashboard',
        t: 'React.memo, lazy/Suspense, error boundaries, React Testing Library. Build FPO Flight Dashboard calling AWS API Gateway + Lambda.',
      },
    ],
  },
  {
    id: 'b2p4',
    block: 'b2',
    seq: 5,
    icon: '▲',
    color: '#374151',
    dark: '#111827',
    bg: '#F9FAFB',
    border: '#D1D5DB',
    name: 'Next.js',
    label: 'Block 2 · Month 4',
    days: 31,
    ds: 197,
    de: 227,
    period: 'Jan 2 – Feb 1, 2027',
    ms: 'Next.js Complete · D227',
    about:
      '31 days. Next.js 15 App Router. Server Components, Server Actions, NextAuth v5, Prisma ORM, PostgreSQL, Vercel deployment. Build FPO web portal as capstone — authenticated flight ops dashboard deployed publicly.',
    courses: [
      'Max Schwarzmuller — Next.js and React The Complete Guide (Udemy, 25h) · App Router',
      'Lee Robinson (Vercel) — Next.js Learn (free official) · App Router fundamentals',
    ],
    wplan: [
      {
        w: 13,
        f: 'App Router Foundations',
        t: 'File-based routing, layouts, loading/error/not-found pages, route groups, parallel routes',
      },
      {
        w: 14,
        f: 'Server Components + Data',
        t: 'RSC vs Client Components, fetch caching/revalidation, ISR/SSG/SSR, Suspense streaming, Server Actions',
      },
      {
        w: 15,
        f: 'Auth + Database',
        t: 'NextAuth v5 OAuth (Google/GitHub), middleware, protected routes, Prisma ORM + PostgreSQL',
      },
      {
        w: 16,
        f: 'Deploy + FPO Web Portal',
        t: 'Vercel deployment, env vars, image optimisation. FPO web portal: auth + flight dashboard + AWS backend.',
      },
    ],
  },
  {
    id: 'b2p5',
    block: 'b2',
    seq: 6,
    icon: '📱',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'React Native',
    label: 'Block 2 · Month 5',
    days: 31,
    ds: 228,
    de: 258,
    period: 'Feb 2 – Mar 4, 2027',
    ms: 'React Native Complete · D258',
    about:
      '31 days. React Native deep revision and polish — building on your Block 1 foundations. Advanced navigation patterns, performance optimisation, EAS Build CI/CD, TestFlight. Ship FPO mobile app v2.',
    courses: [
      'Chaicode — React Native Full Course (primary, free, Hindi+English)',
      'Stephen Grider — The Complete React Native + Hooks Course (Udemy, 38h) · supplementary',
    ],
    wplan: [
      {
        w: 17,
        f: 'RN Core Components Revision',
        t: 'Rebuild all Block 1 components from scratch. Identify gaps. Add FlatList optimisation, memoisation, PureComponent patterns.',
      },
      {
        w: 18,
        f: 'React Navigation Advanced',
        t: 'Nested navigation patterns, deep linking, modal stacks, custom tab bars, animated navigation transitions',
      },
      {
        w: 19,
        f: 'RN Performance + Testing',
        t: 'React.memo in RN, useMemo/useCallback, FlatList performance (keyExtractor, getItemLayout, windowSize), Flipper debugging',
      },
      {
        w: 20,
        f: 'EAS + FPO App v2 + Deploy',
        t: 'EAS Build CI/CD pipeline, OTA updates, EAS Submit to TestFlight. FPO App v2: offline mode, real-time updates, notifications.',
      },
    ],
  },
  {
    id: 'b2p6',
    block: 'b2',
    seq: 7,
    icon: '☕',
    color: '#D97706',
    dark: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'J2SE (Java Core)',
    label: 'Block 2 · Month 6',
    days: 30,
    ds: 259,
    de: 288,
    period: 'Mar 5 – Apr 3, 2027',
    ms: 'J2SE Complete · D288',
    about:
      '30 days. Java Core using your C# .NET background for fast learning. Syntax C# vs Java, OOP, Collections, Generics, Java 8+ (Streams, Lambdas, Optional, CompletableFuture), Multithreading, modern Java features.',
    courses: [
      'Navin Reddy Telusko — Java Programming (YouTube free) · J2SE fast-track',
      'Tim Buchalka — Java Masterclass 2026 (Udemy, 80h) · most comprehensive',
    ],
    wplan: [
      {
        w: 21,
        f: 'Java Syntax + OOP',
        t: 'JDK/JVM/JRE, syntax vs C#, classes, inheritance, polymorphism, interfaces, abstract classes, access modifiers',
      },
      {
        w: 22,
        f: 'Collections + Generics',
        t: 'ArrayList, LinkedList, HashMap, HashSet, TreeMap, PriorityQueue, generics (<T>), Comparator, Collections utility class',
      },
      {
        w: 23,
        f: 'Java 8+ Streams + Lambdas',
        t: 'Lambda expressions, Stream API (filter/map/reduce/collect/flatMap), Optional, method references, default interface methods',
      },
      {
        w: 24,
        f: 'Concurrency + Modern Java',
        t: 'Thread/Runnable, ExecutorService, CompletableFuture. Java 14-21: records, sealed classes, pattern matching, text blocks',
      },
    ],
  },
  {
    id: 'b2p7',
    block: 'b2',
    seq: 8,
    icon: '🏭',
    color: '#EA580C',
    dark: '#C2410C',
    bg: '#FFF7ED',
    border: '#FED7AA',
    name: 'J2EE (Java Enterprise)',
    label: 'Block 2 · Month 7',
    days: 30,
    ds: 289,
    de: 318,
    period: 'Apr 4 – May 3, 2027',
    ms: 'J2EE Complete · D318',
    about:
      '30 days. Java Enterprise Edition — Servlets, JSP, JDBC, JAX-RS REST APIs, CDI dependency injection, EJB session beans, JMS messaging. Foundation for Spring Boot. JMS bridges directly to Kafka in Microservices month.',
    courses: [
      'Baeldung.com — Java EE articles (free) · Servlets, JDBC, JAX-RS, CDI',
      'Ranga Karanam — Java EE and Jakarta EE (Udemy) · practical projects',
    ],
    wplan: [
      {
        w: 25,
        f: 'Servlets + JSP + JDBC',
        t: 'HttpServlet lifecycle, doGet/doPost, filters, session management. JSP EL/JSTL MVC. JDBC with HikariCP connection pooling.',
      },
      {
        w: 26,
        f: 'JAX-RS REST APIs',
        t: '@Path, @GET/@POST/@PUT/@DELETE, @PathParam, @QueryParam, Jackson JSON binding, content negotiation, exception mappers',
      },
      {
        w: 27,
        f: 'CDI + EJB Concepts',
        t: 'CDI @Inject/@ApplicationScoped/@RequestScoped, EJB session beans (stateless/stateful), interceptors, lifecycle callbacks',
      },
      {
        w: 28,
        f: 'JMS + Integration',
        t: 'JMS queues vs topics, point-to-point vs pub-sub, JNDI lookup — bridges directly to Kafka patterns in Microservices month',
      },
    ],
  },
  {
    id: 'b2p8',
    block: 'b2',
    seq: 9,
    icon: '🗄',
    color: '#B45309',
    dark: '#92400E',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'JPA / Hibernate',
    label: 'Block 2 · Month 8',
    days: 30,
    ds: 319,
    de: 348,
    period: 'May 4 – Jun 2, 2027',
    ms: 'JPA / Hibernate Complete · D348',
    about:
      '30 days. JPA and Hibernate — entity mapping, relationships, JPQL, N+1 problem solutions, @Transactional, Spring Data JPA. Every concept maps to FPO: DynamoDB replaces relational DB but all ORM patterns transfer.',
    courses: [
      'John Thompson — Hibernate and Spring Data JPA Beginner to Guru (Udemy, 55h) · best JPA course',
      'Baeldung.com — JPA/Hibernate articles (free) · N+1, caching, transactions reference',
    ],
    wplan: [
      {
        w: 29,
        f: 'JPA Entity Mapping',
        t: '@Entity, @Id, @GeneratedValue, @Column, @Table, @Embedded, EntityManager, entity lifecycle states, persistence.xml',
      },
      {
        w: 30,
        f: 'Relationships + JPQL',
        t: '@OneToMany, @ManyToMany, CascadeType, FetchType, @JoinColumn. JPQL queries, @NamedQuery, Pageable pagination',
      },
      {
        w: 31,
        f: 'N+1 + Transactions',
        t: 'Identifying N+1 with SQL logging, @EntityGraph, JOIN FETCH. @Transactional propagation, isolation levels, optimistic locking',
      },
      {
        w: 32,
        f: 'Spring Data JPA + Caching',
        t: 'JpaRepository, @Query, Specification. L1/L2 caching (EhCache), Hibernate statistics, Spring Data projections',
      },
    ],
  },
  {
    id: 'b2p9',
    block: 'b2',
    seq: 10,
    icon: '🌱',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'Spring Boot',
    label: 'Block 2 · Month 9',
    days: 30,
    ds: 349,
    de: 378,
    period: 'Jun 3 – Jul 2, 2027',
    ms: 'Spring Boot Complete · D378',
    about:
      '30 days. Spring Boot 3 — IoC, Spring MVC, REST APIs, Spring Security + JWT + OAuth2, testing (JUnit5/Mockito/Testcontainers). Your C# .NET 8 + FPO Cognito OAuth2 background maps exactly. Deploy to AWS ECS.',
    courses: [
      'John Thompson — Spring Framework 6 Beginner to Guru (Udemy, 40h) · most comprehensive',
      'Ranga Karanam — Master Spring Boot 3 and Spring Framework 6 (Udemy, 36h) · practical projects',
    ],
    wplan: [
      {
        w: 33,
        f: 'Spring Boot Core + IoC',
        t: 'Auto-configuration, @Bean/@Component/@Service/@Repository, constructor injection, AOP, @ConfigurationProperties',
      },
      {
        w: 34,
        f: 'Spring MVC + REST APIs',
        t: '@RestController, ResponseEntity, @Valid, @ExceptionHandler, @ControllerAdvice, OpenAPI/Swagger, DTO + MapStruct',
      },
      {
        w: 35,
        f: 'Spring Security + OAuth2',
        t: 'SecurityFilterChain, JWT filter, UserDetailsService, BCrypt. OAuth2 resource server + JWKS = your FPO Cognito pattern!',
      },
      {
        w: 36,
        f: 'Testing + Capstone + AWS',
        t: '@WebMvcTest, MockMvc, @DataJpaTest, Testcontainers, Mockito. Full REST API + JWT + JPA + Docker → deploy to AWS ECS.',
      },
    ],
  },
  {
    id: 'b2p10',
    block: 'b2',
    seq: 11,
    icon: '🏛',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECDD3',
    name: 'Microservices',
    label: 'Block 2 · Month 10',
    days: 30,
    ds: 379,
    de: 408,
    period: 'Jul 3 – Aug 1, 2027',
    ms: 'Microservices Complete · D408',
    about:
      '30 days. Microservices with Spring Cloud, Kafka, CQRS, Event Sourcing, Saga pattern, deploy to AWS EKS. Every pattern maps to FPO: EventBridge=Kafka, Step Functions=Saga, Lambda=Microservice. Your FPO production experience is a massive advantage.',
    courses: [
      'Ranga Karanam — Java Spring Boot Microservices with K8s and Docker (Udemy, 35h)',
      'Sean Campbell — Master Spring Boot Microservices CQRS and Event Sourcing (Udemy, 10h)',
    ],
    wplan: [
      {
        w: 37,
        f: 'Service Design + Spring Cloud',
        t: 'DDD bounded contexts, Eureka discovery, Spring Cloud Gateway, config server, Feign clients — all map to FPO architecture',
      },
      {
        w: 38,
        f: 'Resilience + Kafka',
        t: 'Resilience4j circuit breaker/retry/bulkhead. Kafka producers/consumers/partitions — maps to your FPO EventBridge',
      },
      {
        w: 39,
        f: 'CQRS + Event Sourcing',
        t: 'Read/write separation, Axon event store, event replay — maps to FPO mission-feed event sourcing table',
      },
      {
        w: 40,
        f: 'Saga + EKS Deploy',
        t: 'Orchestration vs choreography (Step Functions=Saga!). Deploy microservices to AWS EKS. Write 1 ADR.',
      },
    ],
  },
  {
    id: 'b2p11',
    block: 'b2',
    seq: 12,
    icon: '🐍',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'Python',
    label: 'Block 2 · Month 11',
    days: 30,
    ds: 409,
    de: 438,
    period: 'Aug 2 – Aug 31, 2027',
    ms: 'Python Complete · D438',
    about:
      '30 days. Python fundamentals through advanced + AWS boto3 automation. OOP, file handling, JSON, APIs, decorators, asyncio. Your SCB Thailand Python/boto3 experience means fast revision. Foundation for Agentic AI in Block 3.',
    courses: [
      'Automate the Boring Stuff with Python (Al Sweigart, free online) · practical Python',
      'Corey Schafer — Python YouTube playlist (free) · best OOP + decorators coverage',
    ],
    wplan: [
      {
        w: 41,
        f: 'Python Fundamentals + OOP',
        t: 'Variables, data types, control flow, functions, list/dict comprehensions, OOP classes, inheritance, dunder methods, dataclasses',
      },
      {
        w: 42,
        f: 'File + JSON + APIs',
        t: 'File I/O, pathlib, JSON processing, requests library, REST API calls, OAuth2, error handling',
      },
      {
        w: 43,
        f: 'Advanced Python',
        t: 'Decorators, generators, context managers, type hints, regex, asyncio basics, virtual environments, packaging',
      },
      {
        w: 44,
        f: 'boto3 + AWS Automation',
        t: 'boto3: EC2 provisioning, S3 ops, Lambda invoke, DynamoDB CRUD, CloudWatch log queries — extend Block 1 AWS skills',
      },
    ],
  },
  {
    id: 'b2p12',
    block: 'b2',
    seq: 13,
    icon: '🔧',
    color: '#D97706',
    dark: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'DevOps',
    label: 'Block 2 · Month 12 · FINAL',
    days: 30,
    ds: 439,
    de: 468,
    period: 'Sep 1 – Sep 30, 2027',
    ms: '12-Month Plan COMPLETE · D468 · Sep 30, 2027',
    about:
      '30 days. DevOps: Docker, Kubernetes (EKS), CI/CD (GitHub Actions + CodePipeline), Terraform, Prometheus/Grafana monitoring, SonarQube quality gates, DevSecOps with Trivy. Build end-to-end enterprise pipeline as capstone.',
    courses: [
      'Nana Janashia TechWorld — DevOps Bootcamp (YouTube/Udemy) · Docker, K8s, CI/CD',
      'Mumshad Mannambeth — Kubernetes for Beginners + CKA (KodeKloud) · your CKA background!',
    ],
    wplan: [
      {
        w: 45,
        f: 'Docker + Kubernetes (EKS)',
        t: 'Dockerfile/multi-stage/ECR/ECS, EKS cluster/kubectl/Pods/Deployments/Services/Ingress, Helm charts, ArgoCD GitOps',
      },
      {
        w: 46,
        f: 'CI/CD: GitHub Actions + Jenkins',
        t: 'GitHub Actions OIDC to AWS, CodePipeline/CodeBuild, Jenkins declarative pipelines, SonarQube quality gates integration',
      },
      {
        w: 47,
        f: 'Terraform + Monitoring',
        t: 'Terraform HCL/providers/modules/S3 remote state/workspaces. Prometheus/Grafana dashboards. Datadog APM (your FPO tool!).',
      },
      {
        w: 48,
        f: 'DevSecOps + Enterprise Pipeline',
        t: 'Trivy image scanning, OWASP dependency check, AWS Secrets Manager. Full pipeline: GitHub→GHA→SonarQube→Docker→ECR→EKS→Monitor.',
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
    name: 'Agentic AI using Python',
    label: 'Block 3 · 6 Months',
    days: 182,
    ds: 469,
    de: 650,
    period: 'Oct 1, 2027 – Mar 30, 2028',
    ms: 'Agentic AI Complete · D650',
    about:
      '6 months · 182 days. LangChain, LangGraph, RAG pipelines, multi-agent systems, MCP protocol, Ed Donner 8 real projects. Your SCB Thailand LangChain/LangGraph experience = deep revision + extension. Capstone: FPO AI assistant (natural language flight queries) deployed to Lambda on AWS.',
    courses: [
      'Ed Donner — Complete Agentic AI Engineering Course 2026 (Udemy/own site, 30h) · 8 real projects',
      'Eden Marco — LangChain Develop LLM Powered Applications (Udemy, 22h) · LangChain deep dive',
      'Dr. Frank Kane — ChatGPT + Generative AI Masterclass (Udemy, 22h) · foundations + AWS Bedrock',
      'AWS Bedrock docs — deploy Agentic AI on your existing AWS infrastructure from Block 1',
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
    name: 'Data Structures (Java)',
    label: 'Block 3 · 12 Months',
    days: 365,
    ds: 651,
    de: 1015,
    period: 'Mar 31, 2028 – Mar 30, 2029',
    ms: 'Data Structures COMPLETE · D1015',
    about:
      '12 months · 365 days · 52 weeks. Complete DSA in Java — Arrays, Linked Lists, Stacks, Queues, Trees, BST, Heaps, Graphs, Hashing, Sorting, Dynamic Programming (8 weeks — hardest), Backtracking, Greedy, Tries. 300+ LeetCode problems. Scott Barrett Java DSA course + NeetCode 150. Master DP and you stand out in every interview.',
    courses: [
      'Scott Barrett — Java DSA + LeetCode Exercises (Udemy, 4.8★) · Java implementations side by side',
      'NeetCode — Full DSA playlist (YouTube free) · pattern-based approach to all topics',
      'LeetCode Top Interview 150 — structured problem set · complete all 150',
      'Pramp.com — free peer mock interviews (final weeks)',
    ],
    wplan: [
      {
        w: 1,
        f: 'Arrays + Strings',
        t: 'Two pointers, sliding window, prefix sums, binary search, string manipulation. 50 LeetCode problems.',
      },
      {
        w: 5,
        f: 'Linked Lists + Stacks/Queues',
        t: 'Fast/slow pointer, cycle detection, reversal, monotonic stack, deque. 40 LeetCode problems.',
      },
      {
        w: 8,
        f: 'Trees + BST',
        t: 'DFS (pre/in/post-order), BFS level-order, BST ops, LCA, serialize/deserialize. 50 LeetCode problems.',
      },
      {
        w: 13,
        f: 'Heaps + Graphs',
        t: 'PriorityQueue (Java), Top-K, Dijkstra, BFS/DFS on graphs, topological sort, Union-Find. 50 problems.',
      },
      {
        w: 18,
        f: 'Hashing + Sorting',
        t: 'Frequency maps, two-sum pattern, all sort algorithms with proofs, binary search variants. 40 problems.',
      },
      {
        w: 22,
        f: 'Dynamic Programming (8 weeks)',
        t: '1D DP, 2D DP, knapsack pattern, string DP, grid DP, interval DP. 80 LeetCode problems. Most time here.',
      },
      {
        w: 30,
        f: 'Backtracking + Greedy + Tries',
        t: 'Subsets, permutations, N-Queens, Sudoku, activity selection, monotonic greedy, trie insert/search. 40 problems.',
      },
      {
        w: 49,
        f: 'LeetCode Mocks + Mock Interviews',
        t: '100 timed cold problems. 7 full mock interviews (spoken aloud, 45 min, no IDE). Cheatsheet compilation.',
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
    days: 49,
    ds: 1016,
    de: 1064,
    period: 'Mar 31 – May 18, 2029',
    ms: '1064 DAYS OF CODE COMPLETE · May 18, 2029',
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
        t: 'Final mocks. ADRs for 5 systems. GitHub portfolio. Day 1064 = May 18, 2029 = 1064 DAYS OF CODE COMPLETE 🎉',
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
    day: 134,
    icon: '🟨',
    label: 'JavaScript',
    date: 'Oct 31, 2026',
    color: '#F59E0B',
  },
  {
    day: 165,
    icon: '🔷',
    label: 'TypeScript',
    date: 'Dec 1, 2026',
    color: '#3B82F6',
  },
  {
    day: 196,
    icon: '⚛',
    label: 'React JS',
    date: 'Jan 1, 2027',
    color: '#0EA5E9',
  },
  {
    day: 227,
    icon: '▲',
    label: 'Next.js',
    date: 'Feb 1, 2027',
    color: '#374151',
  },
  {
    day: 258,
    icon: '📱',
    label: 'React Native',
    date: 'Mar 4, 2027',
    color: '#7C3AED',
  },
  {
    day: 288,
    icon: '☕',
    label: 'J2SE Java Core',
    date: 'Apr 3, 2027',
    color: '#D97706',
  },
  {
    day: 318,
    icon: '🏭',
    label: 'J2EE Enterprise',
    date: 'May 3, 2027',
    color: '#EA580C',
  },
  {
    day: 348,
    icon: '🗄',
    label: 'JPA / Hibernate',
    date: 'Jun 2, 2027',
    color: '#B45309',
  },
  {
    day: 378,
    icon: '🌱',
    label: 'Spring Boot',
    date: 'Jul 2, 2027',
    color: '#16A34A',
  },
  {
    day: 408,
    icon: '🏛',
    label: 'Microservices',
    date: 'Aug 1, 2027',
    color: '#E11D48',
  },
  {
    day: 438,
    icon: '🐍',
    label: 'Python',
    date: 'Aug 31, 2027',
    color: '#16A34A',
  },
  {
    day: 468,
    icon: '🔧',
    label: 'DevOps — 12 Months DONE',
    date: 'Sep 30, 2027',
    color: '#D97706',
  },
  {
    day: 650,
    icon: '🤖',
    label: 'Agentic AI DONE',
    date: 'Mar 30, 2028',
    color: '#6366F1',
  },
  {
    day: 1015,
    icon: '🧩',
    label: 'Data Structures DONE',
    date: 'Mar 30, 2029',
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
      sub: 'D104–D468 · Oct 1, 2026 – Sep 30, 2027 · 365 days · 3 hours/day · 5:30–8:30 AM · 1 skill per month',
      ids: [
        'b2p1',
        'b2p2',
        'b2p3',
        'b2p4',
        'b2p5',
        'b2p6',
        'b2p7',
        'b2p8',
        'b2p9',
        'b2p10',
        'b2p11',
        'b2p12',
      ],
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
                  '✅ D1–D3 DONE (Jun 20-22 · 3h/day) · D4–D103: Jun 23–Sep 30 · 5:30-8:30 AM + 9-11 AM · 5h/day · JOB SURVIVAL SPRINT'
                }
              </div>
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.5)' }}>
                {
                  'D4 starts Jun 23 (tomorrow) · Slot 1 (5:30-8:30 AM): AWS · Slot 2 (9-11 AM): React Native + React + TypeScript · 100 days'
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
