"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Hero */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: "48px", marginBottom: "20px" }}
        >
          The Moment
        </motion.h1>

        <p style={{ fontSize: "20px", maxWidth: "600px", margin: "0 auto" }}>
          Timeless R&B, Soul, and Motown grooves with modern emotion.
        </p>
      </section>

      {/* Music Videos */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Music Videos</h2>
        <p>
          <a href="https://www.facebook.com/share/v/17V4Jcqeds/" target="_blank">
            Boogie Oogie Oogie
          </a>
        </p>
        <p>
          <a href="https://www.facebook.com/share/v/182NdkAdcA/" target="_blank">
            Nasty Girl
          </a>
        </p>
        <p>
          <a href="https://www.facebook.com/share/v/1KqwXXkmCd/" target="_blank">
            Sweet Thing
          </a>
        </p>
      </section>

      {/* About */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>About the Band</h2>
        <p style={{ maxWidth: "700px", margin: "0 auto" }}>
          The Moment is a multi-genre band known for immersive soundscapes and
          electrifying live performances spanning the 70s, 80s, 90s, and 2000s.
          Formed in Maryland, the band is led by vocalist Jarra, whose powerful
          stage presence keeps audiences fully engaged.
        </p>
      </section>

      {/* Bookings */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Bookings</h2>
        <p>Email: themomentlivebandandshow@gmail.com</p>
        <p>Phone: (202) 640-0045</p>
        <a
          href="mailto:themomentlivebandandshow@gmail.com?subject=Booking%20Inquiry%20-%20The%20Moment"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 24px",
            backgroundColor: "black",
            color: "white",
            textDecoration: "none",
            borderRadius: "20px",
          }}
        >
          Book Now
        </a>
      </section>
    </div>
  );
}
