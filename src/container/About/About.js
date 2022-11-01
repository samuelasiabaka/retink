import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { motion } from 'framer-motion'

import './About.scss'

const About = () => {
  const myVideo = 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
  return (
    <div className="about-body pt-5 pb-3">
      <div className="container video pt-2 pb-3">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="app__header-info"
        >
          <div className="row text-center">
            <h2 className="video-text">Explainer Video</h2>
          </div>
          <div className="row justify-content-center pt-3 pb-3">
            <ReactPlayer
              className="shadow"
              url={myVideo}
              playing={false}
              volume={0.5}
              controls={true}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
