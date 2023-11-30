import DropdownUI from "shared/ui/DropdownUI"
import { useState } from "react";

const FitPreference=()=>{
    const [fitPreference,setFitPreference]=useState("Fit Preference")
    const data=[
       {
        id:1,
        text:"Tight"
       },
       {
        id:2,
        text:"Fitted"
       },
       {
        id:3,
        text:"Semi-Fitted"
       },
       {
        id:4,
        text:"Loose"
       },
    ]
    const handleValue=(e:any)=>{
        setFitPreference(e.text)
    }
    
    return(
        <>
        <DropdownUI options={data} onChange={handleValue} defaultValue={fitPreference}/>
        <textarea className="textarea_fit" placeholder="Anything we should know to give you a fabulous fit?" spellCheck="false"></textarea>
        </>
    )
}

export default FitPreference;