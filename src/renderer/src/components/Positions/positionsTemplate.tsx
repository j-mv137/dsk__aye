import styles from './positionsTemplate.module.css'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { MapProps } from './Rooms/map'
import { SearchedBox } from './searchedBox'

interface PosTemplateProps {
  label: string
  backArr: boolean
  frontArr: boolean
  pathFront?: string
  pathBack?: string
  Map: React.FC<MapProps>
  imgPath: string
}

type ImgAttr = { image: HTMLImageElement; position: number[] }

export const PositionTemplate = ({
  label,
  backArr,
  frontArr = true,
  pathFront,
  pathBack,
  Map,
  imgPath
}: PosTemplateProps): React.JSX.Element => {
  const navigate = useNavigate()
  const roomMapRef = useRef<HTMLDivElement | null>(null)

  const [inputValue, setInputValue] = useState<string>('')

  const [imgAttr, setImgAttr] = useState<ImgAttr>({ image: new window.Image(), position: [0, 0] })
  useEffect(() => {
    if (!roomMapRef.current) {
      return
    }

    const img = new window.Image()

    const w = roomMapRef.current.clientWidth
    const h = roomMapRef.current.clientHeight

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
    img.src = imgPath

    return () => img.removeEventListener('load', handleLoad)
  }, [roomMapRef, imgPath])

  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    const input = e.target.value
    setInputValue(input)

    setTimeout(() => {
      window.electronAPI.getProdsBySearch(input).then().catch()
    }, 500)
  }

  return (
    <div className={styles.inv}>
      {backArr && (
        <div onClick={() => navigate(`/positions/${pathBack}`)} className={styles.leftArrow}>
          <ArrowLeft />
        </div>
      )}
      <div className={styles.secondContainer}>
        <div className={styles.headerRoom}>
          <span className={styles.label}>{label}</span>
          <div className={styles.inputContainer}>
            <input type="text" className={styles.input} onChange={handleInputChange} />
            {inputValue.length > 0 && <SearchedBox />}
          </div>
        </div>
        <div className={styles.invRoom} ref={roomMapRef}>
          <Map imgAttr={imgAttr} containerRef={roomMapRef} />
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
