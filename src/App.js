import React from 'react';
import Header from './component/Header.js';
import Hero from './component/Hero.js';
import Browse from './component/Browse.js';
import Arrived from './component/Arrived.js';
import Client from './component/Client.js';
import Aside from './component/AsideMenu.js';
import Footer from './component/Footer.js';

function App() {
    return (
        <div>
        <Header />
        <Hero />
        <Browse />
        <Arrived />
        <Client />
        <Aside />
        <Footer />
        </div>

    );
}
export default App;