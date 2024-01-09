import React from 'react';
import LeftMenuBar from './components/LeftMenuBar';
import MenuList from './components/MenuList';

const Performance = () => {
  return (
    <div className='performance-area pb-0'>
      <div className='performance-container'>
        <LeftMenuBar />
        <MenuList />
      </div>
    </div>
  );
};

export default Performance;