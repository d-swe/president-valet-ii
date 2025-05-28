import { Tailwind, Button, Html } from "@react-email/components";
import * as React from "react";

export default function Email(props: { name: string, email: string, phone: string, message: string }) {
  return (
    <Tailwind>
      <Html>
        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
          .custom-font {
            font-family: 'Roboto', sans-serif;
          }
        `}
        </style>
        <div className="m-16 custom-font">
          <img
            src="https://raw.githubusercontent.com/d-swe/president-valet-ii/main/frontend/pvii-ui/src/assets/pvii-logo-ws.png"
            alt="President Valet II Logo"
            width="120"
          />
          <h1>Hi, {props.name}!</h1>
          <p className="text-xl">Thank you for reach out to us!<br /> Someone from our team will get back to you in the next 24-48 hours.</p>
          <p className="text-xl">Thank you!</p>
        </div>
      </Html>
    </Tailwind >
  );
}
