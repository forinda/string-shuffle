"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
/**
 *
 * A function that capitalizes the first letter of a string
 * @param {string} text
 * @returns {string} text
 *
 */
function capitalize(text) {
    return text.charCodeAt(0) > 64 && text.charCodeAt(0) < 97
        ? text
        : text.charAt(0).toLocaleUpperCase() + text.slice(1);
}
exports.capitalize = capitalize;
exports.default = capitalize;
//# sourceMappingURL=capitalize.js.map