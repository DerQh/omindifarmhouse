import styled from "styled-components";

function ImageWrap() {
  return (
    <Container>
      <h1>
        OmiGreens Farms General Store and Pumpkin Patch is a traditional family
        farm, committed to naturally-raised beef and pesticide-free produce.
      </h1>
      <p>
        Welcome to Rondriso Farms! We're Ron and Pam Tamis and we own and
        operate our farm, general store, and pumpkin patch along with our three
        boys and our dog, Cooper. We are proud to run a small-scale farm. We
        believe that growing a wide range of crops allows us to maintain the
        integrity of our land and the food we grow. Our farm is truly
        sustainable, and that's good for our family and yours.
      </p>
      <ImageDiv>
        <Image src="/main2.jpg" alt="Description of image" />
        <Text>
          We believe in the power of sustainable farming practices and the
          importance of supporting local agriculture.
        </Text>
      </ImageDiv>
    </Container>
  );
}

export default ImageWrap;

const Image = styled.img`
  max-width: 200px;
  float: left;
  margin: 0 15px 15px 0;
  border-radius: 10px;
  object-fit: cover;
  height: auto;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow: auto;
  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
    color: #084d11;
  }
  p {
    font-size: 16px;
    line-height: 1.5;
    text-align: start;
    color: #555;
    max-width: 800px;
  }
`;
const ImageDiv = styled.div`
  /* margin: 20px; */
  text-align: center;
`;
const Text = styled.p`
  clear: both;
  margin-top: 10px;
  font-size: 14px;
  color: #555;
`;

// Usage example:
// <ImageWrap src="/path/to/image.jpg" alt="Description of image" />
// You can customize the styles as needed.
// https://picsum.photos/200/300  -- FREE IMAGES FOR PRODUCT
// PRODUCT TEXT AND DETAILS

// https://www.vecteezy.com/photo/24445456-tomato-on-the-white-background-generate-ai  -- FREE IMAGES FOR PRODUCT
// color picker  -  https://imagecolorpicker.com/
// https://www.flaticon.com/ ICONS
// https://vercel.com/home DEPLOYMENT
// https://reactrouter.com/en/main STARTER CODE FOR ROUTER
// https://react-icons.github.io/react-icons/ ICONS
// https://styled-components.com/docs STARTER CODE FOR STYLED COMPONENTS
// https://reactjs.org/docs/getting-started.html OFFICIAL REACT DOCS

// https://mui.com/material-ui/getting-started/overview/ MATERIAL UI

// https://tailwindcss.com/docs/guides/create-react-app TAILWIND CSS
