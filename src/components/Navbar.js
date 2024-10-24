import {
  AppBar,
  Button,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Contrast } from "@mui/icons-material";
import { fullScreen, smallScreen } from "./common/const";

const NavbarButton = styled(Button)({
  textTransform: "none",
  fontSize: 14,
});

const navElements = [
  "Home",
  "Education",
  "Experience",
  "Projects",
  "Skills",
  "About",
  "Contact",
];

function Navbar({ handleThemeClick }) {
  const small = useMediaQuery(smallScreen);
  const full = useMediaQuery(fullScreen);

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        {small && (
          <>
            <List
              sx={{
                width: "100%",
                maxHeight: "200px",
                overflow: "auto",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              <ListItem disableGutters disablePadding>
                <Typography
                  variant="h6"
                  sx={{
                    flexGrow: 1,
                    textDecoration: "none",
                    boxShadow: "none",
                    color: "inherit",
                  }}
                  component={Link}
                  to="/"
                >
                  Mihajlo Mitić
                </Typography>
                <ListItemButton
                  disableGutters
                  edge="end"
                  onClick={handleClick}
                  color="inherit"
                  sx={{ maxWidth: "25px", pr: "50px" }}
                >
                  <MenuIcon fontSize="medium" />
                </ListItemButton>
                <ListItemButton
                  disableGutters
                  edge="end"
                  color="inherit"
                  onClick={handleThemeClick}
                  sx={{ maxWidth: "25px" }}
                >
                  <Contrast fontSize="small"></Contrast>
                </ListItemButton>
              </ListItem>
              <ListItem disableGutters disablePadding>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List>
                    {navElements.map((el) => (
                      <ListItem key={el} disablePadding>
                        {el == "Home" ? (
                          <ListItemButton
                            sx={{ maxHeight: "2em" }}
                            color="inherit"
                            component={Link}
                            to="/"
                            onClick={handleClick}
                          >
                            {el}
                          </ListItemButton>
                        ) : (
                          <ListItemButton
                            sx={{ maxHeight: "2em" }}
                            color="inherit"
                            component={Link}
                            to={"/" + el.toLowerCase()}
                            onClick={handleClick}
                          >
                            {el}
                          </ListItemButton>
                        )}
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </ListItem>
            </List>
          </>
        )}

        {full && (
          <>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                boxShadow: "none",
                color: "inherit",
              }}
              component={Link}
              to="/"
            >
              Mihajlo Mitić
            </Typography>

            {navElements.map((el) =>
              el == "Home" ? (
                <NavbarButton color="inherit" component={Link} to="/">
                  {el}
                </NavbarButton>
              ) : (
                <NavbarButton
                  color="inherit"
                  component={Link}
                  to={"/" + el.toLowerCase()}
                >
                  {el}
                </NavbarButton>
              )
            )}
            <IconButton color="inherit" onClick={handleThemeClick}>
              <Contrast fontSize="small"></Contrast>
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
