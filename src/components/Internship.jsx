import { INTERNSHIPS } from "../constants";
import { motion } from "framer-motion";

const Internship = () => {
  return (
    <div
      id="internships"
      className="container mx-auto my-16 px-4 lg:px-0 pt-[80px]" // Adjusted padding-top to ensure visibility
      style={{ paddingTop: 'calc(80px + 1rem)' }} // Adjust padding-top to account for the navbar height
    >
      <motion.h1
        className="my-16 text-center text-5xl font-bold text-purple-200"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        Internships
      </motion.h1>
      <div className="flex flex-col items-center">
        {INTERNSHIPS.map((internship, index) => (
          <motion.div
            key={index}
            className="mb-12 w-full max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-wrap justify-between mb-4">
              <div className="w-full lg:w-1/4 mb-2 lg:mb-0">
                <motion.p
                  className="text-sm text-neutral-400"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {internship.year}
                </motion.p>
              </div>
              <div className="w-full lg:w-3/4">
                <motion.h6
                  className="text-xl font-semibold text-white mb-2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {internship.role}{" "}
                  <span className="text-purple-300">- {internship.company}</span>
                </motion.h6>
                <motion.p
                  className="text-neutral-400 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {internship.description}
                </motion.p>
                <motion.p
                  className="text-sm text-neutral-300 italic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <span className="font-semibold text-purple-200">Technologies:</span>{" "}
                  {internship.technologies.join(", ")}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Internship;
