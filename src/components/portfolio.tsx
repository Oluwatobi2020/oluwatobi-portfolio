import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Chip,
  Divider,
  Link,
  Stack,
} from "@mui/material";
import { keyframes } from "@mui/material/styles";
import { NavLink } from "./shared/NavLink";
import { AnimBox } from "./shared/AnimBox";
import { projects, skills } from "./shared/sampleData";
import WorkCard from "./WorkCard";
import dayjs from "dayjs";

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://fonts.googleapis.com";
    document.head.appendChild(link);
    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href =
      "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap";
    document.head.appendChild(link2);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setCursorVisible(false), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      {/* NAV */}
      <Box
        component="nav"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor:
            scrollY > 40 ? "rgba(255,255,255,0.92)" : "transparent",
          backdropFilter: scrollY > 40 ? "blur(12px)" : "none",
          transition: "background 0.3s, backdrop-filter 0.3s",
          borderBottom: scrollY > 40 ? "0.5px solid #ECECEC" : "none",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            py: 2.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "1.05rem",
              letterSpacing: "-0.01em",
              color: "#111",
            }}
          >
            Oluwatobi Ojedeji
          </Typography>
          <Stack
            direction="row"
            spacing={4}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {["Work", "About", "Process", "Contact"].map((n) => (
              <NavLink key={n} href={`#${n.toLowerCase()}`}>
                {n}
              </NavLink>
            ))}
          </Stack>
          <Button variant="outlined" size="small" href="#contact">
            Hire me
          </Button>
        </Container>
      </Box>

      {/* HERO */}
      <Box
        id="hero"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          pt: 10,
          pb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <AnimBox delay={0}>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.78rem",
                    letterSpacing: "0.14em",
                    color: "#AAAAAA",
                    mb: 3,
                    textTransform: "uppercase",
                  }}
                >
                  Designer & Developer — Available for freelance
                </Typography>
              </AnimBox>
              <AnimBox delay={0.1}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "3rem", sm: "4.5rem", md: "6rem" },
                    lineHeight: 1.0,
                    mb: 3,
                  }}
                >
                  Crafting digital
                  <br />
                  <Box
                    component="span"
                    sx={{ fontStyle: "italic", color: "#888888" }}
                  >
                    experiences
                  </Box>{" "}
                  that
                  <br />
                  leave a mark
                </Typography>
              </AnimBox>
              <AnimBox delay={0.25}>
                <Stack sx={{ mt: 4, flexWrap: "wrap", gap: 2 }}>
                  <Button variant="contained" size="large" href="#work">
                    View my work
                  </Button>
                  <Button variant="outlined" size="large" href="#about">
                    About me
                  </Button>
                </Stack>
              </AnimBox>
            </Grid>
            <Grid
              size={{ xs: 12, md: 4 }}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <AnimBox delay={0.35}>
                <Box
                  sx={{
                    width: 280,
                    height: 360,
                    backgroundColor: "#F0EDE8",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                      width: 160,
                      height: 160,
                      borderRadius: "50%",
                      backgroundColor: "#E0DBD4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: "4rem",
                        color: "#CCC9C2",
                      }}
                    >
                      O
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 20,
                      left: 0,
                      right: 0,
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.72rem",
                        color: "#AAAAAA",
                        fontFamily: "'DM Sans', sans-serif",
                        letterSpacing: "0.08em",
                      }}
                    >
                      Based in Lagos State, Nigeria
                    </Typography>
                  </Box>
                </Box>
              </AnimBox>
            </Grid>
          </Grid>

          {/* Stats row */}
          <AnimBox delay={0.45}>
            <Divider sx={{ mt: 8, mb: 4 }} />
            <Grid container spacing={2}>
              {[
                ["5+", "Years of experience"],
                ["20", "Projects delivered"],
                ["10", "Happy clients"],
              ].map(([n, l]) => (
                <Grid sx={{ xs: 6, md: 3 }} key={l}>
                  <Typography
                    sx={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: "2.2rem",
                      color: "#111",
                      lineHeight: 1.1,
                    }}
                  >
                    {n}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#AAAAAA",
                      fontSize: "0.78rem",
                      letterSpacing: "0.04em",
                      mt: 0.5,
                    }}
                  >
                    {l}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </AnimBox>
        </Container>
      </Box>

      {/* WORK */}
      <Box id="work" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#FFFFFF" }}>
        <Container maxWidth="lg">
          <AnimBox delay={0}>
            <Stack
              sx={{ display: "flex", justifyContent: "space-between", mb: 6 }}
            >
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: "2rem", md: "2.8rem" } }}
              >
                Selected Work
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#AAAAAA",
                  fontSize: "0.78rem",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                2021 – 2026
              </Typography>
            </Stack>
          </AnimBox>
          {projects.map((p, i) => (
            <WorkCard key={p.num} project={p} index={i} />
          ))}
          <Box sx={{ borderTop: "0.5px solid #ECECEC" }} />
        </Container>
      </Box>

      {/* ABOUT */}
      <Box
        id="about"
        sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#F7F6F3" }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={{ xs: 4, md: 10 }}
            sx={{ alignItems: "flex-start" }}
          >
            <Grid size={{ xs: 12, md: 5 }}>
              <AnimBox delay={0}>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.78rem",
                    letterSpacing: "0.14em",
                    color: "#AAAAAA",
                    mb: 2,
                    textTransform: "uppercase",
                  }}
                >
                  About
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2rem", md: "2.6rem" },
                    mb: 3,
                    lineHeight: 1.15,
                  }}
                >
                  Obsessed with the intersection of form & function
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#666666",
                    lineHeight: 1.85,
                    mb: 2.5,
                    fontSize: "0.92rem",
                  }}
                >
                  I'm a product designer and frontend developer with 5+ years
                  building digital products for financial institutions and
                  fintech companies. I believe great design is invisible — it
                  should feel effortless to the people using it.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#666666",
                    lineHeight: 1.85,
                    fontSize: "0.92rem",
                  }}
                >
                  When I'm not pushing pixels or writing code, you'll find me
                  listening to music, meditation, or reading about cognitive
                  psychology.
                </Typography>
                <Stack spacing={2} sx={{ mt: 4 }}>
                  <Button variant="contained" href="#contact">
                    Get in touch
                  </Button>
                  <Button
                    variant="outlined"
                    component="a"
                    href="/resume.pdf"
                    target="_blank"
                  >
                    Download CV
                  </Button>
                </Stack>
              </AnimBox>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <AnimBox delay={0.15}>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.72rem",
                    letterSpacing: "0.14em",
                    color: "#AAAAAA",
                    mb: 2.5,
                    textTransform: "uppercase",
                  }}
                >
                  Tools & Skills
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {skills.map((s) => (
                    <Chip
                      key={s}
                      label={s}
                      sx={{ fontSize: "0.8rem", px: 0.5, py: 2.25 }}
                    />
                  ))}
                </Box>
                <Divider sx={{ my: 4 }} />
                <Grid container spacing={3}>
                  {[
                    {
                      label: "Education",
                      val: "BSc. Fisheries Management",
                    },
                    {
                      label: "Currently at",
                      val: "CoralPay Technology",
                    },
                    {
                      label: "Languages",
                      val: "English (native)",
                    },
                  ].map(({ label, val }) => (
                    <Grid size={{ xs: 12, sm: 4 }} key={label}>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "0.72rem",
                          letterSpacing: "0.1em",
                          color: "#AAAAAA",
                          textTransform: "uppercase",
                          mb: 1,
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        {label}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#444444",
                          fontSize: "0.85rem",
                          lineHeight: 1.6,
                          fontFamily: "'DM Sans', sans-serif",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {val}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </AnimBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* PROCESS */}
      <Box
        id="process"
        sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#FFFFFF" }}
      >
        <Container maxWidth="lg">
          <AnimBox delay={0}>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.78rem",
                letterSpacing: "0.14em",
                color: "#AAAAAA",
                mb: 2,
                textTransform: "uppercase",
              }}
            >
              How I work
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, mb: 8 }}
            >
              My process
            </Typography>
          </AnimBox>
          <Grid container spacing={4}>
            {[
              {
                n: "01",
                title: "Discover",
                body: "Deep-dive into your users, business goals, and technical constraints. I ask a lot of questions — then I listen.",
              },
              {
                n: "02",
                title: "Define",
                body: "Synthesize research into clear problem statements and success metrics. No ambiguity allowed before design begins.",
              },
              {
                n: "03",
                title: "Design",
                body: "From rough sketches to polished high-fidelity prototypes. I iterate fast and test early.",
              },
              {
                n: "04",
                title: "Deliver",
                body: "Pixel-perfect implementation or handoff-ready assets — whichever serves the team better.",
              },
            ].map((step, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={step.n}>
                <AnimBox delay={i * 0.1}>
                  <Box
                    sx={{
                      height: "100%",
                      p: 3.5,
                      border: "0.5px solid #ECECEC",
                      transition: "border-color 0.2s, background 0.2s",
                      "&:hover": {
                        borderColor: "#111111",
                        backgroundColor: "#FAFAFA",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: "2.5rem",
                        color: "#E8E5E0",
                        lineHeight: 1,
                        mb: 3,
                      }}
                    >
                      {step.n}
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{ fontSize: "1.15rem", mb: 1.5, color: "#111" }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#888888",
                        lineHeight: 1.75,
                        fontSize: "0.85rem",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {step.body}
                    </Typography>
                  </Box>
                </AnimBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CONTACT CTA */}
      <Box
        id="contact"
        sx={{ py: { xs: 8, md: 14 }, backgroundColor: "#111111" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <AnimBox delay={0}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2.2rem", md: "3.5rem" },
                    color: "#FFFFFF",
                    lineHeight: 1.1,
                    mb: 2,
                  }}
                >
                  Got a project in mind?{" "}
                  <Box
                    component="span"
                    sx={{ fontStyle: "italic", color: "#888888" }}
                  >
                    Let's talk.
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#888888",
                    fontSize: "0.92rem",
                    lineHeight: 1.75,
                  }}
                >
                  I'm currently available for freelance projects and full-time
                  opportunities. I'd love to hear about what you're building.
                </Typography>
              </AnimBox>
            </Grid>
            <Grid
              size={{ xs: 12, md: 4 }}
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "flex-end" },
                alignItems: "center",
              }}
            >
              <AnimBox delay={0.15}>
                <Stack spacing={2}>
                  <Button
                    variant="outlined"
                    size="large"
                    href="mailto:ojedejitobi2020@gmail.com"
                    sx={{
                      borderColor: "#FFFFFF",
                      color: "#FFFFFF",
                      "&:hover": {
                        backgroundColor: "#FFFFFF",
                        color: "#111111",
                        borderColor: "#FFFFFF",
                      },
                    }}
                  >
                    Send an email
                  </Button>
                  <Stack spacing={2} sx={{ justifyContent: "center" }}>
                    {[
                      { label: "LinkedIn", href: "https://www.linkedin.com/in/ojedeji-oluwatobi-samuel-882588a6" },
                      { label: "GitHub", href: "https://github.com/Oluwatobi2020" },
                      { label: "Twitter", href: "https://x.com/OjedejiOlu34739" },
                    ].map((s) => (
                      <Link
                        key={s.label}
                        href={s.href}
                        sx={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.75rem",
                          color: "#666666",
                          textDecoration: "none",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          "&:hover": { color: "#FFFFFF" },
                          transition: "color 0.2s",
                        }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </Stack>
                </Stack>
              </AnimBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box
        sx={{
          py: 3,
          borderTop: "0.5px solid #2A2A2A",
          backgroundColor: "#111111",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            spacing={1}
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              direction: { xs: "column", sm: "row" },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#555555",
                fontSize: "0.75rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {` © ${dayjs().format("YYYY")} Oluwatobi Ojedeji. All rights reserved.`}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#555555",
                fontSize: "0.75rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Designed & built with care in Lagos State, Nigeria.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default Portfolio;
