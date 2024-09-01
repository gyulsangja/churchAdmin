import React, { useState, useEffect } from 'react';
import {PeopleList} from '../../routers'

const ResizableDiv = () => {
  const [isResizing, setIsResizing] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [width, setWidth] = useState(350);

  const handleMouseDown = (e:any) => {
    e.preventDefault();
    setIsResizing(true);
    setInitialX(e.clientX);
  };

  const handleMouseMove = (e:any) => {
    if (isResizing) {
      const newWidth = width + (e.clientX - initialX);
      setInitialX(e.clientX);
      if (newWidth >= 200 && newWidth <= 800) {
        setWidth(newWidth);
      }
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div className="flex">
      <div className="flex flex-col" style={{ width }}>
        <PeopleList/>
      </div>
      <div
        className="w-1.5 bg-gray-300 cursor-col-resize hover:bg-gray-400 mx-[20px]"
        onMouseDown={handleMouseDown}
      />
    </div>
  );
};

export default ResizableDiv;
