// import React, { useState } from 'react'
// import rawData from './data.json'
// import TimeCard from './components/TimeCard.jsx'

// const App = () => {
//   const [data, setData] = useState(rawData);
//   // (1) create a state
//   const [timeSelected, setTimeSelected] = useState('weekly');
  
//   // (3) new filtered data
//   const filteredData = data.map(item => ({
//     title: item.title,
//     current: item.timeframes[timeSelected].current,
//     previous: item.timeframes[timeSelected].previous,
//   })
//   )

//   return (
//     <div className='flex min-h-screen bg-[#AC2342] px-50 py-20'>

//       {/* (1) left */}
//       <div className="bg-[#34397B]  rounded-[25px]">

//         <div className='rounded-full'>
//           <div className="bg-[#5746EA] rounded-[25px]">
//             <p>Report for </p>
//             <h1 className='text-2xl font-medium p-4'>Jeremy Robson</h1>
//           </div>

//           {/* (2) Attach button with state */}
//           <div className="bg-[#1D204B] grid grid-row-3 gap-1 p-4">
//             {
//               ["daily", "weekly", "monthly"].map(timeframe => {
//                 return <button
//                   key={timeframe}
//                   onClick={() => { setTimeSelected(timeframe) }}
//                   className='text-white'
//                 >{timeframe}</button>
//               })
//             }
//           </div>
//         </div>

//       </div>
      
//       <div className="bg-pink grid grid-cols-3 gap-4">
//         {/* (4) use the filtered data in here */}
//         {filteredData.map(item => (
//           <TimeCard title={item.title} current={item.current} previous={item.previous} />
//         ))}
//       </div>

//     </div>
//   )
// }

// export default App

// ===============================================
// =============================================================
// ===============================================

import React, { useState } from 'react';
import rawData from './data.json';
import TimeCard from './components/TimeCard.jsx';

const App = () => {
  const [data, setData] = useState(rawData);
  const [timeSelected, setTimeSelected] = useState('weekly');

  const filteredData = data.map(item => ({
    title: item.title,
    current: item.timeframes[timeSelected].current,
    previous: item.timeframes[timeSelected].previous,
  }));

  return (
    <div className="min-h-screen bg-[#0f1424] p-8 md:p-16 font-rubik">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 items-start pt-30">
        
        {/* Sidebar */}
        <div className="bg-[#1d204b] rounded-2xl lg:row-span-2 overflow-hidden">
          <div className="bg-[#5746ea] rounded-2xl p-6 md:p-8 flex md:block items-center md:items-start gap-6 md:gap-0">
            <img 
              src="/images/image-jeremy.png" 
              alt="Jeremy Robson"
              className="w-16 h-16 border-2 border-white rounded-full"
            />
            <div>
              <p className="text-[#bbc0ff] text-sm md:mt-6">Report for</p>
              <h1 className="text-2xl md:text-3xl font-light text-white leading-tight">Jeremy Robson</h1>
            </div>
          </div>

          <div className="p-6 md:p-8 flex md:flex-col justify-between text-sm">
            {["daily", "weekly", "monthly"].map(timeframe => (
              <button
                key={timeframe}
                onClick={() => setTimeSelected(timeframe)}
                className={`mb-2 md:mb-4 capitalize transition-colors ${
                  timeSelected === timeframe ? 'text-white' : 'text-[#7078c9] hover:text-white'
                }`}
              >
                {timeframe}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item, index) => (
            <TimeCard 
              key={index}
              title={item.title} 
              current={item.current} 
              previous={item.previous} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
