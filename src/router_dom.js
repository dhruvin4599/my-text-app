import { BrowserRouter, Routes } from 'react-router-dom';
import Home from './Home';
import Filter from './Filter';

function Router() {
    return (
        <BrowserRouter>
            <Routes path="/Home" component={Home} />
            <Routes path="/Filter" component={Filter} />
        </BrowserRouter>
    )
}

export default Router;