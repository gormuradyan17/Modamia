import AppRouter from 'components/AppRouter';
import Aside from 'layout/Aside/Aside';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isExpanded } from 'redux/reducers/asideReducer';
import { isLoggedIn, setActiveSuperAdmin, setIsAuth } from 'redux/reducers/authReducer';
import { checkAuth } from 'services/authService';
import { eraseCookie, getCookie } from 'shared/helpers/helpers';
import FullPageLoaderUI from 'shared/ui/FullPageLoaderUI/FullPageLoaderUI';

function App() {

  const expanded = useSelector(isExpanded)
  const isAuth = useSelector(isLoggedIn)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    if (getCookie('accessToken')) {
      const checkAdmin = async () => {
        const data = await checkAuth();
        if (data && data?.admin?.id) {
          await dispatch(setIsAuth(true));
          await dispatch(setActiveSuperAdmin(data?.admin))
          await setIsLoading(false)
        } else {
          eraseCookie('accessToken')
          await dispatch(setIsAuth(false));
          await dispatch(setActiveSuperAdmin({}))
          await setIsLoading(false)
        }
      }
      checkAdmin()
    } else {
      dispatch(setActiveSuperAdmin({}))
      setIsLoading(false)
    }
  }, [])

  return (
    <div className="App">
      {isLoading ? <FullPageLoaderUI /> : <>
        {isAuth && <Aside />}
        <main className={`main-content${expanded ? ' _expanded' : ''} ${!isAuth ? ' _auth' : ''}`}>
          <AppRouter />
        </main>
      </>}
    </div>
  );
}

export default App;
