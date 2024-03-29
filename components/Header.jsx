import React, { useState, useEffect} from 'react'
import Link from 'next/link';
import { getCategories } from '../services';
import image from '../public/logo.png'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';

const Header = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getCategories()
            .then((newCategories) => { setCategories(newCategories)})
  
    }, [])

    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className="border-b w-full inline-block border-pink-500 py-8">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className="logo">
                        <img src={"logo.png"} width="100" height="50"/>
                        </span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
  );
}

export default Header