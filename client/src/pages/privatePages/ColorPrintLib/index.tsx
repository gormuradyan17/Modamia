import ColorContent from './ColorContent'
import PrintContent from './PrintContent'
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI'
import "./style.scss"
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
