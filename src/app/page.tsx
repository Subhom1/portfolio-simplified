"use client";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <main
      className="flex items-center justify-center p-3 "
      style={{
        backdropFilter: "blur(16px)",
        background: "rgba(255, 255, 255, 0.5)",
        borderRadius: "0px",
        // boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        height: "100vh",
        width: "100vw",
      }}
    >
      <section className="max-w-3xl mx-auto text-center py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 hover:text-blue-600 transition-colors duration-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I&apos;m Subhom
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 hover:text-gray-800 transition-colors duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Frontend / Full-Stack Developer | React | TypeScript | MongoDB | UI/UX
          Enthusiast
        </motion.p>
        <motion.h3
          className="my-10 text-sm md:text-lg text-gray-600 hover:text-gray-800 transition-colors duration-300 text-left md:text-center px-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
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
          <Button
            variant="outlined"
            href="https://github.com/Subhom1"
            target="_blank"
            sx={{
              transition: "all 0.3s",
              borderColor: "#1f2937",
              color: "#1f2937",
              "&:hover": {
                backgroundColor: "#1f2937",
                color: "#fff",
                borderColor: "#1f2937",
              },
            }}
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            sx={{
              transition: "all 0.3s",
              color: "#0077B5",
              borderColor: "#0077B5",
              "&:hover": { backgroundColor: "#0077B5", color: "#fff" },
            }}
          >
            LinkedIn
          </Button>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
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
