import React from "react";
import { FC } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export const Form: FC = () => {
  return (
    <form>
      <Input />
      <Input />
      <Button />
    </form>
  );
};
