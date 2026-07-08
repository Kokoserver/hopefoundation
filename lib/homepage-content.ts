export const defaultHomepageContent = {
  hero: {
    eyebrow: "Registered Humanitarian Foundation • Nigeria",
    title: "Changing Lives, One Family At A Time",
    description:
      "Achebe Hope Foundation works alongside underserved communities across Africa to expand access to education, empower women, support vulnerable children, and build sustainable pathways toward lasting independence.",
    primaryButton: { label: "Support Our Mission", href: "/donate" },
    secondaryButton: { label: "Explore Our Programs", href: "/programs" },
    slides: [
      { src: "/images/hero/hero-main.png", alt: "Adult teaching child" },
      { src: "/images/07d4e4d51d8482bb57eaa668e61381bad9aadb64.jpg", alt: "Children celebrating together" },
      { src: "/images/c49f4fcac50c2b6acba8314d8377904627f83cac.jpg", alt: "Community gathering" },
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
    attribution: "Chief Obiora Achebe, Founder",
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
    poster: "/images/07d4e4d51d8482bb57eaa668e61381bad9aadb64.jpg",
    url: "/videos/hope-story.mp4",
  },
  message: {
    title: "A message from Achebe Hope Foundation",
    image: "/images/message-children-generated.png",
    paragraphs: [
      "Every community carries untapped strength, every family deserves opportunity, and every child deserves the chance to dream without limitation.",
      "Our work is rooted in a belief that meaningful change happens when compassion is paired with action, and when communities become active partners in shaping their own future.",
      "Together, we can create a future where hope is no longer an exception—but an expectation.",
    ],
  },
  closing: {
    title: "Hope begins with one decision",
    description: "Whether you choose to volunteer, donate, partner, or simply share our mission, your support helps create opportunities that last for generations.",
    image: "/images/closing-cta-bg-generated.png",
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
