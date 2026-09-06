/** SDKの世代差をこの部品へ閉じ込めます。404以外は呼び出し側で再送出します。 */
export function isCMSNotFound(error: unknown): boolean {
  if (typeof error === "object" && error !== null && "status" in error) {
    return error.status === 404;
  }
  return error instanceof Error && /^fetch API response status: 404(?:\n|$)/.test(error.message);
}
