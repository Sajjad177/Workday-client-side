// import PropTypes from "prop-types";

// const RequestModal = ({ openModal, setOpenModal, handleRequest }) => {
//   return (
//     <div>
//       <div
//         onClick={(e_) => e_.stopPropagation()}
//         className={`absolute w-full rounded-lg bg-white  drop-shadow-2xl sm:w-[500px] ${
//           openModal
//             ? "opacity-1 translate-y-0 duration-300"
//             : "-translate-y-20 opacity-0 duration-150"
//         }`}
//       >
//         <form className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10">
//           <div className="space-y-5">
//             <label htmlFor="email_navigate_ui_modal" className="block">
//               Additional notes
//             </label>
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="add short node..."
//                 className="block w-full rounded-lg p-5 pl-10 outline-none drop-shadow-lg bg-white "
//               />
//               <span className="absolute left-2 top-1/4"></span>
//             </div>
//           </div>
//           {/* button type will be submit for handling form submission*/}
//           <button
//             type="button"
//             onClick={() => setOpenModal(false)}
//             className="relative py-2.5 px-5 rounded-lg mt-6 bg-white drop-shadow-lg hover:bg-gray-300 text-center"
//           >
//             Request
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// RequestModal.propTypes = {
//   openModal: PropTypes.bool,
//   setOpenModal: PropTypes.func,
// };

// export default RequestModal;
