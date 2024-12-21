// Generation logic for PARAM_STARTREK
module.exports = {
  name: "PARAM_STARTREK",
  generate: () => {
    const quotes = [
      "Live long and prosper.",
      "Resistance is futile.",
      "Make it so.",
      "There are four lights!",
      "Logic is the beginning of wisdom, not the end.",
      "Beam me up, Scotty.",
      "It is possible to commit no mistakes and still lose.",
      "Emotions are alien to me, I'm a scientist.",
      "Insufficient facts always invite danger.",
      "The needs of the many outweigh the needs of the few.",
      "KHAAANNN!",
      "There's coffee in that nebula.",
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  },
};
