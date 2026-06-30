const START = new Date('2026-07-01');
export const AWS_PHASE_DAYS = 92;

export function awsDayDate(day) {
  const d = new Date(START);
  d.setDate(d.getDate() + day - 1);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

const raw = [
  // Week 1 — IAM & account foundations (D1–D10)
  [1, 'IAM', 'AWS account setup, Free Tier, Console tour, global infrastructure (Regions/AZs)', 'Create IAM admin user, enable MFA, set billing alarm'],
  [2, 'IAM', 'IAM users, groups, policies — JSON structure (Effect, Action, Resource, Condition)', 'Write 2 custom policies; test with IAM Policy Simulator'],
  [3, 'IAM', 'Managed vs inline policies; AWS managed policy categories', 'Attach managed policies to group; document least-privilege approach'],
  [4, 'IAM', 'IAM roles, trust policies, STS AssumeRole, EC2 instance profiles', 'Create S3-read role; attach to EC2; verify with AWS CLI'],
  [5, 'IAM', 'MFA types, password policy, credential report, access keys rotation', 'Enable MFA on root + admin; rotate access keys'],
  [6, 'IAM', 'Cross-account access, resource-based policies intro, IAM Access Analyzer', 'Lab: cross-account S3 read using role assumption'],
  [7, 'CLI', 'AWS CLI install, profiles, `aws sts get-caller-identity`, output formats', 'Script: list all IAM users and attached policies'],
  [8, 'IAM', 'Permission boundaries, SCPs (Organizations overview), IAM Identity Center teaser', 'Read Organizations SCP use cases; Maarek IAM section review'],
  [9, 'IAM', 'Service-linked roles; Lambda execution role pattern', 'Create Lambda execution role with S3 + CloudWatch permissions'],
  [10, 'Review', 'Week 1 recap: IAM scenarios for SAA exam', '10 IAM practice questions (Tutorials Dojo or Maarek quiz)'],

  // Week 2 — VPC (D11–D20)
  [11, 'VPC', 'VPC, CIDR blocks, subnets, route tables, IGW basics', 'Draw FPO VPC diagram: 2 AZs, public + private subnets'],
  [12, 'VPC', 'Public vs private subnets; route table associations', 'Create VPC with 2 public + 2 private subnets'],
  [13, 'VPC', 'Internet Gateway, NAT Gateway vs NAT Instance, Elastic IP', 'Deploy NAT Gateway in public subnet; test outbound from private'],
  [14, 'VPC', 'Security Groups (stateful) vs NACLs (stateless)', 'Configure SG rules for web (443) and DB (3306) tiers'],
  [15, 'VPC', 'VPC Peering, Gateway endpoints (S3, DynamoDB)', 'Create S3 gateway endpoint; verify private subnet S3 access'],
  [16, 'VPC', 'Bastion vs SSM Session Manager for private access', 'Connect to private EC2 via Session Manager (no SSH key)'],
  [17, 'VPC', 'VPC Flow Logs, troubleshooting connectivity', 'Enable flow logs; analyze rejected traffic'],
  [18, 'VPC', 'Site-to-Site VPN, Direct Connect, Transit Gateway overview', 'Whiteboard: hybrid cloud connectivity options for exam'],
  [19, 'VPC', 'PrivateLink, interface endpoints', 'Create interface endpoint for SSM in private subnet'],
  [20, 'Review', 'Week 2 recap: rebuild VPC from scratch timed (45 min)', 'Rebuild full VPC lab without notes'],

  // Week 3 — EC2 (D21–D30)
  [21, 'EC2', 'Instance families, purchasing options (On-Demand, RI, Savings Plans, Spot)', 'Launch t3.micro; compare instance types for FPO workloads'],
  [22, 'EC2', 'AMIs, launch templates, user data (cloud-init)', 'Launch EC2 with user data script installing nginx'],
  [23, 'EC2', 'EBS volume types (gp3, io2, st1, sc1), snapshots, encryption', 'Attach gp3 volume; snapshot; restore to new volume'],
  [24, 'EC2', 'Instance Store vs EBS; AMI baking workflow', 'Create custom AMI from configured instance'],
  [25, 'EC2', 'ELB: ALB vs NLB vs GWLB — when to use each', 'Create ALB with target group; health checks'],
  [26, 'EC2', 'Auto Scaling Groups, scaling policies, launch templates', 'ASG with ALB: min 2, max 4, CPU target tracking'],
  [27, 'EC2', 'Placement groups (cluster, spread, partition)', 'Lab: ASG across 2 AZs behind ALB — test failover'],
  [28, 'EC2', 'ENI, multiple IPs, Enhanced Networking', 'Attach secondary ENI; understand multi-homed patterns'],
  [29, 'EC2', 'CloudWatch metrics, status checks, EC2 Instance Connect', 'Create CPU alarm → SNS notification'],
  [30, 'Review', 'Week 3 recap: fix unhealthy ALB targets', 'Troubleshoot broken ASG + ALB lab'],

  // Week 4 — S3 (D31–D40)
  [31, 'S3', 'Buckets, objects, keys, strong consistency model', 'Create bucket with Block Public Access enabled'],
  [32, 'S3', 'Storage classes: Standard, IA, One Zone-IA, Glacier tiers, Intelligent-Tiering', 'Configure lifecycle rule: Standard → IA → Glacier'],
  [33, 'S3', 'Versioning, MFA Delete, object lock (WORM) intro', 'Enable versioning; restore previous object version'],
  [34, 'S3', 'Cross-Region Replication (CRR), Same-Region Replication (SRR)', 'Enable CRR between 2 buckets in different regions'],
  [35, 'S3', 'Bucket policies, ACLs, Block Public Access, Object Ownership', 'Write bucket policy granting cross-account read'],
  [36, 'S3', 'Encryption: SSE-S3, SSE-KMS, SSE-C, DSSE-KMS', 'Enable default SSE-KMS encryption on bucket'],
  [37, 'S3', 'Presigned URLs, multipart upload, S3 Transfer Acceleration', 'Generate presigned URL; upload large file multipart'],
  [38, 'S3', 'Static website hosting, S3 event notifications', 'Host static HTML site; trigger Lambda on object upload'],
  [39, 'S3', 'S3 Access Points, Object Lambda overview', 'S3 scenario questions: 15 min timed set'],
  [40, 'Review', 'Week 4 recap: S3 security + cost optimization scenarios', 'Design S3 architecture for FPO static assets + logs'],

  // Week 5 — RDS & DynamoDB (D41–D50)
  [41, 'RDS', 'RDS engines, Multi-AZ, Read Replicas, failover behavior', 'Launch RDS MySQL Multi-AZ in private subnet'],
  [42, 'RDS', 'Automated backups, snapshots, restore, maintenance windows', 'Create manual snapshot; restore to new instance'],
  [43, 'RDS', 'RDS security: encryption at rest, IAM DB auth, SG rules', 'Connect to RDS from EC2 in same VPC only'],
  [44, 'RDS', 'Aurora: storage auto-scaling, replicas, Global Database, Serverless v2', 'Read Aurora vs RDS comparison for FPO data tier'],
  [45, 'RDS', 'Parameter groups, option groups, Performance Insights', 'Enable Performance Insights; identify slow query'],
  [46, 'DynamoDB', 'Tables, items, attributes; partition key & sort key design', 'Create `FPO-Flights` table with PK/SK design'],
  [47, 'DynamoDB', 'RCU/WCU, on-demand vs provisioned capacity modes', 'Run load test; switch to on-demand; compare cost'],
  [48, 'DynamoDB', 'GSI, LSI, sparse indexes, hot partition avoidance', 'Add GSI for query by flight date + status'],
  [49, 'DynamoDB', 'DynamoDB Streams, DAX, TTL, transactions', 'Enable stream; write Lambda trigger (preview next week)'],
  [50, 'Review', 'Week 5 recap: single-table design for FPO bookings', 'Document FPO DynamoDB access patterns (5 queries)'],

  // Week 6 — Lambda & API Gateway (D51–D60)
  [51, 'Lambda', 'Lambda runtime, handler, deployment package, cold/warm starts', 'Create Python Lambda returning JSON; test in console'],
  [52, 'Lambda', 'IAM role, resource policy, Lambda permissions model', 'Lambda reads from S3; verify least-privilege role'],
  [53, 'Lambda', 'Layers, versions, aliases, weighted routing', 'Publish version; create alias `prod` with weight'],
  [54, 'Lambda', 'Lambda in VPC, ENI cold start, concurrency limits', 'Configure reserved concurrency; test throttling'],
  [55, 'Lambda', 'Destinations, DLQ, error handling, X-Ray tracing', 'Send failed invocations to SQS DLQ'],
  [56, 'API GW', 'REST API: resources, methods, stages, deployments', 'Create REST API with GET /health endpoint'],
  [57, 'API GW', 'Lambda proxy integration, mapping templates, models', 'Integrate API Gateway → Lambda → DynamoDB (GET flight)'],
  [58, 'API GW', 'Auth: IAM, Cognito User Pool, Lambda authorizer, API keys', 'Add API key + usage plan for throttling'],
  [59, 'API GW', 'HTTP API vs REST API; CORS; caching', 'Enable CORS for FPO frontend origin'],
  [60, 'Review', 'Week 6 recap: serverless API whiteboard for FPO', 'Draw: Client → API GW → Lambda → DynamoDB'],

  // Week 7 — Cognito, Step Functions, EventBridge (D61–D70)
  [61, 'Cognito', 'User Pools vs Identity Pools; OAuth 2.0 / OIDC flows', 'Create Cognito User Pool with email sign-up'],
  [62, 'Cognito', 'App clients, hosted UI, callback URLs, token types (ID, access, refresh)', 'Test hosted UI login; inspect JWT tokens'],
  [63, 'Cognito', 'Cognito + API Gateway JWT authorizer (FPO auth pattern)', 'Protect API route with Cognito authorizer'],
  [64, 'Cognito', 'Federated identities, social sign-in, SAML/OIDC identity providers', 'Add Google IdP (or document steps for FPO)'],
  [65, 'Step Fn', 'Step Functions: Standard vs Express workflows, states overview', 'Create Hello World Standard workflow in console'],
  [66, 'Step Fn', 'Choice, Parallel, Wait, Map, Pass, Fail, Succeed states', 'Build flight booking saga with Choice + Parallel'],
  [67, 'Step Fn', 'Error handling: Retry, Catch, idempotency patterns', 'Add retry/catch for Lambda task failures'],
  [68, 'EventBridge', 'Event buses, rules, event patterns, schedules (cron)', 'Schedule daily cleanup Lambda via EventBridge rule'],
  [69, 'EventBridge', 'EventBridge + SNS + SQS: event-driven decoupling', 'Fan-out: EventBridge rule → SNS → 2 SQS queues'],
  [70, 'Review', 'Week 7 recap: wire Cognito auth into FPO API end-to-end', 'End-to-end test: sign in → call protected API'],

  // Week 8 — ECS, EKS, ECR (D71–D80)
  [71, 'ECR', 'ECR repositories, image scanning, lifecycle policies', 'Push Docker image to ECR from local machine'],
  [72, 'ECS', 'ECS concepts: cluster, task definition, task, service', 'Register task definition for FPO API container'],
  [73, 'ECS', 'Fargate vs EC2 launch type; networking awsvpc mode', 'Run Fargate task in private subnet with ALB'],
  [74, 'ECS', 'ECS service auto scaling, rolling deployments, circuit breaker', 'Deploy ECS service with min 2 tasks behind ALB'],
  [75, 'ECS', 'ECS Exec, Service Connect, task IAM roles', 'Shell into running Fargate task via ECS Exec'],
  [76, 'EKS', 'EKS control plane, node groups, kubectl, aws-auth', 'Create EKS cluster with eksctl (or read + diagram)'],
  [77, 'EKS', 'Deploy sample app to EKS; ALB Ingress Controller overview', 'Deploy nginx to EKS; expose via LoadBalancer service'],
  [78, 'EKS', 'Fargate profiles on EKS, pod identity, IRSA', 'Document IRSA pattern for FPO pods accessing S3'],
  [79, 'Containers', 'ECS vs EKS vs Lambda: decision matrix for FPO services', 'Whiteboard: which FPO components run where'],
  [80, 'Review', 'Week 8 recap: deploy FPO API container on ECS Fargate', 'Full ECS deploy: ECR → task def → service → ALB'],

  // Week 9 — Messaging, CloudFront, Route53 (D81–D90)
  [81, 'SQS', 'Standard vs FIFO queues, visibility timeout, long polling', 'Create standard queue; build producer/consumer scripts'],
  [82, 'SQS', 'Dead Letter Queues, redrive policy, message deduplication', 'Configure DLQ; trigger redrive after fix'],
  [83, 'SNS', 'Topics, subscriptions (SQS, Lambda, email, HTTP)', 'SNS topic → email subscription; publish test alert'],
  [84, 'SNS', 'Fan-out: SNS → multiple SQS queues (SAA classic pattern)', 'Build fan-out architecture; process messages in Lambda'],
  [85, 'CloudFront', 'Distributions, origins, behaviors, TTL, OAC vs OAI', 'Create distribution for S3 static site with OAC'],
  [86, 'CloudFront', 'Signed URLs/cookies, geo restriction, price classes', 'Restrict distribution to HTTPS only; test caching'],
  [87, 'Route53', 'Hosted zones, record types (A, AAAA, CNAME, Alias)', 'Create public hosted zone; add A record to ALB alias'],
  [88, 'Route53', 'Routing policies: simple, weighted, latency, failover, geolocation', 'Configure weighted routing between 2 ALBs'],
  [89, 'Route53', 'Health checks, DNS failover, private hosted zones', 'Set up failover routing with health check'],
  [90, 'Review', 'Week 9 recap: full event-driven FPO architecture diagram', 'Draw complete FPO: Route53 → CF → ALB → ECS → DB'],

  // Week 10 — CDK, Well-Architected, Capstone, Exam (D91–D100)
  [91, 'IaC', 'CloudFormation vs CDK vs Terraform; IaC benefits for FPO', 'Read CDK developer guide; install CDK CLI'],
  [92, 'CDK', 'CDK app structure: App, Stack, Construct; TypeScript setup', 'cdk init sample-app —language typescript'],
  [93, 'CDK', 'Define VPC, Lambda, DynamoDB, API Gateway in CDK stack', 'Write CDK stack for FPO core resources'],
  [94, 'CDK', 'cdk deploy, diff, synth, bootstrap, stack outputs', 'Deploy CDK stack to dev account; verify resources'],
  [95, 'WAF', 'Well-Architected Framework: 6 pillars deep dive', 'Score FPO architecture against each pillar'],
  [96, 'Cost', 'Cost Explorer, Budgets, tagging strategy, Savings Plans', 'Set monthly budget alarm; tag all FPO resources'],
  [97, 'DR', 'Backup, RTO/RPO, pilot light, warm standby, multi-region', 'Write FPO disaster recovery runbook (1 page)'],
  [98, 'Capstone', 'FPO Capstone: deploy full CDK stack + smoke test all APIs', 'Deploy + test: auth, flights API, static frontend'],
  [99, 'Exam', 'SAA practice exam 1 (65 questions, timed 90 min)', 'Review every wrong answer; note weak domains'],
  [100, 'Done', 'SAA practice exam 2 + FPO architecture document finalization', 'AWS Block DONE 🏆 — update portfolio README'],
];

export const AWS_WEEKS = [
  { n: 1, label: 'IAM & Account', days: [1, 10] },
  { n: 2, label: 'VPC Networking', days: [11, 20] },
  { n: 3, label: 'EC2 & Load Balancing', days: [21, 30] },
  { n: 4, label: 'S3 Storage', days: [31, 40] },
  { n: 5, label: 'RDS & DynamoDB', days: [41, 50] },
  { n: 6, label: 'Lambda & API Gateway', days: [51, 60] },
  { n: 7, label: 'Cognito & Orchestration', days: [61, 70] },
  { n: 8, label: 'ECS, EKS & ECR', days: [71, 80] },
  { n: 9, label: 'Messaging, CDN & DNS', days: [81, 90] },
  { n: 10, label: 'CDK, WAF & Capstone', days: [91, 100] },
];

export const AWS_SCHEDULE = raw.map(([day, tag, learn, lab]) => ({
  day,
  week: Math.ceil(day / 10),
  tag,
  learn,
  lab,
  date: awsDayDate(day),
}));
