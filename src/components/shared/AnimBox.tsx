// shared/AnimBox.tsx

import { Box } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
`;

interface AnimBoxProps {
  delay?: number;
}

export const AnimBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "delay",
})<AnimBoxProps>(({ delay = 0 }) => ({
  animation: `${fadeUp} 0.7s ease ${delay}s both`,
}));