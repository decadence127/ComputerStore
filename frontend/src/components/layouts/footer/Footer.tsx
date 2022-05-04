/** @jsxImportSource @emotion/react */
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import logo from "../../../assets/logo512.me.png";
import { HOME_ROUTE } from "../../../utils/constants/routeNames";
import styles from "./styles";

interface FooterProps {}

function CopyrightLogo() {
  const navigate = useNavigate();

  const returnHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    navigate(HOME_ROUTE);
  };

  return (
    <Box css={styles.flexColumn}>
      <Box
        onClick={returnHandler}
        component="img"
        src={logo}
        css={styles.imgBoxStyles}
      />
      <Typography
        css={styles.copyrightTypographyStyles}
        color="rgb(196, 196, 196)"
        variant="caption"
      >
        {"Copyright © "}
        <Link color="rgb(196, 196, 196)" target="_blank" href="_">
          Computer.me
        </Link>{" "}
        {`${new Date().getFullYear()}.`}
      </Typography>
    </Box>
  );
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Box bgcolor="rgb(34, 34, 34)" css={styles.footerStyles} component="footer">
      <CopyrightLogo />

      <Container maxWidth="md">
        <Box css={styles.contactsInfoWrapperStyles}>
          <Box css={styles.socialIconsWrapperStyles}>
            <Box display="flex" justifyContent="space-around">
              <Box mr={3} ml={3}>
                <IconButton target="_blank" href="_">
                  <LinkedIn
                    fontSize="large"
                    css={styles.iconStyles}
                    color="primary"
                  />
                </IconButton>
              </Box>
              <Box mr={3} ml={3}>
                <IconButton target="_blank" href="_">
                  <Facebook
                    fontSize="large"
                    css={styles.iconStyles}
                    color="primary"
                  />
                </IconButton>
              </Box>
              <Box mr={3} ml={3}>
                <IconButton target="_blank" href="_">
                  <Twitter
                    css={styles.iconStyles}
                    fontSize="large"
                    color="primary"
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Footer;
