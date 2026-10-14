export interface SkillItem {
  name: string;
  levelBadge?: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  status: 'Sample Project' | 'Planned Project';
  objective: string;
  problemStatement: string;
  tools: string[];
  keyCalculations: string[];
  findings: string[];
  recommendations: string[];
  datasetDescription: string;
  methodology: string[];
  limitations: string[];
  learningOutcomes: string[];
  executiveSummary: string;
  reportAvailable: boolean;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  program: string;
  role: string;
  period: string;
  responsibilities: string[];
  transferableFinanceSkills: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: 'Finance & Accounting' | 'Data & Analytics' | 'Productivity & AI' | 'Language';
  status: 'Verified Certificate' | 'Completed Bootcamp' | 'Proficiency Test';
  description: string;
  verified: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  year: string;
  organizer: string;
  category: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Daffa Aulia Rahman, S.E.",
    title: "Finance Staff | Financial Analysis | Accounting",
    targetRoles: [
      "Finance Staff",
      "Accounting Staff",
      "Treasury Staff",
      "Financial Operations"
    ],
    location: "Tangerang, Indonesia",
    email: "daffaar202@gmail.com",
    linkedin: "https://linkedin.com/in/daffaauliar",
    university: "IPB University (Institut Pertanian Bogor)",
    degree: "Bachelor of Economics (Sarjana Ekonomi - S.E.)",
    gpa: "3.53",
    gpaScale: "4.00",
    cvConfig: {
      fileName: "CV_Daffa_Aulia_Rahman_SE.pdf",
      filePath: "/cv/CV_Daffa_Aulia_Rahman_SE.pdf",
      lastUpdated: "October 2026",
    },
    heroHeadline: "Finance & Analytical Thinking for Better Business Decisions",
    heroSupportingText: "Economics graduate from IPB University with a strong foundation in financial analysis, financial accounting, budgeting, and data analytics. Interested in supporting accurate financial reporting, budget monitoring, and efficient financial operations.",
    aboutBio: [
      "I am an Economics graduate (Sarjana Ekonomi) from IPB University with a cumulative GPA of 3.53/4.00, dedicated to starting my career in corporate finance, financial accounting, treasury, and financial operations.",
      "Throughout my academic degree, I built a rigorous conceptual foundation across corporate finance, financial accounting, cost accounting, and financial statement analysis. In university programs and student organizations, I applied these competencies practically by managing funding proposals, budgeting operational activities, and coordinating project reporting.",
      "As an entry-level candidate, I combine disciplined analytical thinking and high attention to detail with advanced Microsoft Excel modeling skills and practical familiarity with accounting workflows in Accurate 5. My goal is to contribute directly to data-backed financial accuracy, reliable reconciliation, and compliant financial operations for leading Indonesian corporations and financial institutions."
    ],
    compactSkills: [
      "Advanced Microsoft Excel",
      "Accurate 5",
      "Financial Statement Analysis",
      "Budgeting & Reporting"
    ]
  },

  skillsCategories: [
    {
      id: "finance-accounting",
      title: "Finance & Accounting",
      subtitle: "Core academic disciplines, corporate reporting, and financial control principles",
      skills: [
        { name: "Corporate Finance Fundamentals", description: "Time value of money, working capital management, capital structure, and investment evaluation." },
        { name: "Financial Statement Analysis", description: "Horizontal & vertical analysis, liquidity, solvency, profitability, and operational efficiency ratios." },
        { name: "Financial Accounting Fundamentals", description: "Debit-credit mechanics, ledger reconciliation, accruals, prepayments, and trial balance integrity." },
        { name: "Cost Accounting Fundamentals", description: "Cost behavior, job-order & process costing, cost allocation, and variance analysis." },
        { name: "Budget Planning", description: "Operational expenditure forecasting, variance budgeting, and allocation controls." },
        { name: "Financial Reporting", description: "Preparation of income statements, balance sheets, and management report summaries." },
        { name: "Cash Flow Analysis Fundamentals", description: "Direct and indirect cash flow tracking across operating, investing, and financing activities." },
        { name: "Taxation & Audit Fundamentals", description: "Introductory Indonesian corporate tax rules (PPh 21/23/Final, PPN) and internal audit trail verification." }
      ]
    },
    {
      id: "software-productivity",
      title: "Software & Productivity",
      subtitle: "Daily operational tools for accounting transactions and spreadsheet modeling",
      skills: [
        { name: "Microsoft Excel — Advanced", levelBadge: "Advanced", description: "XLOOKUP/VLOOKUP, INDEX-MATCH, Pivot Tables, SUMIFS, Nested IFs, conditional formatting, and dashboard financial models." },
        { name: "Accurate 5", levelBadge: "Familiarity", description: "Practical understanding of company database setup, chart of accounts (COA), sales/purchases journal entries, and trial balance generation." },
        { name: "Microsoft Word", levelBadge: "Proficient", description: "Executive documentation, funding proposals, financial memoranda, and formal business letters." },
        { name: "Microsoft PowerPoint", levelBadge: "Proficient", description: "Clear visual presentations of budgetary allocations, financial performance summaries, and stakeholder pitches." }
      ]
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      subtitle: "Structured query and visualization tools to process large financial records",
      skills: [
        { name: "SQL", description: "Querying relational tables, aggregate functions, multi-table joins, subqueries, and data extraction." },
        { name: "BigQuery", description: "Handling large datasets in Google Cloud environment for scalable data extraction and queries." },
        { name: "Power BI", description: "Building interactive dashboards, dimensional modeling, and management metric tracking." },
        { name: "Looker Studio", description: "Interactive reporting dashboards connecting directly to cloud data sheets and SQL extracts." },
        { name: "Data Processing and Reporting", description: "Data cleaning, validation checks, automated reconciliation, and executive summary tables." }
      ]
    },
    {
      id: "professional-competencies",
      title: "Professional Competencies",
      subtitle: "Transferable behavioral strengths developed through university leadership and team coordination",
      skills: [
        { name: "Analytical Thinking", description: "Methodical breakdown of financial variances, identifying cost drivers, and validating figure integrity." },
        { name: "Attention to Detail", description: "Double-checking journal reconciliations, decimal precision, formula logic, and regulatory paperwork." },
        { name: "Problem-Solving", description: "Root-cause diagnosis for budget discrepancies, cost overruns, and administrative bottlenecks." },
        { name: "Leadership", description: "Coordinated committees of 30+ members and cross-functional teams with clear timelines." },
        { name: "Teamwork", description: "Collaborating smoothly with procurement, operational staff, and external sponsors." },
        { name: "Communication", description: "Articulating financial numbers and budget constraints clearly to non-finance stakeholders." },
        { name: "Adaptability", description: "Quickly learning new enterprise ERP software, company procedures, and regulatory shifts." },
        { name: "Time Management", description: "Balancing strict financial reporting deadlines, university requirements, and operational duties." }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "budget-vs-actual",
      title: "Budget vs. Actual Dashboard",
      status: "Sample Project",
      objective: "Demonstrate the ability to monitor organizational budget utilization, detect spending variances, and present actionable financial insights using Microsoft Excel modeling techniques.",
      problemStatement: "Operational managers frequently face spending overruns when expenditure monitoring is fragmented across disjointed receipts and lack a centralized variance analysis system.",
      tools: ["Microsoft Excel", "Pivot Tables", "SUMIFS & XLOOKUP", "Conditional Formatting"],
      keyCalculations: [
        "Budget Variance (IDR) = Actual Spending − Budget",
        "Budget Utilization (%) = (Actual Spending / Budget) × 100%",
        "Over-budget indicator triggered when Utilization > 100%",
        "Weighted Category Variance Contribution = Category Variance / Total Planned Budget"
      ],
      datasetDescription: "Fictional operational budget dataset spanning 6 months (January – June) across 4 major departments: Salaries & Compensation, Marketing & Advertising, Operations & Utilities, and Administration & Office. Contains monthly allocated budget targets and recorded actual disbursements in Indonesian Rupiah (IDR).",
      methodology: [
        "Compiled raw transaction records and organized structured master budget tables with standardized cost codes.",
        "Built automated aggregation formulas using SUMIFS and dynamic lookup tables for period-over-period tracking.",
        "Established threshold-based conditional formatting to flag departments reaching >95% and >100% of budget allocation.",
        "Synthesized monthly management summaries into an interactive spreadsheet view with slicers and variance waterfalls."
      ],
      findings: [
        "Marketing & Advertising experienced an 8.5% over-budget variance in Q2 due to unforecasted digital campaign expansions.",
        "Operations & Utilities maintained a 92.4% utilization rate, saving IDR 14,500,000 against its six-month planned ceiling.",
        "Total company-wide budget utilization closed at 97.8%, indicating sound overall fiscal discipline despite departmental variances."
      ],
      recommendations: [
        "Implement a pre-approval purchase requisition threshold for discretionary marketing spends exceeding 10% of monthly allocation.",
        "Reallocate the operational utilities surplus to absorb digital customer acquisition test budgets in upcoming quarters.",
        "Establish bi-weekly budget checkpoint meetings between Finance Staff and department leads prior to month-end closing."
      ],
      limitations: [
        "The model uses synthesized sample data to illustrate methodology without reflecting confidential enterprise transaction logs.",
        "Does not incorporate automated live ERP API sync, relying on batch monthly data uploads."
      ],
      learningOutcomes: [
        "Mastered advanced spreadsheet variance modeling and multi-criteria conditional alerts.",
        "Deepened understanding of managerial accounting cost-control mechanisms."
      ],
      executiveSummary: "A structured Excel-based variance monitoring template providing department heads with real-time visibility into budget burn rates, negative variances, and corrective reallocation opportunities.",
      reportAvailable: true
    },
    {
      id: "cash-flow-monitoring",
      title: "Cash Flow Monitoring & Liquidity Tracker",
      status: "Sample Project",
      objective: "Demonstrate fundamental cash flow tracking, liquidity position monitoring, and working capital cash burn analysis across operating, investing, and financing cash flows.",
      problemStatement: "Early-stage enterprises and operating units often report accounting profits but encounter liquidity strains due to misaligned customer receivables and supplier payment cycles.",
      tools: ["Microsoft Excel", "Financial Modeling", "Data Slicers", "Waterfall Cash Flow Logic"],
      keyCalculations: [
        "Net Cash Flow = Operating Cash Flow + Investing Cash Flow + Financing Cash Flow",
        "Closing Cash Balance = Opening Cash Balance + Net Cash Flow",
        "Operating Cash Ratio = Cash from Operations / Current Liabilities",
        "Days Sales Outstanding (DSO) impact on monthly receivable inflows"
      ],
      datasetDescription: "Synthesized monthly treasury ledger simulating 6 months of corporate liquidity movements for a distribution business in Indonesia, with detailed line items for customer collections, vendor payments, rent, equipment acquisitions, and loan repayments.",
      methodology: [
        "Classified every inflow and outflow according to PSAK 2 (Statement of Cash Flows) into Operating, Investing, and Financing activities.",
        "Constructed opening-to-closing balance roll-forward tables with automated validation reconciliation checks (Discrepancy = 0).",
        "Modeled month-end minimum safety cash buffer thresholds (IDR 50,000,000) to trigger early treasury alerts.",
        "Prepared management notes detailing significant working capital fluctuations and supplier payment terms."
      ],
      findings: [
        "Operating cash flow remained positive across 5 out of 6 months, driven by consistent 30-day invoice collections from primary retail accounts.",
        "March experienced a temporary net cash deficit due to an IDR 35,000,000 planned down-payment for warehouse handling equipment (Investing Cash Flow).",
        "The closing cash reserve consistently maintained above the safety threshold, ending at IDR 112,400,000 at the end of the simulation period."
      ],
      recommendations: [
        "Negotiate 45-day payment terms with top suppliers to better match customer credit cycles.",
        "Structure capital asset purchases through installments or equipment leasing rather than single lump-sum cash outflows.",
        "Maintain a daily cash sweep routine into liquid interest-bearing money market deposits for excess balances."
      ],
      limitations: [
        "Data is based on fictional sample scenarios created for practice and simulation purposes.",
        "Fx currency risk and complex multi-bank treasury sweeps were simplified into a single operating account."
      ],
      learningOutcomes: [
        "Strengthened practical understanding of the direct method of cash flow reporting under Indonesian accounting standards.",
        "Developed keen attention to detail in verifying zero-error roll-forward reconciliation."
      ],
      executiveSummary: "A comprehensive cash flow tracking framework enabling treasury officers to anticipate liquidity crunches, monitor cash burn rates, and ensure adequate buffer capital for uninterrupted business operations.",
      reportAvailable: true
    },
    {
      id: "financial-statement-analysis",
      title: "Financial Statement Analysis (Comparative & Ratio)",
      status: "Sample Project",
      objective: "Demonstrate fundamental financial analysis using published statements or fictional company models to assess profitability, liquidity, solvency, and operational efficiency.",
      problemStatement: "Raw financial statements do not immediately reveal operational risks or underlying trends without disciplined horizontal (YoY) and vertical (common-size) ratio evaluation.",
      tools: ["Financial Ratio Analysis", "Vertical & Horizontal Analysis", "Microsoft Excel", "Common-Size Reporting"],
      keyCalculations: [
        "Gross Profit Margin = (Gross Profit / Net Revenue) × 100%",
        "Net Profit Margin = (Net Income / Net Revenue) × 100%",
        "Current Ratio = Current Assets / Current Liabilities",
        "Debt-to-Equity Ratio (DER) = Total Liabilities / Total Shareholders' Equity",
        "Year-over-Year (YoY) Revenue Growth = (Revenue_t − Revenue_{t-1}) / Revenue_{t-1} × 100%"
      ],
      datasetDescription: "Two consecutive fiscal years (FY2024 vs FY2025) of audited financial statements for 'PT Nusantara Distribusi Mandiri' — a clearly marked fictional Indonesian wholesale and distribution enterprise with complete Balance Sheet and Income Statement figures.",
      methodology: [
        "Standardized balance sheet and income statement line items into common-size formats (as % of Total Assets and % of Total Revenue).",
        "Calculated key liquidity (Current & Quick), leverage (DER), and profitability (Gross, Operating, Net Margin) ratios.",
        "Conducted variance benchmarking against standard wholesale distribution industry medians in Indonesia.",
        "Authored an executive memo highlighting operational margin compression and inventory turnover changes."
      ],
      findings: [
        "Net Revenue grew by 14.2% YoY, driven by expanded regional sales coverage.",
        "Gross Profit Margin softened slightly from 26.5% to 24.1% as wholesale freight and supplier raw material costs increased.",
        "Current Ratio improved from 1.65x to 1.88x, confirming healthy short-term solvency with no immediate liquidity risk.",
        "Debt-to-Equity ratio stood conservatively at 0.72x, demonstrating that growth was financed primarily through retained earnings."
      ],
      recommendations: [
        "Review supplier contracts and explore bulk discount terms to counter gross margin shrinkage.",
        "Optimize inventory holding cycles to release trapped working capital into cash reserves.",
        "Establish quarterly ratio monitoring dashboards for internal management review."
      ],
      limitations: [
        "Uses fictional company financial statements created for academic practice. Not commissioned by or affiliated with any real corporation.",
        "Notes to financial statements and tax reconciliations were scoped down for portfolio presentation."
      ],
      learningOutcomes: [
        "Refined ability to interpret financial ratios within operational business context.",
        "Honed technical ability to translate complex financial metrics into concise executive summaries."
      ],
      executiveSummary: "An in-depth vertical and horizontal financial statement evaluation revealing strong revenue expansion alongside manageable margin compression, supported by a healthy balance sheet and low debt leverage.",
      reportAvailable: true
    },
    {
      id: "accurate-5-accounting",
      title: "Accounting Practice with Accurate 5",
      status: "Planned Project",
      objective: "Showcase hands-on familiarity with core Indonesian ERP accounting software workflows, from chart of accounts setup to automated financial reporting in Accurate 5.",
      problemStatement: "Entry-level accounting staff must be capable of translating raw source documents (invoices, receipts, tax slips) into accurate ERP journal entries without corrupting ledger balances.",
      tools: ["Accurate 5 Desktop", "General Ledger", "Chart of Accounts (COA)", "Trial Balance Verification"],
      keyCalculations: [
        "Double-entry bookkeeping validation: Total Debits ≡ Total Credits",
        "Sales tax (PPN 11%) computation on taxable supply invoices",
        "Inventory perpetual valuation (FIFO / Average Costing)",
        "Bank reconciliation balancing: Bank Statement = General Ledger Cash"
      ],
      datasetDescription: "Simulated 1-month transactional cycle for a commercial trading enterprise, including 25 source documents: purchase orders, vendor invoices, payment receipts, customer sales orders, tax invoices, and bank statements.",
      methodology: [
        "Configured company database preferences, currency settings (IDR), and initial fiscal year parameters.",
        "Imported and mapped a customized Chart of Accounts (COA) conforming to standard Indonesian accounting standards (SAK).",
        "Processed the procurement cycle: Purchase Requisition → Purchase Order → Receive Item → Purchase Invoice → Vendor Payment.",
        "Processed sales cycle: Sales Quotation → Sales Order → Delivery Order → Sales Invoice → Customer Receipt.",
        "Executed month-end general journal adjustments (depreciation, prepayments) and generated the unadjusted & adjusted Trial Balance."
      ],
      findings: [
        "Successfully posted all 25 transactional source documents with 100% debit-credit ledger balance congruence.",
        "Identified and rectified an initial vendor billing discrepancy through the Accurate 5 Bank Reconciliation feature.",
        "Generated finalized balance sheet, profit and loss, and cash flow reports directly from system modules."
      ],
      recommendations: [
        "Enforce strict sequential numbering on sales invoices and purchase receipts to maintain a clean audit trail.",
        "Perform weekly bank statement reconciliations rather than waiting for month-end close.",
        "Maintain periodic backup `.gbk` files on secure cloud storage after each posting cycle."
      ],
      limitations: [
        "Demonstration is based on academic and self-directed practice modules, not on corporate proprietary client databases.",
        "Focuses on standard trading workflows; advanced manufacturing cost-center job costing is planned for future modules."
      ],
      learningOutcomes: [
        "Hands-on experience navigating Accurate 5 modules: List, Activities, and Reports.",
        "Clear grasp of the end-to-end accounting transaction lifecycle from receipt to financial statements."
      ],
      executiveSummary: "A structured practical implementation of Indonesian accounting cycles inside Accurate 5, proving readiness for day-to-day bookkeeping, invoice verification, and financial reporting tasks.",
      reportAvailable: false
    }
  ] as ProjectItem[],

  experiences: [
    {
      id: "uxer-indonesia",
      organization: "UXER Indonesia (PMW IPB)",
      program: "Program Mahasiswa Wirausaha (Student Entrepreneurship Program)",
      role: "Team Leader",
      period: "January 2024 – February 2025",
      responsibilities: [
        "Managed project funding proposals, securing institutional seed funding through structured budget submissions.",
        "Supported financial reporting, tracking operational expenditures against approved grant allocations.",
        "Coordinated team activities and cross-functional collaboration between marketing, operations, and external partners.",
        "Contributed to financial feasibility planning and green marketplace business strategies."
      ],
      transferableFinanceSkills: [
        "Grant Budget Formulation & Allocation",
        "Operational Expense Accountability",
        "Variance Monitoring Against Grant Ceilings",
        "Financial Documentation & Justification Reports"
      ]
    },
    {
      id: "greenbase-15th",
      organization: "The 15th Greenbase",
      program: "Annual Flagship Environmental & Economic Forum",
      role: "Chief of Committee",
      period: "April 2023 – November 2023",
      responsibilities: [
        "Led and coordinated more than 30 committee members across planning, logistics, events, and fundraising divisions.",
        "Contributed directly to sponsorship and funding proposals presented to corporate partners and university bodies.",
        "Managed partner relations, financial sponsorship disbursement tracking, and student-community partnerships.",
        "Oversaw event operational budget execution, ensuring all divisions stayed within planned limits."
      ],
      transferableFinanceSkills: [
        "Event Budget Planning & Cost Control",
        "Sponsorship Fund Inflow Tracking",
        "Procurement & Receipt Verification",
        "Final Financial Accountability Reporting (LPJ)"
      ]
    },
    {
      id: "ppk-ormawa-reesa",
      organization: "PPK Ormawa REESA",
      program: "Program Penguatan Kapasitas Organisasi Kemahasiswaan (National Capacity Program)",
      role: "Vice Team Leader",
      period: "January 2023 – December 2023",
      responsibilities: [
        "Contributed to program planning, operational implementation, and fund disbursements across community villages.",
        "Coordinated activities within a 15-member team, maintaining strict compliance with national ministry guidelines.",
        "Supported community economic development initiatives, tracking field program expenditures.",
        "Assisted in preparing transparent financial accountability reports that contributed to winning 1st Place nationally."
      ],
      transferableFinanceSkills: [
        "Ministry Grant Spending Compliance",
        "Field Activity Budget Disbursement",
        "Voucher & Invoice Reconciliation",
        "Comprehensive Project Evaluation"
      ]
    },
    {
      id: "reesa-csr",
      organization: "REESA IPB",
      program: "Resource & Environmental Economics Student Association",
      role: "Staff of Campus Social Responsibility",
      period: "January 2023 – December 2023",
      responsibilities: [
        "Contributed to program budgeting, resource coordination, and operational cost evaluation.",
        "Collaborated with local communities, administrative staff, and university students on social impact projects.",
        "Recorded expense receipts, verified vendor invoices, and compiled post-event budget evaluations."
      ],
      transferableFinanceSkills: [
        "Petty Cash & Expense Logging",
        "Invoice Verification Against Estimates",
        "Post-Activity Cost Evaluation",
        "Stakeholder Collaboration"
      ]
    }
  ] as ExperienceItem[],

  certifications: [
    {
      id: "cert-corp-fin",
      title: "Corporate Finance",
      issuer: "MySkill",
      category: "Finance & Accounting",
      status: "Verified Certificate",
      description: "Covers capital budgeting, cost of capital (WACC), dividend policy, valuation basics, and capital structure principles.",
      verified: true
    },
    {
      id: "cert-fsa",
      title: "Financial Statement Analysis",
      issuer: "MySkill",
      category: "Finance & Accounting",
      status: "Verified Certificate",
      description: "In-depth training on common-size statements, financial ratio analysis, liquidity, solvency, and profitability assessment.",
      verified: true
    },
    {
      id: "cert-fa",
      title: "Financial Accounting",
      issuer: "MySkill",
      category: "Finance & Accounting",
      status: "Verified Certificate",
      description: "Fundamental debit-credit mechanics, ledger reconciliation, accrual basis accounting, and financial statement assembly.",
      verified: true
    },
    {
      id: "cert-ca",
      title: "Cost Accounting",
      issuer: "MySkill",
      category: "Finance & Accounting",
      status: "Verified Certificate",
      description: "Cost classification, manufacturing overhead allocation, job-order costing, and process costing workflows.",
      verified: true
    },
    {
      id: "cert-bootcamp",
      title: "Accounting, Taxation & Audit Intensive Bootcamp",
      issuer: "MySkill",
      category: "Finance & Accounting",
      status: "Completed Bootcamp",
      description: "Intensive training across end-to-end Indonesian corporate accounting cycles, PPh & PPN taxation fundamentals, and audit working papers.",
      verified: true
    },
    {
      id: "cert-sql",
      title: "SQL for Data Analysis",
      issuer: "MySkill",
      category: "Data & Analytics",
      status: "Verified Certificate",
      description: "Writing relational queries, aggregate filtering, complex joins, subqueries, and structured data extraction.",
      verified: true
    },
    {
      id: "cert-genai",
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      category: "Productivity & AI",
      status: "Verified Certificate",
      description: "Ethical AI applications, workplace productivity optimization, and foundational generative intelligence workflows.",
      verified: true
    },
    {
      id: "cert-efset",
      title: "EF SET English Proficiency — B2 Upper Intermediate",
      issuer: "EF Standard English Test",
      category: "Language",
      status: "Proficiency Test",
      description: "Certified B2 Upper Intermediate English proficiency across reading comprehension and listening skills.",
      verified: true
    }
  ] as CertificationItem[],

  achievements: [
    {
      id: "ach-1",
      title: "1st Place, PPK Ormawa 2023",
      year: "2023",
      organizer: "Ministry of Education, Culture, Research, and Technology (Kemendikbudristek)",
      category: "National Competition",
      description: "Awarded 1st place in the prestigious national student organization capacity reinforcement program for exemplary community execution, rigorous governance, and financial accountability."
    },
    {
      id: "ach-2",
      title: "Awardee, IPB Student Entrepreneurship Program Funding 2024",
      year: "2024",
      organizer: "IPB University (PMW IPB)",
      category: "Institutional Funding",
      description: "Successfully secured university business grant funding for 'UXER Indonesia' after rigorous proposal evaluation, financial viability screening, and pitching."
    },
    {
      id: "ach-3",
      title: "Selected Proposal, IPB Innovative Student Creativity Program 2024",
      year: "2024",
      organizer: "IPB University (PKM IPB)",
      category: "Academic Creativity Selection",
      description: "Selected funding-stage proposal for student innovation with thorough operational budgeting and socio-economic impact methodology."
    },
    {
      id: "ach-4",
      title: "Selected Proposal, IPB Student Digital Innovation Competition 2024",
      year: "2024",
      organizer: "IPB University",
      category: "Digital Innovation Competition",
      description: "Qualified proposal showcasing digital platform feasibility, cost analysis, and scalable operational design."
    }
  ] as AchievementItem[]
};

