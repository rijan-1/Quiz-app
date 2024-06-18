import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppWorks from './components/works';

import AppTestimonials from './components/testimonials';
import Testimonials from './components/testomional2';

import AppContact from './components/contact';
import AppFooter from './components/footer';

function App() {
  return (
    <div className="App">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
              <AppTestimonials />
        <AppServices />
       
        <AppWorks />
     
  
         <Testimonials/>
   
    
        <AppContact />
      </main>
   
    </div>
  );
}

export default App;