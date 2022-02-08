import Image from "next/image";
import {
  Heading,
  ImageContainer,
  Section,
  TextContainer,
} from "../components/SectionElements";

Contact.title = "Contact";
export default function Contact() {
  return (
    <>
      <Section>
        <TextContainer>
          <Heading>Contact</Heading>
        </TextContainer>
        <ImageContainer>
          <Image
            src="/OilCheck.PNG"
            layout="responsive"
            width={300}
            height={200}
            alt="Wymiana oleju"
          />
        </ImageContainer>
      </Section>
    </>
  );
}
