import React, { useEffect } from 'react';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import AllGadgets from '../../components/AllGadgets/AllGadgets';
import { useOutletContext } from 'react-router-dom';

const Home = () => {

    const { navbarColorChanging } = useOutletContext();

    useEffect( () => {
        navbarColorChanging(false);

        return () => navbarColorChanging(true);
    }, [navbarColorChanging]);

    return (
        <>
            <HomeBanner></HomeBanner>
            <AllGadgets></AllGadgets>
        </>
    );
};

export default Home;