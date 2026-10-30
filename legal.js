/* Seller details for the legal pages (privacy.html, returns.html) — the one place to fill them in.
   An empty field shows a highlighted "to be filled" mark, so nothing goes out unfinished unnoticed. */
window.EDN_SELLER = {
  name: '',      // e.g. 'ИП Иванова Анна Сергеевна' or 'ООО «Е.Д.Н»'
  inn: '',       // ИНН
  ogrn: '',      // ОГРНИП for a sole trader, ОГРН for a company
  address: '',   // address for letters and returns
  email: '',     // the mailbox orders and requests go to
  phone: '',
  instagram: 'https://www.instagram.com/e.d.n_shop/'
};
document.querySelectorAll('[data-seller]').forEach(el => {
  const v = window.EDN_SELLER[el.dataset.seller];
  if (!v) { el.classList.add('todo'); return; }
  if (el.tagName === 'A') { el.href = el.dataset.seller === 'email' ? 'mailto:' + v : el.dataset.seller === 'phone' ? 'tel:' + v.replace(/[^\d+]/g, '') : v; }
  el.textContent = v;
});
