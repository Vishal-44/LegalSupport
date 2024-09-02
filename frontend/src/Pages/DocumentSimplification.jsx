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
        if (!file) {
            toast.warning("Please Upoad a PDF.")
            setLoading(false)
            return
        }
        setLoading(true)
        const data = new FormData()
        data.append('file', file)
        const res = await summarize(data)
        setLoading(false)
        if(!res.success){
            toast.error("Something went wrong.")
        }
        else {
            let newData = {...res}
            delete newData.success
            delete newData.message
            setText(newData)
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
                
                {text && <h6 className='headd'>Result</h6>}
                {loading && <p>Please wait! We are summarizing document for you.</p>}
                {text && Object.entries(text).map(
                    ([heading, points])=> (<div key = {heading}>
                                            <p className='headd res'>
                                                {heading}
                                            </p>
                                            {points.map(
                                                (point, i) => (<p className='summarized-text' key = {i}>{i+1}. {point}</p>)
                                            )}
                                        </div>))}
                
            </div>

        </div>
    </>
  )
}

export default DocumentSimplification
