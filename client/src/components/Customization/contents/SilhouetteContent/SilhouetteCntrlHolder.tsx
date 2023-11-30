import React from 'react'
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI';

interface Props{
    cntrlData:Array<{_id:string,type:string}>,
    setKindSilhouette:any
}
const SilhouetteCntrlHolder:React.FC<Props>=({cntrlData,setKindSilhouette})=> {
  
  return (
    <div className='btn_container'>
        {Boolean( Object.keys(cntrlData).length) && 
         Object.keys(cntrlData).map((option,index)=> {
            if (option === 'mannequin') return ''
            return <ButtonUI key={index} version='gray' onClick={()=>setKindSilhouette(option)}>{option}</ButtonUI>
         }) }
    </div>
  )
}

export default SilhouetteCntrlHolder;