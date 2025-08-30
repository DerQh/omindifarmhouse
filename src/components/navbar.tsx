


function LandingPage(){
    return (
        <>
        // The main landing page 
        <div>
            <h1>We bring the store to your doorstep</h1>
            <p>Get organic products and sustainably sourced groceries delivered to you all over ALendu and it's environs</p>
        </div>
        <div>
            <button> Shop Now</button>
        </div>

        <div>
            <img src="" alt="Delivery person holding groceries " />
        </div>

        // The second page
        <div>
            <div>
                 <img src="Free delivery icon" alt="" />
                 <p>Free delivery in Alendu and it's environs</p>
                 <p>Support 24/7</p>
            </div>
            <div>
                <img src="" alt="Cash image" />
                <p>Pay with M-Pesa or cash on delivery</p>
                <p>Gurantee amd Refunds </p>
            </div>

            <div>
                <img src="" alt="Organic Icon" />
                <p>100% Organc products</p>
                <p>Secure your future health</p>
            </div>
        </div>

        // Display of random available products
        <div>
            <h2>Green & Fresh Products</h2>
        //Single Pproduct divs
            <div>
                <div>
                    <div>
                         <button>-Ksh 5</button>
                    </div>
                    <img src="" alt="product image" />
                    <p>Product Description</p>
                    <p>Ksh 50</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>

        //Shop by category
        <div>
            <h2>Shop by category</h2>
            <div>
                <img src="" alt="" />
            </div>
        </div>

        </>
    )
}

export default LandingPage