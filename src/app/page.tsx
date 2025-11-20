"use client";
import { Button, Column, Grid } from "@carbon/react";
import {
  LogoGithub,
  LogoLinkedin,
  DocumentDownload,
} from "@carbon/icons-react";
import Image from "next/image";
import ProfilePicture from "/public/static/media/profile-pic.png";
export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        margin: "0 auto",
        maxWidth: "1200px",
      }}
    >
      <Grid>
        <Column
          lg={{ span: 16, offset: 1 }}
          md={8}
          sm={4}
          className="cds--type-center"
        >
          <div
            className="header-container"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(1rem, 3vw, 2rem)",
              justifyContent: "start",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <h1
              className="cds--display-04"
              style={{
                textAlign: "left",
              }}
            >
              Hey there 👋 <br />
              I&apos;m Subhom
            </h1>

            <div
              style={{
                width: "clamp(100px, 20vw, 150px)",
                height: "clamp(100px, 20vw, 150px)",
                borderRadius: "clamp(25px, 5vw, 40px)",
                overflow: "hidden",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <Image
                src={ProfilePicture}
                alt="Profile Picture"
                fill
                style={{
                  objectFit: "cover",
                  transform: "scale(1.8)",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>

          <h3 className="cds--body-02" style={{ marginBottom: "2rem" }}>
            Frontend / Full-Stack Developer | React | NextJs | TypeScript |
            Python | MongoDB | UI/UX Enthusiast
          </h3>
          <p className="cds--body-01" style={{ marginBottom: "3rem" }}>
            Based in Ireland, with 4+ years of experience in web development.
            <br />
            Providing full-stack solutions to businesses and individuals by
            building user-friendly and efficient web applications.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button
              href="https://github.com/Subhom1"
              target="_blank"
              renderIcon={LogoGithub}
              kind="primary"
            >
              Github
            </Button>
            <Button
              href="https://linkedin.com/in/subhom"
              target="_blank"
              renderIcon={LogoLinkedin}
              kind="secondary"
            >
              LinkedIn
            </Button>
            <Button
              href="https://drive.google.com/file/d/1QxajNpRSSxTzmLMXusDjt_iswCG-2S33/view"
              target="_blank"
              renderIcon={DocumentDownload}
              kind="tertiary"
            >
              View My CV
            </Button>
          </div>
        </Column>
      </Grid>
    </main>
  );
}
