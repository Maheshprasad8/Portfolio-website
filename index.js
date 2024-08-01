document.getElementById('sidebar-icon').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
    
    var mainContent = document.querySelector('main');
    var footerContent = document.querySelector('footer');
    mainContent.style.marginLeft = sidebar.classList.contains('active') ? '250px' : '0';
    footerContent.style.marginLeft = sidebar.classList.contains('active') ? '250px' : '0';
});

document.getElementById('cancel-button').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('active');
    
    var mainContent = document.querySelector('main');
    var footerContent = document.querySelector('footer');
    mainContent.style.marginLeft = '0';
    footerContent.style.marginLeft = '0';
});
