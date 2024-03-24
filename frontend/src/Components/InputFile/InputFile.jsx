
import './InputFile.css'
import uploadImage from '../../assets/upload.png'

function InputFile({file ,callback}) {

    const handleUpload = (e)=>{callback(e.target.files[0]) }

  return (
    <div className='ds-input'>
    <img src={uploadImage} alt="upload" width = '70vw' />
    <h3>{(file !==null)?file.name:'Click box to upload'}</h3>
    <input type="file" onChange={handleUpload}/>
  </div>
  )
}

export default InputFile