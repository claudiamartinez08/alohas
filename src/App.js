import "./App.css";
import Header from "./components/Header/header";
import CannesBeige1 from "./assets/cannesBeige1.png";
import CannesBeige2 from "./assets/cannesBeige2.png";
import DoubleStrap1 from "./assets/doubleStrap1.png";
import DoubleStrap2 from "./assets/doubleStrap2.png";
import IndianaBrown1 from "./assets/indianaBrown1.png";
import IndianaBrown2 from "./assets/indianaBrown2.png";
import GraceGreen1 from "./assets/graceGreen1.png";
import GraceGreen2 from "./assets/graceGreen2.png";
import MarshmallowCactus1 from "./assets/marshmallowCactus1.png";
import MarshmallowCactus2 from "./assets/marshmallowCactus2.png";
import EastOffWhite1 from "./assets/eastOffWhite1.png";
import EastOffWhite2 from "./assets/eastOffWhite2.png";
import SwayBlack1 from "./assets/swayBlack1.png";
import SwayBlack2 from "./assets/swayBlack2.png";
import IndianaGrey1 from "./assets/indianaGrey1.png";
import IndianaGrey2 from "./assets/indianaGrey2.png";
import HandOfProducts from "./components/HandOfProducts/handOfProducts";
import Footer from "./components/Footer/footer";
import Roll from "./components/Roll/roll";
import Nav from "./components/Nav/nav";
import Banner from "./components/Banner/banner";

function App() {
  const productsArray = [
    {
      name: "Cannes Beige",
      price: 110.0,
      preOrder: false,
      discount: false,
      isVegan: false,
      img1: CannesBeige1,
      img2: CannesBeige2,
    },
    {
      name: "Double Strap Cammel",
      price: 95.0,
      preOrder: true,
      discount: true,
      isVegan: false,
      img1: DoubleStrap1,
      img2: DoubleStrap2,
    },
    {
      name: "Indiana Brown",
      price: 130.0,
      preOrder: false,
      discount: true,
      isVegan: false,
      img1: IndianaBrown1,
      img2: IndianaBrown2,
    },
    {
      name: "Grace Green",
      price: 120.0,
      preOrder: true,
      discount: true,
      isVegan: false,
      img1: GraceGreen1,
      img2: GraceGreen2,
    },
    {
      name: "Marshmallow Cactus",
      price: 120.0,
      preOrder: true,
      discount: true,
      isVegan: true,
      img1: MarshmallowCactus1,
      img2: MarshmallowCactus2,
    },
    {
      name: "East Off White",
      price: 290.0,
      preOrder: true,
      discount: true,
      isVegan: false,
      img1: EastOffWhite1,
      img2: EastOffWhite2,
    },
    {
      name: "Sway Black",
      price: 130.0,
      preOrder: true,
      discount: true,
      isVegan: false,
      img1: SwayBlack1,
      img2: SwayBlack2,
    },
    {
      name: "Indiana Grey",
      price: 130.0,
      preOrder: true,
      discount: true,
      isVegan: false,
      img1: IndianaGrey1,
      img2: IndianaGrey2,
    },
  ];
  return (
    <div>
      <Banner />
      <Header />
      <Nav />
      <Roll />
      <HandOfProducts products={productsArray} />
      <Footer />
    </div>
  );
}

export default App;
