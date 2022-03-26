import React from "react";
import { Story, Meta } from "@storybook/react";

import { Inputs } from "../components/index";
import { InputListProps } from "components/Inputs";

export default {
  title: "Components/InputList",
  component: Inputs,
  argTypes: {
    size: {
      options: ["Small", "Regular", "Large"],
      control: { type: "select" },
      defaultValue: ["Small"],
    },
  },
} as Meta;

const Template: Story<InputListProps> = (args) => <Inputs {...args} />;

export const BgColorGrey = Template.bind({});
BgColorGrey.args = {
  bgColor: "grey",
  items: [
    {
      id: 1,
      placeholder: "Placeholder",
    },
    {
      id: 2,
      placeholder: "Placeholder",
      frontIcon: require("../assets/iconsImage/lock.png"),
    },
    {
      id: 3,
      placeholder: "Placeholder",
      backIcon: require("../assets/iconsImage/person.png"),
    },
  ],
  size: "Small",
};

export const BgColorWhite = Template.bind({});
BgColorWhite.args = {
  bgColor: "white",
  items: [
    {
      id: 1,
      placeholder: "Placeholder",
    },
    {
      id: 2,
      placeholder: "Placeholder",
      frontIcon: require("../assets/iconsImage/lock.png"),
    },
    {
      id: 3,
      placeholder: "Placeholder",
      backIcon: require("../assets/iconsImage/person.png"),
    },
  ],
  size: "Small",
};
