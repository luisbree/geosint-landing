export const en = {
  navbar: {
    home: "Home",
    howItWorks: "DIM Data Bus",
    successStories: "Success Stories",
    enter: "Log In",
  },
  hero: {
    tag: "Integrated Technology and Environment",
    title: "GeoSint: Land Intelligence Solutions",
    subtitle: "Platform for Management and Analysis of Geospatial Data and Environmental Regulations.",
    desc: "Self-Managed Environmental Analysis for Consulting Firms. Transform geospatial information and time series into decisions with precision, efficiency, and regulatory compliance.",
    videoFallback: "Your browser does not support HTML5 video playback.",
  },
  howItWorks: {
    tag: "Our Backbone",
    title: "DIM Data Bus: ",
    titleGradient: "Centralized Environmental Intelligence",
    desc: "We integrate time series and multi-parametric geospatial data, transforming raw data into actionable insights for unprecedented environmental management.",
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
        consultora: "Environmental Engineering Consulting Firm",
        quote: "We accurately quantified the volume of DRO hydrocarbons in 2,650 m³ of soil affected by a spill in just 2 hours. This represents a reduction of more than 90% compared to traditional methods, enabling immediate 'informed decisions' and optimizing remediation management and regulatory compliance, such as National Hazardous Waste Law No. 24.051.",
        logoText: "IE"
      }
    ]
  },
  contactForm: {
    tag: "Get in Touch",
    title: "Transform Your Data into Informed Decisions",
    desc: "Gain the autonomy in advanced analysis that your consulting firm needs to optimize projects and mitigate environmental risks.",
    trialHeader: "What is included in the Free Trial?",
    trialItems: [
      "Seven-day license with no functionality restrictions.",
      "UNLIMITED number of users per company.",
      "All standardized monitoring forms: Surface Water, Groundwater, Air Quality, Soils.",
      "2 Campaigns; 3 Monitoring Stations; 6 Reports (2 per Station); 24 Sheets; 60 Photos"
    ],
    successTitle: "Request Sent Successfully!",
    successDesc: "Thank you for your interest in GeoSint. We will contact you shortly.",
    successButton: "Send another message",
    labelName: "Full Name",
    labelCompany: "Company / Consulting Firm",
    labelEmail: "Email Address",
    labelMessage: "Message / Project Info",
    placeholderName: "e.g., Martin Garcia, Eng.",
    placeholderCompany: "e.g., Environmental Services Inc.",
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
    legalFramework: "Regulatory & Legal Framework",
    keyFeatures: "Key Features",
    impactMetric: "Impact Metric:",
    mockUiHeader: "Self-Managed Interface Simulation",
    mockUiDesc: "Consulting firms upload their data autonomously, and the system generates the simulation instantly.",
    modalQuestion: "Interested in implementing this module?",
    close: "Close",
    cards: [
      {
        id: "geomorfologico",
        title: "Predictive Geomorphological Modeling Module",
        shortDesc: "Simulate erosion and sedimentation scenarios using bathymetric and grain-size data. Quantify impacts and back compliance decisions under Law No. 25.675 (Environmental Impact Assessments).",
        fullDesc: "This self-managed module processes bathymetric profiles and sediment grain size data to model river or coastal dynamics. It predicts sedimentation and erosion rates under different flow rates and operational conditions, ensuring robust compliance with the General Environmental Law No. 25.675.",
        law: "National Law No. 25.675 (General Environmental Law - Art. 11: Environmental Impact Assessment)",
        benefits: [
          "Erosion simulation at 5, 10, and 25 years",
          "Direct integration of bathymetric point clouds (.las, .csv)",
          "Exact quantification of sedimentation volume",
          "Automatic generation of impact reports ready for submission to authorities"
        ],
        metrics: "35% reduction in river modeling times",
        mockUI: {
          title: "GEOMORPHOLOGICAL MODELER",
          file: "BATHYMETRY_PARANA_RIVER.CSV",
          estErosion: "Estimated Erosion",
          sedimentation: "Sedimentation",
          profileView: "2D Profile View",
          compliance: "Compliance: Law 25.675 - Risk Level: LOW"
        }
      },
      {
        id: "plumas",
        title: "3D Contaminant Plume Viewer",
        shortDesc: "Visualize contaminant dispersion in surface water and groundwater. Obtain predictive visibility for risk mitigation and environmental management optimization.",
        fullDesc: "An advanced in-browser 3D rendering tool that projects the solute and hydrocarbon dispersion plume in aquifers or surface water bodies. Allows input of dispersion coefficients, conductivity, and decay rates to estimate the temporal evolution of the contaminant.",
        law: "National Law No. 25.688 (Environmental Management Regime of Waters)",
        benefits: [
          "Interactive 3D visualization with concentration isolines",
          "Simulation of pumping and remediation scenarios",
          "Prediction of arrival at nearby supply wells",
          "Optimization of monitoring front placement"
        ],
        metrics: "Optimizes risk management in hydraulic projects",
        mockUI: {
          title: "3D PLUME VIEWER",
          file: "DISPERSION_MODEL_V1",
          solute: "Solute: Nitrates",
          exceedsLimit: "Exceeds Limit",
          aquifer: "Aquifer: Pampeano",
          monitoring: "Monitoring: 5 Wells - Disp. Coeff: 0.15 m²/d"
        }
      },
      {
        id: "acuiferos",
        title: "Aquifer Vulnerability Assessment Module",
        shortDesc: "Map and simulate filtration risks in 3D, integrating piezometry and hydraulic conductivity. Reduce environmental liabilities and strengthen water responsibility under Law No. 25.688.",
        fullDesc: "Assess the contamination susceptibility of free and semi-confined aquifers using parameterized international methodologies (GOD/DRASTIC) and customized 3D simulations. Integrates lithology, net recharge, and water table depth data to generate interactive vulnerability maps.",
        law: "National Law No. 25.688 (Environmental Management Regime of Waters - Resource Protection)",
        benefits: [
          "Automatic vulnerability classification (Low, Medium, High)",
          "Recharge and solute transport simulations in the unsaturated zone",
          "Direct reduction of environmental liabilities in infrastructure projects",
          "Consolidated reports with legal validity"
        ],
        metrics: "Reduces environmental liabilities and prevents leaks",
        mockUI: {
          title: "VULNERABILITY ASSESSMENT",
          file: "METHOD: DRASTIC",
          napaDepth: "Water Table Depth",
          recharge: "Recharge",
          lithology: "Lithology",
          riskZone: "Risk Zoning:",
          moderate: "MODERATE",
          drasticIndex: "DRASTIC Index:"
        }
      },
      {
        id: "as-a-service",
        title: "Predictive Analysis As-a-Service",
        shortDesc: "Activate pre-configured reports and models to estimate risks and plume evolution. Optimize resources and make informed decisions with total autonomy.",
        fullDesc: "A cloud engine that processes your data under pre-configured templates to generate executive simulation reports instantly. Designed for environmental analysts who require rapid results backed by solid science without local computing infrastructure.",
        law: "National and International Water and Soil Quality Regulations",
        benefits: [
          "Instant access without complex software licenses",
          "Scientifically calibrated and validated algorithms",
          "Customizable PDF reports featuring your consulting firm's brand",
          "Up to 60% savings in license and engineering costs"
        ],
        metrics: "Saves operational costs and speeds up deliveries",
        mockUI: {
          title: "PREDICTIVE AS-A-SERVICE",
          file: "REPORT GENERATOR",
          monteCarlo: "Monte Carlo Simulation: Completed (10k iterations)",
          pdfReport: "PDF Impact Report: Generated",
          downloadCta: "Download Report (.pdf)"
        }
      }
    ],
    features: {
      liabilities: "Reduces environmental liabilities",
      risks: "Optimizes risk management",
      compliance: "Regulatory compliance",
      costs: "Saves operational costs",
      visibility: "Comprehensive predictive visibility"
    }
  },
  footer: {
    brandDesc: "Self-managed environmental analysis and data management platform for consulting firms. Technical and compliance decisions with full autonomy and precision.",
    navigationTitle: "Navigation",
    legalTitle: "Legal Framework",
    laws: [
      "National Law No. 25.675 General Environmental Law",
      "National Law No. 25.688 Environmental Management Regime of Waters",
      "Provincial Law No. 11.723 Integral Environmental Law",
      "Provincial Law No. 12.257 Water Code",
      "Decree No. 1741/96, Resolution No. 153/06, Resolution No. 178/06"
    ],
    privacyLink: "Privacy Policy",
    termsLink: "Terms of Service",
    copyright: "GeoSint © {year}. All rights reserved.",
    slogan: "Decisions Based on Environmental Intelligence.",
    privacyModal: {
      title: "PRIVACY AND DATA PROCESSING POLICY – GEOSINT",
      sections: [
        {
          title: "1. LEGAL FRAMEWORK AND INFORMED CONSENT",
          paragraphs: [
            "This document establishes the information processing and data protection policies of the GeoSint platform (hereinafter, \"the System\"), in strict compliance with Personal Data Protection Law No. 25.326, its Regulatory Decree No. 1558/2001, and regulations issued by the Public Information Access Agency of the Argentine Republic.",
            "Registration, access, or use of the System implies the free, express, and informed consent of the User for the collection, storage, and processing of their data in accordance with the terms stipulated herein."
          ]
        },
        {
          title: "2. NATURE OF THE COLLECTED DATA",
          paragraphs: [
            "The System stores two categories of information:",
            "• Registration and Authentication Data: First name, last name, email address, and session identifiers.",
            "• Third-Party Operational Data: Technical-environmental information uploaded by the User within the framework of their professional activity (geographical coordinates, field reports, analyte measurements, photographic material). The User declares that they possess the relevant rights or authorizations for the uploaded environmental information, releasing GeoSint from any liability arising from its source."
          ]
        },
        {
          title: "3. STORAGE INFRASTRUCTURE AND MULTITENANCY",
          paragraphs: [
            "The database is hosted on cloud servers provided by Google Cloud (Firebase Auth, Firestore, Cloud Storage).",
            "GeoSint guarantees a data isolation architecture (Multitenancy). Operational information is strictly confidential and is cryptographically segmented by tenant (Company/Tenant). GeoSint does not exploit, transfer, commercialize, or share under any circumstances the information of its Users with third parties."
          ]
        },
        {
          title: "4. STRICT DATA RETENTION AND PURGE POLICY",
          paragraphs: [
            "The processing of operational data is subject to the status of the User's or Company's subscription:",
            "• Grace Period: Upon the end of the trial period (Trial) or suspension of the service, the User will have an unextendable period of fourteen (14) calendar days (up to day 21 from the start of the trial period or cutoff date) to export a full backup of their operational data. During this period, operational access to the System will remain blocked.",
            "• Definite Purge: After the period stipulated in the previous point has elapsed without reactivation of the subscription, the System will execute the automatic, definite, and unrecoverable deletion of operational data (stations, reports, sheets, and photos). GeoSint will not be liable for the loss of information that has not been exported by the User in a timely manner.",
            "In order to facilitate the eventual reactivation of the account, GeoSint will retain only the identification profile of the User and the parent Company, after data pseudonymization where applicable."
          ]
        },
        {
          title: "5. EXERCISE OF ARCO RIGHTS AND CONTROL BODY",
          paragraphs: [
            "The owner of personal data has the power to exercise the right of access to them free of charge at intervals of not less than six months, unless a legitimate interest is proven (Art. 14, paragraph 3 of Law No. 25.326).",
            "To exercise the rights of access, rectification, update, or deletion, the owner must send a formal request to the email address: contacto@geosint.com.ar.",
            "It is expressly stated that the PUBLIC INFORMATION ACCESS AGENCY, the Control Body of Law No. 25.326, has the authority to handle complaints and claims filed in connection with non-compliance with personal data protection regulations."
          ]
        }
      ]
    },
    termsModal: {
      title: "TERMS AND CONDITIONS OF USE – GEOSINT",
      sections: [
        {
          title: "1. ACCEPTANCE OF TERMS",
          paragraphs: [
            "This document establishes the Terms and Conditions (hereinafter, the \"Terms\") governing access and use of the Dim Data Bus software as a service (SaaS) platform, operated under the GeoSint brand (hereinafter, \"the System\"). Access, registration, or use of the System by any natural or legal person (hereinafter, the \"User\" or \"Company\") implies full, express, and unqualified acceptance of these Terms. If you do not agree with these Terms, you must refrain from using the System."
          ]
        },
        {
          title: "2. OBJECT OF THE SERVICE",
          paragraphs: [
            "GeoSint provides a cloud platform designed for loading, managing, structuring, and analyzing geospatial and environmental data in real time. The System operates as a tool for technical facilitation and infrastructure, under no circumstances constituting an environmental, geological, or engineering consulting service on the part of GeoSint."
          ]
        },
        {
          title: "3. LICENSES, TRIAL PERIOD, AND QUOTAS",
          paragraphs: [
            "Access to the System is governed by a subscription model.",
            "• 3.1. Trial Period: GeoSint may grant a free trial period (\"Trial\") of seven (7) calendar days. During this period, use of the System will be subject to strict storage and data transfer quotas and limits (limits on stations, reports, sheets, and photographic material), which are informed in the System's interface. GeoSint reserves the right to modify these limits or cancel the trial period at any time and without prior notice."
          ]
        },
        {
          title: "4. DATA RETENTION, SUSPENSION, AND PURGE POLICY",
          paragraphs: [
            "• 4.1. Grace Period: Upon completion of the trial period or failure to pay the subscription, the User's account will enter a Suspension state. From that moment on, the User will have an unextendable period of fourteen (14) calendar days to export their operational data using the backup tools (.zip) provided in the System. During this period, loading and analysis functionalities will remain blocked.",
            "• 4.2. Definite Purge: After twenty-one (21) days from the start of the trial period or from the expiration of the subscription without renewal, GeoSint will execute the automatic, definite, and unrecoverable deletion of all the User's operational information (field databases, reports, annexes, and photographs). The User releases GeoSint from any liability for loss of data resulting from the application of this clause."
          ]
        },
        {
          title: "5. DATA OWNERSHIP AND LIMITATION OF LIABILITY",
          paragraphs: [
            "• 5.1. User Data: All technical, environmental, and spatial data uploaded to the System is the exclusive property of the Company/User. GeoSint does not acquire any ownership rights over such data.",
            "• 5.2. Accuracy and Use of Information: The User is solely and exclusively responsible for the accuracy, truthfulness, quality, and legality of the data loaded into the System. GeoSint does not audit, validate, or corroborate technical or environmental information.",
            "• 5.3. Exclusion of Liability: GeoSint disclaims all liability for direct, indirect, lost profit, loss of opportunity, or any other damage that the User or third parties (including State control agencies) might suffer as a result of using the information processed in the System, making decisions based on generated reports, or incompetence in data entry by the User's technicians."
          ]
        },
        {
          title: "6. SERVICE AVAILABILITY (SLA) AND FORCE MAJEURE",
          paragraphs: [
            "The System is provided \"as is\" and \"as available\". GeoSint uses third-party infrastructure (Google Cloud Platform / Firebase) and does not guarantee that the service will be uninterrupted or free of operational errors. GeoSint will not be liable for system downtime, temporary loss of access, or delays in data transmission caused by internet connectivity failures, scheduled maintenance, or force majeure events."
          ]
        },
        {
          title: "7. INTELLECTUAL PROPERTY",
          paragraphs: [
            "The source code, design, underlying databases, routing algorithms, trademarks, logos, and all material composing the architecture of the GeoSint System are the exclusive property of its developers and are protected by the intellectual property laws of the Argentine Republic and international treaties. Any total or partial reproduction, reverse engineering, decompilation, or modification is strictly prohibited."
          ]
        },
        {
          title: "8. JURISDICTION AND APPLICABLE LAW",
          paragraphs: [
            "These Terms are governed by the laws of the Argentine Republic. For any dispute arising from their interpretation or execution, the parties submit to the jurisdiction of the Ordinary Courts of the city of La Plata, Province of Buenos Aires, expressly waiving any other jurisdiction that might correspond."
          ]
        }
      ]
    }
  }
};
