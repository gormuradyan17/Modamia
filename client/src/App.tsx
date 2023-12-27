import AppRouter from 'components/AppRouter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsPageLoading, setIsLogged, setIsPageLoading, setUserData } from 'redux/reducers/userReducer';
import { checkAuth } from 'services/userService';
import { eraseCookie, getCookie } from 'shared/helpers/helpers';
import FullPageLoader from 'shared/ui/FullPageLoader';


function App() {

  const dispatch = useDispatch();
  const isPageLoading = useSelector(getIsPageLoading)
  
  const checkAuthentication = async () => {
    const token = getCookie('accessToken');
    if (token) {
      const data = await checkAuth();
      if (data && data?.user?.id) {
        dispatch(setIsLogged(true));
        dispatch(setUserData(data?.user));
        dispatch(setIsPageLoading(false));
      } else {
        eraseCookie('accessToken');
        dispatch(setIsLogged(false));
        dispatch(setUserData({}));
        dispatch(setIsPageLoading(false));
      }
    } else {
      dispatch(setUserData({}));
      dispatch(setIsLogged(false));
      dispatch(setIsPageLoading(false));
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <div className="App">
      {isPageLoading ? <FullPageLoader /> : <AppRouter />} 
    </div>
  );
}

export default App;
