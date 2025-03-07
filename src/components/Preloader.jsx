import React from 'react';

const Preloader = () => {
  return (
    <div
      className="preloader-wrapper"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 9999,
        overflow: 'hidden',
      }}
    >
      <div
        className="electric-spinner"
        style={{
          position: 'relative',
          width: '100px',
          height: '100px',
        }}
      >
        {/* Electric Lightning Effect */}
        <div
          className="electric-lightning"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            zIndex: -1,
            opacity: 0.3,
            backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Lightning_bolt_symbol.svg/1024px-Lightning_bolt_symbol.svg.png")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            animation: 'flash 1s infinite',
          }}
        ></div>

        {/* Spinner */}
        <div
          className="spinner-border text-primary"
          role="status"
          style={{
            width: '3rem',
            height: '3rem',
            animation: 'spin 2s linear infinite',
          }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

