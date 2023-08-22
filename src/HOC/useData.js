// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// async function useData() {
//   const [data, setData] = useState([]);

//   const { type } = useParams();
//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/movie/${
//         type ? type : "popular"
//       }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
//     );
//     const newData = await response.json();
//     setData(newData);
//   } catch (error) {
//     console.log(error);
//   }

//   return data;
// }

// export default useData;
