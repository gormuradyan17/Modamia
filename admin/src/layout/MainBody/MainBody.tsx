import './style.scss'

interface Props {
    children: any
}

const MainBody = ({
    children
}: Props) => {
    return (
        <div className="main-body">
            {children}
        </div>
    );
};

export default MainBody;