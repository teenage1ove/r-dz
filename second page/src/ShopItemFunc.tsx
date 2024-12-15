import React from 'react'
import { Iitem } from './interfaces/item.interface'

interface ShopItemFuncProps {
    item: Iitem
}

class ShopItemFunc extends React.Component<ShopItemFuncProps> {
    constructor(props: ShopItemFuncProps) {
        super(props)
        console.log(props.item)
    }

    render(): React.ReactNode {
        return (
            <>
                <div className='main-content'>
                    <h2>{this.props.item.brand}</h2>
                    <h1>{this.props.item.title}</h1>
                    <h3>{this.props.item.description}</h3>
                    <div className='description'>
                        {this.props.item.descriptionFull}
                    </div>
                    <div className='highlight-window mobile'>
                        <div className='highlight-overlay'></div>
                    </div>
                    <div className='divider'></div>
                    <div className='purchase-info'>
                        <div className='price'>{this.props.item.price + ' ' + this.props.item.currency}</div>
                        <button>Добавить в корзину</button>
                    </div>
                </div>
            </>
        )
    }
}

export default ShopItemFunc 