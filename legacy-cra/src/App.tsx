import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Layout } from "./components";
import { Home, Projects, NotFound, About, Contact } from "./pages";

function App() {
  return (
    <>
      <Helmet>
        <title>Gonçalo Estrelado Portfolio</title>
        <meta
          name="description"
          content="Welcome to Gonçalo Estrelado's professional portfolio. Discover my expertise in web development, software engineering, and innovative digital solutions. Explore my projects, skills, and experience in creating modern, user-friendly applications."
        />

        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content="Gonçalo Estrelado Portfolio" />
        <meta
          property="og:description"
          content="Welcome to Gonçalo Estrelado's professional portfolio. Discover my expertise in web development, software engineering, and innovative digital solutions. Explore my projects, skills, and experience in creating modern, user-friendly applications."
        />
        <meta property="og:image" content="https://goncalo-estrelado.netlify.app/preview.jpg" />
        <meta property="og:url" content="https://goncalo-estrelado.netlify.app" />
        <meta property="og:type" content="website" />

        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Gonçalo Estrelado" />
        <meta
          name="keywords"
          content="portfolio, web developer, software engineer, React, TypeScript, frontend development"
        />
      </Helmet>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
