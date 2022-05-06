import { BrowserRouter as MainRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import TV from './pages/TV';

const Router = () => {
  return (
    <MainRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tv" element={<TV />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </MainRouter>
  );
};

export default Router;
