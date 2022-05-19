/*
* Broadcast Theme
*
* Use this file to add custom Javascript to Broadcast.  Keeping your custom
* Javascript in this fill will make it easier to update Broadcast. In order
* to use this file you will need to open layout/theme.liquid and uncomment
* the custom.js script import line near the bottom of the file.
*/


(function () {
  // Add custom code below this line

  // Show the spinner on the checkout button when its clicked so the user knows the page is loading
  /** @type {NodeListOf<HTMLButtonElement>} */
  (document.querySelectorAll('button[type="submit"][name="checkout"]')).forEach((btn) => {
    btn.addEventListener('click', function (event) {
      btn.classList.add('product__submit__add');
      btn.textContent = '';
      const svgIcon = createElementFromHTML(/* html */
        `<svg height="18" width="18" class="svg-loader">
          <circle r="7" cx="9" cy="9" />
          <circle stroke-dasharray="87.96459430051421 87.96459430051421" r="7" cx="9" cy="9" />
        </svg>`)
      btn.append(svgIcon);
      btn.classList.add('is-loading');
    });
  })

  // The checkout page is loading very slowly, so we want to prerender it when the cart drawer is opened
  document.addEventListener('jod:theme:cartDrawer:open', function (event) {
    const link = document.createElement('link');
    link.rel = 'prerender';
    link.href = '/checkout';
    link.classList.add('jod-prerender');
    document.body.appendChild(link);
  })



  // ^^ Keep your scripts inside this IIFE function call to
  // avoid leaking your variables into the global scope.
})();

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}
