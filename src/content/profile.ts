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
  "My approach is to measure first, fix the root cause, then prove the new version is equivalent: byte-identical output, replayed production traffic or shadow comparisons before every cutover.",
  "AI-assisted development is part of how I work. I use Claude Code daily for design, review and debugging, and check what it produces against tests and production metrics.",
];

export const metrics = [
  { value: "29 → 4.7 GB", label: "Rust service memory (−84%)" },
  { value: "~230x", label: "Faster p99 on a ClickHouse price lookup" },
  { value: "3.8x", label: "Faster Solana block decoding" },
  { value: "7–8s → 2.5s", label: "Large-wallet API latency" },
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
      "Designed a Solana swap-parsing framework and wrote decoders for 9 pool types across Orca, Raydium and Meteora, plus the pair, swap and candlestick APIs built on it. Later recovered 47% of missed Raydium AMM v4 swaps (~236k records a day).",
      "Onboarded 6 EVM chains and 12+ DEX protocols, including Uniswap v4, PancakeSwap Infinity and Algebra, and built an OHLCV candle service that rolls 10-minute candles up to 8 timeframes.",
      "Cut a Rust data-processing service's memory from 29 GB to 4.7 GB (−84%) by switching to jemalloc, and made its Solana decoding 3.8x faster.",
      "Redesigned a ClickHouse price lookup that was timing out under load, reaching zero timeouts, ~230x faster p99 and half the memory, and rolled it out with no downtime.",
      "Reduced API response times for large Solana wallets from 7–8 seconds to about 2.5 seconds by parallelising metadata lookups, ending timeouts on the biggest wallets.",
      "Migrated wallet, transfer and swap APIs to ClickHouse across 7 EVM chains, comparing live shadow traffic against production before each cutover.",
      "Traced customer-facing 500 errors to dropped database connections and added retries behind 11 API endpoints.",
      "Built an AI agent with the Claude Agent SDK that detects API latency regressions and runs read-only root-cause diagnosis.",
    ],
    stack: ["TypeScript", "NestJS", "Rust", "ClickHouse", "Elasticsearch", "OpenSearch", "Kubernetes", "Solana", "EVM"],
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
    title: "Rust service memory",
    problem:
      "A Rust service processing historical Solana data was running out of memory and getting OOM-killed on a 62 GB host.",
    approach:
      "Traced the growth to allocator fragmentation rather than a leak, switched to jemalloc, then profiled CPU and restructured how decoded rows are grouped.",
    result: "Memory fell from 29 GB to 4.7 GB (−84%), throughput rose 12.5% and decoding got 3.8x faster, with byte-identical output.",
    tags: ["Rust", "Profiling", "Solana"],
  },
  {
    title: "ClickHouse price lookup",
    problem: "A token price lookup used across many APIs was timing out in bursts under production load.",
    approach:
      "Redesigned its in-memory layout, split it by chain, benchmarked the options and shipped it through a pre-warmed shadow and atomic swap.",
    result: "Zero timeouts, ~230x faster p99 and half the memory, rolled out with no downtime.",
    tags: ["ClickHouse", "Performance"],
  },
  {
    title: "Solana swap parsing",
    problem:
      "Swaps for Solana DEXes had to be decoded from raw transactions across many protocols, each with its own pool layout.",
    approach:
      "A framework where each pool type plugs in its own decoder, feeding the pair, swap and candlestick APIs. I wrote 9 of the pool-type decoders.",
    result: "9 pool types across Orca, Raydium and Meteora. Later decoder fixes recovered 47% of missed Raydium AMM v4 swaps (~236k records a day).",
    tags: ["TypeScript", "Rust", "Solana"],
  },
  {
    title: "Large-wallet latency",
    problem:
      "Wallets holding 1,800–5,000 tokens took 7–11 seconds, past the client timeout, so users saw errors.",
    approach: "Profiled the request path and parallelised the metadata and logo lookups that ran one after another.",
    result: "Response times dropped from 7–8 seconds to about 2.5 seconds, ending timeouts on the biggest wallets.",
    tags: ["Node.js", "Performance"],
  },
  {
    title: "ClickHouse migration",
    problem: "High-traffic wallet, transfer and swap APIs needed to move to ClickHouse without changing a single response.",
    approach: "Cut over chain by chain, sending sampled shadow traffic to the new path and diffing responses against production first.",
    result: "Migrated across 7 EVM chains, each cutover backed by response comparisons on live traffic.",
    tags: ["ClickHouse", "Shadow testing"],
  },
  {
    title: "Search store benchmark",
    problem: "A token filter store built on Postgres was overloading the database as the token count grew.",
    approach: "Benchmarked Elasticsearch against ClickHouse on 1M tokens under read and sustained-write load.",
    result: "Elasticsearch read 3–6x faster and wrote ~2.7x faster, and replaced the Postgres setup.",
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
