import React from 'react'
import { useState, useEffect } from 'react';
import Loading from '../../components/Loading/index';
import { Link } from 'react-router-dom';

const Hakkimizda = () => {
  const [loading, setLoading]= useState(false);

  
  return (
    <section>
      {loading && <Loading/>}
    <div>Hakkimizda</div>
    </section>
    
  )
}
export default Hakkimizda;

