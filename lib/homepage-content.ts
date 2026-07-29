export const defaultHomepageContent = {
  hero: {
    eyebrow: "Registered Humanitarian Foundation • Nigeria",
    title: "Turning Heritage Into Hope",
    description:
      "Empowering communities, strengthening families, and creating opportunities for lasting change across Africa.\n\nThrough compassion, education, healthcare, and sustainable development, we are restoring dignity and creating pathways to a brighter future for underserved families across Africa.",
    primaryButton: { label: "Learn More", href: "/about" },
    secondaryButton: { label: "Support Our Work", href: "/donate" },
    slides: [
      {
        src: "/images/generated/foundation-outreach-branded.png",
        alt: "Achebe Hope Foundation volunteers distributing food and school supplies",
        title: "Turning Heritage Into Hope",
        description:
          "Empowering communities, strengthening families, and creating opportunities for lasting change across Africa.\n\nThrough compassion, education, healthcare, and sustainable development, we are restoring dignity and creating pathways to a brighter future for underserved families across Africa.",
        primaryButton: { label: "Learn More", href: "/about" },
        secondaryButton: { label: "Support Our Work", href: "/donate" },
      },
      {
        src: "/images/generated/foundation-education-branded.png",
        alt: "Achebe Hope Foundation volunteers supporting children in class",
        title: "Every Child Deserves a Chance",
        description:
          "Supporting education, maternal care, orphanages, and vulnerable families. Every child deserves safety, quality education, proper nutrition, and the opportunity to dream beyond their circumstances.\n\nFrom orphanage support and school interventions to maternal care and family empowerment, we are helping children and young adults build brighter futures.",
        primaryButton: {
          label: "Our Child-Support Programmes",
          href: "/orphanage-support",
        },
        secondaryButton: { label: "Sponsor a Child", href: "/donate" },
      },
      {
        src: "/images/generated/foundation-outreach-branded.png",
        alt: "Community gathering",
        title: "Hope Begins With Opportunity",
        description:
          "Every child deserves safety, quality education, proper nutrition, and the opportunity to dream beyond their circumstances.\n\nFrom orphanage support and school interventions to maternal care and family empowerment, we are helping children build brighter futures.",
        primaryButton: { label: "Become a Volunteer", href: "/volunteer" },
        secondaryButton: { label: "Partner With Us", href: "/contact" },
      },
      {
        src: "/images/generated/foundation-digital-academy-branded.png",
        alt: "Young Africans learning digital and practical skills",
        title:
          "Ending Unemployment Through Digital and Practical Skills Training",
        description:
          "The Achebe Africa Digital Academy (AADA) is Achebe Hope Foundation's flagship digital education initiative that equips young Africans with practical digital skills, mentorship, and career opportunities for the future.\n\nBeyond AADA, the Foundation expands access to practical and vocational skills through community-based training programmes that promote self-reliance, economic independence, and long-term community development.",
        primaryButton: { label: "Explore AADA", href: "/aada" },
        secondaryButton: {
          label: "Reserve Your Slot for Free Practical Skills Training",
          href: "/contact",
        },
      },
    ],
  },
  impact: {
    label: "Our Impact",
    stats: [
      { value: "35", label: "Communities Reached" },
      { value: "72+", label: "Families Supported" },
      { value: "1,600+", label: "Children Empowered" },
      { value: "200+", label: "Women Trained" },
      { value: "44+", label: "Projects Completed" },
    ],
  },
  quote: {
    text: "Heritage is honoured through service. Legacy is proven through action. The work continues.",
    attribution: "Chief Alex Ubaka Achebe, Founder",
  },
  aada: {
    eyebrow: "Our Flagship Initiative",
    title: "Achebe Africa Digital Academy (AADA)",
    description:
      "While Achebe Hope Foundation responds to immediate needs through education, maternal and child care, humanitarian support, and community development, Achebe Africa Digital Academy (AADA) addresses one of Africa's greatest long-term challenges: unemployment and limited access to quality digital education.\n\nAADA equips young Africans with practical digital skills, mentorship, entrepreneurship support, career pathways, and access to thriving learning communities, empowering them to build sustainable careers and become catalysts for change within their communities.\n\nBy combining humanitarian intervention with digital education, Achebe Hope Foundation is not only restoring hope for today but creating lasting opportunities for tomorrow.",
    highlights: [
      "Practical digital courses",
      "Mentorship and career pathways",
      "Entrepreneurship support",
      "Scholarships and learning communities",
    ],
    primaryButton: { label: "See AADA Courses", href: "https://achebecampus.com/achebe-africa-digital-academy" },
    secondaryButton: { label: "Join the Academy", href: "https://achebecampus.com/" },
  },
  opportunity: {
    title: "Opportunity should never depend on where a child is born",
    footer: "These challenges are interconnected. Our work addresses them together—not in isolation.",
    cards: [
      { title: "Education", description: "Many children continue to face barriers to quality education due to limited resources and underfunded schools." },
      { title: "Mothers", description: "Thousands of mothers require access to support, skills, and opportunities needed to provide sustainable futures for their families." },
      { title: "Communities", description: "Entire communities remain underserved, limiting access to healthcare, economic opportunities, and social development." },
    ],
  },
  video: {
    label: "Watch Video",
    poster: "/images/generated/foundation-outreach-branded.png",
    url: "/videos/hope-story.mp4",
  },
  message: {
    title: "A message from Achebe Hope Foundation",
    image: "/images/generated/foundation-education-branded.png",
    paragraphs: [
      "Every community carries untapped strength, every family deserves opportunity, and every child deserves the chance to dream without limitation.",
      "Our work is rooted in a belief that meaningful change happens when compassion is paired with action, and when communities become active partners in shaping their own future.",
      "Together, we can create a future where hope is no longer an exception—but an expectation.",
    ],
  },
  closing: {
    title: "Hope begins with one decision",
    description: "Whether you choose to volunteer, donate, partner, or simply share our mission, your support helps create opportunities that last for generations.",
    image: "/images/generated/foundation-outreach-branded.png",
    primaryButton: { label: "Donate Today", href: "/donate" },
    secondaryButton: { label: "Become a Volunteer", href: "/volunteer" },
  },
  partnerLogos: [
    {
      name: "Deepalaya NGO",
      src: "/images/logos/deepalaya_ngo_id4zTykPUQ.jpeg.png",
    },
    {
      name: "Guaranty Trust Bank",
      src: "/images/logos/guaranty_trust_bank_logo.png.png",
    },
    {
      name: "Bank of America",
      src: "/images/logos/bank_of_america_logo.png.png",
    },
    {
      name: "UNICEF",
      src: "/images/logos/unicef_logo.png.png",
    },
    {
      name: "Access Bank",
      src: "/images/logos/access_bank_logo.png.png",
    },
    {
      name: "Dangote Group",
      src: "/images/logos/dangote_group_logo.png.png",
    },
  ],
};

export type HomepageContent = typeof defaultHomepageContent;
