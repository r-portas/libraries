import {
  Box,
  ColorSwatch,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import type { MantineTheme } from "@mantine/core";
import preview from "storybook/preview";

import { Section, ShowcasePage } from "@/showcase/showcase";

const meta = preview.meta({
  title: "Showcase/Theme Tokens",
  parameters: {
    layout: "fullscreen",
  },
});

/** Renders one named color and its 10 shades straight from `theme.colors`. */
function ColorRow({ name, shades }: { name: string; shades: readonly string[] }) {
  return (
    <Group gap="xs" wrap="nowrap">
      <Text size="sm" fw={500} w={120} style={{ flexShrink: 0 }}>
        {name}
      </Text>
      <Group gap={4} wrap="nowrap">
        {shades.map((shade, index) => (
          <Stack key={shade} gap={2} align="center">
            <ColorSwatch color={shade} radius="sm" size={36} />
            <Text size="10px" c="dimmed">
              {index}
            </Text>
          </Stack>
        ))}
      </Group>
    </Group>
  );
}

/** Renders a record of size tokens (spacing, radius, fontSizes…) as labelled bars. */
function SizeScale({
  scale,
  render,
}: {
  scale: MantineTheme["spacing"];
  render: (key: string, value: string) => React.ReactNode;
}) {
  return (
    <Stack gap="sm">
      {Object.entries(scale).map(([key, value]) => (
        <Group key={key} gap="md" wrap="nowrap">
          <Text size="sm" fw={500} w={40} ff="monospace">
            {key}
          </Text>
          <Text size="xs" c="dimmed" w={64} ff="monospace">
            {value}
          </Text>
          {render(key, value)}
        </Group>
      ))}
    </Stack>
  );
}

export const Palette = meta.story({
  render: function PaletteStory() {
    const theme = useMantineTheme();
    return (
      <ShowcasePage>
        <Section
          title="Color palette"
          description="Every named color in theme.colors, shade 0 → 9. The primary color drives most component accents."
        >
          <Stack gap="md">
            {Object.entries(theme.colors).map(([name, shades]) => (
              <ColorRow key={name} name={name} shades={shades} />
            ))}
          </Stack>
        </Section>
      </ShowcasePage>
    );
  },
});

export const Scales = meta.story({
  render: function ScalesStory() {
    const theme = useMantineTheme();
    return (
      <ShowcasePage>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={48}>
          <Section title="Spacing" description="theme.spacing">
            <SizeScale
              scale={theme.spacing}
              render={(_key, value) => (
                <Box
                  h={20}
                  w={value}
                  bg="var(--mantine-primary-color-filled)"
                  style={{ borderRadius: 2 }}
                />
              )}
            />
          </Section>

          <Section title="Radius" description="theme.radius">
            <SizeScale
              scale={theme.radius}
              render={(_key, value) => (
                <Box
                  h={40}
                  w={64}
                  bg="var(--mantine-color-default-border)"
                  style={{
                    borderRadius: value,
                    border: "1px solid var(--mantine-primary-color-filled)",
                  }}
                />
              )}
            />
          </Section>

          <Section title="Font sizes" description="theme.fontSizes">
            <SizeScale
              scale={theme.fontSizes}
              render={(_key, value) => <Text style={{ fontSize: value }}>The quick brown fox</Text>}
            />
          </Section>

          <Section title="Shadows" description="theme.shadows">
            <Stack gap="lg">
              {Object.entries(theme.shadows).map(([key, value]) => (
                <Group key={key} gap="md" wrap="nowrap">
                  <Text size="sm" fw={500} w={40} ff="monospace">
                    {key}
                  </Text>
                  <Paper p="md" radius="md" style={{ boxShadow: value }} w={120} ta="center">
                    <Text size="xs" c="dimmed">
                      shadow
                    </Text>
                  </Paper>
                </Group>
              ))}
            </Stack>
          </Section>
        </SimpleGrid>
      </ShowcasePage>
    );
  },
});
