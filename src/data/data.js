// import { logoutProcess } from '@/api/auth';
import {
  FaLinkedin,
  FaSquareEnvelope,
  FaSquareFacebook,
  FaSquareWhatsapp,
} from "react-icons/fa6";

export const navbars = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Products",
    link: "/products",
  },
  {
    id: 3,
    title: "Contact",
    link: "/contact",
  },
];

export const sliders = [
  {
    id: 1,
    image: "/slider/slider-1.png",
  },
  {
    id: 2,
    image: "/slider/slider-2.png",
  },
  {
    id: 2,
    image: "/slider/slider-3.png",
  },
];

export const products = [
  {
    id: 1,
    title: "The Wild Robot",
    slug: "the-wild-robot",
    price: "Rp.32.000",
    category: "Animation",
    image: "/products/wild-robot.jpeg",
    link: "https://www.google.co.id/books/edition/The_Wild_Robot/sFlqCgAAQBAJ?hl=id&gbpv=1",
    description:
      "Can a robot survive in the wilderness? When robot Roz opens her eyes for the first time, she discovers that she is all alone on a remote, wild island. She has no idea how she got there or what her purpose is--but she knows she needs to survive. After battling a violent storm and escaping a vicious bear attack, she realizes that her only hope for survival is to adapt to her surroundings and learn from the island's unwelcoming animal inhabitants.As Roz slowly befriends the animals, the island starts...",
  },
  {
    id: 2,
    title: "Alexander Hamilton",
    slug: "alexander-hamilton",
    price: "Rp.35.000",
    category: "Biography",
    image: "/products/hamilton.jpeg",
    link: "https://www.google.co.id/books/edition/Alexander_Hamilton_s_Revolution/02SCDwAAQBAJ?hl=id&gbpv=1",
    description:
      "Despite his less-than-promising beginnings as the only Founding Father not born and raised on American soil, Hamilton was one of the best and brightest of his generation. His notoriety has rested almost entirely on his role as Secretary of the Treasury in Washington’s administration, yet few realize that Washington and Hamilton’s bond was forged during the Revolutionary War. Hamilton’s Revolution is the first book to explore Hamilton’s critical role during the battle for independence.",
  },
  {
    id: 3,
    title: "The Great Gatsby",
    slug: "the-great-gatsby",
    price: "Rp.30.000",
    category: "Drama",
    image: "/products/gatsby.jpeg",
    link: "https://www.google.co.id/books/edition/The_Great_Gatsby/5e1KAwAAQBAJ?hl=id&gbpv=1",
    description:
      "The Great Gatsby, F. Scott Fitzgerald’s third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story is of the fabulously wealthy Jay Gatsby and his new love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted “gin was the national drink. It is an exquisitely crafted tale of America in the 1920s that resonates with the power of myth.",
  },
  {
    id: 4,
    title: "The Odyssey",
    slug: "the-odyssey",
    price: "Rp.40.000",
    category: "Adventure",
    image: "/products/odyssey.jpeg",
    link: "https://www.google.co.id/books/edition/The_Odyssey/EC9coOuym-kC?hl=id&gbpv=1",
    description:
      "The Odyssey is considered to be one of the greatest pieces of world literature. Its basic story--the homecoming of Odysseus--is widely known. Although it has often been translated, earlier versions do not give the reader the full sense of its oral epic nature as a song that came into being through a long tradition of sung performances before writing was widely practiced. When finally written down, it retained its oral-formulaic nature in ways that are clearly discernible, and which this translation successfully captures. Rodney Merrill strictly adheres to the use of dactylic hexameter, the meter by which the formulaic language of Homeric poetry is rendered as musical phrasing rather than as a simple repetition of ideas.",
  },
  {
    id: 5,
    title: "Harry Potter and the Sorcerer's Stone",
    slug: "harry-potter-and-the-sorcerers-stone",
    price: "Rp.50.000",
    category: "Fantasy",
    image: "/products/harry-potter-sorcerer-stone.jpeg",
    link: "https://www.google.co.id/books/edition/Harry_Potter_dan_batu_bertuah/iQmPNDIAskUC?hl=id&gbpv=1",
    description:
      "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a stranger called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
  },
  {
    id: 6,
    title: "Harry Potter and the Chamber of Secrets",
    slug: "harry-potter-and-the-chamber-of-secrets",
    price: "Rp.55.000",
    category: "Fantasy",
    image: "/products/harry-potter-chamber-secret.jpeg",
    link: "https://www.google.co.id/books/edition/Harry_Potter_dan_kamar_rahasia/xVBbEzRjBZoC?hl=id&gbpv=1",
    description:
      "The Dursleys were so mean and hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he's packing his bags, Harry receives a warning from a strange, impish creature named Dobby who says that if Harry Potter returns to Hogwarts, disaster will strike. And strike it does. For in Harry's second year at Hogwarts, fresh torments and horrors arise, including an outrageously stuck-up new professor and a spirit who haunts the apartment of the Gryffindor Tower. But then the real trouble begins -- someone is turning Hogwarts students to stone. Could it be Draco Malfoy, a more poisonous rival than ever? Could it possibly be Hagrid, whose mysterious past is finally told? Or could it be the one everyone at Hogwarts most suspects... Harry Potter himself!",
  },
  {
    id: 7,
    title: "Locke & Key",
    slug: "locke-and-key",
    price: "Rp.60.000",
    category: "Horror",
    image: "/products/locke-and-key.jpeg",
    link: "https://www.google.co.id/books/edition/Locke_Key_Welcome_to_Lovecraft_Volume_1/i4ZhAgAAQBAJ?hl=id&gbpv=1",
    description:
      "Locke & Key tells of Keyhouse, an unlikely New England mansion, with fantastic doors that transform all who dare to walk through them. Home to a hate-filled and relentless creature that will not rest until it forces open the most terrible door of them all. When Nina Locke brings her children back to their father’s childhood home following his gruesome and mysterious liberation, they soon discover that the house has magical keys that give them a vast array of powers and abilities. Little do they know that a devious demon also wants the keys, and will stop at nothing to attain them.",
  },
  {
    id: 8,
    title: "Spectacular Spider-Man",
    slug: "spectacular-spiderman",
    price: "Rp.65.000",
    category: "Animation",
    image: "/products/spiderman.jpeg",
    link: "https://www.google.co.id/books/edition/Spectacular_Spider_Man_Masterworks_Vol_1/-fHWDgAAQBAJ?hl=id&gbpv=1",
    description:
      "The Spectacular Spider man is a comic book series that was published by Marvel Comics. The series was a spin-off of the long-running series The Amazing Spider. Collects Spectacular Spider-Man (1976) #1-15. In 1976, Spidey notched his second solo series under the direction of Gerry Conway and Sal Buscema. With his first live-action series on the horizon, the world wanted to know just who this Peter Parker guy was. Spectacular not only expanded opportunities for web-slinging wonder, but it also provided a platform to expand upon and explore the world of Spidey's incomparable cast - J. Jonah Jameson, Mary Jane Watson, Flash Thompson and more! Of course, there was no shortage of villains - including the Vulture and Morbius - or iconic guest stars, ranging from the White Tiger to the Inhumans!",
  },
];

