import AppRouter from 'components/AppRouter';
import Footer from 'components/Footer';
import { Header } from 'components/Header';
import Aside from 'layout/Aside/Aside';
import { useSelector } from 'react-redux';
// import { isLoggedIn } from '../redux/reducers/authReducer';

function App() {
  
  const isAuth = true
  
  return (
      <div className="App">
         <AppRouter />
        {/* <main className='main-content'> */}
      
         
        {/* </main> */}
      </div>
  );
}

export default App;
