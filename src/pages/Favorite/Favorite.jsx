import React from 'react';
import Layout from '../../components/Layout/Layout';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {removeFromFavorite} from '../../redux/favorite/favoriteActions'
import {ReactComponent as Close} from '../../assets/icons/close.svg'


function Favorite(props) {
   console.log(props)
    
    
    return(
        <Layout>
            <div className="container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center">
                {
                   
                    props.favorites.favorites.length
                    ? <div className="w-100">
                            <h1>Favorite:</h1>
                        
                        {
                            props.favorites.favorites.map(favorite => {
                                return (<div className="d-flex justify-content-between align-items-center text-center" key={favorite.id}>
                                    
                                    <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                        <img src={favorite.image} alt="Produs"/>
                                        <p>{ favorite.name }</p>
                                    </div>
                                    <p className="w-25">{ favorite.price } { favorite.currency }</p>
                                
                                    <div className="w-25 d-flex justify-content-center">
                                       
                                        <div onClick={() => props.removeFromFavorite({
                                             id: favorite.id
                                        })}>
                                            <Close />
                                        </div>
                                    </div>
                                </div>)
                            })
                        }
                        </div>
                   
                    : <div className="d-flex flex-column align-items-center">
                        <p className="h3">Nu ai produse la favorite!</p>
                        <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                    </div>
                }
            </div>
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        favorites: state.favorites
    };
}

function mapDispatchToProps(dispatch) {
    return {
      removeFromFavorite : (favorite) => dispatch(removeFromFavorite(favorite))
     
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);