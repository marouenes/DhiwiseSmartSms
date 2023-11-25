import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const HomepagePage = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="bg-gradient  font-jost h-[1024px] mx-auto pb-3 pl-3 relative w-full">
      <div
        className="bg-cover bg-gradient  bg-no-repeat flex flex-col font-jost h-[1024px] items-center justify-start mx-auto p-[37px] sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_homepage.svg')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[71px] items-center justify-start max-w-[1159px] mb-[313px] mx-auto md:px-5 w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between w-[97%] md:w-full">
            <div className="flex flex-col items-center justify-start pt-0.5">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                size="txtJostRomanBold32"
              >
                <span className="text-white-A700 font-jost text-left font-bold">
                  SMSavvy
                </span>
                <span className="text-pink-A400 font-jost text-left font-bold">
                  .
                </span>
              </Text>
            </div>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[170px] my-[3px] text-base text-center tracking-[1.28px]"
              shape="round"
              color="gray_800"
              size="sm"
              variant="fill"
            >
              Follow up
            </Button>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <div className="flex flex-col md:gap-10 gap-[70px] items-start justify-start md:mt-0 mt-[194px] w-auto">
              <Button className="bg-transparent cursor-pointer font-bold leading-[normal] min-w-[84px] text-center text-white-A700 text-xl">
                About us
              </Button>
              <Button
                className="common-pointer bg-transparent cursor-pointer font-bold leading-[normal] min-w-[183px] text-center text-white-A700 text-xl"
                onClick={() => navigate("/demopage")}
                size="xs"
              >
                Live the experience
              </Button>
              <Button className="bg-transparent cursor-pointer font-bold leading-[normal] min-w-[86px] text-center text-white-A700 text-xl">
                Solutions
              </Button>
            </div>
            <div className="flex flex-col md:gap-10 gap-[71px] items-start justify-start md:ml-[0] ml-[197px] w-auto">
              <div className="flex flex-col items-start justify-start w-[58%] md:w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtJostRomanRegular16"
                >
                  The next Gen mobile services
                </Text>
                <Line className="bg-white-A700 h-px w-[92%]" />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="md:text-5xl text-[64px] text-white-A700 w-full"
                  size="txtJostRomanRegular64"
                >
                  WE BRING FUTURE TO THE PAST
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-base text-white-A700 w-full"
                  size="txtJostRomanRegular16"
                >
                  In a world where modernization is key, we thrive to provide
                  innovative solutions for modern day life.
                </Text>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[188px] items-start justify-start md:ml-[0] ml-[156px] md:mt-0 mt-[221px] rounded-[30px] w-auto"
              style={{ backgroundImage: "url('images/img_features.svg')" }}
            >
              <div className="flex flex-row gap-3.5 items-start justify-between w-[93%] md:w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start mb-[27px]">
                  <Button
                    className="flex h-[33px] items-center justify-center rounded-[16px] w-[33px]"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    <Img src="images/img_arrowleft.svg" alt="arrowleft" />
                  </Button>
                  <Text
                    className="text-base text-white-A700 tracking-[1.28px] w-full"
                    size="txtJostRomanMedium16"
                  >
                    AI Enhanced legacy services
                  </Text>
                  <a
                    href="javascript:"
                    className="border border-black-900 border-solid h-[15px] px-[7px] rounded-[7px] text-[9px] text-black-900 tracking-[0.72px] w-[65px]"
                  >
                    <Text size="txtJostRomanMedium9">Read More</Text>
                  </a>
                </div>
                <Img
                  className="h-[134px] md:h-auto mt-[39px] object-cover rounded-[30px] w-[126px]"
                  src="images/img_image1.png"
                  alt="imageOne"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default HomepagePage;
