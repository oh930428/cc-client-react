import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputList from "./InputList";

export default {
  title: "Components/InputList",
  component: InputList,
} as ComponentMeta<typeof InputList>;

const Template: ComponentStory<typeof InputList> = (args) => (
  <InputList {...args} />
);
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
};
