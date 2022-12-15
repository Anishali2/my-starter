import tw from 'twin.macro'

export const Text = tw.div`w-1/2`
// create all the text components like h1, h2, h3, p, span, etc with respective styles

// create a varient of the text component
export const Heading = tw.h1`text-2xl `

export const SimpleText = tw.p`text-sm md:text-lg lg:text-xl`
export const Paragraph = tw.p`text-sm`
export const Link = tw.a`text-blue-500 cursor-pointer hover:border-b-2`
