const fs = require('fs');
const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = crypto.scryptSync('MiClaveSecreta', 'salt', 32);

/**
 * Cifra un texto en AES-256-CBC
 */
function encrypt(text) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8');
    encrypted = Buffer.concat([encrypted, cipher.final()]);

    // Devolvemos en JSON para guardar
    return JSON.stringify({
        iv: iv.toString('hex'),
        data: encrypted.toString('hex')
    });
}

/**
 * Descifra un texto en AES-256-CBC
 */
function decrypt(jsonString) {
    const payload = JSON.parse(jsonString);
    const ivBuffer = Buffer.from(payload.iv, 'hex');
    const encryptedText = Buffer.from(payload.data, 'hex');

    const decipher = crypto.createDecipheriv(algorithm, key, ivBuffer);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString('utf8');
}

/**
 * Encripta el contenido de un archivo y sobrescribe el archivo.
 */
function encryptFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const encryptedContent = encrypt(content);
    fs.writeFileSync(filePath, encryptedContent, 'utf8');
    console.log(`Archivo "${filePath}" encriptado ✅`);
}

/**
 * Desencripta el contenido de un archivo y sobrescribe el archivo.
 */
function decryptFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const decryptedContent = decrypt(content);
    fs.writeFileSync(filePath, decryptedContent, 'utf8');
    console.log(`Archivo "${filePath}" desencriptado ✅`);
}

// ----------------------
// Ejemplo de uso:
// ----------------------

const file = 'text_file.txt';

// Encriptar el archivo
encryptFile(file);

// Desencriptar el archivo
// (ejecutar esta línea después de encriptar)
decryptFile(file);
