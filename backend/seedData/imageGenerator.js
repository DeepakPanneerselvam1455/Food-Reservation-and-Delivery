// Food Item Image Generator
// This script creates placeholder food images for all menu items

import fs from 'fs';
import path from 'path';
import { createCanvas } from 'canvas';

// Color schemes for different food categories
const categoryColors = {
  "Salad": {
    primary: "#4CAF50",    // Green
    secondary: "#81C784",  // Light green
    accent: "#2E7D32"      // Dark green
  },
  "Rolls": {
    primary: "#FF9800",    // Orange
    secondary: "#FFB74D",  // Light orange
    accent: "#F57F17"      // Dark orange
  },
  "Deserts": {
    primary: "#E91E63",    // Pink
    secondary: "#F06292",  // Light pink
    accent: "#AD1457"      // Dark pink
  },
  "Sandwich": {
    primary: "#795548",    // Brown
    secondary: "#A1887F",  // Light brown
    accent: "#5D4037"      // Dark brown
  },
  "Cake": {
    primary: "#9C27B0",    // Purple
    secondary: "#BA68C8",  // Light purple
    accent: "#7B1FA2"      // Dark purple
  },
  "Pure Veg": {
    primary: "#8BC34A",    // Light green
    secondary: "#AED581",  // Lighter green
    accent: "#689F38"      // Forest green
  },
  "Pasta": {
    primary: "#FFC107",    // Amber
    secondary: "#FFD54F",  // Light amber
    accent: "#FF8F00"      // Dark amber
  },
  "Noodles": {
    primary: "#FF5722",    // Deep orange
    secondary: "#FF8A65",  // Light deep orange
    accent: "#D84315"      // Dark red-orange
  }
};

// Function to create a food item placeholder image
export function createFoodImage(itemName, category, imageName) {
  const canvas = createCanvas(400, 400);
  const ctx = canvas.getContext('2d');
  
  const colors = categoryColors[category];
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, 400, 400);
  gradient.addColorStop(0, colors.secondary);
  gradient.addColorStop(1, colors.primary);
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 400, 400);
  
  // Add decorative elements
  // Circle pattern
  ctx.fillStyle = colors.accent + '20'; // 20% opacity
  for (let i = 0; i < 10; i++) {
    const x = Math.random() * 400;
    const y = Math.random() * 400;
    const radius = Math.random() * 30 + 10;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  }
  
  // Food category icon area
  ctx.fillStyle = colors.accent + '40';
  ctx.beginPath();
  ctx.arc(200, 150, 80, 0, 2 * Math.PI);
  ctx.fill();
  
  // Category text
  ctx.fillStyle = 'white';
  ctx.font = 'bold 20px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(category.toUpperCase(), 200, 80);
  
  // Food name
  ctx.fillStyle = 'white';
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  
  // Word wrap for long names
  const words = itemName.split(' ');
  let line = '';
  let y = 280;
  
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    
    if (testWidth > 350 && n > 0) {
      ctx.fillText(line, 200, y);
      line = words[n] + ' ';
      y += 25;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, 200, y);
  
  // Price badge
  ctx.fillStyle = colors.accent;
  ctx.beginPath();
  ctx.arc(350, 50, 35, 0, 2 * Math.PI);
  ctx.fill();
  
  ctx.fillStyle = 'white';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('FROM', 350, 45);
  ctx.fillText('$$$', 350, 60);
  
  return canvas;
}

// Create placeholder images for a category
export function createCategoryImages(categoryName, items) {
  const uploadDir = path.join(process.cwd(), 'uploads');
  
  // Ensure upload directory exists
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
  
  items.forEach((item, index) => {
    const canvas = createFoodImage(item.name, categoryName, item.image);
    const buffer = canvas.toBuffer('image/png');
    
    // Create filename based on timestamp and index
    const timestamp = Date.now();
    const filename = `${timestamp}_${categoryName.toLowerCase()}_${index + 1}.png`;
    const filepath = path.join(uploadDir, filename);
    
    fs.writeFileSync(filepath, buffer);
    
    // Update item with actual filename
    item.actualImageName = filename;
  });
}

// Note: Since we can't actually use the canvas library in this environment,
// we'll create a simpler version that just creates text files representing images

export function createSimplePlaceholderImages(categories) {
  const uploadDir = path.join(process.cwd(), 'uploads');
  
  // Ensure upload directory exists
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
  
  Object.keys(categories).forEach(categoryName => {
    categories[categoryName].items.forEach((item, index) => {
      const timestamp = Date.now() + index; // Ensure unique timestamps
      const filename = `${timestamp}_${categoryName.toLowerCase()}_${index + 1}.png`;
      
      // Create a simple text file as placeholder
      const placeholderContent = `PLACEHOLDER IMAGE
Category: ${categoryName}
Item: ${item.name}
Description: ${item.description}
Price: $${item.price}
Filename: ${filename}`;
      
      const filepath = path.join(uploadDir, filename);
      fs.writeFileSync(filepath, placeholderContent, 'utf8');
      
      // Update item with actual filename
      item.actualImageName = filename;
    });
  });
  
  return categories;
}

export default {
  createFoodImage,
  createCategoryImages,
  createSimplePlaceholderImages,
  categoryColors
};
