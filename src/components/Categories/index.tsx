import { FC } from 'react'
import './styles.scss'

type PropsType = {
  activeCategory: number
  onChangeCategory: (i: number) => void
}
const cotegories: string[] = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]

const Categories: FC<PropsType> = ({ activeCategory, onChangeCategory }) => {
  return (
    <div>
      <div className="categories">
        <ul>
          {cotegories.map((cotegory, i) => (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={activeCategory === i ? 'active' : ''} >
              {cotegory}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Categories
