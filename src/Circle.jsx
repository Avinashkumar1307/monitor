import React from 'react';

export default function Circle({ len }) {
  return (
    <div className={`w-${len} h-${len} bg-[#3DA3B5] rounded-full`} style={{ width: len, height: len }}></div>
  );
}
