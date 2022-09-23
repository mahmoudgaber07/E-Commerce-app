import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" component="footer">
        <Toolbar sx={{margin:"auto"}}>
          <Typography
            variant="h6"
            noWrap
            component="p"
            sx={{
              mr: 2,
              display: { xs: "block", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Contact
          </Typography>
          <Link href="/cart">
            <Box component="div">
              <Link href="https://www.linkedin.com/in/mahmoudgaber07/">
              <Tooltip title="Linkedin">
                <IconButton>
                  <LinkedInIcon sx={{color:"white"}}/>
                </IconButton>
              </Tooltip>
              </Link>
              <Link href="https://github.com/mahmoudgaber07">
              <Tooltip title="Github">
                <IconButton>
                  <GitHubIcon sx={{color:"white"}}/>
                </IconButton>
              </Tooltip>
              </Link>
              <Link href="mailto: mahmoudgaber94@gmail.com">
              <Tooltip title="Email">
                <IconButton>
                  <EmailIcon sx={{color:"white"}}/>
                </IconButton>
              </Tooltip>
              </Link>
            </Box>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
