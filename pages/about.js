import Head from "next/head";
import { Heading, Section } from "../components/SectionElements";
export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <Heading>ABOUT</Heading>
      </Section>
    </>
  );
}
