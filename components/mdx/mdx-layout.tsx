import { Container } from "@mui/material";

const MdxLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container className="my-4" maxWidth="md">
      {children}
    </Container>
  );
};

export default MdxLayout;
