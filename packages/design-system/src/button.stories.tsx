import { Button } from "@mantine/core";
import type { ButtonProps } from "@mantine/core";
import type { ComponentType } from "react";
import preview from "storybook/preview";

const meta = preview.meta({
  component: Button as ComponentType<ButtonProps>,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button",
  },
});

export const Filled = meta.story({
  args: {
    variant: "filled",
  },
});

export const Outline = meta.story({
  args: {
    variant: "outline",
  },
});

export const Disabled = Filled.extend({
  args: {
    disabled: true,
  },
});
