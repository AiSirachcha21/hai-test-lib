import { ComponentProps } from "react";
import { clsx } from "clsx";

type ButtonVariants = "primary" | "secondary" | "tertiary";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariants;
}

const Button = ({ variant = "primary", ...buttonProps }: ButtonProps) => {
  return (
    <button className={clsx(variant === "primary" && "bg-violet")}>
      {buttonProps.children}
    </button>
  );
};

export default Button;
