import { useState } from 'react';

// 540 Days of Code
// Thu Jun 18, 2026 to Thu Dec 9, 2027
// 5:30 AM to 8:30 AM daily mandatory + weekends maximum
// Block 1: OKLABS Batch D1-D365
// Block 2: React Native D366-D400
// Block 3: Agentic AI Python D401-D440
// Block 4: Interview Prep D441-D540

const START = new Date('2026-06-18');
const TOTAL = 540;

const PHASES = [
  // ══ BLOCK 1: OKLABS BATCH · 365 days ═══════════════════════════════════════

  {
    id: 'p01',
    block: 1,
    seq: 1,
    icon: '📡',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Computer Fundamentals',
    label: 'Block 1 · OKLABS',
    days: 14,
    ds: 1,
    de: 14,
    period: 'Jun 18 - Jul 1, 2026',
    wks: 'W01-W02',
    ms: 'Computer Fundamentals Done · D14',
    about:
      '2 weeks. IT Fundamentals (SDLC, Agile, Scrum, DevOps culture) + Networking (LAN/WAN/IP/DNS/DHCP/VPN/Firewalls) + OSI 7-layer model + TCP/IP protocols. Foundation for everything in the batch.',
    courses: [
      'OKLABS Phase 1-3: IT Fundamentals, Networking, OSI Model and TCP/IP',
    ],
    wplan: [
      {
        w: 1,
        f: 'IT Fundamentals + Networking',
        t: 'SDLC, Agile, Scrum, DevOps culture. LAN/WAN, IP addressing, DNS, DHCP, NAT, VPN, Firewalls, Routing and Switching',
      },
      {
        w: 2,
        f: 'OSI Model + Protocols + Labs',
        t: 'OSI 7 layers, TCP vs UDP, HTTP/HTTPS, SSH, SMTP. Wireshark packet analysis, CIDR calculations, DNS troubleshooting',
      },
    ],
  },
  {
    id: 'p02',
    block: 1,
    seq: 2,
    icon: '🐧',
    color: '#EA580C',
    dark: '#C2410C',
    bg: '#FFF7ED',
    border: '#FED7AA',
    name: 'Linux OS Fundamentals',
    label: 'Block 1 · OKLABS',
    days: 21,
    ds: 15,
    de: 35,
    period: 'Jul 2 - Jul 22, 2026',
    wks: 'W03-W05',
    ms: 'Linux Done · D35',
    about:
      '3 weeks. Linux architecture, 10+ distros, 100+ commands across file ops, process management, user admin, networking, package management, web servers. Projects: Production Linux Server Setup, Secure SSH Config, Apache Reverse Proxy.',
    courses: [
      'OKLABS Phase 4-12: OS Fundamentals, Linux Commands, User Admin, File System, Process Mgmt, Package Mgmt, Networking, Web Servers, Monitoring',
    ],
    wplan: [
      {
        w: 3,
        f: 'Linux Architecture + Core Commands',
        t: 'OS types, Linux layers, distros. File ops (ls/cp/mv/rm), directory mgmt, search (find/grep), text processing (awk/sed/cut)',
      },
      {
        w: 4,
        f: 'Permissions + Process + Users',
        t: 'chmod/chown/umask, ps/kill/top/htop, useradd/usermod, systemctl, cron jobs, package managers (apt/yum/dnf)',
      },
      {
        w: 5,
        f: 'Web Servers + Monitoring + Projects',
        t: "Apache, Nginx, reverse proxy, SSL/Let's Encrypt, journalctl, syslog. Project: Production Linux server + Secure SSH + Apache proxy",
      },
    ],
  },
  {
    id: 'p03',
    block: 1,
    seq: 3,
    icon: '💻',
    color: '#374151',
    dark: '#111827',
    bg: '#F9FAFB',
    border: '#D1D5DB',
    name: 'Shell Scripting and Bash',
    label: 'Block 1 · OKLABS',
    days: 14,
    ds: 36,
    de: 49,
    period: 'Jul 23 - Aug 5, 2026',
    wks: 'W06-W07',
    ms: 'Bash Scripting Done · D49',
    about:
      '2 weeks. Bash scripting from variables to error handling. Automation scripts for backups, log rotation, health monitoring, user provisioning. Projects: Automated Server Monitoring, Daily Backup System, User Management Automation.',
    courses: ['OKLABS Phase 13-14: Bash Scripting, Linux Automation'],
    wplan: [
      {
        w: 6,
        f: 'Bash Fundamentals',
        t: 'Variables, functions, loops (for/while/until), conditions (if/case), arrays, error handling, exit codes, cron scheduling',
      },
      {
        w: 7,
        f: 'Automation + Projects',
        t: 'Backup scripts, log rotation, health monitoring, user provisioning. Projects: Automated Server Monitor, Daily Backup, User Mgmt Automation',
      },
    ],
  },
  {
    id: 'p04',
    block: 1,
    seq: 4,
    icon: '🐍',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'Python for DevOps',
    label: 'Block 1 · OKLABS',
    days: 21,
    ds: 50,
    de: 70,
    period: 'Aug 6 - Aug 26, 2026',
    wks: 'W08-W10',
    ms: 'Python for DevOps Done · D70',
    about:
      '3 weeks. Python fundamentals through OOP through AWS automation. Projects: EC2 Provisioning Tool, Automated Backup Utility, Infrastructure Health Dashboard. Your SCB Thailand Python/boto3 background makes this fast.',
    courses: [
      'OKLABS Phase 15-18: Python Fundamentals, Intermediate Python, Advanced Python, DevOps with Python (boto3, AWS automation)',
    ],
    wplan: [
      {
        w: 8,
        f: 'Python Fundamentals + OOP',
        t: 'Variables, data types, loops, functions, OOP (classes/inheritance), modules, packages, exception handling',
      },
      {
        w: 9,
        f: 'Advanced Python + APIs',
        t: 'File handling, JSON processing, API integration, multithreading, boto3 AWS automation, monitoring scripts, log parsing',
      },
      {
        w: 10,
        f: 'DevOps Python Projects',
        t: 'EC2 Provisioning Tool, Automated Backup Utility, Infrastructure Health Dashboard - all 3 built and documented',
      },
    ],
  },
  {
    id: 'p05',
    block: 1,
    seq: 5,
    icon: '🔀',
    color: '#F59E0B',
    dark: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'Git and GitHub',
    label: 'Block 1 · OKLABS',
    days: 7,
    ds: 71,
    de: 77,
    period: 'Aug 27 - Sep 2, 2026',
    wks: 'W11',
    ms: 'Git and GitHub Done · D77',
    about:
      '1 week. Git fundamentals, branching strategy, merge conflicts. GitHub: repositories, pull requests, code reviews, security. Projects: Team Collaboration Project + Git Workflow Implementation.',
    courses: ['OKLABS Phase 19-20: Version Control System, GitHub'],
    wplan: [
      {
        w: 11,
        f: 'Git + GitHub + Projects',
        t: 'Git fundamentals, branching (feature/hotfix), merge vs rebase, PRs, code reviews, GitHub security. Team Collaboration + Git Workflow projects',
      },
    ],
  },
  {
    id: 'p06',
    block: 1,
    seq: 6,
    icon: '⚛',
    color: '#0EA5E9',
    dark: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    name: 'Frontend: HTML / CSS / JS / React',
    label: 'Block 1 · OKLABS',
    days: 28,
    ds: 78,
    de: 105,
    period: 'Sep 3 - Sep 30, 2026',
    wks: 'W12-W15',
    ms: 'Frontend React Done · D105',
    about:
      '4 weeks. SPA architecture, component-based development, React fundamentals and advanced patterns. Project: DevOps Monitoring Dashboard UI. Builds directly on your existing React knowledge from FPO Cloud.',
    courses: [
      'OKLABS Phase 21-23: Frontend Engineering (HTML5/CSS3/JS/Bootstrap), React Fundamentals, React Advanced',
    ],
    wplan: [
      {
        w: 12,
        f: 'HTML/CSS/JS/Bootstrap',
        t: 'HTML5 semantics, CSS3 flexbox/grid, JavaScript ES6+ (arrow functions, promises, async/await), jQuery, Bootstrap responsive design',
      },
      {
        w: 13,
        f: 'React Fundamentals',
        t: 'React architecture, JSX, components, props, state, events, conditional rendering, lists - OKLABS React modules',
      },
      {
        w: 14,
        f: 'React Hooks + Advanced',
        t: 'useState, useEffect, useContext, useRef, custom hooks, React Router v6, API integration, Context API',
      },
      {
        w: 15,
        f: 'DevOps Dashboard Project',
        t: 'Build DevOps Monitoring Dashboard UI - server health, pipeline status, deployment metrics. Full capstone project.',
      },
    ],
  },
  {
    id: 'p07',
    block: 1,
    seq: 7,
    icon: '🚀',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'Backend: Python / Flask / FastAPI',
    label: 'Block 1 · OKLABS',
    days: 21,
    ds: 106,
    de: 126,
    period: 'Oct 1 - Oct 21, 2026',
    wks: 'W16-W18',
    ms: 'Backend Python Done · D126',
    about:
      '3 weeks. Backend architecture, REST principles, Flask and FastAPI frameworks, JWT authentication, PostgreSQL. Projects: Employee Management API, Cloud Resource Management API.',
    courses: [
      'OKLABS Phase 24-26: Backend Fundamentals, Python Backend (Flask/FastAPI), Database Concepts (PostgreSQL)',
    ],
    wplan: [
      {
        w: 16,
        f: 'Flask + REST Fundamentals',
        t: 'Backend architecture, REST principles, Flask routes, blueprints, JWT authentication, authorization',
      },
      {
        w: 17,
        f: 'FastAPI + PostgreSQL',
        t: 'FastAPI async endpoints, Pydantic models, PostgreSQL with SQLAlchemy ORM, Alembic migrations',
      },
      {
        w: 18,
        f: 'Backend Projects',
        t: 'Employee Management API + Cloud Resource Management API - both built, tested, and documented',
      },
    ],
  },
  {
    id: 'p08',
    block: 1,
    seq: 8,
    icon: '🔌',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECDD3',
    name: 'APIs and Integrations',
    label: 'Block 1 · OKLABS',
    days: 7,
    ds: 127,
    de: 133,
    period: 'Oct 22 - Oct 28, 2026',
    wks: 'W19',
    ms: 'APIs Done · D133',
    about:
      '1 week. REST, GraphQL, SOAP, Webhook APIs. Security: OAuth2, JWT, API Keys, Rate Limiting. Projects: REST API Development + GraphQL API Integration.',
    courses: [
      'OKLABS Phase 27-28: API Fundamentals, API Security (OAuth2/JWT/Rate Limiting)',
    ],
    wplan: [
      {
        w: 19,
        f: 'API Types + Security + Projects',
        t: 'REST/GraphQL/SOAP/Webhook deep dive, OAuth2 flows, JWT, rate limiting. Build REST API + GraphQL API projects',
      },
    ],
  },
  {
    id: 'p09',
    block: 1,
    seq: 9,
    icon: '📋',
    color: '#059669',
    dark: '#047857',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    name: 'Jira and Confluence',
    label: 'Block 1 · OKLABS',
    days: 7,
    ds: 134,
    de: 140,
    period: 'Oct 29 - Nov 4, 2026',
    wks: 'W20',
    ms: 'Jira and Confluence Done · D140',
    about:
      '1 week. Jira: Scrum boards, sprint planning, user stories, epics. Confluence: documentation, knowledge base. Project: Complete Agile Sprint Lifecycle.',
    courses: ['OKLABS Phase 29-30: Jira, Confluence'],
    wplan: [
      {
        w: 20,
        f: 'Jira + Confluence + Agile Sprint',
        t: 'Jira Scrum boards, sprint planning, user stories, epics. Confluence docs. Full Agile sprint lifecycle project.',
      },
    ],
  },
  {
    id: 'p10',
    block: 1,
    seq: 10,
    icon: '🐳',
    color: '#0369A1',
    dark: '#1e40af',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    name: 'Docker',
    label: 'Block 1 · OKLABS',
    days: 21,
    ds: 141,
    de: 161,
    period: 'Nov 5 - Nov 25, 2026',
    wks: 'W21-W23',
    ms: 'Docker Done · D161',
    about:
      '3 weeks. Container fundamentals vs virtualization, Docker images/containers/networking/volumes, Docker Compose. Projects: React + Python App Containerization, Production Docker Deployment.',
    courses: [
      'OKLABS Phase 31-33: Container Fundamentals, Docker, Docker Compose',
    ],
    wplan: [
      {
        w: 21,
        f: 'Container Fundamentals + Docker Core',
        t: 'Virt vs containers, Dockerfile, docker build/run/stop/rm, images, ports, environment variables',
      },
      {
        w: 22,
        f: 'Docker Networking + Volumes + Compose',
        t: 'Bridge/host/overlay networks, volumes, bind mounts, Docker Compose multi-service stacks',
      },
      {
        w: 23,
        f: 'Docker Projects',
        t: 'React + Python app containerization. Production Docker deployment with Nginx reverse proxy. Push to ECR.',
      },
    ],
  },
  {
    id: 'p11',
    block: 1,
    seq: 11,
    icon: '☸',
    color: '#4338CA',
    dark: '#3730A3',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Kubernetes',
    label: 'Block 1 · OKLABS',
    days: 28,
    ds: 162,
    de: 189,
    period: 'Nov 26 - Dec 23, 2026',
    wks: 'W24-W27',
    ms: 'Kubernetes Done · D189',
    about:
      '4 weeks. K8s architecture, Pods/Deployments/Services/ConfigMaps/Secrets, storage (PV/PVC), Ingress, RBAC. Projects: Production K8s Cluster + Highly Available App Deployment on AWS EKS.',
    courses: [
      'OKLABS Phase 34-38: K8s Fundamentals, K8s Objects, K8s Storage, K8s Networking, K8s Security',
    ],
    wplan: [
      {
        w: 24,
        f: 'K8s Architecture + Core Objects',
        t: 'Control plane, worker nodes, kubectl, Pods, Deployments, ReplicaSets - KodeKloud/Killercoda hands-on labs',
      },
      {
        w: 25,
        f: 'Services + ConfigMaps + Storage',
        t: 'ClusterIP/NodePort/LoadBalancer, ConfigMaps, Secrets, PersistentVolumes, PVCs, StorageClasses',
      },
      {
        w: 26,
        f: 'Ingress + Security + RBAC',
        t: 'Ingress controllers, service discovery, RBAC roles/rolebindings, NetworkPolicies, security contexts',
      },
      {
        w: 27,
        f: 'K8s Projects on AWS EKS',
        t: 'Production K8s cluster + Highly Available application deployment on AWS EKS with autoscaling',
      },
    ],
  },
  {
    id: 'p12',
    block: 1,
    seq: 12,
    icon: '⚙',
    color: '#DC2626',
    dark: '#B91C1C',
    bg: '#FEF2F2',
    border: '#FECACA',
    name: 'CI/CD: Jenkins + GitHub Actions',
    label: 'Block 1 · OKLABS',
    days: 21,
    ds: 190,
    de: 210,
    period: 'Dec 24, 2026 - Jan 13, 2027',
    wks: 'W28-W30',
    ms: 'CI/CD Done · D210',
    about:
      '3 weeks. CI/CD fundamentals, Blue-Green/Rolling/Canary deployments. Jenkins (master-agent, Jenkinsfile, pipelines, SonarQube integration). GitHub Actions (workflows, matrix builds, reusable workflows).',
    courses: [
      'OKLABS Phase 39-41: CI/CD Fundamentals, Jenkins, GitHub Actions',
    ],
    wplan: [
      {
        w: 28,
        f: 'CI/CD Fundamentals + Jenkins Core',
        t: 'CI/CD concepts, Blue-Green/Rolling/Canary, Jenkins install, master-agent, Jenkinsfile declarative pipelines',
      },
      {
        w: 29,
        f: 'Jenkins Integrations + GitHub Actions',
        t: 'Jenkins with Docker/K8s/AWS/SonarQube, GitHub Actions workflows, matrix builds, reusable workflows, secrets',
      },
      {
        w: 30,
        f: 'CI/CD Projects',
        t: 'Docker Build Pipeline, K8s Deployment Pipeline, React App CI/CD, Python API CI/CD via Jenkins and GitHub Actions',
      },
    ],
  },
  {
    id: 'p13',
    block: 1,
    seq: 13,
    icon: '🏗',
    color: '#B45309',
    dark: '#92400E',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'Terraform IaC',
    label: 'Block 1 · OKLABS',
    days: 14,
    ds: 211,
    de: 224,
    period: 'Jan 14 - Jan 27, 2027',
    wks: 'W31-W32',
    ms: 'Terraform Done · D224',
    about:
      '2 weeks. HCL syntax, providers, resources, variables, modules, state management, remote state (S3+DynamoDB), multi-environment deployment. Projects: AWS Infrastructure Provisioning + EKS Cluster Deployment.',
    courses: ['OKLABS Phase 41-42: Terraform, Advanced Terraform'],
    wplan: [
      {
        w: 31,
        f: 'Terraform Core',
        t: 'HCL syntax, providers, resources, variables, outputs, locals, data sources, state management, modules',
      },
      {
        w: 32,
        f: 'Advanced Terraform + Projects',
        t: 'Remote state (S3+DynamoDB locking), workspaces, multi-env (dev/staging/prod). AWS Infra + EKS Cluster projects',
      },
    ],
  },
  {
    id: 'p14',
    block: 1,
    seq: 14,
    icon: '☁',
    color: '#D97706',
    dark: '#B45309',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'AWS Cloud Engineering',
    label: 'Block 1 · OKLABS · MAX',
    days: 56,
    ds: 225,
    de: 280,
    period: 'Jan 28 - Mar 24, 2027',
    wks: 'W33-W40',
    ms: 'AWS Done · D280',
    about:
      '8 weeks MAX TIME. IAM, EC2, EBS, S3, VPC, Route Tables, NAT/IGW, Security Groups, NACL, RDS, DynamoDB, ALB/NLB, CloudWatch, CloudTrail, ECS/ECR/EKS, Lambda, API Gateway, Secrets Manager. Maps directly to your FPO Cloud production architecture.',
    courses: [
      'OKLABS Phase 43: AWS Fundamentals (global infra, regions, shared responsibility)',
      'OKLABS Phase 44-45: AWS Core Services (IAM/EC2/EBS/S3) and Networking (VPC/subnets/NAT/IGW/Security Groups/NACL)',
      'OKLABS Phase 46-48: Databases (RDS/DynamoDB), Load Balancing (ALB/NLB), Monitoring (CloudWatch/CloudTrail)',
      'OKLABS Phase 49-51: Containers (ECS/ECR/EKS), Serverless (Lambda/API Gateway), Security (IAM/KMS/Secrets Manager)',
    ],
    wplan: [
      {
        w: 33,
        f: 'AWS Fundamentals + IAM',
        t: 'Global infra, regions/AZs, shared responsibility. IAM users/groups/roles/policies/MFA/STS - directly used in FPO Cloud',
      },
      {
        w: 34,
        f: 'EC2 + EBS + S3',
        t: 'EC2 instance types, EBS volume types/snapshots, S3 buckets/policies/versioning/lifecycle/encryption',
      },
      {
        w: 35,
        f: 'VPC + Networking',
        t: 'VPC creation, public/private subnets, route tables, NAT gateway, Internet gateway, Security Groups, NACL, VPC peering',
      },
      {
        w: 36,
        f: 'Databases + Load Balancing',
        t: 'RDS (PostgreSQL), DynamoDB (your FPO database!), ALB/NLB, target groups, health checks, Auto Scaling Groups',
      },
      {
        w: 37,
        f: 'Monitoring + Containers',
        t: 'CloudWatch metrics/logs/alarms/dashboards, CloudTrail, ECS task defs, ECR image registry, EKS cluster mgmt',
      },
      {
        w: 38,
        f: 'Serverless + Security',
        t: 'Lambda functions (your FPO!), API Gateway, Step Functions, Secrets Manager, KMS encryption, IAM best practices',
      },
      {
        w: 39,
        f: 'AWS Projects Part 1',
        t: 'Three-Tier Architecture (ALB + EC2 + RDS) + Highly Available Web Application with auto scaling',
      },
      {
        w: 40,
        f: 'AWS Projects Part 2',
        t: 'Kubernetes on AWS EKS + Serverless Application Deployment - relate to FPO Cloud Lambda architecture',
      },
    ],
  },
  {
    id: 'p15',
    block: 1,
    seq: 15,
    icon: '📊',
    color: '#0EA5E9',
    dark: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    name: 'DevOps Monitoring and Observability',
    label: 'Block 1 · OKLABS',
    days: 14,
    ds: 281,
    de: 294,
    period: 'Mar 25 - Apr 7, 2027',
    wks: 'W41-W42',
    ms: 'Monitoring Done · D294',
    about:
      '2 weeks. Prometheus metrics, Grafana dashboards, centralized logging, log aggregation, alert rules, incident response. Projects: Complete Monitoring Stack + Infrastructure Observability Platform. Maps to Datadog you use on FPO.',
    courses: [
      'OKLABS Phase 52-54: Monitoring (Prometheus/Grafana), Logging, Alerting',
    ],
    wplan: [
      {
        w: 41,
        f: 'Prometheus + Grafana',
        t: 'Prometheus exporters, PromQL, alertmanager. Grafana dashboards for infra metrics - compare to Datadog on FPO',
      },
      {
        w: 42,
        f: 'Centralized Logging + Projects',
        t: 'ELK stack or Grafana Loki, log aggregation, alerting. Complete Monitoring Stack + Observability Platform projects',
      },
    ],
  },
  {
    id: 'p16',
    block: 1,
    seq: 16,
    icon: '✅',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'SonarQube and QA',
    label: 'Block 1 · OKLABS',
    days: 14,
    ds: 295,
    de: 308,
    period: 'Apr 8 - Apr 21, 2027',
    wks: 'W43-W44',
    ms: 'SonarQube Done · D308',
    about:
      '2 weeks. Static code analysis, quality gates, technical debt, code smells, vulnerability detection. Jenkins + GitHub Actions integration, PR analysis, coverage reports. Projects: Enterprise SonarQube Deployment + Automated Quality Gate Pipeline.',
    courses: [
      'OKLABS Phase 17 (QA): SonarQube fundamentals, administration, integrations, security analysis',
    ],
    wplan: [
      {
        w: 43,
        f: 'SonarQube Core + Administration',
        t: 'Install/configure SonarQube, quality gates, code smells, technical debt, security hotspots, vulnerability detection',
      },
      {
        w: 44,
        f: 'Integrations + Projects',
        t: 'Jenkins + GitHub Actions PR analysis, coverage reports. Enterprise SonarQube Deployment + Quality Gate Pipeline projects',
      },
    ],
  },
  {
    id: 'p17',
    block: 1,
    seq: 17,
    icon: '🔒',
    color: '#E11D48',
    dark: '#BE123C',
    bg: '#FFF1F2',
    border: '#FECADA',
    name: 'DevSecOps and Security',
    label: 'Block 1 · OKLABS',
    days: 14,
    ds: 309,
    de: 322,
    period: 'Apr 22 - May 5, 2027',
    wks: 'W45-W46',
    ms: 'DevSecOps Done · D322',
    about:
      '2 weeks. Security in SDLC, secure coding, threat modeling, Docker/K8s security, Trivy image scanning, OWASP dependency check. Secrets management (GitHub/Jenkins/AWS Secrets Manager). Projects: Secure CI/CD Pipeline + Container Security Automation.',
    courses: [
      'OKLABS Phase 18 (DevSecOps): DevSecOps fundamentals, container security, security scanning tools, secrets management',
    ],
    wplan: [
      {
        w: 45,
        f: 'DevSecOps Fundamentals + Tools',
        t: 'Security in SDLC, threat modeling, Docker security, K8s RBAC/NetworkPolicies, Trivy image scanning, OWASP',
      },
      {
        w: 46,
        f: 'Secrets Management + Projects',
        t: 'GitHub Secrets, Jenkins Credentials, AWS Secrets Manager. Secure CI/CD Pipeline + Container Security Automation projects',
      },
    ],
  },
  {
    id: 'p18',
    block: 1,
    seq: 18,
    icon: '🏆',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'Capstone Projects',
    label: 'Block 1 · OKLABS',
    days: 28,
    ds: 323,
    de: 350,
    period: 'May 6 - Jun 2, 2027',
    wks: 'W47-W50',
    ms: 'Capstone Projects Done · D350',
    about:
      '4 weeks. Enterprise-grade end-to-end projects. Pipeline: GitHub to Jenkins/GitHub Actions to SonarQube to Docker build to Trivy scan to ECR push to Terraform infra to EKS deployment to Smoke tests to Prometheus/Grafana monitoring.',
    courses: [
      'Project 1: Terraform + GitHub Actions + Kubernetes End-to-End CI/CD Pipeline',
      'Project 2: Production EKS Cluster with Prometheus/Grafana Monitoring and Centralized Logging',
      'Project 3: Multi-Environment Cloud Infrastructure Automation (dev/staging/prod)',
      'Project 4: Complete DevOps Platform Engineering Project - all tools integrated',
    ],
    wplan: [
      {
        w: 47,
        f: 'Project 1: E2E CI/CD Pipeline',
        t: 'GitHub to GHA/Jenkins to SonarQube to Docker to Trivy to ECR to Terraform to EKS - full enterprise pipeline',
      },
      {
        w: 48,
        f: 'Project 2: Production EKS + Monitoring',
        t: 'EKS cluster, Prometheus/Grafana monitoring, Loki logging, alertmanager, auto-scaling, rolling deployments',
      },
      {
        w: 49,
        f: 'Project 3: Multi-Env Infrastructure',
        t: 'Terraform workspaces for dev/staging/prod. Different VPCs, sizes, configs per environment.',
      },
      {
        w: 50,
        f: 'Project 4: Full DevOps Platform',
        t: 'Complete platform: Jenkins/GHA/SonarQube/Docker/K8s/Terraform/AWS/Prometheus all integrated end-to-end',
      },
    ],
  },
  {
    id: 'p19',
    block: 1,
    seq: 19,
    icon: '🎯',
    color: '#374151',
    dark: '#111827',
    bg: '#F9FAFB',
    border: '#D1D5DB',
    name: 'OKLABS Revision and Job Prep',
    label: 'Block 1 · OKLABS · FINAL',
    days: 15,
    ds: 351,
    de: 365,
    period: 'Jun 3 - Jun 17, 2027',
    wks: 'W51-W52',
    ms: 'OKLABS Year 1 COMPLETE · D365',
    about:
      '2 weeks + 1 day. Revise all 18 OKLABS phases. Polish GitHub portfolio (professional READMEs, architecture diagrams). Update LinkedIn and resume for DevOps/Cloud/SRE/Platform Engineer roles. Mock interview practice.',
    courses: [
      'Full revision: Linux, Docker, K8s, CI/CD, Terraform, AWS - focus on weakest areas',
      'GitHub portfolio polish: READMEs, architecture diagrams, demo GIFs for all projects',
      'Interview Q&A: DevOps/Cloud/SRE/Platform Engineer roles - salary research for Bangkok market',
    ],
    wplan: [
      {
        w: 51,
        f: 'Full Revision + GitHub Portfolio',
        t: 'Revise Linux, Docker, K8s, CI/CD, Terraform, AWS. Write professional READMEs. Architecture diagrams for all projects.',
      },
      {
        w: 52,
        f: 'Interview Q&A + Mock Interviews',
        t: 'DevOps/Cloud/SRE interview Q&A, mock interviews. Day 365 = 1 year of OKLABS COMPLETE.',
      },
      {
        w: 53,
        f: 'Wrap up + Transition to Block 2',
        t: 'Final day of Block 1. Polish everything, update CV, LinkedIn. Ready to start React Native dedicated study.',
      },
    ],
  },

  // ══ BLOCK 2: REACT NATIVE · 35 days ════════════════════════════════════════

  {
    id: 'p20',
    block: 2,
    seq: 20,
    icon: '📱',
    color: '#7C3AED',
    dark: '#6D28D9',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    name: 'React Native (Chaicode)',
    label: 'Block 2 · React Native',
    days: 35,
    ds: 366,
    de: 400,
    period: 'Jun 18 - Jul 22, 2027',
    wks: 'W53-W57',
    ms: 'React Native COMPLETE · D400',
    about:
      '5 weeks dedicated. Chaicode React Native course - full focus now that OKLABS is done. Core components, React Navigation v6, Redux Toolkit in RN, device APIs, animations, EAS Build. Build and deploy FPO mobile flight app to TestFlight on your iPad.',
    courses: [
      'Chaicode - React Native Full Course (primary - Hindi + English, free)',
      'Stephen Grider - The Complete React Native + Hooks Course 4.8 stars (38h) - supplementary reference',
      'Expo documentation - EAS Build, TestFlight submission, Expo Go debugging',
    ],
    wplan: [
      {
        w: 53,
        f: 'Core Components + Styling',
        t: 'View, Text, Image, TextInput, StyleSheet, Flexbox, FlatList, ScrollView, SectionList - exercises on iPad via Expo Go',
      },
      {
        w: 54,
        f: 'React Navigation v6',
        t: 'Stack Navigator, Tab Navigator (bottom/material top), Drawer Navigator. Build FPO flight list with multiple screens.',
      },
      {
        w: 55,
        f: 'State + AsyncStorage',
        t: 'Redux Toolkit in React Native, AsyncStorage persistence, Context API, useReducer, offline state management',
      },
      {
        w: 56,
        f: 'Device APIs + Networking',
        t: 'Camera, Location, Push Notifications, Expo SDK modules, fetch/axios for FPO API calls, error handling',
      },
      {
        w: 57,
        f: 'Animations + Build + Deploy',
        t: 'React Native Animated API, Reanimated 2, gesture handling. EAS Build config, TestFlight submission, FPO app portfolio demo.',
      },
    ],
  },

  // ══ BLOCK 3: AGENTIC AI USING PYTHON · 40 days ═════════════════════════════

  {
    id: 'p21',
    block: 3,
    seq: 21,
    icon: '🤖',
    color: '#6366F1',
    dark: '#4338CA',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    name: 'Agentic AI using Python',
    label: 'Block 3 · Agentic AI',
    days: 40,
    ds: 401,
    de: 440,
    period: 'Jul 23 - Aug 31, 2027',
    wks: 'W58-W63',
    ms: 'Agentic AI COMPLETE · D440',
    about:
      '40 days, ~6 weeks. LangChain, LangGraph, multi-agent systems, RAG pipelines. Ed Donner 8 real projects. Your SCB Thailand LangChain/LangGraph experience means this is deep revision + extension. Python already solid from OKLABS. Capstone: FPO AI assistant deployed to Lambda.',
    courses: [
      'Dr. Frank Kane - ChatGPT + Generative AI Masterclass 2026 (22h) - W58-W59',
      'Ed Donner - Complete Agentic AI Engineering Course 2026 (30h) - W59-W61',
      'Eden Marco - LangChain Develop LLM Powered Applications (22h) - W61-W63',
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
        t: 'Chains, agents, tools, memory, LCEL expression language, Pinecone integration. Revisit and extend your SCB LangChain work.',
      },
      {
        w: 60,
        f: 'LangGraph + Multi-Agent',
        t: 'State machines, conditional edges, supervisor agents, multi-agent orchestration, parallel execution - Ed Donner',
      },
      {
        w: 61,
        f: 'Ed Donner Projects 1',
        t: 'Career Digital Twin, Deep Research Agent, SDR Agent, Engineering Team in Docker containers',
      },
      {
        w: 62,
        f: 'Ed Donner Projects 2 + MCP',
        t: 'Browser Agent, Model Context Protocol (MCP) integration, production deployment, cost and rate management',
      },
      {
        w: 63,
        f: 'FPO AI Capstone',
        t: 'Build FPO AI Assistant: natural language query over flight data using LangChain + DynamoDB + Lambda. Deploy and demo.',
      },
    ],
  },

  // ══ BLOCK 4: INTERVIEW PREPARATION · 100 days ══════════════════════════════

  {
    id: 'p22',
    block: 4,
    seq: 22,
    icon: '⚛',
    color: '#0EA5E9',
    dark: '#0369A1',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    name: 'React and React Native Interview Prep',
    label: 'Block 4 · Interview Prep',
    days: 20,
    ds: 441,
    de: 460,
    period: 'Sep 1 - Sep 20, 2027',
    wks: 'W64-W66',
    ms: 'React / React Native Interview Ready · D460',
    about:
      '20 days. Deep dive interview preparation for React and React Native. 200+ Q&A, coding challenges, common patterns, performance optimization questions. Cover hooks, reconciliation, virtual DOM, navigation patterns, Redux, performance, testing.',
    courses: [
      'Hindi Instructor - React Interview Masterclass 200 Q (11h)',
      'LeetCode / Frontend Interview Handbook - React-specific coding patterns',
      'React Native specific: navigation, performance, platform differences, EAS Build pipeline questions',
    ],
    wplan: [
      {
        w: 64,
        f: 'React Core Interview Q&A',
        t: 'JSX, virtual DOM, reconciliation, component lifecycle, hooks (useState/useEffect/useMemo/useCallback), custom hooks, 100 Q&A',
      },
      {
        w: 65,
        f: 'React Advanced + Redux Q&A',
        t: 'React Router, Context API, Redux Toolkit, RTK Query, code splitting, lazy loading, Suspense, testing with Jest/RTL',
      },
      {
        w: 66,
        f: 'React Native Interview Q&A',
        t: 'RN architecture, bridge vs JSI, navigation patterns, device APIs, EAS Build, performance (FlatList, memo, PureComponent)',
      },
    ],
  },
  {
    id: 'p23',
    block: 4,
    seq: 23,
    icon: '🏗',
    color: '#B45309',
    dark: '#92400E',
    bg: '#FFFBEB',
    border: '#FDE68A',
    name: 'System Design Interview Prep',
    label: 'Block 4 · Interview Prep',
    days: 25,
    ds: 461,
    de: 485,
    period: 'Sep 21 - Oct 15, 2027',
    wks: 'W66-W69',
    ms: 'System Design Interview Ready · D485',
    about:
      '25 days. System design interview mastery. Frank Kane 5-step template. Design 1 system per day spoken aloud, no notes, 45 minutes. Your FPO multi-tenant SaaS + Kafka + Lambda production experience is a massive advantage - use it.',
    courses: [
      'Frank Kane ex-Amazon - Mastering the System Design Interview (5h) - template and framework',
      'Mikhail Smarshchok - System Design Interview Guide 20+ designs (18h) - classic designs',
      'Bogdan Stashchuk - Pragmatic System Design real trade-offs (12h) - WHY decisions were made',
    ],
    wplan: [
      {
        w: 66,
        f: 'SD Framework + Classic Designs 1',
        t: 'Frank Kane 5-step template. URL Shortener, WhatsApp, Twitter - Requirements to HLD to DB to API spoken 45 min',
      },
      {
        w: 67,
        f: 'Classic Designs 2',
        t: 'Netflix, Uber, Notification System, Rate Limiter, Distributed Cache - Mikhail Smarshchok 20+ designs',
      },
      {
        w: 68,
        f: 'Advanced Designs + Trade-offs',
        t: 'Payment System, News Feed, Ride Sharing - Bogdan Stashchuk production trade-offs. FPO Flight Optimiser (your system!)',
      },
      {
        w: 69,
        f: 'Mock System Designs',
        t: '10 cold designs spoken aloud - no notes - 45 min each. Focus on weakest systems. Architecture Decision Records.',
      },
    ],
  },
  {
    id: 'p24',
    block: 4,
    seq: 24,
    icon: '🌱',
    color: '#16A34A',
    dark: '#15803D',
    bg: '#F0FDF4',
    border: '#BBF7D0',
    name: 'Java Spring Boot Interview Prep',
    label: 'Block 4 · Interview Prep',
    days: 30,
    ds: 486,
    de: 515,
    period: 'Oct 16 - Nov 14, 2027',
    wks: 'W70-W73',
    ms: 'Java Spring Boot Interview Ready · D515',
    about:
      '30 days. Java 8+ features, Spring Boot architecture, JPA/Hibernate, Spring Security, REST API design, microservices patterns. Your C# .NET background makes Java concepts familiar. Maps directly to FPO Cloud backend patterns.',
    courses: [
      'Navin Reddy Telusko - Java 8 New Features for fast-track (lambdas/streams/Optional)',
      'Ranga Karanam - Spring Boot with IntelliJ Real-World Project (interview-focused chapters)',
      'Java Spring Boot interview Q&A resources - 200 most common questions',
    ],
    wplan: [
      {
        w: 70,
        f: 'Java 8 + OOP Foundations',
        t: 'Lambdas, Streams, Optional, CompletableFuture. OOP (solid concepts from C# background). Collections, generics, exceptions.',
      },
      {
        w: 71,
        f: 'Spring Boot Core + REST',
        t: 'Auto-configuration, Actuator, @RestController, @Service, @Repository, ResponseEntity, @ExceptionHandler, OpenAPI docs',
      },
      {
        w: 72,
        f: 'JPA + Spring Security + OAuth2',
        t: '@Entity, JpaRepository, JPQL, N+1 problem, @Transactional. SecurityFilterChain, JWT, OAuth2 - same as your FPO Cognito',
      },
      {
        w: 73,
        f: 'Spring Boot 200 Q&A + Mock',
        t: '200 Spring Boot interview Q&A, build REST API + JWT + JPA from scratch cold, mock interview practice',
      },
    ],
  },
  {
    id: 'p25',
    block: 4,
    seq: 25,
    icon: '⚙',
    color: '#DC2626',
    dark: '#B91C1C',
    bg: '#FEF2F2',
    border: '#FECACA',
    name: 'DevOps and Cloud Interview Prep',
    label: 'Block 4 · Interview Prep · FINAL',
    days: 25,
    ds: 516,
    de: 540,
    period: 'Nov 15 - Dec 9, 2027',
    wks: 'W74-W77',
    ms: '540 Days of Code COMPLETE · Dec 9, 2027',
    about:
      '25 days. Final block. DevOps, Kubernetes, AWS, CI/CD, Terraform, Docker interview Q&A. Scenario-based questions. Your OKLABS capstone projects + FPO Cloud production experience = very strong candidate. Final mock interviews. Day 540 = Dec 9, 2027.',
    courses: [
      'DevOps/K8s/Docker/AWS interview Q&A - CKA-style K8s questions (leverage your CKA certification)',
      'Terraform/CI/CD/GitHub Actions scenario-based interview questions',
      'Mock interviews: Pramp, Interviewing.io, peers - aim for 5+ full mock DevOps interviews',
    ],
    wplan: [
      {
        w: 74,
        f: 'Docker + K8s Deep Q&A',
        t: 'Container architecture, Dockerfile best practices, K8s networking/RBAC/storage deep dives - CKA-level questions',
      },
      {
        w: 75,
        f: 'AWS + Terraform Interview Q&A',
        t: 'AWS architecture scenarios, IAM/VPC/Lambda/EKS deep dives, Terraform state management, multi-env patterns',
      },
      {
        w: 76,
        f: 'CI/CD + DevSecOps Q&A',
        t: 'Jenkins pipelines, GitHub Actions workflows, SonarQube quality gates, DevSecOps scenarios, Trivy, OWASP',
      },
      {
        w: 77,
        f: 'Final Mock Interviews + Day 540',
        t: '5 full mock DevOps/Cloud/SRE interviews. Resume final polish. Day 540 = Dec 9, 2027 = 540 DAYS OF CODE COMPLETE.',
      },
    ],
  },
];

