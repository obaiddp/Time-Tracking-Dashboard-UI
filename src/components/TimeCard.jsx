// import React from 'react';

// const TimeCard = ({ title, current, previous }) => {
//   // Format the icon filename
//   const iconName = title.toLowerCase().replace(' ', '-') + '.svg';
//   console.log(iconName)
//   const iconPath = `/images/icon-${iconName}`;

//   return (
//     <div className={`relative rounded-xl overflow-hidden bg-${title.toLowerCase().replace(' ', '-')} pt-10`}>
//       {/* Background Icon */}
//       <div className="absolute top-0 right-4">
//         <img src={iconPath} alt="" className="w-16 h-16 object-contain" />
//       </div>

//       {/* Card Content */}
//       <div className="relative z-10 bg-[#1D204B] rounded-t-lg p-6 mt-8 hover:bg-[#34397B] transition-colors cursor-pointer">
//         <div className="flex justify-between items-center mb-2">
//           <h3 className="text-white font-medium capitalize">{title}</h3>
//           <button className="text-[#BBC0FF] hover:text-white">
//             <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
//               <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="currentColor" fillRule="evenodd"/>
//             </svg>
//           </button>
//         </div>

//         <div className="flex justify-between items-center md:flex-col md:items-start">
//           <h1 className="text-3xl md:text-4xl font-light text-white">{current}hrs</h1>
//           <p className="text-[#BBC0FF] text-sm">Last Week - {previous}hrs</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TimeCard;

// ===============================================
// =============================================================
// ===============================================
import React from 'react';

const TimeCard = ({ title, current, previous }) => {
  const cardColors = {
    work: 'bg-[#ff8b64]',
    play: 'bg-[#56c2e6]',
    study: 'bg-[#ff5e7d]',
    exercise: 'bg-[#4bcf83]',
    social: 'bg-[#7235d1]',
    'self-care': 'bg-[#f1c75b]',
  };

  const formattedTitle = title.toLowerCase().replace(' ', '-');
  const iconPath = `/images/icon-${formattedTitle}.svg`;

  return (
    <div className={`relative rounded-2xl overflow-hidden ${cardColors[formattedTitle]} pt-12`}>
      {/* Background Icon */}
      <div className="absolute top-0 right-4 opacity-50">
        <img src={iconPath} alt="" className="w-16 h-16 object-contain" />
      </div>

      {/* Card Content */}
      <div className="relative z-10 bg-[#1d204b] rounded-2xl p-6 mt-12 hover:bg-[#34397b] transition-colors cursor-pointer h-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white font-medium capitalize">{title}</h3>
          <button className="text-[#bbc0ff] hover:text-white">
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div>
          <h1 className="text-4xl font-light text-white mb-1">{current}hrs</h1>
          <p className="text-[#bbc0ff] text-sm">Last Week - {previous}hrs</p>
        </div>
      </div>
    </div>
  );
};

export default TimeCard;
