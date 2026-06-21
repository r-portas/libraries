import preview from "../../../.storybook/preview";
import { Button } from "./button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

const meta = preview.meta({
  component: Card,
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["default", "sm"],
    },
  },
});

export const Default = meta.story({
  args: {
    className: "w-80",
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>
          Deploy your new project in one click.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Start from a template or import an existing repository to get going.
        </p>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
});

export const WithAction = meta.story({
  args: {
    className: "w-80",
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Team plan</CardTitle>
        <CardDescription>Billed monthly per seat.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            Manage
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Includes unlimited projects and priority support.</p>
      </CardContent>
    </Card>
  ),
});

export const Small = meta.story({
  args: {
    size: "sm",
    className: "w-72",
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Compact card</CardTitle>
        <CardDescription>Tighter spacing via size="sm".</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Useful for dense layouts and lists.</p>
      </CardContent>
    </Card>
  ),
});

export const ContentOnly = meta.story({
  args: {
    className: "w-80",
  },
  render: (args) => (
    <Card {...args}>
      <CardContent>
        <p>A minimal card with only content and no header or footer.</p>
      </CardContent>
    </Card>
  ),
});
