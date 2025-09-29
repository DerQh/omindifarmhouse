import CheckoutPage from "./components/checkout/Checkout";
import Footer from "./components/main/Footer";
import Header from "./components/main/Header";
import LandingPage from "./components/main/LandingPage";
import ProductMain from "./components/products/ProductMain";
// import Product from "./components/products/Product";
import PaymentComponent from "./components/Order/Payment";
import OtherStores from "./components/products/OtherStores";
import { styled } from "styled-components";
import ImageWrap from "./components/main/ImageWrap";

function App() {
  return (
    <>
      <ContainerOne>
        <Header />
        <LandingPage />
      </ContainerOne>
      <ImageWrap />

      {/* <PaymentComponent /> */}
      {/* <CheckoutPage /> */}
      {/* <ProductMain /> */}
      {/* <OtherStores /> */}
      <Footer />
    </>
  );
}

export default App;

const ContainerOne = styled.div`
  margin: 0 auto;
  background-image: url("/main2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: inherit;
    filter: blur(4px);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 600px) {
    height: 100svh;
  }
  /* animation: backgroundChange 20s infinite;

  @keyframes backgroundChange {
    0% {
      background-image: url("/main.jpg");
    }
    50% {
      background-image: url("/main.jpg");
    }
    100% {
      background-image: url("/main2.jpg");
    }
  } */
`;
// https://www.vecteezy.com/photo/24445456-tomato-on-the-white-background-generate-ai  -- FREE IMAGES FOR PRODUCT
// color picker  -  https://imagecolorpicker.com/
// https://www.flaticon.com/ ICONS
// https://vercel.com/home DEPLOYMENT
// https://removal.ai/ REMOVE BACKGROUND IMAGE
