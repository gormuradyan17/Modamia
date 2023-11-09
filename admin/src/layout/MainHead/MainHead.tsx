import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import './style.scss'

interface Props {
    text: string,
}

const MainHead = ({
    text
}: Props) => {
    return (
        <div className="main-head">
            <HeadingUI text={text} color="#aa8a75" />
        </div>
    );
};

export default MainHead;