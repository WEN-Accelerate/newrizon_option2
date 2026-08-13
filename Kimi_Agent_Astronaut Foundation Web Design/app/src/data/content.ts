export type ImageStatus = 'AVAILABLE' | 'REPLACE' | 'TO SOURCE' | 'TO COMMISSION' | 'PERMISSION REQUIRED' | 'BLOCKING';

export interface ImageSlot {
  id: string;
  spec: string;
  alt: string;
  status: ImageStatus;
  src?: string;
  note?: string;
}

export interface ProgrammeVertical {
  id: string;
  index: string;
  name: string;
  subtitle: string;
  body: string;
  intro: string;
  initiatives: { title: string; copy: string }[];
  image: ImageSlot;
}

export interface StatTarget {
  value: number;
  suffix: string;
  label: string;
  copy: string;
}

export const assets = {
  heroEarth: '/images/hero-earth-night.png',
  orbitalSunrise: '/images/orbital-sunrise.png',
  starfield: '/images/starfield-nebula.png',
  earthDay: '/images/earth-day-impact.png',
  classroom: '/images/space-classroom.png',
  astronaut: '/images/astronaut-floating.png',
  spacecraft: '/images/spacecraft-capsule.png',
};

/**
 * Real Earthizen Foundation photography, migrated from the newrizon repository
 * and the approved design PDFs. Founder: Group Captain Shubhanshu Shukla.
 */
