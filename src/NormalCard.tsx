import React from "react";
import {NormalCardProps} from "./Types/NormalCardProps";
import {DefaultProps} from "./Types/DefaultProps";
import {isString} from "./Utils/Utils";

export const XrmContext = React.createContext<Xrm.XrmStatic | undefined>(undefined);

const NormalCard: React.FunctionComponent<NormalCardProps & DefaultProps> = ({value, title}) => {
 const isValueString = isString(value);

 if (isValueString === true) {
  return (
   <div className="bg-white h-full w-full flex flex-col px-4 py-3">
    <div>{title}</div>
    <div>{value}</div>
   </div>
  );
 }
};

export {NormalCard};
