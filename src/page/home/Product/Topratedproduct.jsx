import { useEffect, useState } from "react";
import Sectiontitle from "../../../Components/SectionTitle/SectionTitle";
import usePublicApi from "../../../hook/publicApi/usePublicApi";
import Topratedproductcard from "./Topratedproductcard";



const Topratedproduct = () => {
    const publicApi = usePublicApi();
    const [womenWear, setWomenWear] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await publicApi.get('/products'); // Ensure you're calling .get() on the axios instance
                const products = response.data;
                const womenWearProducts = products.filter(product => product.type === 'womenswear');
                setWomenWear(womenWearProducts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }  
        };

        fetchData();
    }, [publicApi]);

    return (
        <div className="my-20 ">
               <Sectiontitle
    subtitle={'top rated products for you'}
    mainTitle={'Top rated product'}
    discription={'Explore a curated collection of our highest-rated products. From exceptional quality to outstanding performance, each item has earned the top spot in customer satisfaction. Elevate your experience with the best in the market.'}
    ></Sectiontitle>

            <div className="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center
      gap-20 md:gap-5">
        {womenWear.map((product) => (
            <Topratedproductcard
            key={product.id}
            product={product}
            ></Topratedproductcard>
      
        ))}
    </div>
        </div>
    );
};
export default Topratedproduct;