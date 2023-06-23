import { useRef } from "react";
import img from "../../../assets/front2.png";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_23amnwo",
        "template_m2apiek",
        form.current,
        "zZjHD4ypfS5HYVnmf"
      )
      .then(
        (result) => {
          console.log(result.text);

          toast.success("Message sent successfully");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
   
  };

  return (
    <div>
      <div
        id="contactMe"
        className="hero text-white py-20 -mt-20"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="lg:flex-row-reverse">
          <div
            className="text-center w-full"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <h1 className="text-4xl text-grayLight font-bold pb-10">
              Contact Me
            </h1>
          </div>
          <div className="max-w-4xl p-6 mx-auto space-y-6 sm:space-y-12">
            <div className="text-white">
              <form
                ref={form}
                onSubmit={sendEmail}
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 pb-5 text-white">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="user_name"
                    className="input input-ghost sm:max-w-full bg-transparent rounded-none border-gray-500 focus:bg-lightpink focus:text-white w-full"
                  />
                  <input
                    type="text"
                    placeholder="Your Email"
                    name="user_email"
                    className="input input-ghost bg-transparent w-full rounded-none border border-gray-500 focus:bg-lightpink focus:text-white"
                  />
                  <input
                    type="number"
                    placeholder="Your Phone"
                    name="user_phone"
                    className="input input-ghost bg-transparent w-full rounded-none border-gray-500 focus:bg-lightpink focus:text-white"
                  />
                </div>
                <textarea
                  name="message"
                  className="textarea rounded-none textarea-ghost bg-transparent focus:bg-lightpink focus:text-white border-gray-500 w-full h-40"
                  placeholder="Your Message"
                ></textarea>
                <div
                  className="grid justify-center"
                  data-aos="zoom-in"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <input
                    className="btn btn-active rounded-none bg-darkpink text-white mt-8 px-10"
                    type="submit"
                    value="Send Message"
                  />
                </div>
              </form>
              <div
                className="grid text-center lg:grid-cols-3 sm:grid-cols-1 mt-12"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <div>
                  <h2>Email Me</h2>
                  <p className="text-lightBlack">arefinshaon99@gmail.com</p>
                </div>
                <div>
                  <h2>Call me</h2>
                  <p className="text-lightBlack">+8801324219004</p>
                </div>
                <div>
                  <h2>LinkedIn</h2>
                  <p className="text-lightBlack">
                    https://www.linkedin.com/in/arefin-shaon/
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
