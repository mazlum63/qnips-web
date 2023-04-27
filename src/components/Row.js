import React, { useState, useEffect } from 'react'
import styles from './products.module.css'
import products from '../qnipsData.json'

function Row({ name }) {
    const [data, setData] = useState(null);
    const [idOne, setIdOne] = useState(0);
    const [idTwo, setIdTwo] = useState(0);
    const [idThree, setIdThree] = useState(0);
    const [idFour, setIdFour] = useState(0);
    const [idFive, setIdFive] = useState(0);
    useEffect(() => {
        setData(products);
        if (data) {
            data.Rows.map(item => {
                if (item.Name === name) {
                    setIdOne(item.Days[0].ProductIds[0].ProductId);
                    setIdTwo(item.Days[1].ProductIds[0].ProductId);
                    setIdThree(item.Days[2].ProductIds[0].ProductId);
                    setIdFour(item.Days[3].ProductIds[0].ProductId);
                    setIdFive(item.Days[4].ProductIds[0].ProductId);
                }
            })
        }
    }, [data])
    return (
        <div className={styles.tableRow}>
            <div className={styles.rowName}>{name}</div>
            <div>
                <div>{idOne !== 0 && data.Products[idOne].Name}</div>
                <div className={styles.productAllergens}>
                    {
                        idOne !== 0 && data.Products[idOne].AllergenIds.map((items, i) => (
                            <div key={i}>{data.Allergens[items].Label}</div>
                        )
                        )
                    }
                </div>
                <div className={styles.productPrice}>{idOne !== 0 && data.Products[idOne].Price.Betrag}€</div>
            </div>
            <div>
                <div>{idTwo !== 0 && data.Products[idTwo].Name}</div>
                <div className={styles.productAllergens}>
                    {
                        idTwo !== 0 && data.Products[idTwo].AllergenIds.map((items, i) => (
                            <div key={i}>{data.Allergens[items].Label}</div>
                        )
                        )
                    }
                </div>
                <div className={styles.productPrice}>{idTwo !== 0 && data.Products[idTwo].Price.Betrag}€</div>
            </div>
            <div>
                <div>{idThree !== 0 && data.Products[idThree].Name}</div>
                <div className={styles.productAllergens}>
                    {
                        idThree !== 0 && data.Products[idThree].AllergenIds.map((items, i) => (
                            <div key={i}>{data.Allergens[items].Label}</div>
                        )
                        )
                    }
                </div>
                <div className={styles.productPrice}>{idThree !== 0 && data.Products[idThree].Price.Betrag}€</div>
            </div>
            <div>
                <div>{idFour !== 0 && data.Products[idFour].Name}</div>
                <div className={styles.productAllergens}>
                    {
                        idFour !== 0 && data.Products[idFour].AllergenIds.map((items, i) => (
                            <div key={i}>{data.Allergens[items].Label}</div>
                        )
                        )
                    }
                </div>
                <div className={styles.productPrice}>{idFour !== 0 && data.Products[idFour].Price.Betrag}€</div>
            </div>
            <div>
                <div>{idFive !== 0 && data.Products[idFive].Name}</div>
                <div className={styles.productAllergens}>
                    {
                        idFive !== 0 && data.Products[idFive].AllergenIds.map((items, i) => (
                            <div key={i}>{data.Allergens[items].Label}</div>
                        )
                        )
                    }
                </div>
                <div className={styles.productPrice}>{idFive !== 0 && data.Products[idFive].Price.Betrag}€</div>
            </div>
        </div>
    )
}

export default Row