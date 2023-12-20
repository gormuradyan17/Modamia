import React, { SVGProps } from "react";

import { Variant } from "./container/SnackbarContainer";

import SnackbarContent from "./content/SnackbarContent";
import SnackbarIconFrame from "./frame/SnackbarIconFrame";
import HeadingUI from "../HeadingUI/HeadingUI";
import './style.scss'

interface IProps {
  icon: SVGProps<SVGSVGElement>;
  variant: Variant;
  message: string;
}

const Snackbar: React.FC<IProps> = ({
  icon,
  variant,
  message,
}) => {

  return (
    <div className={`SnackbarStyles ${variant}`}>
      <SnackbarContent>
        <SnackbarIconFrame variant={variant}>{icon}</SnackbarIconFrame>
        <HeadingUI text={message} size="16px" color="#D9F0FA" />
      </SnackbarContent>
    </div>
  );
};

export default Snackbar;
