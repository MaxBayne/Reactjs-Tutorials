//Import General React
import * as React from "react";

//Import Routers
import { Routes, Route, Link } from "react-router-dom";

//Import Styles
import "./styles/App.css";
import reactIcon from "@/assets/images/react.svg";

//Import Context (Shared Data Cross Components Contracts)
import { AppThemeContext } from "@/contexts/AppThemeContext.js";

//Import Context Provider (Shared Data Cross Components)
import ProductsProvider from "@/providers/ProductsProvider.jsx";

//Import Material UI Themes
import { styled, useTheme } from "@mui/material/styles";

//Import Material UI Icons
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import StyleIcon from "@mui/icons-material/Style";
import HotTubIcon from "@mui/icons-material/HotTub";
import InventoryIcon from "@mui/icons-material/Inventory";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import WebhookIcon from "@mui/icons-material/Webhook";
import AppsIcon from "@mui/icons-material/Apps";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

//Import Material UI Components
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

//Import Custom Components
import NotFoundComponent from "./components/NotFoundComponent.jsx";
import HomeComponent from "./components/HomeComponent.jsx";
import CssComponent from "./components/CssComponent.jsx";
import JavaScriptComponent from "./components/JavaScriptComponent.jsx";
import ProductsListComponent from "./components/ProductsListComponent.jsx";
import ProductDetailComponent from "./components/ProductDetailComponent.jsx";
import UseStateHookComponent from "./components/UseStateHookComponent.jsx";
import UseStateHookWithFormsComponent from "./components/UseStateHookWithFormsComponent.jsx";
import UseStateHookWithArraysComponent from "./components/UseStateHookWithArraysComponent.jsx";
import RequestLoanFormComponent from "./components/RequestLoanFormComponent.jsx";
import UseContextHookComponent from "./components/UseContextHookComponent.jsx";
import MaterialUIComponent from "./components/MaterialUIComponent.jsx";
import MaterialButtonsComponent from "./components/MaterialButtonsComponent.jsx";
import UserEffectHookComponent from "./components/UseEffectHookComponent.jsx";
import UserMemoHookComponent from "./components/UseMemoHookComponent.jsx";
import UserReducerHookComponent from "./components/UseReducerHookComponent.jsx";
import WeatherComponent from "./components/WeatherComponent.jsx";
import LocalizationComponent from "./components/LocalizationComponent.jsx";
import CounterComponent from "./components/CounterComponent.jsx";
import WeatherWithReduxComponent from "./components/WeatherWithReduxComponent.jsx";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function App() {
  const theme = useTheme();
  const { mode, toggleTheme } = React.useContext(AppThemeContext);
  const [openDrawer, setOpenDrawer] = React.useState(true);
  const [materialUIMenuOpen, setMaterialUIMenuOpen] = React.useState(false);
  const [useStateMenuOpen, setUseStateMenuOpen] = React.useState(false);
  const [useContextMenuOpen, setUseContextMenuOpen] = React.useState(false);
  const [useEffectMenuOpen, setUseEffectMenuOpen] = React.useState(false);
  const [useMemoMenuOpen, setUseMemoMenuOpen] = React.useState(false);
  const [useReducerMenuOpen, setUseReducerMenuOpen] = React.useState(false);
  const [apiMenuOpen, setApiMenuOpen] = React.useState(false);
  const [localizationMenuOpen, setLocalizationMenuOpen] = React.useState(false);
  const [reduxMenuOpen, setReduxMenuOpen] = React.useState(false);  

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* App Bar Start */}
      <>
        <AppBar position="fixed" open={openDrawer}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => {
                setOpenDrawer(true);
              }}
              edge="start"
              sx={[
                {
                  marginRight: 5,
                },
                openDrawer && { display: "none" },
              ]}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ marginRight: 3 }}>
              <img src={reactIcon} alt="React Logo" />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              React App
            </Typography>

            <IconButton onClick={toggleTheme} color="inherit">
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </>
      {/* App Bar End */}

      {/* Sidebar Drawer Start */}
      <>
        <Drawer variant="permanent" open={openDrawer}>
          <DrawerHeader>
            <IconButton
              onClick={() => {
                setOpenDrawer(false);
              }}
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>

          <Divider />

          <List>
            <ListItem key={"Home"} disablePadding sx={{ display: "block" }}>
              {/* home */}
              <ListItemButton
                component={Link}
                to="/"
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  <HomeIcon />
                </ListItemIcon>

                <ListItemText
                  primary="Home"
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                ></ListItemText>
              </ListItemButton>

              {/* css */}
              <ListItemButton
                component={Link}
                to="/css"
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  <StyleIcon />
                </ListItemIcon>

                <ListItemText
                  primary={"Css"}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                ></ListItemText>
              </ListItemButton>

              {/* javascript */}
              <ListItemButton
                component={Link}
                to="/javascript"
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  <HotTubIcon />
                </ListItemIcon>

                <ListItemText
                  primary={"Javascript"}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                ></ListItemText>
              </ListItemButton>

              {/* products */}
              <ListItemButton
                component={Link}
                to="/products"
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  <InventoryIcon />
                </ListItemIcon>

                <ListItemText
                  primary="Products"
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                ></ListItemText>
              </ListItemButton>

              {/* material UI */}
              <ListItemButton
                onClick={() => {
                  setMaterialUIMenuOpen(!materialUIMenuOpen);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    openDrawer
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  <AppsIcon />
                </ListItemIcon>

                <ListItemText
                  primary="Material UI"
                  sx={[
                    openDrawer
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                ></ListItemText>

                <Box
                  sx={[
                    openDrawer
                      ? {
                          opacity: 1,
                          ml: 18,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                >
                  {useStateMenuOpen ? <ExpandLess /> : <ExpandMore />}
                </Box>
              </ListItemButton>
              {/* material UI Sub Menus */}
              <Collapse in={materialUIMenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    component={Link}
                    to="/materialUI"
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                      <LabelImportantIcon />
                    </ListItemIcon>
                    <ListItemText primary="Material UI" />
                  </ListItemButton>
                </List>
              </Collapse>

              {/* useState */}
              <ListItemButton
                onClick={() => {
                  setUseStateMenuOpen(!useStateMenuOpen);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    openDrawer
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  <WebhookIcon />
                </ListItemIcon>

                <ListItemText
                  primary="Hook (useState)"
                  sx={[
                    openDrawer
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                ></ListItemText>

                <Box
                  sx={[
                    openDrawer
                      ? {
                          opacity: 1,
                          ml: 18,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                >
                  {useStateMenuOpen ? <ExpandLess /> : <ExpandMore />}
                </Box>
              </ListItemButton>
              {/* useState Sub Menus */}
              <Collapse in={useStateMenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    component={Link}
                    to="/useState"
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                      <LabelImportantIcon />
                    </ListItemIcon>
                    <ListItemText primary="useState" />
                  </ListItemButton>

                  <ListItemButton
                    component={Link}
                    to="/useState/arrays"
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                      <LabelImportantIcon />
                    </ListItemIcon>
                    <ListItemText primary="With arrays" />
                  </ListItemButton>

                  <ListItemButton
                    component={Link}
                    to="/useState/forms"
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                      <LabelImportantIcon />
                    </ListItemIcon>
                    <ListItemText primary="With Forms" />
                  </ListItemButton>

                  <ListItemButton
                    component={Link}
                    to="/useState/loanForm"
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                      <LabelImportantIcon />
                    </ListItemIcon>
                    <ListItemText primary="Loan Form" />
                  </ListItemButton>
                </List>
              </Collapse>

              {/* useContext */}
              <ListItemButton
                onClick={() => {
                  setUseContextMenuOpen(!useContextMenuOpen);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    openDrawer
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  <WebhookIcon />
                </ListItemIcon>

                <ListItemText
                  primary="Hook (useContext)"
                  sx={[
                    openDrawer
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                ></ListItemText>

                <Box
                  sx={[
                    openDrawer
                      ? {
                          opacity: 1,
                          ml: 18,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                >
                  {useStateMenuOpen ? <ExpandLess /> : <ExpandMore />}
                </Box>
              </ListItemButton>
              {/* useContext Sub Menus */}
              <Collapse in={useContextMenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    component={Link}
                    to="/useContext"
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                      <LabelImportantIcon />
                    </ListItemIcon>
                    <ListItemText primary="UseContext" />
                  </ListItemButton>
                </List>
              </Collapse>

              {/* useEffect */}
              <ListItemButton
                onClick={() => {
                  setUseEffectMenuOpen(!useEffectMenuOpen);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    openDrawer
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  <WebhookIcon />
                </ListItemIcon>

                <ListItemText
                  primary="Hook (useEffect)"
                  sx={[
                    openDrawer
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                ></ListItemText>

                <Box
                  sx={[
                    openDrawer
                      ? {
                          opacity: 1,
                          ml: 18,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                >
                  {useEffectMenuOpen ? <ExpandLess /> : <ExpandMore />}
                </Box>
              </ListItemButton>
              {/* useEffect Sub Menus */}
              <Collapse in={useEffectMenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    component={Link}
                    to="/useEffect"
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                      <LabelImportantIcon />
                    </ListItemIcon>
                    <ListItemText primary="UseEffect" />
                  </ListItemButton>
                </List>
              </Collapse>

              {/* useMemo */}
              <ListItemButton
                onClick={() => {
                  setUseMemoMenuOpen(!useMemoMenuOpen);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    openDrawer
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  <WebhookIcon />
                </ListItemIcon>

                <ListItemText
                  primary="Hook (useMemo)"
                  sx={[
                    openDrawer
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                ></ListItemText>

                <Box
                  sx={[
                    openDrawer
                      ? {
                          opacity: 1,
                          ml: 18,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                >
                  {useMemoMenuOpen ? <ExpandLess /> : <ExpandMore />}
                </Box>
              </ListItemButton>
              {/* useMemo Sub Menus */}
              <Collapse in={useMemoMenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton component={Link} to="/useMemo" sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <LabelImportantIcon />
                    </ListItemIcon>
                    <ListItemText primary="UseMemo" />
                  </ListItemButton>
                </List>
              </Collapse>

              {/* useReducer */}
              <ListItemButton
                onClick={() => {
                  setUseReducerMenuOpen(!useReducerMenuOpen);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    openDrawer
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  <WebhookIcon />
                </ListItemIcon>

                <ListItemText
                  primary="Hook (useReducer)"
                  sx={[
                    openDrawer
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                ></ListItemText>

                <Box
                  sx={[
                    openDrawer
                      ? {
                          opacity: 1,
                          ml: 18,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                >
                  {useReducerMenuOpen ? <ExpandLess /> : <ExpandMore />}
                </Box>
              </ListItemButton>
              {/* useReducer Sub Menus */}
              <Collapse in={useReducerMenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    component={Link}
                    to="/useReducer"
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                      <LabelImportantIcon />
                    </ListItemIcon>
                    <ListItemText primary="UseReducer" />
                  </ListItemButton>

                 
                </List>
              </Collapse>

              {/* api */}
              <ListItemButton
                onClick={() => {
                  setApiMenuOpen(!apiMenuOpen);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    openDrawer
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  <WebhookIcon />
                </ListItemIcon>

                <ListItemText
                  primary="Api (Axios)"
                  sx={[
                    openDrawer
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                ></ListItemText>

                <Box
                  sx={[
                    openDrawer
                      ? {
                          opacity: 1,
                          ml: 18,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                >
                  {apiMenuOpen ? <ExpandLess /> : <ExpandMore />}
                </Box>
              </ListItemButton>
              {/* api Sub Menus */}
              <Collapse in={apiMenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    component={Link}
                    to="/api/weather"
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                      <LabelImportantIcon />
                    </ListItemIcon>
                    <ListItemText primary="Weather" />
                  </ListItemButton>

                 
                </List>
              </Collapse>

              {/* localization */}
              <ListItemButton
                onClick={() => {
                  setLocalizationMenuOpen(!localizationMenuOpen);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    openDrawer
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  <WebhookIcon />
                </ListItemIcon>

                <ListItemText
                  primary="Localization"
                  sx={[
                    openDrawer
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                ></ListItemText>

                <Box
                  sx={[
                    openDrawer
                      ? {
                          opacity: 1,
                          ml: 18,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                >
                  {localizationMenuOpen ? <ExpandLess /> : <ExpandMore />}
                </Box>
              </ListItemButton>
              {/* localization Sub Menus */}
              <Collapse in={localizationMenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    component={Link}
                    to="/localization/i18n"
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                      <LabelImportantIcon />
                    </ListItemIcon>
                    <ListItemText primary="i18n" />
                  </ListItemButton>

                 
                </List>
              </Collapse>


              {/* redux */}
              <ListItemButton
                onClick={() => {
                  setReduxMenuOpen(!reduxMenuOpen);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    openDrawer
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  <WebhookIcon />
                </ListItemIcon>

                <ListItemText
                  primary="Redux (State Mang)"
                  sx={[
                    openDrawer
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                ></ListItemText>

                <Box
                  sx={[
                    openDrawer
                      ? {
                          opacity: 1,
                          ml: 18,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                >
                  {reduxMenuOpen ? <ExpandLess /> : <ExpandMore />}
                </Box>
              </ListItemButton>
              {/* redux Sub Menus */}
              <Collapse in={reduxMenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  
                  <ListItemButton
                    component={Link}
                    to="/redux/counter"
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                      <LabelImportantIcon />
                    </ListItemIcon>
                    <ListItemText primary="counter" />
                  </ListItemButton>

                  <ListItemButton
                    component={Link}
                    to="/redux/weather"
                    sx={{ pl: 4 }}
                  >
                    <ListItemIcon>
                      <LabelImportantIcon />
                    </ListItemIcon>
                    <ListItemText primary="weather" />
                  </ListItemButton>


                 
                </List>
              </Collapse>




            </ListItem>
          </List>
        </Drawer>
      </>
      {/* Sidebar Drawer End */}

      {/* Content Area Start */}
      <>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />

          <Routes>
            <Route path="*" element={<NotFoundComponent />} />

            <Route path="/" element={<HomeComponent />} />
            <Route path="/css" element={<CssComponent />} />
            <Route path="/javascript" element={<JavaScriptComponent />} />

            <Route path="/products">
              <Route
                index
                element={
                  <ProductsProvider>
                    <ProductsListComponent />
                  </ProductsProvider>
                }
              />
              <Route
                path=":id"
                element={
                  <ProductsProvider>
                    <ProductDetailComponent />
                  </ProductsProvider>
                }
              />
            </Route>

            <Route path="/useContext" element={<UseContextHookComponent />} />

            <Route path="/useEffect" element={<UserEffectHookComponent />} />

            <Route path="/useMemo" element={<UserMemoHookComponent />} />

            <Route path="/useReducer" element={<UserReducerHookComponent />} />

            <Route path="/useReducer">
              <Route index element={<UserReducerHookComponent />} />
             
            </Route>

            <Route path="/useState">
              <Route index element={<UseStateHookComponent />} />
              <Route
                path="arrays"
                element={<UseStateHookWithArraysComponent />}
              />
              <Route
                path="forms"
                element={<UseStateHookWithFormsComponent />}
              />
              <Route path="loanForm" element={<RequestLoanFormComponent />} />
            </Route>

            <Route path="/materialUI">
              <Route index element={<MaterialUIComponent />} />
              <Route path="buttons" element={<MaterialButtonsComponent />} />
            </Route>

            <Route path="/api">
              <Route path="weather" element={<WeatherComponent />} />
            </Route>

            <Route path="/localization">
              <Route path="i18n" element={<LocalizationComponent />} />
            </Route>

            <Route path="/redux">
              <Route path="counter" element={<CounterComponent />} />
              <Route path="weather" element={<WeatherWithReduxComponent />} />
            </Route>

          </Routes>
        </Box>
      </>
      {/* Content Area End */}
    </Box>
  );
}
