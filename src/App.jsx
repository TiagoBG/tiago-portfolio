import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProfileSection from './components/ProfileSection/ProfileSection'
import ClientsSection from './components/ClientsSection/ClientsSection'


function App() {

  return (
    <div className="App">
    <Header/>
    <ProfileSection/>
    <ClientsSection/>
    <Footer/> 
    </div>
  )
}

export default App
