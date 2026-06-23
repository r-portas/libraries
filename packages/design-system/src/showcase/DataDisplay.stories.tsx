import {
  Accordion,
  Avatar,
  Badge,
  Card,
  Group,
  Image,
  Indicator,
  List,
  Paper,
  SimpleGrid,
  Spoiler,
  Table,
  Text,
  ThemeIcon,
  Timeline,
  Title,
} from "@mantine/core";
import {
  CheckCircleIcon,
  GitBranchIcon,
  GitCommitIcon,
  GitPullRequestIcon,
} from "@phosphor-icons/react";
import preview from "storybook/preview";

import { Section, ShowcasePage } from "@/showcase/showcase";

const meta = preview.meta({
  title: "Showcase/Data Display",
  parameters: {
    layout: "fullscreen",
    options: { showPanel: false },
  },
});

const ROWS = [
  { name: "Main Checking", number: "•8402", balance: "$12,450.00", status: "Active" },
  { name: "High Yield Savings", number: "•1192", balance: "$42,100.00", status: "Active" },
  { name: "Travel Card", number: "•7731", balance: "$1,204.55", status: "Frozen" },
];

export const DataDisplay = meta.story({
  render: () => (
    <ShowcasePage>
      <Section title="Cards" description="Paper, Card with sections, and elevation via shadow.">
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          <Card withBorder padding="lg" radius="md">
            <Group justify="space-between" mb="xs">
              <Text fw={600}>Project Apollo</Text>
              <Badge>Active</Badge>
            </Group>
            <Text size="sm" c="dimmed">
              A bordered card with a header row and dimmed supporting copy.
            </Text>
          </Card>

          <Card withBorder padding="lg" radius="md">
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80"
                height={120}
                alt=""
              />
            </Card.Section>
            <Text fw={600} mt="md">
              Card.Section
            </Text>
            <Text size="sm" c="dimmed">
              Full-bleed media section bonded to the card body.
            </Text>
          </Card>

          <Paper withBorder shadow="md" p="lg" radius="md">
            <Text fw={600}>Paper · shadow md</Text>
            <Text size="sm" c="dimmed">
              Plain Paper relying on the theme shadow scale for elevation.
            </Text>
          </Paper>
        </SimpleGrid>
      </Section>

      <Section title="Table" description="Striped, with status badges.">
        <Table.ScrollContainer minWidth={480}>
          <Table striped highlightOnHover withTableBorder verticalSpacing="sm">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Account</Table.Th>
                <Table.Th>Number</Table.Th>
                <Table.Th>Balance</Table.Th>
                <Table.Th>Status</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {ROWS.map((row) => (
                <Table.Tr key={row.number}>
                  <Table.Td>{row.name}</Table.Td>
                  <Table.Td ff="monospace">{row.number}</Table.Td>
                  <Table.Td>{row.balance}</Table.Td>
                  <Table.Td>
                    <Badge variant="light" color={row.status === "Active" ? "teal" : "gray"}>
                      {row.status}
                    </Badge>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Section>

      <Section title="Avatars" description="Variants, groups and indicators.">
        <Group>
          <Avatar name="Jane Doe" color="initials" />
          <Avatar src="https://i.pravatar.cc/100?img=12" />
          <Avatar variant="filled">JD</Avatar>
          <Indicator inline processing color="teal" offset={6}>
            <Avatar name="Online" color="initials" />
          </Indicator>
          <Avatar.Group>
            <Avatar name="A B" color="initials" />
            <Avatar name="C D" color="initials" />
            <Avatar name="E F" color="initials" />
            <Avatar>+3</Avatar>
          </Avatar.Group>
        </Group>
      </Section>

      <Section title="Accordion & Timeline" description="Disclosure and chronological displays.">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <Accordion variant="separated" defaultValue="one">
            <Accordion.Item value="one">
              <Accordion.Control>What is a showcase story?</Accordion.Control>
              <Accordion.Panel>
                A single Storybook story rendering many components so theme changes are visible at a
                glance.
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="two">
              <Accordion.Control>Why matrices?</Accordion.Control>
              <Accordion.Panel>
                Sweeping variant × color × size surfaces regressions a single example would hide.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

          <Timeline active={1} bulletSize={24} lineWidth={2}>
            <Timeline.Item bullet={<GitBranchIcon size={12} />} title="Branched">
              <Text size="xs" c="dimmed">
                feature/design-system created
              </Text>
            </Timeline.Item>
            <Timeline.Item bullet={<GitCommitIcon size={12} />} title="Committed">
              <Text size="xs" c="dimmed">
                Storybook setup landed
              </Text>
            </Timeline.Item>
            <Timeline.Item bullet={<GitPullRequestIcon size={12} />} title="Opened PR">
              <Text size="xs" c="dimmed">
                Awaiting review
              </Text>
            </Timeline.Item>
          </Timeline>
        </SimpleGrid>
      </Section>

      <Section title="Lists & Spoiler" description="List with theme icons, and truncated content.">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <List
            spacing="xs"
            icon={
              <ThemeIcon size={20} radius="xl">
                <CheckCircleIcon size={12} />
              </ThemeIcon>
            }
          >
            <List.Item>Theme tokens render from theme.ts</List.Item>
            <List.Item>Matrices sweep every variant</List.Item>
            <List.Item>Compositions show real layouts</List.Item>
          </List>

          <Paper withBorder p="md" radius="md">
            <Title order={6} mb="xs">
              About
            </Title>
            <Spoiler maxHeight={48} showLabel="Show more" hideLabel="Hide">
              <Text size="sm" c="dimmed">
                This is a longer block of text used to demonstrate the Spoiler component. It
                collapses past a fixed height and reveals the rest on demand, which is handy for
                descriptions, changelogs, and anything else that would otherwise dominate the
                layout.
              </Text>
            </Spoiler>
          </Paper>
        </SimpleGrid>
      </Section>
    </ShowcasePage>
  ),
});
