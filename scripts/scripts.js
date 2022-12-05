async function handleClick() {
  const form = new FormData();
  form.append('client_id', '');
  form.append('client_secret', '');
  form.append('redirect_uri', 'http://localhost:3000');
  form.append('scope', 'read write follow');
  form.append('grant_type', 'client_credentials');

  const resp = await fetch('https://mastodon.world/oauth/token', {
    method: 'POST',
    body: form
  });

  const body = await resp.json();
  console.log(body);
}

(async function loadPage() {
  const button = document.createElement('button');
  button.textContent = 'Authorize';

  button.addEventListener('click', handleClick);

  document.body.append(button);
}());