import {
  Anchor,
  Blockquote,
  Code,
  Divider,
  Highlight,
  List,
  Mark,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { InfoIcon } from "@phosphor-icons/react";
import preview from "storybook/preview";

import { Section, ShowcasePage } from "@/showcase/showcase";

const meta = preview.meta({
  title: "Showcase/Typography",
  parameters: {
    layout: "fullscreen",
  },
});

const TITLE_ORDERS = [1, 2, 3, 4, 5, 6] as const;
const TEXT_SIZES = ["xl", "lg", "md", "sm", "xs"] as const;

export const Typography = meta.story({
  render: () => (
    <ShowcasePage>
      <Section title="Headings" description="Title order 1 → 6.">
        <Stack gap="xs">
          {TITLE_ORDERS.map((order) => (
            <Title key={order} order={order}>
              Title order {order}
            </Title>
          ))}
        </Stack>
      </Section>

      <Section title="Text sizes & colors">
        <Stack gap="xs">
          {TEXT_SIZES.map((size) => (
            <Text key={size} size={size}>
              Text size {size} — the quick brown fox jumps over the lazy dog
            </Text>
          ))}
          <Divider my="xs" />
          <Text c="dimmed">Dimmed text</Text>
          <Text c="primary">Primary colored text</Text>
          <Text c="red">Error colored text</Text>
          <Text fw={700}>Bold weight</Text>
          <Text fs="italic">Italic style</Text>
          <Text td="underline">Underlined</Text>
          <Text
            variant="gradient"
            gradient={{ from: "primary", to: "grape", deg: 90 }}
            fw={700}
            size="xl"
          >
            Gradient text
          </Text>
          <Text truncate="end" maw={320}>
            Truncated text that is far too long to fit on a single line within the available width
          </Text>
        </Stack>
      </Section>

      <Section title="Inline elements">
        <Text>
          Use <Code>inline code</Code>, <Mark>highlighted marks</Mark>, an{" "}
          <Anchor href="#">anchor link</Anchor>, and{" "}
          <Highlight component="span" highlight="needle">
            search a needle in this haystack
          </Highlight>{" "}
          inside a paragraph.
        </Text>
        <Code block>{`const theme = createTheme({\n  primaryColor: "yellow",\n});`}</Code>
      </Section>

      <Section title="Blockquote & lists">
        <Blockquote color="primary" icon={<InfoIcon size={20} />} cite="– Mantine docs">
          Showcase stories let you tweak the theme and see every component update at once.
        </Blockquote>
        <List type="ordered" spacing="xs">
          <List.Item>Edit theme.ts</List.Item>
          <List.Item>Glance at the showcase</List.Item>
          <List.Item>Repeat</List.Item>
        </List>
      </Section>
    </ShowcasePage>
  ),
});
