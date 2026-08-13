import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout, { ScrollToTop } from '@/components/Layout';
import Home from '@/pages/Home';
import Programmes from '@/pages/Programmes';
import Impact from '@/pages/Impact';
import About from '@/pages/About';
import Gallery from '@/pages/Gallery';
import GetInvolved from '@/pages/GetInvolved';
import Contact from '@/pages/Contact';

const pageTitles: Record<string, string> = {
  '/': 'Earthizen Foundation — No Borders. One Earth. Infinite Futures.',
  '/programmes': 'Programmes — Earthizen Foundation',
  '/impact': 'Impact — Earthizen Foundation',
  '/about': 'About — Earthizen Foundation',
  '/gallery': 'Gallery — Earthizen Foundation',
  '/get-involved': 'Get Involved — Earthizen Foundation',
  '/contact': 'Contact — Earthizen Foundation',
};

function DocumentTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = pageTitles[pathname] || 'Earthizen Foundation';
    document.documentElement.lang = 'en';
    const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = 'Earthizen Foundation — planetary citizenship education inspired by the astronaut view of Earth.';
    }
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <DocumentTitle />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="programmes" element={<Programmes />} />
          <Route path="impact" element={<Impact />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}
