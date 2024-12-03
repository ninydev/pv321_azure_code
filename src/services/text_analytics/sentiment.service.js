import {
    AZURE_TEXT_ANALYTIC_ENDPOINT,
    AZURE_TEXT_ANALYTIC_KEY,
    AZURE_TEXT_ANALYTIC_REGION
} from "../../config/index.js";

import { TextAnalysisClient, AzureKeyCredential }  from "@azure/ai-language-text";

const client =
    new TextAnalysisClient(AZURE_TEXT_ANALYTIC_ENDPOINT, new AzureKeyCredential(AZURE_TEXT_ANALYTIC_KEY));


export const getSentiment = async (text) => {
    const result =
        await client.analyze("SentimentAnalysis", [text]);

    if (result.error !== undefined) {

        console.error(result.error);
        throw result.error
    }

    return result;
}