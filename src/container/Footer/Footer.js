import React from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import './Footer.scss'
const Footer = () => {
  return (
    <div>
      <div className="footer1">
        <div className="container">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="app__header-info"
          >
            <div className="row mb-4">
              <div className="col-lg-6 pt-2 text-start">
                <div className=" row logo-container pt-2 pb-2">
                  <img
                    src={images.logo}
                    alt="Rethink logo"
                    className="footer-logo pb-2"
                  />
                </div>
                <div className="row text-container">
                  <div className="col-lg-6 footer-text pt-2">
                    Product by Rethink Media UG Bonn, Germany
                  </div>
                  <div className="col-lg-6 pt-2 footer-text ">
                    <div>Get Early Access</div>
                    <div>Provide Feedback</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pt-2 text-end">
                <div className="social-container pt-2 pb-2">
                  <div>Connect with us</div>
                  <div className="social-icons">
                    <img src={images.facebook} alt="social icon" />
                    <img src={images.twitter} alt="social icon" />
                    <img src={images.instagram} alt="social icon" />
                    <img src={images.linkedin} alt="social icon" />
                    <img src={images.youtube} alt="social icon" />
                    <img src={images.pinterest} alt="social icon" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="footer2">
        <div className="container">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, delayChildren: 1 }}
            className="app__header-img"
          >
            <div className="row">
              <div className="col-lg-6">
                <div>Copyright &copy; 2021 Rethink</div>
              </div>
              <div className="col-lg-6">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Footer
