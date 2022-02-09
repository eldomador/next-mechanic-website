import BrakeDisc from "../components/Icons/BrakeDisc";
import {
  Heading,
  ImageContainer,
  List,
  ListItems,
  Section,
  TextContainer,
} from "../components/SectionElements";

Services.title = "Usługi";
export default function Services() {
  return (
    <>
      <Section>
        <TextContainer>
          <Heading>Usługi</Heading>
          <List>
            <ListItems>mechanika pojazdowa</ListItems>
            <ListItems>diagnostyka komputerowa</ListItems>
            <ListItems>wulkanizacja,</ListItems>
            <ListItems>serwis klimatyzacji</ListItems>
            <ListItems>diagnostyka silnika samochodowego</ListItems>
            <ListItems>Układ kierowniczy</ListItems>
            <ListItems>Naprawa skrzyni biegów</ListItems>
          </List>
        </TextContainer>
        <ImageContainer>
          <BrakeDisc />
        </ImageContainer>
      </Section>
    </>
  );
}
