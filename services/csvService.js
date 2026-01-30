import fs from 'node:fs'
import * as csv from 'csv/sync';

export function readCSV(data){
    const tartalom = fs.readFileSync(data)

    const feldolgozott = csv.parse(tartalom, {
        delimiter: ';',
        columns: true
    })

    return feldolgozott;
}

export function appendCSV(path, row) {
    const line = Object.values(row).join(";") + "\n";
    fs.appendFileSync(path, line);
}