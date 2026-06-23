import {
  Checkbox,
  Chip,
  ColorInput,
  Fieldset,
  Group,
  MultiSelect,
  NumberInput,
  PasswordInput,
  PinInput,
  Radio,
  Rating,
  SegmentedControl,
  Select,
  SimpleGrid,
  Slider,
  Stack,
  Switch,
  Textarea,
  TextInput,
} from "@mantine/core";
import type { MantineSize } from "@mantine/core";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import preview from "storybook/preview";

import { Matrix, Section, ShowcasePage } from "@/showcase/showcase";

const meta = preview.meta({
  title: "Showcase/Inputs",
  parameters: {
    layout: "fullscreen",
    options: { showPanel: false },
  },
});

const SIZES: MantineSize[] = ["xs", "sm", "md", "lg", "xl"];
const FRUIT = ["Apple", "Banana", "Cherry", "Mango"];

export const Inputs = meta.story({
  render: () => (
    <ShowcasePage>
      <Section
        title="Text inputs — states"
        description="Default, filled, error and disabled across the variants you'll theme most."
      >
        <Matrix
          rows={["default", "filled", "unstyled"] as const}
          cols={["normal", "with value", "error", "disabled"] as const}
          rowLabel={(v) => v}
          colLabel={(c) => c}
        >
          {(variant, state) => (
            <TextInput
              variant={variant}
              w={180}
              placeholder="Name"
              defaultValue={state === "with value" ? "Jane Doe" : undefined}
              error={state === "error" ? "Required field" : undefined}
              disabled={state === "disabled"}
            />
          )}
        </Matrix>
      </Section>

      <Section title="Sizes" description="A single input swept across all sizes.">
        <Stack>
          {SIZES.map((size) => (
            <TextInput
              key={size}
              size={size}
              label={`Size ${size}`}
              placeholder="Search…"
              leftSection={<MagnifyingGlassIcon size={16} />}
            />
          ))}
        </Stack>
      </Section>

      <Section
        title="Input family"
        description="The full set of @mantine/core inputs sharing the theme."
      >
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          <TextInput label="Text input" placeholder="Type here" />
          <PasswordInput label="Password" placeholder="••••••••" />
          <NumberInput label="Number" placeholder="0" prefix="$" thousandSeparator />
          <Select label="Select" placeholder="Pick one" data={FRUIT} />
          <MultiSelect
            label="Multi select"
            placeholder="Pick some"
            data={FRUIT}
            defaultValue={["Apple"]}
          />
          <ColorInput label="Color" defaultValue="#fab005" />
          <Textarea label="Textarea" placeholder="Message" autosize minRows={2} />
        </SimpleGrid>
      </Section>

      <Section
        title="Selection controls"
        description="Checkbox, Radio and Switch — primary color in action."
      >
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
          <Fieldset legend="Checkbox">
            <Stack gap="xs">
              <Checkbox label="Default" defaultChecked />
              <Checkbox label="Unchecked" />
              <Checkbox label="Indeterminate" indeterminate />
              <Checkbox label="Disabled" disabled defaultChecked />
            </Stack>
          </Fieldset>

          <Fieldset legend="Radio">
            <Radio.Group defaultValue="a">
              <Stack gap="xs">
                <Radio value="a" label="Option A" />
                <Radio value="b" label="Option B" />
                <Radio value="c" label="Disabled" disabled />
              </Stack>
            </Radio.Group>
          </Fieldset>

          <Fieldset legend="Switch">
            <Stack gap="xs">
              <Switch label="On" defaultChecked />
              <Switch label="Off" />
              <Switch label="Disabled" disabled defaultChecked />
            </Stack>
          </Fieldset>
        </SimpleGrid>
      </Section>

      <Section
        title="Choice & range"
        description="SegmentedControl, Chip, Slider, Rating, PinInput."
      >
        <Stack gap="lg">
          <SegmentedControl data={["Daily", "Weekly", "Monthly"]} defaultValue="Weekly" />
          <Chip.Group multiple defaultValue={["react"]}>
            <Group>
              <Chip value="react">React</Chip>
              <Chip value="vue">Vue</Chip>
              <Chip value="svelte">Svelte</Chip>
            </Group>
          </Chip.Group>
          <Slider
            defaultValue={40}
            marks={[{ value: 25 }, { value: 50 }, { value: 75 }]}
            maw={360}
          />
          <Group>
            <Rating defaultValue={3} />
            <PinInput length={4} defaultValue="12" />
          </Group>
        </Stack>
      </Section>
    </ShowcasePage>
  ),
});
