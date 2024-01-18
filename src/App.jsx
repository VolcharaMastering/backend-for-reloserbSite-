import { Routes, Route, useLocation } from 'react-router-dom'
import './App.scss'
import Main from './Pages/Main/Main'
import AbouotUs from './Pages/AboutUs/AboutUs'
import Reviews from './Pages/Reviews/Reviews'
import Blog from './Pages/Blog/Blog'
import Contacts from './Pages/Contacts/Contacts'
import TheHeader from './components/TheHeader/TheHeader'
import TheFooter from './components/TheFooter/TheFooter'

function App() {
    return (
        <>
            <TheHeader />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<AbouotUs />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
                <h1 className="main__header">Coworking</h1>
            </main>
            <TheFooter />
        </>
    )
}

export default App
