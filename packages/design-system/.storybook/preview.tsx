import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { definePreview } from "@storybook/react-vite";

import theme from "@/theme";

export default definePreview({
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  addons: [],
  decorators: [
    (Story) => (
      <MantineProvider theme={theme} forceColorScheme="dark">
        <ColorSchemeScript />
        <Story />
      </MantineProvider>
    ),
  ],
});
