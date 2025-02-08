import { createClient } from 'contentful';
import dotenv from 'dotenv';

import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config({path: "C:/Users/james/Code/KoreanLearningApp/my-app/.env"});

const go = async () => {
  const fetchData = async () => {
    try {
      const client = createClient({
        space: process.env.SPACE_ID,
        environment: 'master', // defaults to 'master' if not set
        accessToken: process.env.CONTENT_DELIVERY_TOKEN
      });

      // Get all published grammar lessons
      const res = await client.getEntries();
      const grammarLessons = res.items;

      // target the grammar directory
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      const customDirectory = path.join(__dirname, '../public/assets/data/grammar');

      // create/update a file in the grammar directory 
      async function createFile(fileName, content) {
          const filePath = path.join(customDirectory, fileName);

          try {
              await fs.mkdir(customDirectory, { recursive: true }); // Ensure directory exists
              await fs.writeFile(filePath, content);
              console.log(`File created successfully at ${filePath}`);
          } catch (err) {
              console.error('Error creating file:', err);
          }
      }

      // read the content of a file in the grammar directory
      async function readFileContent(fileName) {
        try {
            const filePath = path.join(customDirectory, fileName);
            const content = await fs.readFile(filePath, 'utf-8'); // Read file as text
            console.log('File Content:', content);
            return JSON.parse(content);
        } catch (err) {
            console.error('Error reading file:', err);
        }
      }

      // get current content of grammar index.json file
      const currentIndexFileContent = await readFileContent("index.json");

      // loop over the published grammar lessons
      grammarLessons.forEach(grammarLesson => {
        const id = grammarLesson.sys.id;
        const title = grammarLesson.fields.title;
        const slug = grammarLesson.fields.slug;
        const content = JSON.stringify(grammarLesson.fields.content);

        // create/update JSON structure file for grammar lesson
        createFile(`${slug}.json`, content);
        
        // if the specific grammar lesson doesn't exist in the grammar index.json, add it
        if (!currentIndexFileContent.find(obj => obj.id === id)) {
          currentIndexFileContent.push({
            id,
            title,
            slug
          });
        }
      });

      // update the grammar index.json file
      const newIndexFileContent = JSON.stringify(currentIndexFileContent);
      await createFile("index.json", newIndexFileContent);

    } catch (err) {
      console.log(err);
    }
  }
  fetchData();
}

go();