const warningModal = document.getElementById('warningModal'); // Modal
const dismissModal = document.getElementById('dismissModal'); // Close button

dismissModal.addEventListener('click', () => {
    warningModal.style.display = 'none'; // Hide the modal
});
