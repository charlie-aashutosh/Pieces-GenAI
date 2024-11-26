const facts = [
    "I am a passionate educator dedicated to upskilling individuals in my nation.",
    "I love North Indian cuisine and enjoy a variety of rich and flavorful dishes.",
    "At 35, I have accumulated a wealth of knowledge and experience to mentor and guide others.",
    "I appreciate cultural diversity and traditional culinary practices, especially North Indian dishes.",
    "I am committed to playing a role in building and enhancing the capabilities of my nation's workforce."
];

document.getElementById('generateFactBtn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').textContent = facts[randomIndex];
});
