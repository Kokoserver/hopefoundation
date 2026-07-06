import type {
  PublicPageData,
  PublicPageSection,
} from "@/components/common/public-page";

export const publicPages: Record<string, PublicPageData> = {
  about: {
    eyebrow: "About the Foundation",
    title: "A mission shaped by compassion and service",
    description:
      "Achebe Hope Foundation exists to strengthen families, create opportunity, and support underserved communities with practical programs rooted in dignity.",
    image: "/images/94e1204421b9dc987ed980d38d79ae0374fc1c72.jpg",
    imageAlt: "Foundation representative with community members",
    overviewKicker: "Who We Are",
    overviewTitle: "A people-first foundation built around family stability.",
    cardsTitle: "Our foundation pillars",
    cardsDescription:
      "Compassion, community, and legacy guide every decision we make and every program we build.",
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
    image: "/images/c49f4fcac50c2b6acba8314d8377904627f83cac.jpg",
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
    eyebrow: "Programs",
    title: "Structured programs for education, women, and children",
    description:
      "Our programmes are built around three core pillars: education access, women empowerment, and child welfare — each designed to create lasting, measurable change.",
    image: "/images/ebde0f20909875bfb504427887ada502c3c38648.jpg",
    imageAlt: "Children learning together",
    overviewKicker: "Program Pillars",
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
      "This page is designed for beneficiary stories, volunteer reflections, and partner testimonials using current placeholder content.",
    image: "/images/b146d95d118b6f0b23c31c4d91959f1e86ca36fc.jpg",
    imageAlt: "Children and community story",
    overviewKicker: "Stories",
    overviewTitle: "Impact is clearest when people can tell it themselves.",
    cardsTitle: "Story collections",
    cardsDescription:
      "Use these categories for real interviews, field notes, before-and-after stories, and volunteer reflections.",
    sections: [
      {
        title: "Beneficiary journeys",
        body: "Dummy copy for stories about families receiving education support, welfare assistance, or empowerment resources.",
      },
      {
        title: "Volunteer reflections",
        body: "Placeholder text for people sharing what they learned while giving time, skills, or field support.",
      },
      {
        title: "Partner perspectives",
        body: "Dummy content for organizations explaining why they collaborate with the foundation.",
      },
    ],
    cards: [
      {
        title: "Family journeys",
        description:
          "Dummy story copy for families rebuilding confidence through practical support and encouragement.",
      },
      {
        title: "Volunteer voices",
        description:
          "Placeholder text for reflections from people who give time and professional skills.",
      },
      {
        title: "Community wins",
        description:
          "Dummy content for milestones achieved through local collaboration and consistent follow-up.",
      },
    ],
    ctaLabel: "Become Part of a Story",
    ctaHref: "/volunteer",
  },
  volunteer: {
    eyebrow: "Get Involved",
    title: "Volunteer your time, skills, and care",
    description:
      "A public volunteer page for signups, opportunities, and orientation details. All content here is placeholder copy.",
    image: "/images/07d4e4d51d8482bb57eaa668e61381bad9aadb64.jpg",
    imageAlt: "Volunteers and children celebrating",
    overviewKicker: "Volunteer Path",
    overviewTitle: "Give support in ways that match your availability.",
    cardsTitle: "Ways to volunteer",
    cardsDescription:
      "Replace these blocks with real volunteer roles, requirements, and onboarding instructions.",
    sections: [
      {
        title: "Apply",
        body: "Dummy copy for submitting interest, sharing availability, and selecting preferred volunteer areas.",
      },
      {
        title: "Get oriented",
        body: "Placeholder text for training, safeguarding expectations, field conduct, and program briefing.",
      },
      {
        title: "Serve consistently",
        body: "Dummy content for joining outreach days, remote support, campaign work, or professional advisory teams.",
      },
    ],
    cards: [
      {
        title: "Field support",
        description:
          "Dummy text for event assistance, outreach days, community visits, and logistics support.",
      },
      {
        title: "Professional skills",
        description:
          "Placeholder copy for design, finance, education, health, legal, technology, and operations support.",
      },
      {
        title: "Remote advocacy",
        description:
          "Dummy content for awareness campaigns, fundraising, storytelling, research, and donor updates.",
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
    image: "/images/message-children-generated.png",
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
    title: "Moments from programs, outreach, and community life",
    description:
      "A placeholder gallery page using existing images until real albums, captions, and event photography are ready.",
    image: "/images/a3ecc4c3dc7dd5d41521f02dad48e05a77067ce5.jpg",
    imageAlt: "Children in the community",
    overviewKicker: "Albums",
    overviewTitle: "Visual documentation of care, service, and community.",
    cardsTitle: "Gallery categories",
    cardsDescription:
      "Use these sections for real photo collections, captions, dates, and event locations.",
    sections: [
      {
        title: "Outreach days",
        body: "Dummy text for field visits, distribution activities, volunteer teams, and community gatherings.",
      },
      {
        title: "Learning moments",
        body: "Placeholder content for school programs, tutoring, mentorship, and education support.",
      },
      {
        title: "Community portraits",
        body: "Dummy copy for respectful portraits, family moments, and partner documentation.",
      },
    ],
    cards: [
      {
        title: "Outreach photos",
        description:
          "Dummy text for event albums, community visits, and field documentation.",
      },
      {
        title: "Program moments",
        description:
          "Placeholder copy for education, women empowerment, welfare, and training activities.",
      },
      {
        title: "Partner highlights",
        description:
          "Dummy content for donors, sponsors, volunteers, and local collaborators.",
      },
    ],
  },
  donate: {
    eyebrow: "Donate",
    title: "Give toward practical hope and lasting support",
    description:
      "Your generosity makes every programme, outreach, and welfare package possible. Every contribution — no matter the size — goes directly toward strengthening families and building brighter futures.",
    image: "/images/closing-cta-bg-generated.png",
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
      "Use this page for upcoming outreach events, fundraisers, trainings, and community activities with dummy listings.",
    image: "/images/a71acae314d01270a85bf4733d98aa5afb33aff4.jpg",
    imageAlt: "Community outreach event",
    overviewKicker: "Event Calendar",
    overviewTitle: "Planned moments for service, learning, and partnership.",
    cardsTitle: "Upcoming event types",
    cardsDescription:
      "Replace these placeholders with event dates, registration links, venues, and participation requirements.",
    sections: [
      {
        title: "Outreach events",
        body: "Dummy copy for field visits, school support days, welfare distributions, and community engagement.",
      },
      {
        title: "Volunteer sessions",
        body: "Placeholder text for orientation, training, safeguarding briefings, and planning meetings.",
      },
      {
        title: "Fundraising moments",
        body: "Dummy content for donor briefings, dinners, campaigns, and partner appreciation events.",
      },
    ],
    cards: [
      {
        title: "Community outreach day",
        description:
          "Placeholder listing for an upcoming local service event with volunteers and partners.",
      },
      {
        title: "Volunteer orientation",
        description:
          "Dummy event copy for onboarding new volunteers and explaining program expectations.",
      },
      {
        title: "Fundraising dinner",
        description:
          "Placeholder content for donor engagement, stories from the field, and program updates.",
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
      "This placeholder policy explains how privacy content can be structured before final legal review.",
    sections: [
      {
        title: "Information we collect",
        body: "Dummy text describing contact details, donation records, volunteer information, and website usage data.",
      },
      {
        title: "How we use information",
        body: "Placeholder copy for communication, program administration, donor updates, and service improvement.",
      },
      {
        title: "Your choices",
        body: "Dummy text describing opt-out requests, record updates, and contact preferences.",
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    description:
      "This placeholder terms page can be replaced with final website usage rules and organization-specific provisions.",
    sections: [
      {
        title: "Website use",
        body: "Dummy text explaining acceptable use of website content, forms, and public resources.",
      },
      {
        title: "Content accuracy",
        body: "Placeholder copy noting that information may change as programs, events, and policies evolve.",
      },
      {
        title: "Limitation of liability",
        body: "Dummy text reserved for final legal language from the foundation’s advisors.",
      },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    description:
      "This placeholder cookie policy gives the page a complete design while tracking details are finalized.",
    sections: [
      {
        title: "What cookies are",
        body: "Dummy text explaining browser cookies, local storage, and similar technologies.",
      },
      {
        title: "How cookies may be used",
        body: "Placeholder copy for analytics, preferences, security, and site performance.",
      },
      {
        title: "Managing cookies",
        body: "Dummy text describing browser controls and visitor choices.",
      },
    ],
  },
};
