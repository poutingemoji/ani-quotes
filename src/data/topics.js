import deathImage from "../images/topics/death.png";
import loveImage from "../images/topics/love.png";
import motivationalImage from "../images/topics/motivational.png";
import futureImage from "../images/topics/future.png";
import lifeImage from "../images/topics/life.png";
import leadershipImage from "../images/topics/leadership.png";
import patienceImage from "../images/topics/patience.png";
import strengthImage from "../images/topics/strength.png";
import imaginationImage from "../images/topics/imagination.png";
import dreamsImage from "../images/topics/dreams.png";
import warImage from "../images/topics/war.png";
import faithImage from "../images/topics/faith.png";
import wisdomImage from "../images/topics/wisdom.png";

const topics = {
  alone: {},
  believe_in_yourself: {},
  death: { hex: "#505A5B", icon: "skull-crossbones", image: deathImage },
  dreams: { hex: "#D282A6", icon: "cloud", image: dreamsImage },
  failure: { hex: "#F03A47", icon: "times-circle", image: "" },
  faith: { hex: "#FFD151", icon: "cross", image: faithImage },
  fate: {},
  fear: { hex: "#434371", icon: "crow", image: "" },
  friendship: {},
  funny: {},
  future: { hex: "#5899E2", icon: "clock", image: futureImage },

  imagination: { hex: "#759FBC", icon: "lightbulb", image: imaginationImage },
  inspirational: {},

  leadership: { hex: "#721817", icon: "bullhorn", image: leadershipImage },
  life: { hex: "#04724D", icon: "seedling", image: lifeImage },
  loss: {},
  love: { hex: "#BD4F6C", icon: "heart", image: loveImage },
  mistakes: {},
  motivational: { hex: "#EEA243", icon: "fire", image: motivationalImage },
  pain: {},
  past: {},
  patience: { hex: "#7D8CC4", icon: "hourglass", image: patienceImage },
  positive: {},

  regret: {},
  strength: { hex: "#D64045", icon: "dumbbell", image: strengthImage },
  success: {},
  trust: {},
  unfair: {},
  war: { hex: "#606D5D", icon: "chess-knight", image: warImage },
  wisdom: { hex: "#7B904B", icon: "brain", image: wisdomImage },
};

export default topics;
