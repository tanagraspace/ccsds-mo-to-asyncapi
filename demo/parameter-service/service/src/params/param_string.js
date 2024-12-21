// Generation logic for PARAM_STRING
module.exports = {
  name: "PARAM_STRING",
  generate: () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let str = "";
    for (let i = 0; i < 5; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
  },
};
