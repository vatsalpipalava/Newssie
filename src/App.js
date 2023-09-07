import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/navbar';
import Title from './components/title';
import Newscard from './components/card';

function App() {
  const apiUrl = 'https://inshorts.me/news/all?offset=0&limit=99';
  return (
    <>
      <Navigationbar />
      <div className='main-main-container'>
        <Title titleName={'All'} />
        <Newscard apiUrl={apiUrl} />
      </div>
    </>

  );
}

export default App;
