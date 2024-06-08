import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";



const stipePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Payment = () => {
  return (
    <div>
      <h1 className="lg:text-4xl font-bold text-3xl text-center mt-20">Please Pay Your Bill</h1>
      <div>
        <Elements stripe={stipePromise}>
          <CheckOut />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
