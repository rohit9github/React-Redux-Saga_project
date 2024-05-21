import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {

    const cartData = useSelector((state) => state.cartData);

    let amount = cartData.length&& cartData.map((v)=>v.price).reduce((prev,next)=>prev+next)
    console.log(amount);

    return (
        <div>
            <Link to={"/"}>Product-List</Link>
            <h1>Cart</h1>
            <div className="cartpageContainer">
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Brand</th>
                    </tr>
                    {cartData.map((v, i) => {
                        return (
                            <tr key={i}>
                                <td>
                                    <img src={v.photo} width={"100px"} />
                                </td>
                                <td>{v.name}</td>
                                <td>{v.price}</td>
                                <td>{v.quantity}</td>
                                <td>{v.category}</td>
                                <td>{v.brand}</td>
                            </tr>
                        )
                    })}
                </table>
                <div className="pricedetails"> 
                    <div><span>Amount :- </span><span>{ amount}</span></div>
                    <div><span>Discount :- </span><span>{ amount/10}</span></div>
                    <div><span>Taxes :- </span><span>000</span></div>
                    <div><span>Total :- </span><span>{ amount-(amount/10)}</span></div>
                </div>
            </div>
        </div>
    )
}
export default Cart;