import React from 'react';

const Button = ({ title, onClick, color }) => {
  return (
    <>
      <button
        onClick={onClick}
        type='button'
        className='btn btn-sm btn-primary'
        style={{ background: `${color}` }}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
