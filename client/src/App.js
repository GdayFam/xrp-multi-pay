import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={
            'https://res.cloudinary.com/dwlkh8tj3/image/upload/f_auto,q_auto,w_auto,c_scale/assets/img/gfam-logo-teal-trans.png'
          }
          className='App-logo'
          alt='logo'
        />
        <h1>XRP Multi-Pay</h1>

        <a
          className='App-link'
          href='https://gfam.live'
          target='_blank'
          rel='noopener noreferrer'
        >
          gfam.live
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
