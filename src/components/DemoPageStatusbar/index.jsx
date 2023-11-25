import React from "react";

import { Img, Text } from "components";

const DemoPageStatusbar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-full items-center justify-center w-full">
          <div className="flex flex-col items-center justify-start px-2">
            <Text
              className="text-[17px] text-black-900 text-center tracking-[-0.41px]"
              size="txtPoppinsSemiBold17"
            >
              {props?.time}
            </Text>
          </div>
        </div>
        <div className="flex flex-col h-full items-center justify-center w-full">
          <div className="flex flex-row gap-2 items-start justify-start w-auto">
            <Img
              className="h-3 w-[18px]"
              src="images/img_settings.svg"
              alt="settings"
            />
            <Img
              className="h-[11px] w-[17px]"
              src="images/img_settings_black_900.svg"
              alt="settings_One"
            />
            <div className="flex flex-row items-end justify-evenly w-[35%]">
              <div className="h-[15px] relative w-[93%]">
                <div className="absolute h-[13px] inset-[0] justify-center m-auto overflow-hidden w-full">
                  <div className="w-full h-full absolute bg-black_900_59 rounded-[4px]"></div>
                  <div
                    className="h-full absolute bg-black_900"
                    style={{ width: "84%" }}
                  ></div>
                </div>
                <Text
                  className="absolute h-full inset-y-[0] left-[20%] my-auto text-[10px] text-center text-white-A700 tracking-[0.06px]"
                  size="txtPoppinsBold10"
                >
                  {props?.progresspercentage}
                </Text>
              </div>
              <Img
                className="h-1 my-[5px]"
                src="images/img_batteryend.svg"
                alt="batteryend"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DemoPageStatusbar.defaultProps = { time: "17:41", progresspercentage: "80" };

export default DemoPageStatusbar;
