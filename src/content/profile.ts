export const profile = {
  name: "Abhinav MV",
  fullName: "Abhinav Meethele Valappil",
  role: "Backend Engineer",
  tagline:
    "I build blockchain data APIs and real-time indexing pipelines that stay fast under production load.",
  location: "Ghaziabad, India",
  siteUrl: "https://abhinav-portfolio.vercel.app",
  email: "mvabhinav1998@gmail.com",
  resume: "/Abhinav_MV_Resume.pdf",
  socials: {
    github: "https://github.com/AbhinavMV",
    linkedin: "https://www.linkedin.com/in/abhinav-mv-b216b8160",
  },
} as const;

export const about = [
  "I'm a backend engineer with 5+ years of experience, most of it at Moralis, where I work on the Web3 data APIs that serve wallet, token and price data for Solana and EVM chains.",
  "My day-to-day is TypeScript and NestJS on top of PostgreSQL, DynamoDB, ClickHouse and event streams, with Rust for the services where performance matters most. I like owning a service end to end: designing it, shipping it, and then making it measurably faster once real traffic hits it.",
  "AI-assisted development is part of how I work. I use Claude Code daily for design, review and debugging, and check what it produces against tests and production metrics.",
];

export const metrics = [
  { value: "7–8s → 2.5s", label: "Large-wallet API latency" },
  { value: "87 → 4", label: "ClickHouse queries consolidated" },
  { value: "10", label: "Solana DEX pool types indexed" },
  { value: "−19%", label: "Peak memory in a Rust service" },
];

export type Job = {
  role: string;
  company: string;
  url?: string;
  location: string;
  start: string;
  end: string;
  summary?: string;
  highlights: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    role: "Software Developer",
    company: "Moralis Web3",
    url: "https://moralis.com",
    location: "Remote",
    start: "Sep 2022",
    end: "Present",
    summary:
      "Backend engineer on the team behind Moralis' Web3 data APIs for Solana and EVM chains.",
    highlights: [
      "Designed and built a Solana DEX indexer from the ground up: a modular parser framework covering 10 pool types across Orca, Raydium, Meteora and PumpSwap, plus the pair, swap, reserve and candlestick APIs on top of it.",
      "Built real-time streaming pipelines that turn raw on-chain data into token prices, metadata and OHLCV candles, and extended swap indexing to Uniswap v3/v4, PancakeSwap Infinity and Algebra-based DEXes.",
      "Cut API response times for large Solana wallets from 7–8 seconds to around 2.5 seconds by parallelising metadata lookups.",
      "Consolidated 87 ClickHouse queries scanning hundreds of millions of rows into 4 that finish in about 2 seconds.",
      "Migrated high-traffic wallet, transfer and swap APIs to ClickHouse with shadow testing, comparing old and new responses in production before each cutover.",
      "Built an internal AI agent that detects API latency regressions and suggests likely root causes.",
    ],
    stack: ["TypeScript", "NestJS", "Rust", "ClickHouse", "Elasticsearch", "Kubernetes", "Solana", "EVM"],
  },
  {
    role: "System Engineer",
    company: "Tata Consultancy Services",
    url: "https://www.tcs.com",
    location: "Delhi",
    start: "Jan 2021",
    end: "Aug 2022",
    highlights: [
      "Developed and maintained Oracle Siebel CRM workflows for SBI Card's credit card customer support platform.",
      "Joined as an Assistant System Engineer and was promoted to System Engineer within a year.",
    ],
    stack: ["Oracle Siebel CRM", "SQL"],
  },
];

export type CaseStudy = {
  title: string;
  problem: string;
  approach: string;
  result: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Solana DEX indexer",
    problem:
      "Swap, pair and price data for Solana DEXes had to be decoded from raw transactions across many protocols, each with its own pool layout.",
    approach:
      "A modular parser framework where each pool type plugs in its own decoder, feeding streaming pipelines that derive prices and OHLCV candles.",
    result: "10 pool types across Orca, Raydium, Meteora and PumpSwap, served through pair, swap, reserve and candlestick APIs.",
    tags: ["TypeScript", "Solana", "Streaming"],
  },
  {
    title: "Large-wallet latency",
    problem:
      "Users holding thousands of tokens were hitting timeouts on the Solana wallet endpoints.",
    approach: "Profiled the request path and parallelised the token metadata lookups that ran one after another.",
    result: "Response times dropped from 7–8 seconds to around 2.5 seconds, and the timeouts went away.",
    tags: ["Performance", "Node.js"],
  },
  {
    title: "ClickHouse query consolidation",
    problem: "An endpoint fanned out into 87 queries scanning hundreds of millions of rows.",
    approach: "Reworked the access pattern so the same data comes back from a handful of well-shaped queries.",
    result: "87 queries became 4, completing in about 2 seconds.",
    tags: ["ClickHouse", "SQL"],
  },
  {
    title: "Storage evaluation for token filtering",
    problem: "A new token-filtering API needed a store that could handle fast, flexible reads.",
    approach: "Benchmarked Elasticsearch against ClickHouse on 1M records under realistic read and write loads.",
    result: "Chose Elasticsearch for 3–6x faster reads and twice the write throughput.",
    tags: ["Elasticsearch", "Benchmarking"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Rust", "Python", "SQL"] },
  { group: "Backend", items: ["Node.js", "NestJS", "REST", "gRPC / Protobuf", "Kafka-compatible streaming", "BullMQ", "Redis"] },
  { group: "Data", items: ["ClickHouse", "PostgreSQL", "DynamoDB", "Elasticsearch", "OpenSearch", "MongoDB"] },
  { group: "Infra", items: ["AWS", "Docker", "Kubernetes", "Helm", "GitLab CI", "k6"] },
  { group: "Observability", items: ["Grafana", "Prometheus", "Datadog"] },
  { group: "Web3", items: ["Solana", "EVM", "ethers.js", "@solana/web3.js", "DEX protocols"] },
  { group: "AI", items: ["Claude Code", "Claude Agent SDK", "Anthropic & OpenAI APIs"] },
];

export const sideProjects = [
  { name: "Realtime Chat", desc: "One-to-one and global chat app.", stack: "Next.js · Firebase", repo: "https://github.com/AbhinavMV/whatsapp-clone" },
  { name: "ShareFile", desc: "Share files by link or email.", stack: "Next.js · MongoDB · Cloudinary", repo: "https://github.com/AbhinavMV/sharefile" },
  { name: "Moments", desc: "Social feed with a GraphQL API.", stack: "React · GraphQL · MongoDB", repo: "https://github.com/AbhinavMV/Moments" },
  { name: "Blog", desc: "Full-stack MERN blogging platform.", stack: "React · Express · MongoDB", repo: "https://github.com/AbhinavMV/blog" },
  { name: "Fake News Detection", desc: "Final-year news classifier.", stack: "Python · LightGBM · WordBatch" },
];

export const education = {
  degree: "B.Tech, Computer Science & Engineering",
  school: "Government College of Engineering Kannur",
  years: "2016 – 2020",
};
