import {
    AZURE_TRANSLATION_ENDPOINT,
    AZURE_TRANSLATION_KEY,
    AZURE_TRANSLATION_REGION
} from "../../config/index.js";

export const translation = async (text) => {
    try {
        const response = await fetch(
            `${AZURE_TRANSLATION_ENDPOINT}/translate?api-version=3.0&from=en&to=uk&to=ru`,
            {
                method: "POST",
                headers: {
                    "Ocp-Apim-Subscription-Key": AZURE_TRANSLATION_KEY,
                    "Ocp-Apim-Subscription-Region": AZURE_TRANSLATION_REGION,
                    "Content-type": "application/json",
                },
                body: JSON.stringify([
                    {
                        text: text,
                    },
                ]),
            }
        );

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // Преобразование результата в объект
        const result = data[0].translations.reduce((acc, item) => {
            acc[item.to] = item.text;
            return acc;
        }, {});

        console.log("Formatted response:", result);

        return result;

        return data;
    } catch (error) {
        console.error("Translation error:", error.message);
        throw error;
    }
};
