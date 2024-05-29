import {useRoutes} from 'react-router-dom'
import {ROUTES} from './routes/index'

export default function App(){
    return (
        useRoutes(ROUTES)
    )
}