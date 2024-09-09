import React, { useState } from 'react';

export default function OrdonnanceForm({ onSubmit }) {
  // Fonction pour formater la date au format JJ/MM/AAAA
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois sont de 0 à 11
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const [formData, setFormData] = useState({
    patientFirstName: '',
    patientName: '',
    applicationFrequency: '',
    applicationDuration: '',
    applicationLocation: '',
    medications: [{ name: '', frequency: '' }],
    doctorName: 'PRADERE Remi',
    doctorTitle: 'Pédicure Podologue',
    doctorAddress: '4 bis rue Honoré Cazaubon, 32100 CONDOM',
    doctorSiret: '491525261',
    doctorPhone: '05.62.68.25.58',
    doctorAdeli: '32800008925',
    prescriptionDate: formatDate(new Date()), // Date formatée au format JJ/MM/AAAA
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleMedicationChange = (index, e) => {
    const { name, value } = e.target;
    const newMedications = [...formData.medications];
    newMedications[index][name] = value;
    setFormData(prevState => ({
      ...prevState,
      medications: newMedications,
    }));
  };

  const addMedication = () => {
    setFormData(prevState => ({
      ...prevState,
      medications: [...prevState.medications, { name: '', frequency: '' }],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="patientFirstName" className="block">Prénom du patient:</label>
        <input type="text" id="patientFirstName" name="patientFirstName" value={formData.patientFirstName} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
      </div>
      <div>
        <label htmlFor="patientName" className="block">Nom du patient:</label>
        <input type="text" id="patientName" name="patientName" value={formData.patientName} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
      </div>
      <div>
        <label htmlFor="applicationFrequency" className="block">Fréquence d'application:</label>
        <input type="text" id="applicationFrequency" name="applicationFrequency" value={formData.applicationFrequency} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
      </div>
      <div>
        <label htmlFor="applicationDuration" className="block">Durée du traitement:</label>
        <input type="text" id="applicationDuration" name="applicationDuration" value={formData.applicationDuration} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
      </div>
      <div>
        <label htmlFor="applicationLocation" className="block">Zone d'application:</label>
        <input type="text" id="applicationLocation" name="applicationLocation" value={formData.applicationLocation} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
      </div>
      <div>
        <label className="block">Médicaments:</label>
        {formData.medications.map((medication, index) => (
          <div key={index} className="flex space-x-2">
            <input
              type="text"
              name="name"
              placeholder="Nom du médicament"
              value={medication.name}
              onChange={(e) => handleMedicationChange(index, e)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            <input
              type="text"
              name="frequency"
              placeholder="Fréquence"
              value={medication.frequency}
              onChange={(e) => handleMedicationChange(index, e)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
        ))}
        <button type="button" onClick={addMedication} className="mt-2 bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-2 rounded">
          Ajouter un médicament
        </button>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Générer l'ordonnance</button>
    </form>
  );
}
