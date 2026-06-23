import {
  Button,
  Group,
  HoverCard,
  Indicator,
  Menu,
  Popover,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import {
  CopyIcon,
  DotsThreeIcon,
  GearIcon,
  SignOutIcon,
  TrashIcon,
  UserIcon,
} from "@phosphor-icons/react";
import preview from "storybook/preview";

import { Section, ShowcasePage } from "@/showcase/showcase";

const meta = preview.meta({
  title: "Showcase/Overlays",
  parameters: {
    layout: "fullscreen",
    options: { showPanel: false },
  },
});

export const Overlays = meta.story({
  render: () => (
    <ShowcasePage>
      <Text size="sm" c="dimmed">
        Overlays open on interaction — hover, focus or click each trigger. Modal and Drawer are best
        explored from their own component stories with controls.
      </Text>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
        <Section title="Tooltip" description="Hover or focus the buttons.">
          <Group>
            <Tooltip label="Default tooltip">
              <Button variant="default">Hover me</Button>
            </Tooltip>
            <Tooltip label="With arrow" withArrow color="grape">
              <Button variant="default">Arrow</Button>
            </Tooltip>
            <Tooltip label="Opened" opened>
              <Button variant="default">Always on</Button>
            </Tooltip>
          </Group>
        </Section>

        <Section title="HoverCard" description="Rich content on hover.">
          <HoverCard width={260} shadow="md">
            <HoverCard.Target>
              <Button variant="light">Hover for details</Button>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Text size="sm">
                HoverCard shows supplementary content without a click — good for previews and
                profile cards.
              </Text>
            </HoverCard.Dropdown>
          </HoverCard>
        </Section>

        <Section title="Popover" description="Click to toggle a floating panel.">
          <Popover width={280} position="bottom" withArrow shadow="md">
            <Popover.Target>
              <Button>Open popover</Button>
            </Popover.Target>
            <Popover.Dropdown>
              <Stack gap="xs">
                <Text size="sm" fw={500}>
                  Quick edit
                </Text>
                <TextInput size="xs" label="Name" placeholder="Jane Doe" />
                <Button size="xs">Save</Button>
              </Stack>
            </Popover.Dropdown>
          </Popover>
        </Section>

        <Section title="Menu" description="Dropdown with items, sections and a destructive action.">
          <Group>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Button variant="default" leftSection={<DotsThreeIcon size={16} />}>
                  Actions
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Account</Menu.Label>
                <Menu.Item leftSection={<UserIcon size={14} />}>Profile</Menu.Item>
                <Menu.Item leftSection={<GearIcon size={14} />}>Settings</Menu.Item>
                <Menu.Divider />
                <Menu.Item leftSection={<CopyIcon size={14} />}>Duplicate</Menu.Item>
                <Menu.Item color="red" leftSection={<TrashIcon size={14} />}>
                  Delete
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item leftSection={<SignOutIcon size={14} />}>Sign out</Menu.Item>
              </Menu.Dropdown>
            </Menu>

            <Indicator label="3" size={16}>
              <Button variant="default">Notifications</Button>
            </Indicator>
          </Group>
        </Section>
      </SimpleGrid>
    </ShowcasePage>
  ),
});