export const categories = [
  {
    id: 1,
    title: "Biography",
    image: "/icon/biography.jpg",
  },
  {
    id: 2,
    title: "Drama",
    image: "/icon/drama.jpg",
  },
  {
    id: 3,
    title: "Comedy",
    image: "/icon/comedy.jpg",
  },
  {
    id: 4,
    title: "Romance",
    image: "/icon/romance.jpg",
  },
  {
    id: 5,
    title: "Adventure",
    image: "/icon/adventure.jpg",
  },
  {
    id: 6,
    title: "Horror",
    image: "/icon/horror.jpg",
  },
  {
    id: 7,
    title: "Fantasy",
    image: "/icon/scifi.jpg",
  },
  {
    id: 8,
    title: "Animation",
    image: "/icon/animation.jpg",
  },
];

export const socialMedia = [
  {
    id: 1,
    icon: <FaSquareEnvelope size={40} />,
    link: `mailto:?subject&body`,
  },
  {
    id: 2,
    icon: <FaSquareFacebook size={40} />,
    link: `https://www.facebook.com/`,
  },
  {
    id: 3,
    icon: <FaLinkedin size={40} />,
    link: `https://www.linkedin.com/`,
  },
  {
    id: 4,
    icon: <FaSquareWhatsapp size={40} />,
    link: `https://api.whatsapp.com/send?text`,
  },
];
