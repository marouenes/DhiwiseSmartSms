import React from "react";

const sizeClasses = {
  txtPoppinsRegular11WhiteA700: "font-normal font-poppins",
  txtJostRomanBold32: "font-bold font-jost",
  txtJostRomanMedium16: "font-jost font-medium",
  txtPoppinsBold10: "font-bold font-poppins",
  txtPoppinsRegular17: "font-normal font-poppins",
  txtJostRomanMedium9: "font-jost font-medium",
  txtPoppinsRegular11: "font-normal font-poppins",
  txtPoppinsRegular17Black900: "font-normal font-poppins",
  txtJostRomanRegular24: "font-jost font-normal",
  txtJostRomanRegular64: "font-jost font-normal",
  txtPoppinsSemiBold17: "font-poppins font-semibold",
  txtJostRomanRegular16: "font-jost font-normal",
  txtJostRomanBold16: "font-bold font-jost",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
