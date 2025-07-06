const breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];

function div(a: number, b: number) {
  return Math.floor(a / b);
}
function mod(a: number, b: number) {
  return a - div(a, b) * b;
}

export interface JalCalResult {
  leap: number;
  gy: number;
  march: number;
}

export function jalCal(jy: number): JalCalResult {
  let leapJ = -14;
  let jp = breaks[0];
  let jm = 0;
  let jump = 0;
  if (jy < jp || jy >= breaks[breaks.length - 1])
    throw new Error('Invalid Jalali year ' + jy);
  for (let i = 1; i < breaks.length; i++) {
    jm = breaks[i];
    jump = jm - jp;
    if (jy < jm) break;
    leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
    jp = jm;
  }
  let n = jy - jp;
  leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
  if (mod(jump, 33) === 4 && jump - n === 4) leapJ += 1;
  const gy = jy + 621;
  const leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150;
  const march = 20 + leapJ - leapG;
  if (jump - n < 6) n = n - jump + div(jump + 4, 33) * 33;
  const leap = mod(mod(n + 1, 33) - 1, 4);
  return { leap, gy, march };
}

const gDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const jDaysInMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];

function g2d(gy: number, gm: number, gd: number) {
  let d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4);
  d += div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408;
  d -= div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4);
  return d;
}

function d2g(jdn: number) {
  let j = 4 * jdn + 139361631;
  j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908;
  const i = div(mod(j, 1461), 4) * 5 + 308;
  const gd = div(mod(i, 153), 5) + 1;
  const gm = mod(div(i, 153), 12) + 1;
  const gy = div(j, 1461) - 100100 + div(8 - gm, 6);
  return [gy, gm, gd] as const;
}

function j2d(jy: number, jm: number, jd: number) {
  const r = jalCal(jy);
  return g2d(r.gy, 3, r.march) + (jm - 1) * 31 - div(jm, 7) * (jm - 7) + jd - 1;
}

function d2j(jdn: number) {
  const g = d2g(jdn);
  let jy = g[0] - 621;
  const r = jalCal(jy);
  const jdn1f = g2d(g[0], 3, r.march);
  let k = jdn - jdn1f;
  let jm;
  let jd;
  if (k >= 0) {
    if (k <= 185) {
      jm = 1 + div(k, 31);
      jd = mod(k, 31) + 1;
      return [jy, jm, jd] as const;
    } else {
      k -= 186;
      jm = 7 + div(k, 30);
      jd = mod(k, 30) + 1;
      jy += 1;
      return [jy, jm, jd] as const;
    }
  } else {
    jy -= 1;
    k += 179;
    if (r.leap === 1) k += 1;
    jm = 7 + div(k, 30);
    jd = mod(k, 30) + 1;
    return [jy, jm, jd] as const;
  }
}

export function toJalali(date: Date) {
  return d2j(g2d(date.getFullYear(), date.getMonth() + 1, date.getDate()));
}

export function toGregorian(jy: number, jm: number, jd: number) {
  const g = d2g(j2d(jy, jm, jd));
  return new Date(g[0], g[1] - 1, g[2]);
}

export function jMonthLength(jy: number, jm: number) {
  if (jm <= 6) return 31;
  if (jm <= 11) return 30;
  return isLeapJalaaliYear(jy) ? 30 : 29;
}

export function isLeapJalaaliYear(jy: number) {
  return jalCal(jy).leap === 0;
}

export function toEnglishDigits(str: string) {
  const map: Record<string, string> = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
  };
  return str.replace(/[۰-۹]/g, (d) => map[d] ?? d);
}

export function toFarsiDigits(str: string) {
  const map = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return str.replace(/\d/g, (d) => map[parseInt(d, 10)]);
}
