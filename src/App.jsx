import React, { useState } from 'react';
import { FileText, Star, BarChart2, MessageSquare, Share2, Image, Settings, LogOut } from 'lucide-react';

const App = () => {
  const [connected, setConnected] = useState(true);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-lg shadow-xl">
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-blue-500 font-bold text-xl">bizfy</div>
              <span className="text-gray-400 text-sm">Connected</span>
              <span className="text-gray-400 text-sm">Q2</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Yeah</span>
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 border-r border-gray-700 p-4">
            <div className="space-y-4">
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
                <div className="w-8 h-8 bg-gray-600 rounded"></div>
              </div>
              
              <nav className="space-y-2">
                <SidebarItem icon={<FileText size={18} />} text="Dashboard" />
                <SidebarItem icon={<Star size={18} />} text="Generate Ideas" />
                <SidebarItem icon={<MessageSquare size={18} />} text="Generate Post" active />
                <SidebarItem icon={<BarChart2 size={18} />} text="Improve Post" />
                <SidebarItem icon={<Star size={18} />} text="Inspirations" />
                <SidebarItem icon={<Settings size={18} />} text="Schedule Post" />
                <SidebarItem icon={<Image size={18} />} text="Carousel" />
                <SidebarItem icon={<Share2 size={18} />} text="Shared Items" />
                <SidebarItem icon={<BarChart2 size={18} />} text="Profile Analyzer" />
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Left Column - Input */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Generate Post</h2>
                <textarea
                  className="w-full h-32 bg-gray-700 rounded-lg p-3 text-white resize-none"
                  placeholder="Give a title first for your post ..."
                />
                
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm mb-2">Language</label>
                      <select className="w-full bg-gray-700 rounded p-2">
                        <option>English</option>
                      </select>
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm mb-2">Words Count</label>
                      <select className="w-full bg-gray-700 rounded p-2">
                        <option>Not Applicable</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <button className="w-full bg-gray-700 rounded p-2 text-left flex justify-between items-center">
                      <span>Advanced Options</span>
                      <span>▼</span>
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>Include Emojis</span>
                    </label>
                    <button className="bg-blue-500 px-4 py-2 rounded">Generate Post</button>
                  </div>
                </div>
              </div>

              {/* Right Column - Preview */}
              <div>
                <h2 className="text-xl font-semibold mb-6">Preview</h2>
                <div className="bg-white rounded-lg p-4 text-gray-800">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="font-semibold">Prodigal</div>
                      <div className="text-sm text-gray-500">finn • 🌐</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-500 mb-4">Your Post will be generated here!</p>
                  
                  <div className="flex space-x-4 text-gray-500">
                    <button className="flex items-center space-x-1">
                      <span>Like</span>
                    </button>
                    <button className="flex items-center space-x-1">
                      <span>Comment</span>
                    </button>
                    <button className="flex items-center space-x-1">
                      <span>Repost</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, active = false }) => (
  <div className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${active ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
    <span className="text-gray-400">{icon}</span>
    <span className={active ? 'text-white' : 'text-gray-400'}>{text}</span>
  </div>
);

export default App;


// import React, { useState } from 'react';
// import { FileText, Star, BarChart2, MessageSquare, Share2, Image, Settings, LogOut } from 'lucide-react';

// const App = () => {
//   const [connected, setConnected] = useState(true);

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800 ">
//       <div className="max-w-10xl mx-auto bg-white rounded-lg  p-2">
//         <div className="p-4 border-b">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <div className="text-blue-600 font-bold text-xl">bizfy</div>
//               <span className="text-gray-600 text-sm">Connected</span>
//               <span className="text-gray-600 text-sm">Q2</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <span>Yeah</span>
//               <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
//             </div>
//           </div>
//         </div>

//         <div className="flex">
//           {/* Sidebar */}
//           <div className="w-64 border-r p-4">
//             <div className="space-y-4">
//               <div className="flex space-x-2">
//                 <div className="w-8 h-8 bg-blue-600 rounded"></div>
//                 <div className="w-8 h-8 bg-gray-200 rounded"></div>
//               </div>
              
//               <nav className="space-y-2">
//                 <SidebarItem icon={<FileText size={18} />} text="Dashboard" />
//                 <SidebarItem icon={<Star size={18} />} text="Generate Ideas" />
//                 <SidebarItem icon={<MessageSquare size={18} />} text="Generate Post" active />
//                 <SidebarItem icon={<BarChart2 size={18} />} text="Improve Post" />
//                 <SidebarItem icon={<Star size={18} />} text="Inspirations" />
//                 <SidebarItem icon={<Settings size={18} />} text="Schedule Post" />
//                 <SidebarItem icon={<Image size={18} />} text="Carousel" />
//                 <SidebarItem icon={<Share2 size={18} />} text="Shared Items" />
//                 <SidebarItem icon={<BarChart2 size={18} />} text="Profile Analyzer" />
//               </nav>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="flex-1 p-6">
//             <div className="grid grid-cols-2 gap-6">
//               {/* Left Column - Input */}
//               <div className="space-y-6">
//                 <h2 className="text-xl font-semibold">Generate Post</h2>
//                 <textarea
//                   className="w-full h-32 bg-gray-50 border rounded-lg p-3 resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Give a title first for your post ..."
//                 />
                
//                 <div className="space-y-4">
//                   <div className="flex space-x-4">
//                     <div className="flex-1">
//                       <label className="block text-sm mb-2">Language</label>
//                       <select className="w-full bg-gray-50 border rounded p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//                         <option>English</option>
//                       </select>
//                     </div>
//                     <div className="flex-1">
//                       <label className="block text-sm mb-2">Words Count</label>
//                       <select className="w-full bg-gray-50 border rounded p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//                         <option>Not Applicable</option>
//                       </select>
//                     </div>
//                   </div>
                  
//                   <div>
//                     <button className="w-full bg-gray-50 border rounded p-2 text-left flex justify-between items-center hover:bg-gray-100">
//                       <span>Advanced Options</span>
//                       <span>▼</span>
//                     </button>
//                   </div>
                  
//                   <div className="flex items-center space-x-4">
//                     <label className="flex items-center space-x-2">
//                       <input type="checkbox" className="form-checkbox text-blue-600" />
//                       <span>Include Emojis</span>
//                     </label>
//                     <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//                       Generate Post
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Column - Preview */}
//               <div>
//                 <h2 className="text-xl font-semibold mb-6">Preview</h2>
//                 <div className="bg-white border rounded-lg p-4">
//                   <div className="flex items-center space-x-3 mb-4">
//                     <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
//                     <div>
//                       <div className="font-semibold">Prodigal</div>
//                       <div className="text-sm text-gray-500">finn • 🌐</div>
//                     </div>
//                   </div>
                  
//                   <p className="text-gray-500 mb-4">Your Post will be generated here!</p>
                  
//                   <div className="flex space-x-4 text-gray-600">
//                     <button className="flex items-center space-x-1 hover:text-gray-900">
//                       <span>Like</span>
//                     </button>
//                     <button className="flex items-center space-x-1 hover:text-gray-900">
//                       <span>Comment</span>
//                     </button>
//                     <button className="flex items-center space-x-1 hover:text-gray-900">
//                       <span>Repost</span>
//                     </button>
//                   </div>
//                 </div>

//                 <div className="mt-4">
//                   <div className="text-sm text-gray-500 mb-2">Extra Image details (optional)</div>
//                   <div className="border border-dashed rounded-lg p-4 text-center text-gray-400">
//                     Drag and drop your media here
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const SidebarItem = ({ icon, text, active = false }) => (
//   <div className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
//     active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
//   }`}>
//     <span>{icon}</span>
//     <span>{text}</span>
//   </div>
// );

// export default App;