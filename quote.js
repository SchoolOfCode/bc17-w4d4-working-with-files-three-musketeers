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
        //read docs for fs and errors
    } catch (TypeError) {
        console.log(TypeError + "oh no what a shame");
    }
}
//function should take in a quoteText string
//create a quote object
//assign unique id with uuid to that object
//read/parse all quote objects from the quotes.json, defined as fileName
//save the newly generated quote object to the quotes.json file at the end of the array.
//return the newly generated quote object

//dummy - didn't see they want us to read the file again and then add stuff to it. - really inefficient, no?
export async function addQuote(quoteText) {
    try {
        // retrieve all existing quotes using getQuotes
        const existingQuotes = await getQuotes();
        //create new quote object
        const newQuote = {
            id: uuidv4(),
            quoteText,
        };
        // add new quote to the array of existing quotes - we can do this because we have read the file and have existing quotes in memory
        existingQuotes.push(newQuote);
        // write the ypdated existing quotes array (with new quote pushed on)
        await fs.writeFile(fileName, JSON.stringify(existingQuotes));
        //return the new quote object, not the whole array
        return newQuote;
    } catch (error) {
        console.error(`Error reading file: ${error}`);
    }
}
//     try {
//         const newQuote = {
//             id: uuidv4(),
//             quoteText,
//         };
//         const addingQuotes = await fs.writeFile(fileName);
//         return addingQuotes
//     }
//     catch (error) {
//         console.error(`Error reading file: ${error}`);
// }
// };

export async function getRandomQuote() {}

export async function editQuote(id, quoteText) {}

export async function deleteQuote(id) {}
