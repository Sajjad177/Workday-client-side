// import PropTypes from "prop-types";
// import RequestModal from "../../Pages/Dashboard/Employee/RequestModal";

// const AssetsListBody = ({ assets, openModal, setOpenModal }) => {
//   return (
//     <div>
//       {assets.map((asset) => (
//         <tr key={asset._id}>
//           <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
//             {asset.assetName}
//           </td>
//           <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
//             {asset.category}
//           </td>
//           <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
//             {asset.quantity}
//           </td>
//           <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
//             {new Date(asset.addTime).toLocaleDateString()}
//           </td>
//           <td className="px-4 py-4 text-sm whitespace-nowrap">
            // <button
            //   onClick={() => setOpenModal(true)}
            //   className="rounded-md bg-gray-700 py-2 px-5 text-white"
            // >
            //   Request
            // </button>
            // <div
            //   onClick={() => setOpenModal(false)}
            //   className={`fixed z-[100] flex items-center justify-center ${
            //     openModal ? "opacity-1 visible" : "invisible opacity-0"
            //   } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
            // >
            //   <RequestModal
            //     setOpenModal={setOpenModal}
            //     openModal={openModal}
            //   ></RequestModal>
            // </div>
//           </td>
//         </tr>
//       ))}
//     </div>
//   );
// };

// AssetsListBody.propTypes = {
//   assets: PropTypes.object,
//   openModal: PropTypes.bool,
//   setOpenModal: PropTypes.func,
// };

// export default AssetsListBody;
