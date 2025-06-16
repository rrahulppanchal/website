import SoftwareDeveloperIcon from '../../assests/icons/sofware-developer.svg';
import DesignIcon from '../../assests/icons/design.svg';
import CloudIcon from '../../assests/icons/cloud.svg';
import AiAgentIcon from '../../assests/icons/ai-agent.svg';

export type ServiceData = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  process: string[];
  cta: string;
  ctaText: string;
  icon: string;
};

export const servicesData: ServiceData[] = [
  {
    id: 'custom-software-development',
    title: 'Custom Software Development',
    subtitle: 'Tailored Solutions Built for Your Success',
    description:
      'Every business is unique, and your software should be too. At Vox-Q, we design and engineer custom software that aligns perfectly with your operations, goals, and growth plans. Whether you\'re launching a new digital product or streamlining internal processes, our solutions are built to scale as your ambitions grow.',
    features: [
      'Software designed specifically for your workflows',
      'Reliable, secure, and future-proof code',
      'Rapid, AI-enhanced delivery cycles',
    ],
    process: [
      'Discovery: We dive deep into your needs and objectives.',
      'Design: We architect optimal solutions for usability and growth.',
      'Development: Our skilled developers bring your vision to life using modern technologies.',
      'Testing & Launch: Every feature tested, every deadline met — quickly and efficiently.',
    ],
    cta: '/contact-us',
    ctaText: 'Contact us',
    icon: SoftwareDeveloperIcon,
  },
  {
    id: 'web-mobile-app-development',
    title: 'Web & Mobile App Development',
    subtitle: 'Your Brand, Everywhere Your Users Are',
    description:
      'Reach your audience wherever they are—on any device, anytime. We craft engaging, high-performance web and mobile applications that reflect your brand and deliver memorable user experiences. From MVPs for startups to robust multiplatform apps for enterprise, we handle it all, end-to-end.',
    features: [
      'Native and cross-platform expertise (iOS, Android, web)',
      'Seamless, responsive interfaces',
      'Fast, secure, scalable deployment',
    ],
    process: [
      'Strategy Workshop: Define product goals and user journeys.',
      'UI/UX Design: Pixel-perfect, intuitive interfaces.',
      'Development: Agile builds with rapid iteration and feedback.',
      'Launch & Support: App store publishing and ongoing care.',
    ],
    cta: '/contact-us',
    ctaText: 'Book a free consultation',
    icon: DesignIcon,
  },
  {
    id: 'cloud-consulting',
    title: 'Cloud Consulting',
    subtitle: 'Smarter, Scalable, Secure Cloud Transformations',
    description:
      "Embrace the future of business with our intelligent cloud consulting. Whether you're migrating legacy systems, modernizing architecture, or optimizing for cost and speed, our experts help you leverage cloud power safely and efficiently. From strategy to implementation and beyond, we've got your back.",
    features: [
      'Cloud migration and modernization',
      'Architecture design and automation (AWS, Azure, GCP, etc.)',
      'DevOps, CI/CD, and performance tuning',
    ],
    process: [
      'Assessment: Evaluate your current infrastructure and goals.',
      'Blueprint: Create a tailored cloud roadmap.',
      'Migration & Optimization: Move, configure, and fine-tune your systems.',
      'Ongoing Support: Proactive maintenance and scaling.',
    ],
    cta: '/contact-us',
    ctaText: 'Talk to our cloud experts',
    icon: CloudIcon,
  },
  {
    id: 'ai-ml-solutions',
    title: 'AI/ML Solutions',
    subtitle: 'Transform Data Into Intelligent Action',
    description:
      'Stay ahead with artificial intelligence and machine learning solutions that give your business the edge. From smart automation and predictive analytics to custom algorithms, we help you unlock valuable insights from your data, automate the mundane, and make informed decisions, faster.',
    features: [
      'AI-driven workflow automation',
      'Predictive analytics & business intelligence',
      'Natural language processing and computer vision',
      'Custom ML model development and integration',
    ],
    process: [
      'Discovery: Identify AI opportunities in your workflow.',
      'Data Analysis: Prepare and process your business data.',
      'Solution Design & Development: Build and train models tailored to your needs.',
      'Deployment & Support: Seamless integration with your existing tools.',
    ],
    cta: '/contact-us',
    ctaText: 'Schedule a discovery session',
    icon: AiAgentIcon,
  },
]; 