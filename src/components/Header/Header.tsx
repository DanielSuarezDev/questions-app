import { IconButton } from "../IconButton/IconButton";
import { StyledHeader } from "./styles";
import { useAuth } from "../../context/AuthProvider";
import { useState } from "react";
import { GoogleAuthButton } from "../GoogleAuthButton/GoolgeAuthButton";

export const Header = () => {
  const { googleSignIn, googleLogout, userConfig } = useAuth();
  const { photoURL, displayName } = userConfig;

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <StyledHeader>
      {show && (
        <GoogleAuthButton
          googleSignIn={googleSignIn}
          googleLogout={googleLogout}
        />
      )}
      <IconButton iconName="menu" height={20} width={20} />
      <IconButton
        onClick={handleClick}
        iconName="profile"
        userProfilePicture={photoURL}
        height={30}
        width={30}
      />
    </StyledHeader>
  );
};
