import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './lista-mercado.module.css';
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

function ListaMercado(props) {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [placeholderCategory, setPlaceholderCategory] = useState();
    useEffect(() => {
        fetch('./json/produtos.json', {
            headers: {
                Accept: "application/json"
            }
        }).then(res => res.json()).then(res => {
            var result = res.produtos.filter(obj => {
                return obj.categoria === props.category
            });
            setFilteredProducts(result)
        })
        var placeholder = props.category === "frutas"
            ?
            "As frutas são fontes de vitaminas minerais, fibras e antioxidantes de extrema importancia para o funcionamento do nosso organismo."
            :
            "Todos os itens de mercado e várias marcas";
        setPlaceholderCategory(placeholder)
    }, [props.category]);

    const listItems = filteredProducts.map((val, index) =>
        <div className={styles["product"]} key={index}>
            <div className={styles["flex-product-div"]}>
                <div className={styles["flex-product"]}>
                    <span className={styles["flex-product"]}>{val.descricao}</span>
                </div>
                <div className={styles["flex-product"]}>
                    <span className={styles["quantity-span-product"]}>(Qtd.: {val.quantidade === '0' ? 'Não disponível' : val.quantidade})</span>
                </div>
                <div className={styles["flex-product"]}>

                    <IconContext.Provider value={{ style: { cursor: 'pointer', width: 25, height: 25 } }}>
                        <div className={styles["action-products"]}>
                            <div>
                                {val.quantidade == 0 ?
                                    <AiOutlineMinusCircle onClick={() => alert(`Você não tem ${val.descricao} para remover`)} />
                                    :
                                    <AiOutlineMinusCircle onClick={() => alert(`Você tem ${parseInt(val.quantidade) - 1} ${val.descricao}(s)`)} />
                                }
                            </div>
                            <div>
                                <AiFillPlusCircle onClick={() => alert(`Você tem ${parseInt(val.quantidade) + 1} ${val.descricao}(s)`)} />
                            </div>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div>
                <p>{placeholderCategory}</p>
            </div>
            <div className={styles["products-component-div"]}>
                {listItems}
            </div>
        </>
    );
}
export default ListaMercado;