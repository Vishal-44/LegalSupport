import React, { useEffect} from 'react'
import Header from '../Components/Header'
import nda from '../assets/non-disclosure-agreement.jpg'
import pa from '../assets/payment-agreement.jpg'
import pma from '../assets/property-management-agreement.jpg'
import ra from '../assets/referral-agreement.jpg'
import rna from '../assets/rental-agreement.jpg'
import sa from '../assets/sublease-agreement.jpg'
import DocCard from '../Components/DocCard'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getUserDetails } from '../utils/ApiServices'

const DocumentGeneration = () => {
    scrollTo(top)
    const navigate = useNavigate()

    const documents = [
        {img : nda, title : 'Non Discloser Agreement', subtitle : 'Protect Your Confidential Information: Ensure Privacy and Trust in Every Deal.',url : '/NDA'},
        {img : ra, title : 'Referral Agreement', subtitle : 'Secure Your Referrals: Define Terms and Commissions with Confidence.', url : '/RFA'},
        {img : pma, title : 'Property Mng. Agreement', subtitle : 'Manage Your Property Efficiently: Outline Duties and Responsibilities Clearly.', url : ''},
        {img : pa, title : 'Payment Agreement', subtitle : 'Manage Your Property Efficiently: Outline Duties and Responsibilities Clearly.', url : '/PA'},
        {img : rna, title : 'Rental Agreement', subtitle : 'Secure Your Referrals: Define Terms and Commissions with Confidence.', url : '/RA'},
        {img : sa, title : 'Sublease Agreement', subtitle : 'Secure Your Referrals: Define Terms and Commissions with Confidence.', url : '/SBA'}
    ]

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

  return (
    <>
      <Header/>
        <div className='tagline-section'>
            <p className='tagline'>
                Seamless Document Generation
            </p>
            
            <p className=' sub-tagline'>
                Easily generate, customize, and manage a wide range of legal documents tailored to your specific requirements.<br/>
                Empower yourself with user-friendly templates designed for quick and professional results. 
            </p> 
        </div>

        <p className='templates-heading'>Templates</p>
        <p className='templates-sub-title'>Select template to generate document.</p>

        <div className='doc-list'>
            {
            documents.map(
                (document, index)=>(<DocCard key ={index} document = {document}/>)
            )
            }
        </div>

    </>
  )
}

export default DocumentGeneration
