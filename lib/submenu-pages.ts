import type {
  PublicPageCard,
  PublicPageData,
  PublicPageSection,
} from "@/components/common/public-page";

const defaultImage = "/images/generated/foundation-outreach-branded.png";
const images = {
  community: "/images/generated/foundation-outreach-branded.png",
  children: "/images/generated/foundation-child-welfare-branded.png",
  education: "/images/generated/foundation-education-branded.png",
  healthcare: "/images/generated/foundation-healthcare-branded.png",
  foodRelief: "/images/generated/foundation-food-relief-branded.png",
  partners: "/images/generated/foundation-partners-branded.png",
  volunteers: "/images/generated/foundation-volunteers-branded.png",
  womenSkills: "/images/generated/foundation-women-skills-branded.png",
  family: "/images/generated/foundation-child-welfare-branded.png",
  leadership: "/images/new/chief.a.u.achebe_20220403_p_2808307974990542593_8_2808307969093477935.webp.jpeg",
  outreach: "/images/generated/foundation-food-relief-branded.png",
  stories: "/images/generated/foundation-volunteers-branded.png",
  media: "/images/generated/foundation-partners-branded.png",
  support: "/images/generated/foundation-food-relief-branded.png",
  aada: "/images/generated/foundation-digital-academy-branded.png",
};

function themeFor(eyebrow: string): PublicPageData["theme"] {
  if (eyebrow === "AADA") return "aada";
  if (eyebrow === "Support Our Work" || eyebrow === "Get Involved") {
    return "support";
  }
  if (eyebrow === "Media Centre") return "media";
  if (eyebrow === "Legal") return "legal";
  if (eyebrow === "Our Work & Impact") return "impact";
  return "default";
}

function layoutFor(eyebrow: string, title: string): PublicPageData["layout"] {
  const lower = title.toLowerCase();
  if (lower === "downloads") return "downloads";
  if (lower === "videos") return "videos";
  if (eyebrow === "Legal") return "manifesto";
  if (eyebrow === "Who We Are") return "manifesto";
  if (eyebrow === "AADA" || eyebrow === "What We Do") return "approach";
  if (eyebrow === "Support Our Work" || eyebrow === "Get Involved") {
    return "approach";
  }
  if (eyebrow === "Media Centre") return "news";
  if (lower.includes("reports") || lower.includes("news") || lower.includes("blog")) {
    return "news";
  }
  if (eyebrow === "Media Centre" || eyebrow === "Our Work & Impact") {
    return "stories";
  }
  return "split";
}

function imageFor(eyebrow: string, title: string) {
  const lower = title.toLowerCase();
  if (eyebrow === "AADA") return images.aada;
  if (eyebrow === "Media Centre") return images.media;
  if (eyebrow === "Support Our Work" || eyebrow === "Get Involved") {
    return images.volunteers;
  }
  if (eyebrow === "Legal") return images.leadership;
  if (eyebrow === "Our Work & Impact") return images.stories;
  if (lower.includes("child") || lower.includes("orphanage")) {
    return images.children;
  }
  if (lower.includes("education") || lower.includes("scholarship")) {
    return images.education;
  }
  if (lower.includes("mother") || lower.includes("maternal")) {
    return images.family;
  }
  if (lower.includes("women") || lower.includes("skills")) {
    return images.womenSkills;
  }
  if (lower.includes("health")) {
    return images.healthcare;
  }
  if (lower.includes("relief")) {
    return images.foodRelief;
  }
  if (lower.includes("partner")) {
    return images.partners;
  }
  if (lower.includes("volunteer")) {
    return images.volunteers;
  }
  if (
    lower.includes("founder") ||
    lower.includes("board") ||
    lower.includes("leadership") ||
    lower.includes("governance")
  ) {
    return images.leadership;
  }
  return defaultImage;
}

function videosFor(
  eyebrow: string,
  title: string,
  thumbnail: string
): PublicPageData["videos"] {
  if (eyebrow !== "What We Do") return undefined;

  return [
    {
      title: `${title} Video`,
      description:
        "Temporary programme video placeholder for review. This space is reserved for a formal programme video that can explain objectives, target beneficiaries, implementation approach, safeguarding measures, expected outcomes, and accountability standards for Nigerian government review, approval, or further guidance where applicable.",
      category: eyebrow,
      duration: "Placeholder",
      thumbnail,
      href: "https://www.youtube.com/watch?v=Y-x0efG1seA",
    },
  ];
}

