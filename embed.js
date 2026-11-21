(function() {
  function initPhoenixWidget() {
    var containers = document.querySelectorAll('.phoenix-booking-widget, [data-phoenix-booking]');
    containers.forEach(function(container) {
      if (container.getAttribute('data-phoenix-loaded')) return;
      container.setAttribute('data-phoenix-loaded', 'true');

      var isMobile = window.innerWidth <= 600 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

      var iframe = document.createElement('iframe');
      iframe.src = 'https://madjuls.github.io/phoenix-booking/';
      iframe.style.width = '100%';
      iframe.style.minHeight = isMobile ? '860px' : '620px';
      iframe.style.height = isMobile ? '860px' : '620px';
      iframe.style.border = 'none';
      iframe.style.overflow = 'hidden';
      iframe.style.display = 'block';
      iframe.style.transition = 'height 0.25s ease';
      iframe.scrolling = 'no';
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'geolocation');

      container.appendChild(iframe);

      window.addEventListener('message', function(e) {
        if (e.data && (e.data.type === 'carrd-resize' || e.data.frameHeight)) {
          var h = e.data.height || e.data.frameHeight;
          if (h && iframe) {
            iframe.style.height = (h + 20) + 'px';
            iframe.style.minHeight = (h + 20) + 'px';
          }
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPhoenixWidget);
  } else {
    initPhoenixWidget();
  }
})();
