import { useTheme } from "next-themes";
import React from "react";

export interface IconProps {
  className?: string;
}

const NextJsIcon: React.FC<IconProps> = ({ className }: IconProps) => {
  const { theme } = useTheme();
  return (
    <svg
      fill="none"
      height="100"
      viewBox="0 0 15 15"
      width="100"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : "w-6 h-6"}
    >
      <path
        clipRule="evenodd"
        d="m0 7.5c0-4.14214 3.35786-7.5 7.5-7.5 4.1421 0 7.5 3.35786 7.5 7.5 0 2.587-1.3098 4.8681-3.3025 6.2163l-6.79063-9.50688c-.12634-.17687-.35247-.25186-.55946-.18553s-.34741.25879-.34741.47615v7.49996h1v-5.93973l5.8299 8.16183c-1.00329.498-2.1339.7779-3.3299.7779-4.14214 0-7.5-3.3579-7.5-7.5zm10 2.5v-6h1v6z"
        fill={theme === "dark" ? "#fff" : "#000"}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default NextJsIcon;
