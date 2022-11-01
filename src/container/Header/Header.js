import React from 'react'
import { motion } from 'framer-motion'
import './Header.scss'

import { images } from '../../constants'

const Header = () => {
  return (
    <div className="hero pt-2 px-1 py-1">
      <div className="container">
        <div className="row">
          <div className=" col-lg-8 hero-text mt-3 pt-3">
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="app__header-info"
            >
              <div className="row">
                <div className="pb-3">
                  <h1>
                    Get Advanced AI + Expert Created <span>Logos</span>
                  </h1>
                </div>

                <div className="hero-text-p pb-2">
                  <p>
                    Boost your sales <span>10x faster</span> with content
                    customized by our unique partnership of{' '}
                    <span>human creativity and AI optimization</span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="form-div pt-1 pb-1">
                  <form className="my-form">
                    <div>
                      <h4>
                        <span>Sign Up For The BETA!</span>
                      </h4>
                    </div>
                    <div className="wrapper">
                      <input
                        type="text"
                        className=""
                        placeholder="Business Name"
                        required
                      />
                      <span className="span-text">
                        would like a beta invite sent to
                      </span>

                      <input
                        type="email"
                        className=""
                        placeholder="@email address"
                        required
                      />
                      <span className="span-text">when it's ready!</span>
                    </div>
                    <div className="buton-group">
                      <button className="btn1">Notify me</button>
                      <button className="btn2">
                        Sign up as a freelance partner
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-4 avatar-div">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1, delayChildren: 1 }}
              className="app__header-img"
            >
              <img
                src={images.retinkAvatar}
                alt="Rethink avatar"
                className="avatar"
                height="auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
