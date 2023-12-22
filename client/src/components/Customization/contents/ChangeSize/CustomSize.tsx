import { ChangeEvent, useState } from "react"

const CustomSize = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  const data = [
    {
      id: 1,
      placeholder: "Bust"
    },
    {
      id: 2,
      placeholder: "Wast"
    },
    {
      id: 3,
      placeholder: "Hip"
    },
    {
      id: 4,
      placeholder: "Height"
    },
  ]
  return (
    <div className="customSizes_container">
      <ul className="customSizes_data">
        {data.map((opt: any) =>
        (<li key={opt.id}>
          <input type="number" placeholder={opt.placeholder} />
        </li>)
        )}
      </ul>
      <div>
        <label className="label_for_switch">
          <span className="switch_opt" >IN</span>
          <input checked={checked} type="checkbox" onChange={handleChange} className="switch_inp" />
          <div className="switch_btn" />
          <span className="switch_opt">CM</span>
        </label>
      </div>
    </div>
  )
}


export default CustomSize