// Import slider images
import heroImage from "../assets/images/1st.png";
import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";

// Hero image (top static image)
export const heroImage1st = heroImage;

// Welcome banner (before slider)
export const welcomeBanner = {
  title: "Rotary Club of Dhulikhel",
  subtitle: "Service Above Self",
  logo: "https://via.placeholder.com/150x150/0E6D66/ffffff?text=Rotary+Logo", // Replace with actual Rotary logo
};

// Hero slider images
export const sliderImages = [image1, image2, image3, image4, image5];

// Our Programs section (4 separate programs)
export const programsPreview = [
  {
    id: 1,
    title: "Rotary Rural Health Initiative",
    description: "",
    image:
      "https://via.placeholder.com/600x400/f8f6f3/1a1a1a?text=Health+Initiative",
    link: "/services",
  },
  {
    id: 2,
    title: "100 Girl's Toilet Project",
    description: "",
    image:
      "https://via.placeholder.com/600x400/f8f6f3/1a1a1a?text=Girls+Toilet+Project",
    link: "/services",
  },
  {
    id: 3,
    title: "Nepal Community School Project",
    description: "",
    image:
      "https://via.placeholder.com/600x400/f8f6f3/1a1a1a?text=School+Project",
    link: "/services",
  },
  {
    id: 4,
    title: "Nepal Drinking Water Project",
    description: "",
    image:
      "https://via.placeholder.com/600x400/f8f6f3/1a1a1a?text=Water+Project",
    link: "/services",
  },
];

export const programsIntro = {
  title: "Our Programs",
  description:
    "Rotary Club of Dhulikhel's programs are developing the next generation of leaders, providing funding to make the world a better place, and making peace a priority. And our programs are not just for club members. Learn how you can make a difference in your community through Rotary.",
};

// Disease Prevention section with YouTube video
export const diseasePreventionContent = {
  title: "Rotary Club of Dhulikhel Support in Disease Prevention & Treatment",
  videoUrl: "https://www.youtube.com/embed/kOUXEwz1JCM",
};

// Let's Connect section (simplified - just title, no bullets)
export const letsConnectContent = {
  title: "Let's Connect",
};

// Meeting info
export const meetingInfo = {
  text: "We Meet Every Saturday | 12:00 PM | Hotel Himalayan Horizon",
  ctaText: "CONTACT US",
  ctaLink: "/contact",
};
