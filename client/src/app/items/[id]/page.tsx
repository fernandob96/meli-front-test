'use client' //
/** React */
import React, { useEffect, useState } from 'react'

/** Packages and helpers */
import axios from 'axios';

/** Components */
import SingleProduct from '@/app/components/SingleProduct';
import Loading from '@/app/components/Loading';

/** Types */
import { TParams, TSingleProduct } from '@/app/types/SingleProduct';

export const SingleItem = ({params}: TParams) => {

    const [itemData, setItemData] = useState<TSingleProduct>();

    useEffect(() => {
      const fetchData = async () => {
        if(params?.id){
          const resp = await axios(`http://localhost:3030/api/items/${params.id}`);
    
          setItemData(resp.data);
        }
      };
    
      fetchData();
      
        
      },[params.id]);

  return (
    <>
      {
        !itemData
          ? <Loading />
          : <SingleProduct product={itemData} />
      }
    </>
  )
}

export default SingleItem;