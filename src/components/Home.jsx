import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Anmol</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      {/* section 2 */}
      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      {/* section 3 */}

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Hello ipsum dolor sit amet consectetur adipisicing elit. Ex animi,
            facilis labore autem iste praesentium, eaque optio voluptatibus quo
            debitis laboriosam necessitatibus iusto, perferendis deserunt.
            Omnis, molestias dolorum assumenda a saepe deserunt! Laboriosam
          
          </p>
        </div>
      </div>

      {/* section 4 */}

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
             style={{
              animationDelay: '0.8s'
             }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazone</p>
            </div>

            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <AiFillInstagram />
              <p>instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
