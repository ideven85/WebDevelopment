import React, {useRef, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./services/useFetch";
import Spinner from "./Spinner";
import PageNotFound from "./PageNotFound";
import button from "bootstrap/js/src/button";

export default function Details(props) {
  const {id}=useParams();
  const navigate = useNavigate();
  const [sku,setSku]=useState('');
  const focusRef = useRef(null);

/*  function handleClick(){
      document.getElementById("sub").disabled=true;
      focusRef.current.focus();
  }*/

  const { data: product, loading, error } = useFetch(`products/${id}`);
  if(error) throw error;
  if(loading) return <Spinner />
  if(!product) return <PageNotFound />
    return(
        <div id="detail">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p id="price">${product.price}</p>
        <select
          id="size"

          value={sku}
          onChange={(e) => setSku(e.target.value)}
        >
                    <option value="">Select a size</option>

          {product.skus.map((s)=>(
            
            <option key={s.sku} value={s.sku}>
              {s.size}</option>
          ))}
          
          </select>
        <p>
          <button disabled={!sku} className="btn btn-primary" onClick={() =>{

            props.dispatch({type: "add",id,sku});
            navigate("/cart")}}>
            Add to cart
          </button>
        </p>
        <img src={`/images/${product.image}`} alt={product.category} />
      </div>
  )
}
