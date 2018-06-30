export const Image = (url, alt) => {
    return `![${alt || "Alt text"}](${url})`;
} 

export const Heading = (text, level) => {
    var prefix = "",
        text = text || "Your awesome heading!",
        level = level || 1; 

    for (let index = 0; index < level; index++) {
        prefix += "#"
    }

    return `${prefix} ${text}`;
}