import { Button, Flex, Heading } from "@radix-ui/themes";
import { ReactSVG } from "react-svg";
import { ImaageData } from "./data";
import { useState } from "react";

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  console.log(ImaageData);

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
      style={{ backgroundColor: "#575757" }}
    >
      <Heading style={{ color: "whitesmoke" }}>Image Carousel</Heading>
      <Flex justify={"center"} align={"center"} gap={"7"}>
        <Button
          variant="solid"
          radius="full"
          style={{ backgroundColor: "whitesmoke", cursor: "pointer" }}
          onClick={() => prevButton()}
        >
          <ReactSVG src="./svg/LeftLong.svg" />
        </Button>
        <Flex style={{ width: "500px", height: "500px" }}>
          {ImaageData.map(
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
          radius="full"
          color="grass"
          style={{ backgroundColor: "whitesmoke", cursor: "pointer" }}
          onClick={() => nextButton()}
        >
          <ReactSVG src="./svg/RightLong.svg" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default ImageCarousel;
