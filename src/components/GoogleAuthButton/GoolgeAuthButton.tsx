import { FC } from "react";
import { Container, InitGoogle, LogoutGoogle } from "./styles";

export const GoogleAuthButton: FC<any> = ({ googleSignIn, googleLogout }) => {
  return (
    <>
      <Container>
        <InitGoogle onClick={googleSignIn}>Iniciar sesion</InitGoogle>
        <LogoutGoogle onClick={googleLogout}>Cerrar sesion</LogoutGoogle>
      </Container>
    </>
  );
};
