export interface MoveOptions {
    translateX: string;
    translateY: string;
    rotateX: string;
    rotateY: string;
    scaleX: string;
    scaleY: string;
    skewX: string;
    skewY: string;
    easing: string;
}

export type AnimationType = Array<Keyframe>;
export type AnimationObject = Record<string, AnimationType>

export interface AnimationOptions {
    duration: number;
    fill?: FillMode;
}