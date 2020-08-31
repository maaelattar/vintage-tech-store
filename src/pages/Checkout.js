import React, { useContext, useState } from "react";
import { CartContext } from "../context/cart";
import { UserContext } from "../context/user";
import { useHistory } from "react-router-dom";
import EmptyCart from "../components/Cart/EmptyCart";
import {
  CardElement,
  StripeProvider,
  Elements,
  injectStripe,
} from "react-stripe-elements";
import submitOrder from "../strapi/submitOrder";
import AppTitle from "../components/UI/AppTitle";
import AppLabel from "../components/UI/AppLabel";

function Checkout(props) {
  const { cart, total, clearCart } = useContext(CartContext);
  const { user, showAlert, hideAlert, alert } = useContext(UserContext);
  const history = useHistory();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const isEmpty = !name || alert.show;
  async function handleSubmit(e) {
    showAlert({ msg: "submitting order... please wait" });
    e.preventDefault();
    const response = await props.stripe
      .createToken()
      .catch((error) => console.log(error));
    const { token } = response;
    if (token) {
      setError("");
      const { id } = token;
      let order = await submitOrder({
        name: name,
        total: total,
        items: cart,
        stripeTokenId: id,
        userToken: user.token,
      });
      if (order) {
        showAlert({ msg: "your order is complete" });
        clearCart();
        history.push("/");
        return;
      } else {
        showAlert({
          msg: "there was an error with your order. please try again.",
          type: "danger",
        });
      }
    } else {
      hideAlert();
      setError(response.error.message);
    }
  }
  if (cart.length < 1) {
    return <EmptyCart />;
  }
  return (
    <section className="max-w-lg m-auto">
      <AppTitle title="checkout" className="text-center mb-8" />
      <form className="bg-white shadow-xl py-4 px-6">
        <h3 className="text-lg font-bold">
          order total:
          <span className="text-teal-600 font-medium"> ${total}</span>
        </h3>
        <div className="my-4">
          <AppLabel name="name" forInput="name" />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="my-4">
          <AppLabel name="Credit or Debit Cart" forInput="card-element" />
          <p className="text-xs font-semibold text-gray-700">
            Test using this credit card :{" "}
            <span className="text-teal-600">4242 4242 4242 4242</span>
          </p>
          <p className="text-xs font-semibold text-gray-700">
            enter any 5 digits for the zip code
          </p>
          <p className="text-xs font-semibold text-gray-700">
            {" "}
            enter any 3 digits for the CVC
          </p>
        </div>
        <CardElement
          id="card-element"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></CardElement>
        {error && <p className="text-center py-4">{error}</p>}
        {isEmpty && (
          <p className="text-center py-4">please fill out name field</p>
        )}

        <button
          type="submit"
          onClick={handleSubmit}
          className="block w-full my-2 uppercase bg-teal-600 text-white text-lg border rounded px-3 py-2 text-center hover:bg-transparent hover:text-teal-600 hover:border-teal-600 focus:outline-none transition duration-200"
        >
          submit
        </button>
      </form>
    </section>
  );
}

const CardForm = injectStripe(Checkout);
const StripeWrapper = () => {
  return (
    <StripeProvider apiKey={process.env.REACT_APP_STRIPE_API_KEY}>
      <Elements>
        <CardForm></CardForm>
      </Elements>
    </StripeProvider>
  );
};

export default StripeWrapper;
