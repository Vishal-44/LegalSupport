import React,{useState} from 'react'
import Header from '../../Components/Header'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { SubleaseAgreement } from '../../Components/Templates'


const SBA = () => {

    const [data, setData] = useState({
        'date' : '',
        'subtenant-name' : '',
        'subtenant-address' : '',
        'sublessor-name' : '',
        'sublessor-address' : '',
        'subleased-premises' : '',
        'rent-pay' : '',
        'due-on' : '',
        'payment-method' : '',
        
        'security-amount' : '',
        'end-date' : '',
        
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
        
        <p className = 'question'>2. What is the name of the Subtenant?</p>
        <input type="text" 
        name = 'subtenant-name' 
        value={data['subtenant-name']} 
        onChange={handleDataChange}/>

        <p className = 'question'>3. What is the address of the Subtenant?</p>
        <input type="text" 
        name = 'subtenant-address' 
        value={data['subtenant-address']} 
        onChange={handleDataChange}/>

        <p className = 'question'>4. What is the full name of the sublessor (the person who originally leased the property)?</p>
        <input type="text" 
        name = 'sublessor-name' 
        value={data['sublessor-name']}
        onChange={handleDataChange}/>

        <p className = 'question'>5. What is the address of the Sublessor?</p>
        <input type="text" 
        name = 'sublessor-address' 
        value={data['sublessor-address']}
        onChange={handleDataChange}/>

        <p className = 'question'>6. What is the address of the premises that will be subleased?</p>
        <input type="text" 
        name = 'subleased-premises' 
        value={data['subleased-premises']}
        onChange={handleDataChange}/>

      <p className = 'question'>7. What is the monthly rent to be paid by the subtenant??</p>
        <input type="number" 
        name = 'rent-pay' 
        value={data['rent-pay']}
        onChange={handleDataChange}/>

       <p className = 'question'>8. What is the date when the first rent payment is due?</p>
        <input type="text" 
        name = 'due-on' 
        value={data['due-on']}
        onChange={handleDataChange}/>
        
        <p className = 'question'>9. What is the Preferred method of payment (e.g., bank transfer)?</p>
        <input type="text" 
        name = 'payment-method' 
        value={data['payment-method']}
        onChange={handleDataChange}/>

       
        <p className = 'question'>10. Amount of security deposit required?</p>
        <input type="number" 
        name = 'security-amount' 
        value={data['security-amount']}
        onChange={handleDataChange}/>

        <p className = 'question'>11. When will the sublease agreement end?</p>
        <input type="text" 
        name = 'end-date' 
        value={data['end-date']}
        onChange={handleDataChange}/>

        
        <br />
        <br />

        <PDFDownloadLink
        document={
            <SubleaseAgreement
                data = {data}
            />
        }
        fileName='Sublease-Agreement.pdf'
  >
    <button className='download-pdf'>Download PDF</button>
    {({ loading }) => {
            loading ? 'Generating PDF...' : 'Download NDA PDF'
        }
    }
  </PDFDownloadLink> 
    </div>


    <div className='document-preview-container'>
        <SubleaseAgreement data = {data}/>
        
    </div>
    </div>
  
      
    </>
  )
}

export default SBA
