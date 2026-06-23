import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Group,
  NumberFormatter,
  Paper,
  Progress,
  RingProgress,
  Select,
  SimpleGrid,
  Stack,
  Switch,
  Table,
  Tabs,
  Text,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  ArrowRightIcon,
  BellIcon,
  CaretRightIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  TrendUpIcon,
  WalletIcon,
} from "@phosphor-icons/react";
import preview from "storybook/preview";

const meta = preview.meta({
  title: "Showcase/Overview",
  parameters: {
    layout: "fullscreen",
  },
});

const STATS = [
  { label: "Balance", value: 42100, icon: WalletIcon, color: undefined },
  { label: "Income", value: 12450, icon: TrendUpIcon, color: "teal" },
  { label: "Spending", value: 8204, icon: CreditCardIcon, color: "grape" },
] as const;

const TRANSACTIONS = [
  { name: "Stripe payout", date: "Jun 21", amount: 1248.75, status: "Completed" },
  { name: "AWS", date: "Jun 20", amount: -312.4, status: "Completed" },
  { name: "Figma", date: "Jun 18", amount: -45.0, status: "Pending" },
  { name: "Client invoice", date: "Jun 15", amount: 3200.0, status: "Completed" },
];

/** A single composed dashboard exercising layout, color and elevation together. */
export const Overview = meta.story({
  render: () => (
    <Box p="xl" maw={1280} mx="auto">
      <Stack gap="xl">
        {/* Header */}
        <Group justify="space-between" align="flex-end">
          <div>
            <Title order={2}>Good morning, Roy</Title>
            <Text c="dimmed" size="sm">
              Here's what's happening with your accounts today.
            </Text>
          </div>
          <Group>
            <ActionIcon variant="default" size="lg" aria-label="Notifications">
              <BellIcon size={18} />
            </ActionIcon>
            <Button leftSection={<CurrencyDollarIcon size={16} />}>Transfer</Button>
          </Group>
        </Group>

        {/* Stat cards */}
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          {STATS.map((stat) => (
            <Card key={stat.label} withBorder padding="lg" radius="md">
              <Group justify="space-between">
                <Text size="sm" c="dimmed">
                  {stat.label}
                </Text>
                <ThemeIcon variant="light" color={stat.color} radius="md">
                  <stat.icon size={16} />
                </ThemeIcon>
              </Group>
              <Text fw={700} fz={28} mt="sm">
                <NumberFormatter prefix="$" value={stat.value} thousandSeparator />
              </Text>
              <Text size="xs" c="teal" mt={4}>
                ▲ 12.5% vs last month
              </Text>
            </Card>
          ))}
        </SimpleGrid>

        <Grid gap="lg">
          {/* Left: transactions */}
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Paper withBorder radius="md" p="lg" h="100%">
              <Group justify="space-between" mb="md">
                <Title order={4}>Recent activity</Title>
                <Tabs defaultValue="all" variant="pills">
                  <Tabs.List>
                    <Tabs.Tab value="all">All</Tabs.Tab>
                    <Tabs.Tab value="in">Income</Tabs.Tab>
                    <Tabs.Tab value="out">Spending</Tabs.Tab>
                  </Tabs.List>
                </Tabs>
              </Group>
              <Table verticalSpacing="sm" highlightOnHover>
                <Table.Tbody>
                  {TRANSACTIONS.map((tx) => (
                    <Table.Tr key={tx.name}>
                      <Table.Td>
                        <Group gap="sm">
                          <Avatar name={tx.name} color="initials" size="sm" radius="xl" />
                          <div>
                            <Text size="sm" fw={500}>
                              {tx.name}
                            </Text>
                            <Text size="xs" c="dimmed">
                              {tx.date}
                            </Text>
                          </div>
                        </Group>
                      </Table.Td>
                      <Table.Td>
                        <Badge
                          variant="light"
                          color={tx.status === "Completed" ? "teal" : "yellow"}
                        >
                          {tx.status}
                        </Badge>
                      </Table.Td>
                      <Table.Td ta="right">
                        <Text size="sm" fw={600} c={tx.amount < 0 ? undefined : "teal"}>
                          <NumberFormatter
                            prefix={tx.amount < 0 ? "-$" : "$"}
                            value={Math.abs(tx.amount)}
                            thousandSeparator
                            decimalScale={2}
                            fixedDecimalScale
                          />
                        </Text>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
              <Button variant="subtle" rightSection={<ArrowRightIcon size={16} />} mt="sm">
                View all transactions
              </Button>
            </Paper>
          </Grid.Col>

          {/* Right: goal + quick transfer */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="lg">
              <Card withBorder radius="md" padding="lg">
                <Group justify="space-between">
                  <Title order={5}>Savings goal</Title>
                  <Badge variant="dot" color="teal">
                    On track
                  </Badge>
                </Group>
                <Group mt="md" justify="center">
                  <RingProgress
                    size={140}
                    thickness={12}
                    roundCaps
                    sections={[{ value: 68, color: "var(--mantine-primary-color-filled)" }]}
                    label={
                      <Text ta="center" fw={700} fz="lg">
                        68%
                      </Text>
                    }
                  />
                </Group>
                <Text ta="center" size="sm" c="dimmed">
                  $10,200 of $15,000
                </Text>
              </Card>

              <Card withBorder radius="md" padding="lg">
                <Title order={5} mb="md">
                  Quick transfer
                </Title>
                <Stack gap="sm">
                  <TextInput
                    label="Amount"
                    placeholder="0.00"
                    leftSection={<CurrencyDollarIcon size={16} />}
                  />
                  <Select
                    label="From"
                    defaultValue="checking"
                    data={[
                      { value: "checking", label: "Main Checking ·8402" },
                      { value: "savings", label: "High Yield ·1192" },
                    ]}
                  />
                  <Switch label="Make this recurring" />
                  <Divider />
                  <Button fullWidth rightSection={<CaretRightIcon size={16} />}>
                    Continue
                  </Button>
                </Stack>
              </Card>

              <Card withBorder radius="md" padding="lg">
                <Text size="sm" fw={500} mb={6}>
                  Monthly budget
                </Text>
                <Progress value={74} mb={4} />
                <Text size="xs" c="dimmed">
                  $3,700 spent of $5,000
                </Text>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
    </Box>
  ),
});
