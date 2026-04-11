// Load header
fetch('header.html')
.then(response => response.text())
.then(data => {
  document.getElementById('header').innerHTML = data;
});

// Load footer
fetch('footer.html')
.then(response => response.text())
.then(data => {
  document.getElementById('footer').innerHTML = data;
});

// Get current page name from URL
const pageName = window.location.pathname.split('/').pop() || 'index.html';

// Load page content
fetch(pageName)
.then(response => response.text())
.then(data => {
  // Extract just the content (between body tags or main content)
  const parser = new DOMParser();
  const doc = parser.parseFromString(data, 'text/html');
  const content = doc.body.innerHTML;
  document.getElementById('app').innerHTML = content;
})
.catch(error => {
  document.getElementById('app').innerHTML = '<p>Page not found</p>';
});
