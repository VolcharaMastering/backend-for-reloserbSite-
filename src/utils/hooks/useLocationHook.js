import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const useLocationHook = () => {
    const location = useLocation()
    const [myLocation, setMyLocation] = useState({ path: '', name: '' })

    switch (location.pathname) {
        case '/about':
            setMyLocation({ path: location.pathname, name: 'О нас' })
            break

        case '/blog':
            setMyLocation({ path: location.pathname, name: 'Блог' })
            break

        case '/contacts':
            setMyLocation({ path: location.pathname, name: 'Контакты' })
            break
        default:
            setMyLocation({ path: location.pathname, name: 'Main Page' })
            break
    }
    return myLocation
}
export default useLocationHook
