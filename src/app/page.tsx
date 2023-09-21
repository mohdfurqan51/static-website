import Navbar from "@/components/Navbar";
import Image from "next/image";
import headerimage from "../images/headerimage.png";
import mainImage1 from "../images/mainImage1.png";
import mainImage2 from "../images/mainImage2.png";
import "./globals.css";
import tiger from "../images/tiger.png";
import elephant from "../images/elephant.png";
import bird from "../images/bird.png";
import view1 from "../images/view1.png";
import view2 from "../images/view2.png";
import view3 from "../images/view3.png";
import view4 from "../images/view4.png";
import chairs from "../images/chairs.png";
import sky from "../images/sky.png";

export default function Home() {
  return (
    <div className="mt-24">
      <div className="px-auto -mt-1.5 header-front-page-image flex">
        <Image className="border-solid border-4" src={mainImage1} alt="" />
        <Image className="border-solid border-4" src={mainImage2} alt="" />
      </div>
      <div>
        <h1 className="text-white header-text mt-16">MORE ABOUT AMARGHI</h1>
        <div className="container mx-auto px-32 content-padding">
          <p className="text-white">
            Amgarhi Hills is a Hill in Ramnagar, where you can buy your second
            home with a close proximityto several other beautiful tourist spots.{" "}
            <br />
            Amgarhi village is located in Nainital district in Uttarakhand,
            India. Ramnagar is nearest town to Amarghi for all major economic
            activities which is approximately one hour away. Tourist spots
            within the national park such as Jim Corbett Museum, Corbett falls
            and Garjiya devi Temple are less than 2 hours away.
          </p>
        </div>

        <div className="container mx-auto px-32 heading-padding">
          <h1 className="header-text">UNDISCOVERED WILDLIFE!</h1>
          <div className="content-padding">
            <p className="text-white">
              Located at a distance of 6 Kms from the hills, and covering
              thousands of kilometres of stunning landscape, it's famous for
              having the highest number of tigers among Indian national parks
              and if you are lucky you can even spot one.
            </p>
          </div>
          <div className="grid grid-rows-1 grid-flow-col mt-12 undiscovered-wildlife-images-container">
            <Image
              className="border-solid border-4 rounded-lg undiscovered-wildlife-images"
              src={tiger}
              alt=""
              height={400}
            ></Image>
            <Image
              className="border-solid border-4 rounded-lg undiscovered-wildlife-images"
              src={bird}
              alt=""
              height={400}
            ></Image>
            <Image
              className="border-solid border-4 rounded-lg undiscovered-wildlife-images"
              src={elephant}
              alt=""
              height={400}
            ></Image>
          </div>
        </div>

        {/* <div className="container mx-auto px-32">
          <h1>EXPLORE THE WORLD OF FLORA!</h1>
          <p className="text-white italic">Amargi hills is dotted with a wide variety of flowers, plants, and trees.
            If you love nature then this is the perfect location for you.
          </p>
        </div> */}

        <div className="container mx-auto px-32 mt-12 pb-12 heading-padding">
          <h1 className="header-text">TUNE IN TO NATURE'S SOUNDTRACK</h1>
          <p className="text-white italic content-padding">
            "Escape the noise of the world in an environment with total peace &
            tranquility".
          </p>
          <p className="text-white italic content-padding">
            "Be enveloped by the sounds of nature and find your own solitude".
          </p>
          <p className="text-white italic content-padding">
            "Enjoy nature's uninterrupted and best views from Amargi Hills".
          </p>
          <div className="grid grid-cols-2 mt-12 four-images-main-page">
            <Image
              className="border-solid border-4 rounded-lg four-images-main-page-left"
              src={view1}
              alt=""
              height={400}
            ></Image>
            <Image
              className="border-solid border-4 rounded-lg four-images-main-page-right"
              src={view2}
              alt=""
              height={400}
            ></Image>
            <Image
              className="border-solid border-4 rounded-lg mt-12 four-images-main-page-right four-images-main-page-image3"
              src={view4}
              alt=""
              height={400}
            ></Image>
            <Image
              className="border-solid border-4 rounded-lg ml-auto four-images-main-page-left four-images-main-page-image4"
              src={view3}
              alt=""
              height={400}
            ></Image>
          </div>
        </div>

        <div className="container flex mx-auto -mt-10 container-1-main-page">
          <div className="mt-12 mr-12">
            <Image
              className="border-solid border-4 rounded-lg m-20 container-1-main-page-image"
              src={chairs}
              alt=""
              height={400}
            ></Image>
          </div>
          <div className="container m-20 mx-auto text-justify mt-32">
            <h2 className="text-white m-20 text-4xl container-1-main-page-heading">
              CONNECTING YOU WITH THE NATURE, PROVIDING SUSTAINABLE FACILITIES
              AND BUILDING LUXURY RESIDENTIAL HOMES
            </h2>
            <p className="dancing-font text-white m-20 align-middle -mt-12 text-4xl container-1-main-page-text">
              that go beyond one's imagination
            </p>
          </div>
        </div>

        <div className="container flex mx-auto -mt-20 container-2-main-page">
          <div className="container m-20 mx-auto text-justify mt-32">
            <h2 className="text-white m-20 text-4xl container-2-main-page-heading">
              STARS IN THE CLEAR SKY FIREFLIES BLINKING IN THE DARKNESS
            </h2>
            <p className="dancing-font text-white m-20 align-middle -mt-12 text-4xl container-2-main-page-text">
              you will never get tired of it
            </p>
          </div>
          <div className="mt-12 -ml-12 mr-32">
            <Image
              className="border-solid border-4 rounded-lg m-20 container-2-main-page-image"
              src={sky}
              alt=""
              height={400}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
