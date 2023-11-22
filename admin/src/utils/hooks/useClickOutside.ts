import { CallbackSkeletonType } from 'shared/objectModels/GenericModel';
import { useEffect } from "react";

const useClickOutSide = (refList: any, handler: CallbackSkeletonType, dependency: any = false) => {
  useEffect(() => {
    const listener = (event: any) => {
      let shouldCallHandler = true;
      refList?.length && refList?.forEach((ref: any) => {
        if (ref.current && ref.current.contains(event.target)) {
          shouldCallHandler = false;
        }
      });

      if (shouldCallHandler) {
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
