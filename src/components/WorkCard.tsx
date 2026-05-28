import {
  Grid,
  Box,
  Typography,
  Stack,
  keyframes,
  Chip,
  Link,
} from "@mui/material";
import { useState } from "react";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const WorkCard = ({ project, index }: any) => {
  console.log("project", project)
  const [hovered, setHovered] = useState(false);
  console.log(hovered);
  const handleRedirect = (linkUrl: string) => {
    window.open(`${linkUrl}`, "_blank");
  };
  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        py: 4,
        px: 0,
        borderTop: "0.5px solid #ECECEC",
        cursor: "pointer",
        transition: "background 0.2s",
        animation: `${fadeUp} 0.7s ease ${0.1 + index * 0.1}s both`,
        "&:hover": { backgroundColor: "#F7F6F3" },
        paddingLeft: { xs: 2, md: 3 },
        paddingRight: { xs: 2, md: 3 },
        mx: { xs: -2, md: -3 },
      }}
      onClick={() => handleRedirect(project?.link)}
    >
      <Grid container spacing={2} sx={{ alignItems: "flex-start" }}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack
            spacing={2}
            sx={{ mb: 1, alignItems: "baseline", direction: "row" }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#BBBBBB",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.72rem",
                minWidth: 24,
              }}
            >
              {project.num}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.25rem", md: "1.55rem" },
                color: "#111111",
                lineHeight: 1.2,
              }}
            >
              {project.title}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{
              color: "#888888",
              lineHeight: 1.7,
              ml: "2.5rem",
              fontSize: "0.88rem",
            }}
          >
            {project.desc}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Stack
            sx={{
              ml: { xs: "2.5rem", md: 0 },
              mt: { xs: 1, md: 0.5 },
              flexWrap: "wrap",
              gap: 0.75,
              direction: "row",
            }}
          >
            {project.tags.map((t: any) => (
              <Chip key={t} label={t} size="small" />
            ))}
          </Stack>
        </Grid>
        <Grid
          size={{ xs: 12, md: 2 }}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: { xs: "flex-start", md: "flex-end" },
          }}
        >
          <Box sx={{ ml: { xs: "2.5rem", md: 0 }, mt: { xs: 0.5, md: 0.5 } }}>
            <Typography
              variant="body2"
              sx={{
                color: "#BBBBBB",
                fontSize: "0.72rem",
                fontFamily: "'DM Sans', sans-serif",
                mb: 0.25,
              }}
            >
              {project.year}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#888888",
                fontSize: "0.78rem",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {project.type}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkCard;
