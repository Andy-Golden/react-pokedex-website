const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@store": path.resolve(__dirname, "src/store"),
      "@slices": path.resolve(__dirname, "src/slices"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@apis": path.resolve(__dirname, "src/apis"),
    },
  },
};
