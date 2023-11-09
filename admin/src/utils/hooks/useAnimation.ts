import { MutableRefObject, useRef } from "react";
import { AnimationOptions } from "shared/objectModels/AnimationModel";

type Animate = (flow: Array<Keyframe>, callback?: (response: any) => void, pending?: (response: any) => void) => boolean;

export const useAnimation = <T extends HTMLElement>(options: AnimationOptions): [ MutableRefObject<T | null>, Animate ] => {
    const ref = useRef<T>(null);
    const animate = (
        animationKeyframes: Array<Keyframe>,
        callback?: (response: any) => void,
        pending?: (response: any) => void
    ): boolean => {
        const element: T | null = ref.current;

        if (!element) return false

        const animation = element.animate(animationKeyframes, options);
        
        if(pending && animation.pending) {
            animation.ready.then((res) => pending(res));
        };

        if (callback) {
            animation.finished.then((res) => callback(res));
        };

        return true;
    };

    return [ ref, animate ];
}

