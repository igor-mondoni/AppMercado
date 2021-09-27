import React, { useState } from 'react';
import ListaMercado from '../components/lista-mercado.component'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import styles from './Index.module.css';

function Index() {
    const [category, setCategory] = useState('frutas');
    return (
        <>
            <div
                className={styles["itens-list"]}>
                <div className={styles["div-logo"]}>
                    <img className={styles["logo"]} src={'./img/AppMercado.png'} alt={'logo.png'} />
                </div>
                <div>
                    <h1>O seu mercado digital</h1>
                    <h4>Tudo o que você precisa você encontra aqui!</h4>
                </div>
                <div>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton
                                    id="tbg-radio-1"
                                    className={'button-style'}
                                    value={'frutas'}
                                    onChange={() => setCategory('frutas')}
                                >
                                    Frutas
                                </ToggleButton>
                                <ToggleButton
                                    id="tbg-radio-2"
                                    value={"limpeza"}
                                    className={'button-style'}
                                    onChange={() => setCategory('limpeza')}
                                >
                                    Limpeza
                                </ToggleButton>
                    
                    </ToggleButtonGroup>
                </div>
                <hr />
                <ListaMercado category={category} />
            </div>

        </>

    );
}
export default Index;