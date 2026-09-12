/**
 * Replaces variables like ${pre}, ${loc}, ${post} in a given template string.
 * @param template - The raw string containing placeholders.
 * @param variables - An object with keys matching the variable names in the template.
 * @returns A formatted string with variables replaced.
 */
export function replaceTemplateVars(template, variables) {
  return template.replace(/\$\{(.*?)\}/g, (_, key) => variables[key] ?? "");
}
