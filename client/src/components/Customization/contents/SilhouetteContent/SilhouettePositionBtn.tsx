import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setMannequinPosition } from 'redux/reducers/mannequinReducer'



const SilhouettePositionBtn=()=> {
  const [position,setPosition]=useState("fronts");
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(setMannequinPosition(position))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[position])
  
  return (
    <div className='positionBtns'>
        <span onClick={()=>setPosition("fronts")}>Front</span>
        <span onClick={()=>setPosition("backs")}>Back</span>
    </div>
  )
}


export default SilhouettePositionBtn;