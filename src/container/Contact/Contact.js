import React from 'react'
import './Contact.scss'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className="container">
      <div className=" row contact-form mt-2 mb-5 pt-2 pb-5">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="app__header-info"
        >
          <form>
            <div className="contact-form-header">
              <h2>
                <span>Sign up for the better to see more</span>
              </h2>
            </div>

            <div className="contact-input-wrapper">
              <input
                type="text"
                className="contact-input contact-input1"
                placeholder="Business Name"
                required
              />
              <input
                type="email"
                className="contact-input contact-input2"
                placeholder="Email"
                required
              />
            </div>
            <div className="contact-btn">
              <div className="btn-wrapper1">
                <button className="contact-btn1">Notify me</button>
              </div>
              <div className="btn-wrapper2">
                <button className="contact-btn2">
                  <a href="#">Sign up as a freelance partner</a>
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
