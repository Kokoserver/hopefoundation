export type Program = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  fullDescription: string;
  beneficiaries: string;
  location: string;
  image: string;
  goals: string[];
  outcomes: string[];
};

export const allPrograms: Program[] = [
  {
    slug: "back-to-school-drive",
    title: "Back to School Drive",
    tag: "Ongoing",
    description:
      "Distributing school uniforms, bags, books, and stationery to 200+ children from low-income families across Enugu ahead of the new term.",
    fullDescription:
      "The Back to School Drive is one of our flagship annual programmes. Every year, we identify children from low-income families who are at risk of missing school due to lack of basic supplies. We provide complete school kits including uniforms, bags, books, stationery, and sandals. The programme also covers school fee support for the most vulnerable cases. Since its inception, the drive has helped over 800 children start the school term with confidence and dignity.",
    beneficiaries: "200 children",
    location: "Enugu East",
    image: "/images/generated/foundation-education-branded.png",
    goals: [
      "Ensure no child misses school due to lack of supplies",
      "Boost confidence and readiness for the academic term",
      "Reduce dropout rates in underserved communities",
      "Engage local communities in supporting education",
    ],
    outcomes: [
      "200+ children equipped with full school kits",
      "95% of beneficiaries remained enrolled for the full term",
      "Reduced financial burden on 150+ families",
    ],
  },
  {
    slug: "women-skills-bootcamp",
    title: "Women Skills Bootcamp",
    tag: "Upcoming",
    description:
      "A 6-week vocational training programme in tailoring, bead-making, and pastry production for 50 women, with startup kits for graduates.",
    fullDescription:
      "The Women Skills Bootcamp is an intensive 6-week vocational training programme designed to equip women with practical, income-generating skills. Participants choose from three tracks: tailoring, bead-making, or pastry production. Each track combines hands-on training with basic business management, pricing, and customer relations. Graduates receive a startup kit with the tools they need to begin earning immediately. The programme also provides post-training mentorship and access to a peer support network.",
    beneficiaries: "50 women",
    location: "Enugu North",
    image: "/images/generated/foundation-women-skills-branded.png",
    goals: [
      "Equip women with marketable vocational skills",
      "Provide startup resources for immediate income generation",
      "Build financial literacy and business management skills",
      "Create a supportive peer network for women entrepreneurs",
    ],
    outcomes: [
      "50 women trained across three vocational tracks",
      "85% of graduates start generating income within 3 months",
      "Startup kits provided to all graduates",
    ],
  },
  {
    slug: "orphanage-welfare-visit",
    title: "Orphanage Welfare Visit",
    tag: "Ongoing",
    description:
      "Monthly visits to partner orphanages providing food supplies, hygiene products, educational materials, and recreational activities for children.",
    fullDescription:
      "Our Orphanage Welfare Visit programme ensures that children in partner orphanages receive consistent material and emotional support. Our team visits monthly, delivering food supplies, hygiene products, educational materials, and organising recreational activities. Beyond material support, we spend quality time with the children, offering mentorship, tutoring, and psychosocial encouragement. We currently partner with six orphanages across Enugu State, reaching over 120 children on a regular basis.",
    beneficiaries: "120 children",
    location: "Enugu South",
    image: "/images/generated/foundation-child-welfare-branded.png",
    goals: [
      "Provide consistent material support to partner orphanages",
      "Improve educational outcomes through tutoring and supplies",
      "Offer psychosocial support and mentorship",
      "Strengthen the capacity of orphanage caregivers",
    ],
    outcomes: [
      "Monthly visits to 6 partner orphanages",
      "120+ children receiving regular support",
      "Improved school performance among supported children",
    ],
  },
  {
    slug: "scholarship-programme",
    title: "Scholarship Programme",
    tag: "Ongoing",
    description:
      "Sponsoring 30 bright students from underserved communities through secondary school, covering tuition, books, and mentorship support.",
    fullDescription:
      "Our Scholarship Programme identifies academically promising students from underserved communities and sponsors their secondary education. Each scholar receives full coverage of school fees, textbooks, uniforms, writing materials, and transportation. Beyond financial support, we provide mentorship, academic monitoring, and career guidance. Scholars are selected through a rigorous process involving community referrals, academic assessments, and home visits to verify need.",
    beneficiaries: "30 students",
    location: "Enugu State",
    image: "/images/generated/foundation-education-branded.png",
    goals: [
      "Remove financial barriers to secondary education",
      "Support academically promising students from low-income families",
      "Provide mentorship and career guidance",
      "Create a pipeline of future community leaders",
    ],
    outcomes: [
      "30 active scholars supported through secondary school",
      "92% scholar retention rate",
      "Scholars consistently rank in top 20% of their classes",
    ],
  },
  {
    slug: "health-awareness-campaign",
    title: "Health Awareness Campaign",
    tag: "Upcoming",
    description:
      "A community health drive offering free malaria screenings, blood pressure checks, and hygiene education in partnership with local health workers.",
    fullDescription:
      "The Health Awareness Campaign brings essential preventive healthcare services directly to rural communities. In partnership with local health workers and the Enugu State Primary Healthcare Agency, our team sets up temporary clinics in community centres, schools, and churches. Services include malaria testing, blood pressure and blood sugar screening, deworming for children, and hygiene education sessions. The campaign also distributes mosquito nets, water purification tablets, and hygiene supplies.",
    beneficiaries: "500+ residents",
    location: "Nsukka",
    image: "/images/generated/foundation-healthcare-branded.png",
    goals: [
      "Increase access to basic health screenings in rural areas",
      "Raise awareness about preventive healthcare practices",
      "Distribute essential health supplies to vulnerable families",
      "Build local capacity through health volunteer training",
    ],
    outcomes: [
      "500+ residents screened for common health conditions",
      "300+ mosquito nets distributed",
      "20 local health volunteers trained",
    ],
  },
  {
    slug: "youth-mentorship-day",
    title: "Youth Mentorship Day",
    tag: "Planned",
    description:
      "A one-day career guidance and life skills event connecting 100 young people with professionals across different fields for mentoring sessions.",
    fullDescription:
      "Youth Mentorship Day is a flagship event that brings together young people from underserved communities with professionals from various fields. Participants attend career talks, interactive mentoring sessions, and skills workshops. Topics include career planning, interview skills, personal branding, financial literacy, and goal setting. The event aims to broaden horizons, build confidence, and provide young people with the guidance they need to make informed decisions about their futures.",
    beneficiaries: "100 youths",
    location: "Enugu Urban",
    image: "/images/generated/foundation-volunteers-branded.png",
    goals: [
      "Connect young people with positive role models",
      "Provide practical career guidance and life skills training",
      "Build confidence and broaden career aspirations",
      "Create a network of mentors for ongoing support",
    ],
    outcomes: [
      "100 young people attended the event",
      "15 professionals volunteered as mentors",
      "85% of participants reported increased career clarity",
    ],
  },
];

export function getProgramBySlug(slug: string) {
  return allPrograms.find((p) => p.slug === slug) || null;
}
