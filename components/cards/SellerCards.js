import React from 'react'

const SellerCards = ({title, info}) => {
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', background: '#151515', padding: '20px', flexBasis: 1, flexGrow: 1, margin: '2px 5px'}}>
        <div style={{marginBottom: '20px',fontSize: '15px'}}>{title}</div>
        <div style={{fontSize: '20px', fontWeight:'450' }}>{info}</div>
    </div>
  )
}

export default SellerCards