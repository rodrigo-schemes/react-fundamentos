import './App.css'

import ReactImg from './assets/react.svg'
import CarDetails from './components/CarDetails'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import { useState } from 'react'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

function App() {

  const cars = [
    {id: 1, brand: 'Ferrari', color: 'Vermelho', newCar: true, km: 0},
    {id: 2, brand: 'Lamborghini', color: 'Verde', newCar: false, km: 100},
    {id: 3, brand: 'BMW', color: 'Preta', newCar: false, km: 500}
  ]

  function showMessage(){
    console.log('Evento do componente pai')
  }

  const [message, setMessage] = useState('')

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className='App'>
      <h1>Avançando em React</h1>
      {/*Imagem em public*/}
      <div>
        <img src="/vite.svg" alt="Logo Vite" />
      </div>
      {/*Imagem em asset*/}
      <div>
        <img src={ReactImg} alt="Logo React" />
      </div>
      {/*useState()*/}
      <ManageData/>
      {/*Map*/}
      <ListRender/>
      {/*IF Ternário*/}
      <ConditionalRender/>
      {/*Props*/}
      <ShowUserName name='Rodrigo'/>
      {/*Destructuring*/}
      <CarDetails brand = 'VW' km={100000} color='Prata' newCar={true}/>
      {/*Reaproveitando*/}
      <CarDetails brand = 'Ford' km={0} color='Azul' newCar={false}/>
      {/*Loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand} 
          km={car.km} 
          color={car.color} 
          newCar={car.newCar}
        />
      ))}
      {/*Fragment*/}
      <Fragment/>
      {/*Children*/}
      <Container>
        <p>Este é um exmplo de Children</p>
      </Container>
      {/*Passar Função para o componente filho*/}
      <ExecuteFunction myFunction={showMessage}/>
      {/*State Lift*/}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  )
}

export default App
