import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../services/api';
import { IState } from '../store';
import { ICartItem, IProduct } from '../store/modules/cart/types';
import CatalogItem from './catalogItem';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items)

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data)
    })
  }, []);

  

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map(product => (
        
        <CatalogItem key={product.id} product={product} />
      ))}

    </main>
    );
}

export default Catalog;

