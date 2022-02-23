import Mechanic from "../components/Icons/Mechanic";
import {
  Heading,
  Player,
  PlayerWrap,
  SectionService,
  ServiceCardWrapper,
  VideoContainer,
} from "../components/SectionElements";
import {
  CardH2,
  CardP,
  Card,
  CardImageWrapper,
  CardIcon,
} from "../styles/globalStyles";

Services.title =
  "Mechanik Krystian Paź - Warsztat Auto Serwis Staniewice - Usługi";
Services.description =
  "Mechanika pojazdowa, Diagnostyka komputerowa, Wulkanizacja, Serwis klimatyzacji, Naprawa układu kierowniczego, Diagnostyka silnika samochodowego, Naprawa skrzyni biegów";
export default function Services() {
  return (
    <>
      <SectionService>
        <Heading>Usługi</Heading>
        <ServiceCardWrapper>
          <Card>
            <CardImageWrapper>
              <Mechanic />
            </CardImageWrapper>
            <CardH2>Naprawa</CardH2>
            <CardP>
              Zajmujemy się naprawą: układu kierowniczego, skrzyni biegów,
              silników. Wykorzystujemy do tego Diagnostykę komputerową.
            </CardP>
            <CardIcon />
          </Card>
          <Card>
            <CardImageWrapper>
              <Mechanic />
            </CardImageWrapper>
            <CardH2>Serwis</CardH2>
            <CardP>
              W naszej ofercie serwisowej znajduje się wymiana: oleju, filtrów,
              płynu hamulcowego itp. Oraz serwis klimatyzacji.
            </CardP>
            <CardIcon />
          </Card>
          <Card>
            <CardImageWrapper>
              <Mechanic />
            </CardImageWrapper>
            <CardH2>Wulkanizacja</CardH2>
            <CardP>
              Nasze usługi Wulkanizacjne obejmują: wymiane opon i kół, wyważanie
              oraz naprawę opon. Instenej możliwość zakupu nowych opon.
            </CardP>
            <CardIcon />
          </Card>
          {/* <List>
            <ListItems>Mechanika pojazdowa</ListItems>
            <ListItems>Diagnostyka komputerowa</ListItems>
            <ListItems>Wulkanizacja,</ListItems>
            <ListItems>Serwis klimatyzacji</ListItems>
            <ListItems>Naprawa układu kierowniczego</ListItems>
            <ListItems>Diagnostyka silnika samochodowego</ListItems>
            <ListItems>Naprawa skrzyni biegów</ListItems>
          </List> */}
        </ServiceCardWrapper>
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
      </SectionService>
    </>
  );
}
