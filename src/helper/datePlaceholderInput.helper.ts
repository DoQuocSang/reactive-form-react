type placeholderType = "start" | "end";

export function getDatePlaceholder(type: placeholderType, offset: number) {
  const multiplier = type === "start" ? 1 : -1;

  const today = new Date();
  today.setMonth(today.getMonth() + offset * multiplier);
  return formatDate(today);
}

function formatDate(date: Date): string {
  const dd = date.getDate().toString().padStart(2, "0");
  const mm = (date.getMonth() + 1).toString().padStart(2, "0");
  const yyyy = date.getFullYear();
  console.log(`${dd}/${mm}/${yyyy}`);
  return `${dd}/${mm}/${yyyy}`;
}
