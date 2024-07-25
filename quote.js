import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "quotes.json";
// take in no arguments
//read/parse all quote objects from the quotes.json, defined as fileName
//return an array of all existing quote objects
//function will use fs.readFile to read the contents of the file
//function will be asynchronous so will require try and catch block
export async function getQuotes() {
    try {
        const quotes = await fs.readFile(fileName, "utf8");
        return JSON.parse(quotes);
    } catch (error) {
        console.error(`Error reading file: ${error}`);
};
};

export async function addQuote(quoteText) {

}

export async function getRandomQuote() {

}

export async function editQuote(id, quoteText) {

}

export async function deleteQuote(id) {

}
