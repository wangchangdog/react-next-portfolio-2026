import "server-only";
import { createClient } from "microcms-js-sdk";

/** サンプル表示とCMS接続を明示的に区別します。秘密の値は出力しません。 */
export function getMicroCMSClient() {
  const source = process.env.CONTENT_SOURCE ?? "sample";
  if (source === "sample") return null;
  if (source !== "microcms") {
    throw new Error("CONTENT_SOURCEはsampleまたはmicrocmsに設定してください。");
  }
  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN?.trim();
  const apiKey = process.env.MICROCMS_API_KEY?.trim();
  if (!serviceDomain || !apiKey) {
    throw new Error("microCMS接続にはサービスIDとAPIキーの設定が必要です。");
  }
  if (!/^[a-z0-9-]+$/.test(serviceDomain)) {
    throw new Error("サービスIDにはhttps://や.microcms.ioを含めないでください。");
  }
  return createClient({ serviceDomain, apiKey });
}
