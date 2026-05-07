export function gradientForTemplate(id: string): string {
  switch (id) {
    case "welcome":
      return "linear-gradient(135deg,#efeeea,#8a6f54)";
    case "newsletter":
      return "linear-gradient(135deg,#f6f4ef,#3a2c22)";
    case "promotional":
      return "linear-gradient(135deg,#f4f1ea,#3d4530)";
    case "thank-you":
      return "linear-gradient(135deg,#f4f1ec,#c9a979)";
    case "workshops":
      return "linear-gradient(135deg,#494D3E,#EDE8E2)";
    case "qna":
      return "linear-gradient(135deg,#dcd3c4,#2a2725)";
    case "back-in-stock":
      return "linear-gradient(135deg,#efeeea,#352820)";
    case "giveaway":
      return "linear-gradient(135deg,#9a9c8a,#efeeea)";
    case "welcome-editorial":
      return "linear-gradient(135deg,#efeeea,#352820)";
    case "skincare":
      return "linear-gradient(135deg,#f3ece2,#c9b8e0)";
    case "course-launch":
      return "linear-gradient(135deg,#f5ede2,#2e2622)";
    case "founder-letter":
      return "linear-gradient(135deg,#f4ece4,#a07a82)";
    case "re-engagement":
      return "linear-gradient(135deg,#faeede,#7a4530)";
    case "beauty-minimal":
      return "linear-gradient(135deg,#ebe6dd,#1a1a1a)";
    case "influencer":
      return "linear-gradient(135deg,#faf3eb,#c98b76)";
    case "podcast":
      return "linear-gradient(135deg,#0e0d0c,#c9a663)";
    case "photographer":
      return "linear-gradient(135deg,#f5f1e8,#1f1d1a)";
    case "plain-letter":
      return "linear-gradient(135deg,#fbf9f4,#7a7268)";
    default:
      return "linear-gradient(135deg,#e4e4e7,#71717a)";
  }
}

export function iconForTemplate(id: string): string {
  switch (id) {
    case "welcome":
      return "✿";
    case "newsletter":
      return "📰";
    case "promotional":
      return "🌿";
    case "thank-you":
      return "🛍️";
    case "workshops":
      return "🌿";
    case "qna":
      return "❓";
    case "back-in-stock":
      return "🧥";
    case "giveaway":
      return "🎁";
    case "welcome-editorial":
      return "✨";
    case "skincare":
      return "🧴";
    case "course-launch":
      return "📖";
    case "founder-letter":
      return "✒︎";
    case "re-engagement":
      return "❀";
    case "beauty-minimal":
      return "Æ";
    case "influencer":
      return "♡";
    case "podcast":
      return "🎙️";
    case "photographer":
      return "◐";
    case "plain-letter":
      return "¶";
    default:
      return "✉️";
  }
}
