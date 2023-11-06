import { FaUserFriends } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BsBriefcaseFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { motion } from "framer-motion";

const Discover = () => {
  return (
    <div className="mt-10 lg:max-w-7xl lg:mx-auto md:px-44 lg:p-0 mb-16">
      <h1 className="text-3xl font-bold  text-cyan-950 text-center">
      Discover Your Job Journey
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 mt-10 bg-slate-800 p-12 rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex flex-col items-center"
        >
          <div className="text-4xl flex justify-center mb-4 text-white">
            <FaUserFriends />
          </div>
          <h1 className="text-3xl text-center lg:text-start text-gray-200 italic">
            Community Connection
          </h1>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex flex-col items-center"
        >
          <div className="text-4xl flex justify-center mb-4 text-white">
            <RiSecurePaymentFill />
          </div>
          <h1 className="text-3xl text-gray-200 italic text-center lg:text-start">
            Secure Transactions
          </h1>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex flex-col items-center"
        >
          <div className="text-4xl flex justify-center mb-4 text-white">
            <BsBriefcaseFill />
          </div>
          <h1 className="text-3xl text-gray-200 italic text-center lg:text-start">
            Diverse Job Listings
          </h1>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex flex-col items-center"
        >
          <div className="text-4xl flex justify-center mb-4 text-white">
            <AiOutlineGlobal />
          </div>
          <h1 className="text-3xl text-gray-200 italic text-center lg:text-start">
            Global Opportunities
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Discover;
