// import React from "react";

// export default function servise() {
//   return (
//     <div >
//       <h1 className="text-center text-3xl m-6">This is a Service Page</h1>
//       <div className="justify-items-center flex flex-auto ml-64 mt-5">
//         <div className="w-96 m-1 bg-gray-800 rounded cursor-pointer opacity-100 hover:opacity-90">
//           <div className="image">
//             <img
//               className="w-[100%] block rounded"
//               src="./Images/frog.jpg"
//               alt="Lizard-Image"
//             />
//           </div>
//           <h3 className="m-0 pl-5 pt-2 text-[#f2f2f2]">Lizert</h3>
//           <div className="p-5 pt-0 text-[hsl(0,0%,91%)] font-bold font-inter">
//             <p>
//               Here are the biggest enterprise technology acquisitions of 2021 so
//               far, reverse chronological order
//             </p>
//           </div>
//         </div>


//         <div className="justify-items-center flex flex-auto">
//         <div className="w-96 m-1 bg-gray-800 rounded cursor-pointer opacity-100 hover:opacity-90">
//           <div className="image">
//             <img
//               className="w-[100%] block rounded"
//               src="./Images/frog.jpg"
//               alt="Lizard-Image"
//             />
//           </div>
//           <h3 className="m-0 pl-5 pt-2 text-[#f2f2f2]">Lizert</h3>
//           <div className="p-5 pt-0 text-[hsl(0,0%,91%)] font-bold font-inter">
//             <p>
//               Here are the biggest enterprise technology acquisitions of 2021 so
//               far, reverse chronological order
//             </p>
//           </div>
//         </div>
//       </div>


      
//       </div>

// {/* second pic */}


//     </div>
//   );
// }





import React from 'react';

const services = [
  {
    title: 'Budget Tracking',
    description: 'Track your income and expenses with ease, and stay within your budget goals.',
    icon: '💰',
  },
  {
    title: 'Financial Insights',
    description: 'Get insights into your spending habits with detailed reports and analytics.',
    icon: '📊',
  },
  {
    title: 'Goal Planning',
    description: 'Set financial goals and save towards them with our goal-tracking feature.',
    icon: '🎯',
  },
  {
    title: 'Secure Data',
    description: 'Your financial data is secure with top-notch encryption and privacy features.',
    icon: '🔒',
  },
];

const Services= () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Our Services</h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        We provide a range of services to help you manage your finances efficiently and effectively.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center transform transition hover:scale-105"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
