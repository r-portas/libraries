import { defineMain } from "@storybook/react-vite/node";

export default defineMain({
  framework: "@storybook/react-vite",
  stories: [
    // "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [],
  viteFinal: (config) => {
    config.plugins = config.plugins?.filter(
      (plugin) => !(plugin && "name" in plugin && plugin.name === "unplugin-dts"),
    );
    if (config.build) {
      delete config.build.lib;
      delete config.build.rolldownOptions;
    }
    return config;
  },
});
