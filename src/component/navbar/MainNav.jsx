import React, { useState, useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(1),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "#000",  // 텍스트 색을 검정으로 설정
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

const MainNav = ({ onScrollToSection }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleMenuOpen = useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleMenuClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    return (
        <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: 'none' }}>
            <Toolbar>
                {/* 로고 */}
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: "none", sm: "block" }, fontWeight: "bold", color: "#000" }}
                >
                    개발자 고승범.이력서
                </Typography>

                {/* 검색창 */}
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon sx={{ color: "#000" }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                    />
                </Search>

                {/* 메뉴 항목 */}
                <Box sx={{
                    display: { xs: "none", sm: "flex" }, // xs(작은 화면)에서는 숨기고, sm(640px 이상)에서는 flex로 보임
                    marginLeft: "auto", 
                    gap: 2 
                }}>
                    <Button
                        sx={{ color: "#000", "&:hover": { color: "#808080" } }}
                        onClick={() => onScrollToSection("experience")}  // 경험 섹션으로 스크롤
                    >
                        프로젝트 경력
                    </Button>
                    <Button
                        sx={{ color: "#000", "&:hover": { color: "#808080" } }}
                        onClick={() => onScrollToSection("certifications")}  // 자격증 섹션으로 스크롤
                    >
                        자격증
                    </Button>
                </Box>

                {/* 모바일 햄버거 메뉴 */}
                <Box sx={{ display: { xs: "flex", md: "none" }, marginLeft: "auto" }}>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        onClick={handleMenuOpen}
                    >
                        <MenuIcon sx={{ color: "#000" }} />
                    </IconButton>
                </Box>

                {/* 드롭다운 메뉴 */}
                <Menu
                    id="menu"
                    anchorEl={anchorEl}
                    open={isMenuOpen}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                >
                    <MenuItem onClick={
                        () => {
                        handleMenuClose()
                        onScrollToSection("experience")
                    }
                    }>프로젝트 경력
                    </MenuItem>
                    <MenuItem onClick={
                        () => {
                            handleMenuClose()
                            onScrollToSection("certifications")
                        }}>자격증</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default MainNav;
