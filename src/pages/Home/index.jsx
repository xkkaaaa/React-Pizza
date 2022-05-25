import React, { useState, useEffect } from 'react'
import Categories from '../../components/Categories'
import Sort from '../../components//Sort'
import PizzaBlock from '../../components//Pizza/PizzaBlock'
import Skeleton from '../../components//Pizza/PizzaBlock/skeleton'

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://628ceaf83df57e983ed8a66a.mockapi.io/pizzas')
      .then((response) => response.json())
      .then((jsonPizzas) => {
        setPizzas(jsonPizzas)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  )
}

export default Home