function profileFor(title: string) {
  const lower = title.toLowerCase();
  const fallback = {
    audience: `people connected to ${title.toLowerCase()} across the Foundation's work`,
    action: `clear planning, field coordination, trusted partnerships, communications, and follow-up specific to ${title.toLowerCase()}`,
    outcome: "stronger service delivery, better accountability, and clearer public understanding of the Foundation's work",
    cardOne: "Focused need",
    cardOneDescription: `This page explains the specific need behind ${title.toLowerCase()} and why it matters to the Foundation's mission.`,
    cardTwo: "Planned response",
    cardTwoDescription: `The response is organised around the activities, partners, and beneficiary support required for ${title.toLowerCase()}.`,
    cardThree: "Expected result",
    cardThreeDescription:
      "Progress is measured through documented activities, community feedback, beneficiary outcomes, and approved reports.",
  };

  if (lower.includes("food") || lower.includes("relief")) {
    return {
      audience:
        "families facing food insecurity, emergency hardship, displacement, or short-term household crisis",
      action:
        "food packs, hygiene essentials, emergency care items, rapid needs assessment, and dignified distribution through local community contacts",
      outcome:
        "reduced immediate hunger, more stable households, and a safer bridge between crisis response and longer-term family support",
      cardOne: "Emergency food support",
      cardOneDescription:
        "Prioritises households that need urgent meals, basic supplies, and immediate relief during difficult periods.",
      cardTwo: "Dignified distribution",
      cardTwoDescription:
        "Relief is planned with community leaders so support reaches families respectfully and without unnecessary exposure.",
      cardThree: "Follow-up care",
      cardThreeDescription:
        "Families can be connected to education, health, maternal care, or skills programmes after the immediate crisis is addressed.",
    };
  }

  if (lower.includes("maternal") || lower.includes("mother")) {
    return {
      audience:
        "pregnant women, nursing mothers, newborns, infants, and families who need practical maternal or early-childhood support. Priority is given to vulnerable households where basic care items, transport to healthcare, nutrition, or reliable family guidance may be difficult to access.",
      action:
        "the Foundation can provide pregnancy support, newborn care items, hygiene supplies, nutrition assistance, health referrals, family wellbeing guidance, and community healthcare outreach. Field teams can identify needs through community contacts, confirm the most urgent cases, distribute practical support respectfully, and connect mothers to clinics, counsellors, or wider family-support programmes where needed.",
      outcome:
        "the goal is safer mothers, healthier babies, better family stability, and stronger early care for vulnerable households. Practical success can be measured through the number of mothers reached, newborn kits distributed, referrals completed, follow-up visits made, and families connected to longer-term support.",
      cardOne: "Pregnancy support",
      cardOneDescription:
        "Provides practical assistance for expectant mothers, especially those facing financial or social vulnerability.",
      cardTwo: "Newborn care",
      cardTwoDescription:
        "Supports babies and caregivers with essential care items, referrals, and family wellbeing checks.",
      cardThree: "Family stability",
      cardThreeDescription:
        "Connects mothers to wider support such as relief, skills, counselling, or community health services.",
    };
  }

  if (lower.includes("child") || lower.includes("orphanage")) {
    return {
      audience:
        "children in vulnerable households, orphanages, low-resource schools, and unsafe or unstable care situations",
      action:
        "school support, nutrition assistance, care packages, mentorship, safe visits, and child-centred partnerships",
      outcome:
        "children who are safer, better supported in school, better nourished, and more confident about their future",
      cardOne: "Child safety",
      cardOneDescription:
        "Keeps dignity, protection, consent, and safeguarding at the centre of every child-focused activity.",
      cardTwo: "Education and care",
      cardTwoDescription:
        "Combines learning materials, welfare support, mentorship, and practical care where children need it most.",
      cardThree: "Stable support network",
      cardThreeDescription:
        "Works with caregivers, schools, orphanages, and community leaders so help is consistent and traceable.",
    };
  }

  if (lower.includes("education") || lower.includes("scholarship")) {
    return {
      audience:
        "children, teenagers, and young adults whose learning is limited by poverty, school costs, materials, or lack of guidance",
      action:
        "school supplies, scholarships, tutoring, mentorship, digital learning, and support that helps learners remain in school",
      outcome:
        "higher school retention, stronger confidence, better academic participation, and improved future opportunity",
      cardOne: "Learning access",
      cardOneDescription:
        "Removes practical barriers such as materials, fees, devices, uniforms, or learning support gaps.",
      cardTwo: "Mentorship",
      cardTwoDescription:
        "Pairs learners with guidance, encouragement, and role models who help them stay focused.",
      cardThree: "Future pathways",
      cardThreeDescription:
        "Connects education support to skills, AADA, scholarships, and long-term career preparation.",
    };
  }

  if (lower.includes("women") || lower.includes("single parents")) {
    return {
      audience:
        "women, caregivers, single parents, and households where economic pressure limits family stability",
      action:
        "skills training, enterprise guidance, peer support, relief, financial literacy, and practical empowerment activities",
      outcome:
        "stronger income potential, more confident caregivers, and households that can better support children and dependants",
      cardOne: "Skills and confidence",
      cardOneDescription:
        "Equips participants with practical skills and the confidence to use them productively.",
      cardTwo: "Household stability",
      cardTwoDescription:
        "Supports caregivers in ways that improve food security, education access, and family wellbeing.",
      cardThree: "Economic independence",
      cardThreeDescription:
        "Links training to income generation, small enterprise, mentorship, and community support.",
    };
  }

  if (lower.includes("youth") || lower.includes("skills")) {
    return {
      audience:
        "young Africans seeking practical skills, direction, employability, mentorship, and productive livelihood pathways",
      action:
        "vocational training, digital education, mentorship, practical projects, entrepreneurship support, and career readiness",
      outcome:
        "young people with stronger skills, clearer direction, improved employability, and greater self-reliance",
      cardOne: "Practical training",
      cardOneDescription:
        "Focuses on hands-on skills that can be applied to work, business, or community service.",
      cardTwo: "Mentor support",
      cardTwoDescription:
        "Guides young people through discipline, confidence, portfolio building, and opportunity search.",
      cardThree: "Income pathways",
      cardThreeDescription:
        "Connects skills to jobs, freelancing, enterprise, apprenticeships, or community-based livelihood options.",
    };
  }

  if (lower.includes("health")) {
    return {
      audience:
        "families and communities with limited access to basic healthcare information, screening, referrals, and preventive support",
      action:
        "health awareness, screenings, referral partnerships, maternal-child guidance, hygiene support, and wellness outreach",
      outcome:
        "earlier detection of health needs, better health awareness, stronger referral access, and healthier communities",
      cardOne: "Preventive care",
      cardOneDescription:
        "Promotes awareness and early action before manageable health concerns become severe.",
      cardTwo: "Local access",
      cardTwoDescription:
        "Brings health information and support closer to underserved communities through outreach.",
      cardThree: "Referral support",
      cardThreeDescription:
        "Connects families to appropriate providers, partners, or follow-up services where needed.",
    };
  }

  if (lower.includes("aada") || lower.includes("digital") || lower.includes("career") || lower.includes("entrepreneurship") || lower.includes("learning communities") || lower.includes("mentorship")) {
    return {
      audience:
        "young Africans who need practical digital skills, mentorship, confidence, and access to meaningful work",
      action:
        "structured digital courses, mentors, project-based learning, scholarships, community support, and career or enterprise pathways",
      outcome:
        "graduates who can build portfolios, pursue jobs or freelance work, launch ventures, and support development in their communities",
      cardOne: "Market-ready skills",
      cardOneDescription:
        "Training focuses on practical tools, projects, and outcomes that learners can use immediately.",
      cardTwo: "Guided growth",
      cardTwoDescription:
        "Mentors and learning communities help students remain accountable and professionally directed.",
      cardThree: "Work pathways",
      cardThreeDescription:
        "AADA connects learning to employment, entrepreneurship, internships, and community problem-solving.",
    };
  }

  if (lower.includes("news") || lower.includes("blog") || lower.includes("press") || lower.includes("video") || lower.includes("download") || lower.includes("publication")) {
    return {
      audience:
        "donors, partners, volunteers, media contacts, beneficiaries, and the public seeking accurate Foundation updates",
      action:
        "approved announcements, field stories, photos, videos, reports, downloads, publications, and campaign information",
      outcome:
        "clearer public communication, stronger transparency, and better access to Foundation resources",
      cardOne: "Approved updates",
      cardOneDescription:
        "Publishes verified information about programmes, campaigns, milestones, and organisational developments.",
      cardTwo: "Responsible storytelling",
      cardTwoDescription:
        "Shares stories and media with dignity, consent, safeguarding, and factual accuracy.",
      cardThree: "Public resources",
      cardThreeDescription:
        "Makes downloads, reports, media materials, and publications easier for visitors to find.",
    };
  }

  if (lower.includes("partner") || lower.includes("corporate")) {
    return {
      audience:
        "organisations, companies, institutions, donors, and networks that want to support measurable community impact",
      action:
        "programme sponsorship, technical support, employee volunteering, AADA cohorts, resource donations, and strategic collaboration",
      outcome:
        "larger programme reach, stronger delivery capacity, and partnerships tied to visible community outcomes",
      cardOne: "Shared priorities",
      cardOneDescription:
        "Partnerships are shaped around aligned values, real community needs, and clear impact goals.",
      cardTwo: "Practical contribution",
      cardTwoDescription:
        "Partners can support with funding, expertise, equipment, staff time, facilities, or opportunity pipelines.",
      cardThree: "Visible results",
      cardThreeDescription:
        "Partnership outcomes can be tracked through reports, stories, field updates, and beneficiary milestones.",
    };
  }

  if (lower.includes("donor") || lower.includes("giving") || lower.includes("sponsor") || lower.includes("fundraise")) {
    return {
      audience:
        "individuals, families, groups, companies, and supporters who want to fund practical help and long-term opportunity",
      action:
        "one-time gifts, recurring giving, project sponsorship, fundraising campaigns, corporate support, and directed donations",
      outcome:
        "more children supported, more families stabilised, more learners trained, and more communities reached",
      cardOne: "Clear giving route",
      cardOneDescription:
        "Supporters can choose the area of need they want to fund and understand what their gift supports.",
      cardTwo: "Practical use",
      cardTwoDescription:
        "Donations go toward supplies, training, outreach logistics, beneficiary support, and programme delivery.",
      cardThree: "Impact feedback",
      cardThreeDescription:
        "The Foundation can report outcomes through updates, field evidence, stories, and annual reporting.",
    };
  }

  if (lower.includes("volunteer") || lower.includes("internship") || lower.includes("careers")) {
    return {
      audience:
        "people who want to contribute time, professional skills, field support, learning energy, or career commitment",
      action:
        "role matching, orientation, safeguarding expectations, programme support, communications, field assistance, and professional service",
      outcome:
        "stronger operations, better programme delivery, skilled service, and a wider network of people supporting the mission",
      cardOne: "Role clarity",
      cardOneDescription:
        "Each person should understand expectations, time commitment, conduct, and safeguarding responsibilities.",
      cardTwo: "Useful contribution",
      cardTwoDescription:
        "Support is matched to real needs such as education, AADA, media, logistics, health, or administration.",
      cardThree: "Responsible service",
      cardThreeDescription:
        "Every role should protect beneficiaries, respect dignity, and strengthen programme delivery.",
    };
  }

  if (lower.includes("founder") || lower.includes("board") || lower.includes("governance") || lower.includes("council") || lower.includes("values") || lower.includes("mission") || lower.includes("vision") || lower.includes("story")) {
    return {
      audience:
        "visitors, partners, donors, volunteers, and community members who need to understand the Foundation's identity and leadership",
      action:
        "clear communication of the Foundation's origin, values, governance, responsibilities, leadership roles, and long-term direction",
      outcome:
        "greater trust, stronger accountability, clearer decision-making, and a public mission people can evaluate",
      cardOne: "Identity",
      cardOneDescription:
        "Explains the values, story, and convictions that shape the Foundation's service.",
      cardTwo: "Accountability",
      cardTwoDescription:
        "Shows how leadership, governance, and oversight support responsible nonprofit work.",
      cardThree: "Direction",
      cardThreeDescription:
        "Clarifies where the Foundation is going and how programmes connect to that long-term vision.",
    };
  }

  return fallback;
}

