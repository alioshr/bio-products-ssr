import {css, keyframes} from 'styled-components'

//modal animation
const modalEntering = keyframes`
to {opacity: 1}
`
 const modalLeaving = keyframes`
to {opacity: 0}
`
export const modalEnter = () => css`
animation: ${modalEntering} 400ms ease forwards;
`
export const modalLeave = () => css`
animation: ${modalLeaving} 400ms ease forwards;
`

//product pictures animation
const picSwappingRight = keyframes`
to {transform: translateX(-100%)}
`
const picSwappingLeft = keyframes`
to {transform: translateX(100%)};
`
const swapRight = css`
animation: ${picSwappingRight} 400ms ease forwards
`

const swapLeft = css`

`