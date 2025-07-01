import { useNavigate } from 'react-router'
import styles from './menuItem.module.css'

interface MenuItemProps {
  imgPath: string
  title: string
  description: string
  to: string
}

export const MenuItem = ({ imgPath, title, description, to }: MenuItemProps): React.JSX.Element => {
  const navigate = useNavigate()

  return (
    <div className={styles.mainContainer} onClick={() => navigate(to)}>
      <div className={styles.secondContainer}>
        <img src={imgPath} width={120} />
        <div className={styles.textContainer}>
          <span className={styles.title}>{title}</span>
          <span className={styles.description}>{description}</span>
        </div>
      </div>
    </div>
  )
}
