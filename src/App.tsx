import './App.css';
import Loading from './components/Loading';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}

export default App;
