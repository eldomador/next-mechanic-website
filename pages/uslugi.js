import ReactPlayer from "react-player/youtube";
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
          <ReactPlayer
            url="https://www.youtube.com/watch?v=pu-Kv94XEtI&ab_channel=PiotrPacyniak"
            controls="true"
          />
        </ImageContainer>
      </Section>
    </>
  );
}
