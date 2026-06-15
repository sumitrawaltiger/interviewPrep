import { useState } from 'react';

// 365 Days of Code
// Tue Jun 16, 2026 to Mon Jun 15, 2027
// 5:30 AM to 8:30 AM daily (mandatory)
// OKLABS batch (daytime) + React Native via Chaicode (5:30-8:30 AM in parallel)

const START = new Date('2026-06-16');
const TOTAL = 442;

const PHASES = [
  {
    id: 'p01',
    seq: 1,
    icon: '📡',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Computer Fundamentals',
    days: 14,
    ds: 1,
    de: 14,
    period: 'Jun 16 - Jun 29, 2026',
    wks: 'W01-W02',
    ms: 'Computer Fundamentals Done',
    about:
      '2 weeks. IT Fundamentals (SDLC, Agile, Scrum, DevOps culture) + Networking (LAN/WAN/IP/DNS/DHCP/VPN/Firewalls) + OSI 7-layer model + TCP/IP protocols. Foundation for everything else in the batch.',
    courses: [
      'OKLABS Phase 1 - IT Fundamentals: SDLC, Agile, Scrum, DevOps culture, Waterfall vs Agile',
      'OKLABS Phase 2 - Networking: LAN/WAN, IP addressing, DNS, DHCP, NAT, VPN, Firewalls',
      'OKLABS Phase 3 - OSI Model: 7 layers, TCP/IP, HTTP/HTTPS, SSH, SMTP, Wireshark labs',
    ],
    wplan: [
      {
        w: 1,
        f: 'IT Fundamentals + Networking',
        t: 'SDLC, Agile, Scrum, DevOps principles, LAN/WAN, IP addressing, DNS, DHCP, VPN, Firewalls',
      },
      {
        w: 2,
        f: 'OSI Model + Protocols + Labs',
        t: 'OSI 7 layers, TCP vs UDP, HTTP/HTTPS, SSH, SMTP. Wireshark packet analysis, CIDR calculations, DNS troubleshooting labs',
      },
    ],
  },
  {
    id: 'p02',
    seq: 2,
    icon: '🐧',
    color: '#EA580C',
    dark: '#C2410C',
    bg: '#FFF7ED',
    border: '#FED7AA',
    name: 'Linux OS Fundamentals',
    days: 21,
    ds: 15,
    de: 35,
    period: 'Jun 30 - Jul 20, 2026',
    wks: 'W03-W05',
    ms: 'Linux Done',
    about:
      '3 weeks. Linux architecture, 10+ distros, 100+ commands across file ops, process management, user admin, networking, package management, web servers. Projects: Production Linux Server Setup, Secure SSH Config, Apache Reverse Proxy.',
    courses: [
      'OKLABS Phase 4 - OS Fundamentals: Linux architecture, distros (Ubuntu/Fedora/Amazon Linux)',
      'OKLABS Phase 5 - Linux Commands: 100+ commands across all categories',
      'OKLABS Phase 6-12 - User admin, file system, process mgmt, package mgmt, networking, web servers (Apache/Nginx), monitoring',
    ],
    wplan: [
      {
        w: 3,
        f: 'Linux Architecture + Core Commands',
        t: 'OS types, Linux layers, distros. File ops (ls/cp/mv/rm), directory mgmt, search (find/grep/locate), text processing (awk/sed)',
      },
      {
        w: 4,
        f: 'Permissions + Process + Users',
        t: 'chmod/chown/umask, ps/kill/top, useradd/usermod, groupadd, systemctl, cron jobs, SSH hardening',
      },
      {
        w: 5,
        f: 'Web Servers + Monitoring + Projects',
        t: "Apache, Nginx, reverse proxy, SSL/Let's Encrypt, journalctl. Project: Production Linux server + Secure SSH + Apache Reverse Proxy",
      },
    ],
  },
  {
    id: 'p03',
    seq: 3,
    icon: '💻',
    color: '#374151',
    dark: '#111827',
    bg: '#F9FAFB',
    border: '#D1D5DB',
    name: 'Shell Scripting and Bash',
    days: 14,
    ds: 36,
    de: 49,
    period: 'Jul 21 - Aug 3, 2026',
    wks: 'W06-W07',
    ms: 'Bash Scripting Done',
    about:
      '2 weeks. Bash scripting from variables to error handling. Automation scripts for backups, log rotation, health monitoring, user provisioning. Projects: Automated Server Monitoring, Daily Backup System, User Management Automation.',
    courses: [
      'OKLABS Phase 13 - Bash Scripting: variables, functions, loops, conditions, arrays, error handling',
      'OKLABS Phase 14 - Linux Automation: backup scripts, log rotation, health monitoring, user provisioning',
    ],
    wplan: [
      {
        w: 6,
        f: 'Bash Fundamentals',
        t: 'Variables, functions, loops (for/while/until), conditions (if/case), arrays, error handling, exit codes, cron scheduling',
      },
      {
        w: 7,
        f: 'Automation + Projects',
        t: 'Backup scripts, log rotation, health monitoring scripts, user provisioning. All 3 projects: Automated Server Monitor, Daily Backup, User Mgmt',
      },
    ],
  },
  {
    id: 'p04',
    seq: 4,
    icon: '🐍',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'Python for DevOps',
    days: 21,
    ds: 50,
    de: 70,
    period: 'Aug 4 - Aug 24, 2026',
    wks: 'W08-W10',
    ms: 'Python for DevOps Done',
    about:
      '3 weeks. Python fundamentals through OOP through AWS automation. Projects: EC2 Provisioning Tool, Automated Backup Utility, Infrastructure Health Dashboard. Your SCB Thailand Python/boto3 background makes this fast.',
    courses: [
      'OKLABS Phase 15 - Python Fundamentals: variables, data types, operators, loops, functions',
      'OKLABS Phase 16-17 - Intermediate/Advanced Python: OOP, modules, exception handling, file handling, JSON, API integration, multithreading',
      'OKLABS Phase 18 - DevOps with Python: AWS automation (boto3), infrastructure automation, monitoring scripts, log parsing',
    ],
    wplan: [
      {
        w: 8,
        f: 'Python Fundamentals + OOP',
        t: 'Variables, data types, loops, functions, OOP (classes/inheritance/polymorphism), modules, packages, exception handling',
      },
      {
        w: 9,
        f: 'Advanced Python + APIs',
        t: 'File handling, JSON processing, API integration, multithreading, boto3 AWS automation, monitoring scripts, log parsing',
      },
      {
        w: 10,
        f: 'DevOps Python Projects',
        t: 'EC2 Provisioning Tool, Automated Backup Utility, Infrastructure Health Dashboard - all 3 deployed and documented',
      },
    ],
  },
  {
    id: 'p05',
    seq: 5,
    icon: '🔀',
    color: '#F59E0B',
    dark: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'Git and GitHub',
    days: 7,
    ds: 71,
    de: 77,
    period: 'Aug 25 - Aug 31, 2026',
    wks: 'W11',
    ms: 'Git and GitHub Done',
    about:
      '1 week. Git fundamentals, branching strategy, merge conflicts. GitHub: repositories, pull requests, code reviews, security. Projects: Team Collaboration Project + Git Workflow Implementation.',
    courses: [
      'OKLABS Phase 19 - Version Control: Git init/clone/branch/merge/rebase, repository management, branching strategy, merge conflicts',
      'OKLABS Phase 20 - GitHub: repositories, pull requests, code reviews, GitHub security, Actions basics',
    ],
    wplan: [
      {
        w: 11,
        f: 'Git + GitHub + Projects',
        t: 'Git fundamentals, branching (feature/hotfix/release), merge vs rebase, PRs, code reviews, branching strategy. Team Collaboration + Git Workflow projects',
      },
    ],
  },
  {
    id: 'p06',
    seq: 6,
    icon: '⚛',
    color: '#0EA5E9',
    dark: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    name: 'Frontend: HTML / CSS / JS / React',
    days: 28,
    ds: 78,
    de: 105,
    period: 'Sep 1 - Sep 28, 2026',
    wks: 'W12-W15',
    ms: 'Frontend Done',
    about:
      '4 weeks. SPA architecture, component-based development, React fundamentals and advanced patterns. Project: DevOps Monitoring Dashboard UI. Builds on your existing React knowledge from FPO Cloud work.',
    courses: [
      'OKLABS Phase 21 - Frontend Engineering: HTML5, CSS3, JavaScript ES6+, jQuery, Bootstrap, SPA architecture',
      'OKLABS Phase 22 - React Fundamentals: JSX, components, props, state, events',
      'OKLABS Phase 23 - React Advanced: hooks, routing, API integration, Context API',
    ],
    wplan: [
      {
        w: 12,
        f: 'HTML/CSS/JS/Bootstrap',
        t: 'HTML5 semantics, CSS3 flexbox/grid, JavaScript ES6+ (arrow functions, promises, async/await), jQuery, Bootstrap responsive',
      },
      {
        w: 13,
        f: 'React Fundamentals',
        t: 'React architecture, JSX, functional components, props, state, events, conditional rendering, lists - OKLABS React modules',
      },
      {
        w: 14,
        f: 'React Advanced + Hooks',
        t: 'useState, useEffect, useContext, useRef, custom hooks, React Router, API integration with axios/fetch',
      },
      {
        w: 15,
        f: 'DevOps Dashboard Project',
        t: 'Build DevOps Monitoring Dashboard UI - shows server health, pipeline status, deployment metrics. Full capstone project.',
      },
    ],
  },
  {
    id: 'p07',
    seq: 7,
    icon: '🚀',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'Backend: Python / Flask / FastAPI',
    days: 21,
    ds: 106,
    de: 126,
    period: 'Sep 29 - Oct 19, 2026',
    wks: 'W16-W18',
    ms: 'Backend Python Done',
    about:
      '3 weeks. Backend architecture, REST principles, Flask and FastAPI frameworks, authentication/authorization with JWT, PostgreSQL. Projects: Employee Management API, Cloud Resource Management API.',
    courses: [
      'OKLABS Phase 24 - Backend Fundamentals: backend architecture, client-server communication, REST principles',
      'OKLABS Phase 25 - Python Backend: Flask (routes/templates/auth), FastAPI (async/Pydantic/OpenAPI), JWT authentication, authorization',
      'OKLABS Phase 26 - Database Concepts: PostgreSQL, relational design, SQLAlchemy ORM, migrations',
    ],
    wplan: [
      {
        w: 16,
        f: 'Flask + REST Fundamentals',
        t: 'Backend architecture, REST principles, Flask routes, blueprints, templates, request/response cycle, JWT authentication',
      },
      {
        w: 17,
        f: 'FastAPI + PostgreSQL',
        t: 'FastAPI async endpoints, Pydantic models, dependency injection, PostgreSQL with SQLAlchemy ORM, Alembic migrations',
      },
      {
        w: 18,
        f: 'Backend Projects',
        t: 'Employee Management API + Cloud Resource Management API - both fully built, tested, and documented',
      },
    ],
  },
  {
    id: 'p08',
    seq: 8,
    icon: '🔌',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECDD3',
    name: 'APIs and Integrations',
    days: 7,
    ds: 127,
    de: 133,
    period: 'Oct 20 - Oct 26, 2026',
    wks: 'W19',
    ms: 'APIs Done',
    about:
      '1 week. REST, GraphQL, SOAP, Webhook APIs. Security: OAuth2, JWT, API keys, rate limiting. Projects: REST API Development + GraphQL API Integration.',
    courses: [
      'OKLABS Phase 27-28 - API Fundamentals and Security: REST/GraphQL/SOAP/Webhook, OAuth2, JWT, API keys, rate limiting',
    ],
    wplan: [
      {
        w: 19,
        f: 'API Types + Security + Projects',
        t: 'REST/GraphQL/SOAP/Webhook deep dive, OAuth2 flows, JWT, rate limiting. Build REST API project + GraphQL API integration',
      },
    ],
  },
  {
    id: 'p09',
    seq: 9,
    icon: '📋',
    color: '#059669',
    dark: '#047857',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    name: 'Jira and Confluence',
    days: 7,
    ds: 134,
    de: 140,
    period: 'Oct 27 - Nov 2, 2026',
    wks: 'W20',
    ms: 'Jira and Confluence Done',
    about:
      '1 week. Jira: project creation, Scrum boards, sprint planning, user stories, epics. Confluence: documentation, knowledge base, team collaboration. Project: Complete Agile Sprint Lifecycle.',
    courses: [
      'OKLABS Phase 29-30 - Jira and Confluence: Scrum boards, sprint planning, user stories, epics, documentation, knowledge base',
    ],
    wplan: [
      {
        w: 20,
        f: 'Jira + Confluence + Agile Sprint',
        t: 'Jira project setup, Scrum boards, sprint planning, user stories, epics, backlog grooming. Confluence docs. Full Agile sprint lifecycle project',
      },
    ],
  },
  {
    id: 'p10',
    seq: 10,
    icon: '🐳',
    color: '#0369A1',
    dark: '#1e40af',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    name: 'Docker',
    days: 21,
    ds: 141,
    de: 161,
    period: 'Nov 3 - Nov 23, 2026',
    wks: 'W21-W23',
    ms: 'Docker Done',
    about:
      '3 weeks. Container fundamentals vs virtualization, Docker images/containers/networking/volumes, Docker Compose for multi-container apps. Projects: React + Python App Containerization, Production Docker Deployment.',
    courses: [
      'OKLABS Phase 31 - Container Fundamentals: virtualization vs containers, container architecture',
      'OKLABS Phase 32 - Docker: images, containers, networking, volumes, Dockerfile best practices',
      'OKLABS Phase 33 - Docker Compose: multi-container apps, environment management, service orchestration',
    ],
    wplan: [
      {
        w: 21,
        f: 'Container Fundamentals + Docker Core',
        t: 'Virt vs containers, Docker install, pull/build/tag/push images, run/stop/rm containers, Dockerfile instructions, .dockerignore',
      },
      {
        w: 22,
        f: 'Docker Networking + Volumes + Compose',
        t: 'Bridge/host/overlay networks, named volumes, bind mounts, Docker Compose YAML, multi-service stacks, environment variables',
      },
      {
        w: 23,
        f: 'Docker Projects',
        t: 'React + Python app containerization with Docker Compose. Production Docker deployment with Nginx reverse proxy. Push to DockerHub/ECR.',
      },
    ],
  },
  {
    id: 'p11',
    seq: 11,
    icon: '☸',
    color: '#4338CA',
    dark: '#3730A3',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Kubernetes',
    days: 28,
    ds: 162,
    de: 189,
    period: 'Nov 24 - Dec 21, 2026',
    wks: 'W24-W27',
    ms: 'Kubernetes Done',
    about:
      '4 weeks. K8s architecture (control plane, worker nodes), core objects (Pods/Deployments/Services/ConfigMaps/Secrets), storage (PV/PVC), Ingress, RBAC security. Projects: Production K8s Cluster + Highly Available App Deployment.',
    courses: [
      'OKLABS Phase 34 - K8s Fundamentals: architecture, control plane, worker nodes, kubectl',
      'OKLABS Phase 35-36 - K8s Objects and Storage: Pods, Deployments, ReplicaSets, Services, ConfigMaps, Secrets, PVs, PVCs',
      'OKLABS Phase 37-38 - K8s Networking and Security: Ingress, service discovery, RBAC, NetworkPolicies',
    ],
    wplan: [
      {
        w: 24,
        f: 'K8s Architecture + Core Objects',
        t: 'Control plane components, worker nodes, kubectl, Pods, Deployments, ReplicaSets - KodeKloud/Killercoda hands-on labs',
      },
      {
        w: 25,
        f: 'Services + ConfigMaps + Storage',
        t: 'ClusterIP/NodePort/LoadBalancer, ConfigMaps, Secrets, PersistentVolumes, PVCs, StorageClasses',
      },
      {
        w: 26,
        f: 'Ingress + Security + RBAC',
        t: 'Ingress controllers (nginx), service discovery, RBAC roles/rolebindings, NetworkPolicies, security contexts',
      },
      {
        w: 27,
        f: 'K8s Projects on AWS EKS',
        t: 'Production K8s cluster setup + Highly Available application deployment on AWS EKS with autoscaling',
      },
    ],
  },
  {
    id: 'p12',
    seq: 12,
    icon: '⚙',
    color: '#DC2626',
    dark: '#B91C1C',
    bg: '#FEF2F2',
    border: '#FECACA',
    name: 'CI/CD: Jenkins + GitHub Actions',
    days: 21,
    ds: 190,
    de: 210,
    period: 'Dec 22, 2026 - Jan 11, 2027',
    wks: 'W28-W30',
    ms: 'CI/CD Done',
    about:
      '3 weeks. CI/CD fundamentals, Blue-Green/Rolling/Canary deployments. Jenkins (master-agent, Jenkinsfile, pipelines, integrations with Docker/K8s/SonarQube). GitHub Actions (workflows, matrix builds, reusable workflows). SonarQube for code quality.',
    courses: [
      'OKLABS Phase 39 - CI/CD Fundamentals: CI/CD concepts, pipeline design, shift left, deployment strategies (Blue-Green/Rolling/Canary)',
      'OKLABS Phase 40 - Jenkins: architecture, master-agent, Jenkinsfile, declarative/scripted pipelines, shared libraries, integrations',
      'OKLABS Phase 41 - GitHub Actions: workflow architecture, events/triggers, build/test/deploy workflows, matrix builds, reusable workflows',
    ],
    wplan: [
      {
        w: 28,
        f: 'CI/CD Fundamentals + Jenkins Core',
        t: 'CI/CD concepts, Blue-Green/Rolling/Canary strategies, Jenkins install, master-agent architecture, Jenkinsfile declarative pipelines',
      },
      {
        w: 29,
        f: 'Jenkins Integrations + GitHub Actions',
        t: 'Jenkins with Docker/K8s/AWS/SonarQube. GitHub Actions workflows, events, matrix builds, secrets, self-hosted runners',
      },
      {
        w: 30,
        f: 'CI/CD Projects',
        t: 'Docker Build Pipeline, K8s Deployment Pipeline, React App CI/CD, Python API CI/CD - all via Jenkins and GitHub Actions',
      },
    ],
  },
  {
    id: 'p13',
    seq: 13,
    icon: '🏗',
    color: '#B45309',
    dark: '#92400E',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'Terraform IaC',
    days: 14,
    ds: 211,
    de: 224,
    period: 'Jan 12 - Jan 25, 2027',
    wks: 'W31-W32',
    ms: 'Terraform Done',
    about:
      '2 weeks. HCL syntax, providers, resources, variables, modules, state management, remote state (S3+DynamoDB), multi-environment deployment. Projects: AWS Infrastructure Provisioning + EKS Cluster Deployment with Terraform.',
    courses: [
      'OKLABS Phase 41 - Terraform: basics, providers, variables, modules, state management',
      'OKLABS Phase 42 - Advanced Terraform: remote state, workspaces, multi-environment deployment',
    ],
    wplan: [
      {
        w: 31,
        f: 'Terraform Core',
        t: 'HCL syntax, providers (AWS), resources, variables, outputs, locals, data sources, state management, modules - provision VPC/EC2/S3',
      },
      {
        w: 32,
        f: 'Advanced Terraform + Projects',
        t: 'Remote state (S3 backend + DynamoDB locking), workspaces, multi-env (dev/staging/prod). Projects: AWS Infrastructure + EKS Cluster',
      },
    ],
  },
  {
    id: 'p14',
    seq: 14,
    icon: '☁',
    color: '#D97706',
    dark: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'AWS Cloud Engineering',
    days: 56,
    ds: 225,
    de: 280,
    period: 'Jan 26 - Mar 22, 2027',
    wks: 'W33-W40',
    ms: 'AWS Done',
    about:
      '8 weeks MAX TIME. IAM, EC2, EBS, S3, VPC, Route Tables, NAT/IGW, Security Groups, NACL, RDS, DynamoDB, ALB/NLB, CloudWatch, CloudTrail, ECS/ECR/EKS, Lambda, API Gateway, Secrets Manager. 4 capstone projects. Maps directly to your FPO Cloud production experience.',
    courses: [
      'OKLABS Phase 43 - AWS Fundamentals: global infrastructure, regions/AZs, shared responsibility model',
      'OKLABS Phase 44-45 - AWS Core + Networking: IAM, EC2, EBS, S3, VPC, route tables, NAT, IGW, Security Groups, NACL',
      'OKLABS Phase 46-48 - Databases + Load Balancing + Monitoring: RDS, DynamoDB, ALB/NLB, CloudWatch, CloudTrail',
      'OKLABS Phase 49-50 - Containers + Serverless: ECS, ECR, EKS, Lambda (your FPO!), API Gateway',
      'OKLABS Phase 51 - AWS Security: IAM best practices, KMS encryption, Secrets Manager',
    ],
    wplan: [
      {
        w: 33,
        f: 'AWS Fundamentals + IAM',
        t: 'Global infra, regions/AZs, shared responsibility. IAM users/groups/roles/policies/MFA/STS - your FPO uses IAM extensively',
      },
      {
        w: 34,
        f: 'EC2 + EBS + S3',
        t: 'EC2 instance types/launch/connect, EBS volume types/snapshots, S3 buckets/policies/versioning/lifecycle/encryption',
      },
      {
        w: 35,
        f: 'VPC + Networking',
        t: 'VPC creation, public/private subnets, route tables, NAT gateway, Internet gateway, Security Groups, NACL, VPC peering',
      },
      {
        w: 36,
        f: 'Databases + Load Balancing',
        t: 'RDS (PostgreSQL), DynamoDB (your FPO database!), ALB/NLB target groups, health checks, auto scaling groups',
      },
      {
        w: 37,
        f: 'Monitoring + Containers',
        t: 'CloudWatch metrics/logs/alarms/dashboards, CloudTrail, ECS task definitions, ECR image registry, EKS cluster management',
      },
      {
        w: 38,
        f: 'Serverless + Security',
        t: 'Lambda functions (your FPO architecture!), API Gateway, Step Functions, Secrets Manager, KMS, IAM best practices',
      },
      {
        w: 39,
        f: 'AWS Projects Part 1',
        t: 'Three-Tier Architecture (ALB + EC2 + RDS) + Highly Available Web Application with auto scaling - full deployment',
      },
      {
        w: 40,
        f: 'AWS Projects Part 2',
        t: 'Kubernetes on AWS EKS + Serverless Application Deployment - relate everything to your FPO Cloud Lambda architecture',
      },
    ],
  },
  {
    id: 'p15',
    seq: 15,
    icon: '📊',
    color: '#0EA5E9',
    dark: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    name: 'DevOps Monitoring and Observability',
    days: 14,
    ds: 281,
    de: 294,
    period: 'Mar 23 - Apr 5, 2027',
    wks: 'W41-W42',
    ms: 'Monitoring Done',
    about:
      '2 weeks. Prometheus metrics collection, Grafana dashboards, centralized logging, log aggregation. Alert rules and incident response. Projects: Complete Monitoring Stack + Infrastructure Observability Platform. Maps to Datadog you already use on FPO.',
    courses: [
      'OKLABS Phase 52 - Monitoring: Prometheus (metrics/exporters/alertmanager), Grafana (dashboards/alerts)',
      'OKLABS Phase 53-54 - Logging and Alerting: centralized logging (ELK/Loki), log aggregation, alert rules, incident response',
    ],
    wplan: [
      {
        w: 41,
        f: 'Prometheus + Grafana',
        t: 'Prometheus exporters, PromQL queries, alertmanager rules. Grafana dashboards for infra metrics - compare to Datadog you use on FPO',
      },
      {
        w: 42,
        f: 'Centralized Logging + Projects',
        t: 'ELK stack or Grafana Loki for log aggregation, log parsing, alerting. Projects: Complete Monitoring Stack + Infrastructure Observability Platform',
      },
    ],
  },
  {
    id: 'p16',
    seq: 16,
    icon: '✅',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'SonarQube and QA',
    days: 14,
    ds: 295,
    de: 308,
    period: 'Apr 6 - Apr 19, 2027',
    wks: 'W43-W44',
    ms: 'SonarQube Done',
    about:
      '2 weeks. Static code analysis, quality gates, technical debt measurement, code smells, bug and vulnerability detection. Jenkins + GitHub Actions integration. Projects: Enterprise SonarQube Deployment + Automated Quality Gate Pipeline.',
    courses: [
      'OKLABS Phase 42 - SonarQube: static code analysis, quality gates, technical debt, vulnerability detection',
      'SonarQube integrations: Jenkins pipeline integration, GitHub Actions PR analysis, coverage reports, security hotspots',
    ],
    wplan: [
      {
        w: 43,
        f: 'SonarQube Core + Administration',
        t: 'Install/configure SonarQube, quality gates, code smells, technical debt, security hotspots, vulnerability detection, user management',
      },
      {
        w: 44,
        f: 'Integrations + Projects',
        t: 'Jenkins integration, GitHub Actions PR analysis, branch analysis, coverage reports. Enterprise SonarQube Deployment + Quality Gate Pipeline projects',
      },
    ],
  },
  {
    id: 'p17',
    seq: 17,
    icon: '🔒',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECADA',
    name: 'DevSecOps and Security',
    days: 14,
    ds: 309,
    de: 322,
    period: 'Apr 20 - May 3, 2027',
    wks: 'W45-W46',
    ms: 'DevSecOps Done',
    about:
      '2 weeks. Security in SDLC, secure coding practices, threat modeling. Docker/K8s security, Trivy image scanning, OWASP dependency check. Secrets management with GitHub Secrets/Jenkins Credentials/AWS Secrets Manager. Projects: Secure CI/CD Pipeline + Container Security Automation.',
    courses: [
      'OKLABS Phase 43 - DevSecOps Fundamentals: security in SDLC, secure coding, threat modeling, shift-left security',
      'Container security: Docker security best practices, K8s security policies, Trivy image scanning, OWASP dependency check',
      'Secrets management: GitHub Secrets, Jenkins Credentials, AWS Secrets Manager, HashiCorp Vault basics',
    ],
    wplan: [
      {
        w: 45,
        f: 'DevSecOps Fundamentals + Tools',
        t: 'Security in SDLC, threat modeling, Docker security, K8s RBAC/NetworkPolicies, Trivy image scanning, OWASP dependency check',
      },
      {
        w: 46,
        f: 'Secrets Management + Projects',
        t: 'GitHub Secrets, Jenkins Credentials, AWS Secrets Manager. Projects: Secure CI/CD Pipeline + Container Security Automation pipeline',
      },
    ],
  },
  {
    id: 'p18',
    seq: 18,
    icon: '🏆',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'Capstone Projects',
    days: 28,
    ds: 323,
    de: 350,
    period: 'May 4 - May 31, 2027',
    wks: 'W47-W50',
    ms: 'Capstone Projects Done',
    about:
      '4 weeks. Enterprise-grade end-to-end projects integrating everything learned. Pipeline: GitHub Repo to Jenkins/GitHub Actions to SonarQube scan to Docker build to Trivy scan to ECR push to Terraform infra to EKS deployment to Smoke tests to Prometheus/Grafana monitoring.',
    courses: [
      'Project 1: Terraform + GitHub Actions + Kubernetes End-to-End CI/CD Pipeline',
      'Project 2: Production EKS Cluster with Prometheus/Grafana Monitoring and Centralized Logging',
      'Project 3: Multi-Environment Cloud Infrastructure Automation (dev/staging/prod with Terraform workspaces)',
      'Project 4: Complete DevOps Platform Engineering Project - all tools integrated end-to-end',
    ],
    wplan: [
      {
        w: 47,
        f: 'Project 1: E2E CI/CD Pipeline',
        t: 'GitHub Repo to GitHub Actions/Jenkins to SonarQube to Docker build to Trivy scan to ECR to Terraform to EKS - full enterprise pipeline',
      },
      {
        w: 48,
        f: 'Project 2: Production EKS + Monitoring',
        t: 'EKS cluster with Prometheus/Grafana monitoring, Loki logging, alertmanager, auto-scaling, rolling deployments',
      },
      {
        w: 49,
        f: 'Project 3: Multi-Env Infrastructure',
        t: 'Terraform workspaces for dev/staging/prod. Different VPCs, sizes, configs per environment. ArgoCD GitOps optional.',
      },
      {
        w: 50,
        f: 'Project 4: Full DevOps Platform',
        t: 'Complete platform: all tools (Jenkins/GHA/SonarQube/Docker/K8s/Terraform/AWS/Prometheus) integrated into one system',
      },
    ],
  },
  {
    id: 'p19',
    seq: 19,
    icon: '🎯',
    color: '#374151',
    dark: '#111827',
    bg: '#F9FAFB',
    border: '#D1D5DB',
    name: 'Revision and Interview Prep',
    days: 15,
    ds: 351,
    de: 365,
    period: 'Jun 1 - Jun 15, 2027',
    wks: 'W51-W52',
    ms: '365 Days of Code COMPLETE',
    about:
      '2 weeks + 1 day. Revise all 18 OKLABS phases. Polish GitHub portfolio (README for every project). Update LinkedIn and resume for DevOps/Cloud/SRE/Platform Engineer roles. Mock interview practice. React Native final polish. Day 365 = June 15, 2027.',
    courses: [
      'Full revision: Linux commands, Docker, K8s, CI/CD, Terraform, AWS services - revise weakest areas',
      'GitHub portfolio polish: professional READMEs, architecture diagrams, demo GIFs for all projects',
      'Interview prep: DevOps/Cloud/SRE interview Q&A, system design for infrastructure, salary research for Bangkok market',
    ],
    wplan: [
      {
        w: 51,
        f: 'Full Revision + GitHub Portfolio',
        t: 'Revise Linux, Docker, K8s, CI/CD, Terraform, AWS. Write professional READMEs for all projects. Architecture diagrams.',
      },
      {
        w: 52,
        f: 'Interview Q&A + Mock Interviews',
        t: 'DevOps/Cloud/SRE interview questions, Linux/K8s/AWS deep dives, mock interview with peers or Pramp. Day 365 DONE.',
      },
      {
        w: 53,
        f: 'React Native Final Polish + Day 365',
        t: 'React Native Chaicode final week - deploy app to TestFlight. June 15, 2027 = Day 365 = 1 Year of Code COMPLETE.',
      },
    ],
  },
  ,
  {
    id: 'p20',
    seq: 20,
    icon: '📱',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'React Native (Chaicode)',
    days: 35,
    ds: 366,
    de: 400,
    period: 'Jun 16 - Jul 20, 2027',
    wks: 'W53-W57',
    ms: 'React Native COMPLETE · Day 400',
    about:
      '6 weeks dedicated to React Native via Chaicode. Now that OKLABS is done you have full focus. Core components, navigation, device APIs, Redux Toolkit in RN, animations, EAS Build. Build and deploy FPO mobile flight app to TestFlight on your iPad.',
    courses: [
      'Chaicode - React Native Full Course (primary, free, Hindi + English)',
      'Stephen Grider - The Complete React Native + Hooks Course 4.8 stars (38h) - supplementary reference',
      'Expo documentation - EAS Build, TestFlight submission, Expo SDK modules',
    ],
    wplan: [
      {
        w: 53,
        f: 'Core Components + Styling',
        t: 'View, Text, Image, TextInput, StyleSheet, Flexbox layout, FlatList, ScrollView, SectionList - Chaicode exercises on iPad via Expo Go',
      },
      {
        w: 54,
        f: 'Navigation',
        t: 'React Navigation v6 - Stack Navigator, Tab Navigator, Drawer Navigator. Build FPO flight list app with multiple screens.',
      },
      {
        w: 55,
        f: 'State + Async Storage',
        t: 'Redux Toolkit in React Native, AsyncStorage for persistence, Context API, useReducer - offline state management',
      },
      {
        w: 56,
        f: 'Device APIs + Networking',
        t: 'Camera, Location, Push Notifications, Expo SDK modules, fetch/axios for API calls, error handling, loading states',
      },
      {
        w: 57,
        f: 'Animations + Build + Deploy',
        t: 'Reanimated 2, gestures, iOS vs Android differences. EAS Build, TestFlight submission. FPO mobile app final polish and portfolio demo.',
      },
    ],
  },
  {
    id: 'p21',
    seq: 21,
    icon: '🤖',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Agentic AI using Python',
    days: 42,
    ds: 401,
    de: 442,
    period: 'Jul 21 - Aug 31, 2027',
    wks: 'W58-W63',
    ms: 'Agentic AI COMPLETE · Day 442',
    about:
      '6 weeks · 3 courses. LangChain, LangGraph, multi-agent systems, RAG pipelines, Ed Donner 8 real projects. Your SCB Thailand LangChain/LangGraph background makes this a deep revision + extension. Python already solid from OKLABS. Build FPO AI assistant as capstone.',
    courses: [
      'Dr. Frank Kane - ChatGPT + Generative AI Masterclass 2026 (22h) · W58-W59',
      'Ed Donner - Complete Agentic AI Engineering Course 2026 (30h) · W59-W61',
      'Eden Marco - LangChain Develop LLM Powered Applications (22h) · W61-W63',
    ],
    wplan: [
      {
        w: 58,
        f: 'GenAI Foundations',
        t: 'LLMs, embeddings, RAG, prompt engineering (CoT/ReAct/few-shot), AWS Bedrock, vector databases (Pinecone/FAISS) - Frank Kane',
      },
      {
        w: 59,
        f: 'LangChain Core',
        t: 'Chains, agents, tools, memory, LCEL expression language, Pinecone integration - Eden Marco. Revisit your SCB Thailand patterns.',
      },
      {
        w: 60,
        f: 'LangGraph + Multi-Agent',
        t: 'State machines, conditional edges, supervisor agents, multi-agent orchestration, parallel execution - Ed Donner deep dive',
      },
      {
        w: 61,
        f: 'Ed Donner Projects 1',
        t: 'Career Digital Twin, Deep Research Agent, SDR Agent, Engineering Team in Docker containers',
      },
      {
        w: 62,
        f: 'Ed Donner Projects 2',
        t: 'Browser Agent, MCP (Model Context Protocol) integration, production deployment patterns, cost management',
      },
      {
        w: 63,
        f: 'FPO AI Capstone',
        t: 'Build FPO AI Assistant: natural language query over flight data using LangChain + DynamoDB + Lambda. Deploy and demo.',
      },
    ],
  },
];

