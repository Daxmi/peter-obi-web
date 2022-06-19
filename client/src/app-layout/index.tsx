import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";

function AppLayout({ children }: { children: any }) {
  return (
    <Container>
      <Header />
      <div className="childPages">{children}</div>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

export default AppLayout;
