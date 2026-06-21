import preview from "../.storybook/preview";
import { TestButton } from "./test-button";

const meta = preview.meta({
  component: TestButton,
  parameters: {},
});

export const Primary = meta.story({
  args: {
    label: "Click me",
  },
});
