"use client";

// library will be alway downloaded and included in js bundle
// but if it is dynamic -> it will downloaded only when needed
// import _ from "lodash";
import { useState } from "react";
// import dynamic from "next/dynamic";
// import HeavyComponent from "../HeavyComponent";

/* const HeavyComponent = dynamic(() => import("../HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
 */
function Home() {
  // const session =  getServerSession(authOptions);
  const [isVisible, setVisible] = useState(false);

  return (
    <main className="relative h-screen ">
      <h1>Welcome to my app!</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;

          const users = [{ name: "Ahmed" }, { name: "Sara" }, { name: "Mido" }];
          const sortedUsers = _.orderBy(users, ["name"]);
          console.log("SORTEDUSERS: ", sortedUsers);
        }}
      >
        Show
      </button>

      {/* <button
        className="btn btn-primary m-2 p-3"
        onClick={() => setVisible(true)}
      >
        Show
      </button>
      {isVisible && <HeavyComponent />} */}
      {/* <Image src={coffee} alt="Coffee" /> */}
      {/*  <Image
        src="https://bit.ly/react-cover"
        alt="React"
        // width={300}
        // height={170}
        fill
        // style={{ objectFit: "contain" }}
        className="object-cover"
        sizes="(max-width:480px) 100vw, (max-width:768px) 50vw, 33vw "
        quality={100} // 0 to 100
        priority
      /> */}
    </main>
  );
}

export default Home;

// for static pages
/* export const metadata: Metadata = {
  title: "Home page",
}; */

// for dynamic pages
/* export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch("...");

  return {
    title: "product.title",
    description: "product.description",
  };
} */
