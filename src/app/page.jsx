import Hero from '../components/Hero';
import Schedule from '../components/Schedule';
import AboutPreview from '../components/AboutPreview';
import ImageCarousel from '../components/ImageCarousel';
import Sponsor from '../components/Sponsor';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ImageCarousel />
      <Sponsor />
    </>
  );
}
