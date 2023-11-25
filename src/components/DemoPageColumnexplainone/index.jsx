import React from "react";

import { Text } from "components";

const DemoPageColumnexplainone = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="max-w-[323px] md:max-w-full text-base text-white-A700"
          size="txtJostRomanRegular16"
        >
          {props?.explainone}
        </Text>
        <Text
          className="max-w-[323px] md:max-w-full text-base text-right text-white-A700"
          size="txtJostRomanRegular16"
        >
          {props?.explaintwo}
        </Text>
        <Text
          className="max-w-[310px] md:max-w-full text-base text-white-A700"
          size="txtJostRomanRegular16"
        >
          {props?.explainthree}
        </Text>
      </div>
    </>
  );
};

DemoPageColumnexplainone.defaultProps = {
  explainone:
    "ChatGPT is now accessible by SMS, meaning that without Internet access, you can still search for information.",
  explaintwo:
    "Whether you’re trying to survive in the wilderness or just ran out of mobile data and no wifi nearby",
  explainthree: "The fastest and most modern AI is just one SMS away!",
};

export default DemoPageColumnexplainone;
