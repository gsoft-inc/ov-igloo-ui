export function sanitizeUrl(url: string): string {
  /** A pattern that matches safe URLs. */
  const SAFE_URL_PATTERN =
    /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;

  /** A pattern that matches safe data URLs. */
  const DATA_URL_PATTERN =
    /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  const trimmedUrl = String(url).trim();

  if (trimmedUrl.match(SAFE_URL_PATTERN) || trimmedUrl.match(DATA_URL_PATTERN))
    return trimmedUrl;

  return 'https://';
}

// Source: https://stackoverflow.com/a/8234912/2013580
// eslint-disable-next-line prefer-regex-literals
const urlRegExp = new RegExp(
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/,
);
export function validateUrl(url: string): boolean {
  // TODO: Fix UI for link insertion; it should never
  // default to an invalid URL such as https://.
  // Maybe show a dialog where the user can type the URL before inserting it.
  return url === 'https://' || urlRegExp.test(url);
}
