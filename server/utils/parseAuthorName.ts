type ParsedAuthorName = {
    firstName: string;
    lastName: string;
};

function capitalizeToken(token: string): string {
    const lower = token.toLowerCase();
    return lower.replace(/(^|[-'])[a-z]/g, (match) => match.toUpperCase());
}

export function parseAuthorName(fullName: string): ParsedAuthorName {
    const parts = fullName
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .map(capitalizeToken);

    if (parts.length === 0) {
        return {
            firstName: '',
            lastName: ''
        };
    }

    if (parts.length === 1) {
        return {
            firstName: parts[0],
            lastName: ''
        };
    }

    return {
        firstName: parts.slice(0, -1).join(' '),
        lastName: parts[parts.length - 1]
    };
}
