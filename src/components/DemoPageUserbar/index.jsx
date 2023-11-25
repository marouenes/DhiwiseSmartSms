import React from "react";

import { Img, Text } from "components";

const DemoPageUserbar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[-3px] h-[25px] md:h-auto items-center justify-start pl-4 pr-[9px] py-[9px] w-[63px]">
          <Img
            className="h-6 w-[18px]"
            src="images/img_arrowleft_light_blue_a700.svg"
            alt="arrowleft"
          />
          <div className="h-[17px] px-1 py-0.5 relative w-[18px]">
            <div className="absolute bg-light_blue-A700 h-4 inset-[0] m-auto rounded-lg w-full"></div>
            <Text
              className="absolute h-full inset-[0] m-auto text-[11px] text-center text-white-A700 tracking-[0.07px] w-max"
              size="txtPoppinsRegular11WhiteA700"
            >
              {props?.name}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-[25px] md:h-auto items-center justify-center w-full">
          <div className="flex flex-row gap-[3px] items-center justify-start w-auto">
            <Text
              className="text-[11px] text-black-900 text-center tracking-[0.07px] uppercase w-auto"
              size="txtPoppinsRegular11"
            >
              {props?.nameOne}
            </Text>
            <Img
              className="h-[7px] w-1"
              src="images/img_arrowright.svg"
              alt="arrowright"
            />
          </div>
        </div>
        <Img
          className="h-[26px] w-[63px]"
          src="images/img_rightaccessory.svg"
          alt="buttoncall"
        />
      </div>
    </>
  );
};

DemoPageUserbar.defaultProps = { name: "12", nameOne: "Telecompany" };

export default DemoPageUserbar;
