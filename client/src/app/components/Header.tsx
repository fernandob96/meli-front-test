'use client' //
import React, { useCallback, useState } from 'react';
import Image from 'next/image';

/** Hooks */
import { useRouter, useSearchParams } from 'next/navigation';

/** Styles */
import header from '../styles/header.module.scss';

export const Header = () => {
    const router = useRouter();
    const [query, setQuery] = useState<string>('');
    const searchParams = useSearchParams();

    // Generate params to Url
    const createQueriesUrl = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams)
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push("/items/" + '?' + createQueriesUrl('search', query), { scroll: false })
    }
    
  return (
    <div className={header.container}>
        <div className={header.header_container}>
            <div className={header.logo_container}>
                <Image src="/Logo_ML@2x.png" alt="Mercado Libre Colombia - Donde comprar y vender de todo" width="55" height="37" />
            </div>
            <form className={header.form} onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name='search' placeholder='Nunca dejes de buscar' onChange={(e)=> setQuery(e.target.value)} />
                <button type="submit">
                    <Image src="/ic_Search@2x.png" alt="Mercado Libre Colombia" width="18" height="18" />
                </button>
            </form>
        </div>
    </div>
  )
}

export default Header;