function sectionsFor({
  title,
  eyebrow,
}: {
  title: string;
  eyebrow: string;
}): PublicPageSection[] {
  const profile = profileFor(title);

  if (eyebrow === "AADA") {
    return [
      { title: "Who this serves", body: profile.audience },
      {
        title: "What AADA provides",
        body: profile.action,
      },
      {
        title: "Expected outcome",
        body: profile.outcome,
      },
    ];
  }

  if (eyebrow === "Support Our Work") {
    return [
      { title: "Who this support reaches", body: profile.audience },
      {
        title: "How support is used",
        body: profile.action,
      },
      {
        title: "What changes",
        body: profile.outcome,
      },
    ];
  }

  if (eyebrow === "Legal") {
    return [
      {
        title: "Who this protects",
        body: "This policy protects beneficiaries, children, families, volunteers, staff, donors, partners, and community members connected to the Foundation's work.",
      },
      {
        title: "Required standard",
        body: `${title} sets expectations for conduct, documentation, reporting, decision-making, and accountability in the specific area it governs.`,
      },
      {
        title: "Review process",
        body: "Policy wording should remain under board, legal, safeguarding, and governance review so public commitments stay accurate and enforceable.",
      },
    ];
  }

  if (eyebrow === "Media Centre") {
    return [
      { title: "Who this informs", body: profile.audience },
      {
        title: "What is published",
        body: profile.action,
      },
      {
        title: "Why it matters",
        body: profile.outcome,
      },
    ];
  }

  return [
    { title: "Who this serves", body: profile.audience },
    {
      title: "What we do",
      body: profile.action,
    },
    {
      title: "Expected impact",
      body: profile.outcome,
    },
  ];
}

