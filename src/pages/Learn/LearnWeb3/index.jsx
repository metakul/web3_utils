
import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { Helmet } from 'react-helmet-async';

import StringToBytes32Converter from "../../../Components/Card/StringToBytes32Converter"
import Bytes32ToStringConverter from "../../../Components/Card/Bytes32ToStringConverter"


const StringToBytes32 = () => {
    const theme = useTheme()

    const seo = {
        title: "String to Bytes32 Converter",
        description: "Efficiently convert String to Bytes32 and vice versa using our easy-to-use online tool.",
        url: "https://www.metakul.live/metakul/logo/darkLogo.png",
        image: "https://www.metakul.live/metakul/logo/darkLogo.png"
    };

    return  (
        <>
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
        <Container>

                <>
                <Box display={"flex"} justifyContent={"center"}>
                    <Typography variant="h4">
                        String To Bytes32
                    </Typography>
                </Box>

                <Box display={"flex"} justifyContent={"end"} mr={4}>
                    <Link to="/">
                        <img
                            src="assets/exit.svg"
                            alt="Exit Icon"
                            style={{ width: '24px', marginRight: '8px', backgroundColor: "white" }}
                        />
                    </Link>
                </Box>

                <Box display={'flex'} flexDirection={'column'} gap={6}>
                    <StringToBytes32Converter />
                    <Bytes32ToStringConverter />
                </Box>
                </>

            </Container>
        </>

    );
};

export default StringToBytes32;
