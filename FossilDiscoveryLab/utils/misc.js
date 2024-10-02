import DOMPurify from 'dompurify';

/**
 * Sanitize markup or text when used inside dangerouslySetInnerHTML
 *
 * @param {string} content Plain or HTML string.
 *
 * @return {string} Sanitized string
 */
export const sanitize = (content) => {
  // Directly sanitize content using DOMPurify
  return DOMPurify.sanitize(content);
};

/**
 * Get Singular or plural text.
 *
 * @param {Int} count Count.
 * @param {String} text text.
 *
 * @returns {string} Singular or plural form of text.
 */
export const getSingularOrPluralText = (count, text) => {
  return 1 < count ? `${text}s` : text;
};
