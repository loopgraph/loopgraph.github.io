import Header from './components/Header/Header.jsx';
import { Fragment } from 'react';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer.jsx';

export default function App() {
  return (
    <Fragment>
      <Header />
      <main >
        <MainPage />
      </main>
      <Footer />
    </Fragment>
  );
}
