export const en = {
  navbar: {
    home: "Home",
    platform: "Platform",
    traceability: "Traceability",
    digitalTwin: "Digital Twin",
    successStories: "Success Stories",
    pricing: "Pricing",
    contact: "Contact",
    howItWorks: "DIM Data Bus",
    enter: "Log In",
    trialCta: "7-Day Trial",
  },
  trustStrip: {
    badge: "Designed by geologists, built for forensic experts",
    laws: [
      "National Law 24.051",
      "National Law 25.675",
      "PBA Water Code",
      "ADA Res.",
      "ACUMAR Res.",
      "ESG Standards",
    ],
  },
  hero: {
    tag: "Integrated Technology & Environment",
    companyBadge: "GeoSint · Land Intelligence",
    productBadge: "DIM Data Bus — Centralized Environmental Intelligence",
    title: "GeoSint: Land Intelligence Solutions",
    subtitle: "DIM Data Bus · Environmental Data Management and Analysis Platform",
    desc: "Self-Managed Environmental Analysis for Consulting Firms. From field data to forensic legal reports without margin of error: transform geospatial information and time series into decisions with precision, efficiency, and full compliance.",
    badges: {
      sha: "SHA-256 on every sample",
      offline: "100% offline-first",
      protocols: "37 structured protocols",
    },
    ctaTrial: "Request 7-day Trial",
    ctaPlatform: "Explore full platform",
    videoFallback: "Your browser does not support HTML5 video playback.",
  },
  platformModules: {
    tag: "One single platform",
    title: "DIM Data Bus: ",
    titleGradient: "The entire environmental data lifecycle, fully integrated",
    desc: "What used to require separate software — field capture, GIS, hydraulic modeling, forensic calculations, and expert AI — now lives within a single unified architecture.",
    modules: [
      {
        id: "field-capture",
        title: "Traceable Field Data Capture",
        desc: "Real-time SHA-256 hash, 60s GPS Heartbeat, and atomic Audit Trail on every entry recorded in the field.",
        tag: "Traceability",
      },
      {
        id: "native-gis",
        title: "Native Vector GIS Engine",
        desc: "Built on OpenLayers v10, with zero proprietary dependencies. Universal export to GeoJSON, CSV, and QGIS-ready ZIP.",
        tag: "Native GIS",
      },
      {
        id: "protocols",
        title: "37 Structured Protocols",
        desc: "Standardized monitoring for surface water, groundwater, soils, air, biota, geology, hydrocarbons, and hazardous wastes.",
        tag: "Standardization",
      },
      {
        id: "digital-twin",
        title: "Digital Twin Hidráulico",
        desc: "Models pollutant runoff and dispersion across terrain using satellite DEM, contour lines, and topological graphs.",
        tag: "Hydrology",
      },
      {
        id: "rules-engine",
        title: "Rules & Concomitance Engine",
        desc: "Real-time detection of regulatory threshold breaches and hydrochemical synergies the instant an analyte is entered.",
        tag: "Real Time",
      },
      {
        id: "forensic-calc",
        title: "Forensic Calculation Library",
        desc: "LSI, Ryznar indexes, PAH/DDT ratios, SAR, CSR, ion balance, and hydrocarbon origin diagnosis (petrogenic vs. pyrogenic).",
        tag: "Forensic Calc",
      },
      {
        id: "analyst-agent",
        title: "Analyst Assistance Expert Agent",
        desc: "Built with Google Genkit & Gemini: assists the technical specialist with interpretation, causal hypothesis generation, and extended protocol guidance.",
        tag: "Contextual AI",
      },
      {
        id: "knowledge-graph",
        title: "3D Knowledge Graph",
        desc: "Immersive WebGL/Three.js visualization of contaminant plumes and causal relationships, designed for boardrooms and courtrooms.",
        tag: "3D Visualization",
      },
      {
        id: "offline-multitenancy",
        title: "Offline-First & Multi-Tenancy",
        desc: "PWA + IndexedDB for extreme zero-connectivity field conditions, with zero-trust architecture and AES-256-CBC encryption.",
        tag: "Infrastructure",
      },
    ],
  },
  ruleEngineModal: {
    tag: "Rules & Concomitance Engine",
    title: "Real-time forensic detection upon data entry",
    desc: "As soon as field personnel enter a parameter, DIM Data Bus evaluates active regulatory frameworks, computes agronomic or forensic indices, and alerts to hydrochemical synergies.",
    alertTitle: "Impact Alert: Fluorides (mg/L)",
    hypothesisLabel: "ASSOCIATED HYPOTHESIS",
    hypothesis: "Geogenic Outcropping via Phreatic Intersection",
    techDescLabel: "TECHNICAL DESCRIPTION",
    techDesc: "Excavation floor reached aquifer levels naturally rich in fluorides (volcanic glasses), providing saline baseflow to the channel.",
    actionLabel: "REQUIRED ACTION",
    irrigationCalcTitle: "IRRIGATION INDICES CALCULATION (AGRONOMIC)",
    rasTitle: "SODIUM (SAR)",
    rasValue: "5.88",
    rasBadge: "Low",
    rasDesc: "Low sodium hazard (suitable for most soils)",
    csrTitle: "CARBONATE (RSC)",
    csrValue: "0.93",
    csrBadge: "Good",
    csrDesc: "Good quality (suitable for prolonged irrigation)",
    concomitantLabel: "CONCOMITANT ENHANCEMENT DETECTED",
    concomitant1Title: "Concomitant: Total Arsenic (Elevated) → Pampean Geogenic Signature",
    concomitant1Desc: "Combined detection provides irrefutable forensic evidence of natural groundwater origin. Requires redesign of dewatering management strategy.",
    concomitant2Title: "Concomitant: Total Phosphorus (Elevated) → Agricultural Input Synergy",
    concomitant2Desc: "Confirms fluoride entered as an impurity from fertilizer leaching (superphosphates). Mandates vegetated buffer strip delineation.",
    limitsLabel: "EXCEEDED REGULATORY LIMITS",
    limit1: "2. Mean Human Consumption Limit - CAA Art 982",
    limit1Val: "> 1 mg/L",
    limit2: "3. Maximum Irrigation Limit - Dec 831-93 Table 5",
    limit2Val: "> 1 mg/L",
    limit3: "4. Freshwater Aquatic Life Limit - Dec 831-93 Table 2",
    limit3Val: "> 1.4 mg/L",
  },
  digitalTwin: {
    tag: "Digital Twin Hidráulico",
    title: "Where does the pollutant flow? ",
    titleGradient: "The platform visualizes it.",
    desc: "From satellite Digital Elevation Models (DEM) and topological graphs, DIM Data Bus computes surface and subsurface terrain runoff. The result is a legally defensible contamination trajectory, not freehand guesswork.",
    item1: "Surface and subsurface runoff modeled over actual satellite DEM and high-resolution contour data.",
    item2: "Vector interactive visualization featuring discretized topological nodes and dynamic flow vectors.",
    item3: "Cartographic and vector exports ready for board presentations, environmental audits, or court testimony.",
    cardBadge: "Digital Twin Hidráulico",
    activeStatus: "ACTIVE",
    cardStat1Label: "Discretized nodes:",
    cardStat1Val: "1,179",
    cardStat2Label: "Active flows:",
    cardStat2Val: "430",
    cardStat3Label: "Topographic barriers:",
    cardStat3Val: "34",
    radiusLabel: "Radius RB:",
    radiusVal: "1.80 km",
    osmBtn: "OSM Elements",
    topoBtn: "Topological Graph",
  },
  analystAgent: {
    tag: "Augmented Intelligence",
    title: "Forensic Agent assisting the Analyst",
    titleGradient: "in interpretation, hypothesis generation, and extended protocol recommendations",
    desc: "Powered by Google Genkit and Gemini: guides technicians and experts based on geomorphology, GPS telemetry, and detected environmental matrix, suggesting regulatory framing and priority mitigations.",
    cardHeader: "DIM Data Bus · AI-Assisted Expert Diagnosis",
    hypothesisTitle: "2. Cumulative influence of stormwater runoff and diffuse clandestine discharges",
    hypothesisDesc: "Simultaneous presence of multiple perimeter activities (service stations, healthcare centers, vehicle washes), coupled with dissolved oxygen depression, supports the hypothesis of low-intensity sustained organic discharge dampening aquatic respiratory capacity without causing acute general analyte toxicity.",
    recommendedTitle: "RECOMMENDED ACTIONS",
    measure1: "1. Intensify hydrobiological and physicochemical biweekly monitoring at the critical point to evaluate dissolved oxygen consumption rate.",
    measure2: "2. Perform tracer inspection and flow gauging in urban stormwater outfalls discharging nearby to identify clandestine connections.",
    measure3: "3. Audit effluent handling and discharge compliance across commercial and vehicle-wash facilities within a 1,600m radius.",
    measure4: "4. Implement a stormwater runoff management plan along roadway alignments to mitigate diffuse influx of salts and organic matter.",
  },
  howItWorks: {
    tag: "The Trinity of Forensic Trust",
    title: "Data that is not only productive, ",
    titleGradient: "it is legally defensible",
    desc: "DIM Data Bus converts every field entry into mathematically immutable evidence, suitable for state audits and judicial scrutiny.",
    pilarBadge: "Pillar",
    rigorCientifico: "Scientific Rigor",
    garantiaComercial: "Commercial Guarantee",
    ctaTrial: "Request a 7-day TRIAL",
    ctaEnter: "Access the Platform",
    pillars: [
      {
        title: "Digital Chain of Custody",
        subtitle: "Active Audit Trail",
        technicalDetails: "Map an immutable history through {activity_logs} of each action (creation, editing, or {soft delete}), saving a delta of changes (diff), timestamp, and the {contributors} and {form_contributors} collections that record co-authorship in the field.",
        scientificValue: "Guarantee scientific reproducibility and clear sample lineage. Enables the reconstruction of full monitoring campaigns and compliance with strict Quality Assurance and Quality Control (QA/QC) requirements before environmental agencies (ADA, Ministry of Environment).",
        marketingValue: "Guarantee \"Transparency without Exceptions\" before state inspections and corporate audits. Protects the consulting firm's civil liability by proving rigorous traceability from the start of the survey."
      },
      {
        title: "Immutable Data",
        subtitle: "SHA-256 Encryption",
        technicalDetails: "Generate a SHA-256 cryptographic hash ({firmaDigitalHash}) in real time when saving each analyte in the field, linking value, user, date, and location. Any alteration attempt in the backend or external database breaks the signature immediately.",
        scientificValue: "Completely eliminate the bias of manual alteration of critical parameters (pH, heavy metals). Ensures dataset integrity for precise calibration of GIS models, regressions, and long-term predictions.",
        marketingValue: "Advanced cryptography applied to the environment. Acts as an ecological digital notary: exported technical reports feature a seal of unquestionable mathematical legitimacy against environmental audits and legal claims."
      },
      {
        title: "Rigid GPS Georeferencing",
        subtitle: "Geographical Validation",
        technicalDetails: "Capture native spatial coordinates in real time through an active presence {GPS Heartbeat} every 60s. Audits synchronization delay and injects geographical metadata (EXIF) into evidence photos linked to the sample.",
        scientificValue: "Ensure planimetric precision for each uploaded individual parameter. Accurately correlates physical sampling points with satellite imagery and digital elevation models (DEM).",
        marketingValue: "Eradicate \"desk upload\" fraud by certifying the technician's physical presence in the field. Links photographic records with environmental points of interest."
      }
    ]
  },
  targetAudiences: {
    tag: "Who GeoSint is for",
    title: "One platform, ",
    titleGradient: "three ways to transform environmental operations",
    audiences: [
      {
        badge: "CURRENT FOCUS",
        title: "Environmental Consulting Firms",
        desc: "Professionalize and shield your operations. Your reports leave the field with cryptographic SHA-256 signatures and legal traceability, not from desks via error-prone spreadsheets.",
      },
      {
        badge: "MEDIUM TERM",
        title: "Industries with In-House Compliance",
        desc: "Your environmental insurance and ESG compliance shield. Prove continuous due diligence before state regulators inspect — oil & gas, mining, agribusiness, and manufacturing.",
      },
      {
        badge: "POSITIONING",
        title: "Regulatory Agencies & Courts",
        desc: "A digital environmental prosecutor. Every forensic report carries immutable chain-of-custody and hydraulic twin modeling proving mathematically where contaminants migrated.",
      },
    ],
  },
  successStories: {
    title: "GeoSint in Action: Impact Stories",
    desc: "Discover how leading consulting firms achieve analytical autonomy and guarantee regulatory compliance in real-world projects.",
    metrics: {
      engineering: "Weekly Engineering Savings",
      modules: "Analysis Module",
      modulesLabel: "Self-Managed Visualization",
      compliance: "B2B Compliance",
      complianceLabel: "Backed by Environmental Laws",
    },
    testimonials: [
      {
        projectTitle: "Hydrocarbon Spill Remediation",
        metric: "-90%",
        metricLabel: "Time in Contaminant Quantification",
        consultora: "Environmental Engineering Firm",
        quote: "We accurately quantified the volume of DRO hydrocarbons across 2,650 m³ of affected soil in just 2 hours. This represents a reduction of over 90% compared to traditional workflows, enabling immediate evidence-based decisions and compliance with Hazardous Waste laws.",
        logoText: "IA"
      }
    ]
  },
  pricing: {
    tag: "Pricing",
    title: "A plan tailored for every operational stage",
    subtitle: "All plans include UNLIMITED users per company. Reference prices in USD/month.",
    unlimitedBadge: "UNLIMITED users on all plans",
    ctaTrial: "Start 7-day trial",
    ctaSales: "Contact sales",
    plans: [
      {
        name: "Starter",
        price: "$280",
        period: "/mo",
        users: "Unlimited users",
        features: [
          "Field capture with legal traceability",
          "Standardized monitoring protocols",
          "GIS engine & universal export (GeoJSON/CSV)",
          "No user limits",
          "Basic Audit Trail with diffs"
        ]
      },
      {
        name: "Pro",
        badge: "MOST POPULAR",
        price: "$550",
        period: "/mo",
        users: "Unlimited users",
        features: [
          "Everything in Starter",
          "All 37 standardized protocols",
          "Digital Twin Hidráulico on satellite DEM",
          "Complete forensic calculation library",
          "Real-time rules and concomitance engine",
          "No user limits"
        ]
      },
      {
        name: "Enterprise",
        price: "$1,600",
        period: "/mo",
        users: "Unlimited users",
        features: [
          "Everything in Pro",
          "Analyst expert AI agent (Genkit + Gemini)",
          "Immersive 3D Knowledge Graph (WebGL)",
          "Priority support and guaranteed SLA",
          "Multi-tenancy with AES-256 encryption",
          "No user limits"
        ]
      }
    ]
  },
  contactForm: {
    tag: "Get in Touch",
    title: "Transform Your Data into Evidence-Based Decisions",
    desc: "Access the analytical autonomy your consulting firm needs to optimize projects and mitigate environmental risks.",
    trialHeader: "What is included in the Free Trial?",
    trialItems: [
      "Seven-day license with zero functional restrictions.",
      "UNLIMITED users per company.",
      "All standardized monitoring sheets: Surface water, Groundwater, Air quality, Soils.",
      "2 Campaigns; 3 Monitoring Stations; 6 Reports (2 per Station); 24 Sheets; 60 Photos"
    ],
    successTitle: "Request Submitted Successfully!",
    successDesc: "Thank you for your interest in GeoSint. We will contact you shortly.",
    successButton: "Send another message",
    labelName: "Full Name",
    labelCompany: "Company / Consulting Firm",
    labelEmail: "Email Address",
    labelMessage: "Message / Project",
    placeholderName: "e.g. Eng. Martin Garcia",
    placeholderCompany: "e.g. Environmental Services Inc.",
    placeholderEmail: "martin.garcia@company.com",
    placeholderMessage: "Tell us briefly about your project...",
    errorName: "Full name is required.",
    errorCompany: "Company name is required.",
    errorEmailRequired: "Email address is required.",
    errorEmailInvalid: "Email format is invalid.",
    errorMessage: "Please tell us briefly about your project.",
    submitButton: "Send Request",
    submittingButton: "Sending...",
  },
  modules: {
    title: "Our Self-Managed Solutions for Environmental Challenges",
    desc: "Access advanced tools to optimize projects, mitigate risks, and ensure regulatory compliance with total autonomy.",
    businessImpact: "Business Impact & B2B Compliance",
    badge: "Self-Managed",
    moreInfo: "MORE INFORMATION",
    demoCta: "Request Module Demo",
    generalDesc: "Overview",
    legalFramework: "Legal & Regulatory Framework",
    keyFeatures: "Key Capabilities",
    impactMetric: "Impact Metric:",
    mockUiHeader: "Self-Managed Interface Simulation",
    mockUiDesc: "Consulting teams upload data autonomously and the system generates simulations instantly.",
    modalQuestion: "Interested in deploying this module?",
    close: "Close",
    cards: [
      {
        id: "geomorfologico",
        title: "Predictive Geomorphological Modeling Module",
        shortDesc: "Simulate erosion and sedimentation scenarios using bathymetry and grain-size data. Quantify impacts and substantiate compliance with EIA regulations.",
        fullDesc: "Processes bathymetric profiles and sediment granulometry to model fluvial or coastal dynamics under variable flows, ensuring robust environmental compliance.",
        law: "National Law 25.675 (General Environmental Law - Environmental Impact Assessment)",
        benefits: [
          "5, 10, and 25-year erosion simulation",
          "Direct integration of bathymetric point clouds (.las, .csv)",
          "Exact sediment volume quantification",
          "Automated audit-ready impact reports"
        ],
        metrics: "35% reduction in river modeling timelines",
        mockUI: {
          title: "GEOMORPHOLOGICAL MODELER",
          file: "PARANA_RIVER_BATHYMETRY.CSV",
          estErosion: "Estimated Erosion",
          sedimentation: "Sedimentation",
          profileView: "2D Profile View",
          compliance: "Compliance: Law 25.675 - Risk Level: LOW"
        }
      },
      {
        id: "plumas",
        title: "3D Contaminant Plume Viewer",
        shortDesc: "Visualize contaminant dispersion in surface and groundwater. Gain predictive foresight for risk mitigation and environmental management.",
        fullDesc: "Advanced in-browser 3D rendering simulating solute and hydrocarbon plume dispersion in aquifers or surface bodies with decay rates and velocity vectors.",
        law: "National Law 25.688 (Water Environmental Management Regime)",
        benefits: [
          "Interactive 3D visualization with concentration isocontours",
          "Pumping and remediation scenario simulation",
          "Arrival time prediction to supply wells",
          "Optimized monitoring network placement"
        ],
        metrics: "Optimizes risk management in hydraulic projects",
        mockUI: {
          title: "3D DISPERSION VIEWER",
          file: "BENZENE_PLUME_SIMULATION.DAT",
          estErosion: "Peak Concentration",
          sedimentation: "Dispersion Radius",
          profileView: "3D Concentration Profile",
          compliance: "Compliance: Law 25.688 - Alert Level: MEDIUM"
        }
      },
      {
        id: "acuiferos",
        title: "Aquifer Vulnerability Evaluator",
        shortDesc: "Automatically compute hydrogeological vulnerability indices (DRASTIC, GOD). Identify critical zones to protect groundwater resources.",
        fullDesc: "Automated spatial computation of vulnerability indices integrating water depth, net recharge, aquifer lithology, soil type, and hydraulic conductivity.",
        law: "Provincial Law 12.257 (Buenos Aires Water Code)",
        benefits: [
          "Automated DRASTIC and GOD calculation",
          "Risk zoning thematic map generation",
          "Land-use conflict detection",
          "Standardized GIS layer export (GeoJSON, Shapefile)"
        ],
        metrics: "Speeds up hydrogeological map creation",
        mockUI: {
          title: "DRASTIC VULNERABILITY INDEX",
          file: "NORTH_ZONE_HYDRO_LAYER.SHP",
          estErosion: "Mean Index",
          sedimentation: "Vulnerable Area",
          profileView: "Risk Zoning",
          compliance: "Compliance: Law 12.257 - Status: EVALUATED"
        }
      },
      {
        id: "hidrico",
        title: "Water Balance and Time Series Calculator",
        shortDesc: "Model aquifer recharge, runoff, and evapotranspiration with historical and satellite climate data for water abstraction permits.",
        fullDesc: "Calculates climatic water balances at basin scale crossing rainfall, potential evapotranspiration, and streamflows to predict seasonal deficits or surpluses.",
        law: "ADA Resolution 333/17 (Discharge and Water Use Standards)",
        benefits: [
          "Automated satellite weather data integration",
          "Seasonal water supply projections",
          "Automated soil water storage calculation",
          "Executive reports ready for water agency filing"
        ],
        metrics: "Accelerates hydrological computations",
        mockUI: {
          title: "WATER BALANCE SERIES 2015-2025",
          file: "WEATHER_STATION_DATA.CSV",
          estErosion: "Est. Net Recharge",
          sedimentation: "Summer Deficit",
          profileView: "Seasonal Variation Curve",
          compliance: "Compliance: ADA Res. 333/17 - Status: CONFORMING"
        }
      },
      {
        id: "confinamiento",
        title: "Containment Facility Hydraulic Isolation Evaluator",
        shortDesc: "Simulate geotechnical and hydrogeological performance of landfills, tailings dams, and retention basins to verify hazardous waste compliance.",
        fullDesc: "Evaluates barrier and synthetic liner integrity in containment facilities. Analyzes clay thickness, permeability, hydraulic gradients, and risk of hydrostatic blowouts.",
        law: "National Law 24.051 (Hazardous Waste - Disposal Facilities)",
        benefits: [
          "Automatic verification of equivalent clay thickness under Law 24.051",
          "Advective-dispersive transport modeling across multilayer barriers",
          "Geotechnical slope stability factor of safety calculation",
          "Early warnings for critical hydraulic uplift gradient"
        ],
        metrics: "Mitigates leakage risks in hazardous waste repositories",
        mockUI: {
          title: "CONTAINMENT INTEGRITY EVALUATION",
          file: "MONITORING_SAFETY_CELL_4.JSON",
          estErosion: "Mean Permeability (k)",
          sedimentation: "Hydraulic Gradient",
          profileView: "Stratigraphic Cross-Section",
          compliance: "Compliance: Law 24.051 - Status: COMPLIANT"
        }
      },
      {
        id: "montecarlo",
        title: "Probabilistic Discharge Risk Evaluator",
        shortDesc: "Simulate pollutant dilution in receiving water bodies via Monte Carlo (10,000 iterations). Quantify exceedance probability before discharging.",
        fullDesc: "Stochastic simulation modeling interaction between industrial effluents and water body hydrodynamics, calculating mathematical probability of legal threshold exceedance.",
        law: "ADA Resolution 333/17 (Discharge Standards)",
        benefits: [
          "10,000 automated iterations per simulation",
          "Downstream concentration probability distribution",
          "Detection of critical low-flow failure conditions",
          "Downloadable quantitative report for administrative filings"
        ],
        metrics: "Optimizes certainty in contingency management",
        mockUI: {
          title: "MONTE CARLO DILUTION SIMULATOR",
          file: "EFFLUENT_FLOW_PARAMS.CSV",
          estErosion: "Median Concentration",
          sedimentation: "Exceedance Probability",
          profileView: "Probability Distribution",
          compliance: "Compliance: ADA Res. 333/17 - Risk: MODERATE",
          monteCarlo: "Monte Carlo Simulation: Complete (10k iterations)",
          pdfReport: "PDF Impact Report: Generated",
          downloadCta: "Download Report (.pdf)"
        }
      }
    ],
    features: {
      liabilities: "Reduces environmental liabilities",
      risks: "Optimizes risk management",
      compliance: "Regulatory compliance",
      costs: "Saves operational overhead",
      visibility: "Comprehensive predictive visibility"
    }
  },
  footer: {
    brandDesc: "GeoSint provides DIM Data Bus: self-managed environmental intelligence for consulting firms. From field data to forensic reports without margin of error.",
    navigationTitle: "Platform",
    legalTitle: "Legal Framework",
    contactTitle: "Contact",
    contactEmail: "contacto@geosint.com.ar",
    contactPhone: "+54 221 3183040",
    contactLocation: "La Plata, Argentina",
    laws: [
      "National Law 24.051 on Hazardous Waste",
      "National Law 25.675 General Environmental Law",
      "National Law 25.688 Water Environmental Regime",
      "Provincial Law 12.257 PBA Water Code",
      "ADA and ACUMAR Resolutions · ESG Standards"
    ],
    privacyLink: "Privacy Policy",
    termsLink: "Terms of Service",
    copyright: "GeoSint © {year}. All rights reserved.",
    slogan: "Evidence-Based Decisions in Environmental Intelligence.",
    privacyModal: {
      title: "PRIVACY AND DATA PROCESSING POLICY – GEOSINT",
      sections: [
        {
          title: "1. LEGAL FRAMEWORK AND INFORMED CONSENT",
          paragraphs: [
            "This document establishes the data processing and privacy policies of the GeoSint platform (\"the System\"), under compliance with Personal Data Protection Law 25.326 and related regulations.",
            "Registration, access, or use of the System implies the free, express, and informed consent of the User for the collection and processing of data under the terms stated herein."
          ]
        },
        {
          title: "2. NATURE OF DATA COLLECTED",
          paragraphs: [
            "The System stores two categories of information: Registration and Authentication Data (name, email, session tokens) and Operational Technical-Environmental Data uploaded by Users in the course of their professional activities.",
            "The User represents and warrants having all necessary permissions regarding environmental field data uploaded."
          ]
        },
        {
          title: "3. CLOUD STORAGE INFRASTRUCTURE AND MULTI-TENANCY",
          paragraphs: [
            "Databases are hosted in Google Cloud (Firebase Auth, Firestore, Cloud Storage). GeoSint enforces strict multi-tenant isolation. Operational data is encrypted and strictly confidential. GeoSint does not sell, lease, or transfer User data under any circumstances."
          ]
        },
        {
          title: "4. DATA RETENTION AND PURGE POLICY",
          paragraphs: [
            "Upon trial expiration or subscription suspension, Users have a 14-day grace period to export a full operational backup (.zip). After day 21 without renewal, data is permanently and irreversibly purged from operational servers."
          ]
        },
        {
          title: "5. EXERCISE OF ARCO RIGHTS",
          paragraphs: [
            "Users may exercise rights of access, rectification, update, or deletion by sending a formal request to: contacto@geosint.com.ar."
          ]
        }
      ]
    },
    termsModal: {
      title: "TERMS AND CONDITIONS OF SERVICE – GEOSINT",
      sections: [
        {
          title: "1. ACCEPTANCE OF TERMS",
          paragraphs: [
            "These Terms and Conditions govern access and usage of the DIM Data Bus SaaS platform, operated under the GeoSint brand. Using the System constitutes full acceptance of these Terms."
          ]
        },
        {
          title: "2. PURPOSE OF SERVICE",
          paragraphs: [
            "GeoSint provides a cloud software platform designed for environmental and geospatial data collection, management, and analysis. The System operates as technical software infrastructure and does not constitute environmental consulting or legal advisory services by GeoSint."
          ]
        },
        {
          title: "3. LICENSES, TRIAL PERIOD AND QUOTAS",
          paragraphs: [
            "Access is subscription-based. A 7-day free trial may be provided subject to storage and transfer quotas as stated in the interface."
          ]
        },
        {
          title: "4. DATA RETENTION, SUSPENSION AND PURGE",
          paragraphs: [
            "Users have a 14-day grace period after subscription lapse to export their data. Thereafter, automated irreversible purge occurs."
          ]
        },
        {
          title: "5. DATA OWNERSHIP AND LIABILITY LIMITATION",
          paragraphs: [
            "All technical environmental data uploaded remains the exclusive property of the User. The User is solely responsible for data accuracy and regulatory compliance."
          ]
        },
        {
          title: "6. SERVICE AVAILABILITY (SLA)",
          paragraphs: [
            "The System is provided 'as is' and 'as available', utilizing enterprise Google Cloud infrastructure."
          ]
        },
        {
          title: "7. INTELLECTUAL PROPERTY",
          paragraphs: [
            "All source code, design, algorithms, logos, and platform architecture are the exclusive property of GeoSint developers."
          ]
        },
        {
          title: "8. GOVERNING LAW AND JURISDICTION",
          paragraphs: [
            "These Terms are governed by the laws of the Argentine Republic, submitting to the Ordinary Courts of La Plata, Province of Buenos Aires."
          ]
        }
      ]
    }
  }
};
