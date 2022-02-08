import Image from "next/image";
import {
  Heading,
  ImageContainer,
  Section,
  TextContainer,
} from "../components/SectionElements";

Home.title = "Homepage";
export default function Home() {
  return (
    <div>
      <Section>
        <TextContainer>
          <Heading>Najlepszy serwis samochodowy w twojej okolicy</Heading>
        </TextContainer>
        <ImageContainer>
          <Image
            src="/mechanic2.png"
            width={1500}
            height={1500}
            alt="Mechanik"
          />
        </ImageContainer>
      </Section>
    </div>
  );
}