const MILESTONES = [
  {
    day: 14,
    icon: '📡',
    label: 'Computer Fundamentals',
    date: 'Jul 1, 2026',
    color: '#6366F1',
  },
  {
    day: 35,
    icon: '🐧',
    label: 'Linux Done',
    date: 'Jul 22, 2026',
    color: '#EA580C',
  },
  {
    day: 70,
    icon: '🐍',
    label: 'Python for DevOps',
    date: 'Aug 26, 2026',
    color: '#16A34A',
  },
  {
    day: 105,
    icon: '⚛',
    label: 'Frontend React',
    date: 'Sep 30, 2026',
    color: '#0EA5E9',
  },
  {
    day: 140,
    icon: '📋',
    label: 'Backend + Jira + APIs',
    date: 'Nov 4, 2026',
    color: '#059669',
  },
  {
    day: 161,
    icon: '🐳',
    label: 'Docker Done',
    date: 'Nov 25, 2026',
    color: '#0369A1',
  },
  {
    day: 189,
    icon: '☸',
    label: 'Kubernetes Done',
    date: 'Dec 23, 2026',
    color: '#4338CA',
  },
  {
    day: 210,
    icon: '⚙',
    label: 'CI/CD Done',
    date: 'Jan 13, 2027',
    color: '#DC2626',
  },
  {
    day: 224,
    icon: '🏗',
    label: 'Terraform Done',
    date: 'Jan 27, 2027',
    color: '#B45309',
  },
  {
    day: 280,
    icon: '☁',
    label: 'AWS Done',
    date: 'Mar 24, 2027',
    color: '#D97706',
  },
  {
    day: 322,
    icon: '🔒',
    label: 'DevSecOps Done',
    date: 'May 5, 2027',
    color: '#E11D48',
  },
  {
    day: 350,
    icon: '🏆',
    label: 'Capstone Projects Done',
    date: 'Jun 2, 2027',
    color: '#7C3AED',
  },
  {
    day: 365,
    icon: '🎯',
    label: 'OKLABS Year 1 DONE',
    date: 'Jun 17, 2027',
    color: '#374151',
  },
  {
    day: 400,
    icon: '📱',
    label: 'React Native DONE',
    date: 'Jul 22, 2027',
    color: '#7C3AED',
  },
  {
    day: 440,
    icon: '🤖',
    label: 'Agentic AI DONE',
    date: 'Aug 31, 2027',
    color: '#6366F1',
  },
  {
    day: 460,
    icon: '⚛',
    label: 'React / RN Interview',
    date: 'Sep 20, 2027',
    color: '#0EA5E9',
  },
  {
    day: 485,
    icon: '🏗',
    label: 'System Design Interview',
    date: 'Oct 15, 2027',
    color: '#B45309',
  },
  {
    day: 515,
    icon: '🌱',
    label: 'Spring Boot Interview',
    date: 'Nov 14, 2027',
    color: '#16A34A',
  },
  {
    day: 540,
    icon: '🏆',
    label: '540 Days COMPLETE',
    date: 'Dec 9, 2027',
    color: '#DC2626',
  },
];

