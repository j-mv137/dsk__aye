import { FileQuestionMark, SearchIcon } from 'lucide-react'
import styles from './positionsTemplate2.module.css'
import { FrontMap } from './Rooms/Front/FrontMap'
import { useMemo, useEffect, useRef, useState } from 'react'
import frontImg from '../../assets/images/Rooms/front2.png'

type ImgAttr = { image: HTMLImageElement; position: number[] }

interface Product {
  id: number
  code: string
  secondCode: string
  description: string
  department: string
  category: string
  cost: number
  sellPrice: number
  currency: string
  artNum: number
  minQuantity: number
}

function capitalizeFirst(str: string): string {
  return str[0].toUpperCase() + str.slice(1, str.length).toLowerCase()
}

export const PositionTemplate2 = (): React.JSX.Element => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const searchInputRef = useRef<HTMLInputElement | null>(null)
  const [text, setText] = useState('')
  const [prods, setProds] = useState<Product[] | null>(null)

  const [imgAttr, setImgAttr] = useState<ImgAttr>({ image: new window.Image(), position: [0, 0] })

  function handleSearch(): void {
    if (!searchInputRef.current) return
    window.electronAPI
      .getProdsBySearch(searchInputRef.current.value)
      .then()
      .then((data) => {
        setProds(JSON.parse(data))
        console.log(data)
      })
  }

  const input = useMemo(() => {
    return (
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        ref={searchInputRef}
        className={styles.searchInput}
      />
    )
  }, [text])

  useEffect(() => {
    if (!mapContainerRef.current) {
      return
    }

    const img = new window.Image()

    const w = mapContainerRef.current.clientWidth
    const h = mapContainerRef.current.clientHeight

    function handleLoad(event: Event): void {
      const image = event.currentTarget

      if (!(image instanceof HTMLImageElement)) {
        return
      }
      const naturalWidth = image.width
      const naturalHeight = image.height

      const vratio = h / naturalHeight
      const hratio = w / naturalWidth

      const ratio = Math.min(vratio, hratio)

      const width = naturalWidth * ratio
      const height = naturalHeight * ratio

      const xOffset = (w - width) / 2
      const yOffset = (h - height) / 2
      image.width = width
      image.height = height

      setImgAttr({ image: image, position: [xOffset, yOffset] })
    }
    img.addEventListener('load', handleLoad)
    img.src = frontImg
    return () => img.removeEventListener('load', handleLoad)
  }, [mapContainerRef, imgAttr])

  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchContainer}>
        <div className={styles.searchBar}>
          {input}
          <div className={styles.searchIconContainer} onClick={handleSearch}>
            <SearchIcon width={17} opacity={0.7} />
          </div>
        </div>
        <div className={styles.itemsContainer}>
          {(!prods || prods.length === 0) && (
            <div className={styles.notFoundContainer}>
              <div className={styles.notFoundContent}>
                <FileQuestionMark width="auto" height={100} />
                <span>No se encontraron artículos</span>
              </div>
            </div>
          )}
          {prods?.map((prod) => (
            <div key={prod.code} className={styles.item}>
              <div className={styles.itemContent}>
                <div className={styles.codes}>
                  <span>{prod.code}</span>
                  <span>{prod.secondCode}</span>
                </div>
                <span>{capitalizeFirst(prod.description)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.mapContainer} ref={mapContainerRef}>
        <FrontMap containerRef={mapContainerRef} imgAttr={imgAttr} />
      </div>
    </div>
  )
}
