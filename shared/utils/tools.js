const formatDate = (input) => {
    if (!input) return '';
    // Replace space with 'T' if needed
    let safeInput = input.replace(' ', 'T');
    let dt = new Date(safeInput);
    if (isNaN(dt)) return '';
    let options = { year: "numeric", month: "long", day: "numeric"};
    return dt.toLocaleDateString("en-GB", options);
}

export { formatDate }