import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/cartActions';
import {addToFavorite, removeFromFavorite} from '../../redux/favorite/favoriteActions'
import { Link } from 'react-router-dom';

function ProductItem(props) {
    const {name, price, currency, image, id} = props;
    
    const thereIs = props.favorites.favorites.some((el) => el.id === id)
      let favorit
    if  (thereIs) favorit= true
      else favorit= false
  
    return(
        <div className="product-item col-12 col-md-4 mb-3 d-flex flex-column align-items-center">
            <Link to={`/product/${id}`} className="d-flex flex-column align-items-center">
                <img src={image} alt="productPhoto" className="mb-2" />
                <p className="mb-1 text-center">{ name }</p>
                <p className="text-center">{ price + currency }</p>
            </Link>
            <button
                className="btn btn-outline-dark"
                onClick={() => props.addToCart({
                    product: {
                        id,
                        name,
                        price,
                        currency,
                        image
                    }
                })}
            >
                Adaugă în coș
            </button>

            { favorit 
                ?    (<button
                        className="btn btn-outline-dark"
                        onClick={() => props.removeFromFavorite({
                            id
                       })}
                    >

                        Scoate de la favorite
                    </button>)
                :  <button
                className="btn btn-outline-dark"
                onClick={() => props.addToFavorite({
                    favorites: {
                        id,
                        name,
                        price,
                        currency,
                        image
                    }
                })}
            >
                Adaugă la favorite
            </button>
            }


        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        addToFavorite: (favorite) => dispatch(addToFavorite(favorite)),
        removeFromFavorite: (favorite) => dispatch(removeFromFavorite(favorite))
    };
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);