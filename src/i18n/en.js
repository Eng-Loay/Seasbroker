const projectImages = [
  '/assets/project-1.png',
  '/assets/project-2.png',
  '/assets/project-3.png',
  '/assets/project-4.png',
  '/assets/project-5.png',
  '/assets/project-6.png',
  '/assets/project-7.png',
  '/assets/project-8.png',
  '/assets/project-9.png',
  '/assets/project-10.png',
  '/assets/project-11.png',
  '/assets/project-12.png',
]

const clientLogos = [
  { name: 'Azzawiya Oil Refining Company', logo: '/assets/client-azawiya.png' },
  { name: 'ASPPC', logo: '/assets/client-asppc.png' },
  { name: 'Damietta Port Authority', logo: '/assets/client-damietta.png' },
  { name: 'Zueitina', logo: '/assets/client-zueitina.png' },
  { name: 'APRC', logo: '/assets/client-aprc.png' },
  { name: 'Alexandria Petroleum Co.', logo: '/assets/client-alex-petroleum.png' },
  { name: 'OSOCO', logo: '/assets/client-osoco.png' },
  { name: 'Misr Petroleum Co.', logo: '/assets/client-misr.png' },
  { name: 'NASS', logo: '/assets/client-nass.png' },
  { name: 'Hattan', logo: '/assets/client-hattan.png' },
]

