import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { decodeBytes32String } from '../../scripts/stringToBytes32';
import SendIcon from '@mui/icons-material/Send';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Bytes32ToStringConverter = () => {
    const [inputString, setInputString] = useState('');
    const [convertedString, setConvertedString] = useState('');

    const handleConvert = () => {
        try {
            const result = decodeBytes32String(inputString);
            setConvertedString(result);
        } catch (error) {
            alert(error.message);
        }
    };

    const copyBytes32 = () => {
        try {
            navigator.clipboard.writeText(convertedString)
                .then(() => {
                    alert('Copied to clipboard!');
                })
                .catch(error => {
                    alert('Failed to copy: ' + error.message);
                });
        } catch (error) {
            alert(error.message);
        }
    }
    

    return (
        <Box>
            <TextField
                label="Enter String"
                variant="outlined"
                value={inputString}
                onChange={(e) => setInputString(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained"  onClick={handleConvert} endIcon={<SendIcon />}>
                Convert to String
            </Button>
            {convertedString && (
             <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center", // Vertically align items in the center
                gap: 1, // Creates a small space between text and icon
                marginTop: 2, // Adjust top margin for the entire box
            }}>
                
                <Typography variant="body1">
                    String: {convertedString}
                </Typography>
                <ContentCopyIcon onClick={copyBytes32} style={{ cursor: 'pointer' }}/>
            </Box>
            
            )}
        </Box>
    );
};

export default Bytes32ToStringConverter;
