"use client"
import React from "react";
import AppButton from "../../src/components/common/AppButton";

function Page() {
  return (
    <div>
      <h1>About Page</h1>
      <AppButton label="Click Me" onClick={() => alert("Clicked!")} />
    </div>
  );
}

export default Page;