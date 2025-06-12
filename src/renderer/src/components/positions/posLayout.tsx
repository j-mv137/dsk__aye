import styles from './posLayout.module.css'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router'

interface PosLayoutProps {
  label: string
  imgPath: string
  backArr: boolean
  frontArr: boolean
  pathFront?: string
  pathBack?: string
}

export const PosLayout = ({
  label,
  imgPath,
  backArr,
  frontArr,
  pathFront,
  pathBack
}: PosLayoutProps): React.JSX.Element => {
  const navigate = useNavigate()

  return (
    <div className={styles.inv}>
      {backArr && (
        <div onClick={() => navigate(`/positions/${pathBack}`)} className={styles.leftArrow}>
          <ArrowLeft />
        </div>
      )}
      <div>
        <span className={styles.label}>{label}</span>
        <div className={styles.invRoom}>
          <img src={imgPath} alt={label} />
        </div>
      </div>
      {frontArr && (
        <div onClick={() => navigate(`/positions/${pathFront}`)} className={styles.rightArrow}>
          <ArrowRight />
        </div>
      )}
    </div>
  )
}
