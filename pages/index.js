import Mechanic from "../components/Icons/Mechanic";
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
          <Mechanic />
        </ImageContainer>
      </Section>
    </div>
  );
}
