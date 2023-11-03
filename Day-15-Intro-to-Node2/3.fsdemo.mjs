import {readFile, writeFile} from 'fs/promises';

// console.log(import.meta.url); : import.meta.url gives you path in ES file. because __dirname is not working in ES file.
// console.log(__dirname);

const filepath = new URL('./index.html', import.meta.url);

let data = await readFile(filepath, {encoding: 'utf8'});
console.log(data)

const obj = {
    title : "my custom title",
    body : "this is custom body"
}

for(const[key, value] of Object.entries(obj)){
    data = data.replace(`{${key}}`,value)  // {title}
}

await writeFile(new URL('./index.html',import.meta.url),data);