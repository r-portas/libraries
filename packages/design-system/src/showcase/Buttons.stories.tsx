import { ActionIcon, Button, Group, Stack } from "@mantine/core";
import type { ButtonVariant, MantineSize } from "@mantine/core";
import { ArrowRightIcon, GearIcon, HeartIcon, PlusIcon } from "@phosphor-icons/react";
import preview from "storybook/preview";

import { Matrix, Section, ShowcasePage } from "@/showcase/showcase";

const meta = preview.meta({
  title: "Showcase/Buttons",
  parameters: {
    layout: "fullscreen",
  },
});

const VARIANTS: ButtonVariant[] = [
  "filled",
  "light",
  "outline",
  "subtle",
  "default",
  "transparent",
];
const COLORS = ["primary", "red", "teal", "grape"] as const;
const SIZES: MantineSize[] = ["xs", "sm", "md", "lg", "xl"];

export const Buttons = meta.story({
  render: () => (
    <ShowcasePage>
      <Section
        title="Variant × Color"
        description="Every button variant against the primary color and a few accents. Watch contrast and accent on theme changes."
      >
        <Matrix rows={VARIANTS} cols={[...COLORS]} rowLabel={(v) => v} colLabel={(c) => c}>
          {(variant, color) => (
            <Button variant={variant} color={color === "primary" ? undefined : color}>
              Button
            </Button>
          )}
        </Matrix>
      </Section>

      <Section title="Sizes" description="xs → xl using the primary color.">
        <Group align="center">
          {SIZES.map((size) => (
            <Button key={size} size={size}>
              Button {size}
            </Button>
          ))}
        </Group>
      </Section>

      <Section title="States" description="Loading, disabled, and full-width.">
        <Group>
          <Button>Default</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>
            Disabled
          </Button>
        </Group>
        <Button fullWidth>Full width</Button>
      </Section>

      <Section title="With icons" description="Section icons and gradient.">
        <Group>
          <Button leftSection={<PlusIcon size={16} />}>Create</Button>
          <Button rightSection={<ArrowRightIcon size={16} />} variant="light">
            Continue
          </Button>
          <Button variant="gradient" gradient={{ from: "primary", to: "grape", deg: 90 }}>
            Gradient
          </Button>
        </Group>
      </Section>

      <Section
        title="ActionIcon"
        description="Icon-only buttons share the same variants and colors."
      >
        <Stack gap="md">
          {(["filled", "light", "outline", "subtle", "default"] as const).map((variant) => (
            <Group key={variant}>
              {COLORS.map((color) => (
                <ActionIcon
                  key={color}
                  variant={variant}
                  color={color === "primary" ? undefined : color}
                  size="lg"
                  aria-label={`${variant} ${color}`}
                >
                  <HeartIcon size={18} />
                </ActionIcon>
              ))}
              <ActionIcon variant={variant} size="lg" loading aria-label="loading">
                <GearIcon size={18} />
              </ActionIcon>
            </Group>
          ))}
        </Stack>
      </Section>
    </ShowcasePage>
  ),
});
