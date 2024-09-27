import React, { useState } from 'react';
import DevisForm from './DevisForm';
import { PDFDownloadLink } from '@react-pdf/renderer';
import DevisPDF from './DevisPDF';

function OrdonnancePage() {
  const [ordonnanceData, setOrdonnanceData] = useState(null);

  const handleSubmit = (formData) => {
    setOrdonnanceData(formData);
  };

  return (
    <div className="App">
      {/* <h1>Générateur d'Ordonnances</h1> */}
      <DevisForm onSubmit={handleSubmit} />
      {ordonnanceData && (
        <PDFDownloadLink
          document={<DevisPDF data={ordonnanceData} />}
          fileName={`ordonnance_${ordonnanceData.patientName}.pdf`}
          className="mt-4 bg-green-500 fixed z-10 top-10 justify-center text-center w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          {({ loading }) => (loading ? 'Chargement du document...' : 'Télécharger le PDF')}
        </PDFDownloadLink>
      )}
    </div>
  );
}

export default OrdonnancePage;