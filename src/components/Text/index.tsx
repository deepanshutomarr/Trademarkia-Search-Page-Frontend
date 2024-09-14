import React from "react";

// Define the sizes with their respective values
const sizes: {
  [key: string]: string;
} = {
  small: "8px",
  medium: "12px",
  large: "16px",
};

// Define a type for the props
export type TextProps = Partial<{
  className: string;
  as: React.ElementType; // Use React.ElementType for flexibility
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

// Functional component with type-safe props
const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as: Component = "p", // Default to <p> if `as` is not provided
  size = "medium", // Default size
  ...restProps
}) => {
  return (
    <Component className={`${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
