export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tool';
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'crud' | 'sistem-informasi' | 'all';
  image: string;
  technologies: string[];
  features: string[];
  duration: string;
  demoUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  university: string;
  rating: number;
  content: string;
  projectType: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  priceNum: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  timeline: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TimelineStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tool';
  color: string;
  badgeBg: string;
  borderColor: string;
}

export interface EstimatorOption {
  id: string;
  name: string;
  points: number;
  days: number;
  category: string;
}

export interface QuizMajor {
  id: string;
  label: string;
  desc: string;
}

export interface QuizInterest {
  id: string;
  label: string;
  desc: string;
}

export interface QuizStack {
  id: string;
  label: string;
  desc: string;
}

export interface TopicRecommendation {
  title: string;
  description: string;
  stack: string;
  database: string;
  difficulty: 'Mudah' | 'Sedang' | 'Tantangan';
  defenseAngle: string;
}

export interface AdvantageItem {
  title: string;
  description: string;
  iconName: string;
}
