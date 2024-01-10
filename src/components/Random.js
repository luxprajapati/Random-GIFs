import React from "react";
// import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  /* We don't required these code bcz these code is already in present of `useGif.js` file */
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState("false");

  // // These is method to access the api from the .env file [`.env` is the environment file]
  // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  // // console.log(API_KEY);

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const { data } = await axios.get(url);
  //   const imageSrc = data.data.images.downsized_large.url;
  //   // console.log(imageSrc);
  //   setGif(imageSrc);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2 h-auto rounded-lg border-2 bg-green-400 border-gray-500 flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-2xl mt-[15px] underline font-bold ">A Random GIF</h1>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <img src={gif} alt="GIF" width="450"></img>
      )}

      <button
        onClick={() => fetchData()}
        className="w-9/12 bg-blue-100 mb-[20px] hover:bg-white text-lg py-2 rounded-lg uppercase font-semibold"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
