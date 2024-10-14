import puppeteer from 'puppeteer';
import axeCore from 'axe-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

async function runAccessibilityTests() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Lade die gebaute Seite aus dem dist-Ordner
    await page.goto(`file://${path.resolve('dist/index.html')}`);

    // Hole den Pfad von axe-core basierend auf import.meta.url
    const axeCorePath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'node_modules', 'axe-core', 'axe.min.js');

    // Füge axe-core in die Seite ein
    await page.addScriptTag({ path: axeCorePath });

    // Führe den axe-core Accessibility-Test durch
    const results = await page.evaluate(async () => {
        return await axe.run();
    });

    if (results.violations.length) {
        console.log('Accessibility violations:');
        console.log(results.violations);
    } else {
        console.log('Keine Accessibility-Verstöße gefunden!');
    }

    await browser.close();
}

runAccessibilityTests();
