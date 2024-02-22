import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import './Bannarstyles.css';
import Button01 from "../../../Components/Button01/Button01";
const Bannar = () => {
    const [sliderRef] = useKeenSlider(
        {
          loop: true
        },
        [
          (slider) => {
            let timeout;
            let mouseOver = false;
    
            function clearNextTimeout() {
              clearTimeout(timeout);
            }
    
            function nextTimeout() {
              clearTimeout(timeout);
              if (mouseOver) return;
              timeout = setTimeout(() => {
                slider.next();
              }, 2000);
            }
    
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true;
                clearNextTimeout();
              });
    
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false;
                nextTimeout();
              });
    
              nextTimeout();
            });
    
            slider.on("dragStarted", clearNextTimeout);
            slider.on("animationEnded", nextTimeout);
            slider.on("updated", nextTimeout);
          },
        ]
      );
    
      return (
        <div       data-aos="fade-up" className="relative   overflow-hidden min-h-[550px] sm:min-h-[550px] bg-gray-50 
        flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
       <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9">
         
         </div>
         
    <div ref={sliderRef} className="keen-slider container ">
      {/* 11111 */}
      <div className="keen-slider__slide number-slide1 herocontent p-0 flex-col lg:flex-row-reverse ">
            <div >
              <img
        className="w-auto mx-auto"
                src="https://i.ibb.co/RPtmgH8/young-woman-with-credit-card-shopping-bags-removebg-preview.png"
                alt=""
              />
            </div>
            <div className=" flex-1 space-y-5 pb-5">
              <h3
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="300"
              className="text-7xl font-bold">Flash Sale Frenzy</h3>
              <p
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="300"
              className="">
              Hurry! Limited-time offers on your favorite items. Shop now and save big.
              </p>
              <Button01></Button01>
            </div>
          </div>
      {/* 2222 */}
    <div className="keen-slider__slide number-slide1 herocontent flex-col lg:flex-row-reverse ">
            <div className="flex-1">
              <img
        className="mx-auto"
                src="https://i.ibb.co/z4cDpYJ/front-view-happy-woman-holding-shopping-bags-removebg-preview.png"
                alt=""
              />
            </div>
            <div className=" flex-1 space-y-5 pb-5">
              <h3
                 data-aos="zoom-out"
                 data-aos-duration="500"
                 data-aos-once="300" className="text-7xl font-bold">Luxury for Less</h3>
              <p 
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="300"
              className="">
              Indulge without breaking the bank. Elevate your style with our luxury collection at affordable prices
              </p>
              <Button01></Button01>
            </div>
          </div>
    <div className="keen-slider__slide number-slide2  herocontent flex-col lg:flex-row-reverse ">
    
    <div className="flex-1">
    <img className="mx-auto "  src={'https://i.ibb.co/myLTktr/full-length-portrait-smiling-family-removebg-preview.png'} alt="" />
    
    </div>
    <div className="flex-1 space-y-5 pb-5">
    
    <h3 
      data-aos="zoom-out"
      data-aos-duration="500"
      data-aos-once="300"
    className="text-7xl font-bold">
    Chic & Unique Collection
       </h3>
       <p 
         data-aos="zoom-out"
         data-aos-duration="500"
         data-aos-once="300"
       className="">
       Discover the essence of style with our latest fashion and accessories. Elevate your wardrobe today!
       
       </p>
       <Button01></Button01>
    </div>
    
    </div>
    {/* 33333333 */}
    
          {/* 44444 */}
          <div className="keen-slider__slide number-slide1 herocontent flex-col lg:flex-row-reverse ">
            <div className="flex-1">
              <img
        className="mx-auto"
                src="https://i.ibb.co/Yd57gj4/christmas-concept-young-handsome-man-with-beard-holding-heavy-presents-shopping-bags-with-exhausted.png"
                alt=""
              />
            </div>
            <div className=" flex-1 space-y-5 pb-5">
              <h3   data-aos="zoom-out"
                 data-aos-duration="500"
                 data-aos-once="300"
                  className="text-7xl font-bold">Adventure Awaits Gear</h3>
              <p   data-aos="zoom-out"
                 data-aos-duration="500"
                 data-aos-once="300"
                  className="">
              Gear up for your next adventure. Unearth unbeatable deals on outdoor essentials.
              </p>
              <Button01></Button01>
            </div>
          </div>
          {/* 555555 */}
    
          <div className="keen-slider__slide number-slide1 herocontent flex-col lg:flex-row-reverse ">
            <div className="flex-1">
              <img
        className="mx-auto"
                src="https://i.ibb.co/pXnSjR7/cheerful-happy-kid-asian-child-enjoying-shopping-she-is-carrying-shopping-bags-shopping-center-remov.png"
                alt=""
              />
            </div>
            <div className=" flex-1 space-y-5 pb-5">
              <h3   data-aos="zoom-out"
                 data-aos-duration="500"
                 data-aos-once="300"
                  className="text-7xl font-bold">Kids Wonderland Sale</h3>
              <p    data-aos="zoom-out"
                 data-aos-duration="500"
                 data-aos-once="300"
                 className="">
              Enter a world of joy! Shop whimsical toys, adorable outfits, and more in our Kids Wonderland Sale.
              </p>
              <Button01></Button01>
            </div>
          </div>
          {/* 6666 */}
          <div className="keen-slider__slide number-slide1 herocontent flex-col lg:flex-row-reverse ">
            <div className="flex-1">
              <img
       className="mx-auto"
                src="https://i.ibb.co/4wbHstd/young-woman-holding-shopping-bags-removebg-preview.png"
                alt=""
              />
            </div>
            <div className=" flex-1 space-y-5 pb-5">
              <h3   data-aos="zoom-out"
                 data-aos-duration="500"
                 data-aos-once="300"
                  className="text-7xl font-bold">Fresh & Floral Fashion</h3>
              <p   data-aos="zoom-out"
                 data-aos-duration="500"
                 data-aos-once="300"
                  className="">
              Step into spring with blooming style. Explore our floral fashion picks for a fresh look.
              </p>
              <Button01></Button01>
            </div>
          </div>
    </div>
        </div>
      );
    };

export default Bannar;