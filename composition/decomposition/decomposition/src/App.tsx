import ThematicBlock from './ThematicBlock'
import Menu from './Menu'
import Find from './Find'
import CurrencyManBlock from './CurrencyManBlock'
import List from './List'
import './App.css'

import riaLogo from './assets/logo_ria.png'


function App() {
  const nowSMI = [
    {
      logo: <><img src={riaLogo} alt='LogoRIA' /></>,
      title: "Путин упростил получение автомобильных номеров"
    },
    {
      logo: <><p>logo</p></>,
      title: "В команде Зеленского раскрыли план реформ на Украине"
    },
    {
      logo: <><p>logo</p></>,
      title: "'Турпомощь' прокомментировала гибель россиян в Анталье"
    },
    {
      logo: <><p>logo</p></>,
      title: "Суд закрыл дело Демпартии против России"
    },
    {
      logo: <><p>logo</p></>,
      title: "На Украине призвали создать ракеты для ударов по Москве"
    }
  ]

  const visited = [
    {
      logo: <><p>Недвижимость</p></>,
      title: "О сталинках"
    },
    {
      logo: <><p>Маркет</p></>,
      title: "Люстры и светильники"      
    }
  ]
  return (
    <>
      <div>
        <ThematicBlock title='Сейчас в СМИ' titleRef='www.rbc.ru'>
          <List elements={nowSMI} />
        </ThematicBlock>

        <ThematicBlock title='В Германии' titleRef='www.rbc.ru'>
        </ThematicBlock>

        <ThematicBlock title='Рекомендуем' titleRef='www.rbc.ru'>
        </ThematicBlock>

        <CurrencyManBlock />

        <ThematicBlock title='Работа над ошибками' titleRef='www.rbc.ru'>
        </ThematicBlock>

        <Menu />
        <Find />

        <ThematicBlock title='Погода' titleRef='www.rbc.ru'>
        </ThematicBlock>

        <ThematicBlock title='Посещаемое' titleRef='www.rbc.ru'>
          <List elements={visited} />
        </ThematicBlock>

        <ThematicBlock title='Карта Германии' titleRef='www.rbc.ru'>
        </ThematicBlock>

        <ThematicBlock title='Телепрограмма' titleRef='www.rbc.ru'>
        </ThematicBlock>

        <ThematicBlock title='Эфир' titleRef='www.rbc.ru'>
        </ThematicBlock>

      </div>
    </>
  )
}

export default App
