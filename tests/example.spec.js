
import { qase } from 'playwright-qase-reporter';

const { test, expect } = require('@playwright/test');


test('go to saxo', async ({ page }) => {
qase.cases()
await page.goto('https://fr.fr.saxo-sp.test.solvians.com/');



});

test('click on product', async ({ page }) => {
    await page.goto('https://fr.fr.saxo-sp.test.solvians.com/');

    //const product = page.getByText('Produits Saxo')
    await page.click('text=Produits Saxo'); 
    await page.click('text=Sous-Jacent');
    //product.click()
    
    
    
    
    });



