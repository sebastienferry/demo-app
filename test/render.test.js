import { test } from 'node:test';
import assert from 'node:assert/strict';
import { renderFooter, renderPage } from '../src/render.js';

test('renderPage includes the greeting and the footer', () => {
  const html = renderPage({ greeting: 'Hi there' });
  assert.match(html, /<h1>Hi there<\/h1>/);
  assert.ok(html.includes(renderFooter()));
});

test('renderPage uses the default title', () => {
  assert.match(renderPage(), /<title>demo-app<\/title>/);
});
