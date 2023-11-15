import { HTMLProps } from "react";
import "./style.scss";
import { CallbackSkeletonValue } from "shared/objectModels/GenericModel";
import LoaderCircleUI from "../LoaderCircleUI/LoaderCircleUI";

interface Props extends HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  version?: string;
  classN?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const versions: Record<string, string> = {
  default: "default-btn",
  red: 'red-btn',
  orange: 'orange-btn',
  blue: 'blue-btn',
  green: 'green-btn',
  gray: 'gray-btn',
}

export const ButtonUI: React.FC<Props> = ({
  children,
  type = "button",
  version = "default",
  classN = '',
  disabled = false,
  isLoading = false,
  onClick = CallbackSkeletonValue,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      className={`ButtonUI ${classN} ${versions[version]} ${disabled ? '_disabled' : ''}`}
      type={type}
      onClick={(event) => !disabled && !isLoading && onClick(event)}
    >{isLoading ? (<LoaderCircleUI />) : children}</button>
  )
}