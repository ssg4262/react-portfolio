import React, { useState, useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SearchBar from "../common/input/SearchBar.jsx";
import SearchIconWrapper from "../common/wrapper/SearchIconWrapper.jsx";
import StyledInputBase from "../common/input/StyledInputBase.jsx";

const MainNav = ({ onScrollToSection }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const [searchText,setSearchText] = useState('')
    const handleMenuOpen = useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleMenuClose = useCallback(() => {
        setAnchorEl(null); // 메뉴 닫기
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
                <SearchBar>
                    <SearchIconWrapper>
                        <SearchIcon sx={{ color: "#000" }} />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </SearchBar>

                {/* 메뉴 항목 */}
                <Box sx={{
                    display: { sm: "flex" },
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
                            handleMenuClose(); // 메뉴 닫기
                            setTimeout(() =>  onScrollToSection("experience"), 100);
                        }
                    }>자기소개
                    </MenuItem>
                    <MenuItem onClick={
                        () => {
                            handleMenuClose(); // 메뉴 닫기
                            setTimeout(() =>  onScrollToSection("certifications"), 100);
                        }}>Blog 게시글</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default MainNav;
