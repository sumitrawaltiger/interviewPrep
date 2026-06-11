import { useState, useEffect } from "react";

const START_DATE = new Date("2027-07-15");

const PHASES = [
  {
    id:"p1", n:1, color:"#6366F1", dark:"#4338CA", bg:"#EEF2FF", border:"#C7D2FE",
    icon:"🧱", name:"Phase 1 — Foundations",
    weeks:"Weeks 1–4", period:"Jul 15 – Aug 11, 2027", durationWeeks:4,
    goal:"Build the base before grinding LeetCode. Understand WHY each structure exists. By Week 4 you should solve Easy problems in under 12 minutes cold.",
    weekTopics:[
      {w:1,topic:"Big O · Arrays · Strings · Hash Maps",
       dsa:["Big O: O(1), O(log n), O(n), O(n log n), O(n²) — analyse complexity of every solution","Two Pointers: pair sum, container with most water, valid palindrome, 3Sum","Sliding Window: max subarray sum, longest no-repeat substring, minimum window","Hash Map patterns: two sum, group anagrams, frequency counter, subarray sum"],
       sd:["System design interview framework: Requirements → Estimation → HLD → Deep Dive → Trade-offs","Scalability: vertical vs horizontal scaling, stateless services, sticky sessions","Load Balancers: round-robin, least-connections, consistent hashing, L4 vs L7"],
       lc:"15 problems — all Easy. No timer. Understand patterns fully.",
       daily:"6:00–7:00 AM course/theory · 7:00–8:30 AM LeetCode 4 problems · 8:30–9:00 AM review"},
      {w:2,topic:"Linked Lists · Stacks · Queues · Two Pointers",
       dsa:["Linked List: reverse iterative+recursive, find middle, detect+remove cycle (Floyd)","Fast/slow pointer: linked list cycle, happy number, palindrome linked list","Stack: valid parentheses, daily temperatures, monotonic stack, next greater element","Queue: implement with stacks, sliding window max with deque, BFS preview"],
       sd:["Caching: CDN, Redis, cache-aside, write-through, write-behind, TTL, eviction policies","Cache invalidation — the hardest problem in distributed systems — know it cold","CDN: how it works, origin vs edge, cache-control headers, when to use"],
       lc:"20 problems — 15 Easy + 5 Medium. Focus: LinkedList, Stack, Queue.",
       daily:"6:00–7:00 AM course/theory · 7:00–8:30 AM LeetCode 4 problems · 8:30–9:00 AM review"},
      {w:3,topic:"Binary Trees · BST · DFS · BFS",
       dsa:["DFS: preorder, inorder, postorder — recursive AND iterative implementations","BFS: level order, zigzag, right side view, level averages","BST: insert, delete, validate, kth smallest, in-order successor, LCA","Tree problems: max depth, diameter, path sum variants, symmetric tree"],
       sd:["Databases: SQL vs NoSQL trade-offs, ACID vs BASE, when to use each","DB scaling: read replicas, horizontal sharding, connection pooling, indexes","CAP Theorem: Consistency vs Availability vs Partition Tolerance — real examples"],
       lc:"25 problems — 10 Easy + 12 Medium + 3 Hard. Focus: Trees.",
       daily:"6:00–7:00 AM course/theory · 7:00–8:30 AM LeetCode 4 problems · 8:30–9:00 AM review"},
      {w:4,topic:"MOCK WEEK 1 · Revision + System Design Intro",
       dsa:["Revision: re-solve 10 hardest problems from Weeks 1–3 without hints or discussion","Timed drill: 2 Easy (8 min each) + 2 Medium (20 min each) every day","Pattern ID speed drill: given a problem statement, name the pattern in 30 seconds"],
       sd:["APIs: REST vs gRPC vs GraphQL — know trade-offs for senior interviews","Message queues: Kafka, SQS, pub/sub — async decoupling (your FPO uses EventBridge)","Rate limiting: token bucket, leaky bucket, sliding window log — with code sketch","DESIGN: URL Shortener (Bitly) — full HLD from scratch on paper, 45 min spoken"],
       lc:"20 problems — all timed. Target: Easy <12 min, Medium <25 min.",
       daily:"6:00–7:00 AM SD mock · 7:00–8:30 AM timed LeetCode · 8:30–9:00 AM Pramp session"},
    ],
  },
  {
    id:"p2", n:2, color:"#0EA5E9", dark:"#0369A1", bg:"#F0F9FF", border:"#BAE6FD",
    icon:"⚡", name:"Phase 2 — Core Patterns",
    weeks:"Weeks 5–8", period:"Aug 12 – Sep 8, 2027", durationWeeks:4,
    goal:"Master the 14 patterns covering 90% of interview questions. Graphs and DP are the hardest — spend extra time. By Week 8 you should recognise the pattern within 30 seconds of reading any Medium problem.",
    weekTopics:[
      {w:5,topic:"Graphs — BFS · DFS · Topological Sort · Union-Find",
       dsa:["Graph representations: adjacency list vs matrix — when each is better","DFS: connected components, cycle detection, path finding, DFS on matrix","BFS: shortest path unweighted, level-by-level traversal, bi-directional BFS","Topological Sort: course schedule, build order — Kahn's algorithm + DFS","Union-Find (DSU): number of provinces, redundant connection, accounts merge"],
       sd:["Microservices: service decomposition, bounded contexts, inter-service communication","Service Discovery: Eureka, Consul — how services find each other at scale","Circuit Breaker: Resilience4j patterns — your FPO uses this in production!"],
       lc:"20 problems — 5 Easy + 12 Medium + 3 Hard. Focus: Graphs.",
       daily:"6:00–7:00 AM course/theory · 7:00–8:30 AM LeetCode 4 problems · 8:30–9:00 AM review"},
      {w:6,topic:"Heaps · Priority Queues · Top-K · Merge K",
       dsa:["Min-heap, max-heap: heapify, insert, extract-min — implement once from scratch","K largest elements, K closest points, top K frequent elements — heap patterns","PriorityQueue in Java with custom Comparator — essential for interviews","Merge K sorted lists, find median from data stream, sliding window median"],
       sd:["Saga pattern: orchestration vs choreography — your FPO Step Functions = Saga!","Distributed tracing: Zipkin, Jaeger, OpenTelemetry — you use Datadog in FPO","Event Sourcing: immutable event log, replay state, CQRS relationship","DESIGN: WhatsApp — WebSockets, message storage, delivery receipts, E2E encryption"],
       lc:"20 problems — 5 Easy + 10 Medium + 5 Hard. Focus: Heaps.",
       daily:"6:00–7:00 AM course/theory · 7:00–8:30 AM LeetCode 4 problems · 8:30–9:00 AM review"},
      {w:7,topic:"Dynamic Programming — 1D · Knapsack · Subsequences",
       dsa:["DP mindset: identify overlapping subproblems + optimal substructure first","1D DP: Fibonacci, climbing stairs, house robber, jump game, min cost stairs","Classic DP: coin change, unbounded knapsack, partition equal subset sum","Subsequences: LCS, longest increasing subsequence, edit distance","String DP: word break, palindrome partitioning, regular expression matching"],
       sd:["Consistent hashing: why it matters, virtual nodes, load distribution","Leader election: Raft simplified — leader, followers, term, heartbeat","Replication: synchronous vs asynchronous, quorum reads/writes, replica lag","DESIGN: Netflix / Video Streaming — encoding pipeline, CDN, adaptive bitrate, recommendations"],
       lc:"20 problems — 2 Easy + 10 Medium + 8 Hard. DP is hard — expect to struggle.",
       daily:"6:00–7:30 AM DP theory (extra 30 min) · 7:30–9:00 AM LeetCode DP problems"},
      {w:8,topic:"MOCK WEEK 2 · System Design Deep Dive",
       dsa:["Speed drill: 30 Medium problems across ALL patterns this week — push hard","Identify your 3 weakest patterns → drill 5 targeted problems on each one","Simulated interview: 2 problems, 45 min total, talk out loud every step"],
       sd:["DESIGN: Twitter/X — tweet fanout, timeline, celebrity problem, trending, real-time","DESIGN: Uber / Ride Sharing — geolocation indexing, driver matching, surge, ETA","DESIGN: Distributed Cache (Redis) — consistent hashing, eviction, cache stampede","Estimation: 10 back-of-envelope calculations — QPS, storage, bandwidth, latency"],
       lc:"30 problems this week — push hard. End of Phase 2 target: 160 total.",
       daily:"6:00–7:00 AM SD mock · 7:00–8:30 AM timed sprint · 8:30–9:00 AM Pramp session"},
    ],
  },
  {
    id:"p3", n:3, color:"#E11D48", dark:"#BE123C", bg:"#FFF1F2", border:"#FECDD3",
    icon:"🔥", name:"Phase 3 — Advanced + Simulation",
    weeks:"Weeks 9–12", period:"Sep 9 – Oct 6, 2027", durationWeeks:4,
    goal:"Hard problems and full simulation. Medium should feel comfortable now. Shift focus to Hard problems, system design mocks, and peer interviews on Pramp. Deliberate practice under interview pressure.",
    weekTopics:[
      {w:9,topic:"Advanced DP · 2D DP · Backtracking",
       dsa:["2D DP: unique paths, minimum path sum, longest common subsequence grid","Advanced DP: burst balloons, strange printer, regular expression matching","Backtracking: N-Queens, Sudoku solver, word search II, combination sum","DP + Backtracking overlap: word break II, palindrome partitioning II"],
       sd:["DESIGN: Google Docs — real-time collaboration, Operational Transformation, CRDT","DESIGN: Notification System — multi-channel, deduplication, priorities (FPO has this!)","Search autocomplete: trie in distributed system, caching top prefixes, ranking"],
       lc:"15 problems — 0 Easy + 5 Medium + 10 Hard. Expect most attempts to fail first try.",
       daily:"6:00–7:30 AM DP/backtracking theory · 7:30–9:00 AM LeetCode Hard problems"},
      {w:10,topic:"Tries · Advanced Sliding Window · Binary Search Variants",
       dsa:["Trie: insert, search, startsWith from scratch — autocomplete, word dictionary problems","Modified binary search: rotated sorted array, find peak element, kth smallest in BST","Advanced sliding window: minimum window with k distinct, max consecutive ones III","Intervals: merge intervals, meeting rooms I+II, non-overlapping, calendar conflicts"],
       sd:["DESIGN: Rate Limiter distributed — token bucket, fixed window, sliding window log","DESIGN: Search Engine / Web Crawler — distributed crawling, indexing, PageRank simplified","DESIGN: Gaming Leaderboard — Redis sorted sets, real-time updates, sharding"],
       lc:"20 problems — 0 Easy + 8 Medium + 12 Hard. Track solve time every problem.",
       daily:"6:00–7:00 AM theory · 7:00–8:30 AM LeetCode Hard · 8:30–9:00 AM review"},
      {w:11,topic:"FULL MOCK WEEK — Real Interview Simulation Every Day",
       dsa:["Mon/Wed/Fri: full 45-min coding mock — 2 problems, strict timer, talk out loud","Tue/Thu: speed drill — 5 Medium problems in 90 min (18 min each), no hints","Sat: 3-hour mega session — simulate full interview day (coding + design + behavioral)"],
       sd:["Mon: Design Twitter from scratch 45 min spoken — no notes","Wed: Design Uber from scratch 45 min spoken — draw paper first","Fri: Design FPO Flight Optimiser — your real system, walk it through perfectly","Sat: Pramp or interviewing.io session with a real engineer"],
       lc:"20 timed problems — only Medium and Hard. End target: 240 total.",
       daily:"6:00–9:00 AM full mock every day — no theory this week, only simulation"},
      {w:12,topic:"Advanced System Design · Distributed Systems Deep Dive",
       dsa:["Consolidation: re-solve your personal top-20 hardest problems at speed","No new patterns — only revision, speed improvement, multiple approaches","Practice: given any problem, write 2 different solutions and compare their trade-offs"],
       sd:["DESIGN: Payment System — idempotency keys, double-spend prevention, 2-phase commit","DESIGN: Flight Booking System — your FPO is the answer! Relate every component directly","DESIGN: Multi-tenant SaaS — your FPO IS multi-tenant, walk through it perfectly","Distributed consensus: Raft simplified, quorum reads/writes, split brain scenarios"],
       lc:"15 problems — all Hard. Target: at least 50% solved within 40 min.",
       daily:"6:00–7:00 AM SD theory · 7:00–8:30 AM Hard LeetCode · 8:30–9:00 AM Pramp"},
    ],
  },
  {
    id:"p4", n:4, color:"#16A34A", dark:"#15803D", bg:"#F0FDF4", border:"#BBF7D0",
    icon:"🔁", name:"Phase 4 — Ongoing Until Offer",
    weeks:"Week 13+", period:"Oct 7, 2027 → Until Job Offer 🎯", durationWeeks:null,
    goal:"Maintain sharpness while actively interviewing. You are in the pipeline now — every real interview teaches more than a week of solo practice. Log every question, solve it perfectly the same evening.",
    weekTopics:[
      {w:"13–14",topic:"2-Week Rotation: DSA Pattern Drill",
       dsa:["Pick your 2 weakest patterns from Phases 1–3 — drill 20 problems on each","Daily minimum: 3 LeetCode problems (1 Easy warm-up + 2 Medium) — non-negotiable","Re-solve any problem you got in a real interview — understand it completely","Add to notebook: every pattern that appeared in real interviews, weighted by frequency"],
       sd:["Revise 5 system designs — pick ones most relevant to companies you applied to","Daily: 15 min ByteByteGo newsletter or System Design Primer — stay sharp","Polish your FPO system design answer — it comes up more than any other topic"],
       lc:"20 problems/week — 5 Easy + 12 Medium + 3 Hard. Maintain the rhythm.",
       daily:"6:00–7:00 AM LeetCode 3 problems · 7:00–8:30 AM SD or interview review · 8:30–9:00 AM reflect"},
      {w:"15",topic:"Mock Week — Every 3rd Week",
       dsa:["Full mock: 2 LeetCode Medium/Hard in 45 min, spoken out loud, strict timer","Pramp.com: 1 peer mock session this week — different partner each time","Record yourself: watch for filler words, pacing, problem-approach communication","After every real interview: write every question asked, solve fully that evening"],
       sd:["1 full system design mock: 45 min spoken, paper diagram first","Review your weakest system design from recent real interviews","Perfect: Design the most complex system you have built — your FPO answer"],
       lc:"15 problems — focused on topics from recent real interviews.",
       daily:"6:00–7:30 AM mock session · 7:30–9:00 AM targeted problem drill"},
      {w:"🗓",topic:"On Interview Weeks — Special Schedule",
       dsa:["Day before: 3 Easy problems only — no new patterns, just warm your hands","Morning of interview: 1 Easy problem to get warm, then stop at 6:30 AM","After interview: write every question asked — solve fully that evening","Never cram the night before — your 3+ months of prep is already done"],
       sd:["Day before: read your own 1-page system design cheat sheet — nothing new","Prepare your FPO 90-second intro: rehearsed, confident, quantified","Behavioral STAR: 3 stories cold — DLH NullRef bug, LZA migration, Cognito 9 pools"],
       lc:"Interview day: 1 Easy problem 6:00–6:30 AM only. Save mental energy.",
       daily:"Interview day: 6:00–6:30 AM warm-up only. Mental preparation after."},
    ],
  },
];