// Realistic sample financial dataset for interactive Budget vs Actual dashboard
export const BUDGET_SAMPLE_DATA = [
  { month: "January", category: "Salaries & Compensation", budget: 45000000, actual: 44200000 },
  { month: "January", category: "Marketing & Advertising", budget: 15000000, actual: 16200000 },
  { month: "January", category: "Operations & Utilities", budget: 12000000, actual: 11400000 },
  { month: "January", category: "Administration & Office", budget: 8000000, actual: 7500000 },

  { month: "February", category: "Salaries & Compensation", budget: 45000000, actual: 45000000 },
  { month: "February", category: "Marketing & Advertising", budget: 15000000, actual: 14800000 },
  { month: "February", category: "Operations & Utilities", budget: 12000000, actual: 11100000 },
  { month: "February", category: "Administration & Office", budget: 8000000, actual: 8200000 },

  { month: "March", category: "Salaries & Compensation", budget: 45000000, actual: 46100000 },
  { month: "March", category: "Marketing & Advertising", budget: 18000000, actual: 19500000 },
  { month: "March", category: "Operations & Utilities", budget: 12500000, actual: 11800000 },
  { month: "March", category: "Administration & Office", budget: 8500000, actual: 8100000 },

  { month: "April", category: "Salaries & Compensation", budget: 46000000, actual: 45800000 },
  { month: "April", category: "Marketing & Advertising", budget: 16000000, actual: 17400000 },
  { month: "April", category: "Operations & Utilities", budget: 12500000, actual: 11500000 },
  { month: "April", category: "Administration & Office", budget: 8500000, actual: 8300000 },

  { month: "May", category: "Salaries & Compensation", budget: 46000000, actual: 46000000 },
  { month: "May", category: "Marketing & Advertising", budget: 20000000, actual: 22100000 },
  { month: "May", category: "Operations & Utilities", budget: 13000000, actual: 12200000 },
  { month: "May", category: "Administration & Office", budget: 9000000, actual: 8900000 },

  { month: "June", category: "Salaries & Compensation", budget: 48000000, actual: 47500000 },
  { month: "June", category: "Marketing & Advertising", budget: 18000000, actual: 18900000 },
  { month: "June", category: "Operations & Utilities", budget: 13000000, actual: 12500000 },
  { month: "June", category: "Administration & Office", budget: 9000000, actual: 8800000 },
];

