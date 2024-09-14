import React from "react";

// Define the sizes with their respective values
const sizes: {
  [key: string]: string;
} = {
  small: "8px",
  medium: "12px",
  large: "16px",
};

// Define a type for allowed elements for the `as` prop
type AllowedElements = keyof JSX.IntrinsicElements;

export type TextProps = Partial<{
  className: string;
  as: AllowedElements; // Specify allowed elements
  size: keyof typeof sizes;
}> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

// Functional component with type-safe props
const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as = "p", // Default element type
  size = "medium", // Default size
  ...restProps
}) => {
  // Determine the component to render
  const Component = as;

  return (
    <Component className={`${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
