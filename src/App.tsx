import { Flex } from "@radix-ui/themes";
import ImageCarousel from "./components/image-carousel/ImageCarousel";

function App() {
  return (
    <Flex width={"100%"} align={"center"} style={{ height: "inherite" }}>
      <ImageCarousel />
    </Flex>
  );
}

export default App;
