document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function() {
      document.querySelectorAll('.navbar a').forEach(el => el.classList.remove('active'));
      this.classList.add('active');
    });
  });