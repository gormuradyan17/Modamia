import { ObjectType, appColor } from 'shared/helpers/helpers';
import { ButtonUI } from '../ButtonUI/ButtonUI';
import HeadingUI from '../HeadingUI/HeadingUI';
import './style.scss'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LinkType {
    url: string,
    CTAText: string,
}

interface Props {
    icon: any,
    heading: string,
    link: LinkType,
}

const EmptyBody = ({
    icon,
    heading,
    link = {
        url: '',
        CTAText: ''
    },
}: Props) => {

    const navigate = useNavigate()

    const redirectTo = (url: string) => {
        return navigate(url)
    }

    return (
        <div className="EmptyBodyUI">
            <div className="EmptyBodyUI__image">
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className="EmptyBodyUI__info">
                <HeadingUI
                    text={heading}
                    size="32px"
                    align='center'
                    color={appColor}
                />
            </div>
            <ButtonUI
                onClick={() => redirectTo(link.url)}
            >{link.CTAText}</ButtonUI>
        </div>
    );
};

export default EmptyBody;