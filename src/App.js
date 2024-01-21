import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Authorization from './components/Authorization/Authorization';
import Search from './components/Search/Search';
import SearchResult from './components/SearchResult/SearchResult';


const routesData = [
  { path: '*', element: <Main /> },
  { path: '/error', element: <ErrorPage /> },
  { path: '/auth', element: <Authorization /> },
  { path: '/search', element: <Search /> },
  { path: '/result', element: <SearchResult /> },
];

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            {routesData.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}