import React from 'react'

const SellerCards = ({title, info}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', background: '#151515', padding: '10px'}}>
        <div style={{marginBottom: '20px',fontSize: '15px'}}>{title}</div>
        <div style={{fontSize: '20px', fontWeight:'450' }}>{info}</div>
    </div>
  )
}

export default SellerCards