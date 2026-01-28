import fs from "fs";

export function readCSV(path) {
    if (!fs.existsSync(path)) return [];

    const data = fs.readFileSync(path, "utf8");
    if (!data.trim()) return [];

    const lines = data
        .replace(/\r/g, "") 
        .split("\n")
        .filter(l => l.trim() !== "");

    const headers = lines
        .shift()
        .replace("\ufeff", "")
        .split(";")
        .map(h => h.trim());

    return lines.map(line => {
        const values = line
            .split(";")
            .map(v => v.trim());

        const obj = {};
        headers.forEach((h, i) => {
            obj[h] = values[i];
        });

        return obj;
    });
}



export function appendCSV(path, row) {
    const line = Object.values(row).join(";") + "\n";
    fs.appendFileSync(path, line);
}
