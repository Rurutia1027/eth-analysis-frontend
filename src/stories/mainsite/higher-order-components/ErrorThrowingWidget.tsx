import React from "react";

const ErrorThrowingWidget: React.FC = () => {
  throw new Error("This is a test error from ErrorThrowingWidget!");
  return <div>Widget Loaded</div>;
};

export default ErrorThrowingWidget;
