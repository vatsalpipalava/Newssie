import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Top from './components/top';
import Trending from './components/trending';
import Science from './components/science';
import Entertainment from './components/entertainment';
import Sports from './components/sports';

import {
  BrowserRouter as HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top" element={<Top />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/science" element={<Science />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
    </HashRouter>

  );
}

export default App;
