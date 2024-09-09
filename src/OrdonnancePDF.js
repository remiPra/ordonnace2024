import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  header: {
    fontSize: 12,
    marginBottom: 5,
    textAlign: 'left',
  },
  section: {
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'left',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default function OrdonnancePDF({ data }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>ORDONNANCE</Text>
        <Text style={styles.bold}>PRADERE Remi</Text>
        <Text style={styles.header}>Pédicure Podologue</Text>
        <Text style={styles.header}>4 bis rue Honoré Cazaubon, 32100 CONDOM</Text>
        <Text style={styles.header}>Siret : 491525261</Text>
        <Text style={styles.header}>Tel : 05.62.68.25.58</Text>
        <Text style={styles.header}>N° Adeli : 32800008925</Text>
        <Text style={styles.text}>Le {data.prescriptionDate} à CONDOM</Text>
        <Text style={styles.bold}>{data.patientFirstName} {data.patientName}</Text>
        <Text style={styles.text}>
          Application {data.applicationFrequency} sur {data.applicationLocation} pour une durée de {data.applicationDuration}
        </Text>
        
        {data.medications.map((medication, index) => (
          <Text key={index} style={styles.text}>
            - {medication.name} ({medication.frequency})
          </Text>
        ))}
        
        <Text style={styles.text}>&nbsp;</Text> {/* Espacement pour la signature */}
        <Text style={styles.bold}>Rémi PRADERE</Text>
      </Page>
    </Document>
  );
}
