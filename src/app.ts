// src/app.ts

export function greet(name?: string): string {
  const visitorName = name ?? '✅'; //
  const message = `${visitorName} Babel успішно налаштовано.`;
  console.log(message);
  return message;
}