const DSA_COURSES = [
  {h:20,title:"Master the Coding Interview: DS + Algorithms",by:"Andrei Neagoie (ZTM)",rating:4.6,stu:"250K+",url:"https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/",tag:"🥇 DO FIRST",tc:"#15803D",why:"Interview-first teaching — every structure taught asking when an interviewer would ask this. 250K students. Best for actual job interviews."},
  {h:18,title:"Python DS & Algorithms + LeetCode Exercises",by:"Scott Barrett",rating:4.8,stu:"60K+",url:"https://www.udemy.com/course/data-structures-algorithms-python/",tag:"🥈 4.8 PATTERNS",tc:"#0369A1",why:"Highest-rated DSA+LeetCode course on Udemy. 100+ exercises integrated into every lesson. Best for pattern recognition."},
  {h:12,title:"JavaScript Algorithms and DS Masterclass",by:"Colt Steele",rating:4.7,stu:"350K+",url:"https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/",tag:"BEST VISUALS",tc:"#7C3AED",why:"Best animations for sorting, trees, graphs. Use when you cannot visualise an algorithm from code alone."},
  {h:8,title:"Master the Coding Interview: Big Tech (FAANG)",by:"Andrei Neagoie (ZTM)",rating:4.6,stu:"40K+",url:"https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/",tag:"FAANG LEVEL",tc:"#DC2626",why:"Hard patterns specific to FAANG. Do in Phase 3 after foundations are solid."},
];

