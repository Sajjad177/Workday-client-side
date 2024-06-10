import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import useAxiosCommon from "../../Hook/useAxiosCommon";
import useSingleUser from "../../Hook/useSingleUser";
const CheckOut = () => {
  const { user } = useAuth();
  const [error, setError] = useState();
  const [successful, setSuccessful] = useState();
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState(0);
  const axiosCommon = useAxiosCommon();
  const singleUser = useSingleUser();
  const admin_package = singleUser?.category;
  const price = admin_package?.split(".")[0].slice(0, 2);
  const totalPrice = parseFloat(price);
  console.log('koy tk mama----->',totalPrice)
  const navigate = useNavigate();
  console.log(clientSecret);
  useEffect(() => {
    if (price) {
      axiosCommon
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => setClientSecret(res.data.clientSecret));
    }
  }, [axiosCommon, totalPrice, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      // console.log("Payment Error", error);
      setError(error.message);
    } else {
      // console.log("Payment Successful", paymentMethod);
      setError("");
      setSuccessful(`TxID: , ${paymentMethod.id}`);
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.name,
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      console.log("Payment not confirm");
      toast.error("Payment Not send");
    } else {
      // console.log("payment successful", paymentIntent);
      if (paymentIntent.status == "succeeded") {
        // console.log("payment successful");
        const userInfo = {
          payment: true,
          transactionId: paymentIntent.id,
          amount: totalPrice,
        };
        axiosCommon
          .put(`/update-profile/${singleUser._id}`, userInfo)
          .then(() => {
            toast.success("Payment send successfully");
            navigate("/dashboard/admin-home");
          });
      }
    }
  };

  return (
    <div>
      {/* <h3 className="text-center">Your Selected Packages: {admin_package}</h3> */}
      <div className="max-w-md mx-auto mt-10 border p-4">
        <form onSubmit={handleSubmit}>
          <CardElement
            className="border  p-2"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          ></CardElement>
          <p className="text-red-500 mt-2">{error}</p>
          <p className="text-green-500 mt-2">{successful}</p>
          <button
            className="btn mt-6"
            type="submit"
            disabled={!stripe || !totalPrice}
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
