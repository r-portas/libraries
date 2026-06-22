import {
  Alert,
  Badge,
  Group,
  Loader,
  Notification,
  Progress,
  RingProgress,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import type { BadgeVariant } from "@mantine/core";
import { CheckCircleIcon, InfoIcon, WarningIcon, XIcon } from "@phosphor-icons/react";
import preview from "storybook/preview";

import { Matrix, Section, ShowcasePage } from "@/showcase/showcase";

const meta = preview.meta({
  title: "Showcase/Feedback",
  parameters: {
    layout: "fullscreen",
  },
});

const BADGE_VARIANTS: BadgeVariant[] = ["filled", "light", "outline", "dot", "transparent"];
const COLORS = ["primary", "red", "teal", "grape", "gray"] as const;

export const Feedback = meta.story({
  render: () => (
    <ShowcasePage>
      <Section title="Badges" description="Variant × color — the densest theme-contrast check.">
        <Matrix rows={BADGE_VARIANTS} cols={[...COLORS]} rowLabel={(v) => v} colLabel={(c) => c}>
          {(variant, color) => (
            <Badge variant={variant} color={color === "primary" ? undefined : color}>
              Badge
            </Badge>
          )}
        </Matrix>
      </Section>

      <Section title="Alerts" description="Each semantic color with an icon.">
        <Stack>
          <Alert variant="light" color="blue" title="Information" icon={<InfoIcon size={18} />}>
            A neutral, informational message for the reader.
          </Alert>
          <Alert variant="light" color="teal" title="Success" icon={<CheckCircleIcon size={18} />}>
            Your changes were saved successfully.
          </Alert>
          <Alert variant="light" color="yellow" title="WarningIcon" icon={<WarningIcon size={18} />}>
            This action may have unintended consequences.
          </Alert>
          <Alert variant="filled" color="red" title="Error" icon={<XIcon size={18} />}>
            Something went wrong while processing the request.
          </Alert>
        </Stack>
      </Section>

      <Section title="Progress" description="Linear, ring and themed icons.">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
          <Stack gap="md">
            <Progress value={25} />
            <Progress value={50} color="teal" />
            <Progress value={75} color="grape" striped animated />
            <Progress.Root size="xl">
              <Progress.Section value={40}>
                <Progress.Label>Docs</Progress.Label>
              </Progress.Section>
              <Progress.Section value={30} color="teal">
                <Progress.Label>Code</Progress.Label>
              </Progress.Section>
            </Progress.Root>
          </Stack>
          <Group>
            <RingProgress
              sections={[{ value: 65, color: "var(--mantine-primary-color-filled)" }]}
              label={
                <Text ta="center" size="sm" fw={700}>
                  65%
                </Text>
              }
            />
            <RingProgress
              sections={[
                { value: 40, color: "teal" },
                { value: 25, color: "grape" },
                { value: 15, color: "red" },
              ]}
            />
          </Group>
        </SimpleGrid>
      </Section>

      <Section title="Loaders & icons" description="Loader types and ThemeIcon variants.">
        <Group gap="xl" align="center">
          <Loader type="oval" />
          <Loader type="bars" />
          <Loader type="dots" />
          <Loader color="grape" />
          {(["filled", "light", "outline"] as const).map((variant) => (
            <ThemeIcon key={variant} variant={variant} size="lg">
              <CheckCircleIcon size={18} />
            </ThemeIcon>
          ))}
        </Group>
      </Section>

      <Section
        title="Notifications & skeleton"
        description="Toast-style notifications and loading placeholders."
      >
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          <Stack>
            <Notification title="Uploaded" color="teal" icon={<CheckCircleIcon size={18} />}>
              Your file finished uploading.
            </Notification>
            <Notification title="Syncing" loading withCloseButton={false}>
              Fetching the latest data…
            </Notification>
          </Stack>
          <Stack>
            <Skeleton height={12} radius="xl" />
            <Skeleton height={12} mt={6} radius="xl" />
            <Skeleton height={12} mt={6} width="70%" radius="xl" />
            <Group mt="md">
              <Skeleton height={48} circle />
              <Skeleton height={48} radius="md" style={{ flex: 1 }} />
            </Group>
          </Stack>
        </SimpleGrid>
      </Section>
    </ShowcasePage>
  ),
});
