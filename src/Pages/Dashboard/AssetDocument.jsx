// import PropTypes from 'prop-types';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//     section: {
//       margin: 10,
//       padding: 10,
//       fontSize: 12,
//     },
//     page:{
//         backgroundColor: '#E4E4E4'
//     }
//   });

// const AssetDocument = ({ asset }) => {
//   return (
//     <div>
//       <Document>
//         <Page size="A4">
//           <View style={styles.section}>
//             <Text>Company Information</Text>
//           </View>
//           <View style={styles.section}>
//             <Text>Asset Name: {asset.assetName}</Text>
//             <Text>Asset Type: {asset.category}</Text>
//             <Text>
//               Request Date: {new Date(asset.request_date).toLocaleDateString()}
//             </Text>
//             <Text>
//               Approval Date: {new Date(asset.approvedDate).toLocaleDateString()}
//             </Text>
//           </View>
//           <View style={styles.section}>
//             <Text>Printed on: {new Date().toLocaleDateString()}</Text>
//           </View>
//         </Page>
//       </Document>
//     </div>
//   );
// };

// AssetDocument.propTypes = {
//     asset:PropTypes.object
// };

// export default AssetDocument;


