import React from "react"

import Item from "./Item"

export default ({ contents }) => (
  <div>
    {contents.map((content, i) => (
      <Item {...content} key={i} />
    ))}
  </div>
)
