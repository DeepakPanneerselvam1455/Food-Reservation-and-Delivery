// Database Seeding Script
// This script populates the database with comprehensive menu items

import mongoose from 'mongoose';
import foodModel from '../models/foodModel.js';
import categories from './menuGenerator.js';
import fs from 'fs';
import path from 'path';

// Create simple placeholder images (since we can't generate real images in this environment)
function createPlaceholderImages() {
  const uploadDir = path.join(process.cwd(), 'uploads');
  
  // Ensure upload directory exists
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
  
  const imageMap = {};
  
  Object.keys(categories).forEach(categoryName => {
    categories[categoryName].items.forEach((item, index) => {
      const timestamp = Date.now() + (index * 100); // Ensure unique timestamps
      const filename = `${timestamp}_${categoryName.toLowerCase()}_${index + 1}.png`;
      
      // Create a simple placeholder file
      const placeholderContent = Buffer.from([
        0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, // PNG signature
        ...Array(100).fill(0) // Minimal PNG data
      ]);
      
      const filepath = path.join(uploadDir, filename);
      fs.writeFileSync(filepath, placeholderContent);
      
      // Map original image name to actual filename
      imageMap[item.image] = filename;
    });
  });
  
<<<<<<< HEAD
  return imageMap;
}

// Function to clear existing food items (optional)
async function clearExistingFood() {
  try {
    const deleteResult = await foodModel.deleteMany({});
    console.log(`Cleared ${deleteResult.deletedCount} existing food items`);
  } catch (error) {
    console.error('Error clearing existing food items:', error);
  }
}

// Function to seed the database with menu items
async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding process...');
    
    // Create placeholder images
    console.log('📸 Creating placeholder images...');
    const imageMap = createPlaceholderImages();
    console.log(`✅ Created ${Object.keys(imageMap).length} placeholder images`);
    
    // Optional: Clear existing items (uncomment if you want to start fresh)
    // await clearExistingFood();
    
    const allItems = [];
    let totalItemsCreated = 0;
    
    // Process each category
    for (const categoryName of Object.keys(categories)) {
      console.log(`\n📋 Processing category: ${categoryName}`);
      
      const categoryItems = categories[categoryName].items;
      
      for (let i = 0; i < categoryItems.length; i++) {
        const item = categoryItems[i];
        
        // Get the actual filename for the image
        const actualImageName = imageMap[item.image];
        
        const foodItem = {
          name: item.name,
          description: item.description,
          price: item.price,
          category: categoryName,
          image: actualImageName
        };
        
        allItems.push(foodItem);
      }
      
      console.log(`   ✅ Prepared ${categoryItems.length} items for ${categoryName}`);
    }
    
    // Bulk insert all items
    console.log(`\n💾 Inserting ${allItems.length} items into database...`);
    const insertResult = await foodModel.insertMany(allItems);
    totalItemsCreated = insertResult.length;
    
    console.log(`\n🎉 Database seeding completed successfully!`);
    console.log(`📊 Summary:`);
    
    // Print summary for each category
    Object.keys(categories).forEach(categoryName => {
      const count = categories[categoryName].items.length;
      console.log(`   ${categoryName}: ${count} items`);
    });
    
    console.log(`\n🏆 Total items created: ${totalItemsCreated}`);
    console.log(`📁 Images stored in: ${path.join(process.cwd(), 'uploads')}`);
    
    return {
      success: true,
      totalItems: totalItemsCreated,
      categories: Object.keys(categories),
      message: 'Database seeded successfully with comprehensive menu items'
    };
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    return {
      success: false,
      error: error.message,
      message: 'Failed to seed database'
    };
  }
}

// Function to get seeding statistics
export async function getSeedingStats() {
  try {
    const stats = {};
    
    for (const categoryName of Object.keys(categories)) {
      const count = await foodModel.countDocuments({ category: categoryName });
      stats[categoryName] = count;
    }
    
    const totalCount = await foodModel.countDocuments({});
    
    return {
      categoryStats: stats,
      totalItems: totalCount,
      targetItems: Object.values(categories).reduce((sum, cat) => sum + cat.items.length, 0)
    };
  } catch (error) {
    console.error('Error getting seeding stats:', error);
    return null;
  }
}

// Function to seed specific category
export async function seedCategory(categoryName) {
  if (!categories[categoryName]) {
    throw new Error(`Category '${categoryName}' not found`);
  }
  
  const imageMap = createPlaceholderImages();
  const categoryItems = categories[categoryName].items;
  const items = [];
  
  for (const item of categoryItems) {
    const actualImageName = imageMap[item.image];
    
    items.push({
      name: item.name,
      description: item.description,
      price: item.price,
      category: categoryName,
      image: actualImageName
    });
  }
  
  const result = await foodModel.insertMany(items);
  return {
    category: categoryName,
    itemsCreated: result.length,
    success: true
  };
}

