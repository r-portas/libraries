import {
  Anchor,
  Breadcrumbs,
  Center,
  NavLink,
  Pagination,
  Paper,
  SimpleGrid,
  Stack,
  Stepper,
  Tabs,
} from "@mantine/core";
import { ChartBarIcon, CreditCardIcon, GearIcon, HouseIcon } from "@phosphor-icons/react";
import preview from "storybook/preview";

import { Section, ShowcasePage } from "@/showcase/showcase";

const meta = preview.meta({
  title: "Showcase/Navigation",
  parameters: {
    layout: "fullscreen",
    options: { showPanel: false },
  },
});

export const Navigation = meta.story({
  render: () => (
    <ShowcasePage>
      <Section title="Tabs" description="Default, pills and vertical orientations.">
        <Stack gap="xl">
          <Tabs defaultValue="overview">
            <Tabs.List>
              <Tabs.Tab value="overview" leftSection={<HouseIcon size={16} />}>
                Overview
              </Tabs.Tab>
              <Tabs.Tab value="analytics" leftSection={<ChartBarIcon size={16} />}>
                Analytics
              </Tabs.Tab>
              <Tabs.Tab value="settings" leftSection={<GearIcon size={16} />}>
                Settings
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>

          <Tabs variant="pills" defaultValue="overview">
            <Tabs.List>
              <Tabs.Tab value="overview">Overview</Tabs.Tab>
              <Tabs.Tab value="analytics">Analytics</Tabs.Tab>
              <Tabs.Tab value="settings">Settings</Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </Stack>
      </Section>

      <Section title="Stepper" description="Multi-step progress, second step active.">
        <Stepper active={1}>
          <Stepper.Step label="Account" description="Create profile" />
          <Stepper.Step label="Verify" description="Email & phone" />
          <Stepper.Step label="Connect" description="Link a bank" />
          <Stepper.Completed>All steps complete</Stepper.Completed>
        </Stepper>
      </Section>

      <Section title="NavLink" description="Sidebar navigation with active and nested states.">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          <Paper withBorder radius="md" p={4} maw={280}>
            <NavLink label="Dashboard" leftSection={<HouseIcon size={16} />} active />
            <NavLink label="Analytics" leftSection={<ChartBarIcon size={16} />} />
            <NavLink
              label="Billing"
              leftSection={<CreditCardIcon size={16} />}
              childrenOffset={28}
              defaultOpened
            >
              <NavLink label="Invoices" />
              <NavLink label="Payment methods" />
            </NavLink>
            <NavLink label="Settings" leftSection={<GearIcon size={16} />} />
          </Paper>
        </SimpleGrid>
      </Section>

      <Section title="Pagination, Breadcrumbs & Anchor" description="Wayfinding bits.">
        <Stack gap="lg">
          <Breadcrumbs>
            <Anchor href="#">Home</Anchor>
            <Anchor href="#">Accounts</Anchor>
            <Anchor href="#">Checking</Anchor>
          </Breadcrumbs>
          <Center>
            <Pagination total={10} defaultValue={3} />
          </Center>
        </Stack>
      </Section>
    </ShowcasePage>
  ),
});
