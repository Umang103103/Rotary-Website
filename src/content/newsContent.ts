export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Araniko Souvenir 2025-26 Released",
    excerpt:
      "Our annual souvenir magazine celebrating achievements, member contributions, and upcoming initiatives for the Rotary year.",
    date: "2025-01-15",
    category: "Publications",
    image: "news-souvenir.png",
    slug: "araniko-souvenir-2025-26",
  },
  {
    id: 2,
    title: "Newsletter Subscription Now Available",
    excerpt:
      "Stay connected with monthly updates on projects, events, and opportunities to serve.",
    date: "2025-01-10",
    category: "Announcements",
    image: "news-newsletter.png",
    slug: "newsletter-subscription",
  },
  {
    id: 3,
    title: "Community Health Camp Serves 300+ Residents",
    excerpt:
      "Free medical checkups, consultations, and medicines provided during our quarterly health outreach program.",
    date: "2024-12-20",
    category: "Projects",
    image: "news-health-camp.png",
    slug: "community-health-camp-success",
  },
  {
    id: 4,
    title: "Digital Learning Centers Inaugurated",
    excerpt:
      "Two rural schools now equipped with computer labs, benefiting 200+ students with digital education access.",
    date: "2024-12-15",
    category: "Projects",
    image: "news-digital.png",
    slug: "digital-learning-centers",
  },
  {
    id: 5,
    title: "Tree Plantation Drive Plants 1,000 Saplings",
    excerpt:
      "Members and volunteers came together for environmental conservation, planting native species across Dhulikhel.",
    date: "2024-12-01",
    category: "Environment",
    image: "news-trees.png",
    slug: "tree-plantation-drive",
  },
  {
    id: 6,
    title: "Scholarship Recipients Announced",
    excerpt:
      "50 deserving students selected for educational scholarships and learning material support for the academic year.",
    date: "2024-11-25",
    category: "Education",
    image: "news-scholarship.png",
    slug: "scholarship-recipients-2025",
  },
];

export const souvenirContent = {
  title: "Araniko Souvenir 2025-26",
  date: "January 15, 2025",
  description:
    "The Araniko Souvenir is our annual magazine celebrating the spirit of Rotary and the incredible work of our members throughout the year.",

  sections: [
    {
      title: "President's Message",
      content:
        "Reflections on the year's achievements and vision for continued service and growth.",
    },
    {
      title: "Project Highlights",
      content:
        "Detailed coverage of major projects including education initiatives, healthcare camps, environmental programs, and community development efforts.",
    },
    {
      title: "Member Spotlights",
      content:
        "Recognizing outstanding contributions and celebrating the dedication of our Rotarians.",
    },
    {
      title: "Photo Gallery",
      content:
        "Visual journey through the year's activities, events, and moments of fellowship and service.",
    },
    {
      title: "Looking Ahead",
      content:
        "Upcoming projects, goals, and opportunities for the new Rotary year.",
    },
  ],

  downloadText:
    "Download the digital edition of our souvenir magazine to explore the full collection of stories, photos, and achievements from this Rotary year.",
  ctaText: "Download Souvenir (PDF)",
};

export const newsletterContent = {
  title: "Newsletter Subscription",
  description:
    "Stay informed about Rotary Club of Dhulikhel's activities, projects, and opportunities to make a difference in our community.",

  benefits: [
    "Monthly updates on ongoing and upcoming projects",
    "Event announcements and invitations",
    "Success stories and impact reports",
    "Volunteer and membership opportunities",
    "Community news and Rotary insights",
  ],

  frequency: "Monthly",
  privacyNote:
    "We respect your privacy. Your email will only be used for Rotary Club of Dhulikhel communications and will never be shared with third parties.",
};
