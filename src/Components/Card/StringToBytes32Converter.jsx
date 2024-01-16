import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { stringToBytes32 } from '../../scripts/stringToBytes32';
import SendIcon from '@mui/icons-material/Send';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const StringToBytes32Converter = () => {
    const [inputString, setInputString] = useState('');
    const [convertedString, setConvertedString] = useState('');

    const handleConvert = () => {
        try {
            const result = stringToBytes32(inputString);
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
            <Button variant="contained" onClick={handleConvert} endIcon={<SendIcon />}>
                Convert to Bytes32
            </Button>
            {convertedString && (
                <Box sx={{
                    display: "flex",
                    flexDirection: "column", // Stack elements in a column
                    alignItems: "flex-start", // Align items to the start of the box
                    gap: 1,
                    marginTop: 2,
                    overflow: 'hidden', // Hide overflow
                    textOverflow: 'ellipsis', // Add ellipsis for overflowed text
                }}>
                    <Typography variant="body1" component="div">
                        Bytes32:
                    </Typography>
                    <Typography variant="body2" component="div" style={{ wordBreak: 'break-all' }}>
                        {convertedString}
                    </Typography>
                    <ContentCopyIcon onClick={copyBytes32} style={{ cursor: 'pointer' }}/>
                </Box>
            )}
        </Box>
    );
};

export default StringToBytes32Converter;
