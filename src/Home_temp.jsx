import product from "./assets/product.png"
export default function Home(){
    return (
        <>
        <div className="container">
            <div className="left">
                <img src={product} alt="Product Image" />
            </div>
            <div className="right">
                <p>
                    Gifts that
                    speak volumes
                    about your brand
                </p>
            </div>
        </div>
        </>
    )
}