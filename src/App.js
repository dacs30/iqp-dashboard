import './App.css';
import ElevateAppBar from './Components/MainAppBar';
import IntroductionsBlock from './Components/FirstPage';
import ParticlesBg from 'particles-bg'
import WhatIsTheProject from './Components/WhatIsTheProject';
import DatasetsTable from './Components/DatasetsTable';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EthinicityComparison from './Components/EthinicityComparison';
import { useState, useEffect } from 'react';
import HowBigIsTheProblem from './Components/HowBigIsTheProblem';
import Conclusion from './Components/Conclusion';
import Footer from './Components/Footer';


function App() {
  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  AOS.init();

  return (
    <div>
      <div className='particles-bg'>
        <ParticlesBg type='cobweb' bg={true} />
      </div>
      <ElevateAppBar mobileView={mobileView} />
      <IntroductionsBlock />
      <WhatIsTheProject />
      <DatasetsTable mobileView={mobileView} />
      <EthinicityComparison mobileView={mobileView} />
      <HowBigIsTheProblem mobileView={mobileView} />
      <Conclusion mobileView={mobileView} />
      <Footer />
    </div>
  );
}

export default App;
