import { useMemo, useRef } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import SnackbarContainer,{ Variant } from "shared/ui/SnackbarUI/container/SnackbarContainer";
import { AppendSnackbarOptions } from "shared/ui/SnackbarUI/interface/appendSnackbar";

const useSnackbar = () => {
  const notifyBar = useRef<HTMLDivElement>();
  const timeoutHistory = useRef<ReturnType<typeof setTimeout> | undefined>();

  const wrapperElement = useMemo(() => {
    let wrapperElement = document.getElementById("wrapperId");

    if (!wrapperElement) {
      wrapperElement = document.createElement("div");
      wrapperElement.setAttribute("id", "wrapperId");
      document.body.appendChild(wrapperElement);
    }

    return wrapperElement;
  }, []);

  const toHtml = (htmlString: string) => {
    const parser = new DOMParser();
    const html = parser.parseFromString(htmlString, "text/html");
    const notifyBarNode = html.body.children[0] as HTMLDivElement;

    return { notifyBarNode };
  };

  const removeItem = () => {
    wrapperElement.innerHTML = "";
    if (timeoutHistory.current) clearTimeout(timeoutHistory.current);
    timeoutHistory.current = undefined;
  };

  const appendSnackbar = (variant: Variant, options: AppendSnackbarOptions) => {
    removeItem();

    try {
      const { message, autoHideDuration = 6000 } = options;

      const { notifyBarNode } = toHtml(
        renderToStaticMarkup(
          <SnackbarContainer
            handleClose={removeItem}
            variant={variant}
            message={message}
          />
        )
      );

      wrapperElement.appendChild(notifyBarNode);

      notifyBar.current = notifyBarNode as HTMLDivElement;

      timeoutHistory.current = setTimeout(
        removeItem,
        autoHideDuration < 2000 ? 2000 : autoHideDuration
      );
    } catch (error) {
      console.log(error);
    }
  };

  return { appendSnackbar };
};

export default useSnackbar;
