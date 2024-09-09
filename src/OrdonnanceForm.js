import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './OrdonnanceForm.css';

export default function OrdonnanceForm({ onSubmit }) {
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
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
    prescriptionDate: formatDate(new Date()),
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
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mb-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Formulaire d'Ordonnance</h2>
      <TransitionGroup>
        <CSSTransition key="patientInfo" timeout={500} classNames="sweep">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">Informations du Patient</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="patientFirstName" className="block text-gray-700 text-sm font-bold mb-2">Prénom du patient</label>
                <input type="text" id="patientFirstName" name="patientFirstName" value={formData.patientFirstName} onChange={handleChange} required className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Entrez le prénom" />
              </div>
              <div>
                <label htmlFor="patientName" className="block text-gray-700 text-sm font-bold mb-2">Nom du patient</label>
                <input type="text" id="patientName" name="patientName" value={formData.patientName} onChange={handleChange} required className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Entrez le nom" />
              </div>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition key="applicationInfo" timeout={500} classNames="sweep">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">Détails de l'Application</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="applicationFrequency" className="block text-gray-700 text-sm font-bold mb-2">Fréquence</label>
                <input type="text" id="applicationFrequency" name="applicationFrequency" value={formData.applicationFrequency} onChange={handleChange} required className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Ex: 2 fois par jour" />
              </div>
              <div>
                <label htmlFor="applicationDuration" className="block text-gray-700 text-sm font-bold mb-2">Durée</label>
                <input type="text" id="applicationDuration" name="applicationDuration" value={formData.applicationDuration} onChange={handleChange} required className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Ex: 7 jours" />
              </div>
              <div>
                <label htmlFor="applicationLocation" className="block text-gray-700 text-sm font-bold mb-2">Zone</label>
                <input type="text" id="applicationLocation" name="applicationLocation" value={formData.applicationLocation} onChange={handleChange} required className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Ex: Bras droit" />
              </div>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition key="medications" timeout={500} classNames="sweep">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">Médicaments</h3>
            {formData.medications.map((medication, index) => (
              <div key={index} className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nom du médicament"
                  value={medication.name}
                  onChange={(e) => handleMedicationChange(index, e)}
                  required
                  className="flex-1 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  name="frequency"
                  placeholder="Fréquence"
                  value={medication.frequency}
                  onChange={(e) => handleMedicationChange(index, e)}
                  className="flex-1 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            ))}
            <button type="button" onClick={addMedication} className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:shadow-outline">
              Ajouter un médicament
            </button>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <div className="flex justify-center">
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:shadow-outline">
          Générer l'ordonnance
        </button>
      </div>
    </form>
  );
}