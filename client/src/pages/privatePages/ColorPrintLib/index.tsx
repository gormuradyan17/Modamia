
import "./style.scss"
import ColorContent from './ColorContent'
import PrintContent from './PrintContent'
import Container from 'layout/Container/Container'
const ColorPrintLib = () => {
  return (
    <Container>
      <div className='color_print_lib'>
        <ColorContent />
        <PrintContent />
      </div>
    </Container>
  )
}

export default ColorPrintLib
