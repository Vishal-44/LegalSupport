import './DocGenBody.css'
import Dcard from '../Dcard/Dcard'
import img  from '../../assets/BackgroundImage.jpg'

function DocGenBody() {
    
    const docs = {
                    'Category1'  : ['type1' , 'type2' , 'type3' , 'type4' , 'type5' , 'type6' ],
                    'Category2'  : ['type7' , 'type8' , 'type9' , 'type10' , 'type11' , 'type12'],
                    'Category3'  : ['type13' , 'type14' , 'type15' , 'type16' , 'type17' , 'type18'],
                    'Category4'  : ['type19' , 'type20' , 'type21' , 'type22' , 'type23' , 'type24'],
                    'Category5'  : ['type25' , 'type26' , 'type27' , 'type28' , 'type29' , 'type30'],
                    'Category6'  : ['type31' , 'type32' , 'type33' , 'type34' , 'type35' , 'type36']
                }

  window.scrollTo({top: 0})
  return (
    <div className='d-container'>
        <font className='d-title'>Document Generation</font>
        <div className='d-card-list'>
            {Object.keys(docs).map((item , index)=>(<Dcard key={index} category={item} list={docs[item]}/>))}
        </div>
    </div>
  )
}

export default DocGenBody