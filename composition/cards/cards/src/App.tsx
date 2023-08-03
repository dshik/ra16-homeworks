import djangoLogo from './assets/django_icon.png'
import swiftLogo from './assets/swift_icon.png'
import netologyLogo from './assets/netology_logo.png'
import './App.css'
import Card from './card'
import Image from './Image'
import Body from './Body'
import Title from './Title'
import Text from './Text'
import Button from './Button'

function App() {

  return (
    <>
      <div>
        <h1>I in App</h1>
        <Card class='card' style={{width: "18rem"}}>
          <Image filePuth={swiftLogo} class='card-img-top' alt='Logo Swift' />
          <Body class='card-body'>
            <Title class="card-title" title='Swift один из самых быстрых языков программирования'/>
            <Text class='card-text' text='Типизированный быстрый язык'/>
            <Button caption='Купить курс'/>
          </Body>
        </Card>

        <Card class='card' style={{width: "18rem"}}>
          <Image filePuth={djangoLogo} class='card-img-top' alt='Logo Django' />
          <Body class='card-body'>
            <Title class="card-title" title='Джанго один из самых популярных серверных веб-фреймворков'/>          
            <Text class='card-text' text='В основе Python.'/>
            <Text class='card-text' text='Очень продуманный движок.'/>
            <Button caption='Купить курс'/>
            <Text class='card-text' text='Если очень хочется, то можем договориться.'/>
            <Button caption='Купить курс со скидкой'/>
          </Body>
        </Card>

        <Card class='card' style={{width: "18rem"}}>
          <Body class='card-body'>
            <Title class="card-title" title='Где научиться программировать?'/>                      
            <Text class='card-text' text='Конечно же Netology.'/>
            <Text class='card-text' text='Гарантированный результат'/>
            <Text class='card-text' text='Но, научить нельзя, можно научиться.'/>
            <Image filePuth={netologyLogo} class='card-img-top' alt='Logo Django' />
            <Button caption='Получить консультацию'/>
          </Body>
        </Card>
      </div>
    </>
  )
}

export default App
