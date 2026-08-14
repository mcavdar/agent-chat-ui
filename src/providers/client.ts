import { Client } from "@langchain/langgraph-sdk";

export function createClient(
  apiUrl: string,
  apiKey: string | undefined,
  authScheme: string | undefined,
  bearerToken: string | undefined,
) {
  return new Client({
    apiKey,
    apiUrl,
    defaultHeaders: {
      ...(bearerToken && {
        Authorization: `Bearer ${bearerToken}`,
      }),
      ...(authScheme && {
        "X-Auth-Scheme": authScheme,
      }),
    },
  });
}
