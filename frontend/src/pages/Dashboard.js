// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import DashSidebar from '../component/DashSidebar'; // Correct import for default export
// import DashFood from '../component/DashFood'; // Correct import for default export

// const Dashboard = () => {
//   const location = useLocation();
//   const [tab, setTab] = useState('');

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const tabFormUrl = urlParams.get('tab');
//     if (tabFormUrl) {
//       setTab(tabFormUrl);
//     }
//   }, [location.search]);

//   return (
//     <div>
//       <div className='min-h-screen flex flex-col md:flex-row'>
//         <div className='md:w-56'>
//           <DashSidebar />
//         </div>
//         {tab === 'food' && <DashFood />} {/* Render DashFood based on the tab */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;