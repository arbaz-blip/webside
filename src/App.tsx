import { useEffect } from 'react';

import AOS from 'aos';

import Routes from './routes/Routes';

import './assets/scss/theme.scss';

const App = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return <Routes />;
};

export default App;
