import React from "react";

import { ReactComponent as SnackbarSuccessIcon } from "../icons/Snackbar-success.svg";
import { ReactComponent as SnackbarErrorIcon } from "../icons/Snackbar-error.svg";
import { ReactComponent as SnackbarInfoIcon } from "../icons/Snackbar-info.svg";
import { ReactComponent as SnackbarWarningIcon } from "../icons/Snackbar-warning.svg";

import { CallbackSkeletonType } from "shared/objectModels/GenericModel";
import Snackbar from "..";
import './style.scss';

interface IProps {
  variant?: Variant;
  message?: string;
  handleClose?: CallbackSkeletonType;
}

export enum Variant {
  error = "error",
  success = "success",
  info = "info",
  warning = "warning",
}

const SnackbarContainer: React.FC<IProps> = ({
  variant = Variant.error,
  message = "You have successfully read this message.",
}) => {
  type Options = Record<Variant, any>;

  const snackbarIcon: Options = {
    error: <SnackbarErrorIcon />,
    success: <SnackbarSuccessIcon />,
    info: <SnackbarInfoIcon />,
    warning: <SnackbarWarningIcon />,
  };

  return (
    <div className='SnackbarContainer'>
      <Snackbar
        icon={snackbarIcon[variant]}
        message={message}
        variant={variant}
      />
    </div>
  )
};

export default SnackbarContainer;
