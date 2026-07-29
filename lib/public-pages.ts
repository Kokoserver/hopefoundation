import type {
  PublicPageData,
  PublicPageSection,
} from "@/components/common/public-page";

export const publicPages: Record<string, PublicPageData> = {
  about: {
    eyebrow: "About the Foundation",
    title: "A mission shaped by compassion and service",
    description:
      "Achebe Hope Foundation exists to strengthen families, create opportunity, and support underserved communities with practical programmes rooted in dignity.",
    image: "/images/generated/foundation-partners-branded.png",
    imageAlt: "Foundation representative with community members",
    overviewKicker: "Who We Are",
    overviewTitle: "A people-first foundation built around family stability.",
    cardsTitle: "Our foundation pillars",
    cardsDescription:
      "Compassion, community, and legacy guide every decision we make and every programme we build.",
    sections: [
      {
        title: "Our beginning",
        body: "Achebe Hope Foundation was founded by Chief Obiora Achebe, driven by a deep desire to give back to the community that shaped him. Born and raised in Enugu, Chief Achebe witnessed firsthand the challenges faced by underserved families in Nigeria. In 2018, he established the foundation with a clear mission: to provide practical support, create educational opportunities, and strengthen family units so that every person has the chance to thrive. What began as small outreach efforts in local communities has grown into a registered non-profit organisation reaching hundreds of families across the region.",
      },
      {
        title: "Our belief",
        body: "We believe that lasting change starts within the family. When parents have access to resources, children have access to education, and communities have access to support, entire generations are lifted. Our approach is holistic: addressing immediate needs like food and healthcare while investing in long-term solutions through education, skills training, and economic empowerment. We treat every family with dignity, meeting them where they are and walking alongside them as they build a better future.",
      },
      {
        title: "Our commitment",
        body: "We are committed to transparency, accountability, and community-led development. Every programme we run is designed with input from the people we serve, ensuring that our work reflects real needs rather than assumptions. We partner with local schools, healthcare providers, religious institutions, and community leaders to maximise impact. Financial records, project updates, and impact reports are shared openly with donors and stakeholders. We measure success not by how much we give, but by how much lives change.",
      },
    ],
    cards: [
      {
        title: "Compassion",
        description:
          "Every outreach begins with empathy. We listen to each family’s story, respect their dignity, and respond with care that honours their circumstances and hopes.",
      },
      {
        title: "Community",
        description:
          "We believe communities know what they need most. Our role is to listen, partner with local leaders, and support solutions that are shaped and owned by the people we serve.",
      },
      {
        title: "Legacy",
        description:
          "We build programmes designed to outlast any single outreach day or donation cycle — creating lasting infrastructure, skills, and systems that continue serving families for generations.",
      },
    ],
    ctaLabel: "Explore Our Work",
    ctaHref: "/projects",
  },
  projects: {
    eyebrow: "Our Work",
    title: "Projects that respond to real community needs",
    description:
      "From classroom supplies to family welfare packages and community health campaigns — every project we run is designed to meet pressing needs with practical, dignified support.",
    image: "/images/generated/foundation-food-relief-branded.png",
    imageAlt: "Community gathering",
    overviewKicker: "Project Focus",
    overviewTitle: "Short-term action connected to long-term outcomes.",
    cardsTitle: "Active project categories",
    cardsDescription:
      "Each category represents a core area of our field work, reaching families across Enugu and surrounding communities.",
    sections: [
      {
        title: "Needs assessment",
        body: "Before any project begins, our team meets with community leaders, families, and local stakeholders to understand the most pressing needs. We listen first, assess resources, and identify gaps so every intervention is targeted and effective.",
      },
      {
        title: "Resource delivery",
        body: "From food packages and school supplies to hygiene products and learning materials, we coordinate the procurement, transport, and distribution of resources directly to the communities that need them most.",
      },
      {
        title: "Follow-up visits",
        body: "Impact is not a single moment. Our team returns to communities after every project to document outcomes, gather feedback, and improve future interventions. We track what worked and what can be done better.",
      },
    ],
    cards: [
      {
        title: "Education outreach",
        description:
          "We provide classroom resources, scholarships, learning kits, and mentorship support to help children stay in school and succeed academically.",
      },
      {
        title: "Family welfare",
        description:
          "Food support, care packages, emergency assistance, and household stability programmes ensure families have their basic needs met with dignity.",
      },
      {
        title: "Community health",
        description:
          "Awareness campaigns, health screenings, wellness partnerships, and preventive care initiatives that bring vital services closer to home.",
      },
    ],
    ctaLabel: "Support a Project",
    ctaHref: "/donate",
  },
  programs: {
    eyebrow: "Programmes",
    title: "Structured programmes for education, women, and children",
    description:
      "Our programmes are built around three core pillars: education access, women empowerment, and child welfare — each designed to create lasting, measurable change.",
    image: "/images/generated/foundation-child-welfare-branded.png",
    imageAlt: "Children learning together",
    overviewKicker: "Programme Pillars",
    overviewTitle: "Clear focus areas make support easier to organise.",
    cardsTitle: "Core programme tracks",
    cardsDescription:
      "Each track is built with community input and designed to create lasting, measurable change in the lives of families.",
    sections: [
      {
        title: "Education access",
        body: "We believe every child deserves the chance to learn. Our education programmes provide learning materials, school fee support, tutoring, and mentorship to help children from underserved communities stay in school and build a brighter future.",
      },
      {
        title: "Women empowerment",
        body: "Empowered women build empowered communities. We run skills development workshops, enterprise support programmes, financial literacy training, and peer networks that help women gain confidence, income, and independence.",
      },
      {
        title: "Child welfare",
        body: "Every child deserves safety, care, and encouragement. Our child welfare programmes include orphanage partnerships, care package distributions, safe environment initiatives, and psychosocial support for vulnerable children.",
      },
    ],
    cards: [
      {
        title: "Education Initiative",
        description:
          "School supplies, scholarships, tutoring, reading support, and mentoring for children from low-income families to stay in school and excel.",
      },
      {
        title: "Women Rise Initiative",
        description:
          "Vocational skills training, small business startup support, coaching, and financial literacy programmes that help women achieve economic independence.",
      },
      {
        title: "Children & Orphanages",
        description:
          "Regular welfare visits to orphanages, care packages, educational aid, recreational activities, and safe spaces for vulnerable children.",
      },
    ],
    ctaLabel: "Get Involved",
    ctaHref: "/volunteer",
  },
  stories: {
    eyebrow: "Hope Stories",
    title: "Human stories behind every act of support",
    description:
      "Beneficiary stories, volunteer reflections, and partner perspectives show how practical support becomes lasting change in communities.",
    image: "/images/generated/foundation-volunteers-branded.png",
    imageAlt: "Children and community story",
    overviewKicker: "Stories",
    overviewTitle: "Impact is clearest when people can tell it themselves.",
    cardsTitle: "Story collections",
    cardsDescription:
      "Use these categories for real interviews, field notes, before-and-after stories, and volunteer reflections.",
    sections: [
      {
        title: "Beneficiary journeys",
        body: "Families share how education support, welfare assistance, skills training, and consistent encouragement helped them move through difficult seasons with dignity.",
      },
      {
        title: "Volunteer reflections",
        body: "Volunteers describe the responsibility, humility, and practical lessons that come from serving alongside community members and local partners.",
      },
      {
        title: "Partner perspectives",
        body: "Partners explain how collaboration expands reach, improves delivery, and connects resources to families with clear needs.",
      },
    ],
    cards: [
      {
        title: "Family journeys",
        description:
          "Stories from families rebuilding confidence through practical support, care, and sustained follow-up.",
      },
      {
        title: "Volunteer voices",
        description:
          "Reflections from people who contribute time, field support, professional skills, and advocacy.",
      },
      {
        title: "Community wins",
        description:
          "Milestones achieved through local collaboration, accountable delivery, and consistent follow-up.",
      },
    ],
    ctaLabel: "Become Part of a Story",
    ctaHref: "/volunteer",
  },
  volunteer: {
    eyebrow: "Get Involved",
    title: "Volunteer your time, skills, and care",
    description:
      "Volunteer your time, skills, and networks to support education, welfare, outreach, communications, and community programme delivery.",
    image: "/images/generated/foundation-volunteers-branded.png",
    imageAlt: "Volunteers and children celebrating",
    overviewKicker: "Volunteer Path",
    overviewTitle: "Give support in ways that match your availability.",
    cardsTitle: "Ways to volunteer",
    cardsDescription:
      "Volunteer roles are matched to availability, skills, safeguarding requirements, and current programme needs.",
    sections: [
      {
        title: "Apply",
        body: "Submit your interest, share your availability, and identify the areas where your skills or field support can serve the Foundation best.",
      },
      {
        title: "Get oriented",
        body: "Volunteers receive orientation on safeguarding, field conduct, communication standards, and the programme context before serving.",
      },
      {
        title: "Serve consistently",
        body: "Serve through outreach days, remote support, campaign work, professional advisory teams, or recurring operational support.",
      },
    ],
    cards: [
      {
        title: "Field support",
        description:
          "Support event setup, outreach days, community visits, beneficiary care, and logistics coordination.",
      },
      {
        title: "Professional skills",
        description:
          "Contribute expertise in design, finance, education, health, legal, technology, communications, or operations.",
      },
      {
        title: "Remote advocacy",
        description:
          "Help with awareness campaigns, fundraising, storytelling, research, newsletter support, and donor updates.",
      },
    ],
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
  },
  contact: {
    eyebrow: "Contact",
    title: "Start a conversation with the foundation",
    description:
      "We’d love to hear from you. Whether you have questions about our programmes, want to partner with us, or are interested in volunteering, reach out and our team will respond promptly.",
    image: "/images/generated/foundation-partners-branded.png",
    imageAlt: "Children supported by the foundation",
    overviewKicker: "Reach Us",
    overviewTitle: "Choose the right channel for your inquiry.",
    cardsTitle: "Contact details",
    cardsDescription:
      "You can reach us directly through any of the channels below, or use the contact form to send us a message.",
    sections: [
      {
        title: "General inquiries",
        body: "For questions about our programmes, donation options, or foundation activities, send us an email or call during office hours. Our team is happy to provide information and guidance.",
      },
      {
        title: "Partnership requests",
        body: "Organisations interested in collaborating on projects, sponsorships, or community events are welcome to reach out. We value partnerships that amplify impact and extend our reach to more families.",
      },
      {
        title: "Volunteer support",
        body: "If you are interested in volunteering, please contact us to learn about upcoming opportunities, orientation sessions, and how your skills can best serve the community.",
      },
    ],
    cards: [
      { title: "Email", description: "AchebeHopeFoundation@gmail.com" },
      { title: "Phone", description: "+234 802 058 6948" },
      {
        title: "Address",
        description: "No 6 Chief Obiora Achebe Close, Enugu",
      },
    ],
    ctaLabel: "Volunteer With Us",
    ctaHref: "/volunteer",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Moments from programmes, outreach, and community life",
    description:
      "Photos from outreach, learning activities, community gatherings, and partner moments document the Foundation’s work in action.",
    image: "/images/generated/foundation-food-relief-branded.png",
    imageAlt: "Children in the community",
    overviewKicker: "Albums",
    overviewTitle: "Visual documentation of care, service, and community.",
    cardsTitle: "Gallery categories",
    cardsDescription:
      "Use these sections for real photo collections, captions, dates, and event locations.",
    sections: [
      {
        title: "Outreach days",
        body: "Field visits, distribution activities, volunteer teams, and community gatherings show practical support reaching families directly.",
      },
      {
        title: "Learning moments",
        body: "School programmes, tutoring, mentorship, and education support capture the Foundation’s investment in young people.",
      },
      {
        title: "Community portraits",
        body: "Respectful portraits, family moments, and partner documentation help tell the human story behind each programme.",
      },
    ],
    cards: [
      {
        title: "Outreach photos",
        description:
          "Event albums, community visits, and field documentation from active outreach work.",
      },
      {
        title: "Programme moments",
        description:
          "Education, women empowerment, welfare, and training activities captured across programme delivery.",
      },
      {
        title: "Partner highlights",
        description:
          "Donors, sponsors, volunteers, and local collaborators supporting community outcomes.",
      },
    ],
  },
  donate: {
    eyebrow: "Donate",
    title: "Give toward practical hope and lasting support",
    description:
      "Your generosity makes every programme, outreach, and welfare package possible. Every contribution — no matter the size — goes directly toward strengthening families and building brighter futures.",
    image: "/images/generated/foundation-food-relief-branded.png",
    imageAlt: "Children celebrating",
    overviewKicker: "Giving",
    overviewTitle: "Every gift creates real, measurable impact.",
    cardsTitle: "Ways to give",
    cardsDescription:
      "Choose the option that works best for you. All contributions are used responsibly and transparently.",
    sections: [
      {
        title: "Where gifts go",
        body: "Donations fund education materials, welfare packages, skills training, healthcare outreach, and project logistics. We prioritise direct impact and keep administrative costs low so your gift reaches those who need it most.",
      },
      {
        title: "Donor updates",
        body: "Every donor receives regular updates on how contributions are being used. We share impact reports, photos from the field, and stories of lives changed so you can see the difference your support makes.",
      },
      {
        title: "Corporate support",
        body: "We welcome partnerships with businesses and organisations that share our vision. Corporate sponsors can support specific programmes, fund projects, or provide in-kind contributions that amplify community impact.",
      },
    ],
    cards: [
      {
        title: "One-time gifts",
        description:
          "Make a single donation to support our most urgent community needs. Your gift goes directly toward education, welfare, and health programmes.",
      },
      {
        title: "Monthly support",
        description:
          "Become a monthly donor and provide consistent, predictable support that helps us plan long-term programmes and respond quickly to emerging needs.",
      },
      {
        title: "Corporate giving",
        description:
          "Partner with us as a corporate sponsor. Fund a specific programme, support an outreach event, or provide in-kind contributions that amplify our collective impact.",
      },
    ],
    ctaLabel: "Contact About Giving",
    ctaHref: "/contact",
  },
  events: {
    eyebrow: "Events",
    title: "Gatherings that connect people to purpose",
    description:
      "Upcoming outreach events, volunteer sessions, fundraising activities, and community gatherings connect supporters to practical service.",
    image: "/images/generated/foundation-volunteers-branded.png",
    imageAlt: "Community outreach event",
    overviewKicker: "Event Calendar",
    overviewTitle: "Planned moments for service, learning, and partnership.",
    cardsTitle: "Upcoming event types",
    cardsDescription:
      "Event details include the purpose, audience, participation route, and the support needed from volunteers, donors, and partners.",
    sections: [
      {
        title: "Outreach events",
        body: "Field visits, school support days, welfare distributions, and community engagement activities are planned around verified needs.",
      },
      {
        title: "Volunteer sessions",
        body: "Orientation, training, safeguarding briefings, and planning meetings prepare volunteers to serve responsibly.",
      },
      {
        title: "Fundraising moments",
        body: "Donor briefings, campaigns, and partner events keep supporters informed and connected to measurable outcomes.",
      },
    ],
    cards: [
      {
        title: "Community outreach day",
        description:
          "A local service event where volunteers and partners support families through direct outreach.",
      },
      {
        title: "Volunteer orientation",
        description:
          "An onboarding session covering volunteer expectations, safeguarding, communication, and programme priorities.",
      },
      {
        title: "Fundraising dinner",
        description:
          "A supporter gathering focused on donor engagement, field stories, and programme updates.",
      },
    ],
    ctaLabel: "Ask About Events",
    ctaHref: "/contact",
  },
};

