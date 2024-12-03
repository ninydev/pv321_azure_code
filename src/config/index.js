import dotenv from 'dotenv';

// Загружаем переменные из .env файла
dotenv.config();


/**
 *
 */
export const SERVER_NAME = process.env.SERVER_NAME || "Azure Express";
export const SERVER_HOST = process.env.SERVER_HOST || "localhost";
export const SERVER_PORT = process.env.SERVER_PORT || 3000;


/**
 *
 */
export const AZURE_STORAGE_ACCOUNT_NAME = process.env.AZURE_STORAGE_ACCOUNT_NAME || 'pv321';
export const AZURE_STORAGE_ACCOUNT_KEY = process.env.AZURE_STORAGE_ACCOUNT_KEY || null;
export const AZURE_STORAGE_AVATAR_BASKET = process.env.AZURE_STORAGE_AVATAR_BASKET || 'avatars';

/**
 *
 */
export const AZURE_COMPUTER_VISION_ENDPOINT  = process.env.AZURE_COMPUTER_VISION_ENDPOINT || null;
export const AZURE_COMPUTER_VISION_KEY = process.env.AZURE_COMPUTER_VISION_KEY || null;
export const AZURE_COMPUTER_VISION_REGION = process.env.AZURE_COMPUTER_VISION_REGION || 'westus';

/**
 *
 */
export const AZURE_TRANSLATION_ENDPOINT  = process.env.AZURE_TRANSLATION_ENDPOINT || null;
export const AZURE_TRANSLATION_KEY = process.env.AZURE_TRANSLATION_KEY || null;
export const AZURE_TRANSLATION_REGION = process.env.AZURE_TRANSLATION_REGION || 'westus';

/**
 *
 */
export const AZURE_TEXT_ANALYTIC_ENDPOINT  = process.env.AZURE_TEXT_ANALYTIC_ENDPOINT || null;
export const AZURE_TEXT_ANALYTIC_KEY = process.env.AZURE_TEXT_ANALYTIC_KEY || null;
export const AZURE_TEXT_ANALYTIC_REGION = process.env.AZURE_TEXT_ANALYTIC_REGION || 'westus';

/**
 * Настройка папки загрузки файлов
 */
import path from 'path';
import { fileURLToPath } from 'url';
// Получаем текущую директорию проекта
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Настройка пути для загрузки временных файлов
export const UPLOAD_DIR = path.resolve(__dirname, '../../wwwroot/uploads'); // Папка "uploads" в корне проекта
