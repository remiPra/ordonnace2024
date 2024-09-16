import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import OrdonnancePage from './OdonnancePage';
import FactureSoindePedicuriepage from './FactureSoinDePedicuriePage'

// Composants pour vos pages
const Home = () => <h2>Page d'accueil</h2>;
const About = () => <h2>À propos</h2>;
const Contact = () => <h2>Contact</h2>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-around h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <span className="text-xl font-bold text-gray-800">Logo</span>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link to="/" className="border-b-2 border-orange-500 text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                    Accueil
                  </Link>
                  <Link to="/ordonnance" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Ordonnance
                  </Link>
                  <Link to="/facture" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    À propos
                  </Link>
                  <Link to="/contact" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ordonnance" element={<OrdonnancePage />} />
            <Route path="/facture" element={<FactureSoindePedicuriepage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;