import { Helmet } from 'react-helmet-async';
import Hero from './components/sections/Hero';
import BrandCards from './components/sections/BrandCards';
import Categories from './components/sections/Categories';
import FeaturedProperties from './components/sections/FeaturedProperties';
import QualityBanner from './components/sections/QualityBanner';
import Locations from './components/sections/Locations';
import Aculeo from './components/sections/Aculeo';
import WhyChooseUs from './components/sections/WhyChooseUs';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <>
      <Helmet>
        <title>Lago Rapel Propiedades</title>
        <meta
          name="description"
          content="Lago Rapel Propiedades — parcelas, sitios y casas junto al lago. Laukén Inmobiliaria y Goycolea Propiedades."
        />
      </Helmet>

      <div className="w-full max-w-[100vw]">
        <Hero />
        <BrandCards />
        <Categories />
        <FeaturedProperties />
        <QualityBanner />
        <Locations />
        <Aculeo />
        <WhyChooseUs />
        <FinalCTA />
        <Footer />
      </div>
    </>
  );
}
