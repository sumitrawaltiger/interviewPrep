import { useState } from "react";

// ── 77 WEEKS · 539 DAYS · Mon Jun 15, 2026 → Sun Dec 5, 2027 ──────────────
// 6:00 AM – 9:00 AM daily · 3h/day · 1,617h total
// Every phase ends on a Sunday · 3 Blocks
// Block 1: 52w (W01–W52) · Block 2: 17w DSA+SD (W53–W69) · Block 3: 8w Interview Prep (W70–W77)
const START = new Date("2026-06-15");
import { useState } from "react";

// ── 77 WEEKS · 539 DAYS · Mon Jun 15, 2026 → Sun Dec 5, 2027 ──────────────
// 6:00 AM – 9:00 AM daily · 3h/day · 1,617h total
// Every phase ends on a Sunday · 3 Blocks
// Block 1: 52w (W01–W52) · Block 2: 17w DSA+SD (W53–W69) · Block 3: 8w Interview Prep (W70–W77)
const START = new Date("2026-06-15");

const PHASES = [
 // ══ BLOCK 1 — 400 DAYS OF CODE · 52 weeks ════════════════════════════════
 {
  id:"react", block:1, seq:1, icon:"⚛",
  color:"#0EA5E9", dark:"#0369A1", bg:"#F0F9FF", border:"#BAE6FD",
  name:"React", blockLabel:"Block 1 · 1 Year of Full Stack",
  weeks:13, days:91, dayStart:1, dayEnd:91, wkStart:1, wkEnd:13,
  startDate:"Jun 15, 2026", endDate:"Sep 13, 2026",
  hours:"~273h", courseH:"116.5h", practiceH:"156.5h",
  milestone:"⚛ React Complete",
  summary:"13 weeks · 91 days · 3 courses. John Smilga primary (50.5h, 25+ real projects), Max second angle (55h, TypeScript + testing), Hindi interview Q&A final week.",
  courses:[
   "John Smilga — React Tutorial & Projects Course 2025 (50.5h) ★ START HERE — 25+ real projects",
   "Max Schwarzmüller — React The Complete Guide 2025 (55h) — TypeScript, testing, Redux Toolkit",
   "Hindi Instructor — React Interview Masterclass 200 Q (11h) — final week interview drill",
  ],
  weekPlan:[
   {w:1,  focus:"Smilga: Setup + JSX",        topics:"Vite, JSX, props, component patterns — 25+ projects begin, code along in VSCode"},
   {w:2,  focus:"Smilga: State + Events",      topics:"useState, event handlers, forms — Person List, City Tours, Todo projects"},
   {w:3,  focus:"Smilga: Hooks + Data",        topics:"useEffect, fetch API, async/await — Food Recipe project, Beachwalk Resort"},
   {w:4,  focus:"Smilga: React Router",        topics:"React Router v6, nested routes, dynamic params — Tech Store E-commerce project"},
   {w:5,  focus:"Smilga: Context + Hooks",     topics:"createContext, useContext, custom hooks, useReducer — Budget Calculator project"},
   {w:6,  focus:"Smilga: React Query",         topics:"useQuery, useMutation, caching, background refetch — Axios integration project"},
   {w:7,  focus:"Smilga: Redux Toolkit",       topics:"createSlice, configureStore, RTK Query — full e-commerce state management"},
   {w:8,  focus:"Smilga: TS + Tailwind",       topics:"TypeScript in React, Tailwind CSS — Smilga final projects. 50.5h course complete."},
   {w:9,  focus:"Max: TypeScript Deep",        topics:"Generic components, utility types (Pick/Omit/Partial), typed hooks, strict TS"},
   {w:10, focus:"Max: Performance + Testing",  topics:"useMemo, useCallback, React.memo, lazy/Suspense, React Testing Library"},
   {w:11, focus:"Max: Advanced Patterns",      topics:"Compound components, render props, forwardRef, HOC, custom hooks library"},
   {w:12, focus:"Max: Redux + Next.js",        topics:"Redux Toolkit deep, RTK Query advanced, Next.js intro, deployment"},
   {w:13, focus:"Hindi: 200 Q&A + Revision",  topics:"Hindi 200 React Q&A drill. Rebuild FPO Flight Status app from scratch cold."},
  ],
 },
 {
  id:"rn", block:1, seq:2, icon:"📱",
  color:"#7C3AED", dark:"#6D28D9", bg:"#F5F3FF", border:"#DDD6FE",
  name:"React Native", blockLabel:"Block 1 · 1 Year of Full Stack",
  weeks:4, days:28, dayStart:92, dayEnd:119, wkStart:14, wkEnd:17,
  startDate:"Sep 14, 2026", endDate:"Oct 11, 2026",
  hours:"~84h", courseH:"52h", practiceH:"32h",
  milestone:"📱 React Native Complete",
  summary:"4 weeks · 28 days · 2 courses. Run every exercise on your real iPad via Expo Go. Build FPO-style flight list app with React Navigation.",
  courses:[
   "Stephen Grider — The Complete React Native + Hooks Course 4.8★ (38h)",
   "Max Schwarzmüller — React Native The Practical Guide 2025 (14h)",
  ],
  weekPlan:[
   {w:14, focus:"Core Components",    topics:"View, Text, Image, StyleSheet, Flexbox, FlatList — reproduce exercises on iPad"},
   {w:15, focus:"Navigation",         topics:"React Navigation v6 — Stack, Tab, Drawer — FPO flight list with 3 screens"},
   {w:16, focus:"Device APIs",        topics:"Camera, Location, AsyncStorage, Notifications — Expo SDK modules"},
   {w:17, focus:"Polish + Deploy",    topics:"Animations, iOS vs Android differences, EAS Build, TestFlight submit"},
  ],
 },
 {
  id:"nextjs", block:1, seq:3, icon:"▲",
  color:"#374151", dark:"#111827", bg:"#F9FAFB", border:"#D1D5DB",
  name:"Next.js", blockLabel:"Block 1 · 1 Year of Full Stack",
  weeks:5, days:35, dayStart:120, dayEnd:154, wkStart:18, wkEnd:22,
  startDate:"Oct 12, 2026", endDate:"Nov 15, 2026",
  hours:"~105h", courseH:"65h", practiceH:"40h",
  milestone:"▲ Next.js Complete",
  summary:"5 weeks · 35 days · 3 courses. App Router, Server Components, Server Actions, NextAuth v5, Prisma. Deploy to Vercel after every chapter.",
  courses:[
   "Max Schwarzmüller — Next.js & React The Complete Guide (25h)",
   "John Smilga — React Tutorial & Projects Next.js sections (20h)",
   "Anil Dollor — Next.js Full Stack Development Hindi (20h)",
  ],
  weekPlan:[
   {w:18, focus:"App Router Basics",    topics:"File-based routing, layouts, loading states, error boundaries, metadata API"},
   {w:19, focus:"Server Components",    topics:"RSC vs Client Components, data fetching, streaming, Suspense"},
   {w:20, focus:"Server Actions + DB",  topics:"Form actions, Prisma ORM, PostgreSQL, revalidatePath, optimistic UI"},
   {w:21, focus:"Auth + Security",      topics:"NextAuth v5, OAuth providers, middleware, protected routes, JWT sessions"},
   {w:22, focus:"Deploy + Capstone",    topics:"Vercel deploy, env vars — build FPO web portal as phase capstone"},
  ],
 },
 {
  id:"spring", block:1, seq:4, icon:"🌱",
  color:"#16A34A", dark:"#15803D", bg:"#F0FDF4", border:"#BBF7D0",
  name:"Spring Boot", blockLabel:"Block 1 · MAX ⭐ · 1 Year Full Stack",
  weeks:15, days:105, dayStart:155, dayEnd:259, wkStart:23, wkEnd:37,
  startDate:"Nov 16, 2026", endDate:"Feb 28, 2027",
  hours:"~315h", courseH:"185h", practiceH:"130h",
  milestone:"🌱 Spring Boot Complete",
  summary:"15 weeks — MAX TIME · 105 days · 5 courses. Java 8 fast-track, JPA/Hibernate deep, Spring Security with Cognito OAuth2. Map every concept to FPO: Bean=Lambda, JPA=DynamoDB.",
  courses:[
   "Navin Reddy Telusko — Java 8 New Features (20h)",
   "John Thompson — Hibernate & Spring Data JPA Beginner to Guru (55h)",
   "Ranga Karanam — Spring Boot with IntelliJ Real-World Project (34h)",
   "John Thompson — Spring Framework 6 Beginner to Guru (40h)",
   "Ranga Karanam — Master Spring Boot 3 & Spring Framework 6 (36h)",
  ],
  weekPlan:[
   {w:23, focus:"Java 8 Fast-Track",     topics:"Lambdas, Streams, Optional, CompletableFuture — fast-track using C# background"},
   {w:24, focus:"JPA Foundations",       topics:"@Entity, @Id, relationships (@OneToMany/@ManyToOne), EntityManager lifecycle"},
   {w:25, focus:"Spring Data JPA",       topics:"JpaRepository, JPQL, @Query, Pageable, @Transactional"},
   {w:26, focus:"N+1 & Performance",     topics:"N+1 problem, @EntityGraph, JOIN FETCH, lazy vs eager, query optimisation"},
   {w:27, focus:"Spring Boot Basics",    topics:"Auto-configuration, starters, Actuator, profiles, application.yml"},
   {w:28, focus:"REST APIs",             topics:"@RestController, ResponseEntity, @ExceptionHandler, validation, OpenAPI"},
   {w:29, focus:"Spring MVC + Testing",  topics:"@WebMvcTest, MockMvc, @DataJpaTest, Testcontainers, Mockito"},
   {w:30, focus:"Spring IoC Deep",       topics:"Bean lifecycle, AOP, @Transactional propagation, @Conditional, @Primary"},
   {w:31, focus:"Spring Security",       topics:"SecurityFilterChain, JWT filter, UserDetailsService, password encoding"},
   {w:32, focus:"OAuth2 + Cognito",      topics:"Resource server, JWT validation, Cognito JWKS — your FPO auth pattern exactly"},
   {w:33, focus:"Docker + Maven",        topics:"Dockerfile for Spring Boot, multi-stage build, docker-compose, Maven lifecycle"},
   {w:34, focus:"Full-Stack Connect",    topics:"Spring Boot API + React frontend — connect your React app to Spring Boot"},
   {w:35, focus:"Spring Boot 4 Preview", topics:"Spring Boot 4 / Spring 7, GraalVM native image, virtual threads"},
   {w:36, focus:"Capstone Project",      topics:"Build complete REST API + JWT + JPA from scratch — production quality"},
   {w:37, focus:"Revision + 200 Q&A",   topics:"Rebuild REST API + JWT auth cold. Spring 200 interview Q&A drill."},
  ],
 },
 {
  id:"micro", block:1, seq:5, icon:"🏛",
  color:"#E11D48", dark:"#BE123C", bg:"#FFF1F2", border:"#FECDD3",
  name:"Microservices", blockLabel:"Block 1 · MAX ⭐ · 1 Year Full Stack",
  weeks:8, days:56, dayStart:260, dayEnd:315, wkStart:38, wkEnd:45,
  startDate:"Mar 1, 2027", endDate:"Apr 25, 2027",
  hours:"~168h", courseH:"90h", practiceH:"78h",
  milestone:"🏛 Microservices Complete",
  summary:"8 weeks — MAX TIME · 56 days · 4 courses. Kafka, CQRS, Event Sourcing, Saga, K8s, Circuit Breaker. Every pattern maps to FPO Cloud: EventBridge→Kafka, Step Functions→Saga.",
  courses:[
   "Ranga Karanam — Java Spring Boot Microservices with K8s & Docker (35h)",
   "Sergey Kargopolov — Building Microservices with Spring Cloud (30h)",
   "John Thompson — Spring Boot Microservices Beginner to Guru (15h)",
   "Sean Campbell — Master Spring Boot Microservices CQRS & Event Sourcing (10h)",
  ],
  weekPlan:[
   {w:38, focus:"Service Decomposition",  topics:"DDD bounded contexts, service boundaries, inter-service communication"},
   {w:39, focus:"Spring Cloud",           topics:"Eureka, Spring Cloud Gateway, config server, Feign clients"},
   {w:40, focus:"Resilience Patterns",    topics:"Resilience4j circuit breaker, retry, bulkhead — your FPO uses this!"},
   {w:41, focus:"Kafka Deep Dive",        topics:"Producer, consumer, groups, partitions, offsets — relate to FPO EventBridge"},
   {w:42, focus:"CQRS + Event Sourcing",  topics:"Separate read/write models, Axon Framework, event store, replay"},
   {w:43, focus:"Saga Pattern",           topics:"Orchestration vs choreography, compensating transactions — Step Functions = Saga!"},
   {w:44, focus:"K8s Deployment",         topics:"Deploy microservices to K8s, Ingress, ConfigMaps, Secrets"},
   {w:45, focus:"Revision + ADR",         topics:"Rebuild one microservice from scratch. Write 1 Architecture Decision Record. Interview Q&A drill."},
  ],
 },
 {
  id:"devops", block:1, seq:6, icon:"⚙",
  color:"#EA580C", dark:"#C2410C", bg:"#FFF7ED", border:"#FED7AA",
  name:"DevOps", blockLabel:"Block 1 · Day 364 🏁",
  weeks:7, days:49, dayStart:316, dayEnd:364, wkStart:46, wkEnd:52,
  startDate:"Apr 26, 2027", endDate:"Jun 13, 2027",
  hours:"~147h", courseH:"79h", practiceH:"68h",
  milestone:"⚙ DevOps Complete · Day 364 · Week 52",
  pythonWeek:"W52",
  summary:"7 weeks · 49 days. DevOps courses (W46–W51) + Python automation scripting merged into W52. Day 364 = Sunday Jun 13, 2027 — end of Block 1, end of Week 52.",
  courses:[
   "Nana Janashia TechWorld — DevOps Bootcamp (35h) · W46–W49",
   "Mumshad Mannambeth KodeKloud — The Complete DevOps Bootcamp (20h) · W49–W50",
   "Anil Dollor — Mastering DevOps Hindi (8h) · W50",
   "Mumshad Mannambeth — Terraform for Absolute Beginners with Labs (9h) · W51",
   "🐍 Al Sweigart — Automate the Boring Stuff with Python (9h) · W52 — Python for DevOps",
  ],
  weekPlan:[
   {w:46, focus:"Linux + Docker",             topics:"Linux essentials, Docker images, containers, volumes, docker-compose — KodeKloud labs"},
   {w:47, focus:"Kubernetes",                 topics:"Pods, Deployments, Services, Ingress, ConfigMaps, Secrets, AWS EKS"},
   {w:48, focus:"CI/CD Pipelines",            topics:"GitHub Actions workflows, OIDC keyless AWS auth, build/test/deploy pipelines"},
   {w:49, focus:"Terraform IaC",              topics:"HCL syntax, resources, state, modules — provision FPO AWS resources with Terraform"},
   {w:50, focus:"Monitoring + Hindi Recap",   topics:"Prometheus, Grafana, Datadog (your FPO tool). Hindi DevOps recap — Anil Dollor."},
   {w:51, focus:"Monitoring + Observability", topics:"Prometheus alerts, Datadog FPO dashboards deep dive, GitHub Actions advanced pipelines"},
   {w:52, focus:"🐍 Python for DevOps",       topics:"Automate the Boring Stuff: boto3 FPO Lambda lister, CloudWatch log parser, subprocess, regex, S3 automation scripts"},
  ],
 },
 // ══ BLOCK 2 — DSA + SYSTEM DESIGN · 17 weeks ═════════════════════════════
 {
  id:"dsa", block:2, seq:7, icon:"🧩",
  color:"#6366F1", dark:"#4338CA", bg:"#EEF2FF", border:"#C7D2FE",
  name:"Java DSA", blockLabel:"Block 2 · DSA + System Design",
  weeks:9, days:63, dayStart:365, dayEnd:427, wkStart:53, wkEnd:61,
  startDate:"Jun 14, 2027", endDate:"Aug 15, 2027",
  hours:"~189h", courseH:"99h", practiceH:"90h",
  milestone:"🧩 Java DSA Complete · Day 427",
  pythonWeek:"W53",
  summary:"9 weeks · 63 days. W53 = Scott Barrett Java+Python DSA (both languages side by side). W54–W61 = deep Java DSA with 4 courses. 6 weeks from the removed Agentic AI phase give extra depth here.",
  courses:[
   "🐍 Scott Barrett 4.8★ — Java DS & Algorithms + LeetCode (10h) · W53 — Java + Python side by side",
   "Andrei Neagoie ZTM — Master the Coding Interview DS + Algorithms (20h) · W54–W56",
   "Tim Buchalka 112K — DS & Algorithms Deep Dive Using Java (16h) · W56–W58",
   "Elshad Karimov — Java DS & Algorithms Masterclass (45h) · W58–W62",
   "Andrei Neagoie ZTM — Master Coding Interview Big Tech FAANG (8h) · W61",
  ],
  weekPlan:[
   {w:53, focus:"🐍 Python + Java DSA",     topics:"Scott Barrett Java+LeetCode: Big O, Arrays, Hash Maps, Linked Lists — problems in Java AND Python"},
   {w:54, focus:"Trees + BST in Java",       topics:"DFS preorder/inorder/postorder, BFS level-order, BST insert/delete/validate in Java"},
   {w:55, focus:"Heaps + Priority Queues",   topics:"Java PriorityQueue, Top-K patterns, merge K lists, find median from data stream"},
   {w:56, focus:"Graphs in Java",            topics:"BFS/DFS on graphs, topological sort, Union-Find, Dijkstra — Java adjacency list"},
   {w:57, focus:"Sorting + Searching",       topics:"All sorting algorithms in Java — QuickSort, MergeSort — with complexity proofs"},
   {w:58, focus:"DP Foundations",            topics:"1D DP: coin change, house robber, jump game. Top-down memoisation in Java."},
   {w:59, focus:"Advanced DP",               topics:"2D DP, interval DP, LCS, edit distance — Java solutions"},
   {w:60, focus:"Backtracking + Tries",      topics:"N-Queens, Sudoku, word search — Trie implementation and problems in Java"},
   {w:61, focus:"FAANG Hard + Revision",     topics:"Hard graph, advanced DP from FAANG course. Rebuild 3 structures from scratch cold."},
  ],
 },
 {
  id:"sd", block:2, seq:8, icon:"🏗",
  color:"#16A34A", dark:"#15803D", bg:"#F0FDF4", border:"#BBF7D0",
  name:"System Design", blockLabel:"Block 2 · DSA + System Design",
  weeks:5, days:35, dayStart:428, dayEnd:462, wkStart:62, wkEnd:66,
  startDate:"Aug 16, 2027", endDate:"Sep 19, 2027",
  hours:"~105h", courseH:"63h", practiceH:"42h",
  milestone:"🏗 System Design Complete · Day 462",
  summary:"5 weeks · 35 days · 5 courses. Design 1 system from scratch each day spoken aloud. The extra week from Agentic AI gives deeper coverage of advanced distributed system designs.",
  courses:[
   "Frank Kane ex-Amazon — Mastering the System Design Interview (5h) · W62",
   "Michael Pogrebinsky 93K — Software Architecture Modern Large Scale Systems (20h) · W62–W63",
   "Mikhail Smarshchok — System Design Interview Guide 20+ designs (18h) · W63–W65",
   "Bogdan Stashchuk — Pragmatic System Design real trade-offs (12h) · W65–W66",
   "FAANG Insiders — System Design Masterclass 2026 (8h) · W66",
  ],
  weekPlan:[
   {w:62, focus:"SD Framework + Architecture", topics:"Frank Kane 5-step template. CQRS, Event Sourcing, Saga, API Gateway — all maps to FPO"},
   {w:63, focus:"Classic Designs 1",           topics:"URL Shortener, WhatsApp, Twitter — Requirements→Estimation→HLD→DB→API each day"},
   {w:64, focus:"Classic Designs 2",           topics:"Netflix, Uber, Notification System, Rate Limiter — 45 min each spoken aloud, cold"},
   {w:65, focus:"Advanced + FPO Design",       topics:"Payment System, FPO Flight Optimiser, Distributed Cache — trade-off discussion"},
   {w:66, focus:"FAANG SD + Revision",         topics:"FAANG Insiders template — YouTube, Newsfeed, WhatsApp. Revise weakest designs."},
  ],
 },
 {
  id:"review", block:2, seq:9, icon:"🏁",
  color:"#F59E0B", dark:"#D97706", bg:"#FFFBEB", border:"#FDE68A",
  name:"DSA + SD Review", blockLabel:"Block 2 · Final Review",
  weeks:3, days:21, dayStart:463, dayEnd:483, wkStart:67, wkEnd:69,
  startDate:"Sep 20, 2027", endDate:"Oct 10, 2027",
  hours:"~63h", courseH:"46h", practiceH:"17h",
  milestone:"🏁 DSA + SD Review Complete",
  summary:"3 weeks · 21 days · 4 Udemy review courses. Watch and code along — no self-drilling from scratch. Courses are specifically designed for interview revision, not original learning.",
  courses:[
   "Andrei Neagoie ZTM — Master the Coding Interview DS + Algorithms (20h) · W67 — re-watch key sections, code every problem in Java",
   "Andrei Neagoie ZTM — Master Coding Interview Big Tech FAANG (8h) · W67 — hard patterns revision, FAANG-specific problems",
   "Frank Kane ex-Amazon — Mastering the System Design Interview (5h) · W68 — re-watch full course as rapid system design revision",
   "FAANG Insiders — System Design Masterclass 2026 (8h) · W68–W69 — 5-step template drill, YouTube/WhatsApp/Newsfeed cold designs",
   "Bogdan Stashchuk — Pragmatic System Design (5h selected chapters) · W69 — trade-off reasoning, FPO design walkthrough",
  ],
  weekPlan:[
   {w:67, focus:"DSA Re-watch + Java Code",   topics:"Andrei Neagoie DS+Algo + FAANG course: re-watch every key section, solve every problem in Java — timed. Focus on weakest patterns from W53–W61."},
   {w:68, focus:"System Design Re-watch",     topics:"Frank Kane full course rapid re-watch (5h) + FAANG Insiders Masterclass (8h): apply the 5-step template to every design — URL Shortener, WhatsApp, Twitter, YouTube."},
   {w:69, focus:"Trade-offs + Mock Designs",  topics:"Bogdan Stashchuk selected chapters on trade-off reasoning. Then 3 cold mock designs spoken aloud: FPO Flight Optimiser, Payment System, Notification System."},
  ],
 },
 // ══ BLOCK 3 — INTERVIEW PREPARATION · 8 weeks ════════════════════════════
 {
  id:"int_java", block:3, seq:10, icon:"☕",
  color:"#16A34A", dark:"#15803D", bg:"#F0FDF4", border:"#BBF7D0",
  name:"Java + Spring Interview", blockLabel:"Block 3 · Interview Prep",
  weeks:2, days:14, dayStart:484, dayEnd:497, wkStart:70, wkEnd:71,
  startDate:"Oct 11, 2027", endDate:"Oct 24, 2027",
  hours:"~42h", courseH:"33h", practiceH:"9h",
  milestone:null,
  summary:"2 weeks · 14 days · 3 courses · 600+ Java+Spring Q&A. Write every code answer from memory. 30 questions per morning as warm-up.",
  courses:[
   "Ranga Karanam in28minutes — Java Programming Interview Guide 200+ Q&A 4.5★ 80K students (10h) · W70",
   "Ranga Karanam in28minutes — Spring & Spring Boot Interview Guide 200+ Q&A 4.5★ 60K students (10h) · W70–W71",
   "Happy Rawat — Java Interview Masterclass 350 Questions 2026 +PDF 4.6★ 3K students (13h) · W71",
  ],
  weekPlan:[
   {w:70, focus:"Java + Spring 400 Q",   topics:"Java 200 Q then Spring 200 Q — OOP, Streams, Collections, IoC, JPA, AOP, @Transactional"},
   {w:71, focus:"350 Q Masterclass",     topics:"Happy Rawat 350 Q — Core Java, Multithreading, Design Patterns, Spring Security, Microservices"},
  ],
 },
 {
  id:"int_react", block:3, seq:11, icon:"⚛",
  color:"#0EA5E9", dark:"#0369A1", bg:"#F0F9FF", border:"#BAE6FD",
  name:"React + RN Interview", blockLabel:"Block 3 · Interview Prep",
  weeks:1, days:7, dayStart:498, dayEnd:504, wkStart:72, wkEnd:72,
  startDate:"Oct 25, 2027", endDate:"Oct 31, 2027",
  hours:"~21h", courseH:"15h", practiceH:"6h",
  milestone:null,
  summary:"1 week · 7 days · 2 courses · 200+ React Q&A with TypeScript coding questions. Build 5 components from memory. React Native specifics covered.",
  courses:[
   "Happy Rawat — React Interview Masterclass 200 Q&A +PDF 2026 4.7★ (7h)",
   "Ariel Weinberger — React Interview Questions Coding 2026 TypeScript 4.6★ (8h)",
  ],
  weekPlan:[
   {w:72, focus:"React + RN 200 Q",    topics:"Virtual DOM, reconciliation, fiber, hooks rules, useMemo vs useCallback, TypeScript, RN differences"},
  ],
 },
 {
  id:"int_micro", block:3, seq:12, icon:"🏛",
  color:"#E11D48", dark:"#BE123C", bg:"#FFF1F2", border:"#FECDD3",
  name:"Microservices Interview", blockLabel:"Block 3 · Interview Prep",
  weeks:1, days:7, dayStart:505, dayEnd:511, wkStart:73, wkEnd:73,
  startDate:"Nov 1, 2027", endDate:"Nov 7, 2027",
  hours:"~21h", courseH:"18h", practiceH:"3h",
  milestone:null,
  summary:"1 week · 7 days. Chad Darby's comprehensive Java+Spring Boot+Microservices+DevOps+Cloud interview course — full-picture Q&A.",
  courses:[
   "Chad Darby — Java Interview Help: Java Spring Boot Microservices DevOps Cloud 4.6★ 30K students (18h)",
  ],
  weekPlan:[
   {w:73, focus:"Microservices Full Q&A", topics:"Kafka, Circuit Breaker, Saga, CQRS, K8s, Docker, AWS, CI/CD — all Q&A coded on whiteboard"},
  ],
 },
 {
  id:"int_python", block:3, seq:13, icon:"🤖",
  color:"#7C3AED", dark:"#6D28D9", bg:"#F5F3FF", border:"#DDD6FE",
  name:"Python + AI Interview", blockLabel:"Block 3 · Interview Prep",
  weeks:1, days:7, dayStart:512, dayEnd:518, wkStart:74, wkEnd:74,
  startDate:"Nov 8, 2027", endDate:"Nov 14, 2027",
  hours:"~21h", courseH:"18h", practiceH:"3h",
  milestone:null,
  summary:"1 week · 7 days. Agentic AI interview prep (LangChain, LangGraph, RAG, agents) + Core Python Q&A (OOP, decorators, generators, async). Build live agent demo.",
  courses:[
   "Eden Marco — LangChain Agentic AI Engineering 2026 4.7★ 114K students (10h)",
   "Multiple Instructors — Python Interview Questions Core Python OOP Automation 4.5★ (8h)",
  ],
  weekPlan:[
   {w:74, focus:"Python + AI Q&A",      topics:"RAG, LangGraph agents, MCP, OOP, decorators, generators, async — explain each out loud"},
  ],
 },
 {
  id:"int_mock", block:3, seq:14, icon:"🎯",
  color:"#F59E0B", dark:"#D97706", bg:"#FFFBEB", border:"#FDE68A",
  name:"Mock + Final Polish", blockLabel:"Block 3 · Week 77 · FINAL",
  weeks:3, days:21, dayStart:519, dayEnd:539, wkStart:75, wkEnd:77,
  startDate:"Nov 15, 2027", endDate:"Dec 5, 2027",
  hours:"~63h", courseH:"10h", practiceH:"53h",
  milestone:"🎯 Interview Prep Complete · Week 77 · Dec 5, 2027",
  summary:"Final 3 weeks — W75–W77. Non-technical course (W75) then 2 full weeks of mock interview simulation. Every day is a mock. Last day Sunday Dec 5, 2027 — end of 77 weeks.",
  courses:[
   "Andrei Neagoie ZTM — Master Coding Interview Non-Technical Resume+Salary+STAR 4.7★ (10h) · W75",
   "W76: Full mock week — coding + system design + behavioural every day — Pramp sessions",
   "W77: Final mock week — cold system design FPO + salary negotiation + interview-ready day Dec 5",
  ],
  weekPlan:[
   {w:75, focus:"Non-Tech Mastery",      topics:"Resume, salary negotiation, STAR stories from FPO. Andrei Non-Technical course."},
   {w:76, focus:"Mock Interview Week 1", topics:"Pramp.com sessions daily. 2 coding mocks (45 min each) + 1 system design mock (45 min) per day."},
   {w:77, focus:"Mock Interview Week 2", topics:"Final cold mocks. FPO 90-sec pitch rehearsed. LinkedIn headline final. Dec 5 Sunday = 77 weeks = DONE."},
  ],
 },
];

