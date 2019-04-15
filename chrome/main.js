fetch(location.href)
  .then(res => res.text())
  .then(html => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    document.querySelector('.thoracis').innerHTML = doc.querySelector('.thoracis').innerHTML;
    document.querySelectorAll('div').forEach(div => div.style.display = '');
    document.querySelector('.ndPaywall').style.display = 'none';
    document.querySelector('.thoracis').style.display = 'none';
  })
  .catch(e => {
    alert('此頁面無法使用 AppleDailyUnblock');
    console.error(e);
  });
