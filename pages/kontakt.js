import {
  Heading,
  ImageContainer,
  Section,
  TextContainer,
} from "../components/SectionElements";
import Mechanic from "../components/Icons/Mechanic";

Contact.title = "Contact";
export default function Contact() {
  return (
    <>
      <Section>
        <TextContainer>
          <Heading>Kontakt</Heading>
        </TextContainer>
        <ImageContainer>
          <Mechanic />
        </ImageContainer>
      </Section>
    </>
  );
}