const MILESTONES = [
 {day:91,  wk:13, date:"Sep 13, 2026",  icon:"⚛",  label:"React Complete",                      color:"#0EA5E9"},
 {day:119, wk:17, date:"Oct 11, 2026",  icon:"📱",  label:"React Native Complete",               color:"#7C3AED"},
 {day:154, wk:22, date:"Nov 15, 2026",  icon:"▲",   label:"Next.js Complete",                    color:"#374151"},
 {day:259, wk:37, date:"Feb 28, 2027",  icon:"🌱",  label:"Spring Boot Complete",                color:"#16A34A"},
 {day:315, wk:45, date:"Apr 25, 2027",  icon:"🏛",  label:"Microservices Complete",              color:"#E11D48"},
 {day:364, wk:52, date:"Jun 13, 2027",  icon:"⚙",   label:"DevOps Complete · Day 364 · Week 52", color:"#EA580C"},
 {day:427, wk:61, date:"Aug 15, 2027",  icon:"🧩",  label:"Java DSA Complete",                   color:"#6366F1"},
 {day:462, wk:66, date:"Sep 19, 2027",  icon:"🏗",  label:"System Design Complete",              color:"#16A34A"},
 {day:539, wk:77, date:"Dec 5, 2027",   icon:"🎯",  label:"Interview Prep Complete",             color:"#F59E0B"},
];

