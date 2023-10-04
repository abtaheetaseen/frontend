import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './components/features/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cuisine = () => {

  const {items, isLoading, error} = useSelector(state => state.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    navigate('/cart');
  };

  return (
    <div className="home-container">
      {isLoading ? (<p>Loading...</p>) : error ? (<p>An error occured...</p>) : (<>
        <h1 className='cuisine'>Lavish Cuisine</h1>
        <div className="products">
          {items.map((item) => {
            return <article key={item.id} className='product-article'>
              <div className="product">

                            <h3>{item.name}</h3>
                            <img src={item.image} alt={item.name} />

                            <div>
                                <p className='desc'>{item.desc}</p>
                            </div>

                            <div>
                            <p className='price'>BDT {item.price}</p>
                            </div>

                            <button className='cuisine-button' onClick={() => handleAddToCart(item)}>Add To Cart</button>

                        </div>
            </article>
          })}
        </div>
      </>)} 
    </div>
  )
}

export default Cuisine
