import {styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

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

export default StyledInputBase;