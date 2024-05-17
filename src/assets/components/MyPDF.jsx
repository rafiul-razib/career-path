import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const MyPDF = () => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Hello, World!</Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyPDF;
