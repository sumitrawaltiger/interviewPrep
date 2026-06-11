import { useState } from "react";

const START = new Date("2027-07-15");

// 11 courses one-after-another · 3h/day = 1.5h course + 1.5h LeetCode/practice
// days = ceil(courseHours / 1.5)
const COURSES = [
 {seq:1,cat:"DSA",color:"#6366F1",dark:"#4338CA",bg:"#EEF2FF",border:"#C7D2FE",
  title:"Master the Coding Interview: Data Structures + Algorithms",
  by:"Andrei Neagoie (Zero To Mastery)",hours:20,rating:4.7,stu:"250K+",days:14,
  start:"Jul 15",end:"Jul 28, 2027",offset:0,
  url:"https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/",
  tag:"START HERE",
  why:"Interview-first teaching. Andrei frames every data structure around 'when would an interviewer ask this?' Big O, Arrays, Stacks, Queues, Linked Lists, Trees, Graphs, Sorting — all with interview context. Code in JS, Python, Java, C#. 250K students. The perfect course to begin with.",
  covers:["Big O: time and space complexity — analyse every solution you write","Arrays, Strings, Hash Tables — Two Pointers, Sliding Window, Frequency Counter","Stacks, Queues, Linked Lists — implementation and interview patterns","Trees, Graphs — DFS, BFS, traversals, cycle detection","Sorting: QuickSort, MergeSort — know trade-offs for interviews","Interview communication framework — how to talk through any problem"],
  lc:"Target 20 Easy. No timer yet — understand patterns first.",daily:"6:00–7:30 AM course · 7:30–9:00 AM 3 LeetCode Easy"},

 {seq:2,cat:"DSA",color:"#0EA5E9",dark:"#0369A1",bg:"#F0F9FF",border:"#BAE6FD",
  title:"Python Data Structures & Algorithms + LeetCode Exercises",
  by:"Scott Barrett",hours:18,rating:4.8,stu:"60K+",days:12,
  start:"Jul 29",end:"Aug 9, 2027",offset:14,
  url:"https://www.udemy.com/course/data-structures-algorithms-python/",
  tag:"4.8★ HIGHEST RATED",
  why:"Highest-rated DSA + LeetCode course on Udemy. 100+ LeetCode exercises are baked directly into every lesson — you solve real problems immediately after each concept. Scott's visual animations make patterns click. Even if you don't write Python, use this for pattern recognition.",
  covers:["100+ LeetCode exercises integrated into every lesson — not just theory","Visual animations for every data structure and algorithm","Linked Lists: singly and doubly — all pointer manipulation patterns","Trees: BST — insert, delete, validate, with real LeetCode problems","Sorting deep dive: Bubble, Selection, Merge, Quick with code","Hash Tables: collision handling, implementation from scratch"],
  lc:"Target 25 problems (18 Easy + 7 Medium). Start timing: Easy < 15 min.",daily:"6:00–7:30 AM course · 7:30–9:00 AM 3 LeetCode problems"},

 {seq:3,cat:"DSA",color:"#7C3AED",dark:"#6D28D9",bg:"#F5F3FF",border:"#DDD6FE",
  title:"JavaScript Algorithms and Data Structures Masterclass",
  by:"Colt Steele",hours:22,rating:4.7,stu:"350K+",days:15,
  start:"Aug 10",end:"Aug 24, 2027",offset:26,
  url:"https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/",
  tag:"BEST VISUALS · 350K STUDENTS",
  why:"Most enrolled DSA course on Udemy with 350K+ students. Colt's animations for sorting, trees, and graphs are the clearest anywhere. Even if you don't write JavaScript, use this for the exceptional visual explanations. Best course for recursion and sorting algorithm intuition.",
  covers:["Problem solving approach: patterns before memorisation","Recursion: call stack, helper method, pure recursion — with call stack animations","Advanced sorting: Radix Sort, Counting Sort — beyond comparison-based","Binary Search Trees: insert, find, traversal — visual animated walkthrough","Binary Heaps, Priority Queue: visual step-by-step implementation","Graphs: adjacency list vs matrix, DFS, BFS — all visualised"],
  lc:"Target 30 problems (15 Easy + 12 Medium + 3 Hard). Medium < 25 min.",daily:"6:00–7:30 AM course · 7:30–9:00 AM 3 LeetCode problems"},

 {seq:4,cat:"DSA",color:"#E11D48",dark:"#BE123C",bg:"#FFF1F2",border:"#FECDD3",
  title:"Data Structures & Algorithms: Level-up for Coding Interviews",
  by:"Prateek Narang (ex-Google Senior Engineer)",hours:25,rating:4.5,stu:"45K+",days:17,
  start:"Aug 25",end:"Sep 10, 2027",offset:41,
  url:"https://www.udemy.com/course/cpp-data-structures-algorithms-levelup-prateek-narang/",
  tag:"EX-GOOGLE · ADVANCED PATTERNS",
  why:"ex-Google Senior Engineer. The best advanced patterns course on Udemy. 'Brute force first, then optimise' approach mirrors exactly how real interviews unfold. 150+ problems covering every pattern that appears in FAANG interviews. Code in C++ but patterns translate to any language.",
  covers:["Brute force → optimise approach for every single problem","Advanced DP: 2D DP, DP on trees, knapsack variants, interval DP","Advanced Graphs: Dijkstra, Bellman-Ford, Floyd-Warshall, MST","Tries: autocomplete, word search, prefix matching problems","Backtracking: pruning, state-space search, N-Queens, Sudoku","150+ carefully selected problems — each teaching a specific pattern"],
  lc:"Target 35 problems (5 Easy + 20 Medium + 10 Hard). All timed.",daily:"6:00–7:30 AM course · 7:30–9:00 AM 3 LeetCode (mix Medium + Hard)"},

 {seq:5,cat:"DSA",color:"#D97706",dark:"#B45309",bg:"#FFFBEB",border:"#FDE68A",
  title:"Mastering Data Structures & Algorithms using C and C++",
  by:"Abdul Bari",hours:58,rating:4.7,stu:"229K+",days:39,
  start:"Sep 11",end:"Oct 19, 2027",offset:58,
  url:"https://www.udemy.com/course/datastructurescncpp/",
  tag:"LEGENDARY · 58.5H · 229K STUDENTS",
  why:"The legendary deep-foundations course. 229K students. Abdul Bari explains HOW data structures work internally at a level no other course touches. Even though coded in C/C++, the conceptual depth is language-agnostic. By the end you understand data structures the way interviewers who design these questions understand them.",
  covers:["Physical vs logical data structures — memory model fundamentals","Recursion: recurrence relation, time complexity analysis from first principles","Every sorting algorithm with whiteboard complexity proofs","Trees: AVL, Red-Black — self-balancing internals and rotation logic","Graphs: DFS, BFS, Spanning Trees, Shortest Paths — deep whiteboard proofs","Hashing: collision resolution, hash function design, load factor"],
  lc:"Target 40 problems (3 Easy + 20 Medium + 17 Hard). End target: 150+ total.",daily:"6:00–7:30 AM course · 7:30–9:00 AM 3 LeetCode Hard problems"},

 {seq:6,cat:"DSA",color:"#DC2626",dark:"#B91C1C",bg:"#FEF2F2",border:"#FECACA",
  title:"Master the Coding Interview: Big Tech (FAANG Interviews)",
  by:"Andrei Neagoie (Zero To Mastery)",hours:8,rating:4.6,stu:"40K+",days:6,
  start:"Oct 20",end:"Oct 25, 2027",offset:97,
  url:"https://www.udemy.com/course/master-the-coding-interview-big-tech-faang-interviews/",
  tag:"FAANG LEVEL · FINAL DSA PUSH",
  why:"The final DSA course before System Design. Covers hardest patterns from real FAANG interviews: complex graph problems, multi-dimensional DP, and Big Tech interview simulation. Short at 8h — do in 6 days as a final sharpening push. Also covers salary negotiation which can get you 20–30% more.",
  covers:["FAANG-specific graph problems sourced from real Google/Meta interviews","Advanced DP patterns that appear at Amazon, Microsoft difficulty","Interview simulation: manage hints, time pressure, think-out-loud","Offer evaluation: total compensation comparison across companies","Salary negotiation tactics from real offers — often worth thousands more"],
  lc:"10 Hard problems timed — solve at least 5 independently < 40 min.",daily:"6:00–7:30 AM course · 7:30–9:00 AM Hard LeetCode sprint"},

 {seq:7,cat:"SD",color:"#16A34A",dark:"#15803D",bg:"#F0FDF4",border:"#BBF7D0",
  title:"Mastering the System Design Interview",
  by:"Frank Kane (ex-Amazon Bar Raiser & Hiring Manager)",hours:5,rating:4.6,stu:"47K+",days:4,
  start:"Oct 26",end:"Oct 29, 2027",offset:103,
  url:"https://www.udemy.com/course/system-design-interview-prep/",
  tag:"START SYSTEM DESIGN HERE",
  why:"Frank Kane is a former Amazon 'Bar Raiser' — the person who decides if a candidate clears the hiring bar. He teaches what interviewers actually look for, not what candidates think they look for. Updated 2025 to include Generative AI + Agentic AI system design. 6 full mock walkthroughs. Best ROI per hour on Udemy.",
  covers:["The exact evaluation framework Amazon/Google interviewers use","Horizontal vs vertical scaling — when to choose each in an interview","Load balancing, Redis caching, CDN, database sharding decisions","Designing GenAI systems with RAG and Agentic AI — 2025 update","6 mock system design interviews with real company questions","What separates passing from failing answers — insider view"],
  lc:"Design 1 system per day from scratch on paper — 45 min, spoken aloud.",daily:"6:00–7:30 AM course · 7:30–9:00 AM Design 1 system on paper"},

 {seq:8,cat:"SD",color:"#0EA5E9",dark:"#0369A1",bg:"#F0F9FF",border:"#BAE6FD",
  title:"Software Architecture & Design of Modern Large Scale Systems",
  by:"Michael Pogrebinsky",hours:20,rating:4.6,stu:"93K+",days:14,
  start:"Oct 30",end:"Nov 12, 2027",offset:107,
  url:"https://www.udemy.com/course/software-architecture-design-of-modern-large-scale-systems/",
  tag:"DEEP ARCHITECTURE · 93K STUDENTS",
  why:"93K students. The best deep-dive distributed systems course for senior/staff-level interviews. Covers CQRS, Event Sourcing, Microservices patterns, API Gateway, Saga — every pattern you already use in FPO Cloud. This course translates your FPO experience into the vocabulary that system design interviews use.",
  covers:["Distributed consensus, replication, consistency models — deep","Microservices: API Gateway, Service Discovery, Circuit Breaker (your FPO!)","CQRS and Event Sourcing — separating read and write models","Saga pattern: orchestration vs choreography (your Step Functions = Saga!)","Performance: latency, throughput, bottleneck identification, profiling","High availability: failover, disaster recovery, SLA design"],
  lc:"Design 2 systems per session — WhatsApp + Uber. Paper first, then compare.",daily:"6:00–7:30 AM course · 7:30–9:00 AM Design 2 systems daily"},

 {seq:9,cat:"SD",color:"#7C3AED",dark:"#6D28D9",bg:"#F5F3FF",border:"#DDD6FE",
  title:"System Design Interview Guide for Software Architecture",
  by:"Mikhail Smarshchok",hours:18,rating:4.5,stu:"25K+",days:12,
  start:"Nov 13",end:"Nov 24, 2027",offset:121,
  url:"https://www.udemy.com/course/system-design-a-comprehensive-guide/",
  tag:"20+ COMPLETE DESIGNS",
  why:"20+ complete system designs end-to-end: requirements, estimation, HLD, deep dive. Best breadth coverage of classic interview questions on Udemy. Covers URL Shortener, Twitter, WhatsApp, Netflix, Uber, Notification System, Rate Limiter, Search Autocomplete, Distributed Cache, Leaderboard, Web Crawler.",
  covers:["URL Shortener — hashing, redirect, analytics, 301 vs 302, scalability","Twitter — tweet fanout, celebrity problem, timeline, trending topics","WhatsApp — WebSockets, message storage, delivery receipts, E2E encryption","Netflix — encoding pipeline, CDN, adaptive bitrate, recommendations","Notification System — multi-channel, dedup, priorities (FPO uses this!)","Rate Limiter — token bucket, leaky bucket, sliding window distributed"],
  lc:"1 system design per day — 45 min on paper spoken aloud, then compare.",daily:"6:00–7:30 AM course · 7:30–9:00 AM 1 system design daily"},

 {seq:10,cat:"SD",color:"#E11D48",dark:"#BE123C",bg:"#FFF1F2",border:"#FECDD3",
  title:"Pragmatic System Design",
  by:"Bogdan Stashchuk",hours:12,rating:4.5,stu:"15K+",days:8,
  start:"Nov 25",end:"Dec 2, 2027",offset:133,
  url:"https://www.udemy.com/course/pragmatic-system-design/",
  tag:"REAL TRADE-OFFS",
  why:"Real production architectures from Netflix, Uber, Airbnb with honest trade-off discussion — explaining WHY certain choices were made in production. This is exactly what senior interviewers want to hear. Teaches you to reason about systems like an engineer, not just recite patterns you memorised.",
  covers:["Netflix: how they actually scaled — real decisions, not textbook version","Uber: real-time systems — production decisions and their real consequences","Airbnb: search, payments, trust & safety at scale","Trade-off framework: cost vs complexity vs consistency vs availability","When NOT to use microservices — an honest and rare assessment","Monolith → microservices migration: strategies and common failure modes"],
  lc:"Design Flight Booking System (your FPO!) + Payment System — 45 min each.",daily:"6:00–7:30 AM course · 7:30–9:00 AM FPO system design deep dive"},

 {seq:11,cat:"SD",color:"#D97706",dark:"#B45309",bg:"#FFFBEB",border:"#FDE68A",
  title:"System Design Masterclass 2026 — From FAANG Insiders",
  by:"FAANG Insiders Team",hours:8,rating:4.7,stu:"8K+",days:6,
  start:"Dec 3",end:"Dec 8, 2027",offset:141,
  url:"https://www.udemy.com/course/system-design-masterclass/",
  tag:"2026 EDITION · FINAL COURSE",
  why:"2026 edition from active FAANG engineers. Uses a specific 5-step template (Requirements → Capacity → API Design → HLD → Deep Dive) matching exactly what modern interviewers expect. Continuously updated with new system designs. The perfect final course before heavy interviewing — seals everything you've learned.",
  covers:["5-step interview template used at Google, Meta, Amazon in 2026","YouTube: video upload, encoding pipeline, CDN, recommendation at scale","Social media Newsfeed: fan-out on write vs read, caching, ranking","WhatsApp end-to-end using the FAANG template — full walkthrough","How to handle follow-up deep dives from senior interviewers","Continuously updated — new designs added regularly"],
  lc:"Full mock: design any system cold in 45 min spoken — daily this week.",daily:"6:00–7:30 AM course · 7:30–9:00 AM Full cold mock design daily"},
];

