import React from "react"
import ProductsEl from "./ProductsEl"
import productsData from "./ProductsData"


    function Products () {

        const productsArray = productsData.map(function(fnct_param) {
            return(
                <ProductsEl
                    key={fnct_param.id}
                    name={fnct_param.name}
                    price={fnct_param.price}
                    description={fnct_param.description}
                />
            )
        })

        return (
            <div>
                {productsArray}
            </div>
        )
    }


export default Products