const MILESTONES = [
  {
    day: 14,
    icon: '📡',
    label: 'Computer Fundamentals',
    date: 'Jun 29, 2026',
    color: '#6366F1',
  },
  {
    day: 35,
    icon: '🐧',
    label: 'Linux Complete',
    date: 'Jul 20, 2026',
    color: '#EA580C',
  },
  {
    day: 49,
    icon: '💻',
    label: 'Bash Scripting',
    date: 'Aug 3, 2026',
    color: '#374151',
  },
  {
    day: 70,
    icon: '🐍',
    label: 'Python for DevOps',
    date: 'Aug 24, 2026',
    color: '#16A34A',
  },
  {
    day: 77,
    icon: '🔀',
    label: 'Git and GitHub',
    date: 'Aug 31, 2026',
    color: '#F59E0B',
  },
  {
    day: 105,
    icon: '⚛',
    label: 'Frontend React',
    date: 'Sep 28, 2026',
    color: '#0EA5E9',
  },
  {
    day: 126,
    icon: '🚀',
    label: 'Backend Python',
    date: 'Oct 19, 2026',
    color: '#7C3AED',
  },
  {
    day: 140,
    icon: '📋',
    label: 'Jira and APIs',
    date: 'Nov 2, 2026',
    color: '#059669',
  },
  {
    day: 161,
    icon: '🐳',
    label: 'Docker Complete',
    date: 'Nov 23, 2026',
    color: '#0369A1',
  },
  {
    day: 189,
    icon: '☸',
    label: 'Kubernetes Complete',
    date: 'Dec 21, 2026',
    color: '#4338CA',
  },
  {
    day: 210,
    icon: '⚙',
    label: 'CI/CD Complete',
    date: 'Jan 11, 2027',
    color: '#DC2626',
  },
  {
    day: 224,
    icon: '🏗',
    label: 'Terraform Complete',
    date: 'Jan 25, 2027',
    color: '#B45309',
  },
  {
    day: 280,
    icon: '☁',
    label: 'AWS Complete',
    date: 'Mar 22, 2027',
    color: '#D97706',
  },
  {
    day: 294,
    icon: '📊',
    label: 'Monitoring Complete',
    date: 'Apr 5, 2027',
    color: '#0EA5E9',
  },
  {
    day: 308,
    icon: '✅',
    label: 'SonarQube Complete',
    date: 'Apr 19, 2027',
    color: '#16A34A',
  },
  {
    day: 322,
    icon: '🔒',
    label: 'DevSecOps Complete',
    date: 'May 3, 2027',
    color: '#E11D48',
  },
  {
    day: 350,
    icon: '🏆',
    label: 'Capstone Projects',
    date: 'May 31, 2027',
    color: '#7C3AED',
  },
  {
    day: 365,
    icon: '🎯',
    label: 'OKLABS Year DONE',
    date: 'Jun 15, 2027',
    color: '#374151',
  },
  {
    day: 400,
    icon: '📱',
    label: 'React Native DONE',
    date: 'Jul 20, 2027',
    color: '#7C3AED',
  },
  {
    day: 442,
    icon: '🤖',
    label: 'Agentic AI DONE',
    date: 'Aug 31, 2027',
    color: '#6366F1',
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
        opacity: isDone ? 0.75 : 1,
        boxShadow: open
          ? '0 6px 22px ' + p.color + '14'
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
          padding: '10px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          textAlign: 'left',
          fontFamily: 'inherit',
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            flexShrink: 0,
            transition: 'all 0.22s',
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
            boxShadow: open ? '0 4px 12px ' + p.color + '45' : 'none',
          }}
        >
          <span style={{ fontSize: 15, lineHeight: 1 }}>
            {isDone ? '✅' : p.icon}
          </span>
          <span
            style={{
              fontSize: 7,
              fontWeight: 700,
              color: open ? 'rgba(255,255,255,0.65)' : p.color,
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
                borderRadius: 12,
                whiteSpace: 'nowrap',
                background: '#EEF2FF',
                color: '#4338CA',
                border: '1px solid #C7D2FE',
              }}
            >
              {'OKLABS'}
            </span>
            <span
              style={{
                fontSize: 'clamp(11px,3.5vw,13px)',
                fontWeight: 800,
                color: '#0F172A',
              }}
            >
              {p.name}
            </span>
          </div>
          <div style={{ fontSize: 9, color: '#64748B', marginBottom: 1 }}>
            {p.period + ' · D' + p.ds + '-D' + p.de + ' · ' + p.wks}
          </div>
          <div style={{ fontSize: 8, fontWeight: 800, color: p.color }}>
            {'🏆 ' + p.ms}
          </div>
        </div>

        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 900,
              color: p.color,
              background: p.color + '12',
              padding: '2px 8px',
              borderRadius: 12,
              border: '1px solid ' + p.color + '22',
              marginBottom: 2,
            }}
          >
            {p.days + 'd'}
          </div>
          <div style={{ fontSize: 8, color: '#94A3B8' }}>{p.wks}</div>
        </div>

        <span
          style={{
            color: p.color,
            fontSize: 16,
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
            padding: '10px 12px 14px',
          }}
        >
          <div
            style={{
              background: p.color + '0A',
              border: '1px solid ' + p.color + '22',
              borderRadius: 9,
              padding: '9px 11px',
              marginBottom: 10,
              fontSize: 11,
              color: '#334155',
              lineHeight: 1.75,
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
              {'📚 RESOURCES'}
            </div>
            {p.courses.map((c, i) => (
              <div
                key={i}
                style={{ display: 'flex', gap: 5, padding: '2px 0' }}
              >
                <span
                  style={{
                    fontSize: 9,
                    flexShrink: 0,
                    marginTop: 2,
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
              {'📅 Week-by-Week Plan — ' +
                p.wplan.length +
                (p.wplan.length > 1 ? ' weeks' : ' week')}
            </span>
            <span style={{ fontSize: 12, color: p.color }}>
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
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      flexShrink: 0,
                      background: p.color + '18',
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
                      style={{ fontSize: 11, fontWeight: 900, lineHeight: 1 }}
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

  const d = daysIn();
  const cid = curId();
  const prog = pct();
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
            'linear-gradient(135deg,#1a237e 0%,#283593 40%,#1565C0 100%)',
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
              'radial-gradient(circle,rgba(255,255,255,0.055) 1px,transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />

        <div
          style={{
            maxWidth: 680,
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 12,
            }}
          >
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 12,
                flexShrink: 0,
                background: 'linear-gradient(135deg,#F59E0B,#D97706)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                boxShadow: '0 4px 16px rgba(245,158,11,0.5)',
              }}
            >
              {'🏆'}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.5)',
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
                {'442 Days of Code'}
              </div>
              <div
                style={{
                  fontSize: 9,
                  color: 'rgba(255,255,255,0.6)',
                  marginTop: 2,
                }}
              >
                {
                  'Tue Jun 16, 2026  →  Tue Aug 31, 2027 · 442 days · 5:30 AM to 8:30 AM daily'
                }
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 6,
              marginBottom: 12,
            }}
          >
            {[
              {
                icon: '🎓',
                label: 'OKLABS Batch',
                desc: '19 phases: Linux, Python, Git, React, Flask, Docker, K8s, CI/CD, Terraform, AWS, DevSecOps, Capstone Projects',
                col: '#6366F1',
              },
              {
                icon: '📱',
                label: 'React Native (Chaicode)',
                desc: 'D366-D400 · 5 weeks dedicated after OKLABS. Core components, Navigation, Redux, Device APIs, EAS Build, TestFlight.',
                col: '#7C3AED',
              },
              {
                icon: '🤖',
                label: 'Agentic AI using Python',
                desc: 'D401-D442 · 6 weeks. LangChain, LangGraph, Ed Donner 8 projects. Build FPO AI assistant. Opens GenAI Engineer roles.',
                col: '#6366F1',
              },
            ].map(({ icon, label, desc, col }) => (
              <div
                key={label}
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  borderRadius: 9,
                  padding: '9px 11px',
                  border: '1px solid ' + col + '70',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    marginBottom: 4,
                  }}
                >
                  <span style={{ fontSize: 16 }}>{icon}</span>
                  <span style={{ fontSize: 10, fontWeight: 800, color: col }}>
                    {label}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 8,
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.55,
                  }}
                >
                  {desc}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              background: 'rgba(245,158,11,0.18)',
              border: '1px solid rgba(245,158,11,0.4)',
              borderRadius: 8,
              padding: '8px 11px',
              marginBottom: 12,
              display: 'flex',
              gap: 8,
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 16, flexShrink: 0 }}>{'⏰'}</span>
            <div>
              <div style={{ fontSize: 10, fontWeight: 800, color: '#FDE68A' }}>
                {'5:30 AM – 8:30 AM daily · MANDATORY · Weekends: Maximum Time'}
              </div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.55)' }}>
                {
                  'OKLABS batch runs in the day · React Native Chaicode runs at 5:30-8:30 AM · FPO Cloud work alongside'
                }
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 10 }}>
            <div
              style={{
                height: 12,
                borderRadius: 6,
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
                    borderRight: '1px solid rgba(0,0,0,0.08)',
                    background:
                      d + 1 > p.de
                        ? p.color + '70'
                        : d + 1 >= p.ds
                          ? p.color
                          : p.color + '35',
                  }}
                  onClick={() => jump(p.id)}
                  title={p.name}
                />
              ))}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 3,
                fontSize: 8,
                color: 'rgba(255,255,255,0.45)',
              }}
            >
              <span>{'Jun 16, 2026'}</span>
              <span
                style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 700 }}
              >
                {prog + '% · Day ' + Math.min(d + 1, 442) + ' of 442'}
              </span>
              <span>{'Aug 31, 2027'}</span>
            </div>
          </div>

          <button
            onClick={() => setShowMs(!showMs)}
            style={{
              width: '100%',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
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
                ' unlocked'}
            </span>
            <span
              style={{
                color: 'rgba(255,255,255,0.6)',
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
                gridTemplateColumns: 'repeat(auto-fill,minmax(155px,1fr))',
                gap: 4,
              }}
            >
              {MILESTONES.map((m, i) => {
                const done = m.day <= d + 1;
                const isNext = nextMs && nextMs.day === m.day;
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
                            ? m.color + '50'
                            : 'rgba(255,255,255,0.1)'),
                    }}
                  >
                    <span style={{ fontSize: 13, flexShrink: 0 }}>
                      {done ? '✅' : isNext ? '🎯' : m.icon}
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: 8,
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
                        style={{ fontSize: 7, color: 'rgba(255,255,255,0.38)' }}
                      >
                        {'D' + m.day + ' · ' + m.date}
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: 7,
                        fontWeight: 800,
                        padding: '1px 4px',
                        borderRadius: 6,
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
        style={{ maxWidth: 680, margin: '0 auto', padding: '12px 10px 40px' }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 10,
            marginTop: 4,
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
              {'🎓 OKLABS + REACT NATIVE + AGENTIC AI — 21 PHASES'}
            </div>
            <div style={{ fontSize: 8, color: '#94A3B8', marginTop: 1 }}>
              {
                'D1-D365: OKLABS · D366-D400: React Native · D401-D442: Agentic AI · Ends Aug 31, 2027'
              }
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
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
            marginTop: 20,
            background: 'linear-gradient(135deg,#1a237e,#1565C0)',
            borderRadius: 12,
            padding: '14px 16px',
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
            {'🏆 442 Days of Code · Jun 16, 2026 to Aug 31, 2027'}
          </div>
          <div
            style={{
              fontSize: 9,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 8,
            }}
          >
            {
              'OKLABS (19 phases) + React Native (Chaicode) + Agentic AI (Python) · 5:30–8:30 AM mandatory'
            }
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 3,
              flexWrap: 'wrap',
            }}
          >
            {MILESTONES.map((m, i, a) => (
              <span
                key={m.label}
                style={{ display: 'flex', alignItems: 'center', gap: 2 }}
              >
                <span
                  style={{
                    fontSize: 8,
                    color: m.color,
                    fontWeight: 700,
                    opacity: m.day <= d + 1 ? 1 : 0.38,
                  }}
                >
                  {m.icon + ' ' + m.label.split(' ')[0]}
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
