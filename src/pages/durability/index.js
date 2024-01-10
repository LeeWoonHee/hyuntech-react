import React from 'react';
import LeftMenuBar from './components/LeftMenuBar';
import MenuList from './components/MenuList';

const Durability = () => {
  return (
    <div className='durability-area pb-0'>
      <div className='durability-container'>
        <LeftMenuBar />
        <MenuList />
      </div>
    </div>
  );
};

export default Durability;