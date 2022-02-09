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
            <ListItems>Mechanika pojazdowa</ListItems>
            <ListItems>Diagnostyka komputerowa</ListItems>
            <ListItems>Wulkanizacja,</ListItems>
            <ListItems>Serwis klimatyzacji</ListItems>
            <ListItems>Naprawa układu kierowniczego</ListItems>
            <ListItems>Diagnostyka silnika samochodowego</ListItems>
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
