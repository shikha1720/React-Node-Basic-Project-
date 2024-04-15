import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LodingSpinner from './LodingSpinner/LodingSpinner';

function Root() {
  const fetchStatus = useSelector(store=> store.fetchStatus);
  return (
    <>
    <Header />
    {/* {fetchStatus.currentlyFetching ? <LodingSpinner /> :<Outlet />} */}
    <Outlet />
    <Footer />
    </>
  )
}

export default Root
