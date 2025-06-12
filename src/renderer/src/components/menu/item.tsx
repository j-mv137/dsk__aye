import styles from './item.module.css'
import { useNavigate } from 'react-router'

interface ItemProps {
  iconPath: string
  title: string
  description: string
  path: string
  width?: number
  height?: number
}

export const Item = ({
  iconPath,
  title,
  description,
  path,
  width,
  height
}: ItemProps): React.JSX.Element => {
  const navigate = useNavigate()

  return (
    <div className={styles.mainContainer}>
      <div className={styles.secondContainer}>
        <img src={iconPath} alt={title} width={width} height={height} />
        <div className={styles.text} onClick={() => navigate(path)}>
          <h1>{title}</h1>
          <span>{description}</span>
        </div>
      </div>
    </div>
  )
}
