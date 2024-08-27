import React, { useEffect, useState } from 'react'
import { getUserDetails, summarize } from '../utils/ApiServices'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from '../Components/Header'
import Upload from '../Components/Upload'

const DocumentSimplification = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [text, setText] = useState(null)
    const [file, setFile] = useState(null)

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

    const handleSummarize = async() => {
        setLoading(true)
        setText([])
        if (!file) {
            toast.warning("Please Upoad a PDF.")
            setLoading(false)
            return
        }
        const data = new FormData()
        data.append('file', file)
        const res = await summarize(data)
        console.log(res)
        setLoading(false)
        if(!res.success){
            setText(null)
            toast.error("Something went wrong.")
        }
        else {
            setText(res.summary)
        }
    }

  return (
    <>
        <Header/>
        <div className='summarize-container'>
            <div className='upload-section'>
                <h1 className='headd'>Summarize it all with ease.</h1>
                <Upload setFile = {setFile}/>
                <button className='summarize-btn' onClick={handleSummarize}>Summarize</button>
            </div>
            <div className='display-section'>
                {text && <h1 className='headd'>Summary</h1>}
                {!text && <p style={{textAlign : 'center'}}>Summary will be displayed here.</p>}
                {loading && <p>Please wait! We are summarizing document for you.</p>}
                {text && text.map((point, index)=> (<p key = {index} className='summarized-text'>{index+1}. {point}</p>))}
                
            </div>

        </div>
    </>
  )
}

export default DocumentSimplification
