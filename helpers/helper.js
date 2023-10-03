/**
 * Create a function thats return a random unique id;
 */

export const createRandomUniqueId = (length =26) =>{
    // Create a timestamp in milliseconds since the Unix epoch
    const timestamp = (new Date().getTime() / 1000 | 0).toString(16);
  
    // Generate a random 6-character hexadecimal string
    const randomValue = (Math.random() * 0xffffff | 0).toString(16).padStart(6, '0');
  
    // Generate a random 4-character hexadecimal string
    const randomValue2 = (Math.random() * 0xffff | 0).toString(16).padStart(4, '0');
  
    // Generate a random 6-character hexadecimal string
    const randomValue3 = (Math.random() * 0xffffff | 0).toString(16).padStart(6, '0');
  
    // Concatenate the values to create a 24-character string
    const uniqueID = timestamp + randomValue + randomValue2 + randomValue3;
  
    return uniqueID;
}

/**
 * create a slug thats return a name;
 */


export const createSlug = (name) =>{
    
    // convert the product name to lowercase;
    const lowercaseName = name.toLowerCase();

    // remove specail characers and replace them with hyphens;
    const slug = lowercaseName.replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '_');
    return slug;
};


