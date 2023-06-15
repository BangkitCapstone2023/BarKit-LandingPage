import Navbar from './components/Navbar';
import Main from './components/Main';
import DownloadAppSection from './components/DownloadApp';
import OurTeam from './components/OurTeam';
import Footer from './components/Footer';
import Partner from './components/Partner';

export default function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Partner />
      <OurTeam />
      <DownloadAppSection />
      <Footer />
    </>
  );
}
