import React from "react";

import Headline from "./headline";

export default () => {
  const greeting = 'Hello Function Component!';

  return <Headline value={greeting} />;
};