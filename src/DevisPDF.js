import { Document, Page, Text, StyleSheet, Image } from '@react-pdf/renderer';

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
  signature: {
    marginTop: 20,
    width: 200, // Ajustez la largeur selon vos besoins
    height: 100, // Ajustez la hauteur selon vos besoins
  },
});

export default function OrdonnancePDF({ data }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>DEVIS SEMELLES ORTHOPEDIQUES</Text>
        <Text style={styles.bold}>PRADERE Remi</Text>
        <Text style={styles.header}>Pédicure Podologue</Text>
        <Text style={styles.header}>4 bis rue Honoré Cazaubon, 32100 CONDOM</Text>
        <Text style={styles.header}>Siret : 491525261</Text>
        <Text style={styles.header}>Tel : 05.62.68.25.58</Text>
        <Text style={styles.header}>N° Adeli : 32800008925</Text>
        <Text style={styles.text}>Le {data.applicationDuration} à CONDOM</Text>
        <Text style={styles.bold}>{data.patientFirstName} {data.patientName}</Text>
        <Text style={styles.text}>
        N° DEVIS :  {data.prescriptionDate}
        </Text>
        <Text style={styles.text}>
        Une paire de semelles orthopédiques 
        </Text>
        
        <Text style={styles.text}>
        Tarif : 135 euros 
        </Text>
        
        <Text style={styles.text}>
        Devis réalisé le {data.applicationDuration} à CONDOM 
        </Text>
        
        
        <Text style={styles.text}>&nbsp;</Text> {/* Espacement pour la signature */}
        <Text style={styles.bold}>Rémi PRADERE</Text>
        
        {/* Ajout de l'image de signature */}
        <Image
          style={styles.signature}
          src="/signature.png" // Remplacez par l'URL de votre image de signature
        />
      </Page>
    </Document>
  );
}