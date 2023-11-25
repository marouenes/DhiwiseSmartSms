import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import DemoPageColumnexplainone from "components/DemoPageColumnexplainone";
import DemoPageRowtail from "components/DemoPageRowtail";
import DemoPageStatusbar from "components/DemoPageStatusbar";
import DemoPageUserbar from "components/DemoPageUserbar";

const DemoPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gradient  font-jost h-[1024px] mx-auto pb-3 pl-3 relative w-full">
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-end justify-start my-auto p-10 md:px-5 right-[0] w-[85%]"
          style={{ backgroundImage: "url('images/img_group25.png')" }}
        >
          <div className="flex flex-col md:gap-10 gap-[114px] justify-start mb-[115px] mr-[83px] w-[70%] md:w-full">
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[170px] md:ml-[0] ml-[590px] mr-[37px] text-base text-center tracking-[1.28px]"
              shape="round"
              color="gray_800"
              size="sm"
              variant="fill"
            >
              Follow up
            </Button>
            <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-between w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start rounded-[14px] w-[51%] md:w-full">
                <DemoPageStatusbar className="bg-gray-200 flex flex-row h-[59px] md:h-auto items-end justify-between w-[399px] sm:w-full" />
                <DemoPageUserbar className="flex sm:flex-col flex-row sm:gap-5 h-[34px] md:h-auto items-center justify-center w-[399px] sm:w-full" />
                <Text
                  className="text-[11px] text-black-900 text-center tracking-[0.07px] uppercase"
                  size="txtPoppinsRegular11"
                >
                  +123 123 123{" "}
                </Text>
                <div className="flex flex-col gap-2.5 items-center justify-start mt-3.5 p-2.5 w-[367px]">
                  <div className="flex flex-col items-center justify-end w-[366px]">
                    <div className="bg-blue-A200 flex flex-col h-[100px] md:h-auto items-end justify-start px-3 py-1.5 rounded-[18px] w-[242px]">
                      <Text
                        className="leading-[22.00px] max-w-[218px] md:max-w-full text-[17px] text-white-A700 tracking-[-0.41px]"
                        size="txtPoppinsRegular17"
                      >
                        Hello Telecompany GPT, Can you help me survive in the
                        wilderness without internet?
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-end pl-2.5 w-full">
                    <DemoPageRowtail className="flex flex-row items-end justify-start w-[255px]" />
                  </div>
                </div>
                <div className="flex flex-row gap-[18px] h-[107px] md:h-auto items-center justify-start mt-[180px] p-2.5 w-[399px] sm:w-full">
                  <div className="flex flex-col h-[43px] md:h-auto items-start justify-center w-[285px] sm:w-full">
                    <Input
                      name="type"
                      placeholder="SMS"
                      className="md:h-auto p-0 placeholder:text-gray-800_01 sm:h-auto text-[17px] text-left tracking-[-0.41px] w-full"
                      wrapClassName="outline outline-[0.5px] outline-black-900_7e w-[99%]"
                    ></Input>
                  </div>
                  <Button
                    className="cursor-pointer min-w-[58px] text-[17px] text-center tracking-[-0.41px]"
                    shape="round"
                    color="indigo_A100"
                    size="sm"
                    variant="outline"
                  >
                    Send
                  </Button>
                </div>
              </div>
              <DemoPageColumnexplainone className="flex flex-col font-jost md:gap-10 gap-[103px] items-start justify-start md:mt-0 mt-16 w-auto" />
            </div>
          </div>
        </div>
        <Button
          className="common-pointer absolute bg-transparent cursor-pointer font-bold leading-[normal] left-[11%] min-w-[147px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 top-[4%]"
          onClick={() => navigate("/")}
          size="xs"
        >
          SMSavvy.
        </Button>
        <div className="absolute flex flex-col md:gap-10 gap-[70px] items-start justify-start left-[11%] md:px-5 top-[34%] w-auto">
          <Button className="bg-transparent cursor-pointer font-bold leading-[normal] min-w-[84px] text-center text-white-A700 text-xl">
            About us
          </Button>
          <Button
            className="bg-transparent cursor-pointer font-bold leading-[normal] min-w-[183px] text-center text-white-A700 text-xl"
            size="xs"
          >
            Live the experience
          </Button>
          <Button className="bg-transparent cursor-pointer font-bold leading-[normal] min-w-[86px] text-center text-white-A700 text-xl">
            Solutions
          </Button>
        </div>
      </div>
    </>
  );
};

export default DemoPagePage;
