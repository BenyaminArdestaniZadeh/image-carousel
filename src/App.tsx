import { Flex } from "@radix-ui/themes";
import "./App.css";
import ImageCarousel from "./components/image-carousel/ImageCarousel";

function App() {
  return (
    <Flex width={"100%"}>
      <ImageCarousel />
    </Flex>
  );
}

export default App;