const SD_COURSES = [
  {h:5,title:"Mastering the System Design Interview",by:"Frank Kane (ex-Amazon Hiring Manager)",rating:4.6,stu:"47K+",url:"https://www.udemy.com/course/system-design-interview-prep/",tag:"🥇 DO FIRST",tc:"#15803D",why:"Ex-Amazon hiring manager. Teaches the exact framework interviewers use. 6 full mock design walkthroughs. Best ROI per hour."},
  {h:20,title:"Software Architecture and Design of Modern Large Scale Systems",by:"Michael Pogrebinsky",rating:4.6,stu:"93K+",url:"https://www.udemy.com/course/software-architecture-design-of-modern-large-scale-systems/",tag:"DEEP DIVE",tc:"#0369A1",why:"93K students. Deep distributed systems — CQRS, Event Sourcing, Saga, API Gateway. Maps directly to FPO Cloud patterns."},
  {h:18,title:"System Design Interview Guide for Software Architecture",by:"Mikhail Smarshchok",rating:4.5,stu:"25K+",url:"https://www.udemy.com/course/system-design-a-comprehensive-guide/",tag:"20+ SYSTEMS",tc:"#7C3AED",why:"20+ complete system designs. One per day during Phase 2 and 3. Best breadth coverage of classic design questions."},
  {h:12,title:"Pragmatic System Design",by:"Bogdan Stashchuk",rating:4.5,stu:"15K+",url:"https://www.udemy.com/course/pragmatic-system-design/",tag:"TRADE-OFFS",tc:"#D97706",why:"Real Netflix, Uber, Airbnb architectures with honest trade-off discussion. Do in Phase 3 for senior-level depth."},
];

