import {
  Heading,
  ImageContainer,
  Paragraph,
  Section,
  TextContainer,
} from "../components/SectionElements";
import { FiPhone } from "react-icons/fi";
import { MdOutlinePinDrop, MdOutlineEmail } from "react-icons/md";

Contact.title = "Kontakt";
export default function Contact() {
  return (
    <>
      <Section>
        <TextContainer>
          <Heading>Kontakt</Heading>
          <Paragraph>
            <FiPhone />
            694 009 052
          </Paragraph>
          <Paragraph>
            <MdOutlinePinDrop />
            Staniewice 21e 76-113
          </Paragraph>
          <Paragraph>
            <MdOutlineEmail />
            ystaj@onet.eu
          </Paragraph>
        </TextContainer>
        <ImageContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9282.793908453268!2d16.7347959!3d54.4329567!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a979c21c648ca9a!2sAuto%20Serwis!5e0!3m2!1spl!2spl!4v1644433817248!5m2!1spl!2spl"
            width="600"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </ImageContainer>
      </Section>
    </>
  );
}
