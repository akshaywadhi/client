import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter} from 'react-router-dom';


createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <App />
    </BrowserRouter>

)
