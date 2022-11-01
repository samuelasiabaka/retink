import React from 'react'
import { motion } from 'framer-motion'

import './MiddleText.scss'

const MiddleText = () => {
  return (
    <div className="middle-text">
      <div className="container text-center mt-2 mb-3">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="app__header-info"
        >
          <div className="row pt-4 mb-4">
            <h1>Transform your Creation Process</h1>
            <p>
              With a new approach toordering content, you can now stop juggling
              multiple documents and meetings and start publishing content
              faster and on demand
            </p>
          </div>
          <div className="row">
            <h1>Activate your business growth with RetinkContent. </h1>
            <p>
              Save time and maintain your brand identity within your budget
              range or sign up for affordable plans and still access multiple
              content services like:
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MiddleText
