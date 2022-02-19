import './App.css';
import useDarkMode from './hooks/useDarkMode';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';

function App() {

  useDarkMode();

  return (
    <div className='h-screen dark:bg-black'>
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}

export default App;