function cardsFor(eyebrow: string, title: string): PublicPageCard[] {
  if (eyebrow === "Legal") {
    return [
      {
        title: "Protection",
        description:
          "Policies help protect children, families, volunteers, staff, partners, donors, and community members.",
      },
      {
        title: "Accountability",
        description:
          "Clear standards reduce ambiguity and support responsible decisions across Foundation work.",
      },
      {
        title: "Review",
        description:
          "Final policies should be reviewed by appropriate legal, safeguarding, and governance advisers.",
      },
    ];
  }

  const profile = profileFor(title);

  return [
    {
      title: profile.cardOne,
      description: profile.cardOneDescription,
    },
    {
      title: profile.cardTwo,
      description: profile.cardTwoDescription,
    },
    {
      title: profile.cardThree,
      description: profile.cardThreeDescription,
    },
  ];
}

function cardsTitleFor(eyebrow: string, title: string) {
  if (eyebrow === "AADA") return "Inside this AADA pathway";
  if (eyebrow === "Support Our Work") {
    const supportTitles: Record<string, string> = {
      "Sponsor a Child": "What child sponsorship supports",
      "Sponsor a Mother": "How mother sponsorship helps",
      "Support Education": "What education support provides",
      "Support AADA": "How AADA support is used",
      "Corporate Giving": "How corporate support works",
      "Monthly Giving": "Why monthly giving matters",
      "Legacy Giving": "How legacy giving continues impact",
    };

    return supportTitles[title] ?? "How this support route works";
  }
  if (eyebrow === "Legal") return "What this policy protects";
  if (eyebrow === "Media Centre") return "How this resource will be used";
  if (eyebrow === "Our Work & Impact") return "How impact is documented";
  if (eyebrow === "Get Involved") return "Ways this involvement works";
  if (eyebrow === "Who We Are") return "What this means for the Foundation";
  return "How this programme is structured";
}

function cardsDescriptionFor(eyebrow: string, title: string) {
  if (eyebrow === "AADA") {
    return "Each AADA page focuses on training, mentorship, learner progress, and the employment pathway behind the academy.";
  }
  if (eyebrow === "Support Our Work") {
    const supportDescriptions: Record<string, string> = {
      "Sponsor a Child":
        "Child sponsorship can fund school access, learning materials, welfare support, nutrition, mentoring, and other verified needs that help a child stay safe and keep learning.",
      "Sponsor a Mother":
        "Mother sponsorship can support maternal care, newborn essentials, family relief, health referrals, and practical assistance that strengthens household stability.",
      "Support Education":
        "Education support can provide scholarships, books, uniforms, digital learning access, tutoring, mentorship, and school-based interventions for children and young people.",
      "Support AADA":
        "AADA support can fund digital courses, instructors, devices, internet access, mentorship, career preparation, and entrepreneurship pathways for learners.",
      "Corporate Giving":
        "Corporate giving can align company resources with community projects, skills programmes, outreach work, sponsorship commitments, and transparent impact reporting.",
      "Monthly Giving":
        "Monthly giving provides predictable support that helps the Foundation plan programmes, respond to verified needs, and sustain beneficiary follow-up.",
      "Legacy Giving":
        "Legacy giving allows long-term gifts to support future community programmes, education access, family stability, and responsible humanitarian service.",
    };

    return (
      supportDescriptions[title] ??
      "This support route explains the specific need, how assistance is applied, and how the Foundation can document outcomes responsibly."
    );
  }
  if (eyebrow === "Legal") {
    return "Legal and policy pages make governance standards visible while keeping formal wording subject to appropriate review.";
  }
  if (eyebrow === "Media Centre") {
    return "Media pages separate news, stories, downloads, publications, photos, and videos into clearer destinations.";
  }
  if (eyebrow === "Our Work & Impact") {
    return "Impact pages create separate destinations for reports, communities, stories, scholarships, and visual documentation.";
  }
  if (eyebrow === "Get Involved") {
    return "Get Involved pages clarify the path for volunteers, donors, partners, interns, fundraisers, and sponsors.";
  }
  if (eyebrow === "Who We Are") {
    return "Who We Are pages separate identity, values, leadership, governance, and founder messaging into focused sections.";
  }
  return "Each programme page is tailored to its service area, target audience, delivery model, and expected outcomes.";
}

