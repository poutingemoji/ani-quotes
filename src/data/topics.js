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
  death: { hex: "#505A5B", icon: "skull-crossbones", image: deathImage },
  motivational: { hex: "#EEA243", icon: "fire", image: motivationalImage },
  love: { hex: "#BD4F6C", icon: "heart", image: loveImage },
  patience: { hex: "#7D8CC4", icon: "hourglass", image: patienceImage },
  future: { hex: "#5899E2", icon: "clock", image: futureImage },
  life: { hex: "#04724D", icon: "seedling", image: lifeImage },
  leadership: { hex: "#721817", icon: "bullhorn", image: leadershipImage },
  strength: { hex: "#D64045", icon: "dumbbell", image: strengthImage },
  imagination: { hex: "#759FBC", icon: "lightbulb", image: imaginationImage },
  dreams: { hex: "#D282A6", icon: "cloud", image: dreamsImage },
  war: { hex: "#606D5D", icon: "chess-knight", image: warImage },
  faith: { hex: "#FFD151", icon: "cross", image: faithImage },
  wisdom: { hex: "#7B904B", icon: "brain", image: wisdomImage },
  fear: { hex: "#434371", icon: "crow", image: "" },
  failure: { hex: "#F03A47", icon: "times-circle", image: "" },
};

export default topics;
