// "use client";
// import React, { useEffect, useState } from 'react'
// import styles from './ProductCard.module.css';
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const ProductCard = () => {
//   return (
//     <div className={styles.cardoneContainer}>
//         {/* {variable && <span className={styles.ribbon}>
//           <p style={{marginLeft: '3px'}}>{type}</p></span>} */}
          
//         <div className={styles.image}>
//         <Image src="https://images.pexels.com/photos/1757516/pexels-photo-1757516.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Picture of the author" width={250} height={250} style={{borderRadius: '20px'}}/>
          
          
//         </div>
//         <div className={styles.content}>
//           <p style={{color: 'white', fontSize: '25px'}} className='heading'>Heart & Sol</p>
//           <div>
//             <div className='place' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', margin: '10px 0px'}}>
//                 <p style={{color: '#00AC4F', fontSize: '15px'}}><FontAwesomeIcon icon="fa-duotone fa-diamond-half" rotation={90} />12.7%</p>
//               <p style={{color: 'white', fontSize: '15px'}}>Ahmeadabad, India</p>
              
//             </div>
//             <hr style={{color: 'white', fontSize:'3px'}}></hr>
//             <div className='invest' style={{marginTop: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
//               <button style={{cursor: 'pointer', padding: '10px', gap: '10.97px',textDecoration: 'none', padding: '3px', borderRadius: '20px', background: 'white', color: '#5539A8'}}><b>EUR  25000</b></button>
//               <p style={{color: 'white', fontSize: '15px'}}>Invest Now</p>
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default ProductCard