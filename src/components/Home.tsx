import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay, Keyboard, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import Card from "./Card";
import { Progress } from "@/components/ui/progress";

function Home() {
  const [data, setData] = useState([]);
  const [progress, setProgress] = useState(13);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_APIKEY;
    const apifetch = async () => {
      try {
        const timer = setTimeout(() => setProgress(100), 1000);
        timer;
        const apidata = await axios.get(
          `https://api.rawg.io/api/games?key=${apiKey}`
        );
        setData(apidata.data.results);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    apifetch();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-[#2E3192] to-[#00021b] ">
        <h1 className="py-20 text-center heading">GameS</h1>
        <motion.div
          className="px-52"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {loading ? (
            <div className="flex flex-col items-center justify-center py-52 px-52">
              <h1 className="game-heading-loading">
                Loading <span>. </span>
                <span>. </span>
                <span>. </span>
              </h1>
              <Progress
                value={progress}
                className="w-[80%] flex items-middle justify-center"
              />
            </div>
          ) : (
            <Swiper
              spaceBetween={0}
              slidesPerView={3}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              coverflowEffect={{
                rotate: 10,
                stretch: 100,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }}
              loop={true}
              autoHeight={false}
              keyboard={{
                enabled: true,
              }}
              effect={"coverflow"}
              modules={[Keyboard, EffectCoverflow, Autoplay]}
            >
              {data.map((games: any) => (
                <SwiperSlide key={games.id}>
                  <div className="h-[60vh] ">
                    <Card
                      name={games.name}
                      image={games.background_image}
                      rating={games.rating}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </motion.div>
      </div>
    </>
  );
}

export default Home;
