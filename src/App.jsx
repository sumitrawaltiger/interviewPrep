import { useState } from 'react';

// 18 Months of Code
// Mon Jun 15, 2026 to Tue Dec 14, 2027 — 548 days
// 1 Skill per Month · 5:30 AM to 8:30 AM daily mandatory

const START = new Date('2026-06-15');
const TOTAL = 548;

const PHASES = [
  {
    id: 'm01',
    seq: 1,
    icon: '🟨',
    color: '#F59E0B',
    dark: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'JavaScript',
    period: 'Jun 15 - Jul 14, 2026',
    days: 30,
    ds: 1,
    de: 30,
    ms: 'JavaScript Complete · D30',
    about:
      '30 days. Complete JavaScript from fundamentals to advanced. Variables, data types, functions, DOM manipulation, events, ES6+ (arrow functions, destructuring, spread/rest, template literals, modules), Promises, async/await, fetch API, closures, prototypes, classes. Build 3 mini projects.',
    topics: [
      'Fundamentals: variables (let/const/var), data types, operators, control flow, loops, functions',
      'ES6+: arrow functions, destructuring, spread/rest, template literals, default params, modules (import/export)',
      'DOM: querySelector, addEventListener, innerHTML, classList, createElement, event bubbling/delegation',
      'Async: callbacks, Promises (.then/.catch/.finally), async/await, fetch API, error handling',
      "Advanced: closures, hoisting, scope, prototypes, classes, 'this' keyword, call/apply/bind",
      'Projects: To-Do App, Weather App (fetch API), Quiz App',
    ],
    wplan: [
      {
        w: 1,
        f: 'JS Fundamentals',
        t: 'Variables, data types, operators, if/else/switch, loops (for/while/forEach), functions (declarations vs expressions)',
      },
      {
        w: 2,
        f: 'ES6+ Modern JS',
        t: 'Arrow functions, destructuring (array/object), spread/rest, template literals, default params, optional chaining, nullish coalescing',
      },
      {
        w: 3,
        f: 'DOM + Async',
        t: 'DOM manipulation, events, event delegation. Promises, async/await, fetch API, error handling, JSON',
      },
      {
        w: 4,
        f: 'Advanced + Projects',
        t: 'Closures, hoisting, scope chain, prototypes, ES6 classes, modules. Build To-Do App + Weather App + Quiz App',
      },
    ],
  },
  {
    id: 'm02',
    seq: 2,
    icon: '🔷',
    color: '#3B82F6',
    dark: '#1D4ED8',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    name: 'TypeScript',
    period: 'Jul 15 - Aug 14, 2026',
    days: 31,
    ds: 31,
    de: 61,
    ms: 'TypeScript Complete · D61',
    about:
      '31 days. TypeScript from scratch on top of your JavaScript knowledge. Type system, interfaces, generics, enums, utility types, decorators, strict mode. Convert your JS projects to TS. Directly applicable to FPO Cloud (already uses TypeScript CDK for AWS Step Functions).',
    topics: [
      'Type system: primitives, arrays, tuples, enums, union/intersection types, type guards, type assertions',
      'Interfaces and Types: interface vs type alias, extending, implements, index signatures',
      'Generics: generic functions, generic interfaces, generic classes, constraints (<T extends ...>)',
      'Utility Types: Partial, Required, Readonly, Pick, Omit, Record, Exclude, Extract',
      'Advanced: decorators, namespace, declaration files (.d.ts), strict mode, tsconfig.json',
      'Projects: Convert JS projects to TS + build a typed REST API client',
    ],
    wplan: [
      {
        w: 5,
        f: 'TS Type System',
        t: 'Basic types, type annotations, type inference, union/intersection, literal types, enums, tuples, arrays',
      },
      {
        w: 6,
        f: 'Interfaces + Classes',
        t: 'Interfaces vs type aliases, extending interfaces, implements, access modifiers (public/private/protected), abstract classes',
      },
      {
        w: 7,
        f: 'Generics + Utility',
        t: 'Generic functions, generic interfaces, constraints, Partial/Required/Readonly/Pick/Omit/Record utility types, conditional types',
      },
      {
        w: 8,
        f: 'Advanced TS + Config',
        t: 'Decorators, declaration files, tsconfig.json strict mode, module resolution. Convert all JS projects to TypeScript. Typed API client.',
      },
    ],
  },
  {
    id: 'm03',
    seq: 3,
    icon: '⚛',
    color: '#0EA5E9',
    dark: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    name: 'React',
    period: 'Aug 15 - Sep 14, 2026',
    days: 31,
    ds: 62,
    de: 92,
    ms: 'React Complete · D92',
    about:
      '31 days. React with TypeScript. Components, props, state, hooks, React Router v6, Context API, Redux Toolkit, React Query, testing with React Testing Library. Build a full FPO flight dashboard as capstone. Builds on your existing React knowledge from FPO Cloud.',
    topics: [
      'Foundations: JSX, functional components, props, state (useState), conditional rendering, lists and keys',
      'Core Hooks: useEffect, useContext, useRef, useMemo, useCallback, custom hooks',
      'React Router v6: file-based routing, nested routes, dynamic routes, useParams, useNavigate, loaders',
      'State Management: Context API + useReducer, Redux Toolkit (createSlice, configureStore, RTK Query)',
      'Advanced: React.memo, lazy/Suspense, error boundaries, portals, forwardRef, compound components',
      'Testing: React Testing Library, Jest, @testing-library/user-event, mocking',
    ],
    wplan: [
      {
        w: 9,
        f: 'React Foundations',
        t: 'JSX, components, props, useState, conditional rendering, lists, keys. Vite setup with TypeScript.',
      },
      {
        w: 10,
        f: 'Hooks + Router',
        t: 'useEffect, useRef, useMemo, useCallback, custom hooks. React Router v6 nested routes, dynamic params.',
      },
      {
        w: 11,
        f: 'State Management',
        t: 'Context API + useReducer pattern, Redux Toolkit createSlice/configureStore, RTK Query for API calls',
      },
      {
        w: 12,
        f: 'Advanced + Capstone',
        t: 'React.memo, lazy/Suspense, error boundaries. Build FPO Flight Dashboard: real-time flight list, weather overlay, status cards.',
      },
    ],
  },
  {
    id: 'm04',
    seq: 4,
    icon: '▲',
    color: '#374151',
    dark: '#111827',
    bg: '#F9FAFB',
    border: '#D1D5DB',
    name: 'Next.js',
    period: 'Sep 15 - Oct 14, 2026',
    days: 30,
    ds: 93,
    de: 122,
    ms: 'Next.js Complete · D122',
    about:
      '30 days. Next.js 15 with App Router. Server Components, Server Actions, data fetching, caching, NextAuth v5, Prisma ORM, PostgreSQL, Vercel deployment. Build FPO web portal as capstone. Directly applicable to full-stack development roles.',
    topics: [
      'App Router: file-based routing, layouts, loading.tsx, error.tsx, not-found.tsx, route groups',
      "Server vs Client: React Server Components, 'use client' directive, streaming, Suspense boundaries",
      'Data Fetching: fetch with revalidation, generateStaticParams, dynamic routes, ISR, SSG, SSR',
      'Server Actions: form actions, mutations, revalidatePath, revalidateTag, optimistic updates',
      'Auth + Database: NextAuth v5, OAuth providers, middleware, Prisma ORM, PostgreSQL, Drizzle ORM option',
      'Deploy: Vercel deployment, environment variables, edge runtime, image optimization',
    ],
    wplan: [
      {
        w: 13,
        f: 'App Router Foundations',
        t: 'File-based routing, layouts, nested routes, loading/error/not-found pages, route groups, parallel routes',
      },
      {
        w: 14,
        f: 'Server Components + Data',
        t: 'RSC vs Client Components, fetch caching, revalidation strategies (ISR/SSG/SSR), Suspense streaming',
      },
      {
        w: 15,
        f: 'Server Actions + Auth',
        t: 'Form Server Actions, mutations, revalidatePath, NextAuth v5 OAuth providers, middleware, protected routes',
      },
      {
        w: 16,
        f: 'Database + Deploy',
        t: 'Prisma ORM with PostgreSQL, schema design, migrations. Vercel deploy. FPO web portal capstone.',
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
    period: 'Oct 15 - Nov 14, 2026',
    days: 31,
    ds: 123,
    de: 153,
    ms: 'React Native Complete · D153',
    about:
      '31 days. React Native via Chaicode + Stephen Grider. Core components, React Navigation v6, Redux Toolkit in RN, device APIs (Camera/Location/Notifications), Expo SDK, animations, EAS Build. Build FPO mobile flight app deployed to TestFlight on your iPad.',
    topics: [
      'Core Components: View, Text, Image, TextInput, TouchableOpacity, FlatList, SectionList, ScrollView, StyleSheet',
      'Navigation: React Navigation v6 — Stack, Tab (Bottom/Material Top), Drawer navigators',
      'State: Redux Toolkit in React Native, AsyncStorage persistence, Context API, Zustand option',
      'Device APIs: Camera (Expo), Location, Push Notifications, Expo ImagePicker, Expo FileSystem',
      'Animations: Animated API, Reanimated 2 (useSharedValue, useAnimatedStyle), Gesture Handler',
      'Build: EAS Build, TestFlight submission, App Store Connect, platform-specific code (Platform.OS)',
    ],
    wplan: [
      {
        w: 17,
        f: 'Core Components + Layout',
        t: 'View/Text/Image/TextInput, StyleSheet, Flexbox layout, FlatList, SectionList — exercises on iPad via Expo Go',
      },
      {
        w: 18,
        f: 'React Navigation v6',
        t: 'Stack Navigator, Bottom Tab Navigator, Drawer Navigator, nested navigation, passing params, deep linking',
      },
      {
        w: 19,
        f: 'State + Device APIs',
        t: 'Redux Toolkit in RN, AsyncStorage, Camera, Location, Push Notifications, Expo SDK modules',
      },
      {
        w: 20,
        f: 'Animations + EAS + Deploy',
        t: 'Reanimated 2, Gesture Handler, platform differences. EAS Build config, TestFlight. FPO mobile app deployed.',
      },
    ],
  },
  {
    id: 'm06',
    seq: 6,
    icon: '🐍',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'Python',
    period: 'Nov 15 - Dec 14, 2026',
    days: 30,
    ds: 154,
    de: 183,
    ms: 'Python Complete · D183',
    about:
      '30 days. Python from fundamentals to advanced. OOP, file handling, JSON, regex, APIs, multithreading, virtual environments, packaging. AWS automation with boto3. Your SCB Thailand Python work means this is fast revision + deepening. Foundation for Flask and Agentic AI months.',
    topics: [
      'Fundamentals: variables, data types, operators, control flow, functions, list/dict/set/tuple comprehensions',
      'OOP: classes, inheritance, polymorphism, dunder methods, dataclasses, abstract classes, mixins',
      'File + JSON: file I/O (open/read/write), pathlib, JSON (json.loads/dumps), CSV, environment variables',
      'APIs + HTTP: requests library, REST API calls, authentication (API key/OAuth), JSON parsing, error handling',
      'Advanced: decorators, generators, context managers, type hints, regex (re module), asyncio basics',
      'AWS with boto3: EC2/S3/Lambda/DynamoDB automation — builds directly on your FPO Cloud knowledge',
    ],
    wplan: [
      {
        w: 21,
        f: 'Python Fundamentals + OOP',
        t: 'Variables, data types, control flow, functions, list/dict comprehensions, OOP classes, inheritance, dunder methods',
      },
      {
        w: 22,
        f: 'File Handling + APIs',
        t: 'File I/O, pathlib, JSON processing, requests library, REST API calls, authentication, error handling',
      },
      {
        w: 23,
        f: 'Advanced Python',
        t: 'Decorators, generators, context managers, type hints, regex, asyncio basics, dataclasses, virtual environments',
      },
      {
        w: 24,
        f: 'Python + AWS boto3',
        t: 'boto3: EC2 provisioning, S3 operations, Lambda invoke, DynamoDB CRUD, CloudWatch logs — maps to your FPO Cloud work',
      },
    ],
  },
  {
    id: 'm07',
    seq: 7,
    icon: '🌶',
    color: '#059669',
    dark: '#047857',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    name: 'Flask',
    period: 'Dec 15, 2026 - Jan 14, 2027',
    days: 31,
    ds: 184,
    de: 214,
    ms: 'Flask Complete · D214',
    about:
      '31 days. Flask web framework — routing, Blueprints, Jinja2 templates, SQLAlchemy ORM, Flask-RESTful, JWT authentication, Flask-Login, Flask-Mail, deployment. Build a production-grade REST API as capstone. Foundation before moving to FastAPI and Agentic AI.',
    topics: [
      'Flask Core: routing, HTTP methods, request/response, Blueprints, application factory pattern',
      'Templates: Jinja2 templating, template inheritance, macros, filters, context processors',
      'Database: Flask-SQLAlchemy (ORM), models, relationships, migrations (Flask-Migrate/Alembic)',
      'REST API: Flask-RESTful, request parsing, marshal, authentication (Flask-JWT-Extended), CORS',
      'Security: Flask-Login (session auth), password hashing (bcrypt), CSRF protection, rate limiting',
      'Testing + Deploy: pytest for Flask, test client, Docker containerization, Gunicorn + Nginx deployment',
    ],
    wplan: [
      {
        w: 25,
        f: 'Flask Core + Routing',
        t: 'App factory pattern, Blueprints, routing, HTTP methods, request/response objects, Jinja2 templates, static files',
      },
      {
        w: 26,
        f: 'Database + SQLAlchemy',
        t: 'Flask-SQLAlchemy models, relationships (one-to-many/many-to-many), queries, Flask-Migrate Alembic migrations',
      },
      {
        w: 27,
        f: 'REST API + Auth',
        t: 'Flask-RESTful resources, JWT auth (Flask-JWT-Extended), role-based access, CORS, request validation, error handlers',
      },
      {
        w: 28,
        f: 'Testing + Deploy + Capstone',
        t: 'pytest for Flask, test client, Docker + Gunicorn + Nginx. Build Employee Management REST API capstone.',
      },
    ],
  },
  {
    id: 'm08',
    seq: 8,
    icon: '🤖',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Agentic AI using Python',
    period: 'Jan 15 - Feb 14, 2027',
    days: 31,
    ds: 215,
    de: 245,
    ms: 'Agentic AI Complete · D245',
    about:
      '31 days. LangChain, LangGraph, RAG pipelines, multi-agent systems, MCP protocol, Ed Donner 8 real projects. Your SCB Thailand LangChain/LangGraph experience = deep revision + extension. Build FPO AI assistant as capstone: natural language query over flight data, deployed to Lambda.',
    topics: [
      'GenAI Foundations: LLMs, tokens, embeddings, vector databases (Pinecone/FAISS), RAG architecture',
      'LangChain: chains, agents, tools, memory, LCEL expression language, custom tools, callbacks',
      'LangGraph: state machines, nodes, edges, conditional routing, multi-agent supervisor pattern',
      'Ed Donner Projects: Career Digital Twin, Deep Research Agent, SDR Agent, Browser Agent',
      'MCP Protocol: Model Context Protocol servers, Claude Desktop integration, custom MCP tools',
      'Production: prompt engineering (CoT/ReAct/few-shot), error handling, streaming, cost management',
    ],
    wplan: [
      {
        w: 29,
        f: 'GenAI + LangChain Core',
        t: 'LLMs, embeddings, RAG (retrieval-augmented generation), LangChain chains, tools, memory, LCEL — Frank Kane course',
      },
      {
        w: 30,
        f: 'LangGraph + Multi-Agent',
        t: 'State machines, conditional edges, supervisor agents, parallel execution, human-in-the-loop — Ed Donner course',
      },
      {
        w: 31,
        f: 'Ed Donner 8 Projects',
        t: 'Career Digital Twin, Deep Research Agent, SDR Agent, Browser Agent, MCP server integration, Docker containers',
      },
      {
        w: 32,
        f: 'FPO AI Capstone',
        t: 'FPO AI Assistant: natural language flight queries via LangChain + DynamoDB + Lambda. Deploy, test, and demo.',
      },
    ],
  },
  {
    id: 'm09',
    seq: 9,
    icon: '☕',
    color: '#D97706',
    dark: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'J2SE (Java Core)',
    period: 'Feb 15 - Mar 14, 2027',
    days: 28,
    ds: 246,
    de: 273,
    ms: 'Java J2SE Complete · D273',
    about:
      '28 days. Java Core using your C# .NET background for fast learning. Syntax differences C# vs Java, OOP, Collections framework, Generics, Exception handling, Multithreading, Java 8+ features (Streams, Lambdas, Optional, CompletableFuture), I/O, Serialization. Foundation for J2EE and Spring Boot.',
    topics: [
      'Java Basics: JDK/JVM/JRE, syntax vs C#, data types, operators, control flow, arrays, String manipulation',
      'OOP: classes, constructors, inheritance, polymorphism, abstraction, interfaces, access modifiers, static',
      'Collections: ArrayList, LinkedList, HashMap, HashSet, TreeMap, Iterator, Comparator, Comparable',
      'Java 8+: Lambdas, Stream API (filter/map/reduce/collect), Optional, method references, default methods',
      'Concurrency: Thread, Runnable, ExecutorService, synchronized, volatile, CompletableFuture, atomic',
      'I/O + Modern: File I/O (NIO), serialization, Java 9-21 features (records, sealed classes, pattern matching)',
    ],
    wplan: [
      {
        w: 33,
        f: 'Java Syntax + OOP',
        t: 'JDK setup, syntax vs C#, classes, inheritance, polymorphism, interfaces, abstract classes, access modifiers, static',
      },
      {
        w: 34,
        f: 'Collections + Generics',
        t: 'ArrayList, LinkedList, HashMap, HashSet, TreeMap, generics (<T>), Comparator, Collections utility class, varargs',
      },
      {
        w: 35,
        f: 'Java 8+ Streams + Lambdas',
        t: 'Lambda expressions, Stream API (filter/map/reduce/collect/flatMap), Optional, method references, default interface methods',
      },
      {
        w: 36,
        f: 'Concurrency + Modern Java',
        t: 'Thread/Runnable, ExecutorService, CompletableFuture, synchronized. Java 14-21: records, sealed classes, pattern matching, text blocks',
      },
    ],
  },
  {
    id: 'm10',
    seq: 10,
    icon: '🏭',
    color: '#EA580C',
    dark: '#C2410C',
    bg: '#FFF7ED',
    border: '#FED7AA',
    name: 'J2EE (Java Enterprise)',
    period: 'Mar 15 - Apr 14, 2027',
    days: 31,
    ds: 274,
    de: 304,
    ms: 'Java J2EE Complete · D304',
    about:
      '31 days. Java Enterprise Edition — Servlets, JSP, JNDI, EJB concepts, CDI, JAX-RS (REST APIs in Java), JAX-WS (SOAP), JMS (messaging), JDBC, connection pooling. Foundation for modern Spring Boot which replaces/simplifies all J2EE specs.',
    topics: [
      'Servlets: HttpServlet, request/response lifecycle, doGet/doPost, filters, listeners, session management',
      'JSP: scriptlets, directives, EL (Expression Language), JSTL, MVC pattern with Servlets+JSP',
      'JDBC: DriverManager, Connection, PreparedStatement, ResultSet, transactions, connection pooling (HikariCP)',
      'JAX-RS: @Path, @GET/@POST/@PUT/@DELETE, @PathParam, @QueryParam, MediaType, JSON binding (Jackson)',
      'CDI + EJB: dependency injection concepts, @Inject, @ApplicationScoped, @RequestScoped, EJB session beans',
      'JMS: message brokers, queues vs topics, point-to-point vs pub-sub — foundation for Kafka next month',
    ],
    wplan: [
      {
        w: 37,
        f: 'Servlets + JSP + JDBC',
        t: 'HttpServlet lifecycle, doGet/doPost, filters, session management. JSP with EL/JSTL. JDBC with HikariCP connection pooling.',
      },
      {
        w: 38,
        f: 'JAX-RS REST APIs',
        t: '@Path, @GET/@POST/@PUT/@DELETE, @PathParam, @QueryParam, JSON binding with Jackson, content negotiation, error handling',
      },
      {
        w: 39,
        f: 'CDI + EJB Concepts',
        t: 'Dependency injection with CDI (@Inject, @ApplicationScoped), EJB session beans, lifecycle callbacks, interceptors',
      },
      {
        w: 40,
        f: 'JMS + Integration',
        t: 'JMS (queues vs topics, point-to-point vs pub-sub), JNDI lookup, integration patterns — bridges to Kafka in Microservices month',
      },
    ],
  },
  {
    id: 'm11',
    seq: 11,
    icon: '🗄',
    color: '#B45309',
    dark: '#92400E',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'JPA (Java Persistence API)',
    period: 'Apr 15 - May 14, 2027',
    days: 30,
    ds: 305,
    de: 334,
    ms: 'JPA / Hibernate Complete · D334',
    about:
      '30 days. JPA and Hibernate deep dive. Entity mapping, relationships (One-to-One/One-to-Many/Many-to-Many), JPQL, Criteria API, caching (L1/L2), N+1 problem and solutions, transactions, Spring Data JPA. Every concept maps to FPO Cloud: DynamoDB replaces relational DB but patterns are same.',
    topics: [
      'JPA Basics: @Entity, @Id, @GeneratedValue, @Column, @Table, EntityManager, persistence.xml',
      'Relationships: @OneToOne, @OneToMany, @ManyToOne, @ManyToMany, CascadeType, FetchType, @JoinColumn',
      'JPQL + Criteria: JPQL queries, @NamedQuery, Criteria API, Metamodel, TypedQuery, pagination',
      'N+1 Problem: lazy vs eager loading, @EntityGraph, JOIN FETCH, batch fetching, FetchMode',
      'Transactions: @Transactional, propagation levels (REQUIRED/REQUIRES_NEW), isolation levels, rollback',
      'Caching + Spring Data JPA: L1/L2 cache (EhCache), Hibernate statistics, JpaRepository, @Query, Pageable',
    ],
    wplan: [
      {
        w: 41,
        f: 'JPA Entity Mapping',
        t: '@Entity, @Id, @GeneratedValue, @Column, @Table, @Embedded, @Embeddable, inheritance strategies (SINGLE_TABLE/JOINED)',
      },
      {
        w: 42,
        f: 'Relationships + JPQL',
        t: '@OneToMany, @ManyToMany, cascade types, fetch types, @JoinColumn. JPQL queries, @NamedQuery, pagination with Pageable',
      },
      {
        w: 43,
        f: 'N+1 Problem + Transactions',
        t: 'Identifying N+1, @EntityGraph, JOIN FETCH solutions. @Transactional propagation, isolation levels, optimistic locking (@Version)',
      },
      {
        w: 44,
        f: 'Spring Data JPA + Caching',
        t: 'JpaRepository, @Query, Specification, QueryDSL. L1/L2 caching (EhCache), Hibernate statistics, performance tuning',
      },
    ],
  },
  {
    id: 'm12',
    seq: 12,
    icon: '🌱',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'Spring Boot',
    period: 'May 15 - Jun 14, 2027',
    days: 31,
    ds: 335,
    de: 365,
    ms: 'Spring Boot Complete · D365',
    about:
      '31 days. Spring Boot 3 with everything from J2SE, J2EE, JPA months coming together. Auto-configuration, Spring MVC, REST APIs, Spring Security (JWT + OAuth2), testing (JUnit5/Mockito/Testcontainers). Your C# .NET 8 + Cognito OAuth2 background maps exactly. Build production-grade API as capstone.',
    topics: [
      'Spring Core: IoC container, @Bean, @Component/@Service/@Repository, @Autowired, @Configuration, AOP',
      'Spring MVC: @RestController, @RequestMapping, ResponseEntity, @ExceptionHandler, @ControllerAdvice, OpenAPI',
      'Spring Security: SecurityFilterChain, JWT filter chain, UserDetailsService, BCrypt, method security (@PreAuthorize)',
      'OAuth2: Resource server config, JWT validation, JWKS endpoint — same pattern as your FPO Cognito setup!',
      'Testing: @SpringBootTest, @WebMvcTest, MockMvc, @DataJpaTest, Testcontainers, Mockito, WireMock',
      'Actuator + Deploy: Spring Boot Actuator, health checks, metrics, Docker multi-stage build, Maven plugins',
    ],
    wplan: [
      {
        w: 45,
        f: 'Spring Boot Core + IoC',
        t: 'Auto-configuration, @Bean/@Component/@Service/@Repository, @Autowired, constructor injection, @ConfigurationProperties',
      },
      {
        w: 46,
        f: 'Spring MVC + REST APIs',
        t: '@RestController, @RequestMapping, ResponseEntity, validation (@Valid), @ExceptionHandler, OpenAPI/Swagger, DTO + MapStruct',
      },
      {
        w: 47,
        f: 'Spring Security + OAuth2',
        t: 'SecurityFilterChain, JWT filter, UserDetailsService, BCrypt. OAuth2 resource server + JWKS — your exact FPO Cognito pattern!',
      },
      {
        w: 48,
        f: 'Testing + Capstone',
        t: '@WebMvcTest, MockMvc, @DataJpaTest, Testcontainers, Mockito. Build complete REST API + JWT + JPA + Docker. 200 Spring Q&A.',
      },
    ],
  },
  {
    id: 'm13',
    seq: 13,
    icon: '🏛',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECDD3',
    name: 'Microservices',
    period: 'Jun 15 - Jul 14, 2027',
    days: 30,
    ds: 366,
    de: 395,
    ms: 'Microservices Complete · D395',
    about:
      '30 days. Microservices with Spring Cloud, Kafka, CQRS, Event Sourcing, Saga pattern. Every pattern maps directly to FPO Cloud: EventBridge→Kafka, Step Functions→Saga, Lambda→Microservice, DynamoDB streams→Event Sourcing. Your FPO production experience is a massive advantage.',
    topics: [
      'Service Design: DDD bounded contexts, service decomposition, inter-service communication patterns',
      'Spring Cloud: Eureka service discovery, Spring Cloud Gateway, config server, Feign clients, load balancing',
      'Resilience: Resilience4j circuit breaker, retry, rate limiter, bulkhead — maps to FPO Step Function error handling',
      'Kafka: producers, consumers, consumer groups, partitions, offsets — maps to FPO EventBridge + your DBOT Kafka work',
      'CQRS + Event Sourcing: separate read/write models, event store, event replay — maps to FPO mission-feed table',
      'Saga Pattern: orchestration vs choreography — AWS Step Functions IS a Saga orchestrator (your FPO!)',
    ],
    wplan: [
      {
        w: 49,
        f: 'Service Design + Spring Cloud',
        t: 'DDD contexts, Eureka discovery, Spring Cloud Gateway, config server, Feign clients — all map to FPO architecture',
      },
      {
        w: 50,
        f: 'Resilience Patterns + Kafka',
        t: 'Resilience4j circuit breaker/retry/bulkhead. Kafka producers/consumers/partitions — your FPO EventBridge equivalent',
      },
      {
        w: 51,
        f: 'CQRS + Event Sourcing',
        t: 'Read/write model separation, event store with Axon Framework, event replay — maps to FPO mission-feed event sourcing',
      },
      {
        w: 52,
        f: 'Saga + K8s Deployment',
        t: 'Orchestration vs choreography Saga (Step Functions=Saga!), compensating transactions. Deploy microservices to K8s.',
      },
    ],
  },
  {
    id: 'm14',
    seq: 14,
    icon: '🐳',
    color: '#0369A1',
    dark: '#1e40af',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    name: 'Docker',
    period: 'Jul 15 - Aug 14, 2027',
    days: 31,
    ds: 396,
    de: 426,
    ms: 'Docker Complete · D426',
    about:
      '31 days. Container fundamentals, Docker CLI, Dockerfile best practices, multi-stage builds, Docker Compose, Docker networking, volumes, Docker Hub/ECR, container security. Build and containerize all your previous projects (React/Flask/Spring Boot/Microservices) into a production stack.',
    topics: [
      'Container Fundamentals: VMs vs containers, container architecture, namespaces, cgroups, images vs containers',
      'Docker CLI: pull/build/run/stop/rm/exec/logs/inspect, image layers, Dockerfile instructions (FROM/RUN/COPY/CMD/ENTRYPOINT)',
      'Dockerfile: multi-stage builds, .dockerignore, non-root user, health checks, slim base images, build cache optimization',
      'Docker Compose: services, networks, volumes, depends_on, environment files, profiles, scaling',
      'Networking + Volumes: bridge/host/overlay, named volumes, bind mounts, tmpfs, storage drivers',
      'Security + Registry: Docker Scout, image scanning (Trivy), least privilege, read-only filesystems, ECR push/pull',
    ],
    wplan: [
      {
        w: 53,
        f: 'Docker Core + CLI',
        t: 'Container vs VM, Docker install, pull/run/stop/rm/exec/logs, image layers, commit. Dockerfile FROM/RUN/COPY/EXPOSE/CMD',
      },
      {
        w: 54,
        f: 'Dockerfile Best Practices',
        t: 'Multi-stage builds (separate build/runtime), .dockerignore, non-root user, health checks, slim images, build arg/env',
      },
      {
        w: 55,
        f: 'Docker Compose + Networking',
        t: 'Multi-service Compose files, networks (bridge/overlay), named volumes, bind mounts, environment files, depends_on, scaling',
      },
      {
        w: 56,
        f: 'Security + Registry + Stack',
        t: 'Trivy scanning, non-root, read-only FS, ECR push. Containerize React+Flask+Spring Boot+Microservices into full stack.',
      },
    ],
  },
  {
    id: 'm15',
    seq: 15,
    icon: '☸',
    color: '#4338CA',
    dark: '#3730A3',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Kubernetes',
    period: 'Aug 15 - Sep 14, 2027',
    days: 31,
    ds: 427,
    de: 457,
    ms: 'Kubernetes Complete · D457',
    about:
      '31 days. Kubernetes architecture and all core objects. Pods, Deployments, Services, ConfigMaps, Secrets, PVs, Ingress, RBAC, HPA, NetworkPolicies. AWS EKS deployment. Helm charts. Your CKA certification background makes this a structured revision and deepening.',
    topics: [
      'Architecture: control plane (API server/etcd/scheduler/controller manager), worker nodes (kubelet/kube-proxy), kubectl',
      'Core Objects: Pods, ReplicaSets, Deployments, DaemonSets, StatefulSets, Jobs, CronJobs, Namespaces',
      'Networking: Services (ClusterIP/NodePort/LoadBalancer), Ingress controllers (nginx), DNS, NetworkPolicies',
      'Config + Storage: ConfigMaps, Secrets, PersistentVolumes, PVCs, StorageClasses, volume types',
      'Security: RBAC (Role/ClusterRole/RoleBinding), ServiceAccounts, PodSecurity, OPA Gatekeeper',
      'Advanced: HPA, VPA, cluster autoscaler, Helm charts, Kustomize, GitOps with ArgoCD, AWS EKS',
    ],
    wplan: [
      {
        w: 57,
        f: 'K8s Architecture + Core Objects',
        t: 'Control plane, worker nodes, kubectl, Pods, ReplicaSets, Deployments, DaemonSets, StatefulSets, Namespaces',
      },
      {
        w: 58,
        f: 'Services + Networking + Config',
        t: 'ClusterIP/NodePort/LoadBalancer, Ingress (nginx), DNS, NetworkPolicies, ConfigMaps, Secrets, PVs, PVCs',
      },
      {
        w: 59,
        f: 'Security + RBAC + HPA',
        t: 'RBAC (Role/ClusterRole/RoleBinding), ServiceAccounts, PodSecurity standards, HPA with custom metrics, VPA',
      },
      {
        w: 60,
        f: 'Helm + EKS + GitOps',
        t: 'Helm charts (create/install/upgrade), Kustomize, AWS EKS deployment, ArgoCD GitOps. Deploy full stack to EKS.',
      },
    ],
  },
  {
    id: 'm16',
    seq: 16,
    icon: '⚙',
    color: '#DC2626',
    dark: '#B91C1C',
    bg: '#FEF2F2',
    border: '#FECACA',
    name: 'DevOps',
    period: 'Sep 15 - Oct 14, 2027',
    days: 30,
    ds: 458,
    de: 487,
    ms: 'DevOps Complete · D487',
    about:
      '30 days. DevOps practices and tools — CI/CD with Jenkins and GitHub Actions, SonarQube for code quality, Terraform for IaC, Prometheus/Grafana for monitoring, Datadog (your FPO tool!), DevSecOps with Trivy/OWASP. Build a complete enterprise pipeline end-to-end as capstone.',
    topics: [
      'CI/CD: Jenkins (master-agent, Jenkinsfile, shared libraries) + GitHub Actions (workflows, matrix, reusable), Blue-Green/Canary',
      'Code Quality: SonarQube (quality gates, technical debt, security hotspots, PR analysis integration)',
      'IaC: Terraform (HCL, providers, modules, state management, remote state with S3+DynamoDB, workspaces)',
      'Monitoring: Prometheus (exporters, PromQL, alertmanager) + Grafana (dashboards) + Datadog APM (your FPO!)',
      'DevSecOps: Trivy image scanning, OWASP dependency check, secrets management (GitHub Secrets/AWS Secrets Manager)',
      'Enterprise Pipeline: GitHub to Jenkins/GHA to SonarQube to Docker to Trivy to ECR to Terraform to EKS to Monitor',
    ],
    wplan: [
      {
        w: 61,
        f: 'CI/CD: Jenkins + GitHub Actions',
        t: 'Jenkins master-agent, Jenkinsfile declarative pipelines, GitHub Actions workflows, matrix builds, Blue-Green/Canary',
      },
      {
        w: 62,
        f: 'SonarQube + Terraform',
        t: 'SonarQube quality gates, code smells, Jenkins/GHA integration. Terraform HCL, modules, remote state, workspaces',
      },
      {
        w: 63,
        f: 'Monitoring + DevSecOps',
        t: 'Prometheus/Grafana, Datadog APM (compare to your FPO!), Trivy scanning, OWASP, AWS Secrets Manager',
      },
      {
        w: 64,
        f: 'Enterprise Pipeline Capstone',
        t: 'Build complete: GitHub to GHA to SonarQube to Docker to Trivy to ECR to Terraform to EKS to Prometheus/Grafana',
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
    period: 'Oct 15 - Nov 14, 2027',
    days: 31,
    ds: 488,
    de: 518,
    ms: 'System Design Complete · D518',
    about:
      '31 days. System design interview mastery. Frank Kane 5-step template. Design 1 system per day spoken aloud, no notes, 45 minutes each. Your FPO multi-tenant SaaS + Kafka + Lambda microservices + DynamoDB production experience is a massive advantage over other candidates.',
    topics: [
      'Framework: Frank Kane 5-step (Requirements→Estimation→HLD→Detailed Design→Scale), capacity estimation',
      'Core Concepts: CAP theorem, consistency models, replication, partitioning, load balancing, caching strategies',
      'Classic Designs: URL Shortener, WhatsApp, Twitter/X, Netflix, Uber, YouTube, Instagram, Notification System',
      'Advanced Designs: Rate Limiter, Distributed Cache, News Feed, Payment System, Search Autocomplete, Leaderboard',
      'FPO Designs: Flight Optimiser multi-tenant SaaS (your system!), Kafka streaming pipeline, Serverless Lambda system',
      'Trade-offs: SQL vs NoSQL, sync vs async, monolith vs microservices, consistency vs availability',
    ],
    wplan: [
      {
        w: 65,
        f: 'SD Framework + Classic Designs 1',
        t: 'Frank Kane 5-step template. URL Shortener, WhatsApp, Twitter — Requirements to HLD to DB to API spoken 45 min',
      },
      {
        w: 66,
        f: 'Classic Designs 2 + Advanced',
        t: 'Netflix, Uber, Rate Limiter, Distributed Cache, Notification System — Mikhail Smarshchok 20+ designs course',
      },
      {
        w: 67,
        f: 'Trade-offs + Production Systems',
        t: 'Bogdan Stashchuk WHY decisions, Payment System, News Feed. FPO Flight Optimiser — design YOUR system!',
      },
      {
        w: 68,
        f: 'Mock System Design x10',
        t: '10 cold designs spoken aloud — no notes — 45 min each — focus on weakest 3 systems. Architecture Decision Records.',
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
    period: 'Nov 15 - Dec 14, 2027',
    days: 30,
    ds: 519,
    de: 548,
    ms: '545 DAYS COMPLETE · Dec 14, 2027',
    about:
      '30 days. Data Structures and Algorithms in Java. Arrays, Linked Lists, Stacks, Queues, Trees, BST, Heaps, Graphs, Sorting algorithms, Dynamic Programming. LeetCode problem solving in Java. Scott Barrett Java DSA course side-by-side with Python. Final month — Day 548 = Dec 14, 2027.',
    topics: [
      'Arrays + Strings: two pointers, sliding window, prefix sums, sorting, binary search patterns',
      'Linked Lists: singly/doubly linked, slow/fast pointer, reverse, cycle detection, merge',
      'Stacks + Queues: monotonic stack, min-stack, queue with stacks, deque, priority queue (heap)',
      'Trees: BST (insert/delete/search/validate), DFS (preorder/inorder/postorder), BFS (level order), trie',
      'Graphs: adjacency list/matrix, BFS, DFS, topological sort, Dijkstra, union-find, cycle detection',
      'Dynamic Programming: memoization vs tabulation, 1D DP (coin change, house robber), 2D DP (LCS, knapsack)',
    ],
    wplan: [
      {
        w: 69,
        f: 'Arrays + Linked Lists + Stacks',
        t: 'Two pointers, sliding window, binary search. Linked list (reverse/cycle/merge). Monotonic stack, min-stack patterns in Java',
      },
      {
        w: 70,
        f: 'Trees + Heaps',
        t: 'BST operations, DFS (pre/in/post-order), BFS level-order, trie, heap (PriorityQueue), Top-K patterns, heap sort',
      },
      {
        w: 71,
        f: 'Graphs + Sorting',
        t: 'BFS/DFS on graphs, topological sort, Dijkstra, union-find. All sorting algorithms (merge/quick/heap) with complexity proofs',
      },
      {
        w: 72,
        f: 'DP + Final Day 548',
        t: '1D DP (coin change/house robber/jump game), 2D DP (LCS/knapsack), backtracking. Dec 14, 2027 = Day 548 = COMPLETE.',
      },
    ],
  },
];

const MILESTONES = [
  {
    day: 30,
    icon: '🟨',
    label: 'JavaScript',
    date: 'Jul 14, 2026',
    color: '#F59E0B',
  },
  {
    day: 61,
    icon: '🔷',
    label: 'TypeScript',
    date: 'Aug 14, 2026',
    color: '#3B82F6',
  },
  {
    day: 92,
    icon: '⚛',
    label: 'React',
    date: 'Sep 14, 2026',
    color: '#0EA5E9',
  },
  {
    day: 122,
    icon: '▲',
    label: 'Next.js',
    date: 'Oct 14, 2026',
    color: '#374151',
  },
  {
    day: 153,
    icon: '📱',
    label: 'React Native',
    date: 'Nov 14, 2026',
    color: '#7C3AED',
  },
  {
    day: 183,
    icon: '🐍',
    label: 'Python',
    date: 'Dec 14, 2026',
    color: '#16A34A',
  },
  {
    day: 214,
    icon: '🌶',
    label: 'Flask',
    date: 'Jan 14, 2027',
    color: '#059669',
  },
  {
    day: 245,
    icon: '🤖',
    label: 'Agentic AI',
    date: 'Feb 14, 2027',
    color: '#6366F1',
  },
  {
    day: 273,
    icon: '☕',
    label: 'J2SE Java Core',
    date: 'Mar 14, 2027',
    color: '#D97706',
  },
  {
    day: 304,
    icon: '🏭',
    label: 'J2EE Enterprise',
    date: 'Apr 14, 2027',
    color: '#EA580C',
  },
  {
    day: 334,
    icon: '🗄',
    label: 'JPA / Hibernate',
    date: 'May 14, 2027',
    color: '#B45309',
  },
  {
    day: 365,
    icon: '🌱',
    label: 'Spring Boot',
    date: 'Jun 14, 2027',
    color: '#16A34A',
  },
  {
    day: 395,
    icon: '🏛',
    label: 'Microservices',
    date: 'Jul 14, 2027',
    color: '#E11D48',
  },
  {
    day: 426,
    icon: '🐳',
    label: 'Docker',
    date: 'Aug 14, 2027',
    color: '#0369A1',
  },
  {
    day: 457,
    icon: '☸',
    label: 'Kubernetes',
    date: 'Sep 14, 2027',
    color: '#4338CA',
  },
  {
    day: 487,
    icon: '⚙',
    label: 'DevOps',
    date: 'Oct 14, 2027',
    color: '#DC2626',
  },
  {
    day: 518,
    icon: '🏗',
    label: 'System Design',
    date: 'Nov 14, 2027',
    color: '#7C3AED',
  },
  {
    day: 548,
    icon: '🧩',
    label: 'DSA Java — DONE',
    date: 'Dec 14, 2027',
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
              fontSize: 8,
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
                background: p.color + '15',
                color: p.color,
                border: '1px solid ' + p.color + '30',
                whiteSpace: 'nowrap',
              }}
            >
              {'Month ' + p.seq}
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
          <div style={{ fontSize: 8, color: '#94A3B8' }}>{'4 weeks'}</div>
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

          <button
            onClick={(e) => {
              e.stopPropagation();
              setTopicOpen(!topicOpen);
            }}
            style={{
              width: '100%',
              background: p.color + '06',
              border: '1px solid ' + p.color + '20',
              borderRadius: 8,
              padding: '7px 11px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: topicOpen ? 7 : 10,
            }}
          >
            <span style={{ fontSize: 10, fontWeight: 700, color: p.color }}>
              {'📋 Topics Covered — ' + p.topics.length + ' areas'}
            </span>
            <span style={{ fontSize: 11, color: p.color }}>
              {topicOpen ? '▲' : '▼'}
            </span>
          </button>
          {topicOpen && (
            <div
              style={{
                marginBottom: 10,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              {p.topics.map((t, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 7,
                    padding: '6px 9px',
                    background: '#F8FAFC',
                    borderRadius: 7,
                    border: '1px solid #E2E8F0',
                  }}
                >
                  <span
                    style={{
                      fontSize: 9,
                      fontWeight: 800,
                      color: p.color,
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    {i + 1 + '.'}
                  </span>
                  <span
                    style={{ fontSize: 10, color: '#374151', lineHeight: 1.6 }}
                  >
                    {t}
                  </span>
                </div>
              ))}
            </div>
          )}

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
              marginBottom: 13,
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
                  fontSize: 'clamp(22px,6vw,30px)',
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
                  'Mon Jun 15, 2026 to Tue Dec 14, 2027 · 548 days · 1 skill per month'
                }
              </div>
            </div>
          </div>

          <div
            style={{
              background: 'rgba(245,158,11,0.18)',
              border: '1px solid rgba(245,158,11,0.4)',
              borderRadius: 8,
              padding: '8px 12px',
              marginBottom: 12,
              display: 'flex',
              gap: 9,
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 17, flexShrink: 0 }}>{'⏰'}</span>
            <div>
              <div style={{ fontSize: 10, fontWeight: 800, color: '#FDE68A' }}>
                {'5:30 AM – 8:30 AM daily · MANDATORY · Weekends: Maximum Time'}
              </div>
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.5)' }}>
                {
                  '1 skill per month · 18 skills · 18 months · Mon Jun 15, 2026 to Tue Dec 14, 2027'
                }
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))',
              gap: 5,
              marginBottom: 12,
            }}
          >
            {PHASES.map((p) => (
              <div
                key={p.id}
                onClick={() => jump(p.id)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: 8,
                  padding: '7px 9px',
                  border:
                    '1px solid ' +
                    p.color +
                    (d + 1 > p.de ? '60' : d + 1 >= p.ds ? '90' : '30'),
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  opacity: d + 1 > p.de ? 0.6 : 1,
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
                    {d + 1 > p.de ? '✅' : d + 1 >= p.ds ? '🔥' : p.icon}
                  </span>
                  <span
                    style={{ fontSize: 8, fontWeight: 800, color: p.color }}
                  >
                    {'M' + p.seq}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 'clamp(9px,2.5vw,10px)',
                    fontWeight: 700,
                    color: '#fff',
                    lineHeight: 1.3,
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    fontSize: 7,
                    color: 'rgba(255,255,255,0.4)',
                    marginTop: 2,
                  }}
                >
                  {p.period.split(' - ')[0]}
                </div>
              </div>
            ))}
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
                  title={'Month ' + p.seq + ': ' + p.name}
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
              <span>{'Jun 15, 2026'}</span>
              <span
                style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 700 }}
              >
                {prog + '% · Day ' + Math.min(d + 1, 548) + ' of 548'}
              </span>
              <span>{'Dec 14, 2027'}</span>
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 10,
          }}
        >
          <div
            style={{
              height: 2,
              flex: 1,
              background: 'linear-gradient(90deg,#6366F1,#6366F110)',
            }}
          />
          <div style={{ textAlign: 'center', flexShrink: 0, padding: '0 6px' }}>
            <div
              style={{
                fontSize: 'clamp(9px,2.5vw,11px)',
                fontWeight: 800,
                color: '#6366F1',
                letterSpacing: '0.08em',
              }}
            >
              {'🗓 18 MONTHS · 18 SKILLS · 1 SKILL PER MONTH'}
            </div>
            <div style={{ fontSize: 8, color: '#94A3B8', marginTop: 1 }}>
              {'Click any month card to expand · Progress bar shows Day ' +
                Math.min(d + 1, 548) +
                ' of 548'}
            </div>
          </div>
          <div
            style={{
              height: 2,
              flex: 1,
              background: 'linear-gradient(90deg,#6366F110,#6366F1)',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {PHASES.map((p) => (
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
            {'🏆 18 Months of Code · Jun 15, 2026 to Dec 14, 2027'}
          </div>
          <div
            style={{
              fontSize: 9,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 8,
            }}
          >
            {
              '548 days · 5:30 AM to 8:30 AM mandatory daily · 1 skill per month · Sumit Rawal'
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
