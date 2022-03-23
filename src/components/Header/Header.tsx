import { IconButton } from "../IconButton/IconButton";
import { StyledHeader } from "./styles";
import { useAuth } from "../../context/AuthProvider";

export const Header = () => {
  const { googleSignIn, userConfig } = useAuth();
  const { photoURL, displayName } = userConfig;
  return (
    <StyledHeader>
      <IconButton iconName="menu" height={20} width={20} />
      <IconButton
        onClick={googleSignIn}
        iconName="profile"
        userProfilePicture={userConfig.photoURL}
        height={30}
        width={30}
      />
    </StyledHeader>
  );
};
