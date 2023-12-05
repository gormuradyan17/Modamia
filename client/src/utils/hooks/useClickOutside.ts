import { CallbackSkeletonType } from 'shared/objectModels/GenericModel';
import { useEffect } from "react";

const useClickOutSide = (ref: any, handler: CallbackSkeletonType, dependency: any = false) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependency]);

  return {};
};

export default useClickOutSide;