import Head from "next/head";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Title>
          Welcome to <a href='./Post/post'>Next.js!</a>
        </Title>
      </main>
    </Container>
  );
}
