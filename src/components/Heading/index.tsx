import React from "react";

const sizes = {
  textxs: "text-[12px] font-medium",
  texts: "text-[14px] font-medium",
  headingxs: "text-[12px] font-bold",
  headings: "text-[14px] font-semibold",
  headingmd: "text-[16px] font-bold",
};

export type HeadingProps = Partial<{
  className: string;
  as: React.ElementType;  // Replace 'any' with 'React.ElementType'
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "headingmd",
  as,
  ...restProps
}) => {
  const Component = as || "h6"; // Use 'as' prop or default to 'h6'
  return (
    <Component
      className={`text-[#1a1a1a] font-['Gilroy'] ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
