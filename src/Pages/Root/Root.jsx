import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';

const Root = () => {
    return (
        <div >
         <div className='mx-auto max-w-7xl mb-15'>
         <Header></Header>
            <Outlet>
                
            </Outlet>
         </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;