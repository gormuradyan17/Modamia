import { useState } from "react";
import DropdownUI from "shared/ui/DropdownUI";

const FitIssue = () => {
    const [issueValue, setIssueValue] = useState("Fit Issue")
    const data = [
        {
            id: 1,
            text: "Tight in Bust"
        },
        {
            id: 2,
            text: "Loose in Bust"
        },
        {
            id: 3,
            text: "Tight in Waist"
        },
        {
            id: 4,
            text: "Loose in Waist"
        },
    ]
    const handleValue = (e: any) => {
        setIssueValue(e.text)
    }

    return (
        <>
            <DropdownUI options={data} onChange={handleValue} defaultValue={issueValue} />
        </>
    )
}

export default FitIssue;