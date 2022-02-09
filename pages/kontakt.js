import {
  Heading,
  ImageContainer,
  Paragraph,
  Section,
  TextContainer,
} from "../components/SectionElements";
import Garage from "../components/Icons/Garage";
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
          <Garage />
        </ImageContainer>
      </Section>
    </>
  );
}
