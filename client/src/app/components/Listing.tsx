/** React / Next */
import React from "react";
import Image from "next/image";
import Link from "next/link";

/** Helpers */
import { firstLetterUppercase, moneyMask } from "../helpers";

/** Components */
import Breadcrumb from './Breadcrumb';

/** Types */
import { TSingleItem } from "../types/Listing";

/** Styles */
import styles from "../styles/listing.module.scss";
import item from '../styles/breadcrumb.module.scss'


export const Listing = ({
  products,
  categories,
}: {
  products: TSingleItem[];
  categories: string[];
}) => {
  return (
    <section className={styles.container}>
      <div className={item.breadcrumb_container}>
        <Breadcrumb categories={categories} />
      </div>
      <div className={styles.listing_container}>
        <div className={styles.cards_container}>
          {products &&
            products.map((info: TSingleItem) => (
              <Link
                className={styles.card}
                href={`items/${info.id}`}
                key={info.id}
              >
                <Image
                  src={info.picture}
                  alt={info.title}
                  width={180}
                  height={180}
                />
								<div className={styles.card_data_container}>
									<div className={styles.card_info}>
										<div>
											<p className={styles.card_info_price}>
                        {moneyMask(info.price.amount, info.price.currency, info.price.decimals)}
												{
													info.free_shipping && 
													<span className={styles.card_info_free_shipping}>
														<Image src="/ic_shipping@2x.png" alt={info.title} width={20} height={20} />
													</span>
												}
											</p>
										</div>

										<p className={styles.card_info_title}>{info.title}</p>
										<p className={styles.card_info_condition}>{firstLetterUppercase(info.condition)}</p>
									</div>

									<div className={styles.card_city_info}>
										<p>{info.address}</p>
									</div>
								</div>

              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Listing;