// Realistic sample cash flow dataset for Cash Flow Monitoring
export const CASH_FLOW_SAMPLE_DATA = [
  {
    month: "January",
    openingBalance: 75000000,
    operatingInflow: 135000000,
    operatingOutflow: 102000000,
    investingOutflow: 5000000,
    financingInflow: 0,
    financingOutflow: 8000000,
    note: "Stable seasonal customer invoice settlements; routine equipment maintenance."
  },
  {
    month: "February",
    openingBalance: 95000000,
    operatingInflow: 142000000,
    operatingOutflow: 110000000,
    investingOutflow: 4000000,
    financingInflow: 0,
    financingOutflow: 8000000,
    note: "Higher retail distribution sales; prompt vendor payments captured cash discounts."
  },
  {
    month: "March",
    openingBalance: 115000000,
    operatingInflow: 128000000,
    operatingOutflow: 118000000,
    investingOutflow: 35000000, // Capital expenditure down payment
    financingInflow: 0,
    financingOutflow: 8000000,
    note: "Planned down payment for warehouse handling equipment (investing cash flow)."
  },
  {
    month: "April",
    openingBalance: 82000000,
    operatingInflow: 155000000,
    operatingOutflow: 122000000,
    investingOutflow: 3000000,
    financingInflow: 0,
    financingOutflow: 8000000,
    note: "Strong post-holiday collection cycle; inventory restocking completed."
  },
  {
    month: "May",
    openingBalance: 104000000,
    operatingInflow: 160000000,
    operatingOutflow: 130000000,
    investingOutflow: 6000000,
    financingInflow: 0,
    financingOutflow: 8000000,
    note: "Marketing expansion expenditure; high volume turnover in core product lines."
  },
  {
    month: "June",
    openingBalance: 112000000,
    operatingInflow: 168000000,
    operatingOutflow: 131600000,
    investingOutflow: 8000000,
    financingInflow: 0,
    financingOutflow: 8000000,
    note: "Half-year closing balance healthy above buffer threshold at IDR 132.4M."
  }
];

