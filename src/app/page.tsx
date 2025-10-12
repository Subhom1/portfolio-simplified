"use client";
import { motion } from "framer-motion";
import { LinkButton } from "./components/LinkButton";

export default function Home() {
  return (
    <main
      className="flex items-center justify-center p-3 "
      style={{
        backdropFilter: "blur(16px)",
        background: "rgba(255, 255, 255, 0.5)",
        height: "100vh",
        width: "100vw",
      }}
    >
      <section className="max-w-3xl mx-auto text-center py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hey there 👋 <br />
          I&apos;m Subhom
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 hover:text-gray-800 transition-colors duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Frontend / Full-Stack Developer | React | NextJs | TypeScript | MongoDB | UI/UX
          Enthusiast
        </motion.p>
        <motion.h3
          className="my-8 text-sm md:text-lg text-gray-600 hover:text-gray-800 transition-colors duration-300 text-left md:text-center px-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Based in Ireland, with 4+ years of experience in web development.
          <br />
          Passionate about building user-friendly and efficient web
          applications.
        </motion.h3>

        <motion.div
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <LinkButton
            link="https://github.com/Subhom1"
            content="Github"
            color="#1f2937"
          />
          <LinkButton
            link="https://linkedin.com/in/subhom"
            content="LinkedIn"
            color="#0077B5"
          />
          <LinkButton
            link="https://drive.google.com/file/d/13t_4UQ5L0x8usKrFxs9EjL1yX2IbV7QA/view"
            content="View My CV"
            color="#166534"
          />
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        ></motion.div>
      </section>
    </main>
  );
}
