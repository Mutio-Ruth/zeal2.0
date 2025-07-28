// src/utils/galleryImages.js

// This function correctly uses require.context to import all modules
const importAllImages = (r) => {
    const modules = {};
    r.keys().forEach(key => {
        // key will be like './IMG-20250708-WA0001.jpg' relative to the context path
        const importedModule = r(key); // This imports the image module

        // Extract base filename from the key for mapping
        // e.g., './IMG-20250708-WA0001.jpg' -> 'IMG-20250708-WA0001'
        const fileNameMatch = key.match(/([^/\\.]+?)\.(jpe?g|png|gif|webp)$/i);
        if (fileNameMatch && fileNameMatch[1]) {
            const baseFileName = fileNameMatch[1];
            // Store the default export of the image module, which Next.js Image needs
            modules[baseFileName] = importedModule.default || importedModule;
        } else {
            console.warn("Could not parse base filename from key:", key);
        }
    });
    console.log("Modules found and mapped by require.context:", Object.keys(modules));
    return modules;
};

// Assuming your images are directly in `src/assets/images/Eric website/`
// This line uses require.context to gather all specified image files
const imageMap = importAllImages(require.context(
    '../assets/images/Eric website/', // Path to the directory containing images
    false, // do not look in subdirectories
    /\.(jpe?g|png|gif|webp)$/i // regex for image files (includes .jpg)
));


// Helper function to get the actual image module for Next.js Image component
// It now expects just the base filename (e.g., "IMG-20250708-WA0001")
export const getGalleryImage = (baseFileName) => {
    const imageModule = imageMap[baseFileName];
    if (!imageModule) {
        console.error(`Image not found in map for key: "${baseFileName}". Check path, filename patterns, and actual files in 'src/assets/images/Eric website/'.`);
        return undefined; // Return undefined if not found
    }
    return imageModule;
};

// Now, generate your project gallery data using the imageMap
// This function can now be synchronous again because getGalleryImage is synchronous
export const generateProjectGallery = () => {
    const gallery = [];
    let count = 1;

    const getFileName = (prefix, num) => `${prefix}${num.toString().padStart(4, '0')}`;

    const addImagesRange = (prefix, start, end) => {
        for (let i = start; i <= end; i++) {
            const baseFileName = getFileName(prefix, i);
            const imageSrc = getGalleryImage(baseFileName); // Synchronous call
            if (imageSrc) {
                gallery.push({
                    Title: `Project ${count++}`,
                    Imagesrc: imageSrc,
                });
            }
        }
    };

    // Call the synchronous addImagesRange helper
    addImagesRange('IMG-20250708-WA', 1, 20);
    addImagesRange('IMG-20250707-WA', 42, 47);
    addImagesRange('IMG-20250708-WA', 47, 71);
    addImagesRange('IMG-20250708-WA', 73, 118);

    console.log("Generated gallery items (should contain image modules):", gallery);
    return gallery;
};