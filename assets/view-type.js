(function () {
	viewType()
})();

function viewType() {
	const buttons = document.querySelectorAll('.layout-view-type--button');
	const handleClick = function (event) {
    const icons = event.target.querySelectorAll('svg');
    icons.forEach(icon => {
      icon.classList.toggle('hidden');
    });

    document.getElementById('ProductGridContainer').classList.toggle('layout-type--list');
	};

	buttons.forEach(button => button.addEventListener('click', handleClick));
}
