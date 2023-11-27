import { Link } from "react-router-dom";

const UploadImg=()=>{
    return(
        <div>
            <div className="picture_guide">
                <Link to="/">Picture Upload Guide</Link>
            </div>
            <div className="upload_img">
                 <label>A picture tells a thousand words. Upload a pic
                 <input className="custom_photo" type="file"/>
                 </label>
            </div>
        </div>
    )
}

export default UploadImg;