function makePage({
  title,
  eyebrow,
  description,
  focus,
  ctaLabel = "Contact Us",
  ctaHref = "/contact",
  image,
  sections,
  cards,
  downloads,
  videos,
}: {
  title: string;
  eyebrow: string;
  description: string;
  focus: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;
  sections?: PublicPageSection[];
  cards?: PublicPageCard[];
  downloads?: PublicPageData["downloads"];
  videos?: PublicPageData["videos"];
}): PublicPageData {
  const pageImage = image ?? imageFor(eyebrow, title);

  return {
    eyebrow,
    title,
    description,
    image: pageImage,
    imageAlt: `${title} at Achebe Hope Foundation`,
    layout: layoutFor(eyebrow, title),
    theme: themeFor(eyebrow),
    overviewKicker: "Overview",
    overviewTitle: focus,
    cardsTitle: cardsTitleFor(eyebrow, title),
    cardsDescription: cardsDescriptionFor(eyebrow, title),
    sections: sections ?? sectionsFor({ title, eyebrow }),
    cards: cards ?? cardsFor(eyebrow, title),
    ctaLabel,
    ctaHref,
    downloads,
    videos: videos ?? videosFor(eyebrow, title, pageImage),
  };
}

export const submenuPages: Record<string, PublicPageData> = {
  "about-achebe-hope-foundation": makePage({
    eyebrow: "Who We Are",
    title: "About Achebe Hope Foundation",
    description:
      "Achebe Hope Foundation strengthens underserved families and communities through compassion, education, healthcare, humanitarian support, and sustainable development.",
    focus: "A registered nonprofit built around dignity, family stability, and long-term opportunity.",
    ctaLabel: "Explore Our Work",
    ctaHref: "/projects",
  }),
  "our-story": makePage({
    eyebrow: "Who We Are",
    title: "Our Story",
    description:
      "Our story is rooted in service, heritage, and the belief that legacy is proven through action that improves lives.",
    focus: "From compassion to structured community impact.",
  }),
  mission: makePage({
    eyebrow: "Who We Are",
    title: "Mission",
    description:
      "Our mission is to empower underserved communities, strengthen families, and create practical opportunities for lasting change.",
    focus: "Clear service priorities that guide every programme.",
  }),
  vision: makePage({
    eyebrow: "Who We Are",
    title: "Vision",
    description:
      "Our vision is an Africa where families are stable, children are protected and educated, women are empowered, and young people can build dignified futures.",
    focus: "A future where hope becomes an expectation, not an exception.",
  }),
  "core-values": makePage({
    eyebrow: "Who We Are",
    title: "Our Core Values",
    description:
      "Compassion, dignity, accountability, community leadership, service, and sustainability shape how Achebe Hope Foundation works.",
    focus: "Values that keep the Foundation people-first and accountable.",
  }),
  founders: makePage({
    eyebrow: "Who We Are",
    title: "The Founders",
    description:
      "The founders provide the vision, service ethic, and leadership commitment behind Achebe Hope Foundation.",
    focus: "Leadership rooted in heritage, responsibility, and action.",
  }),
  "founders-letter": makePage({
    eyebrow: "Who We Are",
    title: "Founder's Letter",
    description:
      "A message from the founder sharing the conviction behind the Foundation and the call to keep serving communities with dignity.",
    focus: "The personal vision behind the public mission.",
  }),
  "leadership-governance": makePage({
    eyebrow: "Who We Are",
    title: "Leadership & Governance",
    description:
      "Leadership and governance structures help the Foundation operate with accountability, transparency, and responsible stewardship.",
    focus: "Strong governance for credible nonprofit work.",
  }),
  "board-directors": makePage({
    eyebrow: "Who We Are",
    title: "Board of Directors",
    description:
      "The Board of Directors provides oversight, strategic guidance, and accountability for the Foundation's work.",
    focus: "Oversight that protects mission, trust, and impact.",
  }),
  "advisory-council": makePage({
    eyebrow: "Who We Are",
    title: "Advisory Council",
    description:
      "The Advisory Council supports the Foundation with expertise, guidance, partnerships, and sector knowledge.",
    focus: "Specialist guidance for stronger programmes.",
  }),
  partners: makePage({
    eyebrow: "Who We Are",
    title: "Our Partners",
    description:
      "Partners help the Foundation expand reach, strengthen programmes, and serve more families with practical support.",
    focus: "Collaboration that increases community impact.",
    ctaLabel: "Partner With Us",
  }),
  "community-development": makePage({
    eyebrow: "What We Do",
    title: "Community Development",
    description:
      "Community development work supports local needs through practical projects, partnerships, outreach, and sustainable solutions.",
    focus: "Community-led work that responds to real local priorities.",
  }),
  education: makePage({
    eyebrow: "What We Do",
    title: "Education",
    description:
      "Education programmes support children and young people with learning materials, scholarships, school interventions, mentorship, and digital skills pathways.",
    focus: "Helping learners stay in school and build better futures.",
  }),
  "maternal-child-care": makePage({
    eyebrow: "What We Do",
    title: "Maternal & Child Care",
    description:
      "This programme supports pregnancy care, newborn care, mothers, healthcare outreach, family wellbeing, and child safety.",
    focus: "Protecting mothers and children through practical care.",
  }),
  "single-parents-support": makePage({
    eyebrow: "What We Do",
    title: "Single Parents Support",
    description:
      "Single parents support helps vulnerable caregivers access relief, skills, guidance, and community support.",
    focus: "Strengthening households led by single parents.",
  }),
  "women-empowerment": makePage({
    eyebrow: "What We Do",
    title: "Women Empowerment",
    description:
      "Women empowerment programmes provide practical skills, confidence, mentorship, enterprise support, and pathways to self-reliance.",
    focus: "Equipping women to build income and independence.",
  }),
  "youth-empowerment": makePage({
    eyebrow: "What We Do",
    title: "Youth Empowerment",
    description:
      "Youth empowerment work supports young people with skills, mentorship, digital education, leadership, and career readiness.",
    focus: "Preparing young Africans for productive futures.",
  }),
  "orphanage-support": makePage({
    eyebrow: "What We Do",
    title: "Orphanage Support",
    description:
      "Orphanage support provides welfare, education assistance, care packages, mentorship, and safe childhood interventions.",
    focus: "Supporting vulnerable children with dignity and care.",
  }),
  "community-health-outreach": makePage({
    eyebrow: "What We Do",
    title: "Community Health Outreach",
    description:
      "Health outreach brings awareness, screening, basic care support, and healthcare partnerships closer to underserved communities.",
    focus: "Improving wellbeing through accessible community health support.",
  }),
  "food-humanitarian-relief": makePage({
    eyebrow: "What We Do",
    title: "Food & Humanitarian Relief",
    description:
      "Food and humanitarian relief responds to urgent family needs with dignity, care packages, and timely community support.",
    focus: "Meeting immediate needs while protecting human dignity.",
  }),
  "skills-development": makePage({
    eyebrow: "What We Do",
    title: "Skills Development",
    description:
      "Skills development covers digital, vocational, and practical livelihood training that promotes self-reliance and economic independence.",
    focus: "Turning training into sustainable opportunity.",
  }),
  "about-aada": makePage({
    eyebrow: "AADA",
    title: "About AADA",
    description:
      "Achebe Africa Digital Academy is the Foundation's flagship initiative for digital skills, mentorship, entrepreneurship, and employment pathways.",
    focus: "A long-term response to unemployment and limited digital education.",
    ctaLabel: "Visit AADA",
    ctaHref: "/aada",
  }),
  "digital-courses": makePage({
    eyebrow: "AADA",
    title: "Digital Courses",
    description:
      "AADA digital courses equip learners with practical, market-relevant skills for modern work and entrepreneurship.",
    focus: "Practical courses designed around employability.",
    ctaLabel: "Join the Academy",
    ctaHref: "https://achebecampus.com/",
  }),
  "mentorship-mentors": makePage({
    eyebrow: "AADA",
    title: "Mentorship & Mentors",
    description:
      "Mentors support AADA learners with guidance, accountability, professional insight, and career direction.",
    focus: "Human guidance that helps skills become careers.",
  }),
  scholarships: makePage({
    eyebrow: "AADA",
    title: "Scholarships",
    description:
      "Scholarships help remove financial barriers for promising learners who need access to education and opportunity.",
    focus: "Expanding access for underserved learners.",
    ctaLabel: "Support Scholarships",
    ctaHref: "/donate",
  }),
  "career-opportunities": makePage({
    eyebrow: "AADA",
    title: "Career Opportunities",
    description:
      "Career opportunities help learners move from training into internships, freelance projects, jobs, and professional networks.",
    focus: "Connecting learning to meaningful work.",
  }),
  "entrepreneurship-support": makePage({
    eyebrow: "AADA",
    title: "Entrepreneurship Support",
    description:
      "Entrepreneurship support helps learners turn digital and practical skills into income-generating services and ventures.",
    focus: "Helping skilled learners become self-reliant.",
  }),
  "learning-communities": makePage({
    eyebrow: "AADA",
    title: "Learning Communities",
    description:
      "Learning communities keep learners connected through peer support, challenges, collaboration, and shared resources.",
    focus: "Sustained growth through community.",
  }),
  "success-stories": makePage({
    eyebrow: "AADA",
    title: "Success Stories",
    description:
      "Success stories document learner progress, community outcomes, employment wins, and enterprise growth.",
    focus: "Proof of impact through real journeys.",
  }),
  "partner-with-aada": makePage({
    eyebrow: "AADA",
    title: "Partner With AADA",
    description:
      "Partners can support AADA through sponsorship, mentorship, instructors, equipment, internships, and career pathways.",
    focus: "Partnerships that scale digital opportunity.",
    ctaLabel: "Start a Partnership",
  }),
  "stories-of-hope": makePage({
    eyebrow: "Our Work & Impact",
    title: "Stories of Hope",
    description:
      "Stories of Hope highlight the families, children, women, volunteers, and communities behind the Foundation's work.",
    focus: "Human stories that show why the work matters.",
  }),
  "impact-reports": makePage({
    eyebrow: "Our Work & Impact",
    title: "Impact Reports",
    description:
      "Impact reports document activities, outcomes, community reach, resources deployed, and lessons from the field.",
    focus: "Transparent reporting for donors, partners, and communities.",
  }),
  "communities-reached": makePage({
    eyebrow: "Our Work & Impact",
    title: "Communities Reached",
    description:
      "This page tracks the communities reached through programmes, outreach, relief, education, and health support.",
    focus: "Mapping the Foundation's expanding community footprint.",
  }),
  "hope-success-stories": makePage({
    eyebrow: "Our Work & Impact",
    title: "Hope Success Stories",
    description:
      "Hope Success Stories show practical examples of change made possible through service, partnership, and community participation.",
    focus: "Outcome stories from the Foundation's work.",
  }),
  videos: makePage({
    eyebrow: "Media Centre",
    title: "Videos",
    description:
      "Videos can feature field updates, beneficiary stories, programme highlights, events, and partner messages.",
    focus: "Visual storytelling for transparency and engagement.",
    videos: [
      {
        title: "AADA Skills Training Introduction",
        description:
          "A short overview video for the Achebe Africa Digital Academy, its learning tracks, and the employment problem it addresses.",
        category: "AADA",
        duration: "To be published",
        thumbnail: images.aada,
      },
      {
        title: "Stories of Hope From the Community",
        description:
          "A beneficiary-focused video slot for documenting family support, child care, relief outreach, and community impact.",
        category: "Impact Story",
        duration: "To be published",
        thumbnail: images.stories,
      },
      {
        title: "Education and Child Support Highlights",
        description:
          "A video slot for school interventions, orphanage visits, learning support, and child sponsorship updates.",
        category: "Education",
        duration: "To be published",
        thumbnail: images.children,
      },
      {
        title: "Volunteer and Partner Field Updates",
        description:
          "A media slot for volunteers, corporate partners, mentors, donors, and supporters contributing to Foundation projects.",
        category: "Partners",
        duration: "To be published",
        thumbnail: images.outreach,
      },
    ],
  }),
  "annual-reports": makePage({
    eyebrow: "Our Work & Impact",
    title: "Annual Reports",
    description:
      "Annual reports provide a year-by-year record of programmes, finances, partnerships, milestones, and impact.",
    focus: "A formal record of nonprofit accountability.",
  }),
  "become-a-partner": makePage({
    eyebrow: "Get Involved",
    title: "Become a Partner",
    description:
      "Partners help expand programme reach through funding, expertise, resources, facilities, and community networks.",
    focus: "Partnerships that multiply impact.",
  }),
  "corporate-partnership": makePage({
    eyebrow: "Get Involved",
    title: "Corporate Partnership",
    description:
      "Corporate partners can sponsor projects, support AADA cohorts, fund outreach, provide resources, or volunteer expertise.",
    focus: "Corporate social responsibility tied to measurable outcomes.",
  }),
  "sponsor-a-project": makePage({
    eyebrow: "Get Involved",
    title: "Sponsor a Project",
    description:
      "Project sponsorship funds specific interventions in education, child welfare, health outreach, relief, skills training, or community development.",
    focus: "Targeted giving for visible community outcomes.",
    ctaLabel: "Sponsor Now",
    ctaHref: "/donate",
  }),
  "become-a-donor": makePage({
    eyebrow: "Get Involved",
    title: "Become a Donor",
    description:
      "Donors provide the financial support that makes relief, education, care, training, and community outreach possible.",
    focus: "Giving that strengthens families and opens opportunity.",
    ctaLabel: "Donate",
    ctaHref: "/donate",
  }),
  "fundraise-for-us": makePage({
    eyebrow: "Get Involved",
    title: "Fundraise for Us",
    description:
      "Supporters can raise awareness and funds for projects, scholarships, AADA, child support, and family welfare programmes.",
    focus: "Community-powered fundraising for practical impact.",
  }),
  "internship-opportunities": makePage({
    eyebrow: "Get Involved",
    title: "Internship Opportunities",
    description:
      "Internship opportunities allow emerging professionals to contribute skills while learning about nonprofit operations and community impact.",
    focus: "Purpose-driven experience for young professionals.",
  }),
  careers: makePage({
    eyebrow: "Get Involved",
    title: "Careers",
    description:
      "Careers at the Foundation support programme delivery, operations, communications, partnerships, field work, and administration.",
    focus: "Work that directly supports community transformation.",
  }),
  news: makePage({
    eyebrow: "Media Centre",
    title: "News",
    description:
      "News updates cover announcements, programme milestones, partnerships, campaigns, and Foundation developments.",
    focus: "Current updates from Achebe Hope Foundation.",
  }),
  blog: makePage({
    eyebrow: "Media Centre",
    title: "Blog",
    description:
      "The blog can share reflections, field notes, educational articles, partner perspectives, and community development insights.",
    focus: "Thoughtful updates from the Foundation's work.",
  }),
  downloads: makePage({
    eyebrow: "Media Centre",
    title: "Downloads",
    description:
      "Downloads can include brochures, reports, policies, programme documents, forms, media kits, and partner resources.",
    focus: "A central library for public documents.",
    downloads: [
      {
        title: "Achebe Hope Foundation Profile",
        description:
          "A downloadable organisation profile for donors, partners, media contacts, and community stakeholders.",
        category: "Foundation",
        fileType: "PDF",
      },
      {
        title: "AADA Programme Brochure",
        description:
          "A summary brochure for AADA courses, mentorship, scholarships, career pathways, and partner opportunities.",
        category: "AADA",
        fileType: "PDF",
      },
      {
        title: "Volunteer Information Pack",
        description:
          "A practical guide for volunteer roles, onboarding expectations, safeguarding requirements, and areas of service.",
        category: "Get Involved",
        fileType: "PDF",
      },
      {
        title: "Corporate Partnership Deck",
        description:
          "A partner-facing document for companies interested in project sponsorship, AADA cohorts, or corporate giving.",
        category: "Partnership",
        fileType: "PDF",
      },
      {
        title: "Annual Impact Report",
        description:
          "A yearly reporting document for programme outcomes, communities reached, stories, and financial accountability.",
        category: "Reports",
        fileType: "PDF",
      },
    ],
  }),
  publications: makePage({
    eyebrow: "Media Centre",
    title: "Publications",
    description:
      "Publications include reports, briefs, guides, annual reviews, programme documents, and impact materials.",
    focus: "Documented knowledge and accountability resources.",
  }),
  "sponsor-a-child": makePage({
    eyebrow: "Support Our Work",
    title: "Sponsor a Child",
    description:
      "Child sponsorship supports education, nutrition, care, protection, school materials, and brighter opportunities for vulnerable children.",
    focus: "Consistent care that helps a child grow safely.",
    ctaLabel: "Sponsor a Child",
    ctaHref: "/donate",
  }),
  "sponsor-a-mother": makePage({
    eyebrow: "Support Our Work",
    title: "Sponsor a Mother",
    description:
      "Mother sponsorship supports maternal care, newborn wellbeing, family stability, health outreach, and practical relief.",
    focus: "Supporting mothers strengthens entire families.",
    ctaLabel: "Sponsor a Mother",
    ctaHref: "/donate",
  }),
  "support-education": makePage({
    eyebrow: "Support Our Work",
    title: "Support Education",
    description:
      "Education support funds school materials, scholarships, mentorship, learning interventions, and digital skills access.",
    focus: "Helping children and young people stay on a learning path.",
    ctaLabel: "Support Education",
    ctaHref: "/donate",
  }),
  "support-aada": makePage({
    eyebrow: "Support Our Work",
    title: "Support AADA",
    description:
      "Supporting AADA helps fund digital skills training, devices, instructors, mentorship, scholarships, and learner career pathways.",
    focus: "Investing in long-term employment solutions.",
    ctaLabel: "Support AADA",
    ctaHref: "/donate",
  }),
  "corporate-giving": makePage({
    eyebrow: "Support Our Work",
    title: "Corporate Giving",
    description:
      "Corporate giving enables companies to support projects, sponsor training cohorts, provide in-kind resources, or fund community programmes.",
    focus: "Corporate support aligned with measurable social impact.",
    ctaLabel: "Discuss Corporate Giving",
  }),
  "monthly-giving": makePage({
    eyebrow: "Support Our Work",
    title: "Monthly Giving",
    description:
      "Monthly giving provides predictable support that helps the Foundation plan responsibly and respond consistently.",
    focus: "Sustained giving for sustained impact.",
    ctaLabel: "Become a Monthly Donor",
    ctaHref: "/donate",
  }),
  "legacy-giving": makePage({
    eyebrow: "Support Our Work",
    title: "Legacy Giving",
    description:
      "Legacy giving allows supporters to honour their values through long-term gifts that continue serving communities.",
    focus: "A lasting contribution to hope and opportunity.",
    ctaLabel: "Discuss Legacy Giving",
  }),
  "safeguarding-policy": makePage({
    eyebrow: "Legal",
    title: "Safeguarding Policy",
    description:
      "The safeguarding policy outlines the Foundation's commitment to protecting beneficiaries, volunteers, staff, and communities from harm.",
    focus: "Clear safeguarding expectations for responsible nonprofit work.",
  }),
  "child-protection-policy": makePage({
    eyebrow: "Legal",
    title: "Child Protection Policy",
    description:
      "The child protection policy defines how the Foundation protects children across programmes, visits, media, sponsorship, and partnerships.",
    focus: "Child safety as a non-negotiable programme standard.",
  }),
  "volunteer-policy": makePage({
    eyebrow: "Legal",
    title: "Volunteer Policy",
    description:
      "The volunteer policy sets expectations for onboarding, conduct, safeguarding, confidentiality, and responsible field participation.",
    focus: "Clear guidance for safe, effective volunteer service.",
  }),
  "donation-policy": makePage({
    eyebrow: "Legal",
    title: "Donation Policy",
    description:
      "The donation policy explains how gifts are received, acknowledged, directed, recorded, and used responsibly.",
    focus: "Transparent giving and responsible stewardship.",
  }),
  "financial-accountability": makePage({
    eyebrow: "Legal",
    title: "Financial Accountability",
    description:
      "Financial accountability explains the standards used to manage funds, document spending, and report impact to donors and stakeholders.",
    focus: "Trust built through transparency and responsible controls.",
  }),
  "code-of-ethics": makePage({
    eyebrow: "Legal",
    title: "Code of Ethics",
    description:
      "The code of ethics guides behaviour, decision-making, dignity, fairness, transparency, and conflicts of interest.",
    focus: "Ethical service across every Foundation activity.",
  }),
  "accessibility-statement": makePage({
    eyebrow: "Legal",
    title: "Accessibility Statement",
    description:
      "The accessibility statement reflects the Foundation's intention to make information, programmes, and digital experiences easier to access.",
    focus: "Inclusive access for website visitors and programme participants.",
  }),
};

export const submenuSlugs = Object.keys(submenuPages);

export type SubmenuPagesContent = typeof submenuPages;
