import type { TE } from "./fp";
import { E, pipe, T } from "./fp";
import axios from 'axios'; 
import { AxiosResponse } from "axios";

export type FetchError = {
 type: "FetchError";
 error: Error;
}; 

type SafeResponse =
 | {
      type: "Response";
      res: AxiosResponse;
    }
 | FetchError;

const fetchSafe = async (url: string): Promise<SafeResponse> => {
 try {
   const res = await axios.get(url, { timeout: 52000 });
  return { type: "Response", res };
 } catch (error) {
  if (error instanceof Error) {
   return { type: "FetchError", error };
  } else {
   return { type: "FetchError", error: new Error("Unknown error occured") };
  }
 }
}; 

export const absoluteUrlFromUrl = (domain: string, url: string): string =>
 typeof url === "string" && url.startsWith("https://")
  ? url
  : `${domain}${url}`; 

export type ApiError = {
 code: number;
 error: Error;
 type: "ApiError";
}; 

export type ApiResult<A> = { data: A } | FetchError | ApiError; 

// fetch a JSON API response,a nd return the data, or an error 
export const fetchApiJson = async <A>(apiDomain: string, url: string): Promise<ApiResult<A>> => {
 const absoluteUrl = absoluteUrlFromUrl(apiDomain, url);
   const safeRes = await fetchSafe(absoluteUrl);
  if (safeRes.type === "FetchError") {
   return safeRes;
  }
  const res = safeRes.res;
 try {


  if (res.status === 200) {
   // converted response data into type 'A'
   const body = res.data as A;
   return { data: body };
  }

  // handle non-200 responses
  const body = res.data as { message?: string; msg?: string };
  const message = body?.message || body?.msg;

  if (typeof message === "string") {
   const error = new Error(`failed to fetch ${absoluteUrl}, status: ${res.status}, message: ${message}`);
   return { error, type: "ApiError", code: res.status };
  }

  const error = new Error(
   `failed to fetch ${absoluteUrl}, status: ${res.status}, json body, but no message, logging body.`
  );

  return { error, type: "ApiError", code: res.status };
 } catch (err) { 
  const errMsg = (err as Error).message || "Unknown error"; 
  const errCode = res.status; 

  const apiError = new Error(
   `failed to fetch ${absoluteUrl}, error: ${errMsg}, status: ${errCode}`
  ); 
  return { error: apiError, type: "ApiError", code: res.status }; 
 }
}


export const fetchApiJsonTE = <A>(
  apiDomain: string,
  url: string,
): TE.TaskEither<FetchError | ApiError, A> =>
  pipe(
    () => fetchApiJson<A>(apiDomain, url),
    T.map((apiResult) =>
      "data" in apiResult ? E.right(apiResult.data) : E.left(apiResult),
    ),
  );