(function() {
  Breadcrumbs();
})();

function Breadcrumbs() {
  if (window.innerWidth >= 1025) {
    const elementToMove = document.querySelector('nav.breadcrumbs');
    const referenceElement = document.querySelector('[id*=MainProduct] .product__info-container');
    const parentElement = referenceElement.parentNode;
    parentElement.insertBefore(elementToMove, referenceElement);
  }

  getPastUrls();
}

function getPastUrls() {
const pathname = window.location.pathname;
const getUrls = pathname.split('/')
}

