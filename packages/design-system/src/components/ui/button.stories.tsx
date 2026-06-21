import { ArrowRightIcon, PlusIcon } from "lucide-react";

import preview from "../../../.storybook/preview";
import { Button } from "./button";

const meta = preview.meta({
  component: Button,
  args: {
    children: "Button",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "outline",
        "secondary",
        "ghost",
        "destructive",
        "link",
      ],
    },
    size: {
      control: "select",
      options: [
        "default",
        "xs",
        "sm",
        "lg",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
    },
    disabled: {
      control: "boolean",
    },
  },
});

export const Default = meta.story({});

export const Secondary = meta.story({
  args: {
    variant: "secondary",
  },
});

export const Outline = meta.story({
  args: {
    variant: "outline",
  },
});

export const Ghost = meta.story({
  args: {
    variant: "ghost",
  },
});

export const Destructive = meta.story({
  args: {
    variant: "destructive",
  },
});

export const Link = meta.story({
  args: {
    variant: "link",
  },
});

export const Disabled = meta.story({
  args: {
    disabled: true,
  },
});

export const WithIcon = meta.story({
  args: {
    children: (
      <>
        Continue
        <ArrowRightIcon data-icon="inline-end" />
      </>
    ),
  },
});

export const Icon = meta.story({
  args: {
    size: "icon",
    "aria-label": "Add",
    children: <PlusIcon />,
  },
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
});

export const Sizes = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
});

export const IconSizes = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="icon-xs" aria-label="Add">
        <PlusIcon />
      </Button>
      <Button size="icon-sm" aria-label="Add">
        <PlusIcon />
      </Button>
      <Button size="icon" aria-label="Add">
        <PlusIcon />
      </Button>
      <Button size="icon-lg" aria-label="Add">
        <PlusIcon />
      </Button>
    </div>
  ),
});
