import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import pvii from "../assets/pvii-logo-ws.png"

interface WelcomeEmailProps {
  firstName: string;
}

const baseUrl = "http://localhost:3000"

export const welcome = ({
  firstName,
}: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="/pvii-logo-ws.png"
          width="170"
          height="50"
          alt="PVII-logo"
          style={logo}
        />
        <Text style={paragraph}>Hi {firstName},</Text>
        <Text style={paragraph}>
          Thank you for reaching out to us!<br />One of us will reach out to you in the next 24-48 hours.
        </Text>
        <Text style={paragraph}>
          Best,
          <br />
          President Valet II
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          4837 Wisconsin Ave NW, Washington DC 20016<br />(202) 244-5678
        </Text>
      </Container>
    </Body>
  </Html>
);

welcome.PreviewProps = {
  firstName: "DJ",
} as WelcomeEmailProps;

export default welcome;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
