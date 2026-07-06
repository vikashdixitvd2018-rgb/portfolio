// All content is extracted from Vikash Dixit's resume.
// No information is invented — sections without data are omitted in the UI.

export const profile = {
  name: 'Vikash Dixit',
  firstName: 'Vikash',
  role: 'AI & Machine Learning Engineer',
  degree: 'B.Tech — Artificial Intelligence & Machine Learning',
  tagline: 'Designing & deploying scalable machine learning models.',
  summary:
    'Aspiring AI & Machine Learning engineer focused on designing and deploying scalable machine learning models that drive data-driven decisions, while contributing to the innovation and growth of the organization.',
  location: 'Kanpur, Uttar Pradesh, India',
  email: 'Vikashdixit.vd2018@gmail.com',
  phone: '+91 9580219185',
  linkedin: 'https://www.linkedin.com/in/vikash-dixit-39ba57298/',
  linkedinHandle: 'vikash',
  photo: '/vikash-profile.jpg',
  resume: '/vikash-dixit-resume.png',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: 88, suffix: '%', label: 'Senior Secondary' },
  { value: 4, suffix: '', label: 'Workshops & Trainings' },
  { value: 14, suffix: '+', label: 'Technologies' },
  { value: 2026, suffix: '', label: 'Graduating', plain: true },
]

export const about = {
  whoIAm:
    'I am Vikash Dixit, a Bachelor of Technology student specializing in Artificial Intelligence and Machine Learning at Axis Institute of Technology and Management, Kanpur. My journey moved from a diploma in engineering into the world of intelligent systems, where I now build and train models that turn raw data into meaningful decisions.',
  currentFocus:
    'Right now I am deepening my hands-on experience in developing deep learning models — working with frameworks like PyTorch and TensorFlow, and exploring computer vision (OpenCV, CNN) and natural language processing (NLP).',
  careerGoal:
    'My goal is to design and deploy scalable machine learning systems that drive data-driven decisions and contribute to the innovation and growth of the organizations I work with.',
  strengths: [
    'Communication',
    'Leadership',
    'Negotiation',
    'Team Management',
  ],
}

export type SkillCategory = {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Core Java', 'JavaScript'],
  },
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'SQL'],
  },
  {
    title: 'ML & AI Frameworks',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn'],
  },
  {
    title: 'AI Domains',
    skills: ['CNN', 'NLP', 'OpenCV', 'Deep Learning'],
  },
  {
    title: 'Core Concepts',
    skills: ['DSA', 'Data-Driven Modeling'],
  },
]

export type Project = {
  title: string
  description: string
  features: string[]
  stack: string[]
  github?: string
  demo?: string
  image: string
}

export const projects: Project[] = [
  {
    title: 'Healthcare at Your Desk',
    description:
      'An e-consultation web platform where patients can enter their health symptoms and receive advice from doctors — bringing remote healthcare closer to the desk.',
    features: [
      'Appointment scheduling for patients',
      'Personalized health dashboard for patient situation',
      'Virtual consultation room for remote video calls',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'API'],
    image: '/project-healthcare.png',
  },
]

export type TimelineItem = {
  title: string
  org: string
  period: string
  description: string
  tag: string
}

export const experience: TimelineItem[] = [
  {
    title: 'Deep Learning Development',
    org: 'Hands-on Practice',
    period: 'Ongoing',
    description:
      'Hands-on experience in developing deep learning models — building, training and evaluating neural networks for data-driven tasks.',
    tag: 'Experience',
  },
  {
    title: 'Zomato Clone using AI',
    org: 'Cuvette · Workshop',
    period: '2025',
    description:
      'Built a Zomato clone leveraging AI tooling to accelerate development during a guided workshop.',
    tag: 'Workshop',
  },
  {
    title: 'MongoDB Database Operations',
    org: 'MongoDB · Workshop',
    period: '2025',
    description:
      'Learned to perform database operations through MongoDB and to store and manage data effectively.',
    tag: 'Workshop',
  },
  {
    title: 'Machine Learning Bootcamp',
    org: 'Electrocus Solution · On-campus',
    period: '2024',
    description:
      'A one-week on-campus machine learning workshop covering the implementation of Python libraries in machine learning.',
    tag: 'Training',
  },
  {
    title: 'Crack-ED PDP Workshop',
    org: 'Personality Development Program',
    period: '2024',
    description:
      'Focused on efficient communication skills and other essential professional development practices.',
    tag: 'Workshop',
  },
]

export type EducationItem = {
  degree: string
  school: string
  board: string
  period: string
  score: string
}

export const education: EducationItem[] = [
  {
    degree: 'B.Tech — Artificial Intelligence & Machine Learning',
    school: 'Axis Institute of Technology and Management, Kanpur',
    board: 'AKTU, Lucknow',
    period: '2023 — 2026',
    score: '78%',
  },
  {
    degree: 'Diploma in Engineering',
    school: 'Govt. Polytechnic Ghatampur, Kanpur',
    board: 'AKTU, Lucknow',
    period: '2018 — 2022',
    score: '74%',
  },
  {
    degree: 'Higher Secondary',
    school: 'Chacha Nehru Smarak Inter College, Kanpur',
    board: 'UP Board',
    period: '2018',
    score: '78%',
  },
  {
    degree: 'Senior Secondary',
    school: 'Chacha Nehru Smarak Inter College, Kanpur',
    board: 'UP Board',
    period: '2016',
    score: '88%',
  },
]

export type Certification = {
  title: string
  issuer: string
  year: string
  description: string
}

export const certifications: Certification[] = [
  {
    title: 'Crack-ED PDP Workshop',
    issuer: 'Personality Development Program',
    year: '2024',
    description:
      'Efficient communication skills and other essential professional development practices.',
  },
  {
    title: 'Machine Learning Workshop',
    issuer: 'Electrocus Solution',
    year: '2024',
    description:
      'One-week on-campus workshop on implementing Python libraries in machine learning.',
  },
  {
    title: 'Introduction to MongoDB',
    issuer: 'MongoDB',
    year: '2025',
    description:
      'Performing database operations through MongoDB and storing data in databases.',
  },
  {
    title: 'Zomato Clone using AI',
    issuer: 'Cuvette',
    year: '2025',
    description:
      'Building a Zomato clone application using AI tools and modern workflows.',
  },
]