const TOTAL_HRS   = COURSES.reduce((s,c)=>s+c.hours,0);
const TOTAL_DAYS  = COURSES.reduce((s,c)=>s+c.days,0);
const DSA_COURSES = COURSES.filter(c=>c.cat==="DSA");
const SD_COURSES  = COURSES.filter(c=>c.cat==="SD");

function daysSinceStart(){
  return Math.max(0, Math.floor((new Date()-START)/(24*60*60*1000)));
}
function currentSeq(){
  const d = daysSinceStart();
  let off = 0;
  for(const c of COURSES){ if(d < off+c.days) return c.seq; off+=c.days; }
  return 12;
}
function progressPct(){
  return Math.min(100,(daysSinceStart()/TOTAL_DAYS*100).toFixed(1));
}

function Badge({text,color,bg,border}){
  return <span style={{fontSize:9,fontWeight:800,padding:"2px 8px",borderRadius:20,background:bg||color+"18",color,border:"1px solid "+(border||color+"30"),whiteSpace:"nowrap"}}>{text}</span>;
}

function CourseCard({c,isOpen,onToggle,isCurrent}){
  return(
    <div id={"c"+c.seq} style={{borderRadius:14,
      border:"2px solid "+(isOpen?c.color+"80":isCurrent?"#F59E0B80":c.border),
      background:isOpen?c.bg:"#fff",
      boxShadow:isOpen?`0 8px 28px ${c.color}15`:isCurrent?"0 0 0 3px #FEF3C7,0 2px 8px rgba(0,0,0,0.06)":"0 1px 5px rgba(0,0,0,0.05)",
      overflow:"hidden",transition:"all 0.25s"}}>

      {/* Header */}
      <button onClick={onToggle} style={{width:"100%",background:"none",border:"none",cursor:"pointer",
        padding:"13px 15px",display:"flex",alignItems:"center",gap:11,textAlign:"left",fontFamily:"inherit"}}>

        {/* Number badge */}
        <div style={{width:52,height:52,borderRadius:13,flexShrink:0,
          background:isOpen?`linear-gradient(135deg,${c.color},${c.dark})`:c.bg,
          border:`2px solid ${c.color}35`,
          display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
          transition:"all 0.25s",boxShadow:isOpen?`0 4px 14px ${c.color}45`:"none"}}>
          <span style={{fontSize:8,fontWeight:800,color:isOpen?"rgba(255,255,255,0.65)":c.color,letterSpacing:"0.08em"}}>{c.cat}</span>
          <span style={{fontSize:18,fontWeight:900,color:isOpen?"#fff":c.color,lineHeight:1}}>#{c.seq}</span>
        </div>

        <div style={{flex:1,minWidth:0}}>
          <div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap",marginBottom:3}}>
            {isCurrent&&<Badge text="📍 NOW" color="#D97706" bg="#FEF3C7" border="#FDE68A"/>}
            <span style={{fontSize:"clamp(11px,3.5vw,13px)",fontWeight:800,color:"#0F172A",lineHeight:1.35}}>{c.title}</span>
          </div>
          <div style={{fontSize:10,color:"#64748B",marginBottom:3}}>by {c.by}</div>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
            <span style={{fontSize:12,fontWeight:900,color:c.color}}>⏱ {c.hours}h</span>
            <span style={{fontSize:10,fontWeight:700,color:"#F59E0B"}}>★ {c.rating}</span>
            <span style={{fontSize:10,color:"#94A3B8"}}>👥 {c.stu}</span>
            <span style={{fontSize:10,color:"#94A3B8"}}>{c.start} → {c.end}</span>
          </div>
        </div>

        <div style={{textAlign:"right",flexShrink:0}}>
          <div style={{fontSize:13,fontWeight:900,color:c.color,
            background:c.color+"12",padding:"3px 11px",borderRadius:18,
            border:`1px solid ${c.color}22`,marginBottom:2}}>{c.days}d</div>
          <div style={{fontSize:9,color:"#94A3B8"}}>1.5h+1.5h</div>
        </div>

        <span style={{color:c.color,fontSize:20,flexShrink:0,
          transform:isOpen?"rotate(90deg)":"none",transition:"transform 0.2s",opacity:isOpen?1:0.3}}>›</span>
      </button>

      {/* Body */}
      {isOpen&&(
        <div style={{borderTop:`2px solid ${c.color}18`,padding:"13px 15px 17px"}}>

          {/* Why */}
          <div style={{background:c.color+"0A",border:`1px solid ${c.color}22`,
            borderRadius:10,padding:"11px 13px",marginBottom:12}}>
            <div style={{fontSize:9,fontWeight:800,color:c.color,letterSpacing:"0.12em",marginBottom:5,
              textTransform:"uppercase"}}>{c.tag}</div>
            <div style={{fontSize:12,color:"#334155",lineHeight:1.85}}>{c.why}</div>
          </div>

          {/* 3-col grid */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:9,marginBottom:12}}>
            {/* Covers */}
            <div style={{background:"#F8FAFC",borderRadius:9,padding:"10px 12px",border:"1px solid #E2E8F0"}}>
              <div style={{fontSize:10,fontWeight:800,color:"#374151",letterSpacing:"0.08em",marginBottom:6}}>📋 COVERS</div>
              {c.covers.map((item,i)=>(
                <div key={i} style={{display:"flex",gap:6,padding:"2px 0"}}>
                  <span style={{color:c.color,fontSize:9,flexShrink:0,marginTop:2,fontWeight:700}}>▸</span>
                  <span style={{fontSize:10,color:"#374151",lineHeight:1.6}}>{item}</span>
                </div>
              ))}
            </div>

            {/* LeetCode + Daily */}
            <div style={{display:"flex",flexDirection:"column",gap:9}}>
              <div style={{background:"#FFFBEB",border:"1px solid #FDE68A",borderRadius:9,padding:"10px 12px"}}>
                <div style={{fontSize:10,fontWeight:800,color:"#D97706",letterSpacing:"0.08em",marginBottom:4}}>
                  🧩 LEETCODE / PRACTICE
                </div>
                <div style={{fontSize:11,color:"#78350F",lineHeight:1.7}}>{c.lc}</div>
              </div>
              <div style={{background:"#F8FAFF",border:"1px solid #E0E7FF",borderRadius:9,padding:"10px 12px"}}>
                <div style={{fontSize:10,fontWeight:800,color:"#4F46E5",letterSpacing:"0.08em",marginBottom:4}}>
                  ⏰ DAILY 6:00–9:00 AM
                </div>
                <div style={{fontSize:11,color:"#374151",lineHeight:1.7}}>{c.daily}</div>
              </div>
            </div>
          </div>

          {/* Udemy button */}
          <a href={c.url} target="_blank" rel="noopener noreferrer"
            style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8,
              background:`linear-gradient(135deg,${c.color},${c.dark})`,color:"#fff",
              borderRadius:9,padding:"10px 16px",textDecoration:"none",
              fontSize:12,fontWeight:700,boxShadow:`0 4px 14px ${c.color}40`,transition:"all 0.18s"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-1px)";e.currentTarget.style.boxShadow=`0 6px 20px ${c.color}50`;}}
            onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow=`0 4px 14px ${c.color}40`;}}>
            Open on Udemy →
          </a>
        </div>
      )}
    </div>
  );
}

