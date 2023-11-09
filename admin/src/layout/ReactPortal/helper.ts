export function createWrapperAndAppendToBody(wrapperId: string) {
    const wrapperElement = document.createElement("div");
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
  }
  
  export const checkOffsetHeight = (selector: any) => {
    const elem = document.querySelector(selector);
    const top = elem && elem.getBoundingClientRect().top - 90;
    let stack: any = [];
    let prevScrollY = 0;
  
    const move = () => {
      let point = window.scrollY + 20 > top ? top - window.scrollY : 20;
    
      if (top !== stack[0]) {
        stack = [top];
      } else {
        stack.push(top);
      }
    
      window.scrollBy({
        top: point,
      });
  
      if (prevScrollY === window.scrollY) return;
  
      if (window.scrollY + 10 < top) {
        prevScrollY = window.scrollY;
        requestAnimationFrame(move)
      }
    }
  
    return move;
  }