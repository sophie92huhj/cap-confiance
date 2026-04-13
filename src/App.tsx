import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Accueil } from './pages/Accueil';
import { Psychopedagogie } from './pages/Psychopedagogie';
import { Orientation } from './pages/Orientation';
import { QuiSuisJe } from './pages/QuiSuisJe';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { useNavigation } from './hooks/useNavigation';

function App() {
  const currentPage = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <Accueil />;
      case 'psychopedagogie':
        return <Psychopedagogie />;
      case 'orientation':
        return <Orientation />;
      case 'qui-suis-je':
        return <QuiSuisJe />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      default:
        return <Accueil />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
