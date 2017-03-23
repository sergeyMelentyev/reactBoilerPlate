<h1>React Boilerplate</h1>

<div>
  <strong>root.folder</strong>
<ul>
  <li>package.json</li>
  <li>webpack.config.js</li>
  <li>.babalrc</li>
</ul>
</div>

<div>
  <strong>root/src.folder</strong>
  <ul>
  <li>index.js</li>
  <li>lib.js</li>
  <li>data.json</li>
</ul>
</div>

<div>
  <strong>root/dist.folder</strong>
  <ul>
  <li>index.html</li>
</ul>
</div>

<div>
<p>index.html should have containers with defined id tags in order to inject react code, load transpiled script from root/dist/assets.folder</p>
<p>data.json will represent incoming data from server in json formate</p>
<p>lib.js contains react code that handles data from incoming json file. Import statements from React and data.json</p>
<p>export const vars, that contains html-tag name, id, className, and keys from data.json file in order to represent corresponding values.</p>
</div>
