import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaMap } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiPhoneCallDuotone } from "react-icons/pi";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_gaskfo8",
        "template_s3f9vmp",
        form.current,
        "U-ZJSLrOsP8M6nHvj"
      )
      .then(() => {
        setIsSent(true);
        form.current.reset();
      })
      .catch(() => alert("Failed to send message!"))
      .finally(() => setIsSending(false));
  };

  return (
    <div className="flex flex-col items-center translate-y-[-100%] transition-all duration-500 ease-out animate-[slide-in_1.5s_forwards]">
      <div className="w-[full]  relative h-[10vh] flex justify-center items-center lg:h-[20vh]  ">
        <div className="text-7xl lg:text-9xl font-extrabold text-gray-700">
          CONTACT
        </div>
        <div className="absolute text-4xl lg:text-6xl font-bold">
          GET IN <span className="text-yellow-500 ">TOUCH</span>
        </div>
      </div>

      <div className="w-[100vw] flex justify-center lg:w-[90vw] my-10 p-5">
        <div className="w-[90vw] flex flex-col lg:flex-row items-center gap-8">
          <div className="flex flex-col gap-5 lg:h-[60vh] lg:w-[30vw] translate-x-[-100%]  transition-all duration-500 ease-out animate-[slide-in_2s_forwards]">
            <h2 className="text-3xl font-semibold text-yellow-500 ">
              Don't be shy !
            </h2>

            <div className="text-lg">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </div>

            <div className="flex gap-3">
              <div className="flex justify-center items-center">
                <FaMap size="50px" className="text-yellow-500" />
              </div>
              <div>
                <div className="text-2xl font-medium">ADDRESS POINT</div>
                <div>
                  Jhandichaur west, Kishanpuri, Kotdwara, Uttarakhand, Pin:
                  246149
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex justify-center items-center">
                <MdOutlineAlternateEmail
                  size="50px"
                  className="text-yellow-500"
                />
              </div>
              <div>
                <div className="text-2xl font-medium">MAIL ME</div>
                <div>rawatab2@gmail.com</div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex justify-center items-center">
                <PiPhoneCallDuotone size="50px" className="text-yellow-500" />
              </div>
              <div>
                <div className="text-2xl font-medium">CALL ME</div>
                <div>+91 91491 87519</div>
              </div>
            </div>
          </div>
          <div className="lg:w-[60vw] translate-x-[200%]  transition-all duration-500 ease-out animate-[slide-in_2s_forwards]">
            {isSent ? (
              <div className="text-center py-8">
                <div className="text-green-500 text-2xl mb-2">✓</div>
                <p className="text-xl">Message sent successfully!</p>
                <button
                  onClick={() => setIsSent(false)}
                  className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-6 rounded"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="flex flex-col lg:flex-row gap-3">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-[90vw] lg:w-[30vw] h-[6vh] p-3 rounded-lg bg-gray-900 border border-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-[90vw] lg:w-[29vw] h-[6vh] p-3 rounded-lg bg-gray-900 border border-gray-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-[90vw] lg:w-[60vw] h-[6vh] p-3 rounded-lg bg-gray-900 border border-gray-400"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    className="w-[90vw] lg:w-[60vw] h-[25vh] p-3 rounded-lg bg-gray-900 border border-gray-400"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full py-3 px-4 rounded font-bold transition-colors ${
                    isSending
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-yellow-500 hover:bg-yellow-600 text-black"
                  }`}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
