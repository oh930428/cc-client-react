import React from "react";
import { Story, Meta } from "@storybook/react";

import { Icons } from "../components/index";
import { IconListProps } from "components/Icons";

export default {
  title: "Components/IconList",
  component: Icons,
} as Meta;

const Template: Story<IconListProps> = (args) => {
  return <Icons items={args.items} />;
};

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: 1,
      iconName: "twitter",
      iconImage: require("../assets/iconsImage/twitterWhite.png"),
      iconBgColor: "#63B3ED",
      style: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        padding: "8px",
      },
    },
    {
      id: 2,
      iconName: "facebook",
      iconImage: require("../assets/iconsImage/facebookWhite.png"),
      iconBgColor: "#3182CE",
      style: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        padding: "8px",
      },
    },
    {
      id: 3,
      iconName: "dribble",
      iconImage: require("../assets/iconsImage/dribbleWhite.png"),
      iconBgColor: "#24DBAF",
      style: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        padding: "8px",
      },
    },
    {
      id: 4,
      iconName: "google",
      iconImage: require("../assets/iconsImage/googleWhite.png"),
      iconBgColor: "#E53E3E",
      style: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        padding: "8px",
      },
    },
    {
      id: 5,
      iconName: "instagram",
      iconImage: require("../assets/iconsImage/instagramWhite.png"),
      iconBgColor: "#2D3748",
      style: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        padding: "8px",
      },
    },
  ],
};

export const WhiteCircle = Template.bind({});
WhiteCircle.args = {
  items: [
    {
      id: 1,
      iconName: "twitter",
      iconImage: require("../assets/iconsImage/twitter.png"),
      iconShadow:
        "0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)",
      style: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        padding: "8px",
      },
    },
    {
      id: 2,
      iconName: "facebook",
      iconImage: require("../assets/iconsImage/facebook.png"),
      iconShadow:
        "0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)",
      style: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        padding: "8px",
      },
    },
    {
      id: 3,
      iconName: "dribble",
      iconImage: require("../assets/iconsImage/dribble.png"),
      iconShadow:
        "0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)",
      style: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        padding: "8px",
      },
    },
    {
      id: 4,
      iconName: "github",
      iconImage: require("../assets/iconsImage/github.png"),
      iconShadow:
        "0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)",
      style: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        padding: "8px",
      },
    },
  ],
};
