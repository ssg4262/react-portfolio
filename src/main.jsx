import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css';
import App from './App.jsx';

// MUI 테마 생성
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // 기본 primary 색상 (파란색)
        },
        secondary: {
            main: '#dc004e', // 기본 secondary 색상 (분홍색)
        },
    },
});

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </StrictMode>,
);
