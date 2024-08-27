import React,  { useState, useEffect  }from 'react'
import Header from '../../Components/Header'
import { PaymentAgreement } from '../../Components/Templates'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { getUserDetails } from '../../utils/ApiServices'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const PA = () => {

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
        'debtor-name' : '',
        'debtor-address' : '',
        'creditor-name' : '',
        'creditor-address' : '',
        'amount':'',
        'payment-details' : '',
        'governing-law':''
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

            <p className = 'question'>1. On what date will this agreement become effective?</p>
            <input type="text" 
            name = 'date' 
            value={data['date']} 
            onChange={handleDataChange}/>
            
            <p className = 'question'>2. What is the name of the Debtor?</p>
            <input type="text" 
            name = 'debtor-name' 
            value={data['debtor-name']} 
            onChange={handleDataChange}/>

            <p className = 'question'>3. What is the address of the Debtor?</p>
            <input type="text" 
            name = 'debtor-address' 
            value={data['debtor-address']} 
            onChange={handleDataChange}/>

            <p className = 'question'>4. What is the name of the Creditor?</p>
            <input type="text" 
            name = 'creditor-name' 
            value={data['creditor-name']}
            onChange={handleDataChange}/>

            <p className = 'question'>5. What is the address of the Creditor?</p>
            <input type="text" 
            name = 'creditor-address' 
            value={data['creditor-address']}
            onChange={handleDataChange}/>
            <p className = 'question'>6. What is the specific amount of money that the Debtor agrees to pay to the Creditor?</p>
            <input type="text" 
            name = 'amount' 
            value={data['amount']}
            onChange={handleDataChange}/>

            <p className = 'question'>7.What is the structure of the payment plan, including due dates, frequency (e.g., monthly, quarterly), and amounts to be paid in each installment?</p>
            <input type="text" 
            name = 'payment-details' 
            value={data['payment-details']}
            onChange={handleDataChange}/>

            <p className = 'question'>8. Under the laws of which state or jurisdiction will this agreement be governed?</p>
            <input type="text" 
            name = 'governing-law' 
            value={data['governing-law']}
            onChange={handleDataChange}/>

            
            <br />
            <br />

            <PDFDownloadLink
            document={
                <PaymentAgreement
                    data = {data}
                />
            }
            fileName='Payment-Agreement.pdf'
      >
        <button className='download-pdf'>Download PDF</button>
        {({ loading }) => {
                loading ? 'Generating PDF...' : 'Download NDA PDF'
            }
        }
      </PDFDownloadLink> 
        </div>


        <div className='document-preview-container'>
            <PaymentAgreement data = {data}/>
            
        </div>
        </div>
      
    </>
  )
}

export default PA
