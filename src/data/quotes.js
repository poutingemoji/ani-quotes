import { stripIndents } from "common-tags";
import skytheeAvatar from "../images/skythee-avatar.png"
const quotes = [
  {
    text: `"If you cringe at your past self, it's a sign of growth"`,
    socialMedia: "youtube",
    topic: "Cringe",
    author: {
      avatarUrl: "",
      username: "DR. DORITOS",
    },
  },
  {
    text: stripIndents(`
      thought i'd share smth my therapist told me and it stuck with me
      fear is natural, and you'll encounter it throughout your life
      but when you encounter it, just think of the letters F-E-A-R
      and remember that they stand for Face Everything And Recover 🥰
    `),
    socialMedia: "discord",
    topic: "Fear",
    author: {
      avatarUrl: skytheeAvatar,
      username: "Skythee",
    },
  },
  {
    text: "wo bu zhi dou ni shuo shen me",
    socialMedia: "discord",
    topic: "Fear",
    author: {
      username: "poutinggif",
    },
  },
];

export default quotes
