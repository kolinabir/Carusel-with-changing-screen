import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./styles.css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { UserContext } from "./Providers";

const places = [
  {
    id: 1,
    name: "Sajek",
    image: "https://i.ibb.co/9VRtkZv/Sajek.png",
    backgroundImage:
      "https://images.unsplash.com/photo-1658383898607-6b92e8196e33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNhamVrfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    info: "If you want to see the land of the cloud in Bangladesh then you have to visit the queen of hills, Sajek Valley. Visiting this place will fulfill your dream of walking through the clouds. This is the best tourist spot in Bangladesh. The experience of going to Sajek by zigzag road through the cloud is really great. It is also called the roof of Rangamati because it is surrounded by hills. The valley is 1800 feet above from the sea level. If you are lucky enough, you can enjoy three forms of nature in a day.",
  },
  {
    id: 2,
    name: "Sreemongol",
    image: "https://i.ibb.co/vBHybqY/Sreemongol.png",
    backgroundImage:
      "https://media.gettyimages.com/id/684168732/photo/bangladeshi-women-plucking-tea-leaves-at-a-tea-garden-at-srimangal-in-sylhet-bangladesh-on-may.jpg?s=612x612&w=0&k=20&c=LfcOPj5WkFUzdT9oTrtYvokQQANfz9upU6w07rbNx_g=",
    info: "Srimangal/Sreemangal is a city in Sylhet Division in Bangladesh. Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress",
  },
  {
    id: 3,
    name: "Kuakata Sea Beach",
    image: "https://i.ibb.co/RvRxGv3/sundorbon.png",
    backgroundImage:
      "https://media.gettyimages.com/id/917719720/photo/kuakata-beach-at-sunset.jpg?s=612x612&w=0&k=20&c=njuyv5DowmGa0hL9qdyYcvOucHnwyn9MipiE3AjeHYc=",
    info: "Kuakata Sea Beach is a panoramic sea beach with 30 kilometers of picturesque landscape located at Lotachapli, Kolapara, Patuakhali. It’s a unique beach where you can be witnessed of both sunrise & sunset, not only that you can enjoy the beauty of Jhauban which is covered by coconut trees.",
  },
  {
    id: 4,
    name: "Rangamati",
    image: "https://i.ibb.co/9VRtkZv/Sajek.png",
    backgroundImage:
      "https://media.gettyimages.com/id/979619672/photo/largest-lake-in-bangladesh.jpg?s=612x612&w=0&k=20&c=3YkdKUi36QruITfal6nzTzHx6UPWJB5Z79pxV3UD53o=",
    info: "The District of Chittagong Hill Tracks area in Rangamati, a place full of natural amusement and here, here, you can find a man-made lake surrounded by Hill called Kaptai Lake where you can take a ride by boat all over the day, a Buddhist Monastery here named Rajban Bihara, a high-quality handicrafts market made by the tribal of Rangamati.",
  },
  {
    id: 5,
    name: "Bisanakandi",
    image: "https://i.ibb.co/vBHybqY/Sreemongol.png",
    backgroundImage:
      "https://media.gettyimages.com/id/1082843710/photo/bisanakandi-sylhet-bangladesh.jpg?s=612x612&w=0&k=20&c=uFImgtLryEEI1hMWo_BsKrE8c5x9ZuZBkfpllcJDy5o=",
    info: "Undoubtedly it is a great sign of natural beauty surrounded by hills and stones. For its natural beauty, it has become a popular tourist center in Bangladesh. It is situated at the Bangladesh-Sylhet border in Sylhet. In the rainy season it looks like the clouds hugging the mountains, so, winter is not a suitable season for visiting.",
  },
  {
    id: 6,
    name: "Sundarbans:",
    image: "https://i.ibb.co/RvRxGv3/sundorbon.png",
    backgroundImage:
      "https://media.istockphoto.com/id/1223269800/photo/deers-having-food.jpg?s=612x612&w=0&k=20&c=QTgIDPu8xzrKh_zrPkQafqq4Kfg-Gk1SgnAiLiQYO9M=",
    info: "Sundarbans has declared World Heritage Site by UNESCO which is the largest Mangrove Forest situated between two countries. It is the kingdom of Royal Bengal tiger and you will find various kinds of species of birds, animals & plants and I think you should visit the tranquilizing beauty of Sundarbans once in your life.",
  },
];

const SwiperTry = () => {
  const [currentPlace, setCurrentPlace] = useState(0);
  const { place, SetPlace } = useContext(UserContext);
  useEffect(() => {
    SetPlace(places[currentPlace]);
  }, [currentPlace]);
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper"
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={(swiper) => {
          setCurrentPlace(swiper.realIndex);
          SetPlace(swiper.realIndex);
        }}
      >
        {places.map((place) => (
          <div key={place.id}>
            <SwiperSlide>
              <img src={place.image} alt={place.name} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      <div>
        <h2>{places[currentPlace].name}</h2>
        <p>{places[currentPlace].info}</p>
      </div>
    </>
  );
};

export default SwiperTry;
