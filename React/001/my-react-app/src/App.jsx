import './App.css'
import { Header } from './components/Header'
import {Main} from './components/Main'
import {Footer} from './components/Footer'

function App() {
  // class 키워드는 이미 javaScript에서 사용되고 있어요.
  // 따라서 className을 사용해야 해요.
  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}

export default App