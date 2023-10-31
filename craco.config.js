const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@actions": path.resolve(__dirname, "src/actions"),
      "@reducers": path.resolve(__dirname, "src/reducers"),
    },
  },
};
