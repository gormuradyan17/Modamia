import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { createWrapperAndAppendToBody } from "./helper";


function ReactPortal({ children, wrapperId = "react-portal-wrapper" }: any) {
  const [wrapperElement, setWrapperElement] = useState<any>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)!;
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }

    setWrapperElement(element);

    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  let element = document.getElementById(wrapperId);

  if (!element) {
    element = createWrapperAndAppendToBody(wrapperId);
  }

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
}

export default ReactPortal;