import { Stack } from "@mui/material";
import Header from "./component/Header/Header";
import ThreeComment from "./component/Three/ThreeComment";

function App() {
  return (
    <Stack id="app" sx={{ width: "100vw", height: "100vh" }}>
      <Header />
      <Stack sx={{ width: "100vw", height: "calc(100vh - 64px)" }}>
        <ThreeComment />
      </Stack>
    </Stack>
  );
}

export default App;