export const photos = {
  founderPortrait: '/images/photos/founder-portrait.jpg',
  schoolVisit: '/images/photos/school-visit.jpg',
  studentsGroup: '/images/photos/students-group.jpg',
  eventUnveiling: '/images/photos/event-unveiling.jpg',
  communityWalk: '/images/photos/community-walk.jpg',
  leadersMeeting: '/images/photos/leaders-meeting.jpg',
  pressInteraction: '/images/photos/press-interaction.jpg',
  podiumAddress: '/images/photos/podium-address.jpg',
  orbitEarth: '/images/photos/orbit-earth.jpg',
  classroomChildren: '/images/photos/classroom-children.jpg',
  studentInnovation: '/images/photos/student-innovation.jpg',
  welcomeCeremony: '/images/photos/welcome-ceremony.jpg',
  sharingSpacePhotos: '/images/photos/sharing-space-photos.jpg',
  felicitation: '/images/photos/felicitation.jpg',
  earthNight: '/images/photos/earth-night.jpg',
  earthNightCityLights: '/images/photos/earth-night-city-lights.jpg',
  orbitalSunriseArrays: '/images/photos/orbital-sunrise-arrays.jpg',
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Programmes', to: '/programmes' },
  { label: 'Impact', to: '/impact' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Get Involved', to: '/get-involved' },
];

export const visionMission = {
  vision:
    'A world where every individual — regardless of nationality, religion or origin — identifies as an Earthizen: a citizen of Earth who uses technology, empathy and purpose to build a borderless, thriving civilisation, on Earth and beyond.',
  mission:
    'To cultivate a generation of Earthizens through transformative education that connects classrooms to communities, harnesses technology for human progress, builds cross-cultural understanding, and instils a shared planetary identity rooted in one simple truth: from space, there are no borders.',
};

export const coreValues = [
  {
    name: 'One Earth',
    copy: 'Planetary identity over national identity. We are citizens of Earth first, before we are citizens of any nation.',
  },
  {
    name: 'Curiosity',
    copy: 'An unwavering commitment to scientific temperament, lifelong learning, and the courage to question.',
  },
  {
    name: 'Equity',
    copy: 'Universal access to transformative education, regardless of geography, income or social background.',
  },
  {
    name: 'Empathy',
    copy: 'Deep cross-cultural understanding and human respect as the bedrock of a borderless world.',
  },
  {
    name: 'Impact',
    copy: 'Learning must change something in the real world. Education divorced from society is incomplete.',
  },
];

export const programmeVerticals: ProgrammeVertical[] = [
  {
    id: 'orbit',
    index: '01',
    name: 'ORBIT',
    subtitle: 'Global Citizenship — Education & Cultural Exchange',
    body: 'Connects students across countries for joint academic work, collaborative storytelling and global summits.',
    intro:
      'Formed by consolidating the original ORBIT and ATLAS verticals, ORBIT connects students across countries for joint academic work, collaborative storytelling and global summits — building the empathy and perspective of true planetary citizens.',
    initiatives: [
      {
        title: 'Borderless Classroom Network',
        copy: 'Virtual and in-person school exchange connecting schools across 30 countries for joint academic projects.',
      },
      {
        title: 'Earthizen Curriculum',
        copy: 'A structured planetary-citizenship curriculum for ages 8–18, mapped to existing school timetables rather than added on top of them.',
      },
      {
        title: 'Global Assembly for Schools',
        copy: 'A UN-style inter-school summit where student delegations debate real planetary questions and publish a joint resolution.',
      },
      {
        title: 'Stories Without Borders',
        copy: 'Multi-country collaborative storytelling — students in different nations co-author a single narrative, in their own languages.',
      },
    ],
    image: {
      id: 'IMG-P-02',
      spec: 'Classroom exchange in progress: partner school on a projected screen, local students turned toward it, someone mid-sentence.',
      alt: 'Group Captain Shubhanshu Shukla with students at a school outreach visit',
      status: 'AVAILABLE',
      src: photos.schoolVisit,
    },
  },
  {
    id: 'nexus',
    index: '02',
    name: 'NEXUS',
    subtitle: 'Technology & Innovation — Making every child technologically fluent',
    body: 'AI, coding and maker skills, aimed at real problems in real communities.',
    intro:
      'NEXUS equips underserved youth with AI, coding and maker skills — not as abstract learning, but as tools to solve real problems in their own communities. Every bootcamp, hackathon and makerspace is anchored in impact.',
    initiatives: [
      {
        title: 'Code the Future',
        copy: 'AI, coding and data-literacy bootcamps for underserved youth — six-week intensive programmes with certified learning pathways and mentorship.',
      },
      {
        title: 'Impact Portfolio',
        copy: 'Students replace traditional term-end exams with a Change Portfolio: a documented project showing how one learned skill changed something real in their community.',
      },
      {
        title: 'Maker Bharat',
        copy: 'School makerspaces stocked for low-cost prototyping — 3D printing, sensors and microcontrollers — with a build brief drawn from a local problem.',
      },
    ],
    image: {
      id: 'IMG-P-03',
      spec: 'School makerspace mid-session: 3D printer running, components on the bench, students working on the same build.',
      alt: 'Group Captain Shubhanshu Shukla unveiling a space-careers programme with students and educators',
      status: 'AVAILABLE',
      src: photos.eventUnveiling,
    },
  },
  {
    id: 'bridge',
    index: '03',
    name: 'BRIDGE',
    subtitle: 'Society Connect — Every lesson must change something',
    body: 'Turns classroom learning into documented civic action.',
    intro:
      'BRIDGE is the vertical that refuses to let learning end at the classroom door. Students identify a problem in their own ward, village or district, investigate it with the rigour of a research team, and take a documented case to the people with the power to fix it.',
    initiatives: [
      {
        title: 'Community Lab',
        copy: 'A standing partnership between a school and its immediate neighbourhood: students map local problems, prioritise one per term, and work it end to end with community members.',
      },
      {
        title: 'Civic Watch',
        copy: 'Students audit a public service in their own ward — a budget line, a water supply, a school repair fund — compile the evidence, and present it to the responsible authority.',
      },
      {
        title: 'Service Semester',
        copy: 'One semester in which a class cohort commits to a single community outcome, assessed on the change delivered rather than on a written paper.',
      },
    ],
    image: {
      id: 'IMG-P-04',
      spec: 'Students out in their own neighbourhood doing fieldwork — notebooks or phones in hand, street-level, unposed.',
      alt: 'Group Captain Shubhanshu Shukla walking through a village with community members',
      status: 'AVAILABLE',
      src: photos.communityWalk,
    },
  },
  {
    id: 'cosmos',
    index: '04',
    name: 'COSMOS',
    subtitle: 'Space & Future Sciences — The Overview Effect, brought back to Earth',
    body: 'Satellite imagery, astronomy and space design as a lens for planetary thinking.',
    intro:
      'COSMOS uses the wonder of space as a lens for planetary thinking. Real satellite imagery, ISRO connections and speculative design studios help students experience the Overview Effect — and bring it back down to Earth.',
    initiatives: [
      {
        title: 'No Borders from Space',
        copy: 'An astronomy and earth-observation programme using real satellite imagery to help students see their planet as astronauts do — without borders, without division.',
      },
      {
        title: 'Future Earth Explorers Clubs',
        copy: 'After-school space science and astrobiology clubs in 500 schools — student-led, with curriculum, competitions, and connections to space research institutions.',
      },
      {
        title: 'Space Experience & Innovation Centres',
        copy: 'Physical centres — the first in Ladakh — where students work on collaborative innovation projects and connect to a global knowledge exchange.',
      },
    ],
    image: {
      id: 'IMG-P-05',
      spec: 'A student at a telescope eyepiece at dusk, or a group reading satellite imagery of their own district on a screen.',
      alt: 'Students and teachers with Group Captain Shubhanshu Shukla in a school courtyard',
      status: 'AVAILABLE',
      src: photos.studentsGroup,
    },
  },
];

export const fiveYearTargets: StatTarget[] = [
  {
    value: 1000,
    suffix: ' Schools',
    label: '1,000 Schools',
    copy: 'Earthizen Curriculum adopted across India by Year 3, and in 10 countries by Year 5.',
  },
  {
    value: 500,
    suffix: 'K Youth Reached',
    label: '500K Youth Reached',
    copy: 'Technology-literacy programmes — coding, AI and makerspaces — delivering skills to half a million young people by Year 5.',
  },
  {
    value: 500,
    suffix: ' Community Labs',
    label: '500 Community Labs',
    copy: 'Classroom-to-society impact projects deployed across India by Year 3, each producing measurable local change.',
  },
  {
    value: 50,
    suffix: '+ Countries',
    label: '50+ Countries',
    copy: 'Represented at the annual One Earth Summit by Year 4.',
  },
  {
    value: 5000,
    suffix: ' Classrooms',
    label: '5,000 Classrooms',
    copy: 'Connected on the Borderless Classroom digital platform by Year 5.',
  },
  {
    value: 3,
    suffix: ' International Chapters',
    label: '3 International Chapters',
    copy: 'Singapore, UAE and the United Kingdom operational in Phase 2 (Years 3–4).',
  },
];

export const roadmap = [
  {
    phase: 'Phase 1 — India Metro Launch',
    horizon: 'Years 1–2',
    milestones: [
      'New Delhi — national HQ and policy advocacy',
      'Mumbai — CSR, media and fundraising',
      'Bengaluru — technology vertical',
      'Pune — education institutions and youth',
    ],
  },
  {
    phase: 'Phase 2 — Pan-India + First International',
    horizon: 'Years 3–4',
    milestones: [
      'Five further Indian cities',
      'Singapore — South-East Asia hub',
      'United Arab Emirates — diaspora and Gulf schools',
      'United Kingdom — European outreach',
    ],
  },
  {
    phase: 'Phase 3 — Global Scale',
    horizon: 'Year 5 onwards',
    milestones: [
      '20+ country chapters activated',
      'Earthizen Digital Platform for global classrooms',
      'UNESCO and UNICEF formal partnerships',
      'One Earth Summit across 50+ nations',
    ],
  },
];

export const impactStories = [
  {
    tag: 'NEXUS · Code the Future',
    headline: '180 students. One app. Three national awards.',
    body: 'AI, coding and data-literacy bootcamps for underserved youth: six-week intensive programmes with certified learning pathways and mentorship.',
    credit: 'Dharavi, Mumbai · 2024',
    image: 'IMG-I-02',
    photo: photos.classroomChildren,
    photoAlt: 'Group Captain Shubhanshu Shukla with young students in their classroom',
  },
  {
    tag: 'BRIDGE · Civic Budget Watch',
    headline: 'A ward meeting, a councillor, and Class 10.',
    body: 'Students in Delhi identified significant underspending in their ward’s school repair budget, compiled a documented case, and presented it at a ward committee meeting.',
    credit: 'Delhi · 2024',
    image: 'IMG-I-03',
    photo: photos.leadersMeeting,
    photoAlt: 'Group Captain Shubhanshu Shukla in conversation with community and institutional leaders',
  },
  {
    tag: 'ORBIT · Global Assembly',
    headline: 'A Youth Space Resolution submitted to UNOOSA.',
    body: 'Sixteen schools from India, Kenya, Brazil and Germany debated “Should space be governed by a world body?” Their co-authored Youth Space Resolution was formally submitted to the United Nations.',
    credit: 'Virtual · 2024 pilot',
    image: 'IMG-I-04',
    photo: photos.studentsGroup,
    photoAlt: 'Students and teachers gathered with Group Captain Shubhanshu Shukla in a school courtyard',
  },
  {
    tag: 'NEXUS · Maker Bharat',
    headline: 'A sensor that alerts parents before the water gets dangerous.',
    body: 'Class 7 students in Rajkot 3D-printed a low-cost water-quality sensor, deployed it in their local borewell, and set it to alert parents by SMS.',
    credit: 'Rajkot, Gujarat · 2024',
    image: 'IMG-I-05',
    photo: photos.studentInnovation,
    photoAlt: 'A school student demonstrating a wearable device prototype at an innovation showcase',
  },
  {
    tag: 'COSMOS · Future Earth Explorers',
    headline: 'A model Mars habitat, judged by ISRO engineers.',
    body: 'An after-school club at KV No. 1, Bengaluru built a model Mars habitat from locally sourced materials, winning a national competition judged by ISRO engineers.',
    credit: 'Bengaluru, Karnataka · 2024',
    image: 'IMG-I-06',
    photo: photos.podiumAddress,
    photoAlt: 'Group Captain Shubhanshu Shukla addressing students at a space-education outreach event',
  },
  {
    tag: 'NEXUS · Tech Society',
    headline: '34% less food waste. One student team. One semester.',
    body: 'A Class 11 team from Hyderabad built an IoT tray-weight system for their school canteen. Piloted for one semester, it cut kitchen waste by 34% and has been adopted permanently by the school.',
    credit: 'Hyderabad, Telangana · 2024',
    image: 'IMG-I-07',
    photo: photos.felicitation,
    photoAlt: 'Group Captain Shubhanshu Shukla being felicitated on stage at an education event',
  },
];

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export const galleryDispatches = [
  {
    tag: 'COSMOS',
    title: 'Outreach — where the wonder of space meets a classroom full of futures',
    date: 'Foundation archive',
    caption:
      'Group Captain Shubhanshu Shukla addresses students at space-education outreach events, speaks with national media about the mission — one planet, one home, infinite futures — and opens career pathways that once felt impossibly far away.',
    status: 'AVAILABLE' as ImageStatus,
    images: [
      {
        id: 'IMG-G-02',
        src: photos.pressInteraction,
        alt: 'Group Captain Shubhanshu Shukla speaking with national media about the mission',
      },
      {
        id: 'IMG-G-03',
        src: photos.podiumAddress,
        alt: 'Addressing students from the podium at a space-education outreach event',
      },
      {
        id: 'IMG-G-04',
        src: photos.eventUnveiling,
        alt: 'Unveiling a space-careers programme with students and educators',
      },
      {
        id: 'IMG-G-05',
        src: photos.sharingSpacePhotos,
        alt: 'Sharing photographs from orbit with reporters after the mission',
      },
      {
        id: 'IMG-G-06',
        src: photos.felicitation,
        alt: 'Felicitated on stage at a space-education event',
      },
    ] as GalleryImage[],
  },
  {
    tag: 'ORBIT',
    title: 'Schools & community — the first nodes of a borderless classroom',
    date: 'Foundation archive',
    caption:
      'School visits and village welcomes: every conversation a small step toward a borderless classroom, and every community a partner. Bridge begins where the classroom meets the street.',
    status: 'AVAILABLE' as ImageStatus,
    images: [
      {
        id: 'IMG-G-07',
        src: photos.schoolVisit,
        alt: 'Students meet Group Captain Shubhanshu Shukla during a school visit',
      },
      {
        id: 'IMG-G-08',
        src: photos.studentsGroup,
        alt: 'Students and teachers with the founder after a school session',
      },
      {
        id: 'IMG-G-09',
        src: photos.communityWalk,
        alt: 'A community welcome during a village visit, with traditional drums',
      },
      {
        id: 'IMG-G-10',
        src: photos.welcomeCeremony,
        alt: 'A traditional welcome from community members during a village visit',
      },
      {
        id: 'IMG-G-11',
        src: photos.classroomChildren,
        alt: 'With young students in their classroom during a school outreach visit',
      },
    ] as GalleryImage[],
  },
  {
    tag: 'COSMOS',
    title: 'The Overview — the view that started everything',
    date: 'Foundation archive',
    caption:
      'Earth from orbit, photographed during the founder’s mission. From up here, there are no borders — only one beautiful, fragile Earth.',
    status: 'AVAILABLE' as ImageStatus,
    images: [
      {
        id: 'IMG-G-12',
        src: photos.orbitEarth,
        alt: 'Earth’s limb from orbit beside the station’s solar arrays',
      },
      {
        id: 'IMG-G-13',
        src: photos.earthNight,
        alt: 'City lights across Earth at night, seen from orbit',
      },
      {
        id: 'IMG-G-14',
        src: photos.earthNightCityLights,
        alt: 'Networks of night-time city lights tracing the planet below',
      },
      {
        id: 'IMG-G-15',
        src: photos.orbitalSunriseArrays,
        alt: 'An orbital sunrise breaking over Earth beyond the station’s solar arrays',
      },
    ] as GalleryImage[],
  },
];

export const leadershipTiers = [
  {
    tier: 'Board of Trustees',
    copy: 'The supreme governing body, accountable for fiduciary oversight and strategic direction.',
  },
  {
    tier: 'Global Advisory Board',
    copy: 'Astronauts, scientists and policy leaders who shape the Foundation’s scientific and diplomatic direction.',
  },
  {
    tier: 'Executive Management',
    copy: 'Chief Executive Officer and Chief Programme Officer, responsible for day-to-day delivery.',
  },
  {
    tier: 'Director — ORBIT',
    copy: 'Leads the planetary-citizenship curriculum and the international school network.',
  },
  {
    tier: 'Director — NEXUS',
    copy: 'Leads technology literacy, makerspaces and the innovation programmes.',
  },
];

export const complianceCards = [
  {
    title: 'Section 8 Company',
    copy: 'Incorporated under the Companies Act, 2013 — India’s highest category of non-profit registration, with full fiduciary governance. CIN: [ ].',
  },
  {
    title: 'India-First, Global Vision',
    copy: 'Headquartered in New Delhi, with Phase 1 operations in Mumbai, Bengaluru and Pune. International chapters planned in Singapore, the UAE and the UK.',
  },
  {
    title: 'CSR Eligibility',
    copy: 'Registered with the Ministry of Corporate Affairs to receive CSR contributions. Eligible activities fall under Schedule VII of the Companies Act, 2013, covering education, skill development and environmental sustainability. CSR-1: [ ].',
  },
  {
    title: 'Transparency & Reporting',
    copy: 'Annual impact reports, audited financials and quarterly partner briefings. Full transparency on how every rupee is deployed. Latest annual report: [link].',
  },
];

export const involvementDoors = [
  {
    title: 'Schools',
    copy: 'Bring the Earthizen Curriculum into your timetable, and connect your classroom to one on the other side of the world. We handle the training, the materials and the partner match.',
    cta: 'Partner A School',
  },
  {
    title: 'CSR & Funders',
    copy: 'Fund a defined number of schools, with quarterly reporting and an audited annual impact report. All activities fall under Schedule VII.',
    cta: 'See partnership tiers',
  },
  {
    title: 'Volunteers',
    copy: 'Mentors, engineers, teachers, translators and photographers. Tell us what you can give and how often.',
    cta: 'Volunteer',
  },
  {
    title: 'Individuals',
    copy: 'Support a single classroom, or the whole movement.',
    cta: 'Donate',
  },
];

export const pageEndCopy =
  'Every impact story begins with one school, one classroom, one child who decides to think like a planetary citizen.';

export const closingQuote =
  '“When a child looks at the night sky and sees not borders but the vast shared expanse of space, the world becomes a little more borderless. One child at a time. One classroom at a time. One Earth.”';

export const founderQuote = {
  attribution: 'Group Captain Shubhanshu Shukla',
  quote: '“I was on a space mission. I looked down at Earth. I could not see any borders. Only one planet. Only one home.”',
  relationship: 'Founder, Earthizen Foundation',
  portrait: photos.founderPortrait,
};
