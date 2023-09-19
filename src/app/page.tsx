import Navbar from "@/components/Navbar";
import Image from "next/image";
import headerimage from "../images/headerimage.png";
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
      <div className="px-32 py-16">
        <Image className="border-solid border-4" src={headerimage} alt="" />
      </div>
      <div>
        <h1 className="text-white">MORE ABOUT AMARGHI</h1>
        <div className="container mx-auto px-32">
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

        <div className="container mx-auto px-32">
          <h1>UNDISCOVERED WILDLIFE!</h1>
          <div>
            <p className="text-white">
              Located at a distance of 6 Kms from the hills, and covering
              thousands of kilometres of stunning landscape, it's famous for
              having the highest number of tigers among Indian national parks
              and if you are lucky you can even spot one.
            </p>
          </div>
          <div className="grid grid-rows-1 grid-flow-col mt-12">
            <Image
              className="border-solid border-4 rounded-lg"
              src={tiger}
              alt=""
              height={400}
            ></Image>
            <Image
              className="border-solid border-4 rounded-lg"
              src={bird}
              alt=""
              height={400}
            ></Image>
            <Image
              className="border-solid border-4 rounded-lg"
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

        <div className="container mx-auto px-32 mt-12 pb-12">
          <h1>TUNE IN TO NATURE'S SOUNDTRACK</h1>
          <p className="text-white italic">
            Escape the noise of the world in an environment with total peace &
            tranquility.
          </p>
          <p className="text-white italic">
            Be enveloped by the sounds of nature and find your own solitude.
          </p>
          <p className="text-white italic">
            Enjoy nature's uninterrupted and best views from Amargi Hills
          </p>
          <div className="grid grid-cols-2 mt-12">
            <Image
              className="border-solid border-4 rounded-lg"
              src={view1}
              alt=""
              height={400}
            ></Image>
            <Image
              className="border-solid border-4 rounded-lg"
              src={view2}
              alt=""
              height={400}
            ></Image>
            <Image
              className="border-solid border-4 rounded-lg mt-12"
              src={view4}
              alt=""
              height={400}
            ></Image>
            <Image
              className="border-solid border-4 rounded-lg ml-auto"
              src={view3}
              alt=""
              height={400}
            ></Image>
          </div>
        </div>

        <div className="container flex mx-auto -mt-10">
          <div className="mt-12 mr-12">
            <Image
              className="border-solid border-4 rounded-lg m-20"
              src={chairs}
              alt=""
              height={400}
            ></Image>
          </div>
          <div className="container m-20 mx-auto text-justify mt-32">
            <h2 className="text-white m-20 text-4xl">
              CONNECTING YOU WITH THE NATURE, PROVIDING SUSTAINABLE FACILITIES
              AND BUILDING LUXURY RESIDENTIAL HOMES
            </h2>
            <p className="dancing-font text-white m-20 align-middle -mt-12 text-4xl">
              that go beyond one's imagination
            </p>
          </div>
        </div>

        <div className="flex container mx-auto mb-16 -mt-16">
          <div className="container m-20 mx-auto text-justify mt-32">
            <h2 className="text-white m-20 text-4xl">
              STARS IN THE CLEAR SKY FIREFLIES BLINKING IN THE DARKNESS
            </h2>
            <p className="dancing-font text-white m-20 align-middle -mt-12 text-4xl">
              you will never get tired of it
            </p>
          </div>
          <div className="container mx-auto grid grid-rows-1 grid-flow-col mt-12 ml-12">
            <Image
              className="border-solid border-4 rounded-lg m-20"
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
