/** React */
import React from 'react'

/** Components */
import Breadcrumb from './Breadcrumb';

/** Helpers */
import { firstLetterUppercase, moneyMask } from '../helpers';

/** Types */
import { TSingleProduct } from '../types/SingleProduct';

/** Styles */
import styles from '../styles/singleProduct.module.scss'
import item from '../styles/breadcrumb.module.scss'

export const SingleProduct = ({product}: {product: TSingleProduct}) => {

    const { amount, currency, decimals  } = product.item.price;

  return (
    <section className={styles.container}>
        <div className={item.breadcrumb_container}>
            <Breadcrumb categories={product?.categories} />
        </div>

        <div className={styles.singleProduct_container}>

            <div className={styles.singleProduct_data_container}>
                <div className={styles.singleProduct_img}>
                    <img src={product?.item.picture} alt={product?.item.title} />
                </div>
                <div className={styles.singleProduct_specs}>
                    <p className={styles.singleProduct_specs_quantity}>
                        {`${ firstLetterUppercase(product.item.condition)} - ${product.item.sold_quantity} vendidos`}
                    </p>
                    <h1 className={styles.singleProduct_specs_title}>
                        {product?.item.title}
                    </h1>
                    <p className={styles.singleProduct_specs_price}>
                        {moneyMask(amount, currency, decimals)}
                    </p>
                    <button className={styles.singleProduct_specs_cta}>Comprar</button>
                </div>
            </div>
            
            <div className={styles.singleProduct_description_container}>
                <section>
                    <h2>Descripción del producto</h2>
                    <p>
                        {product.item.description}
                    </p>
                </section>
            </div>
        </div>
    </section>
  )
}

export default SingleProduct;