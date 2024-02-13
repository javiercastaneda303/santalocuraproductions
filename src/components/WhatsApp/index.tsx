import React from 'react'

const WhatsApp: React.FC = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=34632202126&text=Hola!%20Santa%20Morel%20"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className="jc_cta"
        style={{
          borderStyle: 'dotted',
          borderColor: '#4027cf',
          color: '#ffffff',
          backgroundColor: '#1a8f14',
          display: 'block',
          padding: '20px',
          position: 'fixed',
          right: '5px',
          width: '70px',
          zIndex: 100,
          bottom: '5px',
          borderRadius: '50px'
        }}
      >
        <img
          style={{
            width: '100%',
            objectFit: 'contain'
          }}
          src="images/whatsapp-fixed.png"
          alt="icono whatsapp"
        />
      </div>
    </a>
  )
}

export default WhatsApp