// Main export
export { seedDatabase, clearExistingFood };
export default seedDatabase;
=======
  return imageMap;\n}\n\n// Function to clear existing food items (optional)\nasync function clearExistingFood() {\n  try {\n    const deleteResult = await foodModel.deleteMany({});\n    console.log(`Cleared ${deleteResult.deletedCount} existing food items`);\n  } catch (error) {\n    console.error('Error clearing existing food items:', error);\n  }\n}\n\n// Function to seed the database with menu items\nasync function seedDatabase() {\n  try {\n    console.log('🌱 Starting database seeding process...');\n    \n    // Create placeholder images\n    console.log('📸 Creating placeholder images...');\n    const imageMap = createPlaceholderImages();\n    console.log(`✅ Created ${Object.keys(imageMap).length} placeholder images`);\n    \n    // Optional: Clear existing items (uncomment if you want to start fresh)\n    // await clearExistingFood();\n    \n    const allItems = [];\n    let totalItemsCreated = 0;\n    \n    // Process each category\n    for (const categoryName of Object.keys(categories)) {\n      console.log(`\\n📋 Processing category: ${categoryName}`);\n      \n      const categoryItems = categories[categoryName].items;\n      \n      for (let i = 0; i < categoryItems.length; i++) {\n        const item = categoryItems[i];\n        \n        // Get the actual filename for the image\n        const actualImageName = imageMap[item.image];\n        \n        const foodItem = {\n          name: item.name,\n          description: item.description,\n          price: item.price,\n          category: categoryName,\n          image: actualImageName\n        };\n        \n        allItems.push(foodItem);\n      }\n      \n      console.log(`   ✅ Prepared ${categoryItems.length} items for ${categoryName}`);\n    }\n    \n    // Bulk insert all items\n    console.log(`\\n💾 Inserting ${allItems.length} items into database...`);\n    const insertResult = await foodModel.insertMany(allItems);\n    totalItemsCreated = insertResult.length;\n    \n    console.log(`\\n🎉 Database seeding completed successfully!`);\n    console.log(`📊 Summary:`);\n    \n    // Print summary for each category\n    Object.keys(categories).forEach(categoryName => {\n      const count = categories[categoryName].items.length;\n      console.log(`   ${categoryName}: ${count} items`);\n    });\n    \n    console.log(`\\n🏆 Total items created: ${totalItemsCreated}`);\n    console.log(`📁 Images stored in: ${path.join(process.cwd(), 'uploads')}`);\n    \n    return {\n      success: true,\n      totalItems: totalItemsCreated,\n      categories: Object.keys(categories),\n      message: 'Database seeded successfully with comprehensive menu items'\n    };\n    \n  } catch (error) {\n    console.error('❌ Error seeding database:', error);\n    return {\n      success: false,\n      error: error.message,\n      message: 'Failed to seed database'\n    };\n  }\n}\n\n// Function to get seeding statistics\nexport async function getSeedingStats() {\n  try {\n    const stats = {};\n    \n    for (const categoryName of Object.keys(categories)) {\n      const count = await foodModel.countDocuments({ category: categoryName });\n      stats[categoryName] = count;\n    }\n    \n    const totalCount = await foodModel.countDocuments({});\n    \n    return {\n      categoryStats: stats,\n      totalItems: totalCount,\n      targetItems: Object.values(categories).reduce((sum, cat) => sum + cat.items.length, 0)\n    };\n  } catch (error) {\n    console.error('Error getting seeding stats:', error);\n    return null;\n  }\n}\n\n// Function to seed specific category\nexport async function seedCategory(categoryName) {\n  if (!categories[categoryName]) {\n    throw new Error(`Category '${categoryName}' not found`);\n  }\n  \n  const imageMap = createPlaceholderImages();\n  const categoryItems = categories[categoryName].items;\n  const items = [];\n  \n  for (const item of categoryItems) {\n    const actualImageName = imageMap[item.image];\n    \n    items.push({\n      name: item.name,\n      description: item.description,\n      price: item.price,\n      category: categoryName,\n      image: actualImageName\n    });\n  }\n  \n  const result = await foodModel.insertMany(items);\n  return {\n    category: categoryName,\n    itemsCreated: result.length,\n    success: true\n  };\n}\n\n// Main export\nexport { seedDatabase, clearExistingFood };\nexport default seedDatabase;
>>>>>>> 76fecfb (Initial commit)
