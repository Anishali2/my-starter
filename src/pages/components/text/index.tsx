import { Link, Paragraph, SimpleText } from '@/components/twin'
import React from 'react'

const index = () => {
  return (
    <div>
      Simple:<SimpleText>Simple Text</SimpleText>
      Paragraph:<Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
        veniam provident esse natus sunt magnam voluptas laudantium maiores
        libero voluptatibus.
      </Paragraph>
      link:<Link>Link</Link>
    </div>
  )
}

export default index
