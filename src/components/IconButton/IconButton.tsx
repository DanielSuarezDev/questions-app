import { FC } from "react";

import { Container, Image } from "./styles";
import menu from "../../assets/icons/menu.svg";
import profile from "../../assets/icons/profile.svg";

interface IconButtonProps {
  iconName: string;
  height?: number;
  width?: number;
  onClick?: any;
  userProfilePicture?: string;
}

interface Icons {
  [key: string]: string;
}

const icons: Icons = {
  menu,
  profile,
};

export const IconButton: FC<IconButtonProps> = ({
  iconName,
  height = 20,
  width = 20,
  onClick,
  userProfilePicture,
}) => (
  <Container onClick={onClick}>
    <Image
      src={userProfilePicture || icons[iconName]}
      alt={iconName}
      height={height}
      width={width}
    />
  </Container>
);