// Fictional company financial statements data for Financial Statement Analysis
export const FINANCIAL_STATEMENT_SAMPLE = {
  companyName: "PT Nusantara Distribusi Mandiri (Fictional Practice Dataset)",
  industry: "Wholesale & FMCG Distribution (Indonesia)",
  periods: ["FY2024", "FY2025"],
  incomeStatement: [
    { item: "Net Sales Revenue", fy2024: 12400000000, fy2025: 14160000000 },
    { item: "Cost of Goods Sold (COGS)", fy2024: 9114000000, fy2025: 10747440000 },
    { item: "Gross Profit", fy2024: 3286000000, fy2025: 3412560000 },
    { item: "Operating Expenses (SG&A)", fy2024: 1736000000, fy2025: 1840800000 },
    { item: "Operating Income (EBIT)", fy2024: 1550000000, fy2025: 1571760000 },
    { item: "Interest Expense", fy2024: 180000000, fy2025: 165000000 },
    { item: "Income Before Tax (EBT)", fy2024: 1370000000, fy2025: 1406760000 },
    { item: "Corporate Income Tax (22%)", fy2024: 301400000, fy2025: 309487200 },
    { item: "Net Income After Tax", fy2024: 1068600000, fy2025: 1097272800 },
  ],
  balanceSheet: [
    { item: "Cash & Cash Equivalents", fy2024: 980000000, fy2025: 1260000000 },
    { item: "Trade Accounts Receivable", fy2024: 1840000000, fy2025: 2050000000 },
    { item: "Merchandise Inventory", fy2024: 2250000000, fy2025: 2420000000 },
    { item: "Total Current Assets", fy2024: 5070000000, fy2025: 5730000000 },
    { item: "Property, Plant & Equipment (Net)", fy2024: 3420000000, fy2025: 3680000000 },
    { item: "Total Assets", fy2024: 8490000000, fy2025: 9410000000 },
    { item: "Accounts Payable", fy2024: 1950000000, fy2025: 1980000000 },
    { item: "Short-Term Bank Debt", fy2024: 1120000000, fy2025: 1060000000 },
    { item: "Total Current Liabilities", fy2024: 3070000000, fy2025: 3040000000 },
    { item: "Long-Term Bank Debt", fy2024: 850000000, fy2025: 750000000 },
    { item: "Total Liabilities", fy2024: 3920000000, fy2025: 3790000000 },
    { item: "Paid-in Capital", fy2024: 3000000000, fy2025: 3000000000 },
    { item: "Retained Earnings", fy2024: 1570000000, fy2025: 2620000000 },
    { item: "Total Shareholders' Equity", fy2024: 4570000000, fy2025: 5620000000 },
  ],
  calculatedRatios: [
    { ratio: "Gross Profit Margin", fy2024: "26.50%", fy2025: "24.10%", change: "-2.40% pts", benchmark: "20% - 28%", status: "Acceptable" },
    { ratio: "Operating Profit Margin", fy2024: "12.50%", fy2025: "11.10%", change: "-1.40% pts", benchmark: "8% - 15%", status: "Healthy" },
    { ratio: "Net Profit Margin", fy2024: "8.62%", fy2025: "7.75%", change: "-0.87% pts", benchmark: "5% - 10%", status: "Healthy" },
    { ratio: "Current Ratio", fy2024: "1.65x", fy2025: "1.88x", change: "+0.23x", benchmark: "1.50x - 2.00x", status: "Optimal" },
    { ratio: "Quick Ratio (Acid-Test)", fy2024: "0.92x", fy2025: "1.09x", change: "+0.17x", benchmark: "> 1.00x", status: "Improved" },
    { ratio: "Debt-to-Equity Ratio (DER)", fy2024: "0.86x", fy2025: "0.67x", change: "-0.19x", benchmark: "< 1.20x", status: "Conservative" }
  ]
};
