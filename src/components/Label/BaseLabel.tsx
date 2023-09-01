import { FC } from "react";
import style from "@/components/Label/BaseLabel.module.css";

export type LabelFormat = "text" | "heading1" | "heading2" | "heading3";

export interface BaseLabelProps extends React.ComponentPropsWithoutRef<"p"> {
  text: string;
  format?: LabelFormat;
}

export const BaseLabel: FC<BaseLabelProps> = ({ text, format, ...props }) => {
  switch (format) {
    case "text":
      return <p className={`${style.txtLabel} ${props.className}`}>{text}</p>;
    case "heading1":
      return <h1 className={`${style.h1Label} ${props.className}`}>{text}</h1>;
    case "heading2":
      return <h2 className={`${style.h2Label} ${props.className}`}>{text}</h2>;
    case "heading3":
      return <h3 className={`${style.h3Label} ${props.className}`}>{text}</h3>;
    default:
      return <p className={`${style.txtLabel} ${props.className}`}>{text}</p>;
  }
};

export default BaseLabel;
