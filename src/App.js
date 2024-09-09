import React, { useState } from 'react';
import OrdonnanceForm from './OrdonnanceForm';
import { PDFDownloadLink } from '@react-pdf/renderer';
import OrdonnancePDF from './OrdonnancePDF';

function App() {
  const [ordonnanceData, setOrdonnanceData] = useState(null);

  const handleSubmit = (formData) => {
    setOrdonnanceData(formData);
  };

  return (
    <div className="App">
      <h1>Générateur d'Ordonnances</h1>
      <OrdonnanceForm onSubmit={handleSubmit} />
      {ordonnanceData && (
        <PDFDownloadLink
          document={<OrdonnancePDF data={ordonnanceData} />}
          fileName={`ordonnance_${ordonnanceData.patientName}.pdf`}
          className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          {({ loading }) => (loading ? 'Chargement du document...' : 'Télécharger le PDF')}
        </PDFDownloadLink>
      )}
    </div>
  );
}

export default App;