import React, { useState, useEffect } from 'react'
import {NonDisclosureAgreement} from '../../Components/Templates.jsx/'
import Header from '../../Components/Header'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { getUserDetails } from '../../utils/ApiServices'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const NDA = () => {
    
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
        'disclosing-party' : '',
        'disclosing-party-address' : '',
        'receiving-party' : '',
        'receiving-party-address' : '',
        'governing-law' : '',
        'sign1' : '',
        'sign2':''
    })

    const handleDataChange = (e) => {
        const {name, value} = e.target
        setData((prevState)=>({...prevState, [name] : value}))
    }

  return (
    <>
        <Header/>
        <div className='document-container'>
        <div className='choices-container'>
            <p className='heading'>Fill Out form to get your document ready.</p>
            <br />

            <p className = 'question'>1. On what date will this agreement become effective?</p>
            <input type="text" 
            name = 'date' 
            value={data['date']} 
            onChange={handleDataChange}/>
            
            <p className = 'question'>2. What is the name of the party disclosing confidential information?</p>
            <input type="text" 
            name = 'disclosing-party' 
            value={data['disclosing-party']} 
            onChange={handleDataChange}/>

            <p className = 'question'>3. What is the address of the party disclosing confidential information?</p>
            <input type="text" 
            name = 'disclosing-party-address' 
            value={data['disclosing-party-address']} 
            onChange={handleDataChange}/>

            <p className = 'question'>4. What is the name of the party receiving confidential information?</p>
            <input type="text" 
            name = 'receiving-party' 
            value={data['receiving-party']}
            onChange={handleDataChange}/>

            <p className = 'question'>5. What is the address of the party receiving confidential information?</p>
            <input type="text" 
            name = 'receiving-party-address' 
            value={data['receiving-party-address']}
            onChange={handleDataChange}/>

            <p className = 'question'>6. Under the laws of which state or jurisdiction will this agreement be governed?</p>
            <input type="text" 
            name = 'governing-law' 
            value={data['governing-law']}
            onChange={handleDataChange}/>

            <p className = 'question'>7. Who will be signing this agreement on behalf of the Disclosing Party?</p>
            <input type="text" 
            name = 'sign1' 
            value={data['sign1']}
            onChange={handleDataChange}/>

            <p className = 'question'>8. Who will be signing this agreement on behalf of the Receiving Party?</p>
            <input type="text" 
            name = 'sign2' 
            value={data['sign2']}
            onChange={handleDataChange}/>
            <br />
            <br />

            <PDFDownloadLink
            document={
                <NonDisclosureAgreement
                    data = {data}
                />
            }
            fileName='Non-Disclosure-Agreement.pdf'
      >
        <button className='download-pdf'>Download PDF</button>
        {({ loading }) => {
                loading ? 'Generating PDF...' : 'Download NDA PDF'
            }
        }
      </PDFDownloadLink> 
        </div>


        <div className='document-preview-container'>
            <NonDisclosureAgreement data = {data}/>
            
        </div>
        </div>
    </>
  )
}

export default NDA
