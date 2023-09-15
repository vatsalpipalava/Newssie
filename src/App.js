import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/navbar';

function App() {
  const apiUrl = 'https://inshorts.me/news/all?offset=0&limit=99';
  return (
    <>
      <Navigationbar />
    </>

  );
}

export default App;
