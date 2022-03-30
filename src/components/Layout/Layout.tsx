import { FC } from "react";
import { Header } from "../Header/Header";
import { StyledLayout } from "./styles";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  );
};
