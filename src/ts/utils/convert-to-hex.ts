export const ConvertToHex = function(c: number): number {
    if (c > 9) return c += 65 - 10;
    return c += 48;
};