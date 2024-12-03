import vision from "@azure-rest/ai-vision-image-analysis";
const createClient = vision.default;

import { AzureKeyCredential } from "@azure/core-auth";

import {AZURE_COMPUTER_VISION_ENDPOINT, AZURE_COMPUTER_VISION_KEY, AZURE_COMPUTER_VISION_REGION} from "../../config/index.js";

const client = createClient(AZURE_COMPUTER_VISION_ENDPOINT,
    new AzureKeyCredential(AZURE_COMPUTER_VISION_KEY));

/**
 * Получает подпись изображения с помощью Azure Vision Image Analysis REST API.
 * @param {string} url - URL изображения.
 * @returns {Promise<string>} Подпись изображения.
 */
export const getCaptioning = async (url) => {
    try {
        const response = await client.path("/imageanalysis:analyze").post({
            body: { url },
            queryParameters: {
                features: "caption",
            },
        });

        if (response.status !== "200") {
            throw new Error(`Ошибка API: ${response.body.error.message}`);
        }

        console.log("Computer Vision Response: ")
        console.log(response.body)

        const caption = response.body.captionResult?.text;

        if (!caption) {
            throw new Error("Подпись для изображения не найдена.");
        }

        return caption;
    } catch (error) {
        console.error("Ошибка при получении подписи:", error.message);
        throw error;
    }
};