export default {
  meta: {
    title: 'SEAS Marine Projects',
    logoAlt: 'SEAS Marine Projects',
  },
  common: {
    lightMode: 'Switch to light mode',
    darkMode: 'Switch to dark mode',
    switchToArabic: 'العربية',
    switchToEnglish: 'English',
    projectPage: 'Show projects page',
  },
  nav: {
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    projects: 'Projects',
    contact: 'Contact Us',
    ariaLabel: 'Main navigation',
  },
  hero: {
    eyebrow: 'Engineering Excellence for',
    titleLine1: 'Marine, Offshore &',
    titleLine2: 'Industrial Infrastructure',
    description:
      'We provide integrated engineering consultancy, technical advisory, project management, inspection, design, and digital engineering solutions for marine, offshore, oil & gas, ports, shipyards, and industrial facilities.',
    exploreServices: 'Explore Our Services',
    ourProjects: 'Our Projects',
    stats: [
      { icon: 'experience', value: '18+', label: 'Years of Experience' },
      { icon: 'projects', value: '100+', label: 'Projects Delivered' },
      { icon: 'global', value: 'Global', label: 'Engineering Standards' },
      { icon: 'integrated', value: 'Integrated', label: 'Engineering Solutions' },
    ],
  },
  about: {
    label: 'Who We Are',
    title: 'Engineering Beyond Consultancy',
    imageAlt: 'Offshore vessel at sea',
    paragraphs: [
      'We are an independent engineering consultancy delivering high-value technical solutions for marine, offshore, industrial, and infrastructure projects.',
      'Our services extend beyond conventional engineering design to include technical investigations, feasibility studies, project management consultancy, condition assessment, rehabilitation strategies, offshore engineering, digital engineering, and AI-powered maritime solutions.',
      'By combining practical field experience with advanced engineering analysis, we help clients improve safety, reliability, operational efficiency, and long-term asset performance.',
    ],
    highlights: [
      { icon: 'marineAbout', title: 'Marine', subtitle: 'Engineeirng' },
      { icon: 'offshoreAbout', title: 'Offshore', subtitle: 'Structures' },
      { icon: 'industrial', title: 'Industrial', subtitle: 'Consultancy' },
      { icon: 'pmAbout', title: 'Project', subtitle: 'Management' },
    ],
  },
  services: {
    title: 'Our Services',
    items: [
      {
        icon: 'marine',
        title: ['Marine', 'Engineering'],
        description:
          'Vessel assessment, stability, inclining experiments, floating structures, investigations & salvage.',
      },
      {
        icon: 'offshore',
        title: ['Offshore', 'Engineering'],
        description:
          'Offshore platforms, CBM & SPM, mooring systems, boat landings, jackets, PLEM & Subsea structures.',
      },
      {
        icon: 'inspection',
        title: ['Inspection &', 'Asset Integrity'],
        description:
          'Structural & underwater inspection, NDT, thickness measurement, corrosion assessment, integrity evaluation.',
      },
      {
        icon: 'design',
        title: ['Engineering', 'Design'],
        description:
          'Structural & marine structures, rehabilitation design, repair engineering, design, fabrication & temporary works.',
      },
      {
        icon: 'feasibility',
        title: ['Technical &', 'Feasibility'],
        description:
          'Feasibility studies, technical due diligence, market assessment, financial evaluation, investment support.',
      },
      {
        icon: 'management',
        title: ['Project', 'Management'],
        description:
          'Engineering review, tender, BOQ, bid evaluation, construction supervision, QA/QC, HSE.',
      },
      {
        icon: 'infrastructure',
        title: ['Marine', 'Infrastructure'],
        description:
          'Ports, jetties, quays, berths, intake structures, floating facilities & coastal infrastructure.',
      },
      {
        icon: 'oilgas',
        title: ['Oil & Gas', 'Engineering'],
        description:
          'Refineries, offshore terminals, fire water systems, pipelines, loading facilities, LPG systems, industrial utilities.',
      },
      {
        icon: 'digital',
        title: ['Digital & AI', 'Engineering'],
        description:
          'Digital twin, CFD, simulation, predictive maintenance, AI risk assessment, smart ports & analytics.',
      },
      {
        icon: 'training',
        title: ['Training &', 'Development'],
        description:
          'Technical training, curriculum development, workshops, technical audits, competency development.',
      },
    ],
  },
  projects: {
    title: 'Featured Projects',
    pagesAriaLabel: 'Project pages',
    items: [
      {
        title: 'Full Condition Survey – Six Petroleum Tankers',
        client: 'Misr Petroleum Co.',
        description:
          'Conducted a comprehensive condition survey for six single-hull petroleum tankers (one at Alexandria Petroleum Dock and five at Suez’s Zeitiyat Terminal) to assess their compliance with IMO standards and suitability.',
        image: projectImages[0],
      },
      {
        title: 'Technical & Feasibility Study',
        client: 'Alexandria Specialized Petroleum Products Company (ASPPC)',
        description:
          'Delivered a comprehensive technical, marketing, and financial evaluation of the SOPREMA insulation products factory, commissioned by ASPPC, to determine the feasibility of restarting operations and to support strategic investment decisions.',
        image: projectImages[1],
      },
      {
        title: 'Establishment of Ship Recycling Facility',
        client: 'Damietta Port',
        description:
          'Appointed to provide the engineering, environmental, and feasibility studies for the first ship recycling facility in Egypt, located at Damietta Port near the western barrier, strategically positioned by the Suez Canal to serve the MENA region.',
        image: projectImages[2],
      },
      {
        title: 'Engineering Evaluation & Upgrade Study – CBM Berth No. 2',
        client: 'Azzawiya Oil Refinery Company',
        description:
          'Commissioned to lead the engineering evaluation, survey, and upgrade study for the Conventional Buoy Mooring (CBM) system at Azzawiya Refinery. The project aimed to enhance the offshore terminal’s capacity to 45,000 DWT tankers, ensuring compliance with standards.',
        image: projectImages[3],
      },
      {
        title: 'Digital Twin, Pilot Tracking & Risk Management Solutions',
        client: 'HATTAN Group',
        description:
          'Appointed to develop and deliver a portfolio of AI-driven maritime digital services for HATTAN Group, focusing on digital twin systems, pilot tracking solutions, and AI-based safety & risk management platforms.',
        image: projectImages[4],
      },
      {
        title: 'Inspection, Repair & Coating of Pile Bents and Pipe Supports',
        client: 'Zueitina Oil Company (ZOC)',
        description:
          'Commissioned to provide technical consultancy and supervision for tender PN-1486, covering the inspection, rehabilitation, and protective coating of marine pile bents and pipe supports at the LPG loading trestle of Zueitina Terminal.',
        image: projectImages[5],
      },
      {
        title: 'Project Management Consultancy – CBM Berth No. 2',
        client: 'Azzawiya Oil Refinery Company',
        description:
          'Appointed to provide Project Management Consultancy (PMC) services for the upgrade of Conventional Buoy Mooring (CBM) Berth No. 2, enhancing capacity to handle 45,000 DWT tankers.',
        image: projectImages[6],
      },
      {
        title: 'Curriculum Development & Institutional Capacity Review',
        client: 'National Academy for Science and Skills (NASS) / TEVETA',
        description:
          'Appointed to deliver a national-level consultancy assignment to support the Government of Malawi, through the Technical, Entrepreneurial and Vocational Education and Training Authority (TEVETA).',
        image: projectImages[7],
      },
      {
        title: 'Weld Inspection & Quality Assurance – Barawy Yacht New Build',
        client: 'Rashed Synchrolift',
        description:
          'Appointed to conduct an independent comprehensive inspection and quality assessment of structural welding works during the construction of Barawy Yacht at Rashed Synchrolift. The assignment aimed to verify welding integrity and workmanship quality.',
        image: projectImages[8],
      },
      {
        title: 'Boat Landing Replacement Project – Platform C',
        client: 'OSOCO Oil Company',
        description:
          'Appointed to lead the technical planning, engineering oversight, and execution methodology for the complete demolition, fabrication, transportation, and offshore installation of a new boat landing system at Platform C – East Zeit Field.',
        image: projectImages[9],
      },
      {
        title: 'Rehabilitation & Upgrade of Firefighting Water Intake Station',
        client: 'Alexandria Petroleum Company',
        description:
          'Appointed to develop the technical rehabilitation and upgrade solution for the firefighting and utility water intake station at Alexandria Petroleum Company, following comprehensive underwater inspection findings. The assignment aimed to restore structural integrity.',
        image: projectImages[10],
      },
      {
        title: 'Underwater Demolition & Removal of Structural Interferences',
        client: 'Alexandria Petroleum Refining Company (APRC)',
        description:
          'Appointed to develop and lead the technical execution methodology for the complete and final removal of all structural and mechanical interferences located along the industrial wastewater transfer channel (El-Hammam Canal).',
        image: projectImages[11],
      },
    ],
  },
  whyChooseUs: {
    title: 'Why Choose Us',
    items: [
      'Led by academic professors with extensive technical and industrial experience.',
      'Proven engineering experience in complex marine & offshore projects.',
      'Compliance with international standards and best practices.',
      'Integrated solutions from studies to supervision under one team.',
      'Innovative approach using advanced tools: CFD, Digital Twin, AI, Simulation.',
      'Commitment to safety, quality, and project success.',
    ],
  },
  clients: {
    title: 'Our Clients',
    items: clientLogos,
  },
  contact: {
    headquarters: 'Headquarters',
    location: 'Alexandria, Egypt',
    email: 'E-mail',
    phone: 'Phone',
    officeHours: 'Office Hours',
    hoursLine1: 'Sunday to Thursday',
    hoursLine2: '9:00 am to 5:00 pm',
    imageAlt: 'Offshore vessel at sunset',
  },
}
