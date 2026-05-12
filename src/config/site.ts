export const site = {
  handle: 'vvlfgng',
  title: 'vvlfgng',
  description: 'The personal website of vvlfgng.',
  url: 'https://vvlfgng.dev',
} as const;

export const nav = [
  { label: 'now', href: '/now' },
  { label: 'contact', href: '/contact' },
] as const;

export type SocialStatus = 'active' | 'reserved';

export interface SocialEntry {
  readonly platform: string;
  readonly handle: string;
  readonly href: string;
  readonly status: SocialStatus;
}

export const social: readonly SocialEntry[] = [
  {
    platform: 'youtube',
    handle: 'v_vlfgng',
    href: 'https://www.youtube.com/@v_vlfgng',
    status: 'reserved',
  },
  {
    platform: 'x',
    handle: 'vvlfgng',
    href: 'https://x.com/vvlfgng',
    status: 'reserved',
  },
  {
    platform: 'github',
    handle: 'vvlfgng',
    href: 'https://github.com/vvlfgng',
    status: 'reserved',
  },
  {
    platform: 'codeberg',
    handle: 'vvlfgng',
    href: 'https://codeberg.org/vvlfgng',
    status: 'reserved',
  },
  {
    platform: 'instagram',
    handle: 'vvlfgng',
    href: 'https://www.instagram.com/vvlfgng/',
    status: 'reserved',
  },
  {
    platform: 'matrix',
    handle: '@vvlfgng:matrix.org',
    href: 'https://matrix.to/#/@vvlfgng:matrix.org',
    status: 'reserved',
  },
  {
    platform: 'bluesky',
    handle: 'vvlfgng',
    href: 'https://bsky.app/profile/vvlfgng.bsky.social',
    status: 'reserved',
  },
  {
    platform: 'itch.io',
    handle: 'vvlfgng',
    href: 'https://vvlfgng.itch.io',
    status: 'reserved',
  },
  {
    platform: 'nostr',
    handle: 'npub1teg…lxk64s',
    href: 'nostr:npub1teg6dfgf84fuy6xukmc7vcec56atcwz3fxgftzmugj5ghtn07cgqlxk64s',
    status: 'reserved',
  },
];
