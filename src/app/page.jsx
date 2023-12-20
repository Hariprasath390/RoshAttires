// pages/index.js
// import Link from "next/link";

// const HomePage = () => {
//   return (
//     <div>
//       <h1>Welcome to My Website</h1>
//       {/* Button to navigate to the news page */}
//       <Link legacyBehavior href="/news">
//         <a>
//           <button>Go to News</button>
//         </a>
//       </Link>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import Header from "./Header";

function page() {
  return (
    <div>
      <Header />{" "}
    </div>
  );
}

export default page;
