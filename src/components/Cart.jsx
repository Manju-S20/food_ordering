import { useSelector, useDispatch } from "react-redux";
import { FaCartArrowDown } from "react-icons/fa";
import { removeItem, addItem, clearCart } from "../Constant/cartSlice";
import { RxCross2 } from "react-icons/rx";
import { BsCart } from "react-icons/bs";
import cempty from "../assets/cempty.jpeg";

function Cart() {

  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartList);

  const imgLink =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  const total = cartItems.reduce((sum, item) => {
    const price = (item.card.info.price || item.card.info.defaultPrice) / 100;
    return sum + price;
  }, 0);

  const deliveryFee = 0;
  const gst = total * 0.05;
  const grandTotal = total + deliveryFee + gst;

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  const handlePayment = () => {
    alert("Payment Successful 🎉");
    dispatch(clearCart());
  };

  return (
    <div className=" min-h-screen p-8">

      {/* Title */}
      <div className="flex justify-center items-center text-2xl font-bold mb-10 gap-2">
        Your Cart
        <BsCart />
      </div>

      {/* Empty Cart */}
      {cartItems.length === 0 && (
        <div className="flex flex-col justify-center items-center h-[60vh] opacity-60">
          <img
            className="h-[320px]"
            src={cempty}
          />
          <p className="text-gray-500 mt-4 text-lg">
            Your cart is empty
          </p>
        </div>
      )}

      {/* Cart Items */}
      <div className="flex flex-col items-center gap-6">

        {cartItems.map((item) => {

          const price =
            (item.card.info.price || item.card.info.defaultPrice) / 100;

          return (
            <div
              key={item.card.info.id}
              className="flex justify-between items-center w-[650px] bg-white rounded-xl shadow-md p-5"
            >

              {/* Item Info */}
              <div className="flex flex-col gap-2 w-[60%]">

                <div className="font-bold text-lg">
                  {item.card.info.name}
                </div>

                <div className="text-sm text-gray-600">
                  {item.card.info.description}
                </div>

                <div className="font-semibold">
                  ₹{price}
                </div>

              </div>

              {/* Item Image */}
              <div className="relative">

                <img
                  className="rounded-xl h-[110px] w-[140px] object-cover"
                  src={imgLink + item.card.info.imageId}
                  alt={item.card.info.name}
                />

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(item)}
                  className="absolute -top-2 -right-2 bg-white rounded-full shadow p-1 hover:bg-gray-100"
                >
                  <RxCross2 />
                </button>

                {/* Add Button */}
                <button
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow hover:bg-gray-200"
                  onClick={() => handleAdd(item)}
                >
                  Add+
                </button>

              </div>

            </div>
          );
        })}

      </div>

      {/* Cart Summary */}
      {cartItems.length > 0 && (
        <div className="flex justify-center mt-12">

          <div className="bg-white shadow-md rounded-xl p-6 w-[650px]">

            <h2 className="text-lg font-bold mb-4">
              Cart Summary
            </h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Delivery Fee</span>
              <span>{deliveryFee === 0 ? "Free" : `₹${deliveryFee}`}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>GST (5%)</span>
              <span>₹{gst.toFixed(2)}</span>
            </div>

            <div className="border-t mt-3 pt-3 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{grandTotal.toFixed(2)}</span>
            </div>

            <button
              onClick={handlePayment}
              className="w-full mt-5 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
              Proceed to Pay
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default Cart;