import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import data from "./currency.json";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useClickOutSide from "utils/hooks/useClickOutside";

const CurrencyContent = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState(data[0]);
  const ref = useRef<HTMLDivElement | null>(null)
  useClickOutSide(ref, () => setIsActive(false), isActive)

  return (
    <div className="dropdown" ref={ref}>
      <div
        onClick={(e) => {
          setIsActive(!isActive);
        }}
        className="dropdown-btn"
      >
        <div className="item"
>
        <img src={selected.flagImg} alt="" />
          {selected.title}
        </div>
         
        <span className="icon_caret">
          {isActive ? (
            <FontAwesomeIcon icon={faCaretUp} />
          ) : (
            <FontAwesomeIcon icon={faCaretDown} />
          )}
        </span>
      </div>
      <ul
        className="dropdown-content customYScrollbar"
        style={{ display: isActive ? "block" : "none" }}
      >
        {data.map((item) => (
          <li
            key={item.id}
            onClick={(e: any) => {
              setIsSelected(item);
              setIsActive(!isActive);
            }}
            className="item"
          >
            <img src={item.flagImg} alt="" />
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyContent;
