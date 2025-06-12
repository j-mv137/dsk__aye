import styles from './front.module.css'
import image from '../../assets/images/Enfrente.png'
import { ArrowRight } from 'lucide-react'

export const Front = (): React.JSX.Element => {
  return (
    <div className={styles.inv}>
      <div>
        <span className={styles.label}>Enfrente</span>
        <div className={styles.invRoom}>
          <img src={image} alt="front" />
        </div>
      </div>
      <div className={styles.rightArrow}>
        <ArrowRight />
      </div>
    </div>
  )
}
