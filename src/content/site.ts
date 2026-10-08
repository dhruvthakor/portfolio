/**
 * All site content lives here so it can be updated without touching components.
 * Everything below is drawn from Dhruv's resume. Leave a field as an empty
 * string to hide it (e.g. `github`).
 */

export const site = {
  name: "Dhruv Thakor",
  url: "https://dhruvthakor.com", // [ADD LINK] — replace with your real domain once deployed
  title: "Dhruv Thakor | IT Support & Healthcare Technology in Halifax, NS",
  description:
    "Dhruv Thakor is an IT support professional in Halifax, Nova Scotia, supporting clinical teams through Clinical Information System rollouts at Nova Scotia Health. Master of Engineering in Internetworking, Dalhousie University.",
  location: "Halifax, Nova Scotia",
  email: "dhruvthakor6701@gmail.com",
  linkedin: "https://www.linkedin.com/in/dhruv234/",
  github: "https://github.com/dhruvthakor",
  resume: "/.Dhruv-Thakor-Resume.pdf",
};

export const hero = {
  eyebrow: "IT Support · Healthcare Technology",
  headline: "Calm, structured support for the systems people rely on at work.",
  intro:
    "I'm an IT support professional in Halifax. Right now I'm at Nova Scotia Health, helping clinical teams through Clinical Information System rollouts. Before that, I handled high-volume technical support at Concentrix, and I have a Master's in Internetworking from Dalhousie.",
};

export const currently = {
  role: "Support Consultant at Nova Scotia Health",
  detail:
    "Frontline support for clinical teams during Clinical Information System (Oracle Health / Cerner) rollouts.",
  since: "Since Feb 2026",
};

export const about = {
  paragraphs: [
    "My background is in networking. I did a Bachelor of Information Technology in India, then moved to Halifax for a Master of Engineering in Internetworking at Dalhousie University. That's where I learned how systems are actually connected: protocols, routing, and the layers underneath what users see.",
    "Between classes I worked customer-facing jobs, at a U-Haul counter and as a lab assistant at Dalhousie. Those jobs taught me something a degree doesn't: most technical problems arrive as a frustrated person who just wants to get on with their day.",
    "Since then I've worked in support full time. At Concentrix I worked through a heavy daily queue of software, login and connectivity issues by phone, chat and email. At Nova Scotia Health I support clinicians while new clinical systems go live, where a locked account or a confusing workflow affects patient care, not just productivity.",
    "I'm building toward roles where technical depth and clear communication both matter. That's the space between IT, healthcare and the business teams that rely on them.",
  ],
  facts: [
    { label: "Based in", value: "Halifax, Nova Scotia" },
    { label: "Education", value: "MEng, Internetworking — Dalhousie" },
    { label: "Focus", value: "IT support & healthcare technology" },
    { label: "Work", value: "Service desk · Clinical systems · Networking" },
  ],
};

export type Role = {
  id: string;
  company: string;
  title: string;
  location: string;
  dates: string;
  current?: boolean;
  summary: string;
  responsibilities: string[];
  highlights?: string[];
  tools: string[];
};

export const experience: Role[] = [
  {
    id: "nsh",
    company: "Nova Scotia Health",
    title: "Support Consultant",
    location: "Halifax, NS",
    dates: "Feb 2026 — Present",
    current: true,
    summary:
      "Frontline support for clinical teams during enterprise Clinical Information System (CIS) rollouts. I'm the person on the floor when staff run into access, application or workflow problems on the new system.",
    responsibilities: [
      "Diagnose system access, application and workflow issues for clinical staff during CIS rollouts",
      "Log, track and escalate tickets in Assyst, routing complex technical issues to the right support teams",
      "Guide clinical staff through system workflows, access requirements and documentation standards",
      "Identify recurring issues and report workflow improvements back to project teams",
      "Promote data security, compliance and proper system practices",
    ],
    highlights: [
      "Uses structured root-cause troubleshooting to separate one-off problems from recurring ones",
    ],
    tools: ["Oracle Health / Cerner CIS", "Assyst", "Clinical workflows", "Data security & compliance"],
  },
  {
    id: "concentrix",
    company: "Concentrix",
    title: "Technical Support Advisor",
    location: "Dartmouth, NS",
    dates: "Nov 2025 — Feb 2026",
    summary:
      "Front-line technical support in a high-volume environment across phone, chat and email, covering software, account, login, connectivity and system-performance problems.",
    responsibilities: [
      "Troubleshot application errors, login problems, connectivity and system-performance issues",
      "Applied structured diagnostic workflows to isolate application, operating-system, account and connectivity causes",
      "Walked non-technical users through troubleshooting steps in plain language",
      "De-escalated frustrated customers through calm, empathetic communication",
    ],
    highlights: [
      "Resolved 40+ technical cases daily",
      "Reduced repeat issues by consistently identifying root causes",
    ],
    tools: ["Phone, chat & email support", "Root cause analysis", "Account & login support", "Connectivity troubleshooting"],
  },
  {
    id: "dal",
    company: "Dalhousie University",
    title: "Student Lab Assistant",
    location: "Halifax, NS",
    dates: "Apr 2024 — Dec 2024",
    summary:
      "Supported daily lab operations for students and faculty, keeping records accurate and getting requests to the right place.",
    responsibilities: [
      "Maintained electronic and physical records for daily lab operations",
      "Reviewed data entries, flagged discrepancies and followed institutional documentation standards",
      "Identified what students and faculty needed and routed technical and administrative requests appropriately",
      "Supported documentation processes that improved workflow efficiency",
    ],
    tools: ["Documentation", "Records management", "Request routing"],
  },
  {
    id: "uhaul",
    company: "U-Haul",
    title: "Customer Service Representative",
    location: "Dartmouth, NS",
    dates: "Jul 2023 — Apr 2024",
    summary:
      "In-person and phone-based customer service in a fast-paced environment, handling reservations, transactions and sensitive customer records.",
    responsibilities: [
      "Assisted customers with reservations, transactions and account updates",
      "Entered and updated customer records accurately while handling sensitive information",
      "Balanced administrative work with in-person and phone service",
      "Resolved customer concerns efficiently under time pressure",
    ],
    tools: ["Customer service", "Data entry", "Confidential records"],
  },
];

