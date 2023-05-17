import { h, render } from 'preact';
import NostrEmbed from './components/nostrEmbed';

export function init(id, wrapper, relay, showZaps, showCopyNpubNote) {

  if (!relay)
    relay = 'wss://relay.nostr.band/';

  const renderElement = document.querySelector(wrapper)
    ? document.querySelector(wrapper)
    : document.querySelector('body');

  render(h(NostrEmbed, { id, relay, showZaps, showCopyNpubNote }), renderElement);
}
