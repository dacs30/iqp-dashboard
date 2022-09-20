import './App.css';
import ElevateAppBar from './Components/MainAppBar';
import IntroductionsBlock from './Components/FirstPage';
import ParticlesBg from 'particles-bg'
import WhatIsTheProject from './Components/WhatIsTheProject';
import DatasetsTable from './Components/DatasetsTable';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  AOS.init();

  return (
    <div>
      <div className='particles-bg'>
        <ParticlesBg type='cobweb' bg={true} />
      </div>
      <ElevateAppBar />
      <IntroductionsBlock />
      <WhatIsTheProject />
      <DatasetsTable />
    </div>
  );
}

export default App;
