import { Meta, StoryObj } from "@storybook/react";
import ToggleSwitch from "../../components/ToggleSwitch";
import { useEffect, useState } from "react";

const meta: Meta<typeof ToggleSwitch> = {
  title: "Components/ToggleSwitch",
  component: ToggleSwitch,
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    onToggle: { action: "toggled" },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [enabled, setEnabled] = useState(args.checked);
    return <ToggleSwitch {...args} checked={enabled} onToggle={setEnabled} />;
  },
  args: {
    checked: false,
    disabled: false,
  },
};

export const DarkMode: Story = {
  render: (args) => {
    const [enabled, setEnabled] = useState(args.checked);

    useEffect(() => {
      document.body.style.backgroundColor = enabled ? "#121212" : "#ffffff";
      document.body.style.color = enabled ? "#ffffff" : "#000000";
    }, [enabled]);

    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Dark Mode Toggle</h2>
        <ToggleSwitch {...args} checked={enabled} onToggle={setEnabled} />
      </div>
    );
  },
  args: {
    checked: false,
    disabled: false,
  },
};
