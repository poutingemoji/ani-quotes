import deathImage from "../images/topics/death.png";
import pastImage from "../images/topics/past.png";
import faithImage from "../images/topics/faith.png";
import futureImage from "../images/topics/future.png";
import imaginationImage from "../images/topics/imagination.png";
import leadershipImage from "../images/topics/leadership.png";
import lifeImage from "../images/topics/life.png";
import loveImage from "../images/topics/love.png";
import motivationalImage from "../images/topics/motivational.png";
import painImage from "../images/topics/pain.png";
import patienceImage from "../images/topics/patience.png";
import strengthImage from "../images/topics/strength.png";
import truthImage from "../images/topics/truth.png";
import warImage from "../images/topics/war.png";

const topics = {
  alone: { hex: "#434371" },
  believe_in_yourself: { hex: "#FE7F2D" },
  death: { hex: "#000000", icon: "skull-crossbones", image: deathImage },
  dreams: { hex: "#D282A6", icon: "cloud" },
  failure: { hex: "#D64045", icon: "times-circle", image: "" },
  faith: { hex: "#EEA243", icon: "cross", image: faithImage },
  fate: { hex: "#5899E2" },
  fear: { hex: "#434371", icon: "crow", image: "" },
  friendship: { hex: "#EEA243" },
  freedom: { hex: "linear-gradient(to right, #b22234, #CCCCCC, #3c3b6e)" },
  funny: { hex: "#EEA243" },
  future: { hex: "#5899E2", icon: "clock", image: futureImage },
  happiness: { hex: "#EEA243" },
  imagination: { hex: "#759FBC", icon: "lightbulb", image: imaginationImage },
  improvement: {},
  inspirational: { hex: "#759FBC" },
  kindness: {  },
  leadership: { hex: "#A755C2", icon: "bullhorn", image: leadershipImage },
  life: { hex: "#04724D", icon: "seedling", image: lifeImage },
  loss: { hex: "#A755C2" },
  love: { hex: "#BD4F6C", icon: "heart", image: loveImage },
  mistakes: { hex: "#D64045" },
  motivational: { hex: "#FE7F2D", icon: "fire", image: motivationalImage },
  pain: { hex: "#D64045", icon: "heart-broken", image: painImage },
  past: { hex: "#505A5B", image: pastImage },
  patience: { hex: "#7D8CC4", icon: "hourglass", image: patienceImage },
  positive: { hex: "#EEA243", icon: "sun" },

  regret: { hex: "#D64045" },
  strength: { hex: "#D64045", icon: "dumbbell", image: strengthImage },
  success: { hex: "#5F4842" },
  trust: { hex: "#4169e1" },
  truth: { hex: "#4169e1", icon: "balance-scale", image: truthImage },
  unfair: { hex: "#EEA243" },
  war: { hex: "#606D5D", icon: "chess-knight", image: warImage },
  wisdom: { hex: "#4169e1", icon: "brain", image: "" },
};

export default topics;