export default function App(){
  const [open,    setOpen]    = useState(1);
  const [lcCount, setLcCount] = useState(0);

  const curSeq = currentSeq();
  const pct    = progressPct();

  const lc_ms  = [{n:50,l:"Course 2"},{n:100,l:"Course 4"},{n:150,l:"Course 5"},{n:200,l:"After DSA"},{n:300,l:"Interview Ready"}];
  const nextMs = lc_ms.find(m=>m.n>lcCount)||lc_ms[lc_ms.length-1];
  const lcPct  = Math.min(100,Math.round(lcCount/nextMs.n*100));

  const toggle = seq => setOpen(open===seq?null:seq);
  const jump   = seq => {
    setOpen(seq);
    setTimeout(()=>document.getElementById("c"+seq)?.scrollIntoView({behavior:"smooth",block:"start"}),80);
  };

  return(
    <div style={{minHeight:"100vh",background:"#F0F4FF",
      fontFamily:"'Segoe UI',system-ui,-apple-system,sans-serif",
      color:"#0F172A",overflowX:"hidden"}}>

      {/* ── HERO ── */}
      <div style={{background:"linear-gradient(135deg,#1E1B4B 0%,#4338CA 50%,#1A365D 100%)",
        padding:"22px 14px 18px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,pointerEvents:"none",
          backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.055) 1px,transparent 1px)",
          backgroundSize:"22px 22px"}}/>
        <div style={{maxWidth:900,margin:"0 auto",position:"relative",zIndex:1}}>

          {/* Title */}
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
            <div style={{width:48,height:48,borderRadius:12,flexShrink:0,
              background:"linear-gradient(135deg,#6366F1,#8B5CF6)",
              display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:24,boxShadow:"0 6px 20px rgba(99,102,241,0.5)"}}>🎯</div>
            <div>
              <div style={{fontSize:9,letterSpacing:"0.28em",textTransform:"uppercase",
                color:"rgba(255,255,255,0.32)",marginBottom:2}}>
                Sumit Rawal · After 400 Days · Actively Applying
              </div>
              <div style={{fontSize:"clamp(16px,5vw,27px)",fontWeight:900,color:"#fff",
                letterSpacing:"-0.02em",lineHeight:1.15}}>
                DSA + System Design
              </div>
              <div style={{fontSize:10,color:"rgba(255,255,255,0.36)",marginTop:2}}>
                11 courses · {TOTAL_HRS}h · Jul 15, 2027 → Dec 8, 2027 · then ongoing until offer
              </div>
            </div>
          </div>

          {/* 6AM banner */}
          <div style={{display:"flex",alignItems:"center",gap:10,
            background:"rgba(99,102,241,0.18)",border:"1px solid rgba(99,102,241,0.4)",
            borderRadius:10,padding:"9px 14px",marginBottom:14}}>
            <span style={{fontSize:20}}>⏰</span>
            <div style={{flex:1}}>
              <div style={{fontSize:12,fontWeight:900,color:"#fff"}}>
                6:00 AM – 9:00 AM · Every Day · Until Job Offer
              </div>
              <div style={{fontSize:10,color:"rgba(255,255,255,0.42)"}}>
                1.5h Udemy course + 1.5h LeetCode / system design practice · apply daily in parallel
              </div>
            </div>
            <div style={{textAlign:"right",flexShrink:0}}>
              <div style={{fontSize:14,fontWeight:900,color:"#A5B4FC"}}>{TOTAL_HRS}h</div>
              <div style={{fontSize:9,color:"rgba(255,255,255,0.38)"}}>course total</div>
            </div>
          </div>

          {/* Stats */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:7,marginBottom:14}}>
            {[["11","Courses"],["214h","Course Hrs"],["3h/day","6–9 AM"],
              ["6","DSA"],["5","System Design"],["🏆","Until Offer"]].map(([v,l])=>(
              <div key={l} style={{background:"rgba(255,255,255,0.07)",borderRadius:9,
                padding:"8px 8px",border:"1px solid rgba(255,255,255,0.08)",textAlign:"center"}}>
                <div style={{fontSize:"clamp(12px,3.5vw,15px)",fontWeight:900,color:"#fff"}}>{v}</div>
                <div style={{fontSize:9,color:"rgba(255,255,255,0.36)",marginTop:1}}>{l}</div>
              </div>
            ))}
          </div>

          {/* 11-segment progress bar */}
          <div style={{marginBottom:10}}>
            <div style={{height:10,borderRadius:5,overflow:"hidden",display:"flex",
              boxShadow:"inset 0 1px 3px rgba(0,0,0,0.3)",gap:1}}>
              {COURSES.map(c=>(
                <div key={c.seq} style={{flex:c.days,
                  background:curSeq>c.seq?"rgba(255,255,255,0.25)":curSeq===c.seq?c.color:c.color+"70",
                  transition:"background 0.3s"}}/>
              ))}
            </div>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:4}}>
              <span style={{fontSize:9,color:"rgba(255,255,255,0.4)"}}>🧩 DSA Courses 1–6</span>
              <span style={{fontSize:9,color:"rgba(255,255,255,0.65)",fontWeight:700}}>
                {curSeq<=11?`Course #${curSeq} now`:"✅ All done — Phase 4"}
              </span>
              <span style={{fontSize:9,color:"rgba(255,255,255,0.4)"}}>🏗 SD Courses 7–11</span>
            </div>
          </div>

          {/* Quick jump pills */}
          <div style={{display:"flex",gap:5,overflowX:"auto",paddingBottom:2,
            scrollbarWidth:"none",WebkitOverflowScrolling:"touch"}}>
            {COURSES.map(c=>(
              <button key={c.seq} onClick={()=>jump(c.seq)} style={{
                display:"flex",alignItems:"center",gap:4,
                background:curSeq===c.seq?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.07)",
                border:`1px solid ${curSeq===c.seq?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.12)"}`,
                borderRadius:20,padding:"3px 9px",cursor:"pointer",
                fontFamily:"inherit",whiteSpace:"nowrap",flexShrink:0}}>
                <div style={{width:5,height:5,borderRadius:"50%",background:c.color}}/>
                <span style={{fontSize:9,color:"rgba(255,255,255,0.65)",
                  fontWeight:curSeq===c.seq?800:400}}>
                  #{c.seq} {c.cat==="DSA"?"🧩":"🏗"}{curSeq===c.seq?" ←":""}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{maxWidth:900,margin:"0 auto",padding:"12px 12px 48px"}}>

        {/* LeetCode tracker */}
        <div style={{background:"#fff",borderRadius:12,border:"1px solid #E2E8F0",
          padding:"14px 16px",marginBottom:11,boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
          <div style={{fontSize:10,fontWeight:800,color:"#94A3B8",letterSpacing:"0.12em",marginBottom:10}}>
            🧩 LEETCODE TRACKER — UPDATE AS YOU GO
          </div>
          <div style={{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap",marginBottom:10}}>
            <span style={{fontSize:11,color:"#374151",fontWeight:600}}>Problems solved:</span>
            <input type="number" min="0" value={lcCount}
              onChange={e=>setLcCount(Math.max(0,parseInt(e.target.value)||0))}
              style={{width:75,padding:"5px 8px",borderRadius:7,border:"1.5px solid #E2E8F0",
                fontSize:15,fontWeight:800,color:"#6366F1",textAlign:"center",fontFamily:"inherit"}}/>
            <div style={{flex:1,minWidth:120}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:3,
                fontSize:10,color:"#64748B"}}>
                <span>{lcCount} solved</span>
                <span>Next milestone: {nextMs.n} ({nextMs.l})</span>
              </div>
              <div style={{height:8,background:"#F1F5F9",borderRadius:4,overflow:"hidden"}}>
                <div style={{height:"100%",borderRadius:4,
                  background:"linear-gradient(90deg,#6366F1,#8B5CF6)",
                  width:lcPct+"%",transition:"width 0.5s"}}/>
              </div>
            </div>
          </div>
          <div style={{display:"flex",gap:7,flexWrap:"wrap"}}>
            {lc_ms.map(m=>(
              <div key={m.n} style={{display:"flex",alignItems:"center",gap:4,
                background:lcCount>=m.n?"#F0FDF4":"#F8FAFC",
                borderRadius:20,padding:"3px 10px",
                border:`1px solid ${lcCount>=m.n?"#BBF7D0":"#E2E8F0"}`}}>
                <span style={{fontSize:10,color:lcCount>=m.n?"#15803D":"#94A3B8"}}>
                  {lcCount>=m.n?"✅ ":""}{m.n} — {m.l}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Daily split */}
        <div style={{background:"#fff",borderRadius:12,border:"1px solid #E2E8F0",
          padding:"14px 16px",marginBottom:11,boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
          <div style={{fontSize:10,fontWeight:800,color:"#94A3B8",letterSpacing:"0.12em",marginBottom:10}}>
            ⏰ DAILY STRUCTURE — 6:00 AM TO 9:00 AM — EVERY DAY
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:8}}>
            {[
              {time:"6:00–7:30 AM",icon:"📺",label:"Udemy Course",col:"#6366F1",
               sub:"1.5h · watch + code along · 1.25× slides, full speed code sections"},
              {time:"7:30–9:00 AM",icon:"🧩",label:"LeetCode / Practice",col:"#F59E0B",
               sub:"1.5h · 3 problems · 25 min each min struggle before hints"},
              {time:"Every Sunday",icon:"🎯",label:"Full Mock Session",col:"#E11D48",
               sub:"45 min coding mock (Pramp) + 45 min system design spoken aloud"},
            ].map(({time,icon,label,col,sub})=>(
              <div key={time} style={{background:"#F8FAFC",borderRadius:9,padding:"11px 12px",border:"1px solid #E2E8F0"}}>
                <div style={{fontSize:9,fontWeight:800,color:col,letterSpacing:"0.1em",marginBottom:4}}>{time}</div>
                <div style={{fontSize:18,marginBottom:4}}>{icon}</div>
                <div style={{fontSize:12,fontWeight:700,color:"#0F172A",marginBottom:3}}>{label}</div>
                <div style={{fontSize:10,color:"#64748B",lineHeight:1.6}}>{sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Master table */}
        <div style={{background:"#fff",borderRadius:12,border:"1px solid #E2E8F0",
          padding:"14px 14px",marginBottom:11,boxShadow:"0 1px 4px rgba(0,0,0,0.04)",overflowX:"auto"}}>
          <div style={{fontSize:10,fontWeight:800,color:"#94A3B8",letterSpacing:"0.12em",marginBottom:10}}>
            📋 COURSE SEQUENCE — 11 COURSES · ONE AFTER ANOTHER · TAP ROW TO JUMP
          </div>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:10,minWidth:500}}>
            <thead>
              <tr style={{background:"#F8FAFC"}}>
                {["#","Title","Hrs","Days","Start → End","★","Type"].map(h=>(
                  <th key={h} style={{padding:"6px 8px",textAlign:"left",color:"#64748B",
                    fontWeight:700,borderBottom:"2px solid #E2E8F0",whiteSpace:"nowrap"}}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COURSES.map((c)=>(
                <tr key={c.seq} style={{borderBottom:"1px solid #F1F5F9",cursor:"pointer",
                  background:curSeq===c.seq?"#FFFBEB":"transparent",transition:"background 0.1s"}}
                  onClick={()=>jump(c.seq)}
                  onMouseEnter={e=>{if(curSeq!==c.seq)e.currentTarget.style.background="#F8FAFC";}}
                  onMouseLeave={e=>{e.currentTarget.style.background=curSeq===c.seq?"#FFFBEB":"transparent";}}>
                  <td style={{padding:"7px 8px"}}>
                    <div style={{width:24,height:24,borderRadius:6,
                      background:c.color+"18",color:c.color,
                      display:"flex",alignItems:"center",justifyContent:"center",
                      fontSize:10,fontWeight:900}}>
                      {curSeq===c.seq?"📍":c.seq}
                    </div>
                  </td>
                  <td style={{padding:"7px 8px",fontWeight:curSeq===c.seq?800:600,
                    color:"#0F172A",maxWidth:220,overflow:"hidden",
                    textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{c.title}</td>
                  <td style={{padding:"7px 8px",fontWeight:700,color:c.color}}>{c.hours}h</td>
                  <td style={{padding:"7px 8px",color:"#374151"}}>{c.days}d</td>
                  <td style={{padding:"7px 8px",color:"#64748B",whiteSpace:"nowrap",fontSize:10}}>
                    {c.start} → {c.end}
                  </td>
                  <td style={{padding:"7px 8px",color:"#F59E0B",fontWeight:700}}>★{c.rating}</td>
                  <td style={{padding:"7px 8px"}}>
                    <span style={{fontSize:9,fontWeight:700,padding:"2px 7px",borderRadius:20,
                      background:c.cat==="DSA"?"#EEF2FF":"#F0FDF4",
                      color:c.cat==="DSA"?"#4338CA":"#15803D",
                      border:`1px solid ${c.cat==="DSA"?"#C7D2FE":"#BBF7D0"}`}}>
                      {c.cat==="DSA"?"🧩 DSA":"🏗 SD"}
                    </span>
                  </td>
                </tr>
              ))}
              <tr style={{background:"#F8FAFC",borderTop:"2px solid #E2E8F0"}}>
                <td colSpan={2} style={{padding:"8px",fontWeight:800,color:"#0F172A",fontSize:11}}>
                  TOTAL — 11 courses
                </td>
                <td style={{padding:"8px",fontWeight:900,color:"#4F46E5",fontSize:12}}>{TOTAL_HRS}h</td>
                <td style={{padding:"8px",fontWeight:700,color:"#374151"}}>{TOTAL_DAYS}d</td>
                <td colSpan={3} style={{padding:"8px",fontSize:9,color:"#94A3B8"}}>
                  Jul 15 → Dec 8, 2027 · then Phase 4 ongoing until offer
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* DSA section */}
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:9}}>
          <div style={{height:2,flex:1,background:"linear-gradient(90deg,#6366F1,#6366F115)"}}/>
          <span style={{fontSize:11,fontWeight:800,color:"#6366F1",letterSpacing:"0.1em",whiteSpace:"nowrap"}}>
            🧩 DSA — COURSES 1–6 · DO FIRST
          </span>
          <div style={{height:2,flex:1,background:"linear-gradient(90deg,#6366F115,#6366F1)"}}/>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:9,marginBottom:16}}>
          {DSA_COURSES.map(c=>(
            <CourseCard key={c.seq} c={c}
              isOpen={open===c.seq} onToggle={()=>toggle(c.seq)}
              isCurrent={curSeq===c.seq}/>
          ))}
        </div>

        {/* SD section */}
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:9}}>
          <div style={{height:2,flex:1,background:"linear-gradient(90deg,#16A34A,#16A34A15)"}}/>
          <span style={{fontSize:11,fontWeight:800,color:"#16A34A",letterSpacing:"0.1em",whiteSpace:"nowrap"}}>
            🏗 SYSTEM DESIGN — COURSES 7–11 · AFTER DSA
          </span>
          <div style={{height:2,flex:1,background:"linear-gradient(90deg,#16A34A15,#16A34A)"}}/>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:9,marginBottom:14}}>
          {SD_COURSES.map(c=>(
            <CourseCard key={c.seq} c={c}
              isOpen={open===c.seq} onToggle={()=>toggle(c.seq)}
              isCurrent={curSeq===c.seq}/>
          ))}
        </div>

        {/* Phase 4 */}
        <div style={{background:"linear-gradient(135deg,#F0FDF4,#ECFDF5)",borderRadius:12,
          border:"1px solid #BBF7D0",padding:"14px 16px",marginBottom:11,
          boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
          <div style={{fontSize:10,fontWeight:800,color:"#15803D",letterSpacing:"0.12em",marginBottom:8}}>
            🔁 AFTER COURSE 11 (Dec 9, 2027+) — ONGOING UNTIL OFFER
          </div>
          <div style={{fontSize:12,color:"#334155",lineHeight:1.85,marginBottom:10}}>
            All 11 courses done — switch to maintenance + interview mode. Every real interview teaches more than a week of solo practice. Log every question, solve it that evening.
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))",gap:8}}>
            {[
              {icon:"🧩",t:"DSA Maintenance",d:"3 LeetCode daily minimum (1E+2M). Re-solve any problem from a real interview the same evening. NeetCode 150 is your source."},
              {icon:"🏗",t:"SD Maintenance",d:"1 system design mock weekly — 45 min spoken. Read ByteByteGo newsletter. Revise designs for companies you applied to."},
              {icon:"🎯",t:"Mock Every Sunday",d:"Pramp.com peer mock (free). After every real interview: write all questions asked — solve them perfectly that evening."},
              {icon:"📤",t:"Apply Every Day",d:"1 application minimum daily. Study in morning, apply in evening. Do not wait until you feel 100% ready — you never will."},
            ].map(({icon,t,d})=>(
              <div key={t} style={{background:"rgba(255,255,255,0.75)",borderRadius:9,
                padding:"10px 12px",border:"1px solid #DCFCE7"}}>
                <div style={{fontSize:18,marginBottom:4}}>{icon}</div>
                <div style={{fontSize:11,fontWeight:700,color:"#0F172A",marginBottom:3}}>{t}</div>
                <div style={{fontSize:10,color:"#64748B",lineHeight:1.6}}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FPO superpower */}
        <div style={{background:"#fff",borderRadius:12,border:"1px solid #E2E8F0",
          padding:"14px 16px",marginBottom:11,boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
          <div style={{fontSize:10,fontWeight:800,color:"#94A3B8",letterSpacing:"0.12em",marginBottom:10}}>
            🚀 FPO EXPERIENCE = SYSTEM DESIGN ANSWERS
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(165px,1fr))",gap:7,marginBottom:10}}>
            {[["API Gateway","Load Balancer + Auth + Rate Limiter"],
              ["AWS Lambda","Microservice / FaaS"],
              ["Step Functions","Saga Orchestration"],
              ["EventBridge + Kafka","Message Queue / Event-Driven"],
              ["DynamoDB","NoSQL + Partition Keys"],
              ["S3 + archive","Object Storage + Tiered"],
              ["Cognito + OAuth2","Auth at Scale + RBAC"],
              ["CloudWatch+Datadog","Monitoring + Tracing"],
              ["Multi-tenant airlines","Multi-tenancy Pattern"],
              ["7 AWS Certs + CKA","Instant Senior Credibility"],
            ].map(([tech,concept])=>(
              <div key={tech} style={{background:"#F8FAFC",borderRadius:8,padding:"8px 10px",
                border:"1px solid #E2E8F0"}}>
                <div style={{fontSize:11,fontWeight:700,color:"#0F172A"}}>{tech}</div>
                <div style={{fontSize:10,color:"#64748B"}}>→ {concept}</div>
              </div>
            ))}
          </div>
          <div style={{padding:"10px 12px",background:"#F0FDF4",borderRadius:8,
            border:"1px solid #BBF7D0",fontSize:11,color:"#166534",lineHeight:1.8}}>
            💡 <strong>Open every system design round:</strong> "At FPO Cloud I designed a real-time multi-tenant flight trajectory SaaS for Lufthansa, American Airlines and FedEx — Lambda microservices, Step Functions Saga, DynamoDB, Kafka, 7 AWS certs..." — top 5% before a diagram is drawn.
          </div>
        </div>

        {/* Rules */}
        <div style={{background:"#fff",borderRadius:12,border:"1px solid #E2E8F0",
          padding:"16px 14px",boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
          <div style={{fontSize:10,fontWeight:800,color:"#94A3B8",letterSpacing:"0.12em",marginBottom:12}}>
            ⚡ 6 RULES — STUDY DAILY · APPLY DAILY · UNTIL OFFER
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(185px,1fr))",gap:12}}>
            {[["⏰","6 AM–9 AM every day","Same habit from 400+ days. 544 consecutive days by Dec. Don't break it now."],
              ["📺","1.5h course + 1.5h practice","Never passive watching. Code along, pause, rebuild from scratch."],
              ["📤","Apply every single day","1 application minimum. Study + apply in parallel from day 1."],
              ["🚫","25 min struggle rule","Attempt every LeetCode problem 25 min before hints. Always. No shortcuts."],
              ["🗣","Talk while solving","Verbalise your full approach before touching the keyboard — every time."],
              ["📝","Log every real interview","Write every question asked. Solve it perfectly the same evening."],
            ].map(([icon,title,desc])=>(
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

        {/* Footer */}
        <div style={{marginTop:12,textAlign:"center",paddingBottom:24}}>
          <div style={{fontSize:13,color:"#6366F1",fontWeight:900,marginBottom:4}}>
            🏆 11 courses → job offer
          </div>
          <div style={{fontSize:10,color:"#94A3B8",letterSpacing:"0.1em"}}>
            🧩 DSA (1–6) · 🏗 SD (7–11) · 214H COURSE · 3H/DAY · JUL 15, 2027 → DEC 8, 2027
          </div>
        </div>
      </div>
    </div>
  );
}
