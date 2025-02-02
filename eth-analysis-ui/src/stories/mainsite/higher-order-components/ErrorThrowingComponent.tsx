import React from "react";

const ErrorThrowingComponent: React.FC = () => {
  throw new Error("This is a test error!");
  return <div>Component Loaded</div>;
};

export default ErrorThrowingComponent;
