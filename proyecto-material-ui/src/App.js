import FormSignUp from "./Components/FormSignUp";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <Container 
    component={"section"}
    maxWidth="sm" 
    >
      <Typography 
      variant="h3"
      align="center"
      >Formulario registro</Typography>
      <FormSignUp />
    </Container>
  );
}

export default App;