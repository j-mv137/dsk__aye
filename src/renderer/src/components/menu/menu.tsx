import styles from './menu.module.css'
import { Item } from './item'
import icon from '../../assets/images/posiciones_icono.png'

export const Menu = (): React.JSX.Element => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.gridContainer}>
        <div className={styles.itemContainer}>
          <Item
            iconPath={icon}
            title="Posiciones"
            description="Revisa las posiciones de los productos"
            width={50}
            path="/positions/front"
          />
        </div>
        <div className={styles.itemContainer}>
          <Item
            iconPath={icon}
            title="Posiciones"
            description="Revisa las posiciones de los productos"
            width={50}
            path="/positions"
          />
        </div>
        <div className={styles.itemContainer}>
          <Item
            iconPath={icon}
            title="Posiciones"
            description="Revisa las posiciones de los productos"
            width={50}
            path=""
          />
        </div>
        <div className={styles.itemContainer}>
          <Item
            iconPath={icon}
            title="Posiciones"
            description="Revisa las posiciones de los productos"
            width={50}
            path=""
          />
        </div>
        <div className={styles.itemContainer}>
          <Item
            iconPath={icon}
            title="Posiciones"
            description="Revisa las posiciones de los productos"
            width={50}
            path=""
          />
        </div>
        <div className={styles.itemContainer}>
          <Item
            iconPath={icon}
            title="Posiciones"
            description="Revisa las posiciones de los productos"
            width={50}
            path=""
          />
        </div>
      </div>
    </div>
  )
}
