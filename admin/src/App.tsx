import AppRouter from 'components/AppRouter';
import Aside from 'layout/Aside/Aside';
import { useSelector } from 'react-redux';
import { isExpanded } from 'redux/reducers/asideReducer';
// import { isLoggedIn } from '../redux/reducers/authReducer';

function App() {

  const expanded = useSelector(isExpanded)
  const isAuth = true

  return (
    <div className="App">
      {isAuth && <Aside />}
      <main className={`main-content${expanded ? ' _expanded' : ''}`}>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
