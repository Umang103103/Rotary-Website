export interface BoardMember {
  id: number;
  name: string;
  role: string;
  image?: string;
  bio?: string;
}

export const boardMembers: BoardMember[] = [
  {
    id: 1,
    name: "Rajesh Shrestha",
    role: "President",
    image: "board-president.png",
    bio: "Leading our club with vision and dedication to community service.",
  },
  {
    id: 2,
    name: "Sunita Karki",
    role: "Vice President",
    image: "board-vp.png",
    bio: "Supporting club initiatives and member engagement.",
  },
  {
    id: 3,
    name: "Mohan Adhikari",
    role: "Secretary",
    image: "board-secretary.png",
    bio: "Managing club communications and administrative functions.",
  },
  {
    id: 4,
    name: "Anita Thapa",
    role: "Treasurer",
    image: "board-treasurer.png",
    bio: "Overseeing financial planning and resource allocation.",
  },
  {
    id: 5,
    name: "Prakash Lamichhane",
    role: "Club Service Director",
    image: "board-club.png",
    bio: "Enhancing club fellowship and member experience.",
  },
  {
    id: 6,
    name: "Sita Gurung",
    role: "Community Service Director",
    image: "board-community.png",
    bio: "Leading local community development initiatives.",
  },
  {
    id: 7,
    name: "Ramesh Bhattarai",
    role: "Vocational Service Director",
    image: "board-vocational.png",
    bio: "Promoting ethics and excellence in professions.",
  },
  {
    id: 8,
    name: "Kamala Pandey",
    role: "International Service Director",
    image: "board-international.png",
    bio: "Coordinating global humanitarian projects.",
  },
  {
    id: 9,
    name: "Dipak Maharjan",
    role: "Youth Service Director",
    image: "board-youth.png",
    bio: "Empowering youth through Interact and mentorship programs.",
  },
  {
    id: 10,
    name: "Binita Rai",
    role: "Public Image Director",
    image: "board-public.png",
    bio: "Managing club communications and community outreach.",
  },
];

export const boardContent = {
  title: "Board of Directors",
  description:
    "Our dedicated board members lead the Rotary Club of Dhulikhel with passion, expertise, and commitment to service. Each director brings unique skills and perspectives to guide our club's mission and projects.",
  term: "Rotary Year 2025-26",
};
