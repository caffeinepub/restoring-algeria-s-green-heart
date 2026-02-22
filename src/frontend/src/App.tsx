import Hero from './components/Hero';
import ExecutiveSummary from './components/ExecutiveSummary';
import Crisis from './components/Crisis';
import Solution from './components/Solution';
import NationalPlan from './components/NationalPlan';
import SpeciesShowcase from './components/SpeciesShowcase';
import UrbanGreening from './components/UrbanGreening';
import VolunteerPortal from './components/VolunteerPortal';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ExecutiveSummary />
        <Crisis />
        <Solution />
        <NationalPlan />
        <SpeciesShowcase />
        <UrbanGreening />
        <VolunteerPortal />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