export const legalPages: Record<
  string,
  { title: string; description: string; sections: PublicPageSection[] }
> = {
  privacy: {
    title: "Privacy Policy",
    description:
      "This policy explains how the Foundation handles personal information submitted through the website and related public channels.",
    sections: [
      {
        title: "Information we collect",
        body: "We may collect contact details, donation-related information, volunteer submissions, newsletter preferences, and website usage data needed to operate our services.",
      },
      {
        title: "How we use information",
        body: "We use information for communication, programme administration, donor updates, volunteer coordination, records management, and service improvement.",
      },
      {
        title: "Your choices",
        body: "You may contact the Foundation to update your details, change communication preferences, request corrections, or opt out of non-essential messages.",
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    description:
      "These terms describe acceptable use of the website, public content, forms, and information shared by the Foundation.",
    sections: [
      {
        title: "Website use",
        body: "Visitors should use website content, forms, and public resources lawfully, respectfully, and only for legitimate engagement with the Foundation.",
      },
      {
        title: "Content accuracy",
        body: "Programme information, events, policies, and public resources may change as needs, partnerships, and operational plans evolve.",
      },
      {
        title: "Limitation of liability",
        body: "The website is provided for public information and engagement. For formal commitments, contact the Foundation directly.",
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    description:
      "This cookie policy explains how browser storage and similar technologies may support website functionality and performance.",
    sections: [
      {
        title: "What cookies are",
        body: "Cookies, local storage, and similar technologies can help websites remember preferences, support security, and understand site performance.",
      },
      {
        title: "How cookies may be used",
        body: "The Foundation may use these technologies for preferences, security, analytics, and service improvement where appropriate.",
      },
      {
        title: "Managing cookies",
        body: "Most browsers allow visitors to review, block, or delete cookies. Some website features may not work fully if cookies are disabled.",
      },
    ],
  },
};
