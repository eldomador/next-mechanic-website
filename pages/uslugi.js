import {
  Heading,
  ImageContainer,
  List,
  ListItems,
  Player,
  PlayerWrap,
  Section,
  TextContainer,
  VideoContainer,
} from "../components/SectionElements";

Services.title =
  "Mechanik Krystian Paź - Warsztat Auto Serwis Staniewice - Usługi";
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
        <VideoContainer>
          <PlayerWrap>
            <Player
              url="https://www.youtube.com/watch?v=pu-Kv94XEtI&ab_channel=PiotrPacyniak"
              width="100%"
              height="100%"
              controls="true"
            />
          </PlayerWrap>
        </VideoContainer>
      </Section>
    </>
  );
}
