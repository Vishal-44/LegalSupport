import React,{useEffect, useState} from 'react'
import Header from '../../Components/Header'
import { ReferralAgreement } from '../../Components/Templates'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { getUserDetails } from '../../utils/ApiServices'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const RFA = () => {

    const navigate = useNavigate()

    useEffect(()=>{
        const fechData = async () => {
        const res = await getUserDetails()
        if (!res.success){
            toast.warning("Log In or Register to generate documents.")
            navigate('/')
        }
      }
      fechData()
    },[])

    const [data, setData] = useState({
        'date' : '',
        'referrer-name' : '',
        'referrer-address' : '',
        'seller-name' : '',
        'seller-address' : '',
        'seller-business' : '',
        'referrer-contacts' : '',
        'term-of-agreement' : '',
        'termination-notice-period' : '',
        'commission':'',
        'invoice-frequency' : '',
        
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
        
        <p className = 'question'>2. What is the name of the Referrer?</p>
        <input type="text" 
        name = 'referrer-name' 
        value={data['referrer-name']} 
        onChange={handleDataChange}/>

        <p className = 'question'>3. What is the address of the Referrer?</p>
        <input type="text" 
        name = 'referrer-address' 
        value={data['referrer-address']} 
        onChange={handleDataChange}/>

        <p className = 'question'>4. What is the name of the Seller?</p>
        <input type="text" 
        name = 'seller-name' 
        value={data['seller-name']}
        onChange={handleDataChange}/>

        <p className = 'question'>5. What is the address of the Seller?</p>
        <input type="text" 
        name = 'seller-address' 
        value={data['seller-address']}
        onChange={handleDataChange}/>
        <p className = 'question'>6. What is the the business or service the Seller is involved in?</p>
        <input type="text" 
        name = 'seller-business' 
        value={data['seller-business']}
        onChange={handleDataChange}/>

        <p className = 'question'>7.Give a description of the Referrer's contacts or the nature of their network that is relevant to the agreement?</p>
        <input type="text" 
        name = 'referrer-contacts' 
        value={data['referrer-contacts']}
        onChange={handleDataChange}/>

        <p className = 'question'>8. Give the start date and end date of the agreement?</p>
        <input type="text" 
        name = 'term-of-agreement' 
        value={data['term-of-agreement']}
        onChange={handleDataChange}/>

<p className = 'question'>9. What is the number of days required for written notice before terminating the agreement?</p>
        <input type="number" 
        name = 'termination-notice-period' 
        value={data['termination-notice-period']}
        onChange={handleDataChange}/>

<p className = 'question'>10. The amount of commission the Referrer will receive per referral?</p>
        <input type="number" 
        name = 'commission' 
        value={data['commission']}
        onChange={handleDataChange}/>

<p className = 'question'>11. What is the frequency (in days or months) at which the Referrer will provide an invoice to the Seller for the services rendered?</p>
        <input type="number" 
        name = 'invoice-frequency' 
        value={data['invoice-frequency']}
        onChange={handleDataChange}/>

        
        <br />
        <br />

        <PDFDownloadLink
        document={
            <ReferralAgreement
                data = {data}
            />
        }
        fileName='Referral-Agreement.pdf'
  >
    <button className='download-pdf'>Download PDF</button>
    {({ loading }) => {
            loading ? 'Generating PDF...' : 'Download NDA PDF'
        }
    }
  </PDFDownloadLink> 
    </div>


    <div className='document-preview-container'>
        <ReferralAgreement data = {data}/>
        
    </div>
    </div>
  
      
    </>
  )
}

export default RFA
