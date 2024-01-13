import React from 'react'
import Layout from '../components/layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"contact us"}>
   <div className="row contactus  ">
        <div className="col-md-6 ">
          <img
            src="https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?w=740&t=st=1704711126~exp=1704711726~hmac=efd17c94e4c9a9ad82e412d521dc89b8b9625bacac8cfe6bf92ffaff7d09b45c"
            alt="contactus"
            className='images'
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
