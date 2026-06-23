import { defineMain } from "@storybook/react-vite/node";

export default defineMain({
  framework: "@storybook/react-vite",
  stories: [
    // "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [],
  // Strip out the build-only parts of the Vite config
  viteFinal: (config) => {
    // Don't include the dts plugin
    config.plugins = config.plugins?.filter(
      (plugin) => !(plugin && "name" in plugin && plugin.name === "unplugin-dts"),
    );
    // Delete the build configuration
    delete config.build;
    return config;
  },
});
