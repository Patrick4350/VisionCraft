import React from 'react';

const Loader = () => (
  <div role="status">
    <svg aria-hidden="true" className="inline w-10 h-10 mr-2 text-gray-200 animate-spin" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" stroke="#6469ff" strokeWidth="10" strokeLinecap="round" strokeDasharray="251.2" strokeDashoffset="0">
    <animate
      attributeName="strokeDashoffset"
      values="251.2;0"
      dur="1.5s"
      repeatCount="indefinite"
      keyTimes="0;1"
    />
  </circle>
  <circle cx="50" cy="50" r="30" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" strokeDasharray="188.4" strokeDashoffset="0">
    <animate
      attributeName="strokeDashoffset"
      values="188.4;0"
      dur="1.5s"
      repeatCount="indefinite"
      keyTimes="0;1"
      begin="-0.75s"
    />
  </circle>
</svg>

  </div>
);

export default Loader;