export type SkillGroup = {
  id: string;
  title: string;
  blurb: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "support",
    title: "Service Desk & Support",
    blurb: "Taking an issue from first report to resolution, and making sure it's recorded properly.",
    skills: [
      "Incident & service request management",
      "Service desk operations",
      "ITIL / IT service management",
      "Assyst",
      "ServiceNow",
      "Remote support tools",
      "Hardware & software installation",
      "Printer & peripheral support",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare Technology",
    blurb: "Supporting clinical staff on enterprise clinical systems, where downtime affects care.",
    skills: [
      "Clinical Information System rollouts",
      "Oracle Health / Cerner",
      "Clinical workflow support",
      "Access & application troubleshooting",
      "Documentation standards",
      "Data security & confidentiality",
    ],
  },
  {
    id: "network",
    title: "Networking",
    blurb: "The foundation from my Master's: how traffic moves and where it breaks.",
    skills: ["TCP/IP", "DNS", "DHCP", "Cisco networking", "VPN & remote access"],
  },
  {
    id: "systems",
    title: "Systems & Cloud",
    blurb: "The environments end users work in every day, and the platforms behind them.",
    skills: [
      "Windows 10/11",
      "Linux",
      "Active Directory",
      "Microsoft 365 (Outlook, Teams, Excel, Word)",
      "Azure Fundamentals",
      "AWS Cloud Fundamentals",
    ],
  },
  {
    id: "people",
    title: "Working With People",
    blurb: "Most of support is communication. These carry across every role I've had.",
    skills: [
      "Customer service",
      "Clear technical explanations",
      "De-escalation",
      "Root cause analysis",
      "Documentation",
      "Team collaboration",
      "Time management",
    ],
  },
];

export const education = [
  {
    degree: "Master of Engineering in Internetworking",
    school: "Dalhousie University",
    location: "Halifax, NS",
    dates: "May 2023 — Dec 2024",
    note: "Graduate study in network design and the protocols that connect systems: the technical foundation under my support work.",
    primary: true,
  },
  {
    degree: "Bachelor of Information Technology",
    school: "Charusat University",
    location: "Gujarat, India",
    dates: "Jun 2018 — May 2022",
    note: "Undergraduate foundation in information technology.",
    primary: false,
  },
];

export const certifications = [
  { name: "AWS Academy Cloud Foundations", issuer: "Amazon Web Services" },
  { name: "CCNA Module 1: Introduction to Networks", issuer: "Cisco Networking Academy" },
  { name: "Cisco CCNA 200-301 (course)", issuer: "Udemy" },
  { name: "Learning ServiceNow", issuer: "LinkedIn Learning" },
  { name: "IT Service Desk: Customer Service Fundamentals", issuer: "LinkedIn Learning" },
  { name: "IT Help Desk for Beginners", issuer: "LinkedIn Learning" },
];

export const highlights = [
  {
    title: "Clinical system rollouts",
    context: "Nova Scotia Health",
    body: "Supporting clinical teams on the floor as a new Clinical Information System goes live, while they're still trying to deliver care.",
  },
  {
    title: "Access & application issues",
    context: "Nova Scotia Health",
    body: "Working out whether a problem is access, application or workflow, then fixing it or escalating it through Assyst with the details the next team needs.",
  },
  {
    title: "High-volume troubleshooting",
    context: "Concentrix",
    body: "40+ technical cases a day across phone, chat and email, covering software, login, connectivity and performance problems.",
  },
  {
    title: "Turning patterns into fixes",
    context: "Nova Scotia Health · Concentrix",
    body: "Noticing when the same issue keeps coming back and reporting it to the project team so it gets fixed at the source.",
  },
  {
    title: "Explaining it plainly",
    context: "Every role",
    body: "Walking clinicians, customers and students through technical steps without jargon, and keeping things calm when people are frustrated.",
  },
  {
    title: "Accurate, secure records",
    context: "Dalhousie · U-Haul · Nova Scotia Health",
    body: "Handling sensitive information carefully and keeping records accurate enough that the next person can rely on them.",
  },
];

export const approach = [
  {
    step: "Understand",
    body: "Start with the person, not the system. What were they trying to do, and what's blocking them? On a clinical unit, the answer often decides how urgent the issue really is.",
  },
  {
    step: "Diagnose",
    body: "Narrow it down step by step: account, application, operating system or network. My networking background helps me rule out the layers underneath quickly.",
  },
  {
    step: "Resolve",
    body: "Fix it if it's mine to fix. If it isn't, log it in Assyst and escalate it with enough detail that the next team doesn't have to start again.",
  },
  {
    step: "Communicate",
    body: "Tell the person what happened and what to do next, in plain language. A calm explanation often matters as much as the fix.",
  },
  {
    step: "Improve",
    body: "If an issue keeps coming back, it's a pattern, not bad luck. I record it and pass it to the project team so it gets fixed properly.",
  },
];
