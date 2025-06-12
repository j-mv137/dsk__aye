import { PosLayout } from './posLayout'
import image from '../../assets/images/almacen.png'

export const Back = (): React.JSX.Element => {
  return (
    <>
      <PosLayout
        label="Almacen"
        imgPath={image}
        frontArr={true}
        backArr={true}
        pathFront="store"
        pathBack="front"
      />
    </>
  )
}
