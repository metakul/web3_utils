import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, TextField, Button, Box, IconButton, Link, useTheme } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { uploadFileToIPFS, uploadJSONToIPFS } from "../../../scripts/IPFS"
import './style.css'
import { Helmet } from 'react-helmet-async';

 const IPFS_UPLOADER = () => {
    const theme = useTheme()
    const [formParams, updateFormParams] = useState({email: '', file: '' });
    const [fileURL, setFileURL] = useState(null);
    const [disableButton, setDisableButton] = useState(true);
    const [message, updateMessage] = useState('');
    const [uploading, setUploading] = useState(false);
    const seo = {
        title: 'Decentralized IPFS File Uploader | Web3 Space',
        description: 'Empower your Web3 journey with our decentralized IPFS file uploader. Secure, private, and innovative file uploading for the decentralized web.',
        image: 'https://www.metakul.live/metakul/nfts/31.png',
        url: 'https://www.metakul.live/metakul/nfts/31.png',
    };
    const handleFileChange = async (e) => {
        console.log("Uploading image to Pinata............ ");
        const file = e.target.files[0];
        try {
            setUploading(true);
            const response = await uploadFileToIPFS(file);
            if (response.success === true) {
                console.log("Uploaded image to Pinata: ", response.pinataURL);
                setFileURL(response.pinataURL);
                setDisableButton(false);
                updateMessage('Uploaded image: ' + file.name);
                setUploading(false);

            }
        } catch (e) {
            console.log("Error during file upload", e);
            setUploading(false);
            updateMessage('');
        }
    };

    async function uploadMetadataToIPFS() {
        const { email,  } = formParams;
   

        try {
            if (  !fileURL) return;

            const nftJSON = {
                email,
                file: fileURL,
            };
            const response = await uploadJSONToIPFS(nftJSON);
            if (response.success === true) {
                setFileURL(response.pinataURL);
                console.log("Uploaded JSON to Pinata: ", response);
                updateMessage('Successfully Submitted your File at ' );
                return response.pinataURL;
            }
        } catch (e) {
            console.log("Error uploading JSON metadata:", e);
            throw e
        }
    }

    async function saveJob(e) {
        e.preventDefault();
        try {
            const metadataURL = await uploadMetadataToIPFS();
            
            console.log("File saved at " + metadataURL);
            setDisableButton(true);
        } catch (e) {
            alert("Upload error" + e);
        }
    }

    return (
        <Container sx={{
        }}>
            <Helmet>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <meta name="image" content={seo.image} />
                <meta property="og:title" content={seo.title} />
                <meta property="og:description" content={seo.description} />
                <meta property="og:image" content={seo.image} />
                <meta property="og:url" content={seo.url} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seo.title} />
                <meta name="twitter:description" content={seo.description} />
                <meta name="twitter:image" content={seo.image} />
            </Helmet>
            <Container sx={{
                mb: 4
            }}>
                <Box sx={{
                    mt: 2
                }}>
                    <Typography variant="h2">IPFS File Uploader</Typography>
                    <Typography variant="body2">For web3 space</Typography>
                    <Typography variant="body2" sx={{ textAlign: 'center', marginTop: 2 }}>
                        {message} {fileURL && (
                        <>
                        <Link href={fileURL} underline="hover">
                        <Typography>{fileURL}</Typography>
</Link>
                        </>
                        )}
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Enter Mail (If encryption needed)"
                            value={formParams.email}
                            onChange={(e) => updateFormParams({ ...formParams, email: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Box display="flex" alignItems="center">
                            <input
                                type="file"
                                style={{ display: 'none' }}
                                id="file-file-input"
                                onChange={handleFileChange}
                                required
                            />
                            <label htmlFor="file-file-input">
                                <IconButton color="primary" component="span">
                                    <AttachFileIcon />
                                </IconButton>
                                Browse *
                            </label>
                            {uploading && (
                               <h3>Uploading...</h3> 
                            )}
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            onClick={saveJob}
                            disabled={disableButton}
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Upload Now
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            
        </Container>
    );
};
export default IPFS_UPLOADER;