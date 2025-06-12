import { PosLayout } from './posLayout'
import image from '../../assets/images/tienda_frente.png'

export const Front = (): React.JSX.Element => {
  return (
    <>
      <PosLayout label="Tienda" imgPath={image} backArr={false} frontArr={true} pathFront="back" />
    </>
  )
}
