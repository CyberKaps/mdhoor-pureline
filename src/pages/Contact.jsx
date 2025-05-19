import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import "../App.css"
import Swal from 'sweetalert2'
import { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm()


  const formRef = useRef([]);

        useEffect(() => {
            gsap.registerPlugin(ScrollTrigger);

            formRef.current.forEach((form, index) => {
                gsap.fromTo(
                    form,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: form,
                            start: "top 80%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });
        }, []);

  const onSubmit = (data) => {
    emailjs
      .send('service_449xg7j', 'template_zpa6wtx', data, 'udF9icTlVc6y1D_de')
      .then(() => {
        Swal.fire({
          title: 'Message Sent!',
          text: 'Thank you for contacting us.',
          icon: 'success',
          confirmButtonColor: '#84cc16',
        })
        reset()
      })
      .catch(() => {
        Swal.fire({
          title: 'Oops!',
          text: 'Something went wrong. Please try again.',
          icon: 'error',
          confirmButtonColor: '#f59e0b',
        })
      })
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 md:px-16 py-16 bg-beige text-olive relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-lime-100 via-yellow-100 to-amber-100" />

      <section className="max-w-4xl mx-auto p-6 space-y-6 bg-white bg-opacity-90 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-olive">Get In Touch</h2>

        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register('name')}
            placeholder="Name"
            className="w-full p-3 border border-olive rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#95be47]"
            required
          />
          <input
            {...register('email')}
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-olive rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#95be47]"
            required
          />
          <input
            {...register('mobile')}
            type="mobile"
            placeholder="Mobile"
            className="w-full p-3 border border-olive rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#95be47]"
            required
          />
          <textarea
            {...register('message')}
            placeholder="Message"
            className="w-full p-3 border border-olive rounded bg-white focus:outline-none focus:ring-2 focus:ring-[#95be47]"
            required
          />
          <button
            type="submit"
            className="bg-[#95be47] text-white font-semibold py-2 px-6 rounded-xl hover:bg-yellow-500 transition"
          >
            Send
          </button>
        </form>

        {/* Contact Info */}
        <div className="pt-6 space-y-2 text-lg raleway">
          <p>
            📞 <a href="tel:+919423041414" className="text-[#95be47] hover:underline">+919423041414</a>
          </p>
          <p>
            ✉️ <a href="mailto:madhoorpureline@gmail.com" className="text-[#95be47] hover:underline">madhoorpureline@gmail.com</a>
          </p>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919423041414"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-[#95be47] hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-xl shadow transition"
          >
            Chat on WhatsApp
          </a>

          {/* Map */}
          <div className="rounded-lg overflow-hidden mt-6 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4311.068134228645!2d75.78789577583099!3d20.852236280753353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd99f0074a40df3%3A0x6da9d81c1ba7e693!2sMadhoor%20Pureline!5e1!3m2!1sen!2sin!4v1747651027759!5m2!1sen!2sin"
              className="w-full h-64 rounded-xl"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </motion.section>



  )
}

export default Contact
