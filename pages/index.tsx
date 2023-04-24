import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
// import Contact from "@/components/Contact";
import { posts } from "@/lib/posts";
import { projects } from "@/lib/projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Temi Alao Portfolio</title>
      </Head>

      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects projects={projects} />
      </section>

      <section id="blog">
        <Blog posts={posts} />
      </section>

      <section id="contact">{/* <Contact /> */}</section>
    </>
  );
}
