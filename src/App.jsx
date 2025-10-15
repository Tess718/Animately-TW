import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet";
import Homepage from './Pages/Homepage';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Pricing from './Pages/Pricing';
import Contact from './Pages/Contact';
import Faq from './Pages/Faq';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { AnimatePresence, motion } from 'framer-motion';

// Overlay that plays its full sequence on MOUNT (not on exit).
function OverlayTransition({ locationKey }) {
  const overlayVariants = {
    // start closed
    initial: { scaleY: 0 },
    // when mounted, play sequence: closed -> open -> hold -> closed
    animate: {
      scaleY: [0, 1, 1, 0],
      transition: {
        duration: 1,
        times: [0, 0.4, 0.6, 1],
        ease: [0.87, 0, 0.13, 1],
      }
    },
    // leave as-is; we don't rely on exit
    exit: { scaleY: 0 }
  };

  return (
    // we still place it inside AnimatePresence so it unmounts when key changes.
    <AnimatePresence>
      <motion.div
        key={locationKey} // new key on route change -> mounts -> plays animate sequence
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: '#d68bfb',
          transformOrigin: 'bottom',
          zIndex: 9999,
          pointerEvents: 'none',
        }}
      />
    </AnimatePresence>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.95,
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      filter: "blur(10px)",
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <>
      {/* Overlay mounts on every pathname change and runs the animate sequence */}
      <OverlayTransition locationKey={location.pathname + "-overlay"} />

      {/* Page content transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Homepage />
              </motion.div>
            }
          />
          <Route
            path="/Signup"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Signup />
              </motion.div>
            }
          />
          <Route
            path="/Signin"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Signin />
              </motion.div>
            }
          />
          <Route
            path="/Pricing"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Pricing />
              </motion.div>
            }
          />
          <Route
            path="/Contact"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Contact />
              </motion.div>
            }
          />
          <Route
            path="/Faq"
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Faq />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  AOS.init();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Helmet>
        <meta name="description" content="Animately: Your destination for creating stunning animations effortlessly." />
      </Helmet>
      <Router>
        <AnimatedRoutes />
      </Router>
    </>
  );
}
