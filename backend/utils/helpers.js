/**
 * Format date to readable format
 * @param {Date} date - The date to format
 * @returns {String} - Formatted date string
 */
exports.formatDate = (date) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  
  return new Date(date).toLocaleDateString('en-US', options);
};

/**
 * Truncate string to specified length
 * @param {String} str - The string to truncate
 * @param {Number} len - The length to truncate to
 * @returns {String} - Truncated string
 */
exports.truncate = (str, len) => {
  if (str.length > len && str.length > 0) {
    let new_str = str + ' ';
    new_str = str.substr(0, len);
    new_str = str.substr(0, new_str.lastIndexOf(' '));
    new_str = new_str.length > 0 ? new_str : str.substr(0, len);
    return new_str + '...';
  }
  return str;
};

/**
 * Parse query parameters for pagination
 * @param {Object} query - The query object
 * @returns {Object} - Pagination params
 */
exports.getPagination = (query) => {
  const page = parseInt(query.page, 10) || 1;
  const limit = parseInt(query.limit, 10) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return {
    page,
    limit,
    startIndex,
    endIndex
  };
};
