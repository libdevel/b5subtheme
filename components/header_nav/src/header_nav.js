(function (Drupal, once) {
  Drupal.behaviors.mainMenu = {
    attach: function (context) {
      const desktopBreakpoint = 768;

      function setupDropdownBehavior(navElement) {
        navElement.querySelectorAll('.navbar-nav .dropdown').forEach(item => {
          const link = item.querySelector('.nav-link.dropdown-toggle');
          const arrow = item.querySelector('.dropdown-arrow svg');
          const dropdownMenu = item.querySelector('.dropdown-menu');

          // Add event listeners to the dropdown menu items.
          if (link && arrow && dropdownMenu) {
            item.addEventListener('mouseenter', () => {
              if (window.innerWidth >= desktopBreakpoint) openDropdown(item);
            });

            item.addEventListener('mouseleave', () => {
              if (window.innerWidth >= desktopBreakpoint) closeDropdown(item);
            });

            link.addEventListener('click', e => {
              window.location.href = link.getAttribute('href');
            });

            arrow.addEventListener('click', e => {
              e.preventDefault();
              toggleDropdown(item);
            });

            arrow.addEventListener('keyup', e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                toggleDropdown(item);
              }
            });
          }
        });
      }

      /**
       * Open a dropdown menu.
       *
       * @param {HTMLElement} item - The dropdown menu item to close.
       */
      function openDropdown(item) {
        // Open the Dropdown.
        item.classList.add('show');
        item.querySelector('.dropdown-menu').style.cssText = 'max-height: 1200px; opacity: 1;';

        // Rotate dropdown arrow and update aria-expanded attribute.
        let arrow = item.querySelector('.dropdown-arrow svg');
        arrow.style.transform = 'rotate(180deg)';
        arrow.setAttribute('aria-expanded', 'true');

        // Update aria-expanded attribute on the link.
        let link = item.querySelector('.link-container .nav-link');
        link.setAttribute('aria-expanded', 'true');

      }

      /**
       * Closes a dropdown menu.
       *
       * @param {HTMLElement} item - The dropdown menu item to close.
       */
      function closeDropdown(item) {
        // Close the Dropdown.
        item.classList.remove('show');
        item.querySelector('.dropdown-menu').style.cssText = 'max-height: 0; opacity: 0;';

        // Rotate dropdown arrow and update aria-expanded attribute.
        let arrow = item.querySelector('.dropdown-arrow svg');
        arrow.style.transform = 'rotate(0deg)';
        arrow.setAttribute('aria-expanded', 'false');

        // Update aria-expanded attribute on the link.
        let link = item.querySelector('.link-container .nav-link');
        link.setAttribute('aria-expanded', 'false');
      }

      /**
       * Toggle the current dropdown menu.
       *
       * @param {HTMLElement} item - The dropdown menu item to close.
       */
      function toggleDropdown(item) {
        if(item.classList.contains('show')) {
          closeDropdown(item);
        } else {
          openDropdown(item);
        }
      }

      // Keeping the #mainMenuNav id to support psul_theme template.
      once('psul-theme-mainMenuNav', '.main-menu-nav', context).forEach((menu) => {
        setupDropdownBehavior(menu);
      });

    }
  };
})(Drupal, once);