const FREE_RESOURCES = [
  {title:"NeetCode 150",url:"https://neetcode.io/practice",desc:"The best curated 150 LeetCode problems. Solve all 150 — this is your primary problem bank."},
  {title:"System Design Primer",url:"https://github.com/donnemartin/system-design-primer",desc:"100K+ GitHub stars. Free. Every concept with diagrams. Reference throughout all phases."},
  {title:"ByteByteGo Newsletter",url:"https://bytebytego.com/",desc:"Alex Xu weekly system design diagrams. Free. Best visual explanations available."},
  {title:"Pramp.com Peer Mocks",url:"https://www.pramp.com/",desc:"Free peer mock interviews. Do 1 session per week from Phase 2 onwards."},
  {title:"LeetCode Top Interview 150",url:"https://leetcode.com/studyplan/top-interview-150/",desc:"Cross-reference with NeetCode 150. Together they cover every interview pattern."},
  {title:"interviewing.io FAANG Mocks",url:"https://interviewing.io/",desc:"Mock with real FAANG engineers. First session free. Do 2-3 sessions in Phase 3."},
];

function weeksElapsed(){
  const now = new Date();
  const diff = Math.floor((now - START_DATE) / (7 * 24 * 60 * 60 * 1000));
  return Math.max(0, diff);
}

function currentPhaseNum(weeks){
  if (weeks < 4)  return 1;
  if (weeks < 8)  return 2;
  if (weeks < 12) return 3;
  return 4;
}

function CourseCard({c}){
  const isPri = c.tag.startsWith("🥇");
  return(
    <a href={c.url} target="_blank" rel="noopener noreferrer"
      style={{display:"block",textDecoration:"none",background:"#fff",
        border:"1.5px solid "+(isPri?"#16A34A55":"#E2E8F0"),
        borderRadius:11,padding:"12px 14px",transition:"all 0.18s",
        boxShadow:isPri?"0 3px 12px rgba(22,163,74,0.08)":"0 1px 3px rgba(0,0,0,0.04)"}}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 6px 18px rgba(0,0,0,0.1)";}}
      onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="0 1px 3px rgba(0,0,0,0.04)";}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:8,marginBottom:4}}>
        <span style={{fontSize:12,fontWeight:800,color:"#0F172A",lineHeight:1.4,flex:1}}>{c.title}</span>
        <span style={{fontSize:9,fontWeight:800,padding:"2px 7px",borderRadius:20,background:c.tc+"15",color:c.tc,border:"1px solid "+c.tc+"30",whiteSpace:"nowrap",flexShrink:0}}>{c.tag}</span>
      </div>
      <div style={{fontSize:11,color:"#64748B",marginBottom:6}}>by {c.by}</div>
      <div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:7}}>
        <span style={{fontSize:13,fontWeight:900,color:"#6366F1"}}>⏱ {c.h}h</span>
        <span style={{fontSize:11,fontWeight:700,color:"#F59E0B"}}>★ {c.rating}</span>
        <span style={{fontSize:11,color:"#94A3B8"}}>👥 {c.stu}</span>
      </div>
      <div style={{fontSize:11,color:"#4338CA",lineHeight:1.6,background:"#F0F4FF",borderRadius:7,padding:"7px 9px",border:"1px solid #E0E7FF"}}>💡 {c.why}</div>
      <div style={{marginTop:7,fontSize:10,color:"#94A3B8",textDecoration:"underline"}}>Open on Udemy →</div>
    </a>
  );
}

