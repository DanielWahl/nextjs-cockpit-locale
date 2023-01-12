/**
 * Replaces string-line breaks with html-breaks
 * @param str
 */
export const breakText = (str: string) => {
    if (!str) return "";
    return str.replaceAll("\n", "<br />");
};

/**
 * Truncate a string to 200 characters
 * @param str
 */
export const truncateText = (str: string) => {
    if (!str) return "";
    if (str.length < 200) return str;
    return str.substring(0, 200) + "...";
};

/**
 * Truncate a string with a given length
 * @param str
 * @param length
 */
export const truncateTextByLength = (str: string, length: number) => {
    if (!str) return "";
    if (str.length < length) return str;
    return str.substring(0, length) + "...";
};

/**
 * Creates a slug out of a string
 * @param str
 */
export const slugify = (str: string) => {
    if (!str) return "";
    return str
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
};

/**
 * Shortens the wallet address
 * @param str
 */
export const shortenAddress = (str: string) => {
    if (!str) return "";
    let start = str.substring(0, 6);
    let end = str.substring(str.length - 2);
    return start + "..." + end;
};

export const prettifyUnderscoredSlug = (str: string) => {
    if (!str) return "";
    let ar = str.split("_");
    return ar.join(" ");
};
