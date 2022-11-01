import React from 'react'
import WorkCard from './WorkCard'
import { images } from '../../constants'
import { motion } from 'framer-motion'
import './Work.scss'

const Work = () => {
  const data = [
    {
      title: 'Logos',
      description:
        ' Have a unique & creative logo designed to express and represent your brand identity.',
      imageUrl: images.camera,
    },
    {
      title: 'Blog Writing',
      description:
        ' Write SEO enriched blog posts as long or short articles on any topic of your choice.',
      imageUrl: images.computer,
    },
    {
      title: 'Animated Videos',
      description:
        'Bring animated characters to life to keep your viewers engaged and  entertained.',
      imageUrl: images.phone,
    },
    {
      title: 'Product Demo',
      description:
        'Introduce your product to potential customers in a clear and creative video.',
      imageUrl: images.camera,
    },
    {
      title: 'Copywriting',
      description:
        'Have creative and compelling copies written to boost your product, brand, service or company.',
      imageUrl: images.typewritter,
    },
    {
      title: 'Social Media Ads',
      description:
        'Boost sales and awareness with tailor made ads from experts.',
      imageUrl: images.phone,
    },
  ]

  return (
    <div className="container mb-3">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 1 }}
      >
        <div className="row justify-content-around">
          {data.map((d, index) => (
            <div className="col card-list m-4">
              <WorkCard
                style={{ display: 'inline' }}
                key={d.title + index}
                imgUrl={d.imageUrl}
                title={d.title}
                text={d.description}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Work
