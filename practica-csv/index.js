const fs = require('fs').promises;

/**
 * Asume: separador de columnas = ';', separador de filas = '\n'.
 * NO maneja comillas que contengan comas o saltos de línea.
 */
function parseCSV(csvString, delimiter = ';', rowSep = '\n') {
  // Normaliza saltos de línea por si hay \r\n (Windows)
  const normalized = csvString.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  // Dividir en filas
  const rows = normalized.split(rowSep).filter(r => r.trim() !== '');

  // Primera fila = cabeceras
  const headers = rows.shift().split(delimiter).map(h => h.trim());

  // Resto de filas => objetos
  const data = rows.map(row => {
    const cells = row.split(delimiter).map(c => c.trim());
    const obj = {};
    headers.forEach((header, i) => {
      // Si falta una celda, ponemos null
      obj[header] = cells[i] !== undefined ? autoType(cells[i]) : null;
    });
    return obj;
  });

  return data;
}

// Conversión simple de tipos (opcional)
function autoType(value) {
  if (value === '') return null;
  if (/^-?\d+$/.test(value)) return parseInt(value, 10);
  if (/^-?\d+\.\d+$/.test(value)) return parseFloat(value);
  if (/^(true|false)$/i.test(value)) return value.toLowerCase() === 'true';
  return value;
}

// Ejemplo de uso leyendo un archivo
async function run(path) {
  const csv = await fs.readFile(path, 'utf8');
  const objects = parseCSV(csv);
  console.log(objects);
}

// Llamada de ejemplo 
run('./fictional_characters_db_v2.csv').catch(console.error);
