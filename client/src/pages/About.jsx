import React from 'react'
import Layout from '../components/layout/Layout'

const About = () => {
  return (
    <Layout title={'About us'}>
  <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://img.freepik.com/free-vector/brainstorming-concept-landing-page_52683-26979.jpg?w=740&t=st=1704710632~exp=1704711232~hmac=8f3c13806f9c760e16115f538fbb378792c87d7b5ca4a4adc0ac17efc114a7ee"
            alt="contactus"
           className='images'
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
