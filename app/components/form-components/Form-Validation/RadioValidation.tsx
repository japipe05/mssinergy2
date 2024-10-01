"use client";
import { Radio, Label, Button } from "flowbite-react";
import React, { useState } from "react";
import TitleCard from "../../shared/TitleBorderCard";

const RadioValidation = () => {
  // Radio Button
  const [radioValue, setRadioValue] = useState("");

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
  };
  const handleSubmitradio = () => {
    alert(radioValue);
  };
  return (
    <div>
      <TitleCard title="Radio">
        <div className="grid grid-cols-12 gap-6">
          <div className="lg:col-span-2 col-span-12 flex items-center gap-2">
            <Radio
              onChange={handleRadioChange}
              id="primarycolor"
              name="color"
              value="Primary"
            />
            <Label htmlFor="primarycolor">Primary</Label>
          </div>
          <div className="lg:col-span-2 col-span-12 flex items-center gap-2">
            <Radio
              onChange={handleRadioChange}
              id="errorcolor"
              name="color"
              value="Error"
            />
            <Label htmlFor="errorcolor">Error</Label>
          </div>
          <div className="lg:col-span-2 col-span-12 flex items-center gap-2">
            <Radio
              onChange={handleRadioChange}
              id="secondarycolor"
              name="color"
              value="Secondary"
            />
            <Label htmlFor="secondarycolor">Secondary</Label>
          </div>
          <div className="col-span-12 flex items-center gap-[1rem] justify-end">
            <Button
              onClick={handleSubmitradio}
              type="submit"
              color="primary"
            >
              Submit
            </Button>
          </div>
        </div>
      </TitleCard>
    </div>
  );
};

export default RadioValidation;