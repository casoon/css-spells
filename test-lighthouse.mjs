import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

// Starte den http-server für das dist-Verzeichnis
const server = exec('npx http-server dist -p 8080');

async function runLighthouse() {
    const chrome = await launch({ chromeFlags: ['--headless'] });

    const opts = {
        logLevel: 'info',
        output: 'html',
        onlyCategories: ['accessibility'],
        port: chrome.port,
    };

    // Nutze die lokale HTTP-URL für Lighthouse
    const runnerResult = await lighthouse('http://localhost:8080', opts);

    // Speichere den Lighthouse-Report als HTML
    fs.writeFileSync('lighthouse-report.html', runnerResult.report);

    console.log('Lighthouse score:', runnerResult.lhr.categories.accessibility.score * 100);

    await chrome.kill();

    // Beende den http-server nach dem Test
    server.kill();
}

runLighthouse();
