// --- Jannersten Canlı Turnuva Kart Veri Tabanı (v7.30) ---
// Yeni bulduğunuz her kartın düz ve ters kodunu bu listede virgülle ayırarak alt alta ekleyebilirsiniz.

const JANNERSTEN_MAP = {
    // --- MAÇA SERİSİ ---
    "0101001": "Maça 4",
    "1001010": "Maça 4",
    
    "0101100": "Maça 5",
    "0011010": "Maça 5",
    
    "0011100": "Maça 6", // Simetrik kart (Düzü ve tersi aynı)

    // --- SİNEK SERİSİ ---
    "0100111": "Sinek 10",
    "1110010": "Sinek 10",
    
    "0101000": "Sinek 6",
    "0001010": "Sinek 6",
    
    "0100010": "Sinek 5 / Kupa 10", // Jannersten ortak paylaşımlı kod

    // --- KARO SERİSİ ---
    "0101010": "Karo Kız", // Simetrik kart
    
    "0101110": "Karo 4",
    "0111010": "Karo 4",

    // --- KUPA SERİSİ ---
    "0000101": "Kupa Kız",
    "1010000": "Kupa Kız",
    
    "0111100": "Kupa 9",
    "0011110": "Kupa 9"
};
