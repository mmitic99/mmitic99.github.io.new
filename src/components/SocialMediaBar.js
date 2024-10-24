import { GitHub, Google, Instagram, LinkedIn } from "@mui/icons-material";
import { ButtonGroup, IconButton, Link } from "@mui/material";
import React from "react";

const githubLink = "https://github.com/mmitic99";
const linkedInLink = "https://www.linkedin.com/in/mihajlomitic/";
const instagramLink = "https://www.instagram.com/mmitic_99/";
const googleLink = "mailto:mihajlomiticmiki@gmail.com";

function SocialMediaBar() {
  return (
    <div
      style={{
        position: "absolute",
        top: "40vh",
        left: 0,
      }}
    >
      <ButtonGroup orientation="vertical">
        <IconButton component={Link} href={githubLink} target="_blank">
          <GitHub fontSize="small"></GitHub>
        </IconButton>
        <IconButton component={Link} href={linkedInLink} target="_blank">
          <LinkedIn fontSize="small"></LinkedIn>
        </IconButton>
        <IconButton component={Link} href={instagramLink} target="_blank">
          <Instagram fontSize="small"></Instagram>
        </IconButton>
        <IconButton component={Link} href={googleLink} target="_blank">
          <Google fontSize="small"></Google>
        </IconButton>
      </ButtonGroup>
    </div>
  );
}
export default SocialMediaBar;
