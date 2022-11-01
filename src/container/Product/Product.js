import React from 'react'
import CardList from './ProductCard'
import { motion } from 'framer-motion'
import './Product.scss'

// import pictures
import { images } from '../../constants'

const Product = () => {
  const data = [
    {
      title: 'MakeAI-assisted Content Choices',
      description:
        "Access and Order from an extensive catalogue in any language and on your budget's terms. If unsure, our AI guides you to the best.",
      imageUrl: images.artificial,
    },
    {
      title: 'Upload and Maintain your Brand Identity',
      description:
        'Add your preferences and brand assets to ensure the contents is consistent with your brand identity. No brand asset? We can make for you!',
      imageUrl: images.group,
    },
    {
      title: 'Be informed as we create',
      description:
        'Your details are translated and sent to the AI, FP, or both per your choice as you relax and receive continuous updates.',
      imageUrl: images.info,
    },
    {
      title: 'Receive and Review',
      description:
        'The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.',
      imageUrl: images.customer,
    },
    {
      title: "Publish and Monitor your contents' progress",
      description:
        'The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.',
      imageUrl: images.human,
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
              <CardList
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

export default Product
