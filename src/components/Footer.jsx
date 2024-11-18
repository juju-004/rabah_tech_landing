import React from "react";
import "./Footer.css";
import Container from "./shared/Container";

export default function Footer() {
  return (
    <section className="bg-slate-300 w-screen">
      <Container className="Footer">
        <p className="text-center py-4 text-blue-600 ">
          ©2024 rabahtech. All rights reserved.
        </p>
      </Container>
    </section>
  );
}
