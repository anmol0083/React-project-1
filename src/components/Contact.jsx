import React, { useState } from "react";

const Contact = () => {
  const [title, settitle] = useState("AnMoL");
  const [title1, settitle1] = useState("sharmaa...l@gmail.com");
  const [title2, settitle2] = useState("How are you? ..");
  function abc(event) {
    settitle(event.target.value);
  }
  function abc1(event) {
    settitle1(event.target.value);
  }
  function abc2(event) {
    settitle2(event.target.value);
  }
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label>Name: </label>
            <input
              type="text"
              value={title}
              onChange={abc}
              required
              placeholder="Abc"
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              value={title1}
              onChange={abc1}
              required
              placeholder="Abc@gmail.com"
            />
          </div>

          <div>
            <label>Message:</label>
            <input
              type="text"
              value={title2}
              onChange={abc2}
              required
              placeholder="Tell us about quary..."
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
