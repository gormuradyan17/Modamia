
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI'
import "./style.scss"
import ColorContent from './ColorContent'
import PrintContent from './PrintContent'
const ColorPrintLib = () => {
  return (
    <div className='color_print_lib'>
      <div>
        <HeadingUI text='color' />
        <ColorContent />
      </div>
      <div>
        <HeadingUI text="prints" />
        <PrintContent />
      </div>
    </div>
  )
}

export default ColorPrintLib