const BLOCK_META = [
  {
    n: 1,
    icon: '🎓',
    title: 'OKLABS Batch',
    sub: 'D1-D365 · Jun 18 2026 to Jun 17 2027 · 19 phases',
    col: '#6366F1',
    days: 365,
  },
  {
    n: 2,
    icon: '📱',
    title: 'React Native',
    sub: 'D366-D400 · Jun 18 to Jul 22 2027 · 5 weeks',
    col: '#7C3AED',
    days: 35,
  },
  {
    n: 3,
    icon: '🤖',
    title: 'Agentic AI Python',
    sub: 'D401-D440 · Jul 23 to Aug 31 2027 · 6 weeks',
    col: '#6366F1',
    days: 40,
  },
  {
    n: 4,
    icon: '🎤',
    title: 'Interview Prep',
    sub: 'D441-D540 · Sep 1 to Dec 9 2027 · React/SD/Java/DevOps',
    col: '#DC2626',
    days: 100,
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
  const bcolors = { 1: '#4338CA', 2: '#6D28D9', 3: '#4338CA', 4: '#B91C1C' };
  const bBg = { 1: '#EEF2FF', 2: '#F5F3FF', 3: '#EEF2FF', 4: '#FEF2F2' };
  const bBorder = { 1: '#C7D2FE', 2: '#DDD6FE', 3: '#C7D2FE', 4: '#FECACA' };
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
                background: bBg[p.block],
                color: bcolors[p.block],
                border: '1px solid ' + bBorder[p.block],
              }}
            >
              {p.label}
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
                {'540 Days of Code'}
              </div>
              <div
                style={{
                  fontSize: 9,
                  color: 'rgba(255,255,255,0.6)',
                  marginTop: 2,
                }}
              >
                {
                  'Thu Jun 18, 2026 to Thu Dec 9, 2027 · 540 days · 5:30 AM to 8:30 AM daily'
                }
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2,1fr)',
              gap: 6,
              marginBottom: 12,
            }}
          >
            {BLOCK_META.map((b) => (
              <div
                key={b.n}
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  borderRadius: 9,
                  padding: '9px 11px',
                  border: '1px solid ' + b.col + '70',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    marginBottom: 3,
                  }}
                >
                  <span style={{ fontSize: 13 }}>{b.icon}</span>
                  <span style={{ fontSize: 8, fontWeight: 800, color: b.col }}>
                    {'Block ' + b.n}
                  </span>
                  <span
                    style={{
                      fontSize: 8,
                      color: 'rgba(255,255,255,0.4)',
                      marginLeft: 'auto',
                    }}
                  >
                    {b.days + 'd'}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 'clamp(10px,3vw,12px)',
                    fontWeight: 800,
                    color: '#fff',
                    marginBottom: 2,
                  }}
                >
                  {b.title}
                </div>
                <div
                  style={{
                    fontSize: 8,
                    color: 'rgba(255,255,255,0.5)',
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
              background: 'rgba(245,158,11,0.18)',
              border: '1px solid rgba(245,158,11,0.4)',
              borderRadius: 8,
              padding: '7px 11px',
              marginBottom: 10,
              display: 'flex',
              gap: 8,
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 15, flexShrink: 0 }}>{'⏰'}</span>
            <div>
              <div style={{ fontSize: 10, fontWeight: 800, color: '#FDE68A' }}>
                {
                  '5:30 AM to 8:30 AM daily · MANDATORY · Weekends: Maximum Time'
                }
              </div>
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.5)' }}>
                {
                  'OKLABS batch runs in the day · React Native (Chaicode) runs at 5:30-8:30 AM during Block 1 · FPO Cloud work alongside'
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
              <span>{'Jun 18, 2026'}</span>
              <span
                style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 700 }}
              >
                {prog + '% · Day ' + Math.min(d + 1, 540) + ' of 540'}
              </span>
              <span>{'Dec 9, 2027'}</span>
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
                      gap: 5,
                      borderRadius: 7,
                      padding: '5px 8px',
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
                    <span style={{ fontSize: 12, flexShrink: 0 }}>
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
        style={{ maxWidth: 680, margin: '0 auto', padding: '12px 10px 40px' }}
      >
        {[1, 2, 3, 4].map((bn) => {
          const bm = BLOCK_META[bn - 1];
          const bPhases = PHASES.filter((p) => p.block === bn);
          return (
            <div key={bn}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 8,
                  marginTop: bn === 1 ? 4 : 18,
                }}
              >
                <div
                  style={{
                    height: 2,
                    flex: 1,
                    background:
                      'linear-gradient(90deg,' + bm.col + ',' + bm.col + '10)',
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
                      color: bm.col,
                      letterSpacing: '0.08em',
                    }}
                  >
                    {bm.icon + ' BLOCK ' + bn + ' — ' + bm.title.toUpperCase()}
                  </div>
                  <div style={{ fontSize: 8, color: '#94A3B8', marginTop: 1 }}>
                    {bm.sub}
                  </div>
                </div>
                <div
                  style={{
                    height: 2,
                    flex: 1,
                    background:
                      'linear-gradient(90deg,' + bm.col + '10,' + bm.col + ')',
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
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
            {'🏆 540 Days of Code · Jun 18, 2026 to Dec 9, 2027'}
          </div>
          <div
            style={{
              fontSize: 9,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 8,
            }}
          >
            {
              'Block 1: OKLABS 365d · Block 2: React Native 35d · Block 3: Agentic AI 40d · Block 4: Interview Prep 100d'
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
                    fontSize: 7,
                    color: m.color,
                    fontWeight: 700,
                    opacity: m.day <= d + 1 ? 1 : 0.4,
                  }}
                >
                  {m.icon + ' ' + m.label.split(' ')[0]}
                </span>
                {i < a.length - 1 && (
                  <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 7 }}>
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
