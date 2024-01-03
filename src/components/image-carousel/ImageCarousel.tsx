import { Button, Flex, Heading } from "@radix-ui/themes";
import { ReactSVG } from "react-svg";
import { ImageData } from "./data";
import { useState } from "react";

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextButton = () => {
    setCurrent(current === ImageData.length - 1 ? 0 : current + 1);
  };

  const prevButton = () => {
    setCurrent(current === 0 ? ImageData.length - 1 : current - 1);
  };

  return (
    <Flex
      width={"100%"}
      direction={"column"}
      align={"center"}
      gap={"5"}
      px={"6"}
      py={"4"}
      style={{ background: "inherite" }}
    >
      <Heading style={{ color: "whitesmoke" }}>Image Carousel</Heading>
      <Flex justify={"center"} align={"center"} gap={"7"}>
        <Button
          variant="solid"
          size={"4"}
          radius="full"
          style={{ backgroundColor: "#F6B17A", cursor: "pointer" }}
          onClick={() => prevButton()}
        >
          <ReactSVG src="./svg/LeftLong.svg" />
        </Button>
        <Flex style={{ width: "500px", height: "500px" }}>
          {ImageData.map(
            (image, index) =>
              current === index && (
                <img
                  src={image.src}
                  alt={image.alt}
                  key={index}
                  style={{
                    maxWidth: "500px",
                    maxHeight: "500px",
                    objectFit: "contain",
                  }}
                />
              )
          )}
        </Flex>

        <Button
          variant="solid"
          size={"4"}
          radius="full"
          color="grass"
          style={{ backgroundColor: "#F6B17A", cursor: "pointer" }}
          onClick={() => nextButton()}
        >
          <ReactSVG src="./svg/RightLong.svg" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default ImageCarousel;
