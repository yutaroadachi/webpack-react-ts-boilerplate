import React from "react";

type Props = {
  last_name: string;
  first_name: string;
};

export const HelloWorld = (props: Props) => (
  <p>{`Hello ${props.last_name} ${props.first_name} !!`}</p>
);
