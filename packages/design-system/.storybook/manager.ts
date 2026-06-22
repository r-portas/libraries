import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

const theme = create({
  base: "dark",
  brandTitle: "@royportas/design-system",
});

addons.setConfig({
  theme,
});
