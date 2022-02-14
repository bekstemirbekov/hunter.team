
// import React, { useState } from 'react';
// import Cards from 'react';
// import { TextField} from '@mui/material'

// export default function Pay () {
//     const [values, setValues] = useState({
//         cvc: '',
//         expiry: '',
//         focus: '',
//         name: '',
//         number: '',
//     })
  


// //   handleInputFocus = (e) => {
// //     this.setState({ focus: e.target.name });
// //   }
  
//   handleInputChange = (e) => {
//     let obj = {
//         ...values,
//         [e.target.name]: e.target.value
//     }
//     setValues(obj)
    
//   }
//     return (
//       <div id="PaymentForm">
//         <Cards/>
//         <TextField 
//           style={{padding: '10px'}} 
//           name='cvc'
//           onChange={handleInputChange}
//           value={values.cvc} 
//           variant='outlined' 
//           label='cvc'
//            />
//         <TextField 
//           style={{padding: '10px'}} 
//           name='expiry'
//           onChange={handleInputChange}
//           value={values.expiry} 
//           variant='outlined' 
//           label='expiry'
//            />
//         <TextField 
//           style={{padding: '10px'}} 
//           name='focus'
//           onChange={handleInputChange}
//           value={values.focus} 
//           variant='outlined' 
//           label='focus'
//            />
//         <TextField 
//           style={{padding: '10px'}} 
//           name='name'
//           onChange={handleInputChange}
//           value={values.name} 
//           variant='outlined' 
//           label='Name'
//            />
//         <TextField 
//           style={{padding: '10px'}} 
//           name='number'
//           onChange={handleInputChange}
//           value={values.number} 
//           variant='outlined' 
//           label='number'
//            />
       

           
//         {/* <form> */}
//         	{/* <Input
//             type="tel"
//             name="number"
//             placeholder="Card Number"
//             // onChange={handleInputChange}
//             // onFocus={handleInputFocus}
//           /> */}
//           ...
//         {/* </form> */}
//       </div>
//     );
//   }
