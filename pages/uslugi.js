import Image from "next/image";
import {
  Heading,
  ImageContainer,
  Section,
  TextContainer,
} from "../components/SectionElements";

Services.title = "Contact";
export default function Services() {
  return (
    <>
      <Section>
        <TextContainer>
          <Heading>Usługi</Heading>
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
