import React from "react";

const sizes: {
  [key: string]: string;
} = {
  small: "8px",
  medium: "12px",
  large: "16px",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "",
  ...restProps
}) => {
  const Component = as || "p";
  return (
    <Component className={` ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
