import { ethers } from "ethers";

export function stringToBytes32(str) {
    // Ensure the input is a string
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string.');
    }



    // Convert the string to bytes32 format
    return ethers.encodeBytes32String(str);
}

export function decodeBytes32String(bytes32) {
    // Check if the input is valid bytes32
    if (!/^0x[0-9a-fA-F]{64}$/.test(bytes32)) {
        throw new Error('Invalid bytes32 format.');
    }

    // Convert bytes32 format back to a string
    return ethers.decodeBytes32String(bytes32);
}
