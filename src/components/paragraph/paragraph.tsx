import * as React from "react"

interface ParagraphProps {
  children?: React.ReactNode
}

const Paragraph = (props: ParagraphProps) => {
  return <p>{props.children}</p>
}

export default Paragraph
