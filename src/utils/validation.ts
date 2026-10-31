export const isRecord = (value: unknown): value is Record<string, unknown> =>
    typeof value === 'object' && value !== null && !Array.isArray(value);

export const isNonEmptyString = (value: unknown): value is string =>
    typeof value === 'string' && value.trim() !== '';

export const isPositiveInteger = (value: unknown): value is number =>
    typeof value === 'number' && Number.isInteger(value) && value > 0;

export const isEmail = (value: unknown): value is string =>
    typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const isOneOf = <T extends string>(
    value: unknown,
    allowed: readonly T[]
): value is T =>
    typeof value === 'string' && (allowed as readonly string[]).includes(value);

// Rechaza campos desconocidos (por ejemplo, un error de digitación como "rool").
export const hasOnlyKeys = (
    value: Record<string, unknown>,
    allowed: readonly string[]
): boolean => Object.keys(value).every((key) => allowed.includes(key));