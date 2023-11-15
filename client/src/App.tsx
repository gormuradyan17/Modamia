import AppRouter from 'components/AppRouter';
import { useSelector } from 'react-redux';
// import { isLoggedIn } from '../redux/reducers/authReducer';

function App() {
  
  const isAuth = true
  
  return (
      <div className="App">
        <main className='main-content'>
          <AppRouter />
        </main>
      </div>
  );
}

export default App;
