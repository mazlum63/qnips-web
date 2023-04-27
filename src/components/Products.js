import React, { useState, useEffect } from 'react'
import products from '../qnipsData.json'
import styles from './products.module.css'
import Row from './Row';

function Products() {
    const [data, setData] = useState(null);
    console.log(data)
    useEffect(() => {
        setData(products);
    }, [data])

    return (
        <div>
            <div className={styles.tableContainer}>
                <div className={styles.tableHeader}>
                    <div>KW 8</div>
                    <div>Montag</div>
                    <div>Dienstag</div>
                    <div>Mitwoch</div>
                    <div>Donnerstag</div>
                    <div>Freitag</div>
                </div>
                <div className={styles.tableBody}>
                    {data && (data.Rows.map((item, i) => (
                        <Row key={i} name={item.Name} />
                    )))}
                </div>
            </div>
        </div>
    )
}

export default Products