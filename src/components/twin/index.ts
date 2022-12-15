import tw from 'twin.macro'

export const Text = tw.div`w-1/2`
// create all the text components like h1, h2, h3, p, span, etc with respective styles

// create a varient of the text component
export const Heading = tw(Text)`text-2xl`
