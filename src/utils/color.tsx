export const stringToColor = (str: string): string => {
    let hash: number = str.split("").reduce((acc: number, val: string) => (
        val.charCodeAt(0) + ((acc << 5) - acc)
    ), 0);
    let color: string = "#";
    for (let i = 0; i < 3; i++) {
        let value: number = (hash >> (i * 8)) & 0xFF;
        color += ("00" + value.toString(16)).substr(-2);
    }
    return color;
}

export const hexToRgb = (hex: string): [number, number, number] => {
    // Removing # from the start
    hex = hex.slice(1);

    // Convert 3-digit hex to 6-digit 
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    let r = parseInt(hex.slice(0, 2), 16);
    let g = parseInt(hex.slice(2, 4), 16);
    let b = parseInt(hex.slice(4, 6), 16);

    return [r, g, b];
}

export const getContrastColor = (hex: string): string => {
    let [r, g, b] = hexToRgb(hex);

    return (r * 0.299 + g * 0.587 + b * 0.114) > 186
        ? "#000"
        : "#fff";
}

