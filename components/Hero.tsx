import React from 'react'
import { HeroParallax } from './ui/HeroParallex'
import Blog from './Blog'
const Products = [
  {
    title: 'ferrari enzo',
    thumbnail: '/enzo.jpg',
    link: '#'
  },
  {
    title: 'aston marton',
    thumbnail: '/aston.webp',
    link: '#'
  },
  {
    title: 'bently',
    thumbnail: '/bently.jpg',
    link: '#'
  },
  {
    title: 'gt',
    thumbnail: '/gt.avif',
    link: '#'
  }
]
const Hero = () => {
  return (
    <div id='About'>
      <HeroParallax products={Products}/>
      <Blog />
    </div>
  )
}

export default Hero