import Mechanic from "../components/Icons/Mechanic";
import {
  Heading,
  ImageContainer,
  Section,
  TextContainer,
} from "../components/SectionElements";
import { Button } from "../styles/globalStyles";
import Link from "next/link";

Home.title = "Mechanik Krystian Paź - Warsztat Auto Serwis Staniewice";
Home.description = "Najlepszy serwis samochodowy w okolicy Sławna";
export default function Home() {
  return (
    <div>
      <Section>
        <TextContainer>
          <Heading>Najlepszy serwis samochodowy w twojej okolicy</Heading>
          <Link href="/kontakt" passHref>
            <Button>Kontakt</Button>
          </Link>
        </TextContainer>
        <ImageContainer>
          <Mechanic />
        </ImageContainer>
      </Section>
    </div>
  );
}
