'use client' //
import React, { useEffect, useState } from 'react'

/** Packages and helpers */
import axios from 'axios';

/** Types */
import { TSearchParams, TSearchResp } from '../types/Listing';

/** Components */
import Listing from '../components/Listing';
import Loading from '../components/Loading';
 
export const ItemsPage = ({searchParams}: TSearchParams) => {

  const [data, setData] = useState<TSearchResp>({} as TSearchResp);
  const [loading, setLoading] = useState<boolean>();
  

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if(searchParams?.search){
      const resp = await axios(`http://localhost:3030/api/items?q=${searchParams?.search}`);

      setData(resp.data);
      setLoading(false);
    }
    };

    fetchData();
    
  },[searchParams?.search]);

  return (
    <>
      {
        loading
          ? <Loading />
          : <Listing products={data?.items} categories={data.categories} />
      }
    </>
  )
}

export default ItemsPage;