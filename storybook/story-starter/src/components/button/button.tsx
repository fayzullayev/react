import { ButtonContainer } from "./style.ts";
import { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  color?: string;
};

function Button({ children, color = "#fff" }: ButtonProps) {
  return (
    <ButtonContainer style={{ backgroundColor: color }}>
      {children}
    </ButtonContainer>
  );
}

export default Button;