const TOTAL_DAYS=539, TOTAL_WEEKS=77, TOTAL_HOURS=1617;

function daysSince(){return Math.max(0,Math.floor((new Date()-START)/864e5));}
function curPhaseId(){const d=daysSince()+1;for(const p of PHASES)if(d<=p.dayEnd)return p.id;return null;}
function pct(){return Math.min(100,Math.round(daysSince()/TOTAL_DAYS*100));}
function curWk(){return Math.min(TOTAL_WEEKS,Math.floor(daysSince()/7)+1);}

function Card({p,isOpen,onToggle,isCurrent,isDone}){
 const [wkOpen,setWkOpen]=useState(false);
 const hasPy=!!p.pythonWeek;
 return(
  <div id={"p"+p.id} style={{borderRadius:12,
   border:"2px solid "+(isOpen?p.color+"80":isCurrent?"#F59E0B80":isDone?p.color+"28":p.border),
   background:isOpen?p.bg:isDone?"#FAFBFF":"#fff",opacity:isDone?0.72:1,
   boxShadow:isOpen?`0 6px 22px ${p.color}14`:isCurrent?"0 0 0 3px #FEF3C7,0 2px 8px rgba(0,0,0,0.07)":"0 1px 4px rgba(0,0,0,0.05)",
   overflow:"hidden",transition:"all 0.22s"}}>
   <button onClick={onToggle} style={{width:"100%",background:"none",border:"none",cursor:"pointer",
    padding:"12px 14px",display:"flex",alignItems:"center",gap:10,textAlign:"left",fontFamily:"inherit"}}>
    <div style={{width:52,height:52,borderRadius:12,flexShrink:0,
     background:isOpen?`linear-gradient(135deg,${p.color},${p.dark})`:isDone?"#F1F5F9":p.bg,
     border:`2px solid ${p.color}35`,display:"flex",flexDirection:"column",alignItems:"center",
     justifyContent:"center",transition:"all 0.22s",boxShadow:isOpen?`0 4px 12px ${p.color}40`:"none"}}>
     <span style={{fontSize:18,lineHeight:1}}>{isDone?"✅":p.icon}</span>
     <span style={{fontSize:8,fontWeight:700,color:isOpen?"rgba(255,255,255,0.6)":p.color,marginTop:1}}>#{p.seq}</span>
    </div>
    <div style={{flex:1,minWidth:0}}>
     <div style={{display:"flex",gap:5,alignItems:"center",flexWrap:"wrap",marginBottom:2}}>
      {isCurrent&&<span style={{fontSize:9,fontWeight:800,padding:"1px 6px",borderRadius:12,background:"#FEF3C7",color:"#D97706",border:"1px solid #FDE68A",whiteSpace:"nowrap"}}>📍 NOW</span>}
      {isDone&&<span style={{fontSize:9,fontWeight:800,padding:"1px 6px",borderRadius:12,background:"#DCFCE7",color:"#15803D",border:"1px solid #86EFAC"}}>✅ DONE</span>}
      {hasPy&&<span style={{fontSize:9,fontWeight:800,padding:"1px 6px",borderRadius:12,background:"#DCFCE7",color:"#047857",border:"1px solid #6EE7B7",whiteSpace:"nowrap"}}>🐍 {p.pythonWeek}</span>}
      <span style={{fontSize:9,fontWeight:700,padding:"1px 6px",borderRadius:12,whiteSpace:"nowrap",
       background:p.block===1?"#EEF2FF":p.block===2?"#F0FDF4":"#FFFBEB",
       color:p.block===1?"#4338CA":p.block===2?"#15803D":"#D97706",
       border:"1px solid "+(p.block===1?"#C7D2FE":p.block===2?"#BBF7D0":"#FDE68A")}}>
       W{String(p.wkStart).padStart(2,"0")}–W{String(p.wkEnd).padStart(2,"0")}
      </span>
      <span style={{fontSize:"clamp(11px,3vw,13px)",fontWeight:800,color:"#0F172A"}}>{p.name}</span>
     </div>
     <div style={{fontSize:10,color:"#64748B",marginBottom:1}}>{p.startDate} → {p.endDate} · {p.weeks}w · {p.days}d</div>
     {p.milestone&&<div style={{fontSize:9,fontWeight:800,color:p.color}}>🏆 {p.milestone}</div>}
    </div>
    <div style={{textAlign:"right",flexShrink:0}}>
     <div style={{fontSize:12,fontWeight:900,color:p.color,background:p.color+"12",padding:"2px 9px",borderRadius:14,border:`1px solid ${p.color}22`,marginBottom:2}}>{p.weeks}w</div>
     <div style={{fontSize:9,color:"#94A3B8"}}>{p.days}d</div>
    </div>
    <span style={{color:p.color,fontSize:18,flexShrink:0,transform:isOpen?"rotate(90deg)":"none",transition:"transform 0.2s",opacity:isOpen?1:0.3}}>›</span>
   </button>
   {isOpen&&(
    <div style={{borderTop:`2px solid ${p.color}18`,padding:"12px 14px 16px"}}>
     {hasPy&&(
      <div style={{background:"linear-gradient(90deg,#DCFCE7,#F0FDF4)",border:"1px solid #86EFAC",borderRadius:9,padding:"9px 12px",marginBottom:10,display:"flex",alignItems:"center",gap:8}}>
       <span style={{fontSize:18,flexShrink:0}}>🐍</span>
       <div>
        <div style={{fontSize:11,fontWeight:800,color:"#047857"}}>Python Merged into {p.pythonWeek}</div>
        <div style={{fontSize:10,color:"#166534",lineHeight:1.6}}>{p.id==="devops"?"Python automation scripting (boto3, subprocess, log parsing) — learned in DevOps context where you will actually use it.":"Python problem-solving alongside Java (Scott Barrett Java+Python LeetCode course) — both languages simultaneously."}</div>
       </div>
      </div>
     )}
     <div style={{background:p.color+"0A",border:`1px solid ${p.color}22`,borderRadius:9,padding:"10px 12px",marginBottom:10,fontSize:12,color:"#334155",lineHeight:1.8}}>{p.summary}</div>
     <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))",gap:8,marginBottom:10}}>
      <div style={{background:"#F8FAFC",borderRadius:8,padding:"9px 11px",border:"1px solid #E2E8F0"}}>
       <div style={{fontSize:9,fontWeight:800,color:"#374151",letterSpacing:"0.08em",marginBottom:5}}>📚 COURSES</div>
       {p.courses.map((c,i)=>(
        <div key={i} style={{display:"flex",gap:5,padding:"2px 0"}}>
         <span style={{color:p.color,fontSize:9,flexShrink:0,marginTop:2,fontWeight:700}}>{c.startsWith("🐍")?"🐍":(i+1)+"."}</span>
         <span style={{fontSize:10,color:c.startsWith("🐍")?"#047857":"#374151",lineHeight:1.6,fontWeight:c.startsWith("🐍")?700:400}}>{c}</span>
        </div>
       ))}
      </div>
      <div style={{background:"#F8FAFF",border:"1px solid #E0E7FF",borderRadius:8,padding:"9px 11px"}}>
       <div style={{fontSize:9,fontWeight:800,color:"#4F46E5",letterSpacing:"0.08em",marginBottom:5}}>⏰ 6:00 AM–9:00 AM · {p.hours}</div>
       <div style={{display:"flex",gap:7,marginBottom:7}}>
        {[["📺","Course",p.courseH],["💻","Practice",p.practiceH]].map(([ic,lbl,h])=>(
         <div key={lbl} style={{flex:1,background:"#fff",borderRadius:7,padding:"6px 7px",border:"1px solid #E2E8F0",textAlign:"center"}}>
          <div style={{fontSize:13}}>{ic}</div>
          <div style={{fontSize:11,fontWeight:700,color:"#0F172A"}}>{h}</div>
          <div style={{fontSize:9,color:"#94A3B8"}}>{lbl}</div>
         </div>
        ))}
       </div>
       {p.milestone&&<div style={{background:`${p.color}12`,border:`1px solid ${p.color}28`,borderRadius:7,padding:"6px 8px",fontSize:10,fontWeight:700,color:p.color}}>🏆 {p.milestone}</div>}
      </div>
     </div>
     <button onClick={e=>{e.stopPropagation();setWkOpen(!wkOpen);}} style={{width:"100%",background:`${p.color}08`,border:`1px solid ${p.color}25`,borderRadius:8,padding:"8px 12px",cursor:"pointer",fontFamily:"inherit",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:wkOpen?8:0}}>
      <span style={{fontSize:10,fontWeight:700,color:p.color}}>📅 Week-by-Week Plan — {p.weekPlan.length} week{p.weekPlan.length>1?"s":""}</span>
      <span style={{fontSize:12,color:p.color}}>{wkOpen?"▲":"▼"}</span>
     </button>
     {wkOpen&&(
      <div style={{display:"flex",flexDirection:"column",gap:6}}>
       {p.weekPlan.map((wk)=>(
        <div key={wk.w} style={{background:wk.focus.includes("🐍")?"#F0FDF4":"#fff",borderRadius:8,padding:"9px 11px",
         border:`1.5px solid ${wk.focus.includes("🐍")?"#86EFAC":p.color+"18"}`,display:"flex",gap:10,alignItems:"flex-start"}}>
         <div style={{width:38,height:38,borderRadius:8,background:wk.focus.includes("🐍")?"#DCFCE7":p.color+"18",
          color:wk.focus.includes("🐍")?"#15803D":p.color,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexShrink:0}}>
          <span style={{fontSize:8,fontWeight:700,lineHeight:1}}>{wk.focus.includes("🐍")?"🐍":"W"}</span>
          <span style={{fontSize:12,fontWeight:900,lineHeight:1}}>{wk.focus.includes("🐍")?"":wk.w}</span>
          {!wk.focus.includes("🐍")&&<span style={{fontSize:8,fontWeight:600,opacity:0.6,lineHeight:1}}>{wk.w}</span>}
         </div>
         <div style={{flex:1,minWidth:0}}>
          <div style={{display:"flex",gap:5,alignItems:"center",marginBottom:2}}>
           <span style={{fontSize:11,fontWeight:700,color:wk.focus.includes("🐍")?"#047857":"#0F172A"}}>{wk.focus}</span>
           {!wk.focus.includes("🐍")&&<span style={{fontSize:9,color:"#94A3B8"}}>W{wk.w}</span>}
          </div>
          <div style={{fontSize:10,color:wk.focus.includes("🐍")?"#166534":"#64748B",lineHeight:1.6}}>{wk.topics}</div>
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

export default function App(){
 const [open,setOpen]=useState(null);
 const [showMs,setShowMs]=useState(true);
 const dIn=daysSince(), cId=curPhaseId(), prog=pct(), wkNow=curWk();
 const msDone=MILESTONES.filter(m=>m.day<=dIn+1).length;
 const nextMs=MILESTONES.find(m=>m.day>dIn+1);
 const toggle=id=>setOpen(open===id?null:id);
 const jump=id=>{setOpen(id);setTimeout(()=>document.getElementById("p"+id)?.scrollIntoView({behavior:"smooth",block:"start"}),80);};
 const b1=PHASES.filter(p=>p.block===1), b2=PHASES.filter(p=>p.block===2), b3=PHASES.filter(p=>p.block===3);

 return(
  <div style={{minHeight:"100vh",background:"#F0F4FF",fontFamily:"'Segoe UI',system-ui,-apple-system,sans-serif",color:"#0F172A",overflowX:"hidden"}}>
   <div style={{background:"linear-gradient(135deg,#1E1B4B 0%,#4338CA 50%,#1A365D 100%)",padding:"22px 14px 18px",position:"relative",overflow:"hidden"}}>
    <div style={{position:"absolute",inset:0,pointerEvents:"none",backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.055) 1px,transparent 1px)",backgroundSize:"22px 22px"}}/>
    <div style={{maxWidth:940,margin:"0 auto",position:"relative",zIndex:1}}>
     <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
      <div style={{width:52,height:52,borderRadius:13,flexShrink:0,background:"linear-gradient(135deg,#F59E0B,#D97706)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,boxShadow:"0 6px 20px rgba(245,158,11,0.5)"}}>🏆</div>
      <div style={{flex:1,minWidth:0}}>
       <div style={{fontSize:9,letterSpacing:"0.28em",textTransform:"uppercase",color:"rgba(255,255,255,0.32)",marginBottom:2}}>Sumit Rawal · NextStep Bangkok · FPO Cloud</div>
       <div style={{fontSize:"clamp(18px,5vw,30px)",fontWeight:900,color:"#fff",letterSpacing:"-0.02em",lineHeight:1.1}}>77 Weeks Coding Journey</div>
       <div style={{fontSize:10,color:"rgba(255,255,255,0.38)",marginTop:2}}>Mon Jun 15, 2026 → Sun Dec 5, 2027 · 539 days · {TOTAL_HOURS}h · 6:00 AM–9:00 AM · every phase ends Sunday</div>
      </div>
     </div>
     <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:7,marginBottom:14}}>
      {[
       {icon:"📚",n:"Block 1",t:"1 Year of Full Stack",s:"W01–W52 · Days 1–364",d:"React · RN · Next.js · Spring Boot · Microservices · DevOps",col:"#6366F1"},
       {icon:"💯",n:"Block 2",t:"DSA + System Design",s:"W53–W69 · Days 365–483",d:"Java DSA (9w) · System Design (5w) · Review (3w)",col:"#16A34A"},
       {icon:"🎯",n:"Block 3",t:"Interview Preparation",s:"W70–W77 · Days 484–539",d:"Java · React+RN · Microservices · Python+AI · Mock (3w)",col:"#F59E0B"},
      ].map(({icon,n,t,s,d,col})=>(
       <div key={n} style={{background:"rgba(255,255,255,0.07)",borderRadius:10,padding:"10px 10px",border:`1px solid ${col}45`}}>
        <div style={{fontSize:16,marginBottom:3}}>{icon}</div>
        <div style={{fontSize:9,fontWeight:800,color:col,marginBottom:1}}>{n}</div>
        <div style={{fontSize:"clamp(10px,2.5vw,12px)",fontWeight:800,color:"#fff",marginBottom:2}}>{t}</div>
        <div style={{fontSize:9,color:"rgba(255,255,255,0.38)",marginBottom:4}}>{s}</div>
        <div style={{fontSize:9,color:"rgba(255,255,255,0.32)",lineHeight:1.5}}>{d}</div>
       </div>
      ))}
     </div>
     <div style={{marginBottom:10}}>
      <div style={{height:14,borderRadius:7,overflow:"hidden",display:"flex",boxShadow:"inset 0 2px 4px rgba(0,0,0,0.3)",gap:1}}>
       {PHASES.map(p=>(
        <div key={p.id} style={{flex:p.days,cursor:"pointer",background:dIn+1>p.dayEnd?p.color+"70":dIn+1>=p.dayStart?p.color:p.color+"38",borderRight:"1px solid rgba(0,0,0,0.1)",transition:"background 0.3s"}}
         onClick={()=>jump(p.id)} title={`${p.name} · W${p.wkStart}–W${p.wkEnd}`}/>
       ))}
      </div>
      <div style={{display:"flex",justifyContent:"space-between",marginTop:5}}>
       {[1,10,20,30,40,50,60,70,77].map(w=>(
        <div key={w} style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
         <div style={{width:1,height:4,background:"rgba(255,255,255,0.25)"}}/>
         <span style={{fontSize:8,color:"rgba(255,255,255,0.38)"}}>W{w}</span>
        </div>
       ))}
      </div>
      <div style={{display:"flex",justifyContent:"space-between",marginTop:2,fontSize:8,color:"rgba(255,255,255,0.28)"}}>
       <span>Jun 15, 2026 (Mon)</span><span>Dec 5, 2027 (Sun)</span>
      </div>
     </div>
     <button onClick={()=>setShowMs(!showMs)} style={{width:"100%",background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:9,padding:"8px 12px",cursor:"pointer",fontFamily:"inherit",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:showMs?8:0}}>
      <span style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.7)"}}>🏆 Completion Announcements — {msDone} of {MILESTONES.length} unlocked</span>
      <span style={{color:"rgba(255,255,255,0.5)",fontSize:14,transform:showMs?"rotate(90deg)":"none",transition:"transform 0.2s"}}>›</span>
     </button>
     {showMs&&(
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))",gap:5}}>
       {MILESTONES.map((m,i)=>{
        const done=m.day<=dIn+1, isNext=nextMs&&nextMs.day===m.day;
        return(
         <div key={i} style={{display:"flex",alignItems:"center",gap:8,background:isNext?"rgba(245,158,11,0.18)":done?"rgba(255,255,255,0.1)":"rgba(255,255,255,0.04)",borderRadius:8,padding:"7px 10px",border:`1px solid ${isNext?"rgba(245,158,11,0.5)":done?m.color+"45":"rgba(255,255,255,0.07)"}`}}>
          <span style={{fontSize:16,flexShrink:0}}>{done?"✅":isNext?"🎯":m.icon}</span>
          <div style={{flex:1,minWidth:0}}>
           <div style={{fontSize:10,fontWeight:700,color:done?"#fff":isNext?"#FDE68A":"rgba(255,255,255,0.38)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{m.label}</div>
           <div style={{fontSize:9,color:"rgba(255,255,255,0.28)"}}>W{m.wk} · Day {m.day} · {m.date} (Sun)</div>
          </div>
          <span style={{fontSize:9,fontWeight:800,padding:"1px 6px",borderRadius:10,flexShrink:0,background:done?m.color+"28":isNext?"rgba(245,158,11,0.2)":"rgba(255,255,255,0.06)",color:done?m.color:isNext?"#F59E0B":"rgba(255,255,255,0.22)"}}>
           {done?"DONE":isNext?"NEXT":"W"+m.wk}
          </span>
         </div>
        );
       })}
      </div>
     )}
    </div>
   </div>
   <div style={{maxWidth:940,margin:"0 auto",padding:"12px 12px 48px"}}>
    {[
     {b:1,icon:"📚",label:"BLOCK 1 — 1 YEAR OF FULL STACK",sub:"Weeks 01–52 · Days 1–364 · Jun 15 2026 → Jun 13 2027 · ends Day 364 Sunday",col:"#6366F1",phases:b1},
     {b:2,icon:"💯",label:"BLOCK 2 — DSA + SYSTEM DESIGN",sub:"Weeks 53–69 · Days 365–483 · Jun 14 → Oct 10 2027 · Java DSA 9w + SD 5w + Review 3w",col:"#16A34A",phases:b2},
     {b:3,icon:"🎯",label:"BLOCK 3 — INTERVIEW PREPARATION",sub:"Weeks 70–77 · Days 484–539 · Oct 11 → Dec 5 2027 · 5 tracks + 3-week mock finale",col:"#F59E0B",phases:b3},
    ].map(({b,icon,label,sub,col,phases})=>(
     <div key={b}>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:9,marginTop:b===1?2:18}}>
       <div style={{height:2,flex:1,background:`linear-gradient(90deg,${col},${col}10)`}}/>
       <div style={{textAlign:"center",flexShrink:0}}>
        <div style={{fontSize:11,fontWeight:800,color:col,letterSpacing:"0.1em"}}>{icon} {label}</div>
        <div style={{fontSize:9,color:"#94A3B8"}}>{sub}</div>
       </div>
       <div style={{height:2,flex:1,background:`linear-gradient(90deg,${col}10,${col})`}}/>
      </div>
      {b===3&&(
       <div style={{display:"flex",gap:7,flexWrap:"wrap",marginBottom:10}}>
        {[["☕","Java+Spring","#16A34A"],["⚛","React+RN","#0EA5E9"],["🏛","Microservices","#E11D48"],["🤖","Python+AI","#7C3AED"],["🎯","Mock (3w)","#F59E0B"]].map(([ic,lbl,c])=>(
         <span key={lbl} style={{display:"flex",alignItems:"center",gap:4,background:c+"12",border:`1px solid ${c}30`,borderRadius:20,padding:"3px 10px"}}>
          <span style={{fontSize:11}}>{ic}</span><span style={{fontSize:10,fontWeight:700,color:c}}>{lbl}</span>
         </span>
        ))}
       </div>
      )}
      <div style={{display:"flex",flexDirection:"column",gap:8}}>
       {phases.map(p=>(
        <Card key={p.id} p={p} isOpen={open===p.id} onToggle={()=>toggle(p.id)} isCurrent={cId===p.id} isDone={dIn+1>p.dayEnd}/>
       ))}
      </div>
     </div>
    ))}
    <div style={{marginTop:18,background:"linear-gradient(135deg,#1E1B4B,#4338CA)",borderRadius:14,padding:"16px 18px",boxShadow:"0 6px 24px rgba(99,102,241,0.3)",textAlign:"center"}}>
     <div style={{fontSize:15,fontWeight:900,color:"#FDE68A",marginBottom:4}}>🏆 77 Weeks · Mon Jun 15, 2026 → Sun Dec 5, 2027</div>
     <div style={{fontSize:11,color:"rgba(255,255,255,0.5)",marginBottom:8}}>539 days · 1,617 hours · 6:00 AM–9:00 AM · every phase ends Sunday</div>
     <div style={{display:"flex",justifyContent:"center",gap:3,flexWrap:"wrap"}}>
      {MILESTONES.map((m,i,a)=>(
       <span key={m.label} style={{display:"flex",alignItems:"center",gap:2}}>
        <span style={{fontSize:9,color:m.color,fontWeight:700,opacity:m.day<=dIn+1?1:0.38}}>{m.icon} {m.label.split(" ")[0]}</span>
        {i<a.length-1&&<span style={{color:"rgba(255,255,255,0.2)",fontSize:9}}>›</span>}
       </span>
      ))}
     </div>
    </div>
   </div>
  </div>
 );
}

const PHASES = [
 // ══ BLOCK 1 — 400 DAYS OF CODE · 52 weeks ════════════════════════════════
 {
  id:"react", block:1, seq:1, icon:"⚛",
  color:"#0EA5E9", dark:"#0369A1", bg:"#F0F9FF", border:"#BAE6FD",
  name:"React", blockLabel:"Block 1 · 1 Year of Full Stack",
  weeks:13, days:91, dayStart:1, dayEnd:91, wkStart:1, wkEnd:13,
  startDate:"Jun 15, 2026", endDate:"Sep 13, 2026",
  hours:"~273h", courseH:"116.5h", practiceH:"156.5h",
  milestone:"⚛ React Complete",
  summary:"13 weeks · 91 days · 3 courses. John Smilga primary (50.5h, 25+ real projects), Max second angle (55h, TypeScript + testing), Hindi interview Q&A final week.",
  courses:[
   "John Smilga — React Tutorial & Projects Course 2025 (50.5h) ★ START HERE — 25+ real projects",
   "Max Schwarzmüller — React The Complete Guide 2025 (55h) — TypeScript, testing, Redux Toolkit",
   "Hindi Instructor — React Interview Masterclass 200 Q (11h) — final week interview drill",
  ],
  weekPlan:[
   {w:1,  focus:"Smilga: Setup + JSX",        topics:"Vite, JSX, props, component patterns — 25+ projects begin, code along in VSCode"},
   {w:2,  focus:"Smilga: State + Events",      topics:"useState, event handlers, forms — Person List, City Tours, Todo projects"},
   {w:3,  focus:"Smilga: Hooks + Data",        topics:"useEffect, fetch API, async/await — Food Recipe project, Beachwalk Resort"},
   {w:4,  focus:"Smilga: React Router",        topics:"React Router v6, nested routes, dynamic params — Tech Store E-commerce project"},
   {w:5,  focus:"Smilga: Context + Hooks",     topics:"createContext, useContext, custom hooks, useReducer — Budget Calculator project"},
   {w:6,  focus:"Smilga: React Query",         topics:"useQuery, useMutation, caching, background refetch — Axios integration project"},
   {w:7,  focus:"Smilga: Redux Toolkit",       topics:"createSlice, configureStore, RTK Query — full e-commerce state management"},
   {w:8,  focus:"Smilga: TS + Tailwind",       topics:"TypeScript in React, Tailwind CSS — Smilga final projects. 50.5h course complete."},
   {w:9,  focus:"Max: TypeScript Deep",        topics:"Generic components, utility types (Pick/Omit/Partial), typed hooks, strict TS"},
   {w:10, focus:"Max: Performance + Testing",  topics:"useMemo, useCallback, React.memo, lazy/Suspense, React Testing Library"},
   {w:11, focus:"Max: Advanced Patterns",      topics:"Compound components, render props, forwardRef, HOC, custom hooks library"},
   {w:12, focus:"Max: Redux + Next.js",        topics:"Redux Toolkit deep, RTK Query advanced, Next.js intro, deployment"},
   {w:13, focus:"Hindi: 200 Q&A + Revision",  topics:"Hindi 200 React Q&A drill. Rebuild FPO Flight Status app from scratch cold."},
  ],
 },
 {
  id:"rn", block:1, seq:2, icon:"📱",
  color:"#7C3AED", dark:"#6D28D9", bg:"#F5F3FF", border:"#DDD6FE",
  name:"React Native", blockLabel:"Block 1 · 1 Year of Full Stack",
  weeks:4, days:28, dayStart:92, dayEnd:119, wkStart:14, wkEnd:17,
  startDate:"Sep 14, 2026", endDate:"Oct 11, 2026",
  hours:"~84h", courseH:"52h", practiceH:"32h",
  milestone:"📱 React Native Complete",
  summary:"4 weeks · 28 days · 2 courses. Run every exercise on your real iPad via Expo Go. Build FPO-style flight list app with React Navigation.",
  courses:[
   "Stephen Grider — The Complete React Native + Hooks Course 4.8★ (38h)",
   "Max Schwarzmüller — React Native The Practical Guide 2025 (14h)",
  ],
  weekPlan:[
   {w:14, focus:"Core Components",    topics:"View, Text, Image, StyleSheet, Flexbox, FlatList — reproduce exercises on iPad"},
   {w:15, focus:"Navigation",         topics:"React Navigation v6 — Stack, Tab, Drawer — FPO flight list with 3 screens"},
   {w:16, focus:"Device APIs",        topics:"Camera, Location, AsyncStorage, Notifications — Expo SDK modules"},
   {w:17, focus:"Polish + Deploy",    topics:"Animations, iOS vs Android differences, EAS Build, TestFlight submit"},
  ],
 },
 {
  id:"nextjs", block:1, seq:3, icon:"▲",
  color:"#374151", dark:"#111827", bg:"#F9FAFB", border:"#D1D5DB",
  name:"Next.js", blockLabel:"Block 1 · 1 Year of Full Stack",
  weeks:5, days:35, dayStart:120, dayEnd:154, wkStart:18, wkEnd:22,
  startDate:"Oct 12, 2026", endDate:"Nov 15, 2026",
  hours:"~105h", courseH:"65h", practiceH:"40h",
  milestone:"▲ Next.js Complete",
  summary:"5 weeks · 35 days · 3 courses. App Router, Server Components, Server Actions, NextAuth v5, Prisma. Deploy to Vercel after every chapter.",
  courses:[
   "Max Schwarzmüller — Next.js & React The Complete Guide (25h)",
   "John Smilga — React Tutorial & Projects Next.js sections (20h)",
   "Anil Dollor — Next.js Full Stack Development Hindi (20h)",
  ],
  weekPlan:[
   {w:18, focus:"App Router Basics",    topics:"File-based routing, layouts, loading states, error boundaries, metadata API"},
   {w:19, focus:"Server Components",    topics:"RSC vs Client Components, data fetching, streaming, Suspense"},
   {w:20, focus:"Server Actions + DB",  topics:"Form actions, Prisma ORM, PostgreSQL, revalidatePath, optimistic UI"},
   {w:21, focus:"Auth + Security",      topics:"NextAuth v5, OAuth providers, middleware, protected routes, JWT sessions"},
   {w:22, focus:"Deploy + Capstone",    topics:"Vercel deploy, env vars — build FPO web portal as phase capstone"},
  ],
 },
 {
  id:"spring", block:1, seq:4, icon:"🌱",
  color:"#16A34A", dark:"#15803D", bg:"#F0FDF4", border:"#BBF7D0",
  name:"Spring Boot", blockLabel:"Block 1 · MAX ⭐ · 1 Year Full Stack",
  weeks:15, days:105, dayStart:155, dayEnd:259, wkStart:23, wkEnd:37,
  startDate:"Nov 16, 2026", endDate:"Feb 28, 2027",
  hours:"~315h", courseH:"185h", practiceH:"130h",
  milestone:"🌱 Spring Boot Complete",
  summary:"15 weeks — MAX TIME · 105 days · 5 courses. Java 8 fast-track, JPA/Hibernate deep, Spring Security with Cognito OAuth2. Map every concept to FPO: Bean=Lambda, JPA=DynamoDB.",
  courses:[
   "Navin Reddy Telusko — Java 8 New Features (20h)",
   "John Thompson — Hibernate & Spring Data JPA Beginner to Guru (55h)",
   "Ranga Karanam — Spring Boot with IntelliJ Real-World Project (34h)",
   "John Thompson — Spring Framework 6 Beginner to Guru (40h)",
   "Ranga Karanam — Master Spring Boot 3 & Spring Framework 6 (36h)",
  ],
  weekPlan:[
   {w:23, focus:"Java 8 Fast-Track",     topics:"Lambdas, Streams, Optional, CompletableFuture — fast-track using C# background"},
   {w:24, focus:"JPA Foundations",       topics:"@Entity, @Id, relationships (@OneToMany/@ManyToOne), EntityManager lifecycle"},
   {w:25, focus:"Spring Data JPA",       topics:"JpaRepository, JPQL, @Query, Pageable, @Transactional"},
   {w:26, focus:"N+1 & Performance",     topics:"N+1 problem, @EntityGraph, JOIN FETCH, lazy vs eager, query optimisation"},
   {w:27, focus:"Spring Boot Basics",    topics:"Auto-configuration, starters, Actuator, profiles, application.yml"},
   {w:28, focus:"REST APIs",             topics:"@RestController, ResponseEntity, @ExceptionHandler, validation, OpenAPI"},
   {w:29, focus:"Spring MVC + Testing",  topics:"@WebMvcTest, MockMvc, @DataJpaTest, Testcontainers, Mockito"},
   {w:30, focus:"Spring IoC Deep",       topics:"Bean lifecycle, AOP, @Transactional propagation, @Conditional, @Primary"},
   {w:31, focus:"Spring Security",       topics:"SecurityFilterChain, JWT filter, UserDetailsService, password encoding"},
   {w:32, focus:"OAuth2 + Cognito",      topics:"Resource server, JWT validation, Cognito JWKS — your FPO auth pattern exactly"},
   {w:33, focus:"Docker + Maven",        topics:"Dockerfile for Spring Boot, multi-stage build, docker-compose, Maven lifecycle"},
   {w:34, focus:"Full-Stack Connect",    topics:"Spring Boot API + React frontend — connect your React app to Spring Boot"},
   {w:35, focus:"Spring Boot 4 Preview", topics:"Spring Boot 4 / Spring 7, GraalVM native image, virtual threads"},
   {w:36, focus:"Capstone Project",      topics:"Build complete REST API + JWT + JPA from scratch — production quality"},
   {w:37, focus:"Revision + 200 Q&A",   topics:"Rebuild REST API + JWT auth cold. Spring 200 interview Q&A drill."},
  ],
 },
 {
  id:"micro", block:1, seq:5, icon:"🏛",
  color:"#E11D48", dark:"#BE123C", bg:"#FFF1F2", border:"#FECDD3",
  name:"Microservices", blockLabel:"Block 1 · MAX ⭐ · 1 Year Full Stack",
  weeks:8, days:56, dayStart:260, dayEnd:315, wkStart:38, wkEnd:45,
  startDate:"Mar 1, 2027", endDate:"Apr 25, 2027",
  hours:"~168h", courseH:"90h", practiceH:"78h",
  milestone:"🏛 Microservices Complete",
  summary:"8 weeks — MAX TIME · 56 days · 4 courses. Kafka, CQRS, Event Sourcing, Saga, K8s, Circuit Breaker. Every pattern maps to FPO Cloud: EventBridge→Kafka, Step Functions→Saga.",
  courses:[
   "Ranga Karanam — Java Spring Boot Microservices with K8s & Docker (35h)",
   "Sergey Kargopolov — Building Microservices with Spring Cloud (30h)",
   "John Thompson — Spring Boot Microservices Beginner to Guru (15h)",
   "Sean Campbell — Master Spring Boot Microservices CQRS & Event Sourcing (10h)",
  ],
  weekPlan:[
   {w:38, focus:"Service Decomposition",  topics:"DDD bounded contexts, service boundaries, inter-service communication"},
   {w:39, focus:"Spring Cloud",           topics:"Eureka, Spring Cloud Gateway, config server, Feign clients"},
   {w:40, focus:"Resilience Patterns",    topics:"Resilience4j circuit breaker, retry, bulkhead — your FPO uses this!"},
   {w:41, focus:"Kafka Deep Dive",        topics:"Producer, consumer, groups, partitions, offsets — relate to FPO EventBridge"},
   {w:42, focus:"CQRS + Event Sourcing",  topics:"Separate read/write models, Axon Framework, event store, replay"},
   {w:43, focus:"Saga Pattern",           topics:"Orchestration vs choreography, compensating transactions — Step Functions = Saga!"},
   {w:44, focus:"K8s Deployment",         topics:"Deploy microservices to K8s, Ingress, ConfigMaps, Secrets"},
   {w:45, focus:"Revision + ADR",         topics:"Rebuild one microservice from scratch. Write 1 Architecture Decision Record. Interview Q&A drill."},
  ],
 },
 {
  id:"devops", block:1, seq:6, icon:"⚙",
  color:"#EA580C", dark:"#C2410C", bg:"#FFF7ED", border:"#FED7AA",
  name:"DevOps", blockLabel:"Block 1 · Day 364 🏁",
  weeks:7, days:49, dayStart:316, dayEnd:364, wkStart:46, wkEnd:52,
  startDate:"Apr 26, 2027", endDate:"Jun 13, 2027",
  hours:"~147h", courseH:"79h", practiceH:"68h",
  milestone:"⚙ DevOps Complete · Day 364 · Week 52",
  pythonWeek:"W52",
  summary:"7 weeks · 49 days. DevOps courses (W46–W51) + Python automation scripting merged into W52. Day 364 = Sunday Jun 13, 2027 — end of Block 1, end of Week 52.",
  courses:[
   "Nana Janashia TechWorld — DevOps Bootcamp (35h) · W46–W49",
   "Mumshad Mannambeth KodeKloud — The Complete DevOps Bootcamp (20h) · W49–W50",
   "Anil Dollor — Mastering DevOps Hindi (8h) · W50",
   "Mumshad Mannambeth — Terraform for Absolute Beginners with Labs (9h) · W51",
   "🐍 Al Sweigart — Automate the Boring Stuff with Python (9h) · W52 — Python for DevOps",
  ],
  weekPlan:[
   {w:46, focus:"Linux + Docker",             topics:"Linux essentials, Docker images, containers, volumes, docker-compose — KodeKloud labs"},
   {w:47, focus:"Kubernetes",                 topics:"Pods, Deployments, Services, Ingress, ConfigMaps, Secrets, AWS EKS"},
   {w:48, focus:"CI/CD Pipelines",            topics:"GitHub Actions workflows, OIDC keyless AWS auth, build/test/deploy pipelines"},
   {w:49, focus:"Terraform IaC",              topics:"HCL syntax, resources, state, modules — provision FPO AWS resources with Terraform"},
   {w:50, focus:"Monitoring + Hindi Recap",   topics:"Prometheus, Grafana, Datadog (your FPO tool). Hindi DevOps recap — Anil Dollor."},
   {w:51, focus:"Monitoring + Observability", topics:"Prometheus alerts, Datadog FPO dashboards deep dive, GitHub Actions advanced pipelines"},
   {w:52, focus:"🐍 Python for DevOps",       topics:"Automate the Boring Stuff: boto3 FPO Lambda lister, CloudWatch log parser, subprocess, regex, S3 automation scripts"},
  ],
 },
 // ══ BLOCK 2 — DSA + SYSTEM DESIGN · 17 weeks ═════════════════════════════
 {
  id:"dsa", block:2, seq:7, icon:"🧩",
  color:"#6366F1", dark:"#4338CA", bg:"#EEF2FF", border:"#C7D2FE",
  name:"Java DSA", blockLabel:"Block 2 · DSA + System Design",
  weeks:9, days:63, dayStart:365, dayEnd:427, wkStart:53, wkEnd:61,
  startDate:"Jun 14, 2027", endDate:"Aug 15, 2027",
  hours:"~189h", courseH:"99h", practiceH:"90h",
  milestone:"🧩 Java DSA Complete · Day 427",
  pythonWeek:"W53",
  summary:"9 weeks · 63 days. W53 = Scott Barrett Java DSA (both languages side by side). W54–W61 = deep Java DSA with 4 courses. 6 weeks from the removed Agentic AI phase give extra depth here.",
  courses:[
   "🐍 Scott Barrett 4.8★ — Java DS & Algorithms + LeetCode (10h) · W53 — Java + Python side by side",
   "Andrei Neagoie ZTM — Master the Coding Interview DS + Algorithms (20h) · W54–W56",
   "Tim Buchalka 112K — DS & Algorithms Deep Dive Using Java (16h) · W56–W58",
   "Elshad Karimov — Java DS & Algorithms Masterclass (45h) · W58–W62",
   "Andrei Neagoie ZTM — Master Coding Interview Big Tech FAANG (8h) · W61",
  ],
  weekPlan:[
   {w:53, focus:"🐍 Python + Java DSA",     topics:"Scott Barrett Java+LeetCode: Big O, Arrays, Hash Maps, Linked Lists — problems in Java AND Python"},
   {w:54, focus:"Trees + BST in Java",       topics:"DFS preorder/inorder/postorder, BFS level-order, BST insert/delete/validate in Java"},
   {w:55, focus:"Heaps + Priority Queues",   topics:"Java PriorityQueue, Top-K patterns, merge K lists, find median from data stream"},
   {w:56, focus:"Graphs in Java",            topics:"BFS/DFS on graphs, topological sort, Union-Find, Dijkstra — Java adjacency list"},
   {w:57, focus:"Sorting + Searching",       topics:"All sorting algorithms in Java — QuickSort, MergeSort — with complexity proofs"},
   {w:58, focus:"DP Foundations",            topics:"1D DP: coin change, house robber, jump game. Top-down memoisation in Java."},
   {w:59, focus:"Advanced DP",               topics:"2D DP, interval DP, LCS, edit distance — Java solutions"},
   {w:60, focus:"Backtracking + Tries",      topics:"N-Queens, Sudoku, word search — Trie implementation and problems in Java"},
   {w:61, focus:"FAANG Hard + Revision",     topics:"Hard graph, advanced DP from FAANG course. Rebuild 3 structures from scratch cold."},
  ],
 },
 {
  id:"sd", block:2, seq:8, icon:"🏗",
  color:"#16A34A", dark:"#15803D", bg:"#F0FDF4", border:"#BBF7D0",
  name:"System Design", blockLabel:"Block 2 · DSA + System Design",
  weeks:5, days:35, dayStart:428, dayEnd:462, wkStart:62, wkEnd:66,
  startDate:"Aug 16, 2027", endDate:"Sep 19, 2027",
  hours:"~105h", courseH:"63h", practiceH:"42h",
  milestone:"🏗 System Design Complete · Day 462",
  summary:"5 weeks · 35 days · 5 courses. Design 1 system from scratch each day spoken aloud. The extra week from Agentic AI gives deeper coverage of advanced distributed system designs.",
  courses:[
   "Frank Kane ex-Amazon — Mastering the System Design Interview (5h) · W62",
   "Michael Pogrebinsky 93K — Software Architecture Modern Large Scale Systems (20h) · W62–W63",
   "Mikhail Smarshchok — System Design Interview Guide 20+ designs (18h) · W63–W65",
   "Bogdan Stashchuk — Pragmatic System Design real trade-offs (12h) · W65–W66",
   "FAANG Insiders — System Design Masterclass 2026 (8h) · W66",
  ],
  weekPlan:[
   {w:62, focus:"SD Framework + Architecture", topics:"Frank Kane 5-step template. CQRS, Event Sourcing, Saga, API Gateway — all maps to FPO"},
   {w:63, focus:"Classic Designs 1",           topics:"URL Shortener, WhatsApp, Twitter — Requirements→Estimation→HLD→DB→API each day"},
   {w:64, focus:"Classic Designs 2",           topics:"Netflix, Uber, Notification System, Rate Limiter — 45 min each spoken aloud, cold"},
   {w:65, focus:"Advanced + FPO Design",       topics:"Payment System, FPO Flight Optimiser, Distributed Cache — trade-off discussion"},
   {w:66, focus:"FAANG SD + Revision",         topics:"FAANG Insiders template — YouTube, Newsfeed, WhatsApp. Revise weakest designs."},
  ],
 },
 {
  id:"review", block:2, seq:9, icon:"🏁",
  color:"#F59E0B", dark:"#D97706", bg:"#FFFBEB", border:"#FDE68A",
  name:"DSA + SD Review", blockLabel:"Block 2 · Final Review",
  weeks:3, days:21, dayStart:463, dayEnd:483, wkStart:67, wkEnd:69,
  startDate:"Sep 20, 2027", endDate:"Oct 10, 2027",
  hours:"~63h", courseH:"46h", practiceH:"17h",
  milestone:"🏁 DSA + SD Review Complete",
  summary:"3 weeks · 21 days · 4 Udemy review courses. Watch and code along — no self-drilling from scratch. Courses are specifically designed for interview revision, not original learning.",
  courses:[
   "Andrei Neagoie ZTM — Master the Coding Interview DS + Algorithms (20h) · W67 — re-watch key sections, code every problem in Java",
   "Andrei Neagoie ZTM — Master Coding Interview Big Tech FAANG (8h) · W67 — hard patterns revision, FAANG-specific problems",
   "Frank Kane ex-Amazon — Mastering the System Design Interview (5h) · W68 — re-watch full course as rapid system design revision",
   "FAANG Insiders — System Design Masterclass 2026 (8h) · W68–W69 — 5-step template drill, YouTube/WhatsApp/Newsfeed cold designs",
   "Bogdan Stashchuk — Pragmatic System Design (5h selected chapters) · W69 — trade-off reasoning, FPO design walkthrough",
  ],
  weekPlan:[
   {w:67, focus:"DSA Re-watch + Java Code",   topics:"Andrei Neagoie DS+Algo + FAANG course: re-watch every key section, solve every problem in Java — timed. Focus on weakest patterns from W53–W61."},
   {w:68, focus:"System Design Re-watch",     topics:"Frank Kane full course rapid re-watch (5h) + FAANG Insiders Masterclass (8h): apply the 5-step template to every design — URL Shortener, WhatsApp, Twitter, YouTube."},
   {w:69, focus:"Trade-offs + Mock Designs",  topics:"Bogdan Stashchuk selected chapters on trade-off reasoning. Then 3 cold mock designs spoken aloud: FPO Flight Optimiser, Payment System, Notification System."},
  ],
 },
 // ══ BLOCK 3 — INTERVIEW PREPARATION · 8 weeks ════════════════════════════
 {
  id:"int_java", block:3, seq:10, icon:"☕",
  color:"#16A34A", dark:"#15803D", bg:"#F0FDF4", border:"#BBF7D0",
  name:"Java + Spring Interview", blockLabel:"Block 3 · Interview Prep",
  weeks:2, days:14, dayStart:484, dayEnd:497, wkStart:70, wkEnd:71,
  startDate:"Oct 11, 2027", endDate:"Oct 24, 2027",
  hours:"~42h", courseH:"33h", practiceH:"9h",
  milestone:null,
  summary:"2 weeks · 14 days · 3 courses · 600+ Java+Spring Q&A. Write every code answer from memory. 30 questions per morning as warm-up.",
  courses:[
   "Ranga Karanam in28minutes — Java Programming Interview Guide 200+ Q&A 4.5★ 80K students (10h) · W70",
   "Ranga Karanam in28minutes — Spring & Spring Boot Interview Guide 200+ Q&A 4.5★ 60K students (10h) · W70–W71",
   "Happy Rawat — Java Interview Masterclass 350 Questions 2026 +PDF 4.6★ 3K students (13h) · W71",
  ],
  weekPlan:[
   {w:70, focus:"Java + Spring 400 Q",   topics:"Java 200 Q then Spring 200 Q — OOP, Streams, Collections, IoC, JPA, AOP, @Transactional"},
   {w:71, focus:"350 Q Masterclass",     topics:"Happy Rawat 350 Q — Core Java, Multithreading, Design Patterns, Spring Security, Microservices"},
  ],
 },
 {
  id:"int_react", block:3, seq:11, icon:"⚛",
  color:"#0EA5E9", dark:"#0369A1", bg:"#F0F9FF", border:"#BAE6FD",
  name:"React + RN Interview", blockLabel:"Block 3 · Interview Prep",
  weeks:1, days:7, dayStart:498, dayEnd:504, wkStart:72, wkEnd:72,
  startDate:"Oct 25, 2027", endDate:"Oct 31, 2027",
  hours:"~21h", courseH:"15h", practiceH:"6h",
  milestone:null,
  summary:"1 week · 7 days · 2 courses · 200+ React Q&A with TypeScript coding questions. Build 5 components from memory. React Native specifics covered.",
  courses:[
   "Happy Rawat — React Interview Masterclass 200 Q&A +PDF 2026 4.7★ (7h)",
   "Ariel Weinberger — React Interview Questions Coding 2026 TypeScript 4.6★ (8h)",
  ],
  weekPlan:[
   {w:72, focus:"React + RN 200 Q",    topics:"Virtual DOM, reconciliation, fiber, hooks rules, useMemo vs useCallback, TypeScript, RN differences"},
  ],
 },
 {
  id:"int_micro", block:3, seq:12, icon:"🏛",
  color:"#E11D48", dark:"#BE123C", bg:"#FFF1F2", border:"#FECDD3",
  name:"Microservices Interview", blockLabel:"Block 3 · Interview Prep",
  weeks:1, days:7, dayStart:505, dayEnd:511, wkStart:73, wkEnd:73,
  startDate:"Nov 1, 2027", endDate:"Nov 7, 2027",
  hours:"~21h", courseH:"18h", practiceH:"3h",
  milestone:null,
  summary:"1 week · 7 days. Chad Darby's comprehensive Java+Spring Boot+Microservices+DevOps+Cloud interview course — full-picture Q&A.",
  courses:[
   "Chad Darby — Java Interview Help: Java Spring Boot Microservices DevOps Cloud 4.6★ 30K students (18h)",
  ],
  weekPlan:[
   {w:73, focus:"Microservices Full Q&A", topics:"Kafka, Circuit Breaker, Saga, CQRS, K8s, Docker, AWS, CI/CD — all Q&A coded on whiteboard"},
  ],
 },
 {
  id:"int_python", block:3, seq:13, icon:"🤖",
  color:"#7C3AED", dark:"#6D28D9", bg:"#F5F3FF", border:"#DDD6FE",
  name:"Python + AI Interview", blockLabel:"Block 3 · Interview Prep",
  weeks:1, days:7, dayStart:512, dayEnd:518, wkStart:74, wkEnd:74,
  startDate:"Nov 8, 2027", endDate:"Nov 14, 2027",
  hours:"~21h", courseH:"18h", practiceH:"3h",
  milestone:null,
  summary:"1 week · 7 days. Agentic AI interview prep (LangChain, LangGraph, RAG, agents) + Core Python Q&A (OOP, decorators, generators, async). Build live agent demo.",
  courses:[
   "Eden Marco — LangChain Agentic AI Engineering 2026 4.7★ 114K students (10h)",
   "Multiple Instructors — Python Interview Questions Core Python OOP Automation 4.5★ (8h)",
  ],
  weekPlan:[
   {w:74, focus:"Python + AI Q&A",      topics:"RAG, LangGraph agents, MCP, OOP, decorators, generators, async — explain each out loud"},
  ],
 },
 {
  id:"int_mock", block:3, seq:14, icon:"🎯",
  color:"#F59E0B", dark:"#D97706", bg:"#FFFBEB", border:"#FDE68A",
  name:"Mock + Final Polish", blockLabel:"Block 3 · Week 77 · FINAL",
  weeks:3, days:21, dayStart:519, dayEnd:539, wkStart:75, wkEnd:77,
  startDate:"Nov 15, 2027", endDate:"Dec 5, 2027",
  hours:"~63h", courseH:"10h", practiceH:"53h",
  milestone:"🎯 Interview Prep Complete · Week 77 · Dec 5, 2027",
  summary:"Final 3 weeks — W75–W77. Non-technical course (W75) then 2 full weeks of mock interview simulation. Every day is a mock. Last day Sunday Dec 5, 2027 — end of 77 weeks.",
  courses:[
   "Andrei Neagoie ZTM — Master Coding Interview Non-Technical Resume+Salary+STAR 4.7★ (10h) · W75",
   "W76: Full mock week — coding + system design + behavioural every day — Pramp sessions",
   "W77: Final mock week — cold system design FPO + salary negotiation + interview-ready day Dec 5",
  ],
  weekPlan:[
   {w:75, focus:"Non-Tech Mastery",      topics:"Resume, salary negotiation, STAR stories from FPO. Andrei Non-Technical course."},
   {w:76, focus:"Mock Interview Week 1", topics:"Pramp.com sessions daily. 2 coding mocks (45 min each) + 1 system design mock (45 min) per day."},
   {w:77, focus:"Mock Interview Week 2", topics:"Final cold mocks. FPO 90-sec pitch rehearsed. LinkedIn headline final. Dec 5 Sunday = 77 weeks = DONE."},
  ],
 },
];

const MILESTONES = [
 {day:91,  wk:13, date:"Sep 13, 2026",  icon:"⚛",  label:"React Complete",                      color:"#0EA5E9"},
 {day:119, wk:17, date:"Oct 11, 2026",  icon:"📱",  label:"React Native Complete",               color:"#7C3AED"},
 {day:154, wk:22, date:"Nov 15, 2026",  icon:"▲",   label:"Next.js Complete",                    color:"#374151"},
 {day:259, wk:37, date:"Feb 28, 2027",  icon:"🌱",  label:"Spring Boot Complete",                color:"#16A34A"},
 {day:315, wk:45, date:"Apr 25, 2027",  icon:"🏛",  label:"Microservices Complete",              color:"#E11D48"},
 {day:364, wk:52, date:"Jun 13, 2027",  icon:"⚙",   label:"DevOps Complete · Day 364 · Week 52", color:"#EA580C"},
 {day:427, wk:61, date:"Aug 15, 2027",  icon:"🧩",  label:"Java DSA Complete",                   color:"#6366F1"},
 {day:462, wk:66, date:"Sep 19, 2027",  icon:"🏗",  label:"System Design Complete",              color:"#16A34A"},
 {day:539, wk:77, date:"Dec 5, 2027",   icon:"🎯",  label:"Interview Prep Complete",             color:"#F59E0B"},
];

const TOTAL_DAYS=539, TOTAL_WEEKS=77, TOTAL_HOURS=1617;

function daysSince(){return Math.max(0,Math.floor((new Date()-START)/864e5));}
function curPhaseId(){const d=daysSince()+1;for(const p of PHASES)if(d<=p.dayEnd)return p.id;return null;}
function pct(){return Math.min(100,Math.round(daysSince()/TOTAL_DAYS*100));}
function curWk(){return Math.min(TOTAL_WEEKS,Math.floor(daysSince()/7)+1);}

function Card({p,isOpen,onToggle,isCurrent,isDone}){
 const [wkOpen,setWkOpen]=useState(false);
 const hasPy=!!p.pythonWeek;
 return(
  <div id={"p"+p.id} style={{borderRadius:12,
   border:"2px solid "+(isOpen?p.color+"80":isCurrent?"#F59E0B80":isDone?p.color+"28":p.border),
   background:isOpen?p.bg:isDone?"#FAFBFF":"#fff",opacity:isDone?0.72:1,
   boxShadow:isOpen?`0 6px 22px ${p.color}14`:isCurrent?"0 0 0 3px #FEF3C7,0 2px 8px rgba(0,0,0,0.07)":"0 1px 4px rgba(0,0,0,0.05)",
   overflow:"hidden",transition:"all 0.22s"}}>
   <button onClick={onToggle} style={{width:"100%",background:"none",border:"none",cursor:"pointer",
    padding:"12px 14px",display:"flex",alignItems:"center",gap:10,textAlign:"left",fontFamily:"inherit"}}>
    <div style={{width:52,height:52,borderRadius:12,flexShrink:0,
     background:isOpen?`linear-gradient(135deg,${p.color},${p.dark})`:isDone?"#F1F5F9":p.bg,
     border:`2px solid ${p.color}35`,display:"flex",flexDirection:"column",alignItems:"center",
     justifyContent:"center",transition:"all 0.22s",boxShadow:isOpen?`0 4px 12px ${p.color}40`:"none"}}>
     <span style={{fontSize:18,lineHeight:1}}>{isDone?"✅":p.icon}</span>
     <span style={{fontSize:8,fontWeight:700,color:isOpen?"rgba(255,255,255,0.6)":p.color,marginTop:1}}>#{p.seq}</span>
    </div>
    <div style={{flex:1,minWidth:0}}>
     <div style={{display:"flex",gap:5,alignItems:"center",flexWrap:"wrap",marginBottom:2}}>
      {isCurrent&&<span style={{fontSize:9,fontWeight:800,padding:"1px 6px",borderRadius:12,background:"#FEF3C7",color:"#D97706",border:"1px solid #FDE68A",whiteSpace:"nowrap"}}>📍 NOW</span>}
      {isDone&&<span style={{fontSize:9,fontWeight:800,padding:"1px 6px",borderRadius:12,background:"#DCFCE7",color:"#15803D",border:"1px solid #86EFAC"}}>✅ DONE</span>}
      {hasPy&&<span style={{fontSize:9,fontWeight:800,padding:"1px 6px",borderRadius:12,background:"#DCFCE7",color:"#047857",border:"1px solid #6EE7B7",whiteSpace:"nowrap"}}>🐍 {p.pythonWeek}</span>}
      <span style={{fontSize:9,fontWeight:700,padding:"1px 6px",borderRadius:12,whiteSpace:"nowrap",
       background:p.block===1?"#EEF2FF":p.block===2?"#F0FDF4":"#FFFBEB",
       color:p.block===1?"#4338CA":p.block===2?"#15803D":"#D97706",
       border:"1px solid "+(p.block===1?"#C7D2FE":p.block===2?"#BBF7D0":"#FDE68A")}}>
       W{String(p.wkStart).padStart(2,"0")}–W{String(p.wkEnd).padStart(2,"0")}
      </span>
      <span style={{fontSize:"clamp(11px,3vw,13px)",fontWeight:800,color:"#0F172A"}}>{p.name}</span>
     </div>
     <div style={{fontSize:10,color:"#64748B",marginBottom:1}}>{p.startDate} → {p.endDate} · {p.weeks}w · {p.days}d</div>
     {p.milestone&&<div style={{fontSize:9,fontWeight:800,color:p.color}}>🏆 {p.milestone}</div>}
    </div>
    <div style={{textAlign:"right",flexShrink:0}}>
     <div style={{fontSize:12,fontWeight:900,color:p.color,background:p.color+"12",padding:"2px 9px",borderRadius:14,border:`1px solid ${p.color}22`,marginBottom:2}}>{p.weeks}w</div>
     <div style={{fontSize:9,color:"#94A3B8"}}>{p.days}d</div>
    </div>
    <span style={{color:p.color,fontSize:18,flexShrink:0,transform:isOpen?"rotate(90deg)":"none",transition:"transform 0.2s",opacity:isOpen?1:0.3}}>›</span>
   </button>
   {isOpen&&(
    <div style={{borderTop:`2px solid ${p.color}18`,padding:"12px 14px 16px"}}>
     {hasPy&&(
      <div style={{background:"linear-gradient(90deg,#DCFCE7,#F0FDF4)",border:"1px solid #86EFAC",borderRadius:9,padding:"9px 12px",marginBottom:10,display:"flex",alignItems:"center",gap:8}}>
       <span style={{fontSize:18,flexShrink:0}}>🐍</span>
       <div>
        <div style={{fontSize:11,fontWeight:800,color:"#047857"}}>Python Merged into {p.pythonWeek}</div>
        <div style={{fontSize:10,color:"#166534",lineHeight:1.6}}>{p.id==="devops"?"Python automation scripting (boto3, subprocess, log parsing) — learned in DevOps context where you will actually use it.":"Python problem-solving alongside Java (Scott Barrett Java+Python LeetCode course) — both languages simultaneously."}</div>
       </div>
      </div>
     )}
     <div style={{background:p.color+"0A",border:`1px solid ${p.color}22`,borderRadius:9,padding:"10px 12px",marginBottom:10,fontSize:12,color:"#334155",lineHeight:1.8}}>{p.summary}</div>
     <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))",gap:8,marginBottom:10}}>
      <div style={{background:"#F8FAFC",borderRadius:8,padding:"9px 11px",border:"1px solid #E2E8F0"}}>
       <div style={{fontSize:9,fontWeight:800,color:"#374151",letterSpacing:"0.08em",marginBottom:5}}>📚 COURSES</div>
       {p.courses.map((c,i)=>(
        <div key={i} style={{display:"flex",gap:5,padding:"2px 0"}}>
         <span style={{color:p.color,fontSize:9,flexShrink:0,marginTop:2,fontWeight:700}}>{c.startsWith("🐍")?"🐍":(i+1)+"."}</span>
         <span style={{fontSize:10,color:c.startsWith("🐍")?"#047857":"#374151",lineHeight:1.6,fontWeight:c.startsWith("🐍")?700:400}}>{c}</span>
        </div>
       ))}
      </div>
      <div style={{background:"#F8FAFF",border:"1px solid #E0E7FF",borderRadius:8,padding:"9px 11px"}}>
       <div style={{fontSize:9,fontWeight:800,color:"#4F46E5",letterSpacing:"0.08em",marginBottom:5}}>⏰ 6:00 AM–9:00 AM · {p.hours}</div>
       <div style={{display:"flex",gap:7,marginBottom:7}}>
        {[["📺","Course",p.courseH],["💻","Practice",p.practiceH]].map(([ic,lbl,h])=>(
         <div key={lbl} style={{flex:1,background:"#fff",borderRadius:7,padding:"6px 7px",border:"1px solid #E2E8F0",textAlign:"center"}}>
          <div style={{fontSize:13}}>{ic}</div>
          <div style={{fontSize:11,fontWeight:700,color:"#0F172A"}}>{h}</div>
          <div style={{fontSize:9,color:"#94A3B8"}}>{lbl}</div>
         </div>
        ))}
       </div>
       {p.milestone&&<div style={{background:`${p.color}12`,border:`1px solid ${p.color}28`,borderRadius:7,padding:"6px 8px",fontSize:10,fontWeight:700,color:p.color}}>🏆 {p.milestone}</div>}
      </div>
     </div>
     <button onClick={e=>{e.stopPropagation();setWkOpen(!wkOpen);}} style={{width:"100%",background:`${p.color}08`,border:`1px solid ${p.color}25`,borderRadius:8,padding:"8px 12px",cursor:"pointer",fontFamily:"inherit",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:wkOpen?8:0}}>
      <span style={{fontSize:10,fontWeight:700,color:p.color}}>📅 Week-by-Week Plan — {p.weekPlan.length} week{p.weekPlan.length>1?"s":""}</span>
      <span style={{fontSize:12,color:p.color}}>{wkOpen?"▲":"▼"}</span>
     </button>
     {wkOpen&&(
      <div style={{display:"flex",flexDirection:"column",gap:6}}>
       {p.weekPlan.map((wk)=>(
        <div key={wk.w} style={{background:wk.focus.includes("🐍")?"#F0FDF4":"#fff",borderRadius:8,padding:"9px 11px",
         border:`1.5px solid ${wk.focus.includes("🐍")?"#86EFAC":p.color+"18"}`,display:"flex",gap:10,alignItems:"flex-start"}}>
         <div style={{width:38,height:38,borderRadius:8,background:wk.focus.includes("🐍")?"#DCFCE7":p.color+"18",
          color:wk.focus.includes("🐍")?"#15803D":p.color,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexShrink:0}}>
          <span style={{fontSize:8,fontWeight:700,lineHeight:1}}>{wk.focus.includes("🐍")?"🐍":"W"}</span>
          <span style={{fontSize:12,fontWeight:900,lineHeight:1}}>{wk.focus.includes("🐍")?"":wk.w}</span>
          {!wk.focus.includes("🐍")&&<span style={{fontSize:8,fontWeight:600,opacity:0.6,lineHeight:1}}>{wk.w}</span>}
         </div>
         <div style={{flex:1,minWidth:0}}>
          <div style={{display:"flex",gap:5,alignItems:"center",marginBottom:2}}>
           <span style={{fontSize:11,fontWeight:700,color:wk.focus.includes("🐍")?"#047857":"#0F172A"}}>{wk.focus}</span>
           {!wk.focus.includes("🐍")&&<span style={{fontSize:9,color:"#94A3B8"}}>W{wk.w}</span>}
          </div>
          <div style={{fontSize:10,color:wk.focus.includes("🐍")?"#166534":"#64748B",lineHeight:1.6}}>{wk.topics}</div>
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

export default function App(){
 const [open,setOpen]=useState(null);
 const [showMs,setShowMs]=useState(true);
 const dIn=daysSince(), cId=curPhaseId(), prog=pct(), wkNow=curWk();
 const msDone=MILESTONES.filter(m=>m.day<=dIn+1).length;
 const nextMs=MILESTONES.find(m=>m.day>dIn+1);
 const toggle=id=>setOpen(open===id?null:id);
 const jump=id=>{setOpen(id);setTimeout(()=>document.getElementById("p"+id)?.scrollIntoView({behavior:"smooth",block:"start"}),80);};
 const b1=PHASES.filter(p=>p.block===1), b2=PHASES.filter(p=>p.block===2), b3=PHASES.filter(p=>p.block===3);

 return(
  <div style={{minHeight:"100vh",background:"#F0F4FF",fontFamily:"'Segoe UI',system-ui,-apple-system,sans-serif",color:"#0F172A",overflowX:"hidden"}}>
   <div style={{background:"linear-gradient(135deg,#1E1B4B 0%,#4338CA 50%,#1A365D 100%)",padding:"22px 14px 18px",position:"relative",overflow:"hidden"}}>
    <div style={{position:"absolute",inset:0,pointerEvents:"none",backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.055) 1px,transparent 1px)",backgroundSize:"22px 22px"}}/>
    <div style={{maxWidth:940,margin:"0 auto",position:"relative",zIndex:1}}>
     <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
      <div style={{width:52,height:52,borderRadius:13,flexShrink:0,background:"linear-gradient(135deg,#F59E0B,#D97706)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,boxShadow:"0 6px 20px rgba(245,158,11,0.5)"}}>🏆</div>
      <div style={{flex:1,minWidth:0}}>
       <div style={{fontSize:9,letterSpacing:"0.28em",textTransform:"uppercase",color:"rgba(255,255,255,0.32)",marginBottom:2}}>Sumit Rawal · NextStep Bangkok · FPO Cloud</div>
       <div style={{fontSize:"clamp(18px,5vw,30px)",fontWeight:900,color:"#fff",letterSpacing:"-0.02em",lineHeight:1.1}}>77 Weeks Coding Journey</div>
       <div style={{fontSize:10,color:"rgba(255,255,255,0.38)",marginTop:2}}>Mon Jun 15, 2026 → Sun Dec 5, 2027 · 539 days · {TOTAL_HOURS}h · 6:00 AM–9:00 AM · every phase ends Sunday</div>
      </div>
     </div>
     <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:7,marginBottom:14}}>
      {[
       {icon:"📚",n:"Block 1",t:"1 Year of Full Stack",s:"W01–W52 · Days 1–364",d:"React · RN · Next.js · Spring Boot · Microservices · DevOps",col:"#6366F1"},
       {icon:"💯",n:"Block 2",t:"DSA + System Design",s:"W53–W69 · Days 365–483",d:"Java DSA (9w) · System Design (5w) · Review (3w)",col:"#16A34A"},
       {icon:"🎯",n:"Block 3",t:"Interview Preparation",s:"W70–W77 · Days 484–539",d:"Java · React+RN · Microservices · Python+AI · Mock (3w)",col:"#F59E0B"},
      ].map(({icon,n,t,s,d,col})=>(
       <div key={n} style={{background:"rgba(255,255,255,0.07)",borderRadius:10,padding:"10px 10px",border:`1px solid ${col}45`}}>
        <div style={{fontSize:16,marginBottom:3}}>{icon}</div>
        <div style={{fontSize:9,fontWeight:800,color:col,marginBottom:1}}>{n}</div>
        <div style={{fontSize:"clamp(10px,2.5vw,12px)",fontWeight:800,color:"#fff",marginBottom:2}}>{t}</div>
        <div style={{fontSize:9,color:"rgba(255,255,255,0.38)",marginBottom:4}}>{s}</div>
        <div style={{fontSize:9,color:"rgba(255,255,255,0.32)",lineHeight:1.5}}>{d}</div>
       </div>
      ))}
     </div>
     <div style={{marginBottom:10}}>
      <div style={{height:14,borderRadius:7,overflow:"hidden",display:"flex",boxShadow:"inset 0 2px 4px rgba(0,0,0,0.3)",gap:1}}>
       {PHASES.map(p=>(
        <div key={p.id} style={{flex:p.days,cursor:"pointer",background:dIn+1>p.dayEnd?p.color+"70":dIn+1>=p.dayStart?p.color:p.color+"38",borderRight:"1px solid rgba(0,0,0,0.1)",transition:"background 0.3s"}}
         onClick={()=>jump(p.id)} title={`${p.name} · W${p.wkStart}–W${p.wkEnd}`}/>
       ))}
      </div>
      <div style={{display:"flex",justifyContent:"space-between",marginTop:5}}>
       {[1,10,20,30,40,50,60,70,77].map(w=>(
        <div key={w} style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
         <div style={{width:1,height:4,background:"rgba(255,255,255,0.25)"}}/>
         <span style={{fontSize:8,color:"rgba(255,255,255,0.38)"}}>W{w}</span>
        </div>
       ))}
      </div>
      <div style={{display:"flex",justifyContent:"space-between",marginTop:2,fontSize:8,color:"rgba(255,255,255,0.28)"}}>
       <span>Jun 15, 2026 (Mon)</span><span>Dec 5, 2027 (Sun)</span>
      </div>
     </div>
     <button onClick={()=>setShowMs(!showMs)} style={{width:"100%",background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:9,padding:"8px 12px",cursor:"pointer",fontFamily:"inherit",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:showMs?8:0}}>
      <span style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.7)"}}>🏆 Completion Announcements — {msDone} of {MILESTONES.length} unlocked</span>
      <span style={{color:"rgba(255,255,255,0.5)",fontSize:14,transform:showMs?"rotate(90deg)":"none",transition:"transform 0.2s"}}>›</span>
     </button>
     {showMs&&(
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))",gap:5}}>
       {MILESTONES.map((m,i)=>{
        const done=m.day<=dIn+1, isNext=nextMs&&nextMs.day===m.day;
        return(
         <div key={i} style={{display:"flex",alignItems:"center",gap:8,background:isNext?"rgba(245,158,11,0.18)":done?"rgba(255,255,255,0.1)":"rgba(255,255,255,0.04)",borderRadius:8,padding:"7px 10px",border:`1px solid ${isNext?"rgba(245,158,11,0.5)":done?m.color+"45":"rgba(255,255,255,0.07)"}`}}>
          <span style={{fontSize:16,flexShrink:0}}>{done?"✅":isNext?"🎯":m.icon}</span>
          <div style={{flex:1,minWidth:0}}>
           <div style={{fontSize:10,fontWeight:700,color:done?"#fff":isNext?"#FDE68A":"rgba(255,255,255,0.38)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{m.label}</div>
           <div style={{fontSize:9,color:"rgba(255,255,255,0.28)"}}>W{m.wk} · Day {m.day} · {m.date} (Sun)</div>
          </div>
          <span style={{fontSize:9,fontWeight:800,padding:"1px 6px",borderRadius:10,flexShrink:0,background:done?m.color+"28":isNext?"rgba(245,158,11,0.2)":"rgba(255,255,255,0.06)",color:done?m.color:isNext?"#F59E0B":"rgba(255,255,255,0.22)"}}>
           {done?"DONE":isNext?"NEXT":"W"+m.wk}
          </span>
         </div>
        );
       })}
      </div>
     )}
    </div>
   </div>
   <div style={{maxWidth:940,margin:"0 auto",padding:"12px 12px 48px"}}>
    {[
     {b:1,icon:"📚",label:"BLOCK 1 — 1 YEAR OF FULL STACK",sub:"Weeks 01–52 · Days 1–364 · Jun 15 2026 → Jun 13 2027 · ends Day 364 Sunday",col:"#6366F1",phases:b1},
     {b:2,icon:"💯",label:"BLOCK 2 — DSA + SYSTEM DESIGN",sub:"Weeks 53–69 · Days 365–483 · Jun 14 → Oct 10 2027 · Java DSA 9w + SD 5w + Review 3w",col:"#16A34A",phases:b2},
     {b:3,icon:"🎯",label:"BLOCK 3 — INTERVIEW PREPARATION",sub:"Weeks 70–77 · Days 484–539 · Oct 11 → Dec 5 2027 · 5 tracks + 3-week mock finale",col:"#F59E0B",phases:b3},
    ].map(({b,icon,label,sub,col,phases})=>(
     <div key={b}>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:9,marginTop:b===1?2:18}}>
       <div style={{height:2,flex:1,background:`linear-gradient(90deg,${col},${col}10)`}}/>
       <div style={{textAlign:"center",flexShrink:0}}>
        <div style={{fontSize:11,fontWeight:800,color:col,letterSpacing:"0.1em"}}>{icon} {label}</div>
        <div style={{fontSize:9,color:"#94A3B8"}}>{sub}</div>
       </div>
       <div style={{height:2,flex:1,background:`linear-gradient(90deg,${col}10,${col})`}}/>
      </div>
      {b===3&&(
       <div style={{display:"flex",gap:7,flexWrap:"wrap",marginBottom:10}}>
        {[["☕","Java+Spring","#16A34A"],["⚛","React+RN","#0EA5E9"],["🏛","Microservices","#E11D48"],["🤖","Python+AI","#7C3AED"],["🎯","Mock (3w)","#F59E0B"]].map(([ic,lbl,c])=>(
         <span key={lbl} style={{display:"flex",alignItems:"center",gap:4,background:c+"12",border:`1px solid ${c}30`,borderRadius:20,padding:"3px 10px"}}>
          <span style={{fontSize:11}}>{ic}</span><span style={{fontSize:10,fontWeight:700,color:c}}>{lbl}</span>
         </span>
        ))}
       </div>
      )}
      <div style={{display:"flex",flexDirection:"column",gap:8}}>
       {phases.map(p=>(
        <Card key={p.id} p={p} isOpen={open===p.id} onToggle={()=>toggle(p.id)} isCurrent={cId===p.id} isDone={dIn+1>p.dayEnd}/>
       ))}
      </div>
     </div>
    ))}
    <div style={{marginTop:18,background:"linear-gradient(135deg,#1E1B4B,#4338CA)",borderRadius:14,padding:"16px 18px",boxShadow:"0 6px 24px rgba(99,102,241,0.3)",textAlign:"center"}}>
     <div style={{fontSize:15,fontWeight:900,color:"#FDE68A",marginBottom:4}}>🏆 77 Weeks · Mon Jun 15, 2026 → Sun Dec 5, 2027</div>
     <div style={{fontSize:11,color:"rgba(255,255,255,0.5)",marginBottom:8}}>539 days · 1,617 hours · 6:00 AM–9:00 AM · every phase ends Sunday</div>
     <div style={{display:"flex",justifyContent:"center",gap:3,flexWrap:"wrap"}}>
      {MILESTONES.map((m,i,a)=>(
       <span key={m.label} style={{display:"flex",alignItems:"center",gap:2}}>
        <span style={{fontSize:9,color:m.color,fontWeight:700,opacity:m.day<=dIn+1?1:0.38}}>{m.icon} {m.label.split(" ")[0]}</span>
        {i<a.length-1&&<span style={{color:"rgba(255,255,255,0.2)",fontSize:9}}>›</span>}
       </span>
      ))}
     </div>
    </div>
   </div>
  </div>
 );
}
