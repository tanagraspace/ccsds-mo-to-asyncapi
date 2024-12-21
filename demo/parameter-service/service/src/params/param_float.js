// Generation logic for PARAM_FLOAT
module.exports = {
  name: "PARAM_FLOAT",
  generate: () => parseFloat(Math.random().toFixed(2)), // Random float 0.00–1.00
};