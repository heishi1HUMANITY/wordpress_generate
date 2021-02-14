import { createApp } from 'https://servestjs.org/@v1.1.7/mod.ts';
import { exec } from 'https://deno.land/x/exec/mod.ts';

const app = createApp();

app.post('/build', async (req: any) => {
  await exec('npm run generate');
  await req.respond({
    status: 200
  });
});

app.listen({ port: 80 });