export default function App(){
  const [openPhase, setOpenPhase] = useState("p1");
  const [openWeek, setOpenWeek]   = useState(null);
  const [lcCount, setLcCount]     = useState(0);

  const weeksIn   = weeksElapsed();
  const curPhaseN = currentPhaseNum(weeksIn);

  const togglePhase = id => setOpenPhase(openPhase===id ? null : id);
  const toggleWeek  = key => setOpenWeek(openWeek===key ? null : key);

  const scrollTo = id => {
    setOpenPhase(id);
    setTimeout(()=>document.getElementById("ph-"+id)?.scrollIntoView({behavior:"smooth",block:"start"}),80);
  };

  const lcMilestones = [{n:80,label:"Phase 1"},{n:160,label:"Phase 2"},{n:240,label:"Phase 3"},{n:300,label:"Ready"},{n:400,label:"Elite"}];
  const nextMs = lcMilestones.find(m => m.n > lcCount) || lcMilestones[lcMilestones.length-1];
  const lcPct  = Math.min(100, Math.round(lcCount / nextMs.n * 100));

  return(
    <div style={{minHeight:"100vh",background:"#F0F4FF",fontFamily:"'Segoe UI',system-ui,-apple-system,sans-serif",color:"#0F172A",overflowX:"hidden"}}>

      <div style={{background:"linear-gradient(135deg,#1E1B4B 0%,#4338CA 48%,#1A365D 100%)",padding:"22px 14px 18px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,pointerEvents:"none",backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.055) 1px,transparent 1px)",backgroundSize:"22px 22px"}}/>
        <div style={{maxWidth:900,margin:"0 auto",position:"relative",zIndex:1}}>

          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
            <div style={{width:48,height:48,borderRadius:12,flexShrink:0,background:"linear-gradient(135deg,#6366F1,#8B5CF6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,boxShadow:"0 6px 20px rgba(99,102,241,0.5)"}}>🎯</div>
            <div>
              <div style={{fontSize:9,letterSpacing:"0.28em",textTransform:"uppercase",color:"rgba(255,255,255,0.32)",marginBottom:2}}>Sumit Rawal · After 400 Days · Actively Applying</div>
              <div style={{fontSize:"clamp(16px,5vw,27px)",fontWeight:900,color:"#fff",letterSpacing:"-0.02em",lineHeight:1.15}}>DSA + System Design</div>
              <div style={{fontSize:10,color:"rgba(255,255,255,0.36)",marginTop:2}}>Starts Jul 15, 2027 · 6:00 AM–9:00 AM daily · Until job offer 🏆</div>
            </div>
          </div>

          <div style={{display:"flex",alignItems:"center",gap:10,background:"rgba(99,102,241,0.18)",border:"1px solid rgba(99,102,241,0.4)",borderRadius:10,padding:"9px 14px",marginBottom:14}}>
            <span style={{fontSize:20}}>⏰</span>
            <div style={{flex:1}}>
              <div style={{fontSize:12,fontWeight:900,color:"#fff"}}>6:00 AM – 9:00 AM · Every Day · Until Job Offer</div>
              <div style={{fontSize:10,color:"rgba(255,255,255,0.42)"}}>Same habit from 400+ days · Apply daily, study daily, in parallel</div>
            </div>
            <div style={{textAlign:"right",flexShrink:0}}>
              <div style={{fontSize:12,fontWeight:800,color:"#A5B4FC"}}>3h/day</div>
              <div style={{fontSize:9,color:"rgba(255,255,255,0.38)"}}>open-ended</div>
            </div>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:7,marginBottom:14}}>
            {[["Jul 15","Start"],["Wk "+weeksIn,"Weeks In"],["Phase "+curPhaseN,"Current"],["4 Phases","Structure"],["3h/day","6–9 AM"],["🏆 Offer","End Goal"]].map(([v,l])=>(
              <div key={l} style={{background:"rgba(255,255,255,0.07)",borderRadius:9,padding:"8px 8px",border:"1px solid rgba(255,255,255,0.08)",textAlign:"center"}}>
                <div style={{fontSize:"clamp(12px,3.5vw,15px)",fontWeight:900,color:"#fff"}}>{v}</div>
                <div style={{fontSize:9,color:"rgba(255,255,255,0.36)",marginTop:1}}>{l}</div>
              </div>
            ))}
          </div>

          <div style={{height:10,borderRadius:5,overflow:"hidden",display:"flex",marginBottom:10,boxShadow:"inset 0 1px 3px rgba(0,0,0,0.3)"}}>
            {[["#6366F1",4],["#0EA5E9",4],["#E11D48",4],["#16A34A",100]].map(([col,fl],i)=>(
              <div key={i} style={{flex:fl,background:col}}/>
            ))}
          </div>

          <div style={{display:"flex",gap:6,overflowX:"auto",paddingBottom:2,scrollbarWidth:"none",WebkitOverflowScrolling:"touch"}}>
            {PHASES.map(p=>(
              <button key={p.id} onClick={()=>scrollTo(p.id)} style={{display:"flex",alignItems:"center",gap:5,background:curPhaseN===p.n?"rgba(255,255,255,0.18)":"rgba(255,255,255,0.07)",border:"1px solid "+(curPhaseN===p.n?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.12)"),borderRadius:20,padding:"4px 10px",cursor:"pointer",fontFamily:"inherit",whiteSpace:"nowrap",flexShrink:0}}>
                <div style={{width:6,height:6,borderRadius:"50%",background:p.color}}/>
                <span style={{fontSize:10,color:"rgba(255,255,255,0.7)",fontWeight:curPhaseN===p.n?800:400}}>
                  {p.icon} {p.name.split("—")[1]?.trim()||p.name} {curPhaseN===p.n?"← NOW":""}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{maxWidth:900,margin:"0 auto",padding:"12px 12px 48px"}}>

        <div style={{background:"#fff",borderRadius:12,border:"1px solid #E2E8F0",padding:"14px 16px",marginBottom:11,boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
          <div style={{fontSize:10,fontWeight:800,color:"#94A3B8",letterSpacing:"0.12em",marginBottom:10}}>🧩 LEETCODE TRACKER — UPDATE AS YOU GO</div>
          <div style={{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap",marginBottom:10}}>
            <span style={{fontSize:11,color:"#374151",fontWeight:600}}>Problems solved:</span>
            <input type="number" min="0" value={lcCount} onChange={e=>setLcCount(Math.max(0,parseInt(e.target.value)||0))}
              style={{width:75,padding:"5px 8px",borderRadius:7,border:"1.5px solid #E2E8F0",fontSize:15,fontWeight:800,color:"#6366F1",textAlign:"center",fontFamily:"inherit"}}/>
            <div style={{flex:1,minWidth:120}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:3,fontSize:10,color:"#64748B"}}>
                <span>{lcCount} solved</span>
                <span>Next: {nextMs.n} ({nextMs.label})</span>
              </div>
              <div style={{height:8,background:"#F1F5F9",borderRadius:4,overflow:"hidden"}}>
                <div style={{height:"100%",borderRadius:4,background:"linear-gradient(90deg,#6366F1,#8B5CF6)",width:lcPct+"%",transition:"width 0.5s"}}/>
              </div>
            </div>
          </div>
          <div style={{display:"flex",gap:7,flexWrap:"wrap"}}>
            {lcMilestones.map(m=>(
              <div key={m.n} style={{display:"flex",alignItems:"center",gap:4,background:lcCount>=m.n?"#F0FDF4":"#F8FAFC",borderRadius:20,padding:"3px 10px",border:"1px solid "+(lcCount>=m.n?"#BBF7D0":"#E2E8F0")}}>
                <span style={{fontSize:10,color:lcCount>=m.n?"#15803D":"#94A3B8"}}>{lcCount>=m.n?"✅ ":""}{m.n} — {m.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{background:"#fff",borderRadius:12,border:"1px solid #E2E8F0",padding:"14px 16px",marginBottom:11,boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
          <div style={{fontSize:10,fontWeight:800,color:"#94A3B8",letterSpacing:"0.12em",marginBottom:10}}>📅 WEEKLY RHYTHM — 6:00 AM TO 9:00 AM EVERY DAY</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(110px,1fr))",gap:7}}>
            {[{day:"Mon",icon:"🧩",f:"DSA Theory",s:"New pattern + 3 LC"},{day:"Tue",icon:"⏱",f:"DSA Timed",s:"4 problems, 25 min"},{day:"Wed",icon:"🏗",f:"System Design",s:"1 system from scratch"},{day:"Thu",icon:"💪",f:"DSA Push",s:"4 problems, harder"},{day:"Fri",icon:"🎯",f:"Mock Session",s:"Coding + Design"},{day:"Sat",icon:"🔁",f:"Full Mock",s:"2 DSA + 1 SD"},{day:"Sun",icon:"📝",f:"Review + Weak",s:"Re-solve hardest"}].map(({day,icon,f,s})=>(
              <div key={day} style={{background:"#F8FAFC",borderRadius:9,padding:"10px 8px",border:"1px solid #E2E8F0",textAlign:"center"}}>
                <div style={{fontSize:9,fontWeight:800,color:"#94A3B8",letterSpacing:"0.1em",marginBottom:3}}>{day}</div>
                <div style={{fontSize:18,marginBottom:3}}>{icon}</div>
                <div style={{fontSize:11,fontWeight:700,color:"#0F172A",marginBottom:2}}>{f}</div>
                <div style={{fontSize:9,color:"#64748B"}}>{s}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{display:"flex",flexDirection:"column",gap:9}}>
          {PHASES.map(p=>(
            <div key={p.id} id={"ph-"+p.id} style={{borderRadius:14,border:"2px solid "+(openPhase===p.id?p.color+"70":p.border),background:openPhase===p.id?p.bg:"#fff",boxShadow:openPhase===p.id?"0 8px 28px "+p.color+"12":"0 1px 5px rgba(0,0,0,0.05)",overflow:"hidden",transition:"all 0.25s"}}>
              <button onClick={()=>togglePhase(p.id)} style={{width:"100%",background:"none",border:"none",cursor:"pointer",padding:"14px 16px",display:"flex",alignItems:"center",gap:12,textAlign:"left",fontFamily:"inherit"}}>
                <div style={{width:50,height:50,borderRadius:13,flexShrink:0,background:openPhase===p.id?"linear-gradient(135deg,"+p.color+","+p.dark+")":p.bg,border:"2px solid "+p.color+"35",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,transition:"all 0.25s",boxShadow:openPhase===p.id?"0 4px 14px "+p.color+"40":"none"}}>{p.icon}</div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{display:"flex",gap:7,alignItems:"center",flexWrap:"wrap",marginBottom:2}}>
                    <span style={{fontSize:9,fontWeight:800,padding:"2px 7px",borderRadius:20,background:curPhaseN===p.n?"#DCFCE7":p.color+"18",color:curPhaseN===p.n?"#15803D":p.color,border:"1px solid "+(curPhaseN===p.n?"#86EFAC":p.color+"30")}}>{curPhaseN===p.n?"📍 YOU ARE HERE":p.weeks}</span>
                    <span style={{fontSize:"clamp(13px,4vw,15px)",fontWeight:900,color:"#0F172A"}}>{p.name}</span>
                  </div>
                  <div style={{fontSize:10,color:"#64748B",marginBottom:1}}>{p.period}</div>
                  <div style={{fontSize:10,color:p.color,fontStyle:"italic"}}>{p.goal.substring(0,75)}…</div>
                </div>
                <span style={{color:p.color,fontSize:22,flexShrink:0,transform:openPhase===p.id?"rotate(90deg)":"none",transition:"transform 0.2s",opacity:openPhase===p.id?1:0.3}}>›</span>
              </button>

              {openPhase===p.id&&(
                <div style={{borderTop:"2px solid "+p.color+"18",padding:"14px 16px 18px"}}>
                  <div style={{background:p.color+"09",border:"1px solid "+p.color+"22",borderRadius:10,padding:"11px 13px",marginBottom:12,fontSize:12,color:"#334155",lineHeight:1.8}}>
                    <strong style={{color:p.color,fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",display:"block",marginBottom:4}}>🎯 Phase Goal</strong>
                    {p.goal}
                  </div>

                  <div style={{fontSize:10,fontWeight:800,color:"#94A3B8",letterSpacing:"0.12em",marginBottom:8}}>
                    {p.id==="p4"?"ROTATION PATTERN — TAP EACH TO EXPAND":"WEEK-BY-WEEK — TAP EACH TO EXPAND"}
                  </div>

                  <div style={{display:"flex",flexDirection:"column",gap:7,marginBottom:14}}>
                    {p.weekTopics.map((wk,i)=>{
                      const wkey = p.id+"-"+i;
                      const wkOpen = openWeek===wkey;
                      return(
                        <div key={i} style={{borderRadius:10,border:"1px solid "+(wkOpen?p.color+"50":"#E2E8F0"),background:wkOpen?p.bg:"#FAFBFF",overflow:"hidden"}}>
                          <button onClick={()=>toggleWeek(wkey)} style={{width:"100%",background:"none",border:"none",cursor:"pointer",padding:"10px 13px",display:"flex",alignItems:"center",gap:10,textAlign:"left",fontFamily:"inherit"}}>
                            <div style={{width:32,height:32,borderRadius:8,background:p.color+"18",color:p.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:900,flexShrink:0}}>
                              {typeof wk.w==="number"?"W"+wk.w:String(wk.w).substring(0,3)}
                            </div>
                            <div style={{flex:1}}>
                              <div style={{fontSize:12,fontWeight:700,color:"#0F172A"}}>{wk.topic}</div>
                              <div style={{fontSize:10,color:"#94A3B8",marginTop:1}}>{wk.lc}</div>
                            </div>
                            <span style={{color:p.color,fontSize:16,transform:wkOpen?"rotate(90deg)":"none",transition:"transform 0.2s",opacity:0.6}}>›</span>
                          </button>
                          {wkOpen&&(
                            <div style={{borderTop:"1px solid "+p.color+"20",padding:"12px 13px"}}>
                              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:10,marginBottom:10}}>
                                <div style={{background:"#EEF2FF",borderRadius:9,padding:"10px 12px"}}>
                                  <div style={{fontSize:10,fontWeight:800,color:"#4338CA",letterSpacing:"0.08em",marginBottom:6}}>🧩 DSA TOPICS</div>
                                  {wk.dsa.map((item,j)=>(
                                    <div key={j} style={{display:"flex",gap:6,padding:"2px 0"}}>
                                      <span style={{color:"#6366F1",fontSize:9,flexShrink:0,marginTop:2,fontWeight:700}}>▸</span>
                                      <span style={{fontSize:10,color:"#374151",lineHeight:1.6}}>{item}</span>
                                    </div>
                                  ))}
                                </div>
                                <div style={{background:"#F0F9FF",borderRadius:9,padding:"10px 12px"}}>
                                  <div style={{fontSize:10,fontWeight:800,color:"#0369A1",letterSpacing:"0.08em",marginBottom:6}}>🏗 SYSTEM DESIGN</div>
                                  {wk.sd.map((item,j)=>(
                                    <div key={j} style={{display:"flex",gap:6,padding:"2px 0"}}>
                                      <span style={{color:"#0EA5E9",fontSize:9,flexShrink:0,marginTop:2,fontWeight:700}}>▸</span>
                                      <span style={{fontSize:10,color:"#374151",lineHeight:1.6}}>{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div style={{background:"#FFFBEB",border:"1px solid #FDE68A",borderRadius:8,padding:"8px 11px",marginBottom:7}}>
                                <span style={{fontSize:10,fontWeight:800,color:"#D97706"}}>🎯 LeetCode: </span>
                                <span style={{fontSize:11,color:"#78350F"}}>{wk.lc}</span>
                              </div>
                              <div style={{background:"#F8FAFF",border:"1px solid #E0E7FF",borderRadius:8,padding:"8px 11px"}}>
                                <span style={{fontSize:10,fontWeight:800,color:"#4F46E5"}}>⏰ Daily 6-9 AM: </span>
                                <span style={{fontSize:11,color:"#374151"}}>{wk.daily}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{background:"#fff",borderRadius:12,border:"1px solid #E2E8F0",padding:"14px 16px",marginBottom:11,marginTop:9,boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
          <div style={{fontSize:10,fontWeight:800,color:"#94A3B8",letterSpacing:"0.12em",marginBottom:12}}>📚 COURSES + FREE RESOURCES</div>
          <div style={{fontSize:10,fontWeight:700,color:"#6366F1",letterSpacing:"0.08em",marginBottom:8}}>🧩 DSA COURSES</div>
          <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:14}}>{DSA_COURSES.map((c,i)=><CourseCard key={i} c={c}/>)}</div>
          <div style={{fontSize:10,fontWeight:700,color:"#0EA5E9",letterSpacing:"0.08em",marginBottom:8}}>🏗 SYSTEM DESIGN COURSES</div>
          <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:14}}>{SD_COURSES.map((c,i)=><CourseCard key={i} c={c}/>)}</div>
          <div style={{fontSize:10,fontWeight:700,color:"#15803D",letterSpacing:"0.08em",marginBottom:8}}>🆓 FREE RESOURCES</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:8}}>
            {FREE_RESOURCES.map((r,i)=>(
              <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" style={{display:"block",textDecoration:"none",background:"#F0FDF4",borderRadius:9,padding:"10px 12px",border:"1px solid #BBF7D0",transition:"all 0.15s"}} onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-1px)";}} onMouseLeave={e=>{e.currentTarget.style.transform="none";}}>
                <div style={{fontSize:11,fontWeight:700,color:"#0F172A",marginBottom:3}}>{r.title}</div>
                <div style={{fontSize:10,color:"#64748B",lineHeight:1.6,marginBottom:5}}>{r.desc}</div>
                <div style={{fontSize:10,color:"#15803D",textDecoration:"underline"}}>Open free resource →</div>
              </a>
            ))}
          </div>
        </div>

        <div style={{background:"linear-gradient(135deg,#F0FDF4,#ECFDF5)",borderRadius:12,border:"1px solid #BBF7D0",padding:"14px 16px",marginBottom:11,boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
          <div style={{fontSize:10,fontWeight:800,color:"#15803D",letterSpacing:"0.12em",marginBottom:10}}>🚀 FPO EXPERIENCE = SYSTEM DESIGN ANSWERS</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))",gap:7}}>
            {[["API Gateway","Load Balancer + Rate Limiter + Auth"],["AWS Lambda","Microservice / Function-as-a-Service"],["Step Functions","Saga Pattern / Workflow Orchestration"],["EventBridge + Kafka","Message Queue / Event-Driven Arch"],["DynamoDB single-table","NoSQL Design + Partition Keys"],["S3 + 3-day archive","Object Storage + Tiered Storage"],["Cognito + OAuth2","Auth at Scale + Multi-tenant RBAC"],["CloudWatch + Datadog","Monitoring + Distributed Tracing"],["Multi-tenant airlines","Multi-tenancy Architecture Pattern"],["7 AWS Certs + CKA","Instant credibility in every interview"]].map(([tech,concept])=>(
              <div key={tech} style={{background:"rgba(255,255,255,0.7)",borderRadius:8,padding:"8px 10px",border:"1px solid #DCFCE7"}}>
                <div style={{fontSize:11,fontWeight:700,color:"#0F172A"}}>{tech}</div>
                <div style={{fontSize:10,color:"#64748B"}}>→ {concept}</div>
              </div>
            ))}
          </div>
          <div style={{marginTop:10,padding:"10px 12px",background:"rgba(255,255,255,0.8)",borderRadius:8,border:"1px solid #BBF7D0",fontSize:11,color:"#166534",lineHeight:1.75}}>
            💡 <strong>Start every system design question:</strong> "At FPO Cloud I designed a real-time multi-tenant flight trajectory SaaS for Lufthansa, American Airlines and FedEx using Lambda microservices, Step Functions, DynamoDB, Kafka, with 7 AWS certs..." — that puts you in the top 5% before you draw a single diagram.
          </div>
        </div>

        <div style={{background:"#fff",borderRadius:12,border:"1px solid #E2E8F0",padding:"16px 14px",boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
          <div style={{fontSize:10,fontWeight:800,color:"#94A3B8",letterSpacing:"0.12em",marginBottom:12}}>⚡ 6 RULES — STUDY DAILY, APPLY DAILY</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(185px,1fr))",gap:12}}>
            {[["⏰","6 AM–9 AM every day","Same habit from 400+ days. The chain is built. Don't break it — it is your biggest competitive edge."],["📤","Apply every single day","1 application minimum per day. Study and apply in parallel — do not wait until you feel ready."],["🚫","25 min struggle rule","Attempt every problem 25 min before hints. No shortcuts. The struggle IS the learning."],["🗣","Talk while solving","Verbalise your full approach before touching the keyboard. Interviewers score communication."],["📝","Log every interview","After every real interview: write all questions asked. Solve them perfectly the same evening."],["📅","Mock every Sunday","Every Sunday: 1 coding mock 45 min + 1 system design mock 45 min. No exceptions."]].map(([icon,title,desc])=>(
              <div key={title} style={{display:"flex",gap:10,alignItems:"flex-start"}}>
                <span style={{fontSize:20,flexShrink:0,lineHeight:1.3}}>{icon}</span>
                <div>
                  <div style={{fontSize:12,fontWeight:700,color:"#0F172A",marginBottom:2}}>{title}</div>
                  <div style={{fontSize:11,color:"#64748B",lineHeight:1.65}}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{marginTop:12,textAlign:"center",paddingBottom:24}}>
          <div style={{fontSize:14,color:"#6366F1",fontWeight:900,marginBottom:4}}>🏆 Goal: New Job Offer</div>
          <div style={{fontSize:10,color:"#94A3B8",letterSpacing:"0.1em"}}>DSA + SYSTEM DESIGN · 6:00 AM–9:00 AM · FROM JUL 15, 2027 · ENDS AT OFFER</div>
        </div>
      </div>
    </div>
  );
}