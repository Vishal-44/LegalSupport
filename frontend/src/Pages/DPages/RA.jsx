import React,{useState} from 'react'
import Header from '../../Components/Header'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { RentalAgreement } from '../../Components/Templates'

const RA = () => {

    const [data, setData] = useState({
        'date' : '',
        'renter-name' : '',
        'renter-address' : '',
        'landlord-name' : '',
        'landlord-address' : '',
        'end-date' : '',
        'place-address' : '',
        'rent-pay' : '',
        'due-on' : '',
        'payment-method' : '',
        'fine':'',
        'security-amount' : '',
        
    })

    const handleDataChange = (e) => {
        const {name, value} = e.target
        setData((prevState)=>({...prevState, [name] : value}))
    }
  return (
    <>

<Header>

</Header>
<div className='document-container'>
    <div className='choices-container'>
        <p className='heading'>Fill Out form to get your document ready.</p>
        <br />

        <p className = 'question'>1. On which date the agreement is entered?</p>
        <input type="text" 
        name = 'date' 
        value={data['date']} 
        onChange={handleDataChange}/>
        
        <p className = 'question'>2. What is the name of the Renter?</p>
        <input type="text" 
        name = 'renter-name' 
        value={data['renter-name']} 
        onChange={handleDataChange}/>

        <p className = 'question'>3. What is the address of the Renter?</p>
        <input type="text" 
        name = 'renter-address' 
        value={data['renter-address']} 
        onChange={handleDataChange}/>

        <p className = 'question'>4. What is the name of the Landlord?</p>
        <input type="text" 
        name = 'landlord-name' 
        value={data['landlord-name']}
        onChange={handleDataChange}/>

        <p className = 'question'>5. What is the address of the Landlord?</p>
        <input type="text" 
        name = 'landlord-address' 
        value={data['landlord-address']}
        onChange={handleDataChange}/>

        <p className = 'question'>6. What is the end date of the rental period?</p>
        <input type="text" 
        name = 'end-date' 
        value={data['end-date']}
        onChange={handleDataChange}/>

       <p className = 'question'>7. What is the address of the premises being rented?</p>
        <input type="text" 
        name = 'place-address' 
        value={data['place-address']}
        onChange={handleDataChange}/>
        <p className = 'question'>8. What is the the the amount of money the Renter agrees to pay the Landlord?</p>
        <input type="number" 
        name = 'rent-pay' 
        value={data['rent-pay']}
        onChange={handleDataChange}/>

       

        <p className = 'question'>9. Due date for the rent (e.g., first day of every month)?</p>
        <input type="text" 
        name = 'due-on' 
        value={data['due-on']}
        onChange={handleDataChange}/>

       <p className = 'question'>10. What is the Preferred method of payment (e.g., bank transfer)?</p>
        <input type="text" 
        name = 'payment-method' 
        value={data['payment-method']}
        onChange={handleDataChange}/>

       <p className = 'question'>11. The amount of fine imposed for late payments?</p>
        <input type="number" 
        name = 'fine' 
        value={data['fine']}
        onChange={handleDataChange}/>

        <p className = 'question'>12. Amount of security deposit required?</p>
        <input type="number" 
        name = 'security-amount' 
        value={data['security-amount']}
        onChange={handleDataChange}/>

        
        <br />
        <br />

        <PDFDownloadLink
        document={
            <RentalAgreement
                data = {data}
            />
        }
        fileName='Rental-Agreement.pdf'
  >
    <button className='download-pdf'>Download PDF</button>
    {({ loading }) => {
            loading ? 'Generating PDF...' : 'Download NDA PDF'
        }
    }
  </PDFDownloadLink> 
    </div>


    <div className='document-preview-container'>
        <RentalAgreement data = {data}/>
        
    </div>
    </div>
  
      
      
    </>
  )
}

export default RA
