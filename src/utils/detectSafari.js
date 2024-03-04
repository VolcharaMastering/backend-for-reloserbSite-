export function isSafari() {
  const browser = navigator.userAgent;
  return /^((?!chrome|android).)*safari/i.test(browser);
}
