import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating={10} color="blue" onSetRating={setMovieRating} />
//       <div>This movie was rated {movieRating} starts</div>
//     </div>
//   );
// }

// root.render(
//   <React.StrictMode>
//     <Test />
//     <StarRating
//       maxRating={5}
//       messages={["Terriable", "Bad", "Okay", "Good", "Perfect"]}
//     />
//     <StarRating size={26} color="red" className="test" defaultRating={3} />
//   </React.StrictMode>
// );

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
