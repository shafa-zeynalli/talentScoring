
import { useLocation } from 'react-router-dom';
import EducationItem from '../EducationItem/EducationItem';
import EducationScore from '../EducationScore/EducationScore';


const MainPage = (props) => {
    const location = useLocation();
    return (
        <div  >
            {(location.pathname === '/' ||
                location.pathname === '/stage/stage2' ||
                location.pathname === '/stage/stage3' ||
                location.pathname === '/stage/stage4' ||
                location.pathname === '/stage/stage5'
            ) && <EducationItem />}
            {location.pathname === '/score' && <EducationScore />}
        </div>
    )
}
export